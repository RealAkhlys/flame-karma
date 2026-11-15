import {access, readFile} from 'node:fs/promises';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const assets=path.join(root,'dist','assets');
const readJSON=async name=>JSON.parse(await readFile(path.join(assets,name),'utf8'));
const failures=[];
const assert=(condition,message)=>{if(!condition)failures.push(message);};

const catalog=await readJSON('experiment-catalog.json');
const knowledge=await readJSON(path.join('research','investigations.json'));
const tables=await readJSON(path.join('research','experimental-tables.json'));
const records=catalog.records??[];
const ids=new Set();

assert(catalog.schemaVersion===1,'experiment-catalog.json schemaVersion 1 olmalı');
assert(records.length>0,'Deney kataloğu boş olamaz');
for(const record of records){
 assert(record.id&&!ids.has(record.id),`Tekil olmayan veya boş kayıt kimliği: ${record.id??'(boş)'}`);
 ids.add(record.id);
 for(const field of ['title','experiment','material','platform'])assert(Boolean(record[field]),`${record.id}: ${field} eksik`);
 assert(/^https:\/\/psi\.nasa\.gov\//.test(record.sourceUrl??''),`${record.id}: doğrudan NASA PSI kaynağı eksik`);
 assert(Array.isArray(record.conditions)&&record.conditions.length>0,`${record.id}: koşul özeti eksik`);
 assert(Array.isArray(record.limitations)&&record.limitations.length>0,`${record.id}: sınırlama açıklaması eksik`);
 for(const filename of [record.telemetryFile,record.media?.file].filter(Boolean)){
  try{await access(path.join(assets,filename));}catch{failures.push(`${record.id}: varlık bulunamadı: ${filename}`);}
 }
}

assert(String(knowledge.schemaVersion)==='1.0','investigations.json schemaVersion 1.0 olmalı');
assert(knowledge.investigations?.length===23,'Araştırma kartı sayısı 23 olmalı');
assert(new Set(knowledge.investigations.map(item=>item.psiAccession).filter(Boolean)).size===19,'Benzersiz PSI kaydı sayısı 19 olmalı');
assert(tables.datasets?.length===9,'Deney tablosu sayısı 9 olmalı');
assert(tables.datasets?.reduce((sum,dataset)=>sum+dataset.recordCount,0)===671,'Kaynak satırı sayısı 671 olmalı');

if(failures.length){
 console.error(`Veri doğrulaması başarısız (${failures.length}):\n- ${failures.join('\n- ')}`);
 process.exitCode=1;
}else{
 console.log(`Veri doğrulandı: ${records.length} 3D kayıt, ${knowledge.investigations.length} araştırma kartı, ${tables.datasets.length} deney tablosu.`);
}
