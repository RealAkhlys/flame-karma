export const fold = value => String(value ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ı/g, 'i');
export const purposeNames = {all:'All Investigations',prevention:'Flammability & Prevention',detection:'Smoke Detection',suppression:'Suppression & Quenching',extinction:'Extinction Boundaries','model-validation':'Model Validation'};
const focusNames={...purposeNames,'pre-fire-signatures':'Pre-Fire Smoke Signatures','detection-instrumentation':'Detection Instrumentation','material-comparison':'Material Comparison','combustion-efficiency':'Combustion Efficiency','active-control':'Active Flame Control',soot:'Soot Formation',stability:'Flame Stability'};
export const kindNames = {'test-record':'Test Record','test-condition-record':'Test Condition','aged-measurement-record':'Aged Measurement','condition-template':'Condition Template','configuration-envelope':'Configuration Envelope','sample-summary':'Sample Summary','flow-media-reference':'Flow Video Reference','source-note':'Source Note','maintenance-log':'Maintenance Log'};
const synonyms = {smoke:'smoke',oxygen:'oxygen',flow:'flow',fan:'flow',suppression:'suppression',detection:'detection',ignition:'ignition',droplet:'droplet',fabric:'fabric',nitrogen:'nitrogen'};
const tokens = q => [...new Set(fold(q).split(/\s+/).filter(Boolean).map(t => synonyms[t] || t))];
export function rankStudies(studies,{query='',purpose='all'}={}) {
 const terms=tokens(query);
 return studies.map(study=>{
  const haystack=fold([study.name,study.objective,...study.fuels,...study.geometry,...study.conditions,...study.measurements,study.relevance,study.facility,...study.focus.map(p=>purposeNames[p]||p)].join(' '));
  const matches=terms.filter(t=>haystack.includes(t));
  const exactPurpose=purpose!=='all'&&study.focus.includes(purpose);
  const relatedPurpose=purpose==='detection'&&study.focus.includes('detection-instrumentation');
  const score=matches.length*10+(exactPurpose?30:0)+(study.priority==='core'?2:0);
  const reasons=[...(exactPurpose?[`Directly matches ${purposeNames[purpose]} objective`]:[]),...(relatedPurpose?['Complementary research supporting detection instrumentation']:[]),...(matches.length?['Text match: '+matches.join(', ')]:[]),...(!terms.length&&purpose==='all'?[study.priority==='core'?'Core investigation for flight fire safety':'Complementary investigation']:[])];
  return {study,score,reasons,relatedPurpose};
 }).filter(r=>(purpose==='all'||r.study.focus.includes(purpose)||r.relatedPurpose)&&(!terms.length||r.reasons.some(x=>x.startsWith('Text match')))).sort((a,b)=>b.score-a.score||a.study.name.localeCompare(b.study.name));
}
export function filterRows(dataset,{query='',kind='all',field='',min='',max='',includeUnknown=false}={}) {
 const q=fold(query),hasRange=field&&(min!==''||max!=='');
 return dataset.records.filter(r=>{
  if(kind!=='all'&&r.kind!==kind)return false;
  if(q&&!fold(r.raw.join(' ')).includes(q))return false;
  if(hasRange){const n=r.values[field],exact=['numeric','numeric-unit-explicit'].includes(r.qualifiers[field]);if(typeof n!=='number'||!exact)return includeUnknown;if(min!==''&&n<Number(min))return false;if(max!==''&&n>Number(max))return false;}
  return true;
 });
}
export function comparisonSummary(studies){
 const shared=studies.length?studies[0].focus.filter(f=>studies.every(s=>s.focus.includes(f))):[];
 return {shared:shared.map(f=>focusNames[f]||f),differentFields:['fuels','geometry','conditions','measurements','facility','gravity'].filter(k=>new Set(studies.map(s=>JSON.stringify(s[k]))).size>1)};
}
export function csvCell(value){let s=String(value??'');if(/^[=+@\t\r]/.test(s)||(/^\-/.test(s)&&!/^\-\d+(\.\d+)?$/.test(s)))s="'"+s;return '"'+s.replaceAll('"','""')+'"';}
export function exportRows(dataset,records){return [['source_accession','source_row','record_kind',...dataset.fields.flatMap(f=>[f.key,f.key+'__qualifier'])].map(csvCell).join(','),...records.map(r=>[dataset.accession,r.sourceRow,r.kind,...dataset.fields.flatMap(f=>[r.values[f.key],r.qualifiers[f.key]])].map(csvCell).join(','))].join('\r\n');}
