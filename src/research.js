import {escapeHTML as e,loadCatalog} from './catalog.js';
import {rankStudies,purposeNames,kindNames,filterRows,comparisonSummary,exportRows} from './research-model.js';
import {renderMissionAnalysis} from './insights.js';

const $=id=>document.getElementById(id);
const join=a=>Array.isArray(a)?a.join(' · '):a;
const link=(url,title)=>`<a href="${e(url)}" target="_blank" rel="noopener noreferrer">${e(title)} ↗</a>`;
const list=a=>`<ul>${a.map(x=>`<li>${e(x)}</li>`).join('')}</ul>`;
const opt=(value,label,selected)=>`<option value="${e(value)}" ${selected===value?'selected':''}>${e(label)}</option>`;
const gravityLabel={microgravity:'Microgravity','simulated-lunar-gravity':'Simulated Lunar Gravity','planned-lunar-surface-gravity':'Planned Lunar Surface'};

const official=[
  ['NASA PSI · Combustion Data Repository','https://psi.nasa.gov/physci/repo/search?q=combustion','Data Repository'],
  ['NASA Glenn · Combustion Science','https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/','Research Overview'],
  ['NASA Combustion Science Video Archive','https://www.youtube.com/watch?v=W1oXykoz9zg','Video Archive'],
  ["A Researcher's Guide to Combustion Science",'https://www.nasa.gov/missions/station/a-researchers-guide-to-combustion-science/','Flight Guide'],
  ['Apollo 1 Command Module Fire Review','https://sma.nasa.gov/sma-disciplines/accllp/apollo-1','Flight Safety History'],
  ['Apollo 13 Cryogenic Tank Anomaly','https://sma.nasa.gov/sma-disciplines/accllp/apollo-13','Flight Safety History'],
  ['Mir Space Station Kvant-1 Solid Oxygen Generator Fire','https://www.nasa.gov/history/25-years-ago-fire-aboard-space-station-mir/','Flight Safety History'],
  ['Firefighter Lightweight Breathing Apparatus','https://spinoff.nasa.gov/node/9582','Earth Spin-Off'],
  ['Spacecraft Optical Smoke Particle Sensor','https://spinoff.nasa.gov/node/9407','Earth Spin-Off'],
  ['Thermal & Flame-Resistant PBI/Nomex Textiles','https://spinoff.nasa.gov/node/9918','Earth Spin-Off']
];

const tableNotes={
  'PSI-25':'129 test records. Fan and blower metrics reflect discrete experimental steps rather than uniform duct velocity.',
  'PSI-26':'121 test runs and 1 maintenance log. Replicated specimen IDs represent iterative test iterations rather than independent fuels.',
  'PSI-101':'67 environmental test runs and 42 aged insulation rows. Not 109 isolated fire scenarios.',
  'PSI-102':'8 specimen / test condition matrices; concise protocol templates rather than full time-resolved flight telemetry.',
  'PSI-69':'274 test rows across multiple fuel mixtures. Differentiates extinction, disruption, and completion. Preserves un-interpolated raw data.',
  'PSI-68':'8 configuration parameter envelopes across fuel droplets and inert dilution atmospheres.',
  'PSI-98':'2 summary specimen records and 2 calibrated flow telemetry video references.',
  'PSI-99':'9 specimen records, 2 flow video archives, and 4 laboratory annotation rows. CO2 concentration derived from gas chromatography.',
  'PSI-100':'2 specimen summaries. Original units and quantitative metrics preserved in source format.'
};

export function createResearchWorkspace({onExplore,onReplay,onOpen,container}){
 const host=container||$('rw-host');
 let knowledge,tables,replays=[],loading,tab='mission',query='',purpose='all',habitat='orbit',studyId=null,compare=new Set(),compareOpen=false,cleanupView=()=>{};
 let datasetId='PSI-69',rowQuery='',rowKind='all',field='',min='',max='',includeUnknown=false,page=0,rowId=null,rowCompare=new Set(),showRowCompare=false;
 const pageSize=20;

 host.className='research-workspace inline-workspace';
 host.setAttribute('aria-label','Flame in Freefall Research Center');
 host.innerHTML=`
   <nav class="rw-tabs" aria-label="Research Subsections">
     ${[['mission','Mission Analysis'],['studies','PSI Investigations'],['data','Experiment CSV Tables'],['hardware','Hardware & Safety'],['sources','References']].map(([id,name])=>`<button data-tab="${id}" aria-pressed="${id===tab}">${name}</button>`).join('')}
     <span>NASA Physical Sciences Informatics Archive</span>
   </nav>
   <div id="rw-body"><p class="rw-loading" role="status">Loading NASA Combustion Archives…</p></div>
   <div id="rw-status" class="rw-status" role="status"></div>
 `;

 host.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>{tab=b.dataset.tab;render();host.scrollTop=0;});

 let statusTimer;
 const announce=s=>{clearTimeout(statusTimer);$('rw-status').textContent=s;statusTimer=setTimeout(()=>{$('rw-status').textContent='';},5000);};
 const currentDataset=()=>tables.datasets.find(d=>d.accession===datasetId);

 function download(name,body,type='application/json'){
   const url=URL.createObjectURL(new Blob([body],{type})),a=document.createElement('a');
   a.href=url;a.download=name;a.click();
   setTimeout(()=>URL.revokeObjectURL(url),1000);
   announce(name+' downloaded successfully.');
 }

 async function ready(){
   if(knowledge)return;
   return loading??=(async()=>{
     const [k,d,r]=await Promise.all([
       fetch('./assets/research/investigations.json'),
       fetch('./assets/research/experimental-tables.json'),
       loadCatalog()
     ]);
     if(!k.ok||!d.ok)throw Error('Failed to load scientific resources');
     knowledge=await k.json();
     tables=await d.json();
     replays=r;
   })().catch(error=>{loading=null;throw error;});
 }

 async function open(focus){
   if(typeof focus==='string'&&purposeNames[focus]){purpose=focus;tab='studies';studyId=null;}
   onOpen?.();
   try{
     await ready();
     render();
   }catch{
     $('rw-body').innerHTML='<div class="rw-empty"><h1>Unable to load NASA resources.</h1><p>Check network connection and retry.</p><button id="rw-retry">Retry</button></div>';
     $('rw-retry').onclick=()=>open(focus);
   }
 }

 function render(){
   if(!knowledge)return;
   cleanupView();cleanupView=()=>{};
   host.querySelectorAll('[data-tab]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.tab===tab)));
   ({mission:renderMission,studies:renderStudies,data:renderData,hardware:renderHardware,sources:renderSources})[tab]?.();
 }

 function renderMission(){
   renderMissionAnalysis({
     root:$('rw-body'),
     knowledge,
     tables,
     onOpenStudy:id=>{query='';purpose='all';studyId=id;tab='studies';render();setTimeout(()=>$('study-'+id)?.scrollIntoView({block:'start'}),0);},
     onOpenData:toData
   });
 }

 function toData(accession){
   datasetId=accession;rowQuery='';rowKind='all';field='';min='';max='';page=0;rowId=null;rowCompare.clear();
   tab='data';render();host.scrollTop=0;
 }

 function heading(kicker,title,description){
   return `<div class="rw-pagehead"><span class="rw-kicker">${e(kicker)}</span><h1>${e(title)}</h1><p>${e(description)}</p></div>`;
 }

 function renderStudies(){
  $('rw-body').innerHTML=`
    <div class="rw-layout">
      <aside class="rw-sidebar">
        <span class="rw-kicker">SEARCH & CRITERIA</span>
        <h2>Explore Flight<br>Investigations</h2>
        <label for="rw-query">Experiment, material, or keyword</label>
        <input id="rw-query" type="search" placeholder="e.g. Kapton, smoke, SIBAL, droplet" value="${e(query)}">
        <label for="rw-purpose">Fire Safety Objective</label>
        <select id="rw-purpose">${Object.entries(purposeNames).map(([k,v])=>opt(k,v,purpose)).join('')}</select>
        <label for="rw-habitat">Habitat Mission Profile</label>
        <select id="rw-habitat">${[['orbit','Orbital Spacecraft / ISS'],['moon','Artemis Lunar Habitat'],['mars','Mars Surface Habitat'],['rover','Pressurized Surface Rover']].map(([k,v])=>opt(k,v,habitat)).join('')}</select>
        <button id="rw-reset" class="rw-text">Reset Filters ↺</button>
        <div class="rw-aside-note">
          <span class="rw-kicker">RANKING RATIONALE</span>
          <p>Matched against NASA mission objectives, peer-reviewed flight data, and experimental material flammability envelopes.</p>
        </div>
        <div class="rw-counts"><b>23</b> Curated Study Cards<br><b>19</b> Verified PSI Flight Investigations</div>
      </aside>
      <section class="rw-main">
        ${heading('EVIDENCE-GROUNDED COMBUSTION RESEARCH','From Spacecraft Data to Safety Protocols','Cross-examine fuel materials, microgravity atmospheric fractions, and sensor metrics directly derived from NASA flight experiments.')}
        <div class="rw-prompt-row">
          <button data-prompt="detection">How do we detect zero-g smoke?</button>
          <button data-prompt="suppression">What governs zero-g fire extinction?</button>
          <button data-prompt="prevention">Flame spread & airflow dynamics</button>
        </div>
        <div id="rw-habitat-note"></div>
        <div class="rw-results-heading"><span id="rw-result-count" role="status"></span><button id="rw-compare">Compare Studies · ${compare.size}</button></div>
        <div id="rw-comparison"></div>
        <div id="rw-study-list"></div>
        <p class="rw-footnote">ACME is an overarching multi-flight program; DAFT / DAFT-2 share accession records; LUCI and FM² are dedicated lunar gravity reference benchmarks.</p>
      </section>
    </div>
  `;

  $('rw-query').oninput=ev=>{query=ev.target.value;studyId=null;renderStudyList();};
  $('rw-purpose').onchange=ev=>{purpose=ev.target.value;studyId=null;renderStudyList();};
  $('rw-habitat').onchange=ev=>{habitat=ev.target.value;renderHabitat();};
  $('rw-reset').onclick=()=>{query='';purpose='all';renderStudies();};

  host.querySelectorAll('[data-prompt]').forEach(b=>b.onclick=()=>{purpose=b.dataset.prompt;query='';studyId=null;renderStudies();});
  $('rw-compare').onclick=()=>{compareOpen=!compareOpen;renderStudyCompare();};
  renderHabitat();
  renderStudyList();
 }

 function renderHabitat(){
   $('rw-habitat-note').innerHTML=habitat==='orbit'?
     '<p class="rw-context">Orbital Context · Low Earth Orbit microgravity conditions apply directly; does not certify flammability for unverified materials.</p>':
     '<div class="rw-scope"><strong>Direct extrapolation to partial gravity is unverified.</strong><p>Direct lunar or Martian partial-gravity combustion tables are not included. LUCI is a simulated lunar test, and FM² is planned lunar surface research.</p><button id="rw-lunar">View LUCI & FM² Lunar Context →</button></div>';
   if($('rw-lunar'))$('rw-lunar').onclick=()=>{
     purpose='all';query='';$('rw-query').value='';$('rw-purpose').value='all';studyId='luci';renderStudyList();$('study-luci')?.scrollIntoView({block:'center'});
   };
 }

 function renderStudyList(){
  const ranked=rankStudies(knowledge.investigations,{query,purpose});
  $('rw-result-count').textContent=`${ranked.length} investigations matched`;
  $('rw-study-list').innerHTML=ranked.length?ranked.map(({study:s,reasons},i)=>`
    <article id="study-${s.id}" class="rw-study ${studyId===s.id?'is-open':''}">
      <div class="rw-study-number">${String(i+1).padStart(2,'0')}</div>
      <div class="rw-study-content">
        <div class="rw-study-meta">
          <span>${e(s.family)}</span>
          <span>${e(gravityLabel[s.gravity]||s.gravity)}</span>
          ${s.evidenceStatus.includes('planned')?'<span class="rw-tag-warm">Planned Flight Investigation</span>':''}
        </div>
        <button class="rw-study-title" data-study="${s.id}" aria-expanded="${studyId===s.id}">
          <h2>${e(s.name)}</h2>
          <span>${studyId===s.id?'−':'↗'}</span>
        </button>
        <p>${e(s.objective)}</p>
        <div class="rw-tags">${s.fuels.slice(0,3).map(f=>`<span>${e(f)}</span>`).join('')}</div>
        <p class="rw-match">${e(reasons.join(' · '))}</p>
        <div class="rw-study-actions">
          <label><input type="checkbox" data-choose="${s.id}" ${compare.has(s.id)?'checked':''}> Compare</label>
          <button data-study="${s.id}">Summary & Provenance ${studyId===s.id?'↑':'↓'}</button>
        </div>
        ${studyId===s.id?studyDetail(s):''}
      </div>
    </article>
  `).join(''):'<div class="rw-empty"><h2>No investigations match this query.</h2><p>Try clearing filters or search for terms like "smoke", "PMMA", or "airflow".</p></div>';

  host.querySelectorAll('[data-study]').forEach(b=>b.onclick=()=>{studyId=studyId===b.dataset.study?null:b.dataset.study;renderStudyList();});
  host.querySelectorAll('[data-choose]').forEach(b=>b.onchange=()=>{
    if(b.checked&&compare.size===3){b.checked=false;announce('You can compare up to three investigations simultaneously.');return;}
    b.checked?compare.add(b.dataset.choose):compare.delete(b.dataset.choose);
    renderStudyCompare();
  });
  host.querySelectorAll('[data-dataset]').forEach(b=>b.onclick=()=>toData(b.dataset.dataset));
  host.querySelectorAll('[data-replay]').forEach(b=>b.onclick=()=>playRecord(b.dataset.replay));
  renderStudyCompare();
 }

 function studyDetail(s){
   const ds=tables.datasets.find(d=>d.accession===s.psiAccession);
   const replay=s.id==='saffire-i'?'saffire-i-sample1':s.id==='same-r'?'same-r55':s.id==='bass-ii'?'bass-b1':s.id==='flex'?'flex-droplet':null;
   return `
     <div class="rw-study-detail">
       <div class="rw-interpretation">
         <span class="rw-kicker">SAFETY ENGINEERING IMPLICATION · EDITORIAL COMMENTARY</span>
         <p>${e(s.relevance)}</p>
       </div>
       ${s.observedFinding?.text?`
         <div class="rw-finding">
           <h3>Empirical Finding Reported by Flight Investigators</h3>
           <p>${e(s.observedFinding.text)}</p>
           <p>${e(s.observedFinding.scope)}</p>
           ${link(s.observedFinding.sourceUrl,'View Sponsoring Flight Report')}
         </div>`:
         '<p class="rw-muted">Experimental summary based on flight objectives and instrumentation protocols.</p>'
       }
       <dl class="rw-detail-grid">
         ${[['Fuel / Specimen',s.fuels],['Geometry / Scale',s.geometry],['Test Conditions',s.conditions],['Sensor Readouts',s.measurements],['Flight Facility',s.facility],['Flight Platform',s.platform]].map(([k,v])=>`<div><dt>${k}</dt><dd>${e(join(v))}</dd></div>`).join('')}
       </dl>
       <h3>Unsupported Extrapolations</h3>
       ${list(s.limitations)}
       <p>${e(s.habitatApplicability)}</p>
       <div class="rw-button-row">
         ${ds?`<button data-dataset="${ds.accession}" class="rw-dark">Inspect ${ds.recordCount} CSV Table Rows →</button>`:'<span class="rw-muted">Raw CSV table not included in this package.</span>'}
         ${replay?`<button data-replay="${replay}" class="rw-dark">Open in US Lab 3D Sim ↗</button>`:''}
       </div>
       <div class="rw-reference-list">
         ${s.sourceIds.map(id=>knowledge.sources[id]).filter(Boolean).map(source=>link(source.url,source.title)).join('')}
       </div>
     </div>
   `;
 }

 function renderStudyCompare(){
   const selected=knowledge.investigations.filter(s=>compare.has(s.id));
   $('rw-compare').textContent=`${compareOpen?'Hide Comparison':'Compare'} · ${selected.length}`;
   $('rw-compare').disabled=selected.length<2;
   if(!compareOpen||selected.length<2){$('rw-comparison').innerHTML='';return;}
   const summary=comparisonSummary(selected),fields=[['Objective','objective'],['Fuel / Material','fuels'],['Geometry','geometry'],['Conditions','conditions'],['Measurements','measurements'],['Facility','facility'],['Gravity Regime','gravity'],['Safety Relevance','relevance']];
   $('rw-comparison').innerHTML=`
     <section class="rw-compare-panel">
       <div class="rw-section-heading"><h2>Comparative Matrix</h2><button id="rw-clear-compare">Clear Selection</button></div>
       <p><b>Shared Focus Areas:</b> ${e(summary.shared.join(', ')||'No identical categorical focus.')}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th>${selected.map(s=>`<th>${e(s.name)}</th>`).join('')}</tr></thead>
           <tbody>
             ${fields.map(([label,key])=>`<tr><th>${label}</th>${selected.map(s=>`<td>${e((key==='gravity'?gravityLabel[s[key]]:join(s[key]))||'Not specified')}</td>`).join('')}</tr>`).join('')}
           </tbody>
         </table>
       </div>
       <button id="rw-export-compare">Export Comparison (JSON) ↓</button>
     </section>
   `;
   $('rw-clear-compare').onclick=()=>{compare.clear();compareOpen=false;renderStudyList();};
   $('rw-export-compare').onclick=()=>download('investigation-comparison.json',JSON.stringify({method:'NASA-grounded editorial comparison',sharedFocus:summary.shared,studies:selected},null,2));
 }

 function renderData(){
   const ds=currentDataset();
   $('rw-body').innerHTML=`
     <section class="rw-data-page">
       ${heading('NASA PHYSICAL SCIENCES INFORMATICS (PSI)','Official Combustion Flight CSV Datasets','Nine authentic NASA experimental tables. Original records, measurement units, and raw qualifiers preserved without imputation.')}
       <div class="rw-data-summary">
         <span><b>671</b> Sourced Rows</span>
         <span><b>9</b> Original CSVs</span>
         <span><b>8,546</b> Preserved Data Cells</span>
         <a class="rw-download" href="./assets/research/nasa-combustion-experimental-tables.zip" download>Download Complete ZIP Package ↓</a>
       </div>
       <div class="rw-data-toolbar">
         <label>Experimental Table<select id="rw-dataset">${tables.datasets.map(d=>opt(d.accession,`${d.title} · ${d.recordCount} rows`,datasetId)).join('')}</select></label>
         <label>Search Dataset<input id="rw-row-search" type="search" value="${e(rowQuery)}" placeholder="Material, run ID, fuel, outcome…"></label>
         <label>Row Classification<select id="rw-row-kind">${opt('all','All Row Types',rowKind)}${Object.keys(ds.kindCounts).map(k=>opt(k,kindNames[k]||k,rowKind)).join('')}</select></label>
       </div>
       <div class="rw-data-notice">
         <b>${e(ds.title)} · ${e(ds.accession)}</b>
         <p>${e(tableNotes[ds.accession])}</p>
         ${ds.corroboratingSources?'<p>Source headers O / N / CO corroborated as O₂ / N₂ / CO₂; burning rate constant confirmed in mm²/s. '+link(ds.corroboratingSources[0].url,'NASA Technical Report · Table IX, p. 20')+'</p>':''}
       </div>
       <details class="rw-number-filter" ${field?'open':''}>
         <summary>Filter by Numerical Value Range</summary>
         <div class="rw-number-controls">
           <label>Column & Unit<select id="rw-field">${opt('','Select a column',field)}${ds.fields.filter(f=>ds.records.some(r=>typeof r.values[f.key]==='number')).map(f=>opt(f.key,`${f.sourceHeader} · ${f.unit||'dimensionless'}`,field)).join('')}</select></label>
           <label>Min Value<input id="rw-min" type="number" step="any" value="${e(min)}"></label>
           <label>Max Value<input id="rw-max" type="number" step="any" value="${e(max)}"></label>
           <button id="rw-apply-range">Apply</button>
           <button id="rw-clear-range">Clear</button>
         </div>
         <label class="rw-check"><input id="rw-unknown" type="checkbox" ${includeUnknown?'checked':''}> Include rows with qualitative or missing values</label>
       </details>
       <div class="rw-results-heading">
         <span id="rw-row-count" role="status"></span>
         <div class="rw-button-row">
           <button id="rw-row-compare">Compare Rows</button>
           <button id="rw-export-csv">Filtered CSV ↓</button>
           <button id="rw-export-json">Filtered JSON ↓</button>
         </div>
       </div>
       <div id="rw-row-comparison"></div>
       <div id="rw-row-detail"></div>
       <div id="rw-data-table"></div>
       <div class="rw-pagination"><button id="rw-prev">← Previous</button><span id="rw-page-label"></span><button id="rw-next">Next →</button></div>
       <div id="rw-plot"></div>
       <details class="rw-dictionary">
         <summary>Data Dictionary, Qualifiers & Provenance Hashes</summary>
         <p>${link(ds.source.catalogUrl,'NASA PSI Catalog Record')} · <a href="./assets/research/${e(ds.source.localCsv)}" download>Unmodified Source CSV ↓</a> · <a href="./assets/research/data-dictionary.json" download>Complete Data Dictionary JSON ↓</a></p>
         <p>File: ${e(ds.source.fileName)}</p>
         <code>SHA-256: ${ds.source.sha256}</code>
         <div class="rw-table-scroll">
           <table>
             <thead><tr><th>Original Header</th><th>Unit</th><th>Role</th><th>Missing</th><th>Scientific Interpretation</th></tr></thead>
             <tbody>
               ${ds.fields.map(f=>`<tr><th>${e(f.sourceHeader)}<small>${e(f.key)}</small></th><td>${e(f.unit||'—')}</td><td>${e(f.role)}</td><td>${f.missingCount}</td><td>${e(f.interpretation||'—')}${f.corroboration?'<br>'+link(f.corroboration.url,f.corroboration.title+' · Table IX, p. 20'):''}</td></tr>`).join('')}
             </tbody>
           </table>
         </div>
       </details>
       <p class="rw-footnote">671 rows represent nine curated study summaries from the NASA PSI repository. Numerical comparisons preserve raw units and qualifiers.</p>
     </section>
   `;

   $('rw-dataset').onchange=ev=>toData(ev.target.value);
   $('rw-row-search').oninput=ev=>{rowQuery=ev.target.value;page=0;renderRows();};
   $('rw-row-kind').onchange=ev=>{rowKind=ev.target.value;page=0;renderRows();};
   $('rw-apply-range').onclick=()=>{
     const lo=$('rw-min').value,hi=$('rw-max').value;
     if(lo!==''&&hi!==''&&Number(lo)>Number(hi)){announce('Minimum cannot exceed maximum.');return;}
     field=$('rw-field').value;min=lo;max=hi;includeUnknown=$('rw-unknown').checked;page=0;renderRows();
   };
   $('rw-clear-range').onclick=()=>{field='';min='';max='';includeUnknown=false;page=0;renderData();};
   $('rw-prev').onclick=()=>{page--;renderRows();};
   $('rw-next').onclick=()=>{page++;renderRows();};
   $('rw-row-compare').onclick=()=>{showRowCompare=!showRowCompare;renderRows();};
   $('rw-export-csv').onclick=()=>download(`${datasetId}-filtered.csv`,'\ufeff'+exportRows(ds,visibleRows()),'text/csv;charset=utf-8');
   $('rw-export-json').onclick=()=>download(`${datasetId}-filtered.json`,JSON.stringify({schemaVersion:1,exportedAt:new Date().toISOString(),filters:{rowQuery,rowKind,field,min,max,includeUnknown},dataset:{...ds,sourceRecordCount:ds.recordCount,recordCount:visibleRows().length,kindCounts:visibleRows().reduce((c,r)=>(c[r.kind]=(c[r.kind]||0)+1,c),{}),records:visibleRows()}},null,2));
   renderRows();
 }

 const visibleRows=()=>filterRows(currentDataset(),{query:rowQuery,kind:rowKind,field,min,max,includeUnknown});

 function renderRows(){
   const ds=currentDataset(),rows=visibleRows(),pages=Math.max(1,Math.ceil(rows.length/pageSize));
   page=Math.min(Math.max(page,0),pages-1);
   $('rw-row-count').textContent=`${rows.length} / ${ds.recordCount} records matching criteria`;
   $('rw-data-table').innerHTML=rows.length?`
     <div class="rw-table-scroll" tabindex="0" role="region" aria-label="NASA PSI Data Table">
       <table class="rw-source-table">
         <thead><tr><th>Select</th><th>Row / Kind</th>${ds.fields.map(f=>`<th>${e(f.sourceHeader)}<small>${e(f.unit||'')}</small></th>`).join('')}</tr></thead>
         <tbody>
           ${rows.slice(page*pageSize,(page+1)*pageSize).map(r=>`
             <tr>
               <td><input type="checkbox" data-row-choose="${e(r.id)}" aria-label="Compare row ${r.sourceRow}" ${rowCompare.has(r.id)?'checked':''}></td>
               <th><button data-row="${e(r.id)}">${r.sourceRow} · View ↗</button><small>${e(kindNames[r.kind]||r.kind)}</small></th>
               ${r.raw.map(v=>`<td>${v.trim()?e(v):'<span class="rw-missing">Empty</span>'}</td>`).join('')}
             </tr>
           `).join('')}
         </tbody>
       </table>
     </div>
   `:'<div class="rw-empty"><h2>No records found matching filters.</h2><p>Adjust numerical bounds or clear search terms.</p></div>';

   $('rw-page-label').textContent=`Page ${page+1} of ${pages}`;
   $('rw-prev').disabled=page===0;
   $('rw-next').disabled=page===pages-1;
   $('rw-row-compare').disabled=rowCompare.size<2;
   $('rw-row-compare').textContent=`${showRowCompare?'Hide Comparison':'Compare Rows'} · ${rowCompare.size}`;

   host.querySelectorAll('[data-row]').forEach(b=>b.onclick=()=>{rowId=b.dataset.row;renderRowDetail();$('rw-row-detail').scrollIntoView({block:'start',behavior:'instant'});});
   host.querySelectorAll('[data-row-choose]').forEach(b=>b.onchange=()=>{
     if(b.checked&&rowCompare.size===3){b.checked=false;announce('Select up to three rows.');return;}
     b.checked?rowCompare.add(b.dataset.rowChoose):rowCompare.delete(b.dataset.rowChoose);
     renderRows();
   });
   renderRowDetail();renderRowComparison();renderPlot(rows);
 }

 function renderRowDetail(){
   const ds=currentDataset(),r=ds.records.find(r=>r.id===rowId);
   if(!r){$('rw-row-detail').innerHTML='';return;}
   $('rw-row-detail').innerHTML=`
     <section class="rw-row-detail">
       <div class="rw-section-heading">
         <div><span class="rw-kicker">${e(ds.accession)} · ORIGINAL CSV ROW ${r.sourceRow}</span><h2>${e(ds.title)} / Run ${e(r.values.testId||r.values.sampleId||r.sourceRow)}</h2></div>
         <button id="rw-close-row">Close ×</button>
       </div>
       <p>${e(kindNames[r.kind])}${r.issues.length?' · '+e(r.issues.join(' · ')):''}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th><th>Raw Cell Content</th><th>Parsed Float/String</th><th>Unit</th><th>Qualifier</th></tr></thead>
           <tbody>
             ${ds.fields.map(f=>`<tr><th>${e(f.sourceHeader)}</th><td>${e(r.raw[f.index])||'Empty'}</td><td>${e(r.values[f.key]??'Missing')}</td><td>${e(f.unit||'—')}</td><td>${e(r.qualifiers[f.key])}</td></tr>`).join('')}
           </tbody>
         </table>
       </div>
       <p>${link(ds.source.downloadUrl,'NASA Original Dataset Source')} · Raw values preserved in archival schema.</p>
     </section>
   `;
   $('rw-close-row').onclick=()=>{rowId=null;renderRowDetail();};
 }

 function renderRowComparison(){
   const ds=currentDataset(),rows=ds.records.filter(r=>rowCompare.has(r.id));
   if(!showRowCompare||rows.length<2){$('rw-row-comparison').innerHTML='';return;}
   const shared=ds.fields.filter(f=>rows.every(r=>r.raw[f.index].trim()&&r.raw[f.index]===rows[0].raw[f.index]));
   $('rw-row-comparison').innerHTML=`
     <section class="rw-compare-panel">
       <div class="rw-section-heading"><h2>Side-by-Side Row Comparison</h2><button id="rw-clear-rows">Clear Selection</button></div>
       <p><b>Identical Attributes:</b> ${e(shared.map(f=>f.sourceHeader).join(', ')||'None')}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th>${rows.map(r=>`<th>Row ${r.sourceRow}<small>${e(kindNames[r.kind])}</small></th>`).join('')}</tr></thead>
           <tbody>
             ${ds.fields.map(f=>`<tr class="${shared.includes(f)?'rw-shared':''}"><th>${e(f.sourceHeader)}</th>${rows.map(r=>`<td>${e(r.raw[f.index])||'<span class="rw-missing">Empty</span>'}</td>`).join('')}</tr>`).join('')}
           </tbody>
         </table>
       </div>
     </section>
   `;
   $('rw-clear-rows').onclick=()=>{rowCompare.clear();showRowCompare=false;renderRows();};
 }

 function renderPlot(rows){
   if(datasetId!=='PSI-69'){$('rw-plot').innerHTML='';return;}
   const pts=rows.filter(r=>typeof r.values.initialDropletDiameterMm==='number'&&typeof r.values.burnTimeS==='number'&&['numeric','numeric-unit-explicit'].includes(r.qualifiers.initialDropletDiameterMm)&&['numeric','numeric-unit-explicit'].includes(r.qualifiers.burnTimeS));
   if(!pts.length){$('rw-plot').innerHTML='';return;}
   const xmax=Math.max(...pts.map(r=>r.values.initialDropletDiameterMm))*1.1,ymax=Math.max(...pts.map(r=>r.values.burnTimeS))*1.1,colors={Extinction:'#214E3C',Disruption:'#A66E28',Completion:'#1D4ED8'},x=n=>60+n/xmax*710,y=n=>240-n/ymax*205;
   $('rw-plot').innerHTML=`
     <section class="rw-plot">
       <div class="rw-section-heading">
         <div><span class="rw-kicker">FLEX EXPERIMENT · SOURCED TEST RECORDS</span><h2>Initial Droplet Diameter vs. Burn Time</h2></div>
         <span>${pts.length} Verified Data Points</span>
       </div>
       <svg viewBox="0 0 820 290" role="img" aria-label="Initial Droplet Diameter vs Burn Time Scatter Plot">
         <path d="M60 30V240H780" fill="none" stroke="#91a59a"/>
         ${[0,1,2,3,4].map(i=>`<path d="M60 ${y(ymax*i/4)}H780" stroke="#dde5df"/><text x="50" y="${y(ymax*i/4)+4}" text-anchor="end">${(ymax*i/4).toFixed(1)}</text><text x="${x(xmax*i/4)}" y="259" text-anchor="middle">${(xmax*i/4).toFixed(1)}</text>`).join('')}
         ${pts.map(r=>`<circle cx="${x(r.values.initialDropletDiameterMm)}" cy="${y(r.values.burnTimeS)}" r="3.5" fill="${colors[r.values.testEnd]||'#999'}" opacity=".75"><title>Run ${r.sourceRow}: ${e(r.values.fuel)} · ${r.values.initialDropletDiameterMm} mm · ${r.values.burnTimeS} s · ${e(r.values.testEnd)}</title></circle>`).join('')}
         <text x="420" y="285" text-anchor="middle">Initial Droplet Diameter d₀ (mm)</text>
         <text x="60" y="18">Burn Duration (s)</text>
       </svg>
       <div class="rw-legend">
         ${Object.entries(colors).map(([name,color])=>`<span><i style="background:${color}"></i>${name} · ${pts.filter(r=>r.values.testEnd===name).length}</span>`).join('')}
       </div>
       <p>Uncertain (~) and incomplete rows excluded from scatter plot. Outcomes reflect NASA flight records across varying inert atmospheres.</p>
     </section>
   `;
 }

 function playRecord(id){
   const r=replays.find(r=>r.id===id);
   if(!r)return;
   onReplay(r);
 }

 function renderHardware(){
  const groups=[
    ['CIR','Combustion Integrated Rack','Destiny US Lab facility supporting ACME microgravity experiments and droplet apparatus.',['acme','flex','flex-2','cfi'],'https://gipoc.grc.nasa.gov/wp/fcf-cir/'],
    ['MDCA','Multi-user Droplet Combustion Apparatus','Sub-rack hardware inside CIR dedicated to fluid droplet burning.',['flex','flex-2','cfi'],'https://www.nasa.gov/mission/international-space-station/'],
    ['MSG','Microgravity Science Glovebox','Enclosed glovebox work volume for BASS, BASS-II, and SPICE experiments.',['bass','bass-ii','spice','slice'],'https://www.nasa.gov/mission/international-space-station/'],
    ['CYGNUS','Saffire Flow Duct','Saffire-I through VI were conducted inside automated Cygnus cargo vehicles after unberthing from ISS.',['saffire-i','saffire-ii','saffire-iii'],'https://psi.nasa.gov/physci/repo/data/investigations/PSI-98']
  ];
  $('rw-body').innerHTML=`
    <section class="rw-content-page">
      ${heading('FACILITIES & HARDWARE SYSTEMS','Flight Facilities & Containment Architectures','Understand the containment systems that enabled zero-gravity combustion experiments aboard ISS and Cygnus.')}
      <div class="rw-hardware-grid">
        ${groups.map(([abbr,name,desc,ids,url])=>`
          <article>
            <span class="rw-hardware-abbr">${abbr}</span>
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="rw-button-row">
              ${ids.map(id=>`<button data-hardware-study="${id}">${e(knowledge.investigations.find(s=>s.id===id)?.name||id)} →</button>`).join('')}
            </div>
            ${abbr==='CIR'?link(url,'NASA CIR Facility Documentation'):'<p class="rw-muted">See individual investigation cards for NASA citations.</p>'}
          </article>
        `).join('')}
      </div>
      <h2 class="rw-subtitle">Three Interlocking Safety Disciplines</h2>
      <div class="rw-replay-grid">
        ${[
          ['Prevention','BASS, Saffire, and BRE investigate fuel flammability, geometry, limiting oxygen concentrations, and airflow velocity.','prevention'],
          ['Detection','SAME, SAME-R, and DAFT investigate smoke particle characteristics, soot agglomeration, and spacecraft detector responses.','detection'],
          ['Suppression','FLEX droplet extinction, inert dilution (N₂/CO₂), and water-mist suppression boundaries.','suppression']
        ].map(([title,text,focus])=>`
          <article>
            <h2>${title}</h2>
            <p>${text}</p>
            <button data-hardware-focus="${focus}">Filter Investigations →</button>
          </article>
        `).join('')}
      </div>
      <h2 class="rw-subtitle">Earth Spin-Off Innovations</h2>
      <p>NASA combustion science research has directly contributed to ground safety technologies including firefighter life support, optical detectors, and thermal barrier fabrics.</p>
      <div class="rw-reference-list">${official.slice(7).map(([name,url])=>link(url,name)).join('')}</div>
    </section>
  `;
  host.querySelectorAll('[data-hardware-study]').forEach(b=>b.onclick=()=>{
    purpose='all';query='';studyId=b.dataset.hardwareStudy;tab='studies';render();$('study-'+studyId)?.scrollIntoView({block:'start'});
  });
  host.querySelectorAll('[data-hardware-focus]').forEach(b=>b.onclick=()=>open(b.dataset.hardwareFocus));
 }

 function renderSources(){
   $('rw-body').innerHTML=`
     <section class="rw-content-page">
       ${heading('DATA PROVENANCE & ARCHIVES','NASA Sources & Verification Traceability','Distinguishes peer-reviewed scientific datasets, sensor telemetry, and 3D geometric models.')}
       <div class="rw-source-columns">
         <div>
           <h2>Official NASA Challenge Resources</h2>
           <p>${link('https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/?tab=details','NASA Space Apps Challenge Definition')} · ${link('https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/?tab=resources','Resources Tab')}</p>
           <ol class="rw-official-list">
             ${official.map(([name,url,type])=>`<li><span>${e(type)}</span>${link(url,name)}</li>`).join('')}
           </ol>
         </div>
         <div>
           <h2>Curated Archive Scope</h2>
           <dl class="rw-coverage">
             <div><dt>23 Flight Investigation Cards</dt><dd>19 unique NASA Physical Sciences Informatics (PSI) accession records.</dd></div>
             <div><dt>9 Experimental Data Tables</dt><dd>671 official CSV rows preserved with units and qualifiers.</dd></div>
             <div><dt>Calibrated Time Series</dt><dd>Real sensor telemetry from Saffire-I and SAME-R (Sample 55).</dd></div>
             <div><dt>66 US Lab Destiny Hardware Racks</dt><dd>Official NASA 3D visual reconstruction from JSC IGOAL.</dd></div>
           </dl>
           <h3>Verification Boundaries</h3>
           ${list([
             'Experimental records represent published PSI subsets, not the entire classified archive.',
             'Partial lunar/Martian gravity tables represent simulated or planned extrapolations (LUCI, FM²).',
             'The platform serves research visualization; it does not replace full-scale NASA flight certification.'
           ])}
           <a class="rw-download" href="./assets/research/nasa-combustion-experimental-tables.zip" download>Download Complete Research Package (ZIP) ↓</a>
         </div>
       </div>
       <p class="rw-footnote">Last reviewed: ${e(knowledge.reviewedAt)} · Independent educational simulation developed for NASA Space Apps Challenge 2026.</p>
     </section>
   `;
 }

 return {
   open,
   render,
   get status(){
     return {ready:!!knowledge,tab,studyCount:knowledge?.investigations.length,datasetCount:tables?.datasets.length,rowCount:tables?.datasets.reduce((n,d)=>n+d.recordCount,0),purpose,query,datasetId,filteredRows:tables?visibleRows().length:0};
   }
 };
}
