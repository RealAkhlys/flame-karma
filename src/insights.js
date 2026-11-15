import {escapeHTML as e} from './catalog.js';
import {csvCell} from './research-model.js';

const missionLabels={iss:'ISS & Orbital Spacecraft',lunar:'Artemis Lunar Habitat',mars:'Mars Surface Base',rover:'Pressurized Surface Rover'};
const goalLabels={all:'All Objectives',prevention:'Flammability & Prevention',detection:'Smoke Detection',suppression:'Suppression & Extinction',extinction:'Extinction Boundaries','model-validation':'Model Validation'};
const stopWords=new Set(['icin','hangi','nedir','nasil','verimiz','kayit','kayitlar','deney','deneyler','olan','var','bir','ile','ve','veya','the','what','which','does','for','how','where']);
const fold=value=>String(value??'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/ı/g,'i').replace(/[^a-z0-9çgöşü]+/g,' ');
const download=(name,type,text)=>{const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};

export function missionFit(study,mission){
 if(mission==='iss'){
  if(study.gravity==='microgravity')return {level:3,label:'High Mission Proximity',reason:'Orbital microgravity research; not a standalone flight hardware certification.'};
  return {level:1,label:'Indirect Evidence',reason:'Provides orbital flight context; not a direct zero-g table.'};
 }
 if(mission==='lunar'){
  if(study.gravity==='simulated-lunar-gravity')return {level:2,label:'Moderate Proximity',reason:'Simulated partial lunar gravity benchmark; not flight certified.'};
  if(study.gravity==='planned-lunar-surface-gravity')return {level:1,label:'Planned Study',reason:'Planned Artemis lunar surface research; empirical local table pending.'};
 }
 return {level:1,label:'Indirect Evidence',reason:`No validated local test tables for ${missionLabels[mission]}; microgravity data serves as foundational baseline.`};
}

export function relevant(study,goal){return goal==='all'||study.focus.includes(goal)||(goal==='detection'&&study.focus.includes('detection-instrumentation'));}
export function rankedMissionStudies(studies,mission,goal){return studies.filter(study=>relevant(study,goal)).map(study=>({study,fit:missionFit(study,mission),hasTable:study.tableEvidence?.status?.includes('full-official')})).sort((a,b)=>b.fit.level-a.fit.level||Number(b.hasTable)-Number(a.hasTable)||Number(b.study.priority==='core')-Number(a.study.priority==='core')||a.study.name.localeCompare(b.study.name));}
export function missionSummary(studies,mission){
 const fits=studies.map(study=>missionFit(study,mission)),high=fits.filter(fit=>fit.level===3).length,medium=fits.filter(fit=>fit.level===2).length,tableCount=studies.filter(study=>study.tableEvidence?.status?.includes('full-official')).length;
 const summaries={
  iss:{status:'Direct Orbital Context',description:`${high} microgravity investigations and ${tableCount} official CSV tables provide direct orbital context.`},
  lunar:{status:'Simulation & Planned Exploration',description:`${medium} simulated lunar gravity research studies identified. No direct lunar surface combustion tables exist.`},
  mars:{status:'Empirical Data Gap',description:'No direct experimental combustion tables exist for Mars surface gravity and low-pressure CO2 atmospheres.'},
  rover:{status:'Design Verification Gap',description:'No verified experimental tables for pressurized rover ventilation and partial gravity environments.'}
 };
 return {mission,label:missionLabels[mission],high,medium,tableCount,...summaries[mission]};
}
function grouped(items,keyOf){const groups=new Map();for(const item of items){const key=keyOf(item);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(item);}return [...groups];}
function studyText(study){return [study.name,study.family,study.objective,...study.fuels,...study.geometry,...study.conditions,...study.measurements,study.platform,study.facility,study.relevance,...study.limitations,...study.focus].join(' ');}
function canonical(study,mission){const fit=missionFit(study,mission);return {id:study.id,name:study.name,family:study.family,mission:missionLabels[mission],missionProximity:fit.label,missionReason:fit.reason,objective:study.objective,focus:study.focus,fuels:study.fuels,geometry:study.geometry,conditions:study.conditions,measurements:study.measurements,facility:study.facility,platform:study.platform,gravity:study.gravity,evidenceStatus:study.evidenceStatus,psiAccession:study.psiAccession??'',sourceUrls:study.sourceUrls,limitations:study.limitations};}
function csv(studies,mission){const headers=['id','name','family','mission','missionProximity','missionReason','objective','focus','fuels','geometry','conditions','measurements','facility','platform','gravity','evidenceStatus','psiAccession','sourceUrls','limitations'];return '\ufeff'+[headers.map(csvCell).join(','),...studies.map(study=>{const row=canonical(study,mission);return headers.map(key=>csvCell(Array.isArray(row[key])?row[key].join(' | '):row[key])).join(',');})].join('\r\n');}

export function renderMissionAnalysis({root,knowledge,tables,onOpenStudy,onOpenData}){
 const studies=knowledge.investigations;let mission='iss',goal='all';
 let weights={materials:50,suppression:50,detection:50,modeling:50};
 const rowCount=tables.datasets.reduce((sum,dataset)=>sum+dataset.recordCount,0),accessions=new Set(studies.map(study=>study.psiAccession).filter(Boolean));
 root.innerHTML=`<div class="insights-shell">
  <header class="insights-hero">
    <div>
      <span class="eyebrow">MISSION FLIGHT ANALYSIS</span>
      <h1>Why Each Study<br><em>Matters to Safety.</em></h1>
      <p>Prioritize NASA PSI investigations based on spacecraft mission profile and combustion safety priorities.</p>
    </div>
    <div class="analysis-controls">
      <label>Mission Profile
        <select id="mission-select">
          <option value="iss">ISS & Orbital Spacecraft</option>
          <option value="lunar">Artemis Lunar Habitat</option>
          <option value="mars">Mars Surface Base</option>
          <option value="rover">Pressurized Surface Rover</option>
        </select>
      </label>
      <label>Safety Objective
        <select id="goal-select">
          <option value="all">All Objectives</option>
          <option value="prevention">Flammability & Prevention</option>
          <option value="detection">Smoke Detection</option>
          <option value="suppression">Suppression & Extinction</option>
          <option value="extinction">Extinction Boundaries</option>
          <option value="model-validation">Model Validation</option>
        </select>
      </label>
    </div>
  </header>
  <section id="mission-context" class="mission-context" aria-live="polite"></section>
  <section class="insight-kpis" aria-label="Dataset Summary">
    <article><span>Study Coverage</span><strong>${studies.length}</strong><small>Curated Cards</small></article>
    <article><span>NASA PSI Footprint</span><strong>${accessions.size}</strong><small>Unique Accessions</small></article>
    <article><span>Experimental Tables</span><strong>${tables.datasets.length}</strong><small>Verified CSVs</small></article>
    <article><span>Preserved Data Rows</span><strong>${rowCount}</strong><small>Sourced Records</small></article>
  </section>

  <!-- Interactive Priority Weights -->
  <details class="insight-section" style="margin: 14px 0; background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 10px; padding: 14px 18px; box-shadow: var(--space-shadow);">
    <summary style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
      <div>
        <span class="eyebrow">DYNAMIC PRIORITY WEIGHTING</span>
        <h2 style="font-size: 16px; margin: 2px 0 0; color: #1E2421;">Mission Requirement Weights (Optional) ▾</h2>
      </div>
      <span class="telemetry-badge badge-psi">MULTI-CRITERIA SCORING</span>
    </summary>
    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 14px;">
      <div>
        <label style="font-size: 10px; color: var(--space-text-secondary); display: flex; justify-content: space-between;">
          <span>Material Screening</span>
          <span id="wt-mat-val" style="color: var(--telemetry-cyan); font-weight: 700;">50%</span>
        </label>
        <input type="range" id="wt-mat" min="0" max="100" value="50" style="width: 100%; accent-color: var(--telemetry-cyan);">
      </div>
      <div>
        <label style="font-size: 10px; color: var(--space-text-secondary); display: flex; justify-content: space-between;">
          <span>Suppression & Quenching</span>
          <span id="wt-sup-val" style="color: var(--telemetry-cyan); font-weight: 700;">50%</span>
        </label>
        <input type="range" id="wt-sup" min="0" max="100" value="50" style="width: 100%; accent-color: var(--telemetry-cyan);">
      </div>
      <div>
        <label style="font-size: 10px; color: var(--space-text-secondary); display: flex; justify-content: space-between;">
          <span>Early Smoke Detection</span>
          <span id="wt-det-val" style="color: var(--telemetry-cyan); font-weight: 700;">50%</span>
        </label>
        <input type="range" id="wt-det" min="0" max="100" value="50" style="width: 100%; accent-color: var(--telemetry-cyan);">
      </div>
      <div>
        <label style="font-size: 10px; color: var(--space-text-secondary); display: flex; justify-content: space-between;">
          <span>Computational Modeling</span>
          <span id="wt-mod-val" style="color: var(--telemetry-cyan); font-weight: 700;">50%</span>
        </label>
        <input type="range" id="wt-mod" min="0" max="100" value="50" style="width: 100%; accent-color: var(--telemetry-cyan);">
      </div>
    </div>
  </details>

  <div class="insight-actions">
    <div id="insight-count" class="insight-count" role="status"></div>
    <button id="download-matrix" class="secondary" title="Export Prioritized Study Matrix">Export Prioritized Matrix (CSV) ↓</button>
  </div>
  <div id="mission-grid" class="mission-grid"></div>
 </div>`;

 function updateWeights() {
   weights = {
     materials: Number(root.querySelector('#wt-mat')?.value || 50),
     suppression: Number(root.querySelector('#wt-sup')?.value || 50),
     detection: Number(root.querySelector('#wt-det')?.value || 50),
     modeling: Number(root.querySelector('#wt-mod')?.value || 50)
   };
   if (root.querySelector('#wt-mat-val')) root.querySelector('#wt-mat-val').textContent = `${weights.materials}%`;
   if (root.querySelector('#wt-sup-val')) root.querySelector('#wt-sup-val').textContent = `${weights.suppression}%`;
   if (root.querySelector('#wt-det-val')) root.querySelector('#wt-det-val').textContent = `${weights.detection}%`;
   if (root.querySelector('#wt-mod-val')) root.querySelector('#wt-mod-val').textContent = `${weights.modeling}%`;
   renderCards();
 }

 root.querySelector('#wt-mat')?.addEventListener('input', updateWeights);
 root.querySelector('#wt-sup')?.addEventListener('input', updateWeights);
 root.querySelector('#wt-det')?.addEventListener('input', updateWeights);
 root.querySelector('#wt-mod')?.addEventListener('input', updateWeights);

 function renderCards(){
  const ranked=rankedMissionStudies(studies,mission,goal);
  const summary=missionSummary(studies,mission);
  root.querySelector('#mission-context').innerHTML=`
    <div class="context-banner ${mission}">
      <span class="context-kicker">${summary.label.toUpperCase()} · ${summary.status.toUpperCase()}</span>
      <h2>${summary.status}</h2>
      <p>${summary.description}</p>
    </div>
  `;
  root.querySelector('#insight-count').textContent=`${ranked.length} investigations matched for ${missionLabels[mission]}`;
  root.querySelector('#mission-grid').innerHTML=ranked.length?ranked.map(({study,fit,hasTable})=>`
    <article class="mission-card ${fit.level===3?'high':fit.level===2?'medium':'low'}">
      <div class="card-kicker-row">
        <span class="proximity-badge level-${fit.level}">${fit.label}</span>
        <span class="study-family">${study.family}</span>
      </div>
      <h3>${study.name}</h3>
      <p class="study-objective">${study.objective}</p>
      <div class="fit-reason"><strong>Mission Proximity:</strong> ${fit.reason}</div>
      <div class="study-meta-grid">
        <div><span>Platform</span><strong>${study.platform}</strong></div>
        <div><span>Facility</span><strong>${study.facility}</strong></div>
        <div><span>Gravity</span><strong>${study.gravity}</strong></div>
        <div><span>Dataset</span><strong>${study.psiAccession||'None'}</strong></div>
      </div>
      <div class="card-bottom-actions">
        <button data-study-link="${study.id}" class="secondary">View Investigation Details →</button>
        ${study.psiAccession?`<button data-table-link="${study.psiAccession}" class="primary">Open CSV Table (${study.psiAccession}) →</button>`:''}
      </div>
    </article>
  `).join(''):'<div class="rw-empty"><h2>No investigations match this filter.</h2></div>';

  root.querySelectorAll('[data-study-link]').forEach(btn=>btn.onclick=()=>onOpenStudy?.(btn.dataset.studyLink));
  root.querySelectorAll('[data-table-link]').forEach(btn=>btn.onclick=()=>onOpenData?.(btn.dataset.tableLink));
 }

 root.querySelector('#mission-select').onchange=e=>{mission=e.target.value;renderCards();};
 root.querySelector('#goal-select').onchange=e=>{goal=e.target.value;renderCards();};
 root.querySelector('#download-matrix').onclick=()=>{
   const ranked=rankedMissionStudies(studies,mission,goal).map(r=>r.study);
   download(`mission-matrix-${mission}-${goal}.csv`,'text/csv;charset=utf-8',csv(ranked,mission));
 };
 renderCards();
}
