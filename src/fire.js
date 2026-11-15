import { createFlameVisual } from './flame-visual.js';
import { loadCatalog, escapeHTML as esc, conditionValue } from './catalog.js';
import * as THREE from 'three';

const $=id=>document.getElementById(id);
const fmt=(n,d=1)=>Number.isFinite(n)?n.toLocaleString('en-US',{maximumFractionDigits:d,minimumFractionDigits:d}):'—';
const time=t=>`${Math.floor(t/60).toString().padStart(2,'0')}:${Math.floor(t%60).toString().padStart(2,'0')}`;
const colors=['#214E3C','#A66E28','#1D4ED8','#6B4E71'];

export function createFireExperience({scene,enter,hidePanels,travelTo,onMode,stopMovement,openResearch}){
 let active=false,playing=false,freeRoam=false,t=0,speed=5,data=null,record=null,rows=[],charts=[],lastRow=-1,request=0,records=[],currentRow=null;
 const source=new THREE.Vector3(-.18,-.22,-.33),placement=source.clone();
 let placementLabel='Center · Main Science Aisle';

 const visual=createFlameVisual(scene,source),sampleGroup=new THREE.Group();
 scene.add(sampleGroup);sampleGroup.visible=false;

 const tray=new THREE.Mesh(new THREE.BoxGeometry(.7,.014,.35),new THREE.MeshStandardMaterial({color:0x3d4c53,metalness:.65,roughness:.4}));
 tray.position.y=-.025;sampleGroup.add(tray);

 const sampleMat=new THREE.MeshStandardMaterial({color:0xe4d6ba,roughness:.85,metalness:0});
 const sample=new THREE.Mesh(new THREE.BoxGeometry(.52,.008,.22),sampleMat);
 sampleGroup.add(sample);

 const wick=new THREE.Mesh(new THREE.CylinderGeometry(.012,.012,.12,14),new THREE.MeshStandardMaterial({color:0xd8c7a7}));
 wick.position.y=.06;sampleGroup.add(wick);

 const heater=new THREE.Mesh(new THREE.TorusGeometry(.045,.004,6,32),new THREE.MeshStandardMaterial({color:0x665f55,emissive:0xd65214,emissiveIntensity:0,metalness:.6,roughness:.5}));
 heater.rotation.x=Math.PI/2;heater.position.y=.02;sampleGroup.add(heater);

 const catalog={open:focus=>{playing=false;stopMovement();$('record-metadata').querySelector('video')?.pause();openResearch(focus);}};

 // Free Roam button toggle
 const freeRoamBtn=$('free-roam-toggle');
 if(freeRoamBtn){
   freeRoamBtn.onclick=()=>{
     freeRoam=!freeRoam;
     freeRoamBtn.classList.toggle('active',freeRoam);
     freeRoamBtn.innerHTML=freeRoam?
       `<svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3v18M3 12h18"/></svg> Show Combustion Tray`:
       `<svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3 9 5v8l-9 5-9-5V8l9-5Zm0 10v8M3 8l9 5 9-5"/></svg> Free Walk Mode`;
     updateVisibility();
     $('fire-panel').hidden=freeRoam;
     $('fire-timeline').hidden=freeRoam||!data;
   };
 }

 $('experiment-select').onchange=e=>open(records.find(r=>r.id===e.target.value));

 const tabs=['data','conditions','source'];
 function setTab(name){
   for(const tab of tabs){
     const b=$('tab-'+tab);
     if(b){
       b.setAttribute('aria-selected',String(tab===name));
       b.tabIndex=tab===name?0:-1;
     }
     const panel=$('record-'+tab);
     if(panel)panel.hidden=tab!==name;
   }
   if(name!=='data')$('record-metadata').querySelector('video')?.pause();
 }

 for(const name of tabs){
   const btn=$('tab-'+name);
   if(btn){
     btn.onclick=()=>setTab(name);
     btn.onkeydown=e=>{
       if(!['ArrowRight','ArrowLeft'].includes(e.key))return;
       e.preventDefault();
       const next=tabs[(tabs.indexOf(name)+(e.key==='ArrowRight'?1:2))%3];
       setTab(next);
       $('tab-'+next)?.focus();
     };
   }
 }

 $('fire-close').onclick=()=>{
   // Rather than breaking the 3D lab, closing the panel enables clean free walk mode
   $('fire-panel').hidden=true;
 };

 $('fire-play').onclick=()=>{
   if(!data)return;
   if(t>=data.sampling.endElapsedS)t=0;
   playing=!playing;
   render();
 };

 $('fire-reset').onclick=()=>{playing=false;t=0;render();};
 $('fire-speed').onchange=e=>speed=Number(e.target.value);
 $('fire-range').oninput=e=>{t=Number(e.target.value);playing=false;render();};
 $('fire-focus').onclick=focusCamera;
 $('fire-visual-toggle').onchange=updateVisibility;

 $('placement-select').onchange=e=>{
   const choices={center:[-.18,-.22,-.33],aft:[-1.75,-.22,-.33],forward:[1.75,-.22,-.33]};
   if(choices[e.target.value]){
     placement.fromArray(choices[e.target.value]);
     placementLabel=e.target.selectedOptions[0].text;
     applyPlacement();
     focusCamera();
   }
 };

 $('fire-download').onclick=()=>{
   if(!data)return;
   const lines=[data.columns.map(c=>c.key).join(','),...rows.map(r=>r.join(','))];
   const url=URL.createObjectURL(new Blob([lines.join('\n')],{type:'text/csv;charset=utf-8'}));
   const a=document.createElement('a');a.href=url;a.download=`${record.id}-source-measurements.csv`;a.click();
   setTimeout(()=>URL.revokeObjectURL(url),1000);
 };

 function applyPlacement(){
   visual.group.position.copy(placement).sub(source);
   sampleGroup.position.copy(placement);
   $('context-caption').textContent=`${placementLabel} · Active Simulation`;
   $('placement-select').title=placementLabel;
 }

 function focusCamera(){
   travelTo([placement.x-.85,.22,.35],[placement.x,placement.y+.07,placement.z]);
 }

 function updateVisibility(){
   const show=active&&!freeRoam&&$('fire-visual-toggle').checked;
   visual.group.visible=show&&record?.id==='saffire-i-sample1';
   sampleGroup.visible=show&&!!record&&record.id!=='saffire-i-sample1';
 }

 async function ensureCatalog(){
   if(!records.length){
     records=await loadCatalog();
     $('experiment-select').replaceChildren(...records.map(r=>new Option(`${r.experiment} — ${r.title}`,r.id)));
   }
 }

 async function open(selected){
  const token=++request;
  active=true;
  playing=false;
  enter();
  hidePanels();
  onMode(true);
  document.body.classList.remove('has-telemetry','expanded-scene');
  $('fire-panel').hidden=freeRoam;
  $('fire-context').hidden=false;
  $('fire-timeline').hidden=true;
  $('lab-button')?.setAttribute('aria-pressed','true');
  $('fire-loading').hidden=false;
  $('fire-loading').textContent='Loading calibrated NASA flight telemetry…';
  $('fire-content').hidden=true;
  $('record-metadata').hidden=true;
  $('fire-download').hidden=true;
  $('record-metadata').querySelector('video')?.pause();
  data=null;rows=[];currentRow=null;lastRow=-1;t=0;
  updateVisibility();
  setTab('data');

  try{
    await ensureCatalog();
    if(token!==request)return;
    record=selected??record??records[0];
    $('experiment-select').value=record.id;
    $('record-title').textContent=record.experiment;
    $('context-title').textContent=`${record.material} · ${record.experiment}${record.testId?' / '+record.testId:''}`;

    applyPlacement();
    configureSample();
    updateVisibility();
    renderConditions();
    renderSource();
    focusCamera();

    if(record.telemetryFile){
      const response=await fetch('./assets/'+record.telemetryFile);
      if(!response.ok)throw Error('Could not load sensor telemetry JSON');
      const result=await response.json();
      if(token!==request)return;
      if(result.schemaVersion!==1||!result.rows?.length)throw Error('Corrupted sensor telemetry schema');
      data=result;
      rows=data.rows;
      $('fire-range').max=data.sampling.endElapsedS;
      buildCharts();
      buildEvents();
      $('fire-content').hidden=false;
      if(!freeRoam)$('fire-timeline').hidden=false;
      document.body.classList.add('has-telemetry');
      $('fire-download').hidden=false;
      $('record-intro').textContent=record.id==='same-r55'?
        'Calibrated voltage readouts from spacecraft ionization and photoelectric smoke detectors with stir-fan sequence.':
        'Real-time thermocouple arrays and radiometer channels during SIBAL zero-gravity flame spread.';
      renderSource();
      render();
    }else{
      renderMetadata();
      $('record-metadata').hidden=false;
    }
    $('fire-loading').hidden=true;
  }catch(e){
    if(token!==request)return;
    console.error('Experiment loading error:',e);
    $('fire-loading').replaceChildren(document.createTextNode('Unable to load flight telemetry. '));
    const b=document.createElement('button');
    b.textContent='Retry';
    b.className='secondary';
    b.onclick=()=>open(selected);
    $('fire-loading').append(b);
    $('fire-loading').hidden=false;
  }
 }

 function close(){
   ++request;
   active=false;
   playing=false;
   onMode(false);
   document.body.classList.remove('has-telemetry','expanded-scene');
   updateVisibility();
   $('fire-panel').hidden=true;
   $('fire-timeline').hidden=true;
   $('fire-context').hidden=true;
   $('record-metadata').querySelector('video')?.pause();
 }

 function configureSample(){
   const candle=record.geometryType==='candle',same=record.id==='same-r55';
   sample.visible=!same;
   wick.visible=same||candle;
   heater.visible=same;
   sample.geometry.dispose();
   sample.geometry=candle?new THREE.CylinderGeometry(.055,.055,.15,40):new THREE.BoxGeometry(.52,.008,.22);
   sample.position.y=candle?.075:0;
   wick.position.y=candle?.18:.06;
   sampleMat.color.set(record.material==='PMMA'?0xbcd4da:record.material==='Nomex III'?0xb8ac89:0xe4d6ba);
   heater.material.emissiveIntensity=0;
 }

 function renderConditions(){
   $('condition-list').innerHTML=`
     <div><dt>Flight Environment</dt><dd>${esc(record.platform)}</dd></div>
     <div><dt>Fuel Material</dt><dd>${esc(record.materialOriginal)}</dd></div>
     ${record.conditions.filter(c=>!['Numune','Malzeme','Sample','Material'].includes(c.label)).map(c=>`<div><dt>${esc(c.label)}</dt><dd>${esc(conditionValue(c))}</dd></div>`).join('')}
   `;
 }

 function renderSource(){
   const s=data?.source??record.source;
   $('source-content').innerHTML=`
     <span class="evidence-badge ${record.kind==='telemetry'?'series':'metadata'}">${record.kind==='telemetry'?'TIME-SERIES TELEMETRY':'EXPERIMENTAL TABLE'}</span>
     <p>${esc(record.evidence.description)}</p>
     <a href="${esc(record.sourceUrl)}" target="_blank" rel="noopener noreferrer">NASA PSI Investigation Record ↗</a>
     ${s?.downloadUrl?`<a href="${esc(s.downloadUrl)}" target="_blank" rel="noopener noreferrer">Source Raw Data File ↗</a>`:''}
     <h3>Scientific Boundaries & Limitations</h3>
     <ul>${record.limitations.map(l=>`<li>${esc(l)}</li>`).join('')}</ul>
     ${s?`<details><summary>Checksum & Provenance</summary><code>${esc(s.fileName)}</code>${s.sheet?`<p>Sheet: ${esc(s.sheet)}</p>`:''}${s.csvRow?`<p>CSV Row: ${s.csvRow}</p>`:''}${s.sha256?`<p>SHA-256</p><code>${s.sha256}</code>`:''}</details>`:''}
   `;
 }

 function renderMetadata(){
   const video=record.media;
   $('record-metadata').innerHTML=`
     <span class="evidence-badge ${video?'video':'metadata'}">${video?'FLIGHT VIDEO ARCHIVE':'TEST CONDITIONS'}</span>
     ${video?`<video controls playsinline preload="metadata" aria-label="${esc(record.title)} NASA experiment video" src="./assets/${esc(video.file)}"></video><p class="caption">${esc(video.caption??'Archival camera footage from the experiment.')}</p>`:`<div class="sample-card"><span class="sample-symbol ${record.geometryType}"></span><h3>${esc(record.material)}</h3><p>${esc(record.materialOriginal)}</p></div>`}
     <p class="data-note">This investigation includes discrete test matrix points. 3D view illustrates sample geometry and relative scale inside US Lab.</p>
     <dl class="condition-list">${record.conditions.map(c=>`<div><dt>${esc(c.label)}</dt><dd>${esc(conditionValue(c))}</dd></div>`).join('')}</dl>
   `;
 }

 function buildCharts(){
   charts=record.chartKeys.map((key,i)=>{
     const index=data.columns.findIndex(c=>c.key===key);
     return {...data.columns[index],index,color:colors[i%colors.length],digits:key==='stsDetectorV'?6:key==='issScatterV'?3:key.endsWith('Pct')?3:1};
   });
   $('fire-charts').replaceChildren();
   for(const c of charts){
     const [lo,hi]=c.originalRange;
     c.lo=lo;c.range=hi-lo||1;
     const points=rows.map(r=>`${(r[0]/data.sampling.endElapsedS*264).toFixed(2)},${(55-(r[c.index]-lo)/c.range*48).toFixed(2)}`).join(' ');
     const card=document.createElement('div');
     card.className='telemetry-card';
     card.style.setProperty('--trace',c.color);
     card.innerHTML=`
       <div class="telemetry-heading"><span>${esc(c.label)}</span><strong>—</strong></div>
       <svg viewBox="0 0 264 62" role="img" aria-label="${esc(c.label)} time series">
         <path d="M0 7H264M0 31H264M0 55H264" class="chart-grid"/>
         <polyline points="${points}" class="chart-line"/>
         <line class="chart-cursor" x1="0" x2="0" y1="0" y2="62"/>
         <circle class="chart-dot" r="3" cx="0" cy="55"/>
       </svg>
       <div class="chart-axis">
         <span>${fmt(lo,c.digits)} – ${fmt(hi,c.digits)} ${esc(c.unit)}</span>
         <span>0–${Math.ceil(data.sampling.endElapsedS)} s</span>
       </div>
     `;
     $('fire-charts').append(card);
     c.element=card;
   }
 }

 function buildEvents(){
   const events=record.id==='same-r55'?[
     {time:0,label:'Initial baseline'},
     {time:398,label:'Wire heater on'},
     {time:452,label:'Heater off'},
     {time:498,label:'Stir fan active'},
     {time:506,label:'Stir fan off'}
   ]:[
     {time:0,label:'Ignition standby'},
     {time:60.027,label:'Igniter hot wire'},
     {time:120,label:'Steady flame spread'},
     {time:480.054,label:'Tunnel fan shutdown'}
   ];
   $('timeline-events').replaceChildren(...events.map(e=>{
     const b=document.createElement('button');
     b.textContent=`${e.time?Math.round(e.time)+'s · ':''}${e.label}`;
     b.onclick=()=>{playing=false;t=e.time;render();};
     return b;
   }));
 }

 function render(){
   if(!data)return;
   $('fire-range').value=t;
   $('fire-time').textContent=`${time(t)} / ${time(data.sampling.endElapsedS)}`;
   $('fire-play').textContent=playing?'Ⅱ Pause':'▶ Play';
   let lo=0,hi=rows.length-1;
   while(lo<hi){const m=(lo+hi)>>1;if(rows[m][0]<t)lo=m+1;else hi=m;}
   let index=lo;
   if(lo>0&&Math.abs(rows[lo-1][0]-t)<Math.abs(rows[lo][0]-t))index=lo-1;
   const row=rows[index];currentRow=row;

   $('fire-phase').textContent=record.id==='same-r55'?
     (row[5]?'Heater Active':row[6]?'Mixing Fan Active':row[7]?'Sampling Run Active':'Post-test Purge'):
     (t<60.027?'Pre-ignition Airflow':t<68.013?'Igniter Coil Firing':row[8]===0?'Ventilation Quenched':'Active Microgravity Flame');

   for(const c of charts){
     const x=t/data.sampling.endElapsedS*264;
     c.element.querySelector('.chart-cursor').setAttribute('x1',x);
     c.element.querySelector('.chart-cursor').setAttribute('x2',x);
     c.element.querySelector('.chart-dot').setAttribute('cx',row[0]/data.sampling.endElapsedS*264);
     c.element.querySelector('.chart-dot').setAttribute('cy',55-(row[c.index]-c.lo)/c.range*48);
     if(lastRow!==index)c.element.querySelector('strong').textContent=`${fmt(row[c.index],c.digits)} ${c.unit}`;
   }

   if(lastRow!==index){
     const controls=record.id==='same-r55'?[
       ['Heater Relay',row[5]?'Engaged':'Standby'],
       ['Mixing Blower',row[6]?'Active':'Off'],
       ['Run Index',row[8]],
       ['STS Alarm Trigger',row[9]?'Active Alarm':'Nominal']
     ]:[
       ['Tunnel Velocity',fmt(row[6])+' cm/s'],
       ['Igniter Current',fmt(row[7],3)+' A'],
       ['Blower Power',row[8]===1?'Nominal Flow':'Zero-flow Shutdown']
     ];
     $('control-readings').innerHTML=controls.map(([k,v])=>`<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');
     $('fire-sample').textContent=`Telemetry Epoch: ${fmt(row[0],3)} s · CSV Row ${row[1]}`;
     lastRow=index;
   }
 }

 return {
   get active(){return active;},
   get status(){return {id:record?.id,time:t,playing,sourceRow:currentRow?.[1],placement:placement.toArray()};},
   close,
   openRecord:open,
   pause(){playing=false;stopMovement();$('record-metadata').querySelector('video')?.pause();},
   openCatalog:catalog.open,
   placeAt(center,title){
     placement.set(THREE.MathUtils.clamp(center[0],-2.2,2.2),-.22,THREE.MathUtils.clamp(center[2]*.3,-.33,.33));
     placementLabel=title+' Proximity';
     $('placement-select').value='custom';
     open();
   },
   update(dt){
     if(!active)return;
     if(playing&&!document.querySelector('dialog[open]')){
       t=Math.min(t+dt*speed,data?.sampling.endElapsedS??0);
       if(data&&t>=data.sampling.endElapsedS)playing=false;
       render();
     }
     if(record?.id==='saffire-i-sample1')visual.update(t);
     if(record?.id==='same-r55')heater.material.emissiveIntensity=currentRow?.[5] ? .65 : 0;
   }
 };
}
