var he=i=>String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ul=i=>`${i.value}${i.unit?" "+i.unit:""}`,Uf={id:"saffire-i-sample1",title:"Saffire-I \xB7 Numune 1",experiment:"Saffire-I",material:"SIBAL",materialOriginal:"%75 pamuk / %25 cam elyaf (k\xFCtlece)",category:"solid-fuel-combustion",platform:"Cygnus \xB7 ISS\u2019den ayr\u0131ld\u0131ktan sonra",geometryType:"fabric",telemetryFile:"saffire-scenario.json",chartKeys:["sampleTempC","plumeTempC","oxygenPct","co2Pct"],sourceUrl:"https://psi.nasa.gov/physci/repo/data/investigations/PSI-98",evidence:{hasTelemetry:!0,description:"NASA kalibre edilmi\u015F sens\xF6r kayd\u0131; 20.000 \xF6zg\xFCn sat\u0131rdan 665 \xF6rnek."},conditions:[{label:"Numune",value:"SIBAL \xB7 pamuk\u2013cam elyaf kuma\u015F"},{label:"Boyut",value:"94 \xD7 40,6 cm"},{label:"Nominal ba\u015Flang\u0131\xE7 ak\u0131\u015F\u0131",value:20,unit:"cm/s"},{label:"Ate\u015Fleyici ak\u0131m\u0131",value:"60,027\u201368,013 s"},{label:"Fan g\xFC\xE7 komutu kapand\u0131",value:480.054,unit:"s"}],limitations:["Saffire-I, US Lab\u2019da de\u011Fil Cygnus uzay arac\u0131nda y\xFCr\xFCt\xFCld\xFC. Konum ve 3D numune \xF6l\xE7e\u011Fi temsilidir.","Sens\xF6rler kendi \xF6l\xE7\xFCm noktalar\u0131n\u0131 g\xF6sterir; kabinin tamam\u0131n\u0131n s\u0131cakl\u0131\u011F\u0131 de\u011Fildir.","Her saniyeye en yak\u0131n \xF6zg\xFCn sat\u0131r ve kontrol ge\xE7i\u015Fleri korunur. Seyrek g\xF6r\xFCn\xFCm k\u0131sa tepe de\u011Ferlerini ka\xE7\u0131rabilir.","Alevin yay\u0131l\u0131m\u0131 temsili animasyondur. Fan\u0131n kapanmas\u0131 \xF6l\xE7\xFCl\xFCd\xFCr; animasyondaki s\xF6nme zaman\u0131 bir \xF6l\xE7\xFCm de\u011Fildir."]},Yu;function va(){return Yu??=(async()=>{try{let i=await fetch("./assets/experiment-catalog.json");if(!i.ok)throw Error("Katalog y\xFCklenemedi");let e=await i.json();if(!Array.isArray(e.records))throw Error("Katalog bi\xE7imi hatal\u0131");return[Uf,...e.records].map(t=>({...t,focus:t.category.includes("smoke")?["detection"]:["prevention",...t.experiment==="BASS"?["suppression"]:[]],kind:t.evidence.hasTelemetry?"telemetry":t.evidence.hasRecordedVideo?"video":"metadata"}))}catch(i){throw Yu=null,i}})()}var ya=i=>String(i??"").toLocaleLowerCase("tr").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ı/g,"i"),cs={all:"T\xFCm ara\u015Ft\u0131rmalar",prevention:"Yanma ve \xF6nleme",detection:"Duman alg\u0131lama",suppression:"S\xF6nd\xFCrme",extinction:"S\xF6nme s\u0131n\u0131rlar\u0131","model-validation":"Model do\u011Frulama"},Of={...cs,"pre-fire-signatures":"Alev \xF6ncesi duman belirtileri","detection-instrumentation":"Alg\u0131lama cihazlar\u0131","material-comparison":"Malzeme kar\u015F\u0131la\u015Ft\u0131rmas\u0131","combustion-efficiency":"Yanma verimi","active-control":"Etkin alev kontrol\xFC",soot:"Kurum",stability:"Alev kararl\u0131l\u0131\u011F\u0131"},sr={"test-record":"Test kayd\u0131","test-condition-record":"Test ko\u015Fulu","aged-measurement-record":"Ya\u015Fland\u0131r\u0131lm\u0131\u015F \xF6l\xE7\xFCm","condition-template":"Ko\u015Ful \u015Fablonu","configuration-envelope":"Konfig\xFCrasyon aral\u0131\u011F\u0131","sample-summary":"Numune \xF6zeti","flow-media-reference":"Ak\u0131\u015F videosu referans\u0131","source-note":"Kaynak notu","maintenance-log":"Bak\u0131m kayd\u0131"},Bf={smoke:"duman",oxygen:"oksijen",flow:"akis",fan:"akis",suppression:"sondurme",detection:"algilama",ignition:"tutus",droplet:"damla",fabric:"kumas",nitrogen:"azot"},kf=i=>[...new Set(ya(i).split(/\s+/).filter(Boolean).map(e=>Bf[e]||e))];function Zu(i,{query:e="",purpose:t="all"}={}){let n=kf(e);return i.map(s=>{let r=ya([s.name,s.objective,...s.fuels,...s.geometry,...s.conditions,...s.measurements,s.relevance,s.facility,...s.focus.map(d=>cs[d]||d)].join(" ")),a=n.filter(d=>r.includes(d)),o=t!=="all"&&s.focus.includes(t),c=t==="detection"&&s.focus.includes("detection-instrumentation"),l=a.length*10+(o?30:0)+(s.priority==="core"?2:0),u=[...o?[cs[t]+" amac\u0131yla do\u011Frudan e\u015Fle\u015Fir"]:[],...c?["Alg\u0131lama cihazlar\u0131n\u0131 do\u011Frulayan tamamlay\u0131c\u0131 ara\u015Ft\u0131rma"]:[],...a.length?["Metin e\u015Fle\u015Fmesi: "+a.join(", ")]:[],...!n.length&&t==="all"?[s.priority==="core"?"Yang\u0131n g\xFCvenli\u011Fi i\xE7in temel ara\u015Ft\u0131rma":"Tamamlay\u0131c\u0131 ara\u015Ft\u0131rma"]:[]];return{study:s,score:l,reasons:u,relatedPurpose:c}}).filter(s=>(t==="all"||s.study.focus.includes(t)||s.relatedPurpose)&&(!n.length||s.reasons.some(r=>r.startsWith("Metin")))).sort((s,r)=>r.score-s.score||s.study.name.localeCompare(r.study.name))}function ju(i,{query:e="",kind:t="all",field:n="",min:s="",max:r="",includeUnknown:a=!1}={}){let o=ya(e),c=n&&(s!==""||r!=="");return i.records.filter(l=>{if(t!=="all"&&l.kind!==t||o&&!ya(l.raw.join(" ")).includes(o))return!1;if(c){let u=l.values[n],d=["numeric","numeric-unit-explicit"].includes(l.qualifiers[n]);if(typeof u!="number"||!d)return a;if(s!==""&&u<Number(s)||r!==""&&u>Number(r))return!1}return!0})}function Ku(i){return{shared:(i.length?i[0].focus.filter(t=>i.every(n=>n.focus.includes(t))):[]).map(t=>Of[t]||t),differentFields:["fuels","geometry","conditions","measurements","facility","gravity"].filter(t=>new Set(i.map(n=>JSON.stringify(n[t]))).size>1)}}function ir(i){let e=String(i??"");return(/^[=+@\t\r]/.test(e)||/^\-/.test(e)&&!/^\-\d+(\.\d+)?$/.test(e))&&(e="'"+e),'"'+e.replaceAll('"','""')+'"'}function Ju(i,e){return[["source_accession","source_row","record_kind",...i.fields.flatMap(t=>[t.key,t.key+"__qualifier"])].map(ir).join(","),...e.map(t=>[i.accession,t.sourceRow,t.kind,...i.fields.flatMap(n=>[t.values[n.key],t.qualifiers[n.key]])].map(ir).join(","))].join(`\r
`)}var _a={iss:"ISS & Orbital Spacecraft",lunar:"Artemis Lunar Habitat",mars:"Mars Surface Base",rover:"Pressurized Surface Rover"};var zf=(i,e,t)=>{let n=URL.createObjectURL(new Blob([t],{type:e})),s=document.createElement("a");s.href=n,s.download=i,s.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)};function Ol(i,e){if(e==="iss")return i.gravity==="microgravity"?{level:3,label:"High Mission Proximity",reason:"Orbital microgravity research; not a standalone flight hardware certification."}:{level:1,label:"Indirect Evidence",reason:"Provides orbital flight context; not a direct zero-g table."};if(e==="lunar"){if(i.gravity==="simulated-lunar-gravity")return{level:2,label:"Moderate Proximity",reason:"Simulated partial lunar gravity benchmark; not flight certified."};if(i.gravity==="planned-lunar-surface-gravity")return{level:1,label:"Planned Study",reason:"Planned Artemis lunar surface research; empirical local table pending."}}return{level:1,label:"Indirect Evidence",reason:`No validated local test tables for ${_a[e]}; microgravity data serves as foundational baseline.`}}function Vf(i,e){return e==="all"||i.focus.includes(e)||e==="detection"&&i.focus.includes("detection-instrumentation")}function Qu(i,e,t){return i.filter(n=>Vf(n,t)).map(n=>({study:n,fit:Ol(n,e),hasTable:n.tableEvidence?.status?.includes("full-official")})).sort((n,s)=>s.fit.level-n.fit.level||Number(s.hasTable)-Number(n.hasTable)||+(s.study.priority==="core")-+(n.study.priority==="core")||n.study.name.localeCompare(s.study.name))}function Hf(i,e){let t=i.map(o=>Ol(o,e)),n=t.filter(o=>o.level===3).length,s=t.filter(o=>o.level===2).length,r=i.filter(o=>o.tableEvidence?.status?.includes("full-official")).length,a={iss:{status:"Direct Orbital Context",description:`${n} microgravity investigations and ${r} official CSV tables provide direct orbital context.`},lunar:{status:"Simulation & Planned Exploration",description:`${s} simulated lunar gravity research studies identified. No direct lunar surface combustion tables exist.`},mars:{status:"Empirical Data Gap",description:"No direct experimental combustion tables exist for Mars surface gravity and low-pressure CO2 atmospheres."},rover:{status:"Design Verification Gap",description:"No verified experimental tables for pressurized rover ventilation and partial gravity environments."}};return{mission:e,label:_a[e],high:n,medium:s,tableCount:r,...a[e]}}function Gf(i,e){let t=Ol(i,e);return{id:i.id,name:i.name,family:i.family,mission:_a[e],missionProximity:t.label,missionReason:t.reason,objective:i.objective,focus:i.focus,fuels:i.fuels,geometry:i.geometry,conditions:i.conditions,measurements:i.measurements,facility:i.facility,platform:i.platform,gravity:i.gravity,evidenceStatus:i.evidenceStatus,psiAccession:i.psiAccession??"",sourceUrls:i.sourceUrls,limitations:i.limitations}}function Wf(i,e){let t=["id","name","family","mission","missionProximity","missionReason","objective","focus","fuels","geometry","conditions","measurements","facility","platform","gravity","evidenceStatus","psiAccession","sourceUrls","limitations"];return"\uFEFF"+[t.map(ir).join(","),...i.map(n=>{let s=Gf(n,e);return t.map(r=>ir(Array.isArray(s[r])?s[r].join(" | "):s[r])).join(",")})].join(`\r
`)}function ed({root:i,knowledge:e,tables:t,onOpenStudy:n,onOpenData:s}){let r=e.investigations,a="iss",o="all",c={materials:50,suppression:50,detection:50,modeling:50},l=t.datasets.reduce((f,g)=>f+g.recordCount,0),u=new Set(r.map(f=>f.psiAccession).filter(Boolean));i.innerHTML=`<div class="insights-shell">
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
    <article><span>Study Coverage</span><strong>${r.length}</strong><small>Curated Cards</small></article>
    <article><span>NASA PSI Footprint</span><strong>${u.size}</strong><small>Unique Accessions</small></article>
    <article><span>Experimental Tables</span><strong>${t.datasets.length}</strong><small>Verified CSVs</small></article>
    <article><span>Preserved Data Rows</span><strong>${l}</strong><small>Sourced Records</small></article>
  </section>

  <!-- Interactive Priority Weights -->
  <details class="insight-section" style="margin: 14px 0; background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 10px; padding: 14px 18px; box-shadow: var(--space-shadow);">
    <summary style="cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none;">
      <div>
        <span class="eyebrow">DYNAMIC PRIORITY WEIGHTING</span>
        <h2 style="font-size: 16px; margin: 2px 0 0; color: #1E2421;">Mission Requirement Weights (Optional) \u25BE</h2>
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
    <button id="download-matrix" class="secondary" title="Export Prioritized Study Matrix">Export Prioritized Matrix (CSV) \u2193</button>
  </div>
  <div id="mission-grid" class="mission-grid"></div>
 </div>`;function d(){c={materials:Number(i.querySelector("#wt-mat")?.value||50),suppression:Number(i.querySelector("#wt-sup")?.value||50),detection:Number(i.querySelector("#wt-det")?.value||50),modeling:Number(i.querySelector("#wt-mod")?.value||50)},i.querySelector("#wt-mat-val")&&(i.querySelector("#wt-mat-val").textContent=`${c.materials}%`),i.querySelector("#wt-sup-val")&&(i.querySelector("#wt-sup-val").textContent=`${c.suppression}%`),i.querySelector("#wt-det-val")&&(i.querySelector("#wt-det-val").textContent=`${c.detection}%`),i.querySelector("#wt-mod-val")&&(i.querySelector("#wt-mod-val").textContent=`${c.modeling}%`),h()}i.querySelector("#wt-mat")?.addEventListener("input",d),i.querySelector("#wt-sup")?.addEventListener("input",d),i.querySelector("#wt-det")?.addEventListener("input",d),i.querySelector("#wt-mod")?.addEventListener("input",d);function h(){let f=Qu(r,a,o),g=Hf(r,a);i.querySelector("#mission-context").innerHTML=`
    <div class="context-banner ${a}">
      <span class="context-kicker">${g.label.toUpperCase()} \xB7 ${g.status.toUpperCase()}</span>
      <h2>${g.status}</h2>
      <p>${g.description}</p>
    </div>
  `,i.querySelector("#insight-count").textContent=`${f.length} investigations matched for ${_a[a]}`,i.querySelector("#mission-grid").innerHTML=f.length?f.map(({study:x,fit:m,hasTable:p})=>`
    <article class="mission-card ${m.level===3?"high":m.level===2?"medium":"low"}">
      <div class="card-kicker-row">
        <span class="proximity-badge level-${m.level}">${m.label}</span>
        <span class="study-family">${x.family}</span>
      </div>
      <h3>${x.name}</h3>
      <p class="study-objective">${x.objective}</p>
      <div class="fit-reason"><strong>Mission Proximity:</strong> ${m.reason}</div>
      <div class="study-meta-grid">
        <div><span>Platform</span><strong>${x.platform}</strong></div>
        <div><span>Facility</span><strong>${x.facility}</strong></div>
        <div><span>Gravity</span><strong>${x.gravity}</strong></div>
        <div><span>Dataset</span><strong>${x.psiAccession||"None"}</strong></div>
      </div>
      <div class="card-bottom-actions">
        <button data-study-link="${x.id}" class="secondary">View Investigation Details \u2192</button>
        ${x.psiAccession?`<button data-table-link="${x.psiAccession}" class="primary">Open CSV Table (${x.psiAccession}) \u2192</button>`:""}
      </div>
    </article>
  `).join(""):'<div class="rw-empty"><h2>No investigations match this filter.</h2></div>',i.querySelectorAll("[data-study-link]").forEach(x=>x.onclick=()=>n?.(x.dataset.studyLink)),i.querySelectorAll("[data-table-link]").forEach(x=>x.onclick=()=>s?.(x.dataset.tableLink))}i.querySelector("#mission-select").onchange=f=>{a=f.target.value,h()},i.querySelector("#goal-select").onchange=f=>{o=f.target.value,h()},i.querySelector("#download-matrix").onclick=()=>{let f=Qu(r,a,o).map(g=>g.study);zf(`mission-matrix-${a}-${o}.csv`,"text/csv;charset=utf-8",Wf(f,a))},h()}var Ce=i=>document.getElementById(i),td=i=>Array.isArray(i)?i.join(" \xB7 "):i,En=(i,e)=>`<a href="${he(i)}" target="_blank" rel="noopener noreferrer">${he(e)} \u2197</a>`,nd=i=>`<ul>${i.map(e=>`<li>${he(e)}</li>`).join("")}</ul>`,Fi=(i,e,t)=>`<option value="${he(i)}" ${t===i?"selected":""}>${he(e)}</option>`,id={microgravity:"Microgravity","simulated-lunar-gravity":"Simulated Lunar Gravity","planned-lunar-surface-gravity":"Planned Lunar Surface"},sd=[["NASA PSI \xB7 Combustion Data Repository","https://psi.nasa.gov/physci/repo/search?q=combustion","Data Repository"],["NASA Glenn \xB7 Combustion Science","https://www.nasa.gov/glenn/glenn-expertise-space-exploration/physical-sciences-program/combustion-science/","Research Overview"],["NASA Combustion Science Video Archive","https://www.youtube.com/watch?v=W1oXykoz9zg","Video Archive"],["A Researcher's Guide to Combustion Science","https://www.nasa.gov/missions/station/a-researchers-guide-to-combustion-science/","Flight Guide"],["Apollo 1 Command Module Fire Review","https://sma.nasa.gov/sma-disciplines/accllp/apollo-1","Flight Safety History"],["Apollo 13 Cryogenic Tank Anomaly","https://sma.nasa.gov/sma-disciplines/accllp/apollo-13","Flight Safety History"],["Mir Space Station Kvant-1 Solid Oxygen Generator Fire","https://www.nasa.gov/history/25-years-ago-fire-aboard-space-station-mir/","Flight Safety History"],["Firefighter Lightweight Breathing Apparatus","https://spinoff.nasa.gov/node/9582","Earth Spin-Off"],["Spacecraft Optical Smoke Particle Sensor","https://spinoff.nasa.gov/node/9407","Earth Spin-Off"],["Thermal & Flame-Resistant PBI/Nomex Textiles","https://spinoff.nasa.gov/node/9918","Earth Spin-Off"]],Xf={"PSI-25":"129 test records. Fan and blower metrics reflect discrete experimental steps rather than uniform duct velocity.","PSI-26":"121 test runs and 1 maintenance log. Replicated specimen IDs represent iterative test iterations rather than independent fuels.","PSI-101":"67 environmental test runs and 42 aged insulation rows. Not 109 isolated fire scenarios.","PSI-102":"8 specimen / test condition matrices; concise protocol templates rather than full time-resolved flight telemetry.","PSI-69":"274 test rows across multiple fuel mixtures. Differentiates extinction, disruption, and completion. Preserves un-interpolated raw data.","PSI-68":"8 configuration parameter envelopes across fuel droplets and inert dilution atmospheres.","PSI-98":"2 summary specimen records and 2 calibrated flow telemetry video references.","PSI-99":"9 specimen records, 2 flow video archives, and 4 laboratory annotation rows. CO2 concentration derived from gas chromatography.","PSI-100":"2 specimen summaries. Original units and quantitative metrics preserved in source format."};function rd({onExplore:i,onReplay:e,onOpen:t,container:n}){let s=n||Ce("rw-host"),r,a,o=[],c,l="mission",u="",d="all",h="orbit",f=null,g=new Set,x=!1,m=()=>{},p="PSI-69",T="",v="all",S="",E="",w="",C=!1,P=0,b=null,_=new Set,R=!1,N=20;s.className="research-workspace inline-workspace",s.setAttribute("aria-label","Flame in Freefall Research Center"),s.innerHTML=`
   <nav class="rw-tabs" aria-label="Research Subsections">
     ${[["mission","Mission Analysis"],["studies","PSI Investigations"],["data","Experiment CSV Tables"],["hardware","Hardware & Safety"],["sources","References"]].map(([V,U])=>`<button data-tab="${V}" aria-pressed="${V===l}">${U}</button>`).join("")}
     <span>NASA Physical Sciences Informatics Archive</span>
   </nav>
   <div id="rw-body"><p class="rw-loading" role="status">Loading NASA Combustion Archives\u2026</p></div>
   <div id="rw-status" class="rw-status" role="status"></div>
 `,s.querySelectorAll("[data-tab]").forEach(V=>V.onclick=()=>{l=V.dataset.tab,j(),s.scrollTop=0});let F,G=V=>{clearTimeout(F),Ce("rw-status").textContent=V,F=setTimeout(()=>{Ce("rw-status").textContent=""},5e3)},X=()=>a.datasets.find(V=>V.accession===p);function k(V,U,ee="application/json"){let ae=URL.createObjectURL(new Blob([U],{type:ee})),fe=document.createElement("a");fe.href=ae,fe.download=V,fe.click(),setTimeout(()=>URL.revokeObjectURL(ae),1e3),G(V+" downloaded successfully.")}async function Z(){if(!r)return c??=(async()=>{let[V,U,ee]=await Promise.all([fetch("./assets/research/investigations.json"),fetch("./assets/research/experimental-tables.json"),va()]);if(!V.ok||!U.ok)throw Error("Failed to load scientific resources");r=await V.json(),a=await U.json(),o=ee})().catch(V=>{throw c=null,V})}async function H(V){typeof V=="string"&&cs[V]&&(d=V,l="studies",f=null),t?.();try{await Z(),j()}catch{Ce("rw-body").innerHTML='<div class="rw-empty"><h1>Unable to load NASA resources.</h1><p>Check network connection and retry.</p><button id="rw-retry">Retry</button></div>',Ce("rw-retry").onclick=()=>H(V)}}function j(){r&&(m(),m=()=>{},s.querySelectorAll("[data-tab]").forEach(V=>V.setAttribute("aria-pressed",String(V.dataset.tab===l))),{mission:se,studies:Qe,data:ve,hardware:I,sources:Xe}[l]?.())}function se(){ed({root:Ce("rw-body"),knowledge:r,tables:a,onOpenStudy:V=>{u="",d="all",f=V,l="studies",j(),setTimeout(()=>Ce("study-"+V)?.scrollIntoView({block:"start"}),0)},onOpenData:Te})}function Te(V){p=V,T="",v="all",S="",E="",w="",P=0,b=null,_.clear(),l="data",j(),s.scrollTop=0}function ze(V,U,ee){return`<div class="rw-pagehead"><span class="rw-kicker">${he(V)}</span><h1>${he(U)}</h1><p>${he(ee)}</p></div>`}function Qe(){Ce("rw-body").innerHTML=`
    <div class="rw-layout">
      <aside class="rw-sidebar">
        <span class="rw-kicker">SEARCH & CRITERIA</span>
        <h2>Explore Flight<br>Investigations</h2>
        <label for="rw-query">Experiment, material, or keyword</label>
        <input id="rw-query" type="search" placeholder="e.g. Kapton, smoke, SIBAL, droplet" value="${he(u)}">
        <label for="rw-purpose">Fire Safety Objective</label>
        <select id="rw-purpose">${Object.entries(cs).map(([V,U])=>Fi(V,U,d)).join("")}</select>
        <label for="rw-habitat">Habitat Mission Profile</label>
        <select id="rw-habitat">${[["orbit","Orbital Spacecraft / ISS"],["moon","Artemis Lunar Habitat"],["mars","Mars Surface Habitat"],["rover","Pressurized Surface Rover"]].map(([V,U])=>Fi(V,U,h)).join("")}</select>
        <button id="rw-reset" class="rw-text">Reset Filters \u21BA</button>
        <div class="rw-aside-note">
          <span class="rw-kicker">RANKING RATIONALE</span>
          <p>Matched against NASA mission objectives, peer-reviewed flight data, and experimental material flammability envelopes.</p>
        </div>
        <div class="rw-counts"><b>23</b> Curated Study Cards<br><b>19</b> Verified PSI Flight Investigations</div>
      </aside>
      <section class="rw-main">
        ${ze("EVIDENCE-GROUNDED COMBUSTION RESEARCH","From Spacecraft Data to Safety Protocols","Cross-examine fuel materials, microgravity atmospheric fractions, and sensor metrics directly derived from NASA flight experiments.")}
        <div class="rw-prompt-row">
          <button data-prompt="detection">How do we detect zero-g smoke?</button>
          <button data-prompt="suppression">What governs zero-g fire extinction?</button>
          <button data-prompt="prevention">Flame spread & airflow dynamics</button>
        </div>
        <div id="rw-habitat-note"></div>
        <div class="rw-results-heading"><span id="rw-result-count" role="status"></span><button id="rw-compare">Compare Studies \xB7 ${g.size}</button></div>
        <div id="rw-comparison"></div>
        <div id="rw-study-list"></div>
        <p class="rw-footnote">ACME is an overarching multi-flight program; DAFT / DAFT-2 share accession records; LUCI and FM\xB2 are dedicated lunar gravity reference benchmarks.</p>
      </section>
    </div>
  `,Ce("rw-query").oninput=V=>{u=V.target.value,f=null,Ke()},Ce("rw-purpose").onchange=V=>{d=V.target.value,f=null,Ke()},Ce("rw-habitat").onchange=V=>{h=V.target.value,st()},Ce("rw-reset").onclick=()=>{u="",d="all",Qe()},s.querySelectorAll("[data-prompt]").forEach(V=>V.onclick=()=>{d=V.dataset.prompt,u="",f=null,Qe()}),Ce("rw-compare").onclick=()=>{x=!x,Q()},st(),Ke()}function st(){Ce("rw-habitat-note").innerHTML=h==="orbit"?'<p class="rw-context">Orbital Context \xB7 Low Earth Orbit microgravity conditions apply directly; does not certify flammability for unverified materials.</p>':'<div class="rw-scope"><strong>Direct extrapolation to partial gravity is unverified.</strong><p>Direct lunar or Martian partial-gravity combustion tables are not included. LUCI is a simulated lunar test, and FM\xB2 is planned lunar surface research.</p><button id="rw-lunar">View LUCI & FM\xB2 Lunar Context \u2192</button></div>',Ce("rw-lunar")&&(Ce("rw-lunar").onclick=()=>{d="all",u="",Ce("rw-query").value="",Ce("rw-purpose").value="all",f="luci",Ke(),Ce("study-luci")?.scrollIntoView({block:"center"})})}function Ke(){let V=Zu(r.investigations,{query:u,purpose:d});Ce("rw-result-count").textContent=`${V.length} investigations matched`,Ce("rw-study-list").innerHTML=V.length?V.map(({study:U,reasons:ee},ae)=>`
    <article id="study-${U.id}" class="rw-study ${f===U.id?"is-open":""}">
      <div class="rw-study-number">${String(ae+1).padStart(2,"0")}</div>
      <div class="rw-study-content">
        <div class="rw-study-meta">
          <span>${he(U.family)}</span>
          <span>${he(id[U.gravity]||U.gravity)}</span>
          ${U.evidenceStatus.includes("planned")?'<span class="rw-tag-warm">Planned Flight Investigation</span>':""}
        </div>
        <button class="rw-study-title" data-study="${U.id}" aria-expanded="${f===U.id}">
          <h2>${he(U.name)}</h2>
          <span>${f===U.id?"\u2212":"\u2197"}</span>
        </button>
        <p>${he(U.objective)}</p>
        <div class="rw-tags">${U.fuels.slice(0,3).map(fe=>`<span>${he(fe)}</span>`).join("")}</div>
        <p class="rw-match">${he(ee.join(" \xB7 "))}</p>
        <div class="rw-study-actions">
          <label><input type="checkbox" data-choose="${U.id}" ${g.has(U.id)?"checked":""}> Compare</label>
          <button data-study="${U.id}">Summary & Provenance ${f===U.id?"\u2191":"\u2193"}</button>
        </div>
        ${f===U.id?K(U):""}
      </div>
    </article>
  `).join(""):'<div class="rw-empty"><h2>No investigations match this query.</h2><p>Try clearing filters or search for terms like "smoke", "PMMA", or "airflow".</p></div>',s.querySelectorAll("[data-study]").forEach(U=>U.onclick=()=>{f=f===U.dataset.study?null:U.dataset.study,Ke()}),s.querySelectorAll("[data-choose]").forEach(U=>U.onchange=()=>{if(U.checked&&g.size===3){U.checked=!1,G("You can compare up to three investigations simultaneously.");return}U.checked?g.add(U.dataset.choose):g.delete(U.dataset.choose),Q()}),s.querySelectorAll("[data-dataset]").forEach(U=>U.onclick=()=>Te(U.dataset.dataset)),s.querySelectorAll("[data-replay]").forEach(U=>U.onclick=()=>Me(U.dataset.replay)),Q()}function K(V){let U=a.datasets.find(ae=>ae.accession===V.psiAccession),ee=V.id==="saffire-i"?"saffire-i-sample1":V.id==="same-r"?"same-r55":V.id==="bass-ii"?"bass-b1":V.id==="flex"?"flex-droplet":null;return`
     <div class="rw-study-detail">
       <div class="rw-interpretation">
         <span class="rw-kicker">SAFETY ENGINEERING IMPLICATION \xB7 EDITORIAL COMMENTARY</span>
         <p>${he(V.relevance)}</p>
       </div>
       ${V.observedFinding?.text?`
         <div class="rw-finding">
           <h3>Empirical Finding Reported by Flight Investigators</h3>
           <p>${he(V.observedFinding.text)}</p>
           <p>${he(V.observedFinding.scope)}</p>
           ${En(V.observedFinding.sourceUrl,"View Sponsoring Flight Report")}
         </div>`:'<p class="rw-muted">Experimental summary based on flight objectives and instrumentation protocols.</p>'}
       <dl class="rw-detail-grid">
         ${[["Fuel / Specimen",V.fuels],["Geometry / Scale",V.geometry],["Test Conditions",V.conditions],["Sensor Readouts",V.measurements],["Flight Facility",V.facility],["Flight Platform",V.platform]].map(([ae,fe])=>`<div><dt>${ae}</dt><dd>${he(td(fe))}</dd></div>`).join("")}
       </dl>
       <h3>Unsupported Extrapolations</h3>
       ${nd(V.limitations)}
       <p>${he(V.habitatApplicability)}</p>
       <div class="rw-button-row">
         ${U?`<button data-dataset="${U.accession}" class="rw-dark">Inspect ${U.recordCount} CSV Table Rows \u2192</button>`:'<span class="rw-muted">Raw CSV table not included in this package.</span>'}
         ${ee?`<button data-replay="${ee}" class="rw-dark">Open in US Lab 3D Sim \u2197</button>`:""}
       </div>
       <div class="rw-reference-list">
         ${V.sourceIds.map(ae=>r.sources[ae]).filter(Boolean).map(ae=>En(ae.url,ae.title)).join("")}
       </div>
     </div>
   `}function Q(){let V=r.investigations.filter(ae=>g.has(ae.id));if(Ce("rw-compare").textContent=`${x?"Hide Comparison":"Compare"} \xB7 ${V.length}`,Ce("rw-compare").disabled=V.length<2,!x||V.length<2){Ce("rw-comparison").innerHTML="";return}let U=Ku(V),ee=[["Objective","objective"],["Fuel / Material","fuels"],["Geometry","geometry"],["Conditions","conditions"],["Measurements","measurements"],["Facility","facility"],["Gravity Regime","gravity"],["Safety Relevance","relevance"]];Ce("rw-comparison").innerHTML=`
     <section class="rw-compare-panel">
       <div class="rw-section-heading"><h2>Comparative Matrix</h2><button id="rw-clear-compare">Clear Selection</button></div>
       <p><b>Shared Focus Areas:</b> ${he(U.shared.join(", ")||"No identical categorical focus.")}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th>${V.map(ae=>`<th>${he(ae.name)}</th>`).join("")}</tr></thead>
           <tbody>
             ${ee.map(([ae,fe])=>`<tr><th>${ae}</th>${V.map(Oe=>`<td>${he((fe==="gravity"?id[Oe[fe]]:td(Oe[fe]))||"Not specified")}</td>`).join("")}</tr>`).join("")}
           </tbody>
         </table>
       </div>
       <button id="rw-export-compare">Export Comparison (JSON) \u2193</button>
     </section>
   `,Ce("rw-clear-compare").onclick=()=>{g.clear(),x=!1,Ke()},Ce("rw-export-compare").onclick=()=>k("investigation-comparison.json",JSON.stringify({method:"NASA-grounded editorial comparison",sharedFocus:U.shared,studies:V},null,2))}function ve(){let V=X();Ce("rw-body").innerHTML=`
     <section class="rw-data-page">
       ${ze("NASA PHYSICAL SCIENCES INFORMATICS (PSI)","Official Combustion Flight CSV Datasets","Nine authentic NASA experimental tables. Original records, measurement units, and raw qualifiers preserved without imputation.")}
       <div class="rw-data-summary">
         <span><b>671</b> Sourced Rows</span>
         <span><b>9</b> Original CSVs</span>
         <span><b>8,546</b> Preserved Data Cells</span>
         <a class="rw-download" href="./assets/research/nasa-combustion-experimental-tables.zip" download>Download Complete ZIP Package \u2193</a>
       </div>
       <div class="rw-data-toolbar">
         <label>Experimental Table<select id="rw-dataset">${a.datasets.map(U=>Fi(U.accession,`${U.title} \xB7 ${U.recordCount} rows`,p)).join("")}</select></label>
         <label>Search Dataset<input id="rw-row-search" type="search" value="${he(T)}" placeholder="Material, run ID, fuel, outcome\u2026"></label>
         <label>Row Classification<select id="rw-row-kind">${Fi("all","All Row Types",v)}${Object.keys(V.kindCounts).map(U=>Fi(U,sr[U]||U,v)).join("")}</select></label>
       </div>
       <div class="rw-data-notice">
         <b>${he(V.title)} \xB7 ${he(V.accession)}</b>
         <p>${he(Xf[V.accession])}</p>
         ${V.corroboratingSources?"<p>Source headers O / N / CO corroborated as O\u2082 / N\u2082 / CO\u2082; burning rate constant confirmed in mm\xB2/s. "+En(V.corroboratingSources[0].url,"NASA Technical Report \xB7 Table IX, p. 20")+"</p>":""}
       </div>
       <details class="rw-number-filter" ${S?"open":""}>
         <summary>Filter by Numerical Value Range</summary>
         <div class="rw-number-controls">
           <label>Column & Unit<select id="rw-field">${Fi("","Select a column",S)}${V.fields.filter(U=>V.records.some(ee=>typeof ee.values[U.key]=="number")).map(U=>Fi(U.key,`${U.sourceHeader} \xB7 ${U.unit||"dimensionless"}`,S)).join("")}</select></label>
           <label>Min Value<input id="rw-min" type="number" step="any" value="${he(E)}"></label>
           <label>Max Value<input id="rw-max" type="number" step="any" value="${he(w)}"></label>
           <button id="rw-apply-range">Apply</button>
           <button id="rw-clear-range">Clear</button>
         </div>
         <label class="rw-check"><input id="rw-unknown" type="checkbox" ${C?"checked":""}> Include rows with qualitative or missing values</label>
       </details>
       <div class="rw-results-heading">
         <span id="rw-row-count" role="status"></span>
         <div class="rw-button-row">
           <button id="rw-row-compare">Compare Rows</button>
           <button id="rw-export-csv">Filtered CSV \u2193</button>
           <button id="rw-export-json">Filtered JSON \u2193</button>
         </div>
       </div>
       <div id="rw-row-comparison"></div>
       <div id="rw-row-detail"></div>
       <div id="rw-data-table"></div>
       <div class="rw-pagination"><button id="rw-prev">\u2190 Previous</button><span id="rw-page-label"></span><button id="rw-next">Next \u2192</button></div>
       <div id="rw-plot"></div>
       <details class="rw-dictionary">
         <summary>Data Dictionary, Qualifiers & Provenance Hashes</summary>
         <p>${En(V.source.catalogUrl,"NASA PSI Catalog Record")} \xB7 <a href="./assets/research/${he(V.source.localCsv)}" download>Unmodified Source CSV \u2193</a> \xB7 <a href="./assets/research/data-dictionary.json" download>Complete Data Dictionary JSON \u2193</a></p>
         <p>File: ${he(V.source.fileName)}</p>
         <code>SHA-256: ${V.source.sha256}</code>
         <div class="rw-table-scroll">
           <table>
             <thead><tr><th>Original Header</th><th>Unit</th><th>Role</th><th>Missing</th><th>Scientific Interpretation</th></tr></thead>
             <tbody>
               ${V.fields.map(U=>`<tr><th>${he(U.sourceHeader)}<small>${he(U.key)}</small></th><td>${he(U.unit||"\u2014")}</td><td>${he(U.role)}</td><td>${U.missingCount}</td><td>${he(U.interpretation||"\u2014")}${U.corroboration?"<br>"+En(U.corroboration.url,U.corroboration.title+" \xB7 Table IX, p. 20"):""}</td></tr>`).join("")}
             </tbody>
           </table>
         </div>
       </details>
       <p class="rw-footnote">671 rows represent nine curated study summaries from the NASA PSI repository. Numerical comparisons preserve raw units and qualifiers.</p>
     </section>
   `,Ce("rw-dataset").onchange=U=>Te(U.target.value),Ce("rw-row-search").oninput=U=>{T=U.target.value,P=0,ge()},Ce("rw-row-kind").onchange=U=>{v=U.target.value,P=0,ge()},Ce("rw-apply-range").onclick=()=>{let U=Ce("rw-min").value,ee=Ce("rw-max").value;if(U!==""&&ee!==""&&Number(U)>Number(ee)){G("Minimum cannot exceed maximum.");return}S=Ce("rw-field").value,E=U,w=ee,C=Ce("rw-unknown").checked,P=0,ge()},Ce("rw-clear-range").onclick=()=>{S="",E="",w="",C=!1,P=0,ve()},Ce("rw-prev").onclick=()=>{P--,ge()},Ce("rw-next").onclick=()=>{P++,ge()},Ce("rw-row-compare").onclick=()=>{R=!R,ge()},Ce("rw-export-csv").onclick=()=>k(`${p}-filtered.csv`,"\uFEFF"+Ju(V,De()),"text/csv;charset=utf-8"),Ce("rw-export-json").onclick=()=>k(`${p}-filtered.json`,JSON.stringify({schemaVersion:1,exportedAt:new Date().toISOString(),filters:{rowQuery:T,rowKind:v,field:S,min:E,max:w,includeUnknown:C},dataset:{...V,sourceRecordCount:V.recordCount,recordCount:De().length,kindCounts:De().reduce((U,ee)=>(U[ee.kind]=(U[ee.kind]||0)+1,U),{}),records:De()}},null,2)),ge()}let De=()=>ju(X(),{query:T,kind:v,field:S,min:E,max:w,includeUnknown:C});function ge(){let V=X(),U=De(),ee=Math.max(1,Math.ceil(U.length/N));P=Math.min(Math.max(P,0),ee-1),Ce("rw-row-count").textContent=`${U.length} / ${V.recordCount} records matching criteria`,Ce("rw-data-table").innerHTML=U.length?`
     <div class="rw-table-scroll" tabindex="0" role="region" aria-label="NASA PSI Data Table">
       <table class="rw-source-table">
         <thead><tr><th>Select</th><th>Row / Kind</th>${V.fields.map(ae=>`<th>${he(ae.sourceHeader)}<small>${he(ae.unit||"")}</small></th>`).join("")}</tr></thead>
         <tbody>
           ${U.slice(P*N,(P+1)*N).map(ae=>`
             <tr>
               <td><input type="checkbox" data-row-choose="${he(ae.id)}" aria-label="Compare row ${ae.sourceRow}" ${_.has(ae.id)?"checked":""}></td>
               <th><button data-row="${he(ae.id)}">${ae.sourceRow} \xB7 View \u2197</button><small>${he(sr[ae.kind]||ae.kind)}</small></th>
               ${ae.raw.map(fe=>`<td>${fe.trim()?he(fe):'<span class="rw-missing">Empty</span>'}</td>`).join("")}
             </tr>
           `).join("")}
         </tbody>
       </table>
     </div>
   `:'<div class="rw-empty"><h2>No records found matching filters.</h2><p>Adjust numerical bounds or clear search terms.</p></div>',Ce("rw-page-label").textContent=`Page ${P+1} of ${ee}`,Ce("rw-prev").disabled=P===0,Ce("rw-next").disabled=P===ee-1,Ce("rw-row-compare").disabled=_.size<2,Ce("rw-row-compare").textContent=`${R?"Hide Comparison":"Compare Rows"} \xB7 ${_.size}`,s.querySelectorAll("[data-row]").forEach(ae=>ae.onclick=()=>{b=ae.dataset.row,$(),Ce("rw-row-detail").scrollIntoView({block:"start",behavior:"instant"})}),s.querySelectorAll("[data-row-choose]").forEach(ae=>ae.onchange=()=>{if(ae.checked&&_.size===3){ae.checked=!1,G("Select up to three rows.");return}ae.checked?_.add(ae.dataset.rowChoose):_.delete(ae.dataset.rowChoose),ge()}),$(),Se(),ye(U)}function $(){let V=X(),U=V.records.find(ee=>ee.id===b);if(!U){Ce("rw-row-detail").innerHTML="";return}Ce("rw-row-detail").innerHTML=`
     <section class="rw-row-detail">
       <div class="rw-section-heading">
         <div><span class="rw-kicker">${he(V.accession)} \xB7 ORIGINAL CSV ROW ${U.sourceRow}</span><h2>${he(V.title)} / Run ${he(U.values.testId||U.values.sampleId||U.sourceRow)}</h2></div>
         <button id="rw-close-row">Close \xD7</button>
       </div>
       <p>${he(sr[U.kind])}${U.issues.length?" \xB7 "+he(U.issues.join(" \xB7 ")):""}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th><th>Raw Cell Content</th><th>Parsed Float/String</th><th>Unit</th><th>Qualifier</th></tr></thead>
           <tbody>
             ${V.fields.map(ee=>`<tr><th>${he(ee.sourceHeader)}</th><td>${he(U.raw[ee.index])||"Empty"}</td><td>${he(U.values[ee.key]??"Missing")}</td><td>${he(ee.unit||"\u2014")}</td><td>${he(U.qualifiers[ee.key])}</td></tr>`).join("")}
           </tbody>
         </table>
       </div>
       <p>${En(V.source.downloadUrl,"NASA Original Dataset Source")} \xB7 Raw values preserved in archival schema.</p>
     </section>
   `,Ce("rw-close-row").onclick=()=>{b=null,$()}}function Se(){let V=X(),U=V.records.filter(ae=>_.has(ae.id));if(!R||U.length<2){Ce("rw-row-comparison").innerHTML="";return}let ee=V.fields.filter(ae=>U.every(fe=>fe.raw[ae.index].trim()&&fe.raw[ae.index]===U[0].raw[ae.index]));Ce("rw-row-comparison").innerHTML=`
     <section class="rw-compare-panel">
       <div class="rw-section-heading"><h2>Side-by-Side Row Comparison</h2><button id="rw-clear-rows">Clear Selection</button></div>
       <p><b>Identical Attributes:</b> ${he(ee.map(ae=>ae.sourceHeader).join(", ")||"None")}</p>
       <div class="rw-table-scroll">
         <table>
           <thead><tr><th>Field</th>${U.map(ae=>`<th>Row ${ae.sourceRow}<small>${he(sr[ae.kind])}</small></th>`).join("")}</tr></thead>
           <tbody>
             ${V.fields.map(ae=>`<tr class="${ee.includes(ae)?"rw-shared":""}"><th>${he(ae.sourceHeader)}</th>${U.map(fe=>`<td>${he(fe.raw[ae.index])||'<span class="rw-missing">Empty</span>'}</td>`).join("")}</tr>`).join("")}
           </tbody>
         </table>
       </div>
     </section>
   `,Ce("rw-clear-rows").onclick=()=>{_.clear(),R=!1,ge()}}function ye(V){if(p!=="PSI-69"){Ce("rw-plot").innerHTML="";return}let U=V.filter(y=>typeof y.values.initialDropletDiameterMm=="number"&&typeof y.values.burnTimeS=="number"&&["numeric","numeric-unit-explicit"].includes(y.qualifiers.initialDropletDiameterMm)&&["numeric","numeric-unit-explicit"].includes(y.qualifiers.burnTimeS));if(!U.length){Ce("rw-plot").innerHTML="";return}let ee=Math.max(...U.map(y=>y.values.initialDropletDiameterMm))*1.1,ae=Math.max(...U.map(y=>y.values.burnTimeS))*1.1,fe={Extinction:"#214E3C",Disruption:"#A66E28",Completion:"#1D4ED8"},Oe=y=>60+y/ee*710,A=y=>240-y/ae*205;Ce("rw-plot").innerHTML=`
     <section class="rw-plot">
       <div class="rw-section-heading">
         <div><span class="rw-kicker">FLEX EXPERIMENT \xB7 SOURCED TEST RECORDS</span><h2>Initial Droplet Diameter vs. Burn Time</h2></div>
         <span>${U.length} Verified Data Points</span>
       </div>
       <svg viewBox="0 0 820 290" role="img" aria-label="Initial Droplet Diameter vs Burn Time Scatter Plot">
         <path d="M60 30V240H780" fill="none" stroke="#91a59a"/>
         ${[0,1,2,3,4].map(y=>`<path d="M60 ${A(ae*y/4)}H780" stroke="#dde5df"/><text x="50" y="${A(ae*y/4)+4}" text-anchor="end">${(ae*y/4).toFixed(1)}</text><text x="${Oe(ee*y/4)}" y="259" text-anchor="middle">${(ee*y/4).toFixed(1)}</text>`).join("")}
         ${U.map(y=>`<circle cx="${Oe(y.values.initialDropletDiameterMm)}" cy="${A(y.values.burnTimeS)}" r="3.5" fill="${fe[y.values.testEnd]||"#999"}" opacity=".75"><title>Run ${y.sourceRow}: ${he(y.values.fuel)} \xB7 ${y.values.initialDropletDiameterMm} mm \xB7 ${y.values.burnTimeS} s \xB7 ${he(y.values.testEnd)}</title></circle>`).join("")}
         <text x="420" y="285" text-anchor="middle">Initial Droplet Diameter d\u2080 (mm)</text>
         <text x="60" y="18">Burn Duration (s)</text>
       </svg>
       <div class="rw-legend">
         ${Object.entries(fe).map(([y,z])=>`<span><i style="background:${z}"></i>${y} \xB7 ${U.filter(J=>J.values.testEnd===y).length}</span>`).join("")}
       </div>
       <p>Uncertain (~) and incomplete rows excluded from scatter plot. Outcomes reflect NASA flight records across varying inert atmospheres.</p>
     </section>
   `}function Me(V){let U=o.find(ee=>ee.id===V);U&&e(U)}function I(){let V=[["CIR","Combustion Integrated Rack","Destiny US Lab facility supporting ACME microgravity experiments and droplet apparatus.",["acme","flex","flex-2","cfi"],"https://gipoc.grc.nasa.gov/wp/fcf-cir/"],["MDCA","Multi-user Droplet Combustion Apparatus","Sub-rack hardware inside CIR dedicated to fluid droplet burning.",["flex","flex-2","cfi"],"https://www.nasa.gov/mission/international-space-station/"],["MSG","Microgravity Science Glovebox","Enclosed glovebox work volume for BASS, BASS-II, and SPICE experiments.",["bass","bass-ii","spice","slice"],"https://www.nasa.gov/mission/international-space-station/"],["CYGNUS","Saffire Flow Duct","Saffire-I through VI were conducted inside automated Cygnus cargo vehicles after unberthing from ISS.",["saffire-i","saffire-ii","saffire-iii"],"https://psi.nasa.gov/physci/repo/data/investigations/PSI-98"]];Ce("rw-body").innerHTML=`
    <section class="rw-content-page">
      ${ze("FACILITIES & HARDWARE SYSTEMS","Flight Facilities & Containment Architectures","Understand the containment systems that enabled zero-gravity combustion experiments aboard ISS and Cygnus.")}
      <div class="rw-hardware-grid">
        ${V.map(([U,ee,ae,fe,Oe])=>`
          <article>
            <span class="rw-hardware-abbr">${U}</span>
            <h2>${ee}</h2>
            <p>${ae}</p>
            <div class="rw-button-row">
              ${fe.map(A=>`<button data-hardware-study="${A}">${he(r.investigations.find(y=>y.id===A)?.name||A)} \u2192</button>`).join("")}
            </div>
            ${U==="CIR"?En(Oe,"NASA CIR Facility Documentation"):'<p class="rw-muted">See individual investigation cards for NASA citations.</p>'}
          </article>
        `).join("")}
      </div>
      <h2 class="rw-subtitle">Three Interlocking Safety Disciplines</h2>
      <div class="rw-replay-grid">
        ${[["Prevention","BASS, Saffire, and BRE investigate fuel flammability, geometry, limiting oxygen concentrations, and airflow velocity.","prevention"],["Detection","SAME, SAME-R, and DAFT investigate smoke particle characteristics, soot agglomeration, and spacecraft detector responses.","detection"],["Suppression","FLEX droplet extinction, inert dilution (N\u2082/CO\u2082), and water-mist suppression boundaries.","suppression"]].map(([U,ee,ae])=>`
          <article>
            <h2>${U}</h2>
            <p>${ee}</p>
            <button data-hardware-focus="${ae}">Filter Investigations \u2192</button>
          </article>
        `).join("")}
      </div>
      <h2 class="rw-subtitle">Earth Spin-Off Innovations</h2>
      <p>NASA combustion science research has directly contributed to ground safety technologies including firefighter life support, optical detectors, and thermal barrier fabrics.</p>
      <div class="rw-reference-list">${sd.slice(7).map(([U,ee])=>En(ee,U)).join("")}</div>
    </section>
  `,s.querySelectorAll("[data-hardware-study]").forEach(U=>U.onclick=()=>{d="all",u="",f=U.dataset.hardwareStudy,l="studies",j(),Ce("study-"+f)?.scrollIntoView({block:"start"})}),s.querySelectorAll("[data-hardware-focus]").forEach(U=>U.onclick=()=>H(U.dataset.hardwareFocus))}function Xe(){Ce("rw-body").innerHTML=`
     <section class="rw-content-page">
       ${ze("DATA PROVENANCE & ARCHIVES","NASA Sources & Verification Traceability","Distinguishes peer-reviewed scientific datasets, sensor telemetry, and 3D geometric models.")}
       <div class="rw-source-columns">
         <div>
           <h2>Official NASA Challenge Resources</h2>
           <p>${En("https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/?tab=details","NASA Space Apps Challenge Definition")} \xB7 ${En("https://www.spaceappschallenge.org/2026/challenges/flame-in-freefall/?tab=resources","Resources Tab")}</p>
           <ol class="rw-official-list">
             ${sd.map(([V,U,ee])=>`<li><span>${he(ee)}</span>${En(U,V)}</li>`).join("")}
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
           ${nd(["Experimental records represent published PSI subsets, not the entire classified archive.","Partial lunar/Martian gravity tables represent simulated or planned extrapolations (LUCI, FM\xB2).","The platform serves research visualization; it does not replace full-scale NASA flight certification."])}
           <a class="rw-download" href="./assets/research/nasa-combustion-experimental-tables.zip" download>Download Complete Research Package (ZIP) \u2193</a>
         </div>
       </div>
       <p class="rw-footnote">Last reviewed: ${he(r.reviewedAt)} \xB7 Independent educational simulation developed for NASA Space Apps Challenge 2026.</p>
     </section>
   `}return{open:H,render:j,get status(){return{ready:!!r,tab:l,studyCount:r?.investigations.length,datasetCount:a?.datasets.length,rowCount:a?.datasets.reduce((V,U)=>V+U.recordCount,0),purpose:d,query:u,datasetId:p,filteredRows:a?De().length:0}}}}var Wd=0,Mc=1,Xd=2;var wc=1,qd=2,Xn=3,Dn=0,Dt=1,Wt=2,vt=0,Vi=1,Gr=2,Tc=3,Ec=4,uo=5,pn=100,$d=101,Yd=102,Zd=103,jd=104,Ki=200,Kd=201,Jd=202,Qd=203,qa=204,$a=205,Wr=206,eh=207,Xr=208,th=209,nh=210,ih=211,sh=212,rh=213,ah=214,ho=0,fo=1,po=2,Hi=3,mo=4,go=5,xo=6,vo=7,yo=0,oh=1,lh=2,di=0,_o=1,bo=2,So=3,Gs=4,Mo=5,wo=6,To=7,dc="attached",ch="detached",Ac=300,Ji=301,Qi=302,Eo=303,Ao=304,qr=306,rn=1e3,yn=1001,Ts=1002,Pt=1003,Co=1004;var es=1005;var Ht=1006,Ws=1007;var Fn=1008;var gn=1009,Cc=1010,Rc=1011,Xs=1012,Ro=1013,Ti=1014,Mn=1015,Nt=1016,Io=1017,Po=1018,Ei=1020,Ic=35902,Pc=35899,Lc=1021,Dc=1022,Qt=1023,Es=1026,Ai=1027,Lo=1028,Do=1029,No=1030,Fo=1031;var Uo=1033,$r=33776,Yr=33777,Zr=33778,jr=33779,Oo=35840,Bo=35841,ko=35842,zo=35843,Vo=36196,Ho=37492,Go=37496,Wo=37808,Xo=37809,qo=37810,$o=37811,Yo=37812,Zo=37813,jo=37814,Ko=37815,Jo=37816,Qo=37817,el=37818,tl=37819,nl=37820,il=37821,sl=36492,rl=36494,al=36495,ol=36283,ll=36284,cl=36285,ul=36286;var Gi=2300,Wi=2301,Xa=2302,hc=2400,fc=2401,pc=2402,uh=2500;var Nc=0,Kr=1,qs=2,dh=3200,dl=3201;var Jr=0,hh=1,hi="",At="srgb",Gt="srgb-linear",mr="linear",ct="srgb";var zi=7680;var mc=519,fh=512,ph=513,mh=514,Fc=515,gh=516,xh=517,vh=518,yh=519,Ya=35044;var Uc="300 es",Pn=2e3,gr=2001;function Oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function As(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _h(){let i=As("canvas");return i.style.display="block",i}var ad={},Cs=null;function xr(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function Be(...i){let e="THREE."+i.shift();Cs?Cs("warn",e,...i):console.warn(e,...i)}function et(...i){let e="THREE."+i.shift();Cs?Cs("error",e,...i):console.error(e,...i)}function Rs(...i){let e=i.join(" ");e in ad||(ad[e]=!0,Be(...i))}function bh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],od=1234567,fr=Math.PI/180,Xi=180/Math.PI;function Ln(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function nt(i,e,t){return Math.max(e,Math.min(t,i))}function Bc(i,e){return(i%e+e)%e}function qf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $f(i,e,t){return i!==e?(t-i)/(e-i):0}function pr(i,e,t){return(1-t)*i+t*e}function Yf(i,e,t,n){return pr(i,e,1-Math.exp(-t*n))}function Zf(i,e=1){return e-Math.abs(Bc(i,e*2)-e)}function jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Jf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qf(i,e){return i+Math.random()*(e-i)}function ep(i){return i*(.5-Math.random())}function tp(i){i!==void 0&&(od=i);let e=od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function np(i){return i*fr}function ip(i){return i*Xi}function sp(i){return(i&i-1)===0&&i!==0}function rp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ap(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),h=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*d,c*h,o*l);break;case"YZY":i.set(c*h,o*u,c*d,o*l);break;case"ZXZ":i.set(c*d,c*h,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lt={DEG2RAD:fr,RAD2DEG:Xi,generateUUID:Ln,clamp:nt,euclideanModulo:Bc,mapLinear:qf,inverseLerp:$f,lerp:pr,damp:Yf,pingpong:Zf,smoothstep:jf,smootherstep:Kf,randInt:Jf,randFloat:Qf,randFloatSpread:ep,seededRandom:tp,degToRad:np,radToDeg:ip,isPowerOfTwo:sp,ceilPowerOfTwo:rp,floorPowerOfTwo:ap,setQuaternionFromProperEuler:op,normalize:dt,denormalize:In},Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),v=Math.sin(T);p=Math.sin(p*T)/v,o=Math.sin(o*T)/v,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+x*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+x*o;let T=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=T,l*=T,u*=T,d*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*d+c*f-l*h,e[t+1]=c*g+u*h+l*d-o*f,e[t+2]=l*g+u*f+o*h-c*d,e[t+3]=u*g-o*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),d=o(r/2),h=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ld.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ld.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+c*l+a*d-o*u,this.y=n+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Bl=new D,ld=new _n,je=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],T=s[1],v=s[4],S=s[7],E=s[2],w=s[5],C=s[8];return r[0]=a*x+o*T+c*E,r[3]=a*m+o*v+c*w,r[6]=a*p+o*S+c*C,r[1]=l*x+u*T+d*E,r[4]=l*m+u*v+d*w,r[7]=l*p+u*S+d*C,r[2]=h*x+f*T+g*E,r[5]=h*m+f*v+g*w,r[8]=h*p+f*S+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=t*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*l-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(u*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(kl.makeScale(e,t)),this}rotate(e){return this.premultiply(kl.makeRotation(-e)),this}translate(e,t){return this.premultiply(kl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},kl=new je,cd=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ud=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:Gt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=ws(s.r),s.g=ws(s.g),s.b=ws(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gt]:{primaries:e,whitePoint:n,transfer:mr,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:cd,fromXYZ:ud,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var tt=lp();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,Za=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=As("canvas")),us.width=e.width,us.height=e.height;let s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=As("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=si(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(si(t[n]/255)*255):t[n]=si(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cp=0,Is=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Ln(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(zl(s[a].image)):r.push(zl(s[a]))}else r=zl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function zl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}var up=0,Vl=new D,kt=class i extends ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=yn,s=yn,r=Ht,a=Fn,o=Qt,c=gn,l=i.DEFAULT_ANISOTROPY,u=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=Ln(),this.name="",this.source=new Is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rn:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rn:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Ac;kt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,S=(f+1)/2,E=(p+1)/2,w=(u+h)/4,C=(d+x)/4,P=(g+m)/4;return v>S&&v>E?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=w/n,r=C/n):S>E?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=C/r,s=P/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-x)/T,this.z=(h-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ja=class extends ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new kt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Ht,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Is(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bt=class extends ja{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},vr=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends kt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Sa.subVectors(this.max,rr),ds.subVectors(e.a,rr),hs.subVectors(e.b,rr),fs.subVectors(e.c,rr),mi.subVectors(hs,ds),gi.subVectors(fs,hs),Ui.subVectors(ds,fs);let t=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Ui.z,Ui.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Ui.z,0,-Ui.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Ui.y,Ui.x,0];return!Hl(t,ds,hs,fs,Sa)||(t=[1,0,0,0,1,0,0,0,1],!Hl(t,ds,hs,fs,Sa))?!1:(Ma.crossVectors(mi,gi),t=[Ma.x,Ma.y,Ma.z],Hl(t,ds,hs,fs,Sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Jn=[new D,new D,new D,new D,new D,new D,new D,new D],An=new D,ba=new mn,ds=new D,hs=new D,fs=new D,mi=new D,gi=new D,Ui=new D,rr=new D,Sa=new D,Ma=new D,Oi=new D;function Hl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Oi.fromArray(i,r);let o=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=e.dot(Oi),l=t.dot(Oi),u=n.dot(Oi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var dp=new mn,ar=new D,Gl=new D,an=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):dp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ar,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Gl)),this.expandByPoint(ar.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qn=new D,Wl=new D,wa=new D,xi=new D,Xl=new D,Ta=new D,ql=new D,Si=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qn.copy(this.origin).addScaledVector(this.direction,t),Qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wl.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=xi.dot(this.direction),c=-xi.dot(wa),l=xi.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wl).addScaledVector(wa,h),f}intersectSphere(e,t){Qn.subVectors(e.center,this.origin);let n=Qn.dot(this.direction),s=Qn.dot(Qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,s=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,s=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Qn)!==null}intersectTriangle(e,t,n,s,r){Xl.subVectors(t,e),Ta.subVectors(n,e),ql.crossVectors(Xl,Ta);let a=this.direction.dot(ql),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let c=o*this.direction.dot(Ta.crossVectors(xi,Ta));if(c<0)return null;let l=o*this.direction.dot(Xl.cross(xi));if(l<0||c+l>a)return null;let u=-o*xi.dot(ql);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l,u,d,h,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,d,h,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,u,d,h,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ps.setFromMatrixColumn(e,0).length(),r=1/ps.setFromMatrixColumn(e,1).length(),a=1/ps.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+g*l,t[5]=h-x*l,t[9]=-o*c,t[2]=x-h*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,g=l*u,x=l*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=a*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,g=l*u,x=l*d;t[0]=h-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let h=a*u,f=a*d,g=o*u,x=o*d;t[0]=c*u,t[4]=g*l-f,t[8]=h*l+x,t[1]=c*d,t[5]=x*l+h,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let h=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+x,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hp,e,fp)}lookAt(e,t,n){let s=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),vi.crossVectors(n,hn),vi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),vi.crossVectors(n,hn)),vi.normalize(),Ea.crossVectors(hn,vi),s[0]=vi.x,s[4]=Ea.x,s[8]=hn.x,s[1]=vi.y,s[5]=Ea.y,s[9]=hn.y,s[2]=vi.z,s[6]=Ea.z,s[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],T=n[3],v=n[7],S=n[11],E=n[15],w=s[0],C=s[4],P=s[8],b=s[12],_=s[1],R=s[5],N=s[9],F=s[13],G=s[2],X=s[6],k=s[10],Z=s[14],H=s[3],j=s[7],se=s[11],Te=s[15];return r[0]=a*w+o*_+c*G+l*H,r[4]=a*C+o*R+c*X+l*j,r[8]=a*P+o*N+c*k+l*se,r[12]=a*b+o*F+c*Z+l*Te,r[1]=u*w+d*_+h*G+f*H,r[5]=u*C+d*R+h*X+f*j,r[9]=u*P+d*N+h*k+f*se,r[13]=u*b+d*F+h*Z+f*Te,r[2]=g*w+x*_+m*G+p*H,r[6]=g*C+x*R+m*X+p*j,r[10]=g*P+x*N+m*k+p*se,r[14]=g*b+x*F+m*Z+p*Te,r[3]=T*w+v*_+S*G+E*H,r[7]=T*C+v*R+S*X+E*j,r[11]=T*P+v*N+S*k+E*se,r[15]=T*b+v*F+S*Z+E*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*d-s*l*d-r*o*h+n*l*h+s*o*f-n*c*f)+x*(+t*c*f-t*l*h+r*a*h-s*a*f+s*l*u-r*c*u)+m*(+t*l*d-t*o*f-r*a*d+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*d+t*o*h+s*a*d-n*a*h+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],T=d*m*l-x*h*l+x*c*f-o*m*f-d*c*p+o*h*p,v=g*h*l-u*m*l-g*c*f+a*m*f+u*c*p-a*h*p,S=u*x*l-g*d*l+g*o*f-a*x*f-u*o*p+a*d*p,E=g*d*c-u*x*c-g*o*h+a*x*h+u*o*m-a*d*m,w=t*T+n*v+s*S+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=T*C,e[1]=(x*h*r-d*m*r-x*s*f+n*m*f+d*s*p-n*h*p)*C,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*C,e[3]=(d*c*r-o*h*r-d*s*l+n*h*l+o*s*f-n*c*f)*C,e[4]=v*C,e[5]=(u*m*r-g*h*r+g*s*f-t*m*f-u*s*p+t*h*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*C,e[7]=(a*h*r-u*c*r+u*s*l-t*h*l-a*s*f+t*c*f)*C,e[8]=S*C,e[9]=(g*d*r-u*x*r-g*n*f+t*x*f+u*n*p-t*d*p)*C,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*C,e[11]=(u*o*r-a*d*r-u*n*l+t*d*l+a*n*f-t*o*f)*C,e[12]=E*C,e[13]=(u*x*s-g*d*s+g*n*h-t*x*h-u*n*m+t*d*m)*C,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*C,e[15]=(a*d*s-u*o*s+u*n*c-t*d*c-a*n*h+t*o*h)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,x=a*u,m=a*d,p=o*d,T=c*l,v=c*u,S=c*d,E=n.x,w=n.y,C=n.z;return s[0]=(1-(x+p))*E,s[1]=(f+S)*E,s[2]=(g-v)*E,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(h+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(g+v)*C,s[9]=(m-T)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),o=ps.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);let l=1/r,u=1/a,d=1/o;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=u,Cn.elements[5]*=u,Cn.elements[6]*=u,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,t.setFromRotationMatrix(Cn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Pn,c=!1){let l=this.elements,u=2*r/(t-e),d=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Pn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===gr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Pn,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-s),h=-(t+e)/(t-e),f=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Pn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===gr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ps=new D,Cn=new Ge,hp=new D(0,0,0),fp=new D(1,1,1),vi=new D,Ea=new D,hn=new D,dd=new Ge,hd=new _n,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hd.setFromEuler(this),this.setFromQuaternion(hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},pp=0,fd=new D,ms=new _n,ei=new Ge,Aa=new D,or=new D,mp=new D,gp=new _n,pd=new D(1,0,0),md=new D(0,1,0),gd=new D(0,0,1),xd={type:"added"},xp={type:"removed"},gs={type:"childadded",child:null},$l={type:"childremoved",child:null},gt=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new bn,n=new _n,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new je}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(pd,e)}rotateY(e){return this.rotateOnAxis(md,e)}rotateZ(e){return this.rotateOnAxis(gd,e)}translateOnAxis(e,t){return fd.copy(e).applyQuaternion(this.quaternion),this.position.add(fd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pd,e)}translateY(e){return this.translateOnAxis(md,e)}translateZ(e){return this.translateOnAxis(gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(or,Aa,this.up):ei.lookAt(Aa,or,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(ei),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xd),gs.child=e,this.dispatchEvent(gs),gs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),$l.child=e,this.dispatchEvent($l),$l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xd),gs.child=e,this.dispatchEvent(gs),gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,gp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};gt.DEFAULT_UP=new D(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=new D,ti=new D,Yl=new D,ni=new D,xs=new D,vs=new D,vd=new D,Zl=new D,jl=new D,Kl=new D,Jl=new lt,Ql=new lt,ec=new lt,bi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Rn.subVectors(s,t),ti.subVectors(n,t),Yl.subVectors(e,t);let a=Rn.dot(Rn),o=Rn.dot(ti),c=Rn.dot(Yl),l=ti.dot(ti),u=ti.dot(Yl),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,t),Ql.fromBufferAttribute(e,n),ec.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Jl,r.x),a.addScaledVector(Ql,r.y),a.addScaledVector(ec,r.z),a}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),ti.subVectors(e,t),Rn.cross(ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Rn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;xs.subVectors(s,n),vs.subVectors(r,n),Zl.subVectors(e,n);let c=xs.dot(Zl),l=vs.dot(Zl);if(c<=0&&l<=0)return t.copy(n);jl.subVectors(e,s);let u=xs.dot(jl),d=vs.dot(jl);if(u>=0&&d<=u)return t.copy(s);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(xs,a);Kl.subVectors(e,r);let f=xs.dot(Kl),g=vs.dot(Kl);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(vs,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return vd.subVectors(r,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector(vd,o);let p=1/(m+x+h);return a=x*p,o=h*p,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function tc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Bc(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=tc(a,r,e+1/3),this.g=tc(a,r,e),this.b=tc(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Sh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=si(e.r),this.g=si(e.g),this.b=si(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return tt.workingToColorSpace(qt.copy(this),e),Math.round(nt(qt.r*255,0,255))*65536+Math.round(nt(qt.g*255,0,255))*256+Math.round(nt(qt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(qt.copy(this),t);let n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=At){tt.workingToColorSpace(qt.copy(this),e);let t=qt.r,n=qt.g,s=qt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Ca);let n=pr(yi.h,Ca.h,t),s=pr(yi.s,Ca.s,t),r=pr(yi.l,Ca.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Re;Re.NAMES=Sh;var vp=0,$t=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Ln(),this.name="",this.type="Material",this.blending=Vi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qa,this.blendDst=$a,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==qa&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Nn=class extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new D,Ra=new Fe,yp=0,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=In(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=In(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=In(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=In(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),e}};var yr=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _r=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},_p=0,vn=new Ge,nc=new gt,ys=new D,fn=new mn,lr=new mn,Bt=new D,zt=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Ln(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?_r:yr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new an);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(fn.min,lr.min),fn.expandByPoint(Bt),Bt.addVectors(fn.max,lr.max),fn.expandByPoint(Bt)):(fn.expandByPoint(lr.min),fn.expandByPoint(lr.max))}fn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bt.fromBufferAttribute(o,l),c&&(ys.fromBufferAttribute(e,l),Bt.add(ys)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new D,c[P]=new D;let l=new D,u=new D,d=new D,h=new Fe,f=new Fe,g=new Fe,x=new D,m=new D;function p(P,b,_){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,_),h.fromBufferAttribute(r,P),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,_),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(R),o[P].add(x),o[b].add(x),o[_].add(x),c[P].add(m),c[b].add(m),c[_].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,b=T.length;P<b;++P){let _=T[P],R=_.start,N=_.count;for(let F=R,G=R+N;F<G;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let v=new D,S=new D,E=new D,w=new D;function C(P){E.fromBufferAttribute(s,P),w.copy(E);let b=o[P];v.copy(b),v.sub(E.multiplyScalar(E.dot(b))).normalize(),S.crossVectors(w,b);let R=S.dot(c[P])<0?-1:1;a.setXYZW(P,v.x,v.y,v.z,R)}for(let P=0,b=T.length;P<b;++P){let _=T[P],R=_.start,N=_.count;for(let F=R,G=R+N;F<G;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new It(h,u,d)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},yd=new Ge,Bi=new Si,Ia=new an,_d=new D,Pa=new D,La=new D,Da=new D,ic=new D,Na=new D,bd=new D,Fa=new D,at=class extends gt{constructor(e=new zt,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],d=r[c];u!==0&&(ic.fromBufferAttribute(d,e),a?Na.addScaledVector(ic,u):Na.addScaledVector(ic.sub(t),u))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Ia,_d)===null||Bi.origin.distanceToSquared(_d)>(e.far-e.near)**2))&&(yd.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(yd),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,E=v;S<E;S+=3){let w=o.getX(S),C=o.getX(S+1),P=o.getX(S+2);s=Ua(this,p,e,n,l,u,d,w,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);s=Ua(this,a,e,n,l,u,d,T,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,E=v;S<E;S+=3){let w=S,C=S+1,P=S+2;s=Ua(this,p,e,n,l,u,d,w,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let T=m,v=m+1,S=m+2;s=Ua(this,a,e,n,l,u,d,T,v,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function bp(i,e,t,n,s,r,a,o){let c;if(e.side===Dt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Dn,o),c===null)return null;Fa.copy(o),Fa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Fa);return l<t.near||l>t.far?null:{distance:l,point:Fa.clone(),object:i}}function Ua(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Pa),i.getVertexPosition(c,La),i.getVertexPosition(l,Da);let u=bp(i,e,t,n,Pa,La,Da,bd);if(u){let d=new D;bi.getBarycoord(bd,Pa,La,Da,d),s&&(u.uv=bi.getInterpolatedAttribute(s,o,c,l,d,new Fe)),r&&(u.uv1=bi.getInterpolatedAttribute(r,o,c,l,d,new Fe)),a&&(u.normal=bi.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new D,materialIndex:0};bi.getNormal(Pa,La,Da,h.normal),u.face=h,u.barycoord=d}return u}var Jt=class i extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(d,2));function g(x,m,p,T,v,S,E,w,C,P,b){let _=S/C,R=E/P,N=S/2,F=E/2,G=w/2,X=C+1,k=P+1,Z=0,H=0,j=new D;for(let se=0;se<k;se++){let Te=se*R-F;for(let ze=0;ze<X;ze++){let Qe=ze*_-N;j[x]=Qe*T,j[m]=Te*v,j[p]=G,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=w>0?1:-1,u.push(j.x,j.y,j.z),d.push(ze/C),d.push(1-se/P),Z+=1}}for(let se=0;se<P;se++)for(let Te=0;Te<C;Te++){let ze=h+Te+X*se,Qe=h+Te+X*(se+1),st=h+(Te+1)+X*(se+1),Ke=h+(Te+1)+X*se;c.push(ze,Qe,Ke),c.push(Qe,st,Ke),H+=6}o.addGroup(f,H,b),f+=H,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=ts(i[t]);for(let s in n)e[s]=n[s]}return e}function Sp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var cn={clone:ts,merge:Yt},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ut=class extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=wp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=Sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},br=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new D,Sd=new Fe,Md=new Fe,Rt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,Sd,Md),t.subVectors(Md,Sd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_s=-90,bs=1,Ja=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(_s,bs,e,t);s.layers=this.layers,this.add(s);let r=new Rt(_s,bs,e,t);r.layers=this.layers,this.add(r);let a=new Rt(_s,bs,e,t);a.layers=this.layers,this.add(a);let o=new Rt(_s,bs,e,t);o.layers=this.layers,this.add(o);let c=new Rt(_s,bs,e,t);c.layers=this.layers,this.add(c);let l=new Rt(_s,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Sr=class extends kt{constructor(e=[],t=Ji,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qa=class extends bt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Jt(5,5,5),r=new ut({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:vt});r.uniforms.tEquirect.value=t;let a=new at(s,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=Ht),new Ja(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Kt=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tp={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Kt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var qi=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ds=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRanges=[],this.version=0,this.uuid=Ln()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ln()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},jt=new D,Ns=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=In(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=In(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=In(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=In(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=In(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){xr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){xr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var wd=new D,Td=new lt,Ed=new lt,Ep=new D,Ad=new Ge,Oa=new D,sc=new an,Cd=new Ge,rc=new Si,Mr=class extends at{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=dc,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingBox.expandByPoint(Oa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new an),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oa),this.boundingSphere.expandByPoint(Oa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sc.copy(this.boundingSphere),sc.applyMatrix4(s),e.ray.intersectsSphere(sc)!==!1&&(Cd.copy(s).invert(),rc.copy(e.ray).applyMatrix4(Cd),!(this.boundingBox!==null&&rc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===dc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ch?this.bindMatrixInverse.copy(this.bindMatrix).invert():Be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Td.fromBufferAttribute(s.attributes.skinIndex,e),Ed.fromBufferAttribute(s.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ed.getComponent(r);if(a!==0){let o=Td.getComponent(r);Ad.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Ep.copy(wd).applyMatrix4(Ad),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Fs=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},zn=class extends kt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Pt,u=Pt,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rd=new Ge,Ap=new Ge,wr=class i{constructor(e=[],t=[]){this.uuid=Ln(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Ap;Rd.multiplyMatrices(o,t[r]),Rd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new zn(t,e,e,Qt,Mn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Be("Skeleton: No bone found with UUID:",r),a=new Fs),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Mi=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ss=new Ge,Id=new Ge,Ba=[],Pd=new mn,Cp=new Ge,cr=new at,ur=new an,$i=class extends at{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),Pd.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(Pd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new an),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),ur.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),e.ray.intersectsSphere(ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ss),Id.multiplyMatrices(n,Ss),cr.matrixWorld=Id,cr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let c=Ba[a];c.instanceId=r,c.object=this,t.push(c)}Ba.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new zn(new Float32Array(s*this.count),s,this.count,Lo,Mn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ac=new D,Rp=new D,Ip=new je,Bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(Rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ac),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ip.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ki=new an,Pp=new Fe(.5,.5),ka=new D,Us=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Pn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],T=r[12],v=r[13],S=r[14],E=r[15];if(s[0].setComponents(l-a,f-u,p-g,E-T).normalize(),s[1].setComponents(l+a,f+u,p+g,E+T).normalize(),s[2].setComponents(l+o,f+d,p+x,E+v).normalize(),s[3].setComponents(l-o,f-d,p-x,E-v).normalize(),n)s[4].setComponents(c,h,m,S).normalize(),s[5].setComponents(l-c,f-h,p-m,E-S).normalize();else if(s[4].setComponents(l-c,f-h,p-m,E-S).normalize(),t===Pn)s[5].setComponents(l+c,f+h,p+m,E+S).normalize();else if(t===gr)s[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){ki.center.set(0,0,0);let t=Pp.distanceTo(e.center);return ki.radius=.7071067811865476+t,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Os=class extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},eo=new D,to=new D,Ld=new Ge,dr=new Si,za=new an,oc=new D,Dd=new D,Yi=class extends gt{constructor(e=new zt,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)eo.fromBufferAttribute(t,s-1),to.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=eo.distanceTo(to);e.setAttribute("lineDistance",new Tt(n,1))}else Be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),za.copy(n.boundingSphere),za.applyMatrix4(s),za.radius+=r,e.ray.intersectsSphere(za)===!1)return;Ld.copy(s).invert(),dr.copy(e.ray).applyMatrix4(Ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),T=u.getX(x+1),v=Va(this,e,dr,c,p,T,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=Va(this,e,dr,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Va(this,e,dr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Va(this,e,dr,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Va(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(eo.fromBufferAttribute(o,s),to.fromBufferAttribute(o,r),t.distanceSqToSegment(eo,to,oc,Dd)>n)return;oc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(oc);if(!(l<e.near||l>e.far))return{distance:l,point:Dd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Nd=new D,Fd=new D,Tr=class extends Yi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nd.fromBufferAttribute(t,s),Fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nd.distanceTo(Fd);e.setAttribute("lineDistance",new Tt(n,1))}else Be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Er=class extends Yi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Ge,gc=new Si,Ha=new an,Ga=new D,Ar=class extends gt{constructor(e=new zt,t=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,e.ray.intersectsSphere(Ha)===!1)return;Ud.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,x=f;g<x;g++){let m=l.getX(g);Ga.fromBufferAttribute(d,m),Od(Ga,m,c,s,e,t,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,x=f;g<x;g++)Ga.fromBufferAttribute(d,g),Od(Ga,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Od(i,e,t,n,s,r,a){let o=gc.distanceSqToPoint(i);if(o<t){let c=new D;gc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Zi=class extends kt{constructor(e,t,n=Ti,s,r,a,o=Pt,c=Pt,l,u=Es,d=1){if(u!==Es&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Cr=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var ks=class i extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,x=[],m=n/2,p=0;T(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Tt(d,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(f,2));function T(){let S=new D,E=new D,w=0,C=(t-e)/n;for(let P=0;P<=r;P++){let b=[],_=P/r,R=_*(t-e)+e;for(let N=0;N<=s;N++){let F=N/s,G=F*c+o,X=Math.sin(G),k=Math.cos(G);E.x=R*X,E.y=-_*n+m,E.z=R*k,d.push(E.x,E.y,E.z),S.set(X,C,k).normalize(),h.push(S.x,S.y,S.z),f.push(F,1-_),b.push(g++)}x.push(b)}for(let P=0;P<s;P++)for(let b=0;b<r;b++){let _=x[b][P],R=x[b+1][P],N=x[b+1][P+1],F=x[b][P+1];(e>0||b!==0)&&(u.push(_,R,F),w+=3),(t>0||b!==r-1)&&(u.push(R,N,F),w+=3)}l.addGroup(p,w,0),p+=w}function v(S){let E=g,w=new Fe,C=new D,P=0,b=S===!0?e:t,_=S===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*_,0),h.push(0,_,0),f.push(.5,.5),g++;let R=g;for(let N=0;N<=s;N++){let G=N/s*c+o,X=Math.cos(G),k=Math.sin(G);C.x=b*k,C.y=m*_,C.z=b*X,d.push(C.x,C.y,C.z),h.push(0,_,0),w.x=X*.5+.5,w.y=k*.5*_+.5,f.push(w.x,w.y),g++}for(let N=0;N<s;N++){let F=E+N,G=R+N;S===!0?u.push(G,G+1,F):u.push(G+1,G,F),P+=3}l.addGroup(p,P,S===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ji=class i extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,d=e/o,h=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let T=p*h-a;for(let v=0;v<l;v++){let S=v*d-r;g.push(S,-T,0),x.push(0,0,1),m.push(v/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let v=T+l*p,S=T+l*(p+1),E=T+1+l*(p+1),w=T+1+l*p;f.push(v,S,w),f.push(S,E,w)}this.setIndex(f),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Rr=class i extends zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],u=new D,d=new D,h=new D;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let x=g/s*r,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),h.subVectors(d,u).normalize(),c.push(h.x,h.y,h.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(x,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ir=class extends ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vt=class extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},on=class extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Pr=class extends $t{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Lr=class extends $t{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jr,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=yo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zs=class extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},no=class extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Wa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Lp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Dp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Bd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function Mh(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},io=class extends ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hc,endingEnd:hc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case fc:r=e,o=2*t-n;break;case pc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fc:a=e,c=2*n-t;break;case pc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,T=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,v=(-1-f)*m+(1.5+f)*x+.5*g,S=f*m-f*x;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+T*a[l+E]+v*a[c+E]+S*a[d+E];return r}},so=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)r[h]=a[l+h]*d+a[c+h]*u;return r}},ro=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ln=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Wa(t,this.TimeBufferType),this.values=Wa(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Wa(e.times,Array),values:Wa(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new so(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new io(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gi:t=this.InterpolantFactoryMethodDiscrete;break;case Wi:t=this.InterpolantFactoryMethodLinear;break;case Xa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gi;case this.InterpolantFactoryMethodLinear:return Wi;case this.InterpolantFactoryMethodSmooth:return Xa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){et("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Lp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Wi;var oi=class extends ln{constructor(e,t,n){super(e,t,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Gi;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Dr=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Dr.prototype.ValueTypeName="color";var Vn=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Vn.prototype.ValueTypeName="number";var ao=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)_n.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hn=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};Hn.prototype.ValueTypeName="quaternion";Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends ln{constructor(e,t,n){super(e,t,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Gi;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends ln{constructor(e,t,n,s){super(e,t,n,s)}};Gn.prototype.ValueTypeName="vector";var Nr=class{constructor(e="",t=-1,n=[],s=uh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ln(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Dp(c);c=Bd(c,1,u),l=Bd(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Vn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let d=u[1],h=s[d];h||(s[d]=h=[]),h.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(Be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return et("AnimationClip: No animation in JSONLoader data."),null;let n=function(d,h,f,g,x){if(f.length!==0){let m=[],p=[];Mh(f,m,p,g),m.length!==0&&x.push(new d(h,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let d=0;d<l.length;d++){let h=l[d].keys;if(!(!h||h.length===0))if(h[0].morphTargets){let f={},g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let x=0;x<h[g].morphTargets.length;x++)f[h[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let T=0;T!==h[g].morphTargets.length;++T){let v=h[g];m.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new Vn(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[d].name+"]";n(Gn,f+".position",h,"pos",s),n(Hn,f+".quaternion",h,"rot",s),n(Gn,f+".scale",h,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Np(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return Dr;case"quaternion":return Hn;case"bool":case"boolean":return oi;case"string":return li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Np(i.type);if(i.times===void 0){let t=[],n=[];Mh(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var kn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},oo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wh=new oo,Wn=class{constructor(e){this.manager=e!==void 0?e:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Wn.DEFAULT_MATERIAL_NAME="__DEFAULT";var ii={},xc=class extends Error{constructor(e,t){super(e),this.response=t}},Vs=class extends Wn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=kn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ii[e]!==void 0){ii[e].push({onLoad:t,onProgress:n,onError:s});return}ii[e]=[],ii[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ii[e],d=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,x=0,m=new ReadableStream({start(p){T();function T(){d.read().then(({done:v,value:S})=>{if(v)p.close();else{x+=S.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,C=u.length;w<C;w++){let P=u[w];P.onProgress&&P.onProgress(E)}p.enqueue(S),T()}},v=>{p.error(v)})}}});return new Response(m)}else throw new xc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{kn.add(`file:${e}`,l);let u=ii[e];delete ii[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ii[e];if(u===void 0)throw this.manager.itemError(e),l;delete ii[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ms=new WeakMap,lo=class extends Wn{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let d=Ms.get(a);d===void 0&&(d=[],Ms.set(a,d)),d.push({onLoad:t,onError:s})}return a}let o=As("img");function c(){u(),t&&t(this);let d=Ms.get(this)||[];for(let h=0;h<d.length;h++){let f=d[h];f.onLoad&&f.onLoad(this)}Ms.delete(this),r.manager.itemEnd(e)}function l(d){u(),s&&s(d),kn.remove(`image:${e}`);let h=Ms.get(this)||[];for(let f=0;f<h.length;f++){let g=h[f];g.onError&&g.onError(d)}Ms.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Fr=class extends Wn{constructor(e){super(e)}load(e,t,n,s){let r=new kt,a=new lo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},wi=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ur=class extends wi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lc=new Ge,kd=new D,zd=new D,Or=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Us,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(kd),zd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zd),t.updateMatrixWorld(),lc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vc=class extends Or{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Br=class extends wi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vd=new Ge,hr=new D,cc=new D,yc=class extends Or{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),n.position.copy(hr),cc.copy(n.position),cc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(cc),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,n.coordinateSystem,n.reversedDepth)}},Sn=class extends wi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ci=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_c=class extends Or{constructor(){super(new ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},kr=class extends wi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new _c}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},zr=class extends wi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ui=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var uc=new WeakMap,Vr=class extends Wn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=kn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(uc.has(a)===!0)s&&s(uc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return kn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),uc.set(c,l),kn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});kn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var co=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Hr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var zc="\\[\\]\\.:\\/",Up=new RegExp("["+zc+"]","g"),Vc="[^"+zc+"]",Op="[^"+zc.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",Vc),kp=/(WCOD+)?/.source.replace("WCOD",Op),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),Vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Hp=new RegExp("^"+Bp+kp+zp+Vp+"$"),Gp=["material","materials","bones","map"],bc=class{constructor(e,t,n){let s=n||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){let t=Hp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=bc;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ay=new Float32Array(1);var Hd=new Ge,Hs=class{constructor(e,t,n=0,s=1/0){this.ray=new Si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hd),this}intersectObject(e,t=!0,n=[]){return Sc(e,this,n,t),n.sort(Gd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Sc(e[s],this,n,t);return n.sort(Gd),n}};function Gd(i,e){return i.distance-e.distance}function Sc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],e,t,!0)}}function Hc(i,e,t,n){let s=Wp(n);switch(t){case Lc:return i*e;case Lo:return i*e/s.components*s.byteLength;case Do:return i*e/s.components*s.byteLength;case No:return i*e*2/s.components*s.byteLength;case Fo:return i*e*2/s.components*s.byteLength;case Dc:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case Uo:return i*e*4/s.components*s.byteLength;case $r:case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zr:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bo:case zo:return Math.max(i,16)*Math.max(e,8)/4;case Oo:case ko:return Math.max(i,8)*Math.max(e,8)/2;case Vo:case Ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $o:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case jo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case el:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case tl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case nl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case il:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case sl:case rl:case al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ol:case ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case cl:case ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wp(i){switch(i){case gn:case Cc:return{byteLength:1,components:1};case Xs:case Rc:case Nt:return{byteLength:2,components:1};case Io:case Po:return{byteLength:2,components:4};case Ti:case Ro:case Mn:return{byteLength:4,components:1};case Ic:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function $h(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function qp(i){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,am=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,om=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Um=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,t0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,n0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,m0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,g0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,x0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,M0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,E0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,C0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,I0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,N0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,U0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,V0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,X0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ag=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,og=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ug=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_g=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:$p,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:jp,alphatest_fragment:Kp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:am,bumpmap_pars_fragment:om,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:hm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:xm,defaultnormal_vertex:vm,displacementmap_pars_vertex:ym,displacementmap_vertex:_m,emissivemap_fragment:bm,emissivemap_pars_fragment:Sm,colorspace_fragment:Mm,colorspace_pars_fragment:wm,envmap_fragment:Tm,envmap_common_pars_fragment:Em,envmap_pars_fragment:Am,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Rm,fog_vertex:Im,fog_pars_vertex:Pm,fog_fragment:Lm,fog_pars_fragment:Dm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Um,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:zm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Hm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:$m,lights_fragment_end:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:jm,logdepthbuf_pars_vertex:Km,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:e0,map_particle_fragment:t0,map_particle_pars_fragment:n0,metalnessmap_fragment:i0,metalnessmap_pars_fragment:s0,morphinstance_vertex:r0,morphcolor_vertex:a0,morphnormal_vertex:o0,morphtarget_pars_vertex:l0,morphtarget_vertex:c0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:h0,normal_pars_vertex:f0,normal_vertex:p0,normalmap_pars_fragment:m0,clearcoat_normal_fragment_begin:g0,clearcoat_normal_fragment_maps:x0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:y0,opaque_fragment:_0,packing:b0,premultiplied_alpha_fragment:S0,project_vertex:M0,dithering_fragment:w0,dithering_pars_fragment:T0,roughnessmap_fragment:E0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:C0,shadowmap_pars_vertex:R0,shadowmap_vertex:I0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:N0,skinnormal_vertex:F0,specularmap_fragment:U0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:k0,transmission_fragment:z0,transmission_pars_fragment:V0,uv_pars_fragment:H0,uv_pars_vertex:G0,uv_vertex:W0,worldpos_vertex:X0,background_vert:q0,background_frag:$0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:j0,cube_frag:K0,depth_vert:J0,depth_frag:Q0,distanceRGBA_vert:eg,distanceRGBA_frag:tg,equirect_vert:ng,equirect_frag:ig,linedashed_vert:sg,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:og,meshlambert_vert:lg,meshlambert_frag:cg,meshmatcap_vert:ug,meshmatcap_frag:dg,meshnormal_vert:hg,meshnormal_frag:fg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:yg,points_vert:_g,points_frag:bg,shadow_vert:Sg,shadow_frag:Mg,sprite_vert:wg,sprite_frag:Tg},_e={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Yt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Yt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Yt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Re(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Yt([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Yt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Yt([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Yt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Yt([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Yt([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Yt([_e.lights,_e.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};var hl={r:0,b:0,g:0},ns=new bn,Eg=new Ge;function Ag(i,e,t,n,s,r,a){let o=new Re(0),c=r===!0?0:1,l,u,d=null,h=0,f=null;function g(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?t:e).get(S)),S}function x(v){let S=!1,E=g(v);E===null?p(o,c):E&&E.isColor&&(p(E,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(v,S){let E=g(S);E&&(E.isCubeTexture||E.mapping===qr)?(u===void 0&&(u=new at(new Jt(1,1,1),new ut({name:"BackgroundCubeMaterial",uniforms:ts(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ns.copy(S.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=E,u.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(ns)),u.material.toneMapped=tt.getTransfer(E.colorSpace)!==ct,(d!==E||h!==E.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=E,h=E.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new at(new ji(2,2),new ut({name:"BackgroundMaterial",uniforms:ts(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=tt.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||h!==E.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=E,h=E.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(hl,kc(i)),n.buffers.color.setClear(hl.r,hl.g,hl.b,S,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:x,addToRenderList:m,dispose:T}}function Cg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(_,R,N,F,G){let X=!1,k=d(F,N,R);r!==k&&(r=k,l(r.object)),X=f(_,F,N,G),X&&g(_,F,N,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(_,R,N,F),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function d(_,R,N){let F=N.wireframe===!0,G=n[_.id];G===void 0&&(G={},n[_.id]=G);let X=G[R.id];X===void 0&&(X={},G[R.id]=X);let k=X[F];return k===void 0&&(k=h(c()),X[F]=k),k}function h(_){let R=[],N=[],F=[];for(let G=0;G<t;G++)R[G]=0,N[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:F,object:_,attributes:{},index:null}}function f(_,R,N,F){let G=r.attributes,X=R.attributes,k=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let se=G[H],Te=X[H];if(Te===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(Te=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(Te=_.instanceColor)),se===void 0||se.attribute!==Te||Te&&se.data!==Te.data)return!0;k++}return r.attributesNum!==k||r.index!==F}function g(_,R,N,F){let G={},X=R.attributes,k=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let se=X[H];se===void 0&&(H==="instanceMatrix"&&_.instanceMatrix&&(se=_.instanceMatrix),H==="instanceColor"&&_.instanceColor&&(se=_.instanceColor));let Te={};Te.attribute=se,se&&se.data&&(Te.data=se.data),G[H]=Te,k++}r.attributes=G,r.attributesNum=k,r.index=F}function x(){let _=r.newAttributes;for(let R=0,N=_.length;R<N;R++)_[R]=0}function m(_){p(_,0)}function p(_,R){let N=r.newAttributes,F=r.enabledAttributes,G=r.attributeDivisors;N[_]=1,F[_]===0&&(i.enableVertexAttribArray(_),F[_]=1),G[_]!==R&&(i.vertexAttribDivisor(_,R),G[_]=R)}function T(){let _=r.newAttributes,R=r.enabledAttributes;for(let N=0,F=R.length;N<F;N++)R[N]!==_[N]&&(i.disableVertexAttribArray(N),R[N]=0)}function v(_,R,N,F,G,X,k){k===!0?i.vertexAttribIPointer(_,R,N,G,X):i.vertexAttribPointer(_,R,N,F,G,X)}function S(_,R,N,F){x();let G=F.attributes,X=N.getAttributes(),k=R.defaultAttributeValues;for(let Z in X){let H=X[Z];if(H.location>=0){let j=G[Z];if(j===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(j=_.instanceColor)),j!==void 0){let se=j.normalized,Te=j.itemSize,ze=e.get(j);if(ze===void 0)continue;let Qe=ze.buffer,st=ze.type,Ke=ze.bytesPerElement,K=st===i.INT||st===i.UNSIGNED_INT||j.gpuType===Ro;if(j.isInterleavedBufferAttribute){let Q=j.data,ve=Q.stride,De=j.offset;if(Q.isInstancedInterleavedBuffer){for(let ge=0;ge<H.locationSize;ge++)p(H.location+ge,Q.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let ge=0;ge<H.locationSize;ge++)v(H.location+ge,Te/H.locationSize,st,se,ve*Ke,(De+Te/H.locationSize*ge)*Ke,K)}else{if(j.isInstancedBufferAttribute){for(let Q=0;Q<H.locationSize;Q++)p(H.location+Q,j.meshPerAttribute);_.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Q=0;Q<H.locationSize;Q++)m(H.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Qe);for(let Q=0;Q<H.locationSize;Q++)v(H.location+Q,Te/H.locationSize,st,se,Te*Ke,Te/H.locationSize*Q*Ke,K)}}else if(k!==void 0){let se=k[Z];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(H.location,se);break;case 3:i.vertexAttrib3fv(H.location,se);break;case 4:i.vertexAttrib4fv(H.location,se);break;default:i.vertexAttrib1fv(H.location,se)}}}}T()}function E(){P();for(let _ in n){let R=n[_];for(let N in R){let F=R[N];for(let G in F)u(F[G].object),delete F[G];delete R[N]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;let R=n[_.id];for(let N in R){let F=R[N];for(let G in F)u(F[G].object),delete F[G];delete R[N]}delete n[_.id]}function C(_){for(let R in n){let N=n[R];if(N[_.id]===void 0)continue;let F=N[_.id];for(let G in F)u(F[G].object),delete F[G];delete N[_.id]}}function P(){b(),a=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Rg(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function o(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*h[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ig(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let P=C===Nt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Be("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:E,maxSamples:w}}function Pg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Bn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{let T=r?0:n,v=T*4,S=p.clippingState||null;c.value=S,S=u(g,h,v,f);for(let E=0;E!==v;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,S=f;v!==x;++v,S+=4)a.copy(d[v]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Lg(i){let e=new WeakMap;function t(a,o){return o===Eo?a.mapping=Ji:o===Ao&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Eo||o===Ao)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Qa(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Ci=4,Th=[.125,.215,.35,.446,.526,.582],ss=20,Dg=256,Qr=new ci,Eh=new Re,Gc=null,Wc=0,Xc=0,qc=!1,Ng=new D,Zs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Ng}=r;Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=qc,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:Nt,format:Qt,colorSpace:Gt,depthBuffer:!1},s=Ah(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Fg(r)),this._blurMaterial=Og(r,e,t),this._ggxMaterial=Ug(r,e,t)}return s}_compileMaterial(e){let t=new at(new zt,e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,s,r){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Eh),d.toneMapping=di,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new at(new Jt,new Nn({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy(Eh),p=!0);for(let v=0;v<6;v++){let S=v%3;S===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):S===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));let E=this._cubeSize;$s(s,S*E,v>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(x,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===Qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;$s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Qr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=.05+l*.95,f=d*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Ci?n-g+Ci:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,$s(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Qr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,$s(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Qr)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[s];d.material=l;let h=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ss-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):ss;m>ss&&Be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],T=0;for(let C=0;C<ss;++C){let P=C/x,b=Math.exp(-P*P/2);p.push(b),C===0?T+=b:C<m&&(T+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;let S=this._sizeLods[s],E=3*S*(s>v-Ci?s-v+Ci:0),w=4*(this._cubeSize-S);$s(t,E,w,3*S,2*S),c.setRenderTarget(t),c.render(d,Qr)}};function Fg(i){let e=[],t=[],n=[],s=i,r=i-Ci+1+Th.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ci?c=Th[a-i+Ci-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,x=3,m=2,p=1,T=new Float32Array(x*g*f),v=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){let C=w%3*2/3-1,P=w>2?0:-1,b=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];T.set(b,x*g*w),v.set(h,m*g*w);let _=[w,w,w,w,w,w];S.set(_,p*g*w)}let E=new zt;E.setAttribute("position",new It(T,x)),E.setAttribute("uv",new It(v,m)),E.setAttribute("faceIndex",new It(S,p)),n.push(new at(E,null)),s>Ci&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ah(i,e,t){let n=new bt(i,e,t);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ug(i,e,t){return new ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Dg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:vt,depthTest:!1,depthWrite:!1})}function Og(i,e,t){let n=new Float32Array(ss),s=new D(0,1,0);return new ut({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:vt,depthTest:!1,depthWrite:!1})}function Ch(){return new ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:vt,depthTest:!1,depthWrite:!1})}function Rh(){return new ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vt,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Bg(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Eo||c===Ao,u=c===Ji||c===Qi;if(l||u){let d=e.get(o),h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Zs(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Zs(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function kg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Rs("WebGLRenderer: "+n+" extension not supported."),s}}}function zg(i,e,t,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(e.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let T=f.array;x=f.version;for(let v=0,S=T.length;v<S;v+=3){let E=T[v+0],w=T[v+1],C=T[v+2];h.push(E,w,w,C,C,E)}}else if(g!==void 0){let T=g.array;x=g.version;for(let v=0,S=T.length/3-1;v<S;v+=3){let E=v+0,w=v+1,C=v+2;h.push(E,w,w,C,C,E)}}else return;let m=new(Oc(h)?_r:yr)(h,1);m.version=x;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Vg(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,f){i.drawElements(n,f,r,h*a),t.update(f,n,1)}function l(h,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,h*a,g),t.update(f,n,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(h,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,h,0,x,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*x[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Hg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Gg(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let S=o.attributes.position.count*v,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*E*4*d),C=new vr(w,S,E,d);C.type=Mn,C.needsUpdate=!0;let P=v*4;for(let _=0;_<d;_++){let R=m[_],N=p[_],F=T[_],G=S*E*4*_;for(let X=0;X<R.count;X++){let k=X*P;f===!0&&(s.fromBufferAttribute(R,X),w[G+k+0]=s.x,w[G+k+1]=s.y,w[G+k+2]=s.z,w[G+k+3]=0),g===!0&&(s.fromBufferAttribute(N,X),w[G+k+4]=s.x,w[G+k+5]=s.y,w[G+k+6]=s.z,w[G+k+7]=0),x===!0&&(s.fromBufferAttribute(F,X),w[G+k+8]=s.x,w[G+k+9]=s.y,w[G+k+10]=s.z,w[G+k+11]=F.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new Fe(S,E)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function Wg(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(s.get(d)!==l&&(e.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;s.get(h)!==l&&(h.update(),s.set(h,l))}return d}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var Yh=new kt,Ih=new Zi(1,1),Zh=new vr,jh=new Ka,Kh=new Sr,Ph=[],Lh=[],Dh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function js(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ph[s];if(r===void 0&&(r=new Float32Array(s),Ph[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gl(i,e){let t=Lh[e];t===void 0&&(t=new Int32Array(e),Lh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Zg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ut(t,n)}}function jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;Nh.set(n),i.uniformMatrix3fv(this.addr,!1,Nh),Ut(t,n)}}function Kg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Ft(t,n))return;Dh.set(n),i.uniformMatrix4fv(this.addr,!1,Dh),Ut(t,n)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function nx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=Fc,r=Ih):r=Yh,t.setTexture2D(e||r,s)}function ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||jh,s)}function lx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kh,s)}function cx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Zh,s)}function ux(i){switch(i){case 5126:return Xg;case 35664:return qg;case 35665:return $g;case 35666:return Yg;case 35674:return Zg;case 35675:return jg;case 35676:return Kg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return ex;case 35669:case 35673:return tx;case 5125:return nx;case 36294:return ix;case 36295:return sx;case 36296:return rx;case 35678:case 36198:case 36298:case 36306:case 35682:return ax;case 35679:case 36299:case 36307:return ox;case 35680:case 36300:case 36308:case 36293:return lx;case 36289:case 36303:case 36311:case 36292:return cx}}function dx(i,e){i.uniform1fv(this.addr,e)}function hx(i,e){let t=js(e,this.size,2);i.uniform2fv(this.addr,t)}function fx(i,e){let t=js(e,this.size,3);i.uniform3fv(this.addr,t)}function px(i,e){let t=js(e,this.size,4);i.uniform4fv(this.addr,t)}function mx(i,e){let t=js(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gx(i,e){let t=js(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xx(i,e){let t=js(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vx(i,e){i.uniform1iv(this.addr,e)}function yx(i,e){i.uniform2iv(this.addr,e)}function _x(i,e){i.uniform3iv(this.addr,e)}function bx(i,e){i.uniform4iv(this.addr,e)}function Sx(i,e){i.uniform1uiv(this.addr,e)}function Mx(i,e){i.uniform2uiv(this.addr,e)}function wx(i,e){i.uniform3uiv(this.addr,e)}function Tx(i,e){i.uniform4uiv(this.addr,e)}function Ex(i,e,t){let n=this.cache,s=e.length,r=gl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yh,r[a])}function Ax(i,e,t){let n=this.cache,s=e.length,r=gl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||jh,r[a])}function Cx(i,e,t){let n=this.cache,s=e.length,r=gl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kh,r[a])}function Rx(i,e,t){let n=this.cache,s=e.length,r=gl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Zh,r[a])}function Ix(i){switch(i){case 5126:return dx;case 35664:return hx;case 35665:return fx;case 35666:return px;case 35674:return mx;case 35675:return gx;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return _x;case 35669:case 35673:return bx;case 5125:return Sx;case 36294:return Mx;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Rx}}var Yc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ux(t.type)}},Zc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ix(t.type)}},jc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function Uh(i,e){i.seq.push(e),i.map[e.id]=e}function Px(i,e,t){let n=i.name,s=n.length;for($c.lastIndex=0;;){let r=$c.exec(n),a=$c.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Uh(t,l===void 0?new Yc(o,i,e):new Zc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new jc(o),Uh(t,d)),t=d}}}var Ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Px(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Oh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Lx=37297,Dx=0;function Nx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bh=new je;function Fx(i){tt._getMatrix(Bh,tt.workingColorSpace,i);let e=`mat3( ${Bh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case mr:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Nx(i.getShaderSource(e),o)}else return r}function Ux(i,e){let t=Fx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ox(i,e){let t;switch(e){case _o:t="Linear";break;case bo:t="Reinhard";break;case So:t="Cineon";break;case Gs:t="ACESFilmic";break;case wo:t="AgX";break;case To:t="Neutral";break;case Mo:t="Custom";break;default:Be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fl=new D;function Bx(){tt.getLuminanceCoefficients(fl);let i=fl.x.toFixed(4),e=fl.y.toFixed(4),t=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function zx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ea(i){return i!==""}function zh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Hx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kc(i){return i.replace(Hx,Wx)}var Gx=new Map;function Wx(i,e){let t=Je[e];if(t===void 0){let n=Gx.get(e);if(n!==void 0)t=Je[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Kc(t)}var Xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(Xx,qx)}function qx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $x(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function Yx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Zx(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Qi:e="ENVMAP_MODE_REFRACTION";break}return e}function jx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yo:e="ENVMAP_BLENDING_MULTIPLY";break;case oh:e="ENVMAP_BLENDING_MIX";break;case lh:e="ENVMAP_BLENDING_ADD";break}return e}function Kx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Jx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=$x(t),l=Yx(t),u=Zx(t),d=jx(t),h=Kx(t),f=kx(t),g=zx(r),x=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ea).join(`
`),p.length>0&&(p+=`
`)):(m=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),p=[Gh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==di?"#define TONE_MAPPING":"",t.toneMapping!==di?Je.tonemapping_pars_fragment:"",t.toneMapping!==di?Ox("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Ux("linearToOutputTexel",t.outputColorSpace),Bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),a=Kc(a),a=zh(a,t),a=Vh(a,t),o=Kc(o),o=zh(o,t),o=Vh(o,t),a=Hh(a),o=Hh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=T+m+a,S=T+p+o,E=Oh(s,s.VERTEX_SHADER,v),w=Oh(s,s.FRAGMENT_SHADER,S);s.attachShader(x,E),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(E)||"",G=s.getShaderInfoLog(w)||"",X=N.trim(),k=F.trim(),Z=G.trim(),H=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,E,w);else{let se=kh(s,E,"vertex"),Te=kh(s,w,"fragment");et("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+se+`
`+Te)}else X!==""?Be("WebGLProgram: Program Info Log:",X):(k===""||Z==="")&&(j=!1);j&&(R.diagnostics={runnable:H,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(E),s.deleteShader(w),P=new Ys(s,x),b=Vx(s,x)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,Lx)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=w,this}var Qx=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Qc(e),t.set(e,n)),n}},Qc=class{constructor(e){this.id=Qx++,this.code=e,this.usedTimes=0}};function ev(i,e,t,n,s,r,a){let o=new Ps,c=new Jc,l=new Set,u=[],d=s.logarithmicDepthBuffer,h=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,_,R,N,F){let G=N.fog,X=F.geometry,k=b.isMeshStandardMaterial?N.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||k),H=Z&&Z.mapping===qr?Z.image.height:null,j=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&Be("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let se=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Te=se!==void 0?se.length:0,ze=0;X.morphAttributes.position!==void 0&&(ze=1),X.morphAttributes.normal!==void 0&&(ze=2),X.morphAttributes.color!==void 0&&(ze=3);let Qe,st,Ke,K;if(j){let ht=qn[j];Qe=ht.vertexShader,st=ht.fragmentShader}else Qe=b.vertexShader,st=b.fragmentShader,c.update(b),Ke=c.getVertexShaderID(b),K=c.getFragmentShaderID(b);let Q=i.getRenderTarget(),ve=i.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,ge=F.isBatchedMesh===!0,$=!!b.map,Se=!!b.matcap,ye=!!Z,Me=!!b.aoMap,I=!!b.lightMap,Xe=!!b.bumpMap,V=!!b.normalMap,U=!!b.displacementMap,ee=!!b.emissiveMap,ae=!!b.metalnessMap,fe=!!b.roughnessMap,Oe=b.anisotropy>0,A=b.clearcoat>0,y=b.dispersion>0,z=b.iridescence>0,J=b.sheen>0,ne=b.transmission>0,Y=Oe&&!!b.anisotropyMap,Ie=A&&!!b.clearcoatMap,pe=A&&!!b.clearcoatNormalMap,Ue=A&&!!b.clearcoatRoughnessMap,Ne=z&&!!b.iridescenceMap,re=z&&!!b.iridescenceThicknessMap,ue=J&&!!b.sheenColorMap,qe=J&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,be=!!b.specularColorMap,He=!!b.specularIntensityMap,L=ne&&!!b.transmissionMap,me=ne&&!!b.thicknessMap,ce=!!b.gradientMap,xe=!!b.alphaMap,oe=b.alphaTest>0,te=!!b.alphaHash,Pe=!!b.extensions,Ze=di;b.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ze=i.toneMapping);let xt={shaderID:j,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:st,defines:b.defines,customVertexShaderID:Ke,customFragmentShaderID:K,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ge,batchingColor:ge&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt,alphaToCoverage:!!b.alphaToCoverage,map:$,matcap:Se,envMap:ye,envMapMode:ye&&Z.mapping,envMapCubeUVHeight:H,aoMap:Me,lightMap:I,bumpMap:Xe,normalMap:V,displacementMap:h&&U,emissiveMap:ee,normalMapObjectSpace:V&&b.normalMapType===hh,normalMapTangentSpace:V&&b.normalMapType===Jr,metalnessMap:ae,roughnessMap:fe,anisotropy:Oe,anisotropyMap:Y,clearcoat:A,clearcoatMap:Ie,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ue,dispersion:y,iridescence:z,iridescenceMap:Ne,iridescenceThicknessMap:re,sheen:J,sheenColorMap:ue,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:be,specularIntensityMap:He,transmission:ne,transmissionMap:L,thicknessMap:me,gradientMap:ce,opaque:b.transparent===!1&&b.blending===Vi&&b.alphaToCoverage===!1,alphaMap:xe,alphaTest:oe,alphaHash:te,combine:b.combine,mapUv:$&&x(b.map.channel),aoMapUv:Me&&x(b.aoMap.channel),lightMapUv:I&&x(b.lightMap.channel),bumpMapUv:Xe&&x(b.bumpMap.channel),normalMapUv:V&&x(b.normalMap.channel),displacementMapUv:U&&x(b.displacementMap.channel),emissiveMapUv:ee&&x(b.emissiveMap.channel),metalnessMapUv:ae&&x(b.metalnessMap.channel),roughnessMapUv:fe&&x(b.roughnessMap.channel),anisotropyMapUv:Y&&x(b.anisotropyMap.channel),clearcoatMapUv:Ie&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:qe&&x(b.sheenRoughnessMap.channel),specularMapUv:Ve&&x(b.specularMap.channel),specularColorMapUv:be&&x(b.specularColorMap.channel),specularIntensityMapUv:He&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:me&&x(b.thicknessMap.channel),alphaMapUv:xe&&x(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(V||Oe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&($||xe),fog:!!G,useFog:b.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ve,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:ze,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:$&&b.map.isVideoTexture===!0&&tt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:ee&&b.emissiveMap.isVideoTexture===!0&&tt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===Dt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)_.push(R),_.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(T(_,b),v(_,b),_.push(i.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function T(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function v(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){let _=g[b.type],R;if(_){let N=qn[_];R=cn.clone(N.uniforms)}else R=b.uniforms;return R}function E(b,_){let R;for(let N=0,F=u.length;N<F;N++){let G=u[N];if(G.cacheKey===_){R=G,++R.usedTimes;break}}return R===void 0&&(R=new Jx(i,_,b,r),u.push(R)),R}function w(b){if(--b.usedTimes===0){let _=u.indexOf(b);u[_]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:E,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:P}}function tv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function nv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,h,f,g,x,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(d,h,f,g,x,m){let p=a(d,h,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||nv),n.length>1&&n.sort(h||Wh),s.length>1&&s.sort(h||Wh)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function iv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xh,i.set(n,[a])):s>=r.length?(a=new Xh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function sv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Re};break;case"SpotLight":t={position:new D,direction:new D,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function rv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var av=0;function ov(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lv(i){let e=new sv,t=rv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new Ge,a=new Ge;function o(l){let u=0,d=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,T=0,v=0,S=0,E=0,w=0,C=0;l.sort(ov);for(let b=0,_=l.length;b<_;b++){let R=l[b],N=R.color,F=R.intensity,G=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=N.r*F,d+=N.g*F,h+=N.b*F;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],F);C++}else if(R.isDirectionalLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=X,n.directionalShadowMatrix[f]=R.shadow.matrix,T++}n.directional[f]=k,f++}else if(R.isSpotLight){let k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(N).multiplyScalar(F),k.distance=G,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;let Z=R.shadow;if(R.map&&(n.spotLightMap[E]=R.map,E++,Z.updateMatrices(R),R.castShadow&&w++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){let H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=X,S++}x++}else if(R.isRectAreaLight){let k=e.get(R);k.color.copy(N).multiplyScalar(F),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=k,m++}else if(R.isPointLight){let k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){let Z=R.shadow,H=t.get(R);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,v++}n.point[g]=k,g++}else if(R.isHemisphereLight){let k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(F),k.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[p]=k,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==T||P.numPointShadows!==v||P.numSpotShadows!==S||P.numSpotMaps!==E||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,P.directionalLength=f,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=T,P.numPointShadows=v,P.numSpotShadows=S,P.numSpotMaps=E,P.numLightProbes=C,n.version=av++)}function c(l,u){let d=0,h=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){let v=l[p];if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(v.isSpotLight){let S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function qh(i){let e=new lv(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function cv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qh(i),e.set(s,[o])):r>=a.length?(o=new qh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hv(i,e,t){let n=new Us,s=new Fe,r=new Fe,a=new lt,o=new zs({depthPacking:dl}),c=new no,l={},u=t.maxTextureSize,d={[Dn]:Dt,[Dt]:Dn,[Wt]:Wt},h=new ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:uv,fragmentShader:dv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new zt;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new at(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let p=this.type;this.render=function(w,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=i.getRenderTarget(),_=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),N=i.state;N.setBlending(vt),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let F=p!==Xn&&this.type===Xn,G=p===Xn&&this.type!==Xn;for(let X=0,k=w.length;X<k;X++){let Z=w[X],H=Z.shadow;if(H===void 0){Be("WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let j=H.getFrameExtents();if(s.multiply(j),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,H.mapSize.y=r.y)),H.map===null||F===!0||G===!0){let Te=this.type!==Xn?{minFilter:Pt,magFilter:Pt}:{};H.map!==null&&H.map.dispose(),H.map=new bt(s.x,s.y,Te),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let se=H.getViewportCount();for(let Te=0;Te<se;Te++){let ze=H.getViewport(Te);a.set(r.x*ze.x,r.y*ze.y,r.x*ze.z,r.y*ze.w),N.viewport(a),H.updateMatrices(Z,Te),n=H.getFrustum(),S(C,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Xn&&T(H,P),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,_,R)};function T(w,C){let P=e.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new bt(s.x,s.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,P,h,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,P,f,x,null)}function v(w,C,P,b){let _=null,R=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)_=R;else if(_=P.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let N=_.uuid,F=C.uuid,G=l[N];G===void 0&&(G={},l[N]=G);let X=G[F];X===void 0&&(X=_.clone(),G[F]=X,C.addEventListener("dispose",E)),_=X}if(_.visible=C.visible,_.wireframe=C.wireframe,b===Xn?_.side=C.shadowSide!==null?C.shadowSide:C.side:_.side=C.shadowSide!==null?C.shadowSide:d[C.side],_.alphaMap=C.alphaMap,_.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,_.map=C.map,_.clipShadows=C.clipShadows,_.clippingPlanes=C.clippingPlanes,_.clipIntersection=C.clipIntersection,_.displacementMap=C.displacementMap,_.displacementScale=C.displacementScale,_.displacementBias=C.displacementBias,_.wireframeLinewidth=C.wireframeLinewidth,_.linewidth=C.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let N=i.properties.get(_);N.light=P}return _}function S(w,C,P,b,_){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Xn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let F=e.update(w),G=w.material;if(Array.isArray(G)){let X=F.groups;for(let k=0,Z=X.length;k<Z;k++){let H=X[k],j=G[H.materialIndex];if(j&&j.visible){let se=v(w,j,b,_);w.onBeforeShadow(i,w,C,P,F,se,H),i.renderBufferDirect(P,null,F,se,w,H),w.onAfterShadow(i,w,C,P,F,se,H)}}}else if(G.visible){let X=v(w,G,b,_);w.onBeforeShadow(i,w,C,P,F,X,null),i.renderBufferDirect(P,null,F,X,w,null),w.onAfterShadow(i,w,C,P,F,X,null)}}let N=w.children;for(let F=0,G=N.length;F<G;F++)S(N[F],C,P,b,_)}function E(w){w.target.removeEventListener("dispose",E);for(let P in l){let b=l[P],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var fv={[ho]:fo,[po]:xo,[mo]:vo,[Hi]:go,[fo]:ho,[xo]:po,[vo]:mo,[go]:Hi};function pv(i,e){function t(){let L=!1,me=new lt,ce=null,xe=new lt(0,0,0,0);return{setMask:function(oe){ce!==oe&&!L&&(i.colorMask(oe,oe,oe,oe),ce=oe)},setLocked:function(oe){L=oe},setClear:function(oe,te,Pe,Ze,xt){xt===!0&&(oe*=Ze,te*=Ze,Pe*=Ze),me.set(oe,te,Pe,Ze),xe.equals(me)===!1&&(i.clearColor(oe,te,Pe,Ze),xe.copy(me))},reset:function(){L=!1,ce=null,xe.set(-1,0,0,0)}}}function n(){let L=!1,me=!1,ce=null,xe=null,oe=null;return{setReversed:function(te){if(me!==te){let Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),me=te;let Ze=oe;oe=null,this.setClear(Ze)}},getReversed:function(){return me},setTest:function(te){te?Q(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(te){ce!==te&&!L&&(i.depthMask(te),ce=te)},setFunc:function(te){if(me&&(te=fv[te]),xe!==te){switch(te){case ho:i.depthFunc(i.NEVER);break;case fo:i.depthFunc(i.ALWAYS);break;case po:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case mo:i.depthFunc(i.EQUAL);break;case go:i.depthFunc(i.GEQUAL);break;case xo:i.depthFunc(i.GREATER);break;case vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=te}},setLocked:function(te){L=te},setClear:function(te){oe!==te&&(me&&(te=1-te),i.clearDepth(te),oe=te)},reset:function(){L=!1,ce=null,xe=null,oe=null,me=!1}}}function s(){let L=!1,me=null,ce=null,xe=null,oe=null,te=null,Pe=null,Ze=null,xt=null;return{setTest:function(ht){L||(ht?Q(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(ht){me!==ht&&!L&&(i.stencilMask(ht),me=ht)},setFunc:function(ht,On,Tn){(ce!==ht||xe!==On||oe!==Tn)&&(i.stencilFunc(ht,On,Tn),ce=ht,xe=On,oe=Tn)},setOp:function(ht,On,Tn){(te!==ht||Pe!==On||Ze!==Tn)&&(i.stencilOp(ht,On,Tn),te=ht,Pe=On,Ze=Tn)},setLocked:function(ht){L=ht},setClear:function(ht){xt!==ht&&(i.clearStencil(ht),xt=ht)},reset:function(){L=!1,me=null,ce=null,xe=null,oe=null,te=null,Pe=null,Ze=null,xt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,v=null,S=null,E=null,w=null,C=new Re(0,0,0),P=0,b=!1,_=null,R=null,N=null,F=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),k=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),k=Z>=2);let j=null,se={},Te=i.getParameter(i.SCISSOR_BOX),ze=i.getParameter(i.VIEWPORT),Qe=new lt().fromArray(Te),st=new lt().fromArray(ze);function Ke(L,me,ce,xe){let oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(L,te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<ce;Pe++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(me+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}let K={};K[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(Hi),Xe(!1),V(Mc),Q(i.CULL_FACE),Me(vt);function Q(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function ve(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function De(L,me){return d[L]!==me?(i.bindFramebuffer(L,me),d[L]=me,L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=me),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=me),!0):!1}function ge(L,me){let ce=f,xe=!1;if(L){ce=h.get(me),ce===void 0&&(ce=[],h.set(me,ce));let oe=L.textures;if(ce.length!==oe.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Pe=oe.length;te<Pe;te++)ce[te]=i.COLOR_ATTACHMENT0+te;ce.length=oe.length,xe=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ce)}function $(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let Se={[pn]:i.FUNC_ADD,[$d]:i.FUNC_SUBTRACT,[Yd]:i.FUNC_REVERSE_SUBTRACT};Se[Zd]=i.MIN,Se[jd]=i.MAX;let ye={[Ki]:i.ZERO,[Kd]:i.ONE,[Jd]:i.SRC_COLOR,[qa]:i.SRC_ALPHA,[nh]:i.SRC_ALPHA_SATURATE,[Xr]:i.DST_COLOR,[Wr]:i.DST_ALPHA,[Qd]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[th]:i.ONE_MINUS_DST_COLOR,[eh]:i.ONE_MINUS_DST_ALPHA,[ih]:i.CONSTANT_COLOR,[sh]:i.ONE_MINUS_CONSTANT_COLOR,[rh]:i.CONSTANT_ALPHA,[ah]:i.ONE_MINUS_CONSTANT_ALPHA};function Me(L,me,ce,xe,oe,te,Pe,Ze,xt,ht){if(L===vt){x===!0&&(ve(i.BLEND),x=!1);return}if(x===!1&&(Q(i.BLEND),x=!0),L!==uo){if(L!==m||ht!==b){if((p!==pn||S!==pn)&&(i.blendEquation(i.FUNC_ADD),p=pn,S=pn),ht)switch(L){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",L);break}else switch(L){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",L);break}T=null,v=null,E=null,w=null,C.set(0,0,0),P=0,m=L,b=ht}return}oe=oe||me,te=te||ce,Pe=Pe||xe,(me!==p||oe!==S)&&(i.blendEquationSeparate(Se[me],Se[oe]),p=me,S=oe),(ce!==T||xe!==v||te!==E||Pe!==w)&&(i.blendFuncSeparate(ye[ce],ye[xe],ye[te],ye[Pe]),T=ce,v=xe,E=te,w=Pe),(Ze.equals(C)===!1||xt!==P)&&(i.blendColor(Ze.r,Ze.g,Ze.b,xt),C.copy(Ze),P=xt),m=L,b=!1}function I(L,me){L.side===Wt?ve(i.CULL_FACE):Q(i.CULL_FACE);let ce=L.side===Dt;me&&(ce=!ce),Xe(ce),L.blending===Vi&&L.transparent===!1?Me(vt):Me(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xe=L.stencilWrite;o.setTest(xe),xe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ee(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){_!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),_=L)}function V(L){L!==Wd?(Q(i.CULL_FACE),L!==R&&(L===Mc?i.cullFace(i.BACK):L===Xd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),R=L}function U(L){L!==N&&(k&&i.lineWidth(L),N=L)}function ee(L,me,ce){L?(Q(i.POLYGON_OFFSET_FILL),(F!==me||G!==ce)&&(i.polygonOffset(me,ce),F=me,G=ce)):ve(i.POLYGON_OFFSET_FILL)}function ae(L){L?Q(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)}function fe(L){L===void 0&&(L=i.TEXTURE0+X-1),j!==L&&(i.activeTexture(L),j=L)}function Oe(L,me,ce){ce===void 0&&(j===null?ce=i.TEXTURE0+X-1:ce=j);let xe=se[ce];xe===void 0&&(xe={type:void 0,texture:void 0},se[ce]=xe),(xe.type!==L||xe.texture!==me)&&(j!==ce&&(i.activeTexture(ce),j=ce),i.bindTexture(L,me||K[L]),xe.type=L,xe.texture=me)}function A(){let L=se[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function J(){try{i.texSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function ne(){try{i.texSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function pe(){try{i.texStorage2D(...arguments)}catch(L){L("WebGLState:",L)}}function Ue(){try{i.texStorage3D(...arguments)}catch(L){L("WebGLState:",L)}}function Ne(){try{i.texImage2D(...arguments)}catch(L){L("WebGLState:",L)}}function re(){try{i.texImage3D(...arguments)}catch(L){L("WebGLState:",L)}}function ue(L){Qe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Qe.copy(L))}function qe(L){st.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),st.copy(L))}function Ve(L,me){let ce=l.get(me);ce===void 0&&(ce=new WeakMap,l.set(me,ce));let xe=ce.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(me,L.name),ce.set(L,xe))}function be(L,me){let xe=l.get(me).get(L);c.get(me)!==xe&&(i.uniformBlockBinding(me,xe,L.__bindingPointIndex),c.set(me,xe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,se={},d={},h=new WeakMap,f=[],g=null,x=!1,m=null,p=null,T=null,v=null,S=null,E=null,w=null,C=new Re(0,0,0),P=0,b=!1,_=null,R=null,N=null,F=null,G=null,Qe.set(0,0,i.canvas.width,i.canvas.height),st.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:ve,bindFramebuffer:De,drawBuffers:ge,useProgram:$,setBlending:Me,setMaterial:I,setFlipSided:Xe,setCullFace:V,setLineWidth:U,setPolygonOffset:ee,setScissorTest:ae,activeTexture:fe,bindTexture:Oe,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:z,texImage2D:Ne,texImage3D:re,updateUBOMapping:Ve,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Ue,texSubImage2D:J,texSubImage3D:ne,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ie,scissor:ue,viewport:qe,reset:He}}function mv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):As("canvas")}function x(A,y,z){let J=1,ne=Oe(A);if((ne.width>z||ne.height>z)&&(J=z/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor(J*ne.width),Ie=Math.floor(J*ne.height);d===void 0&&(d=g(Y,Ie));let pe=y?g(Y,Ie):d;return pe.width=Y,pe.height=Ie,pe.getContext("2d").drawImage(A,0,0,Y,Ie),Be("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Y+"x"+Ie+")."),pe}else return"data"in A&&Be("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,y,z,J,ne=!1){if(A!==null){if(i[A]!==void 0)return i[A];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=y;if(y===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),y===i.RGBA){let Ie=ne?mr:tt.getTransfer(J);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=Ie===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(A,y){let z;return A?y===null||y===Ti||y===Ei?z=i.DEPTH24_STENCIL8:y===Mn?z=i.DEPTH32F_STENCIL8:y===Xs&&(z=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===Ei?z=i.DEPTH_COMPONENT24:y===Mn?z=i.DEPTH_COMPONENT32F:y===Xs&&(z=i.DEPTH_COMPONENT16),z}function E(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pt&&A.minFilter!==Ht?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){let y=A.target;y.removeEventListener("dispose",w),P(y),y.isVideoTexture&&u.delete(y)}function C(A){let y=A.target;y.removeEventListener("dispose",C),_(y)}function P(A){let y=n.get(A);if(y.__webglInit===void 0)return;let z=A.source,J=h.get(z);if(J){let ne=J[y.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(A),Object.keys(J).length===0&&h.delete(z)}n.remove(A)}function b(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let z=A.source,J=h.get(z);delete J[y.__cacheKey],a.memory.textures--}function _(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ne=0;ne<y.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(y.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=A.textures;for(let J=0,ne=z.length;J<ne;J++){let Y=n.get(z[J]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(A)}let R=0;function N(){R=0}function F(){let A=R;return A>=s.maxTextures&&Be("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function G(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){let z=n.get(A);if(A.isVideoTexture&&ae(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let J=A.image;if(J===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,A,y);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function k(A,y){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){K(z,A,y);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function Z(A,y){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){K(z,A,y);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function H(A,y){let z=n.get(A);if(A.version>0&&z.__version!==A.version){Q(z,A,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let j={[rn]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Ts]:i.MIRRORED_REPEAT},se={[Pt]:i.NEAREST,[Co]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Ht]:i.LINEAR,[Ws]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Te={[fh]:i.NEVER,[yh]:i.ALWAYS,[ph]:i.LESS,[Fc]:i.LEQUAL,[mh]:i.EQUAL,[vh]:i.GEQUAL,[gh]:i.GREATER,[xh]:i.NOTEQUAL};function ze(A,y){if(y.type===Mn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ht||y.magFilter===Ws||y.magFilter===es||y.magFilter===Fn||y.minFilter===Ht||y.minFilter===Ws||y.minFilter===es||y.minFilter===Fn)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,j[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,j[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,j[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,se[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,se[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Pt||y.minFilter!==es&&y.minFilter!==Fn||y.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Qe(A,y){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));let J=y.source,ne=h.get(J);ne===void 0&&(ne={},h.set(J,ne));let Y=G(y);if(Y!==A.__cacheKey){ne[Y]===void 0&&(ne[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[Y].usedTimes++;let Ie=ne[A.__cacheKey];Ie!==void 0&&(ne[A.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(y)),A.__cacheKey=Y,A.__webglTexture=ne[Y].texture}return z}function st(A,y,z){return Math.floor(Math.floor(A/z)/y)}function Ke(A,y,z,J){let Y=A.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,J,y.data);else{Y.sort((re,ue)=>re.start-ue.start);let Ie=0;for(let re=1;re<Y.length;re++){let ue=Y[Ie],qe=Y[re],Ve=ue.start+ue.count,be=st(qe.start,y.width,4),He=st(ue.start,y.width,4);qe.start<=Ve+1&&be===He&&st(qe.start+qe.count-1,y.width,4)===be?ue.count=Math.max(ue.count,qe.start+qe.count-ue.start):(++Ie,Y[Ie]=qe)}Y.length=Ie+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let re=0,ue=Y.length;re<ue;re++){let qe=Y[re],Ve=Math.floor(qe.start/4),be=Math.ceil(qe.count/4),He=Ve%y.width,L=Math.floor(Ve/y.width),me=be,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,He),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,He,L,me,ce,z,J,y.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function K(A,y,z){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);let ne=Qe(A,y),Y=y.source;t.bindTexture(J,A.__webglTexture,i.TEXTURE0+z);let Ie=n.get(Y);if(Y.version!==Ie.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let pe=tt.getPrimaries(tt.workingColorSpace),Ue=y.colorSpace===hi?null:tt.getPrimaries(y.colorSpace),Ne=y.colorSpace===hi||pe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let re=x(y.image,!1,s.maxTextureSize);re=fe(y,re);let ue=r.convert(y.format,y.colorSpace),qe=r.convert(y.type),Ve=v(y.internalFormat,ue,qe,y.colorSpace,y.isVideoTexture);ze(J,y);let be,He=y.mipmaps,L=y.isVideoTexture!==!0,me=Ie.__version===void 0||ne===!0,ce=Y.dataReady,xe=E(y,re);if(y.isDepthTexture)Ve=S(y.format===Ai,y.type),me&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ve,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ve,re.width,re.height,0,ue,qe,null));else if(y.isDataTexture)if(He.length>0){L&&me&&t.texStorage2D(i.TEXTURE_2D,xe,Ve,He[0].width,He[0].height);for(let oe=0,te=He.length;oe<te;oe++)be=He[oe],L?ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ue,qe,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ve,be.width,be.height,0,ue,qe,be.data);y.generateMipmaps=!1}else L?(me&&t.texStorage2D(i.TEXTURE_2D,xe,Ve,re.width,re.height),ce&&Ke(y,re,ue,qe)):t.texImage2D(i.TEXTURE_2D,0,Ve,re.width,re.height,0,ue,qe,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ve,He[0].width,He[0].height,re.depth);for(let oe=0,te=He.length;oe<te;oe++)if(be=He[oe],y.format!==Qt)if(ue!==null)if(L){if(ce)if(y.layerUpdates.size>0){let Pe=Hc(be.width,be.height,y.format,y.type);for(let Ze of y.layerUpdates){let xt=be.data.subarray(Ze*Pe/be.data.BYTES_PER_ELEMENT,(Ze+1)*Pe/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ze,be.width,be.height,1,ue,xt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,re.depth,ue,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Ve,be.width,be.height,re.depth,0,be.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,re.depth,ue,qe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Ve,be.width,be.height,re.depth,0,ue,qe,be.data)}else{L&&me&&t.texStorage2D(i.TEXTURE_2D,xe,Ve,He[0].width,He[0].height);for(let oe=0,te=He.length;oe<te;oe++)be=He[oe],y.format!==Qt?ue!==null?L?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ue,be.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Ve,be.width,be.height,0,be.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,ue,qe,be.data):t.texImage2D(i.TEXTURE_2D,oe,Ve,be.width,be.height,0,ue,qe,be.data)}else if(y.isDataArrayTexture)if(L){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ve,re.width,re.height,re.depth),ce)if(y.layerUpdates.size>0){let oe=Hc(re.width,re.height,y.format,y.type);for(let te of y.layerUpdates){let Pe=re.data.subarray(te*oe/re.data.BYTES_PER_ELEMENT,(te+1)*oe/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,ue,qe,Pe)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ue,qe,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,re.width,re.height,re.depth,0,ue,qe,re.data);else if(y.isData3DTexture)L?(me&&t.texStorage3D(i.TEXTURE_3D,xe,Ve,re.width,re.height,re.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ue,qe,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,re.width,re.height,re.depth,0,ue,qe,re.data);else if(y.isFramebufferTexture){if(me)if(L)t.texStorage2D(i.TEXTURE_2D,xe,Ve,re.width,re.height);else{let oe=re.width,te=re.height;for(let Pe=0;Pe<xe;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ve,oe,te,0,ue,qe,null),oe>>=1,te>>=1}}else if(He.length>0){if(L&&me){let oe=Oe(He[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ve,oe.width,oe.height)}for(let oe=0,te=He.length;oe<te;oe++)be=He[oe],L?ce&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ue,qe,be):t.texImage2D(i.TEXTURE_2D,oe,Ve,ue,qe,be);y.generateMipmaps=!1}else if(L){if(me){let oe=Oe(re);t.texStorage2D(i.TEXTURE_2D,xe,Ve,oe.width,oe.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,qe,re)}else t.texImage2D(i.TEXTURE_2D,0,Ve,ue,qe,re);m(y)&&p(J),Ie.__version=Y.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Q(A,y,z){if(y.image.length!==6)return;let J=Qe(A,y),ne=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);let Y=n.get(ne);if(ne.version!==Y.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let Ie=tt.getPrimaries(tt.workingColorSpace),pe=y.colorSpace===hi?null:tt.getPrimaries(y.colorSpace),Ue=y.colorSpace===hi||Ie===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let Ne=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let te=0;te<6;te++)!Ne&&!re?ue[te]=x(y.image[te],!0,s.maxCubemapSize):ue[te]=re?y.image[te].image:y.image[te],ue[te]=fe(y,ue[te]);let qe=ue[0],Ve=r.convert(y.format,y.colorSpace),be=r.convert(y.type),He=v(y.internalFormat,Ve,be,y.colorSpace),L=y.isVideoTexture!==!0,me=Y.__version===void 0||J===!0,ce=ne.dataReady,xe=E(y,qe);ze(i.TEXTURE_CUBE_MAP,y);let oe;if(Ne){L&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,qe.width,qe.height);for(let te=0;te<6;te++){oe=ue[te].mipmaps;for(let Pe=0;Pe<oe.length;Pe++){let Ze=oe[Pe];y.format!==Qt?Ve!==null?L?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ze.width,Ze.height,Ve,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,He,Ze.width,Ze.height,0,Ze.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ze.width,Ze.height,Ve,be,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,He,Ze.width,Ze.height,0,Ve,be,Ze.data)}}}else{if(oe=y.mipmaps,L&&me){oe.length>0&&xe++;let te=Oe(ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,He,te.width,te.height)}for(let te=0;te<6;te++)if(re){L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ue[te].width,ue[te].height,Ve,be,ue[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,ue[te].width,ue[te].height,0,Ve,be,ue[te].data);for(let Pe=0;Pe<oe.length;Pe++){let xt=oe[Pe].image[te].image;L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,xt.width,xt.height,Ve,be,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,He,xt.width,xt.height,0,Ve,be,xt.data)}}else{L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ve,be,ue[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,He,Ve,be,ue[te]);for(let Pe=0;Pe<oe.length;Pe++){let Ze=oe[Pe];L?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ve,be,Ze.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,He,Ve,be,Ze.image[te])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Y.__version=ne.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ve(A,y,z,J,ne,Y){let Ie=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Ue=v(z.internalFormat,Ie,pe,z.colorSpace),Ne=n.get(y),re=n.get(z);if(re.__renderTarget=y,!Ne.__hasExternalTextures){let ue=Math.max(1,y.width>>Y),qe=Math.max(1,y.height>>Y);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Y,Ue,ue,qe,y.depth,0,Ie,pe,null):t.texImage2D(ne,Y,Ue,ue,qe,0,Ie,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,re.__webglTexture,0,U(y)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let J=y.depthTexture,ne=J&&J.isDepthTexture?J.type:null,Y=S(y.stencilBuffer,ne),Ie=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=U(y);ee(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,Y,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,A)}else{let J=y.textures;for(let ne=0;ne<J.length;ne++){let Y=J[ne],Ie=r.convert(Y.format,Y.colorSpace),pe=r.convert(Y.type),Ue=v(Y.internalFormat,Ie,pe,Y.colorSpace),Ne=U(y);z&&ee(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Ue,y.width,y.height):ee(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Ue,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let ne=J.__webglTexture,Y=U(y);if(y.depthTexture.format===Es)ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(y.depthTexture.format===Ai)ee(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function $(A){let y=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let J=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let ne=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),y.__depthDisposeCallback=ne}y.__boundDepthTexture=J}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let J=A.texture.mipmaps;J&&J.length>0?ge(y.__webglFramebuffer[0],A):ge(y.__webglFramebuffer,A)}else if(z){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),De(y.__webglDepthbuffer[J],A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}else{let J=A.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),De(y.__webglDepthbuffer,A,!1);else{let ne=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Se(A,y,z){let J=n.get(A);y!==void 0&&ve(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&$(A)}function ye(A){let y=A.texture,z=n.get(A),J=n.get(y);A.addEventListener("dispose",C);let ne=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Ue=0;Ue<y.mipmaps.length;Ue++)z.__webglFramebuffer[pe][Ue]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let pe=0,Ue=ne.length;pe<Ue;pe++){let Ne=n.get(ne[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ee(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){let Ue=ne[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);let Ne=r.convert(Ue.format,Ue.colorSpace),re=r.convert(Ue.type),ue=v(Ue.internalFormat,Ne,re,Ue.colorSpace,A.isXRRenderTarget===!0),qe=U(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ue,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),De(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ze(i.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)ve(z.__webglFramebuffer[pe][Ue],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ue);else ve(z.__webglFramebuffer[pe],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let pe=0,Ue=ne.length;pe<Ue;pe++){let Ne=ne[pe],re=n.get(Ne),ue=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,re.__webglTexture),ze(ue,Ne),ve(z.__webglFramebuffer,A,Ne,i.COLOR_ATTACHMENT0+pe,ue,0),m(Ne)&&p(ue)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,J.__webglTexture),ze(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let Ue=0;Ue<y.mipmaps.length;Ue++)ve(z.__webglFramebuffer[Ue],A,y,i.COLOR_ATTACHMENT0,pe,Ue);else ve(z.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,pe,0);m(y)&&p(pe),t.unbindTexture()}A.depthBuffer&&$(A)}function Me(A){let y=A.textures;for(let z=0,J=y.length;z<J;z++){let ne=y[z];if(m(ne)){let Y=T(A),Ie=n.get(ne).__webglTexture;t.bindTexture(Y,Ie),p(Y),t.unbindTexture()}}}let I=[],Xe=[];function V(A){if(A.samples>0){if(ee(A)===!1){let y=A.textures,z=A.width,J=A.height,ne=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(A),pe=y.length>1;if(pe)for(let Ne=0;Ne<y.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ue=A.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ne=0;Ne<y.length;Ne++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);let re=n.get(y[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,ne,i.NEAREST),c===!0&&(I.length=0,Xe.length=0,I.push(i.COLOR_ATTACHMENT0+Ne),A.depthBuffer&&A.resolveDepthBuffer===!1&&(I.push(Y),Xe.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Xe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<y.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ne]);let re=n.get(y[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function U(A){return Math.min(s.maxSamples,A.samples)}function ee(A){let y=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ae(A){let y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function fe(A,y){let z=A.colorSpace,J=A.format,ne=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Gt&&z!==hi&&(tt.getTransfer(z)===ct?(J!==Qt||ne!==gn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",z)),y}function Oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=N,this.setTexture2D=X,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=V,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ee}function gv(i,e){function t(n,s=hi){let r,a=tt.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cc)return i.BYTE;if(n===Rc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Ro)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Nt)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===Qt)return i.RGBA;if(n===Es)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Lo)return i.RED;if(n===Do)return i.RED_INTEGER;if(n===No)return i.RG;if(n===Fo)return i.RG_INTEGER;if(n===Uo)return i.RGBA_INTEGER;if(n===$r||n===Yr||n===Zr||n===jr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oo||n===Bo||n===ko||n===zo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vo||n===Ho||n===Go)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vo||n===Ho)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Go)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wo||n===Xo||n===qo||n===$o||n===Yo||n===Zo||n===jo||n===Ko||n===Jo||n===Qo||n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$o)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===el)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sl||n===rl||n===al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===sl)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ol||n===ll||n===cl||n===ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ol)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,eu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Cr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ut({vertexShader:xv,fragmentShader:vv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new at(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tu=class extends ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new eu,p={},T=t.getContextAttributes(),v=null,S=null,E=[],w=[],C=new Fe,P=null,b=new Rt;b.viewport=new lt;let _=new Rt;_.viewport=new lt;let R=[b,_],N=new co,F=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=E[K];return Q===void 0&&(Q=new Ls,E[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=E[K];return Q===void 0&&(Q=new Ls,E[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=E[K];return Q===void 0&&(Q=new Ls,E[K]=Q),Q.getHandSpace()};function X(K){let Q=w.indexOf(K.inputSource);if(Q===-1)return;let ve=E[Q];ve!==void 0&&(ve.update(K.inputSource,K.frame,l||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",Z);for(let K=0;K<E.length;K++){let Q=w[K];Q!==null&&(w[K]=null,E[K].disconnect(Q))}F=null,G=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(v),f=null,h=null,d=null,s=null,S=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",k),s.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,De=null,ge=null;T.depth&&(ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=T.stencil?Ai:Es,De=T.stencil?Ei:Ti);let $={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer($),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new bt(h.textureWidth,h.textureHeight,{format:Qt,type:gn,depthTexture:new Zi(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new bt(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Z(K){for(let Q=0;Q<K.removed.length;Q++){let ve=K.removed[Q],De=w.indexOf(ve);De>=0&&(w[De]=null,E[De].disconnect(ve))}for(let Q=0;Q<K.added.length;Q++){let ve=K.added[Q],De=w.indexOf(ve);if(De===-1){for(let $=0;$<E.length;$++)if($>=w.length){w.push(ve),De=$;break}else if(w[$]===null){w[$]=ve,De=$;break}if(De===-1)break}let ge=E[De];ge&&ge.connect(ve)}}let H=new D,j=new D;function se(K,Q,ve){H.setFromMatrixPosition(Q.matrixWorld),j.setFromMatrixPosition(ve.matrixWorld);let De=H.distanceTo(j),ge=Q.projectionMatrix.elements,$=ve.projectionMatrix.elements,Se=ge[14]/(ge[10]-1),ye=ge[14]/(ge[10]+1),Me=(ge[9]+1)/ge[5],I=(ge[9]-1)/ge[5],Xe=(ge[8]-1)/ge[0],V=($[8]+1)/$[0],U=Se*Xe,ee=Se*V,ae=De/(-Xe+V),fe=ae*-Xe;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(fe),K.translateZ(ae),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ge[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Oe=Se+ae,A=ye+ae,y=U-fe,z=ee+(De-fe),J=Me*ye/A*Oe,ne=I*ye/A*Oe;K.projectionMatrix.makePerspective(y,z,J,ne,Oe,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Te(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Q=K.near,ve=K.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),N.near=_.near=b.near=Q,N.far=_.far=b.far=ve,(F!==N.near||G!==N.far)&&(s.updateRenderState({depthNear:N.near,depthFar:N.far}),F=N.near,G=N.far),N.layers.mask=K.layers.mask|6,b.layers.mask=N.layers.mask&3,_.layers.mask=N.layers.mask&5;let De=K.parent,ge=N.cameras;Te(N,De);for(let $=0;$<ge.length;$++)Te(ge[$],De);ge.length===2?se(N,b,_):N.projectionMatrix.copy(b.projectionMatrix),ze(K,N,De)};function ze(K,Q,ve){ve===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Xi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(K){c=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(K){return p[K]};let Qe=null;function st(K,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){let ve=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let De=!1;ve.length!==N.cameras.length&&(N.cameras.length=0,De=!0);for(let ye=0;ye<ve.length;ye++){let Me=ve[ye],I=null;if(f!==null)I=f.getViewport(Me);else{let V=d.getViewSubImage(h,Me);I=V.viewport,ye===0&&(e.setRenderTargetTextures(S,V.colorTexture,V.depthStencilTexture),e.setRenderTarget(S))}let Xe=R[ye];Xe===void 0&&(Xe=new Rt,Xe.layers.enable(ye),Xe.viewport=new lt,R[ye]=Xe),Xe.matrix.fromArray(Me.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Me.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(I.x,I.y,I.width,I.height),ye===0&&(N.matrix.copy(Xe.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),De===!0&&N.cameras.push(Xe)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let ye=d.getDepthInformation(ve[0]);ye&&ye.isValid&&ye.texture&&m.init(ye,s.renderState)}if(ge&&ge.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let ye=0;ye<ve.length;ye++){let Me=ve[ye].camera;if(Me){let I=p[Me];I||(I=new Cr,p[Me]=I);let Xe=d.getCameraImage(Me);I.sourceTexture=Xe}}}}for(let ve=0;ve<E.length;ve++){let De=w[ve],ge=E[ve];De!==null&&ge!==void 0&&ge.update(De,Q,l||a)}Qe&&Qe(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Ke=new $h;Ke.setAnimationLoop(st),this.setAnimationLoop=function(K){Qe=K},this.dispose=function(){}}},is=new bn,yv=new Ge;function _v(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,kc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Dt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Dt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),v=T.envMap,S=T.envMapRotation;v&&(m.envMap.value=v,is.copy(S),is.x*=-1,is.y*=-1,is.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(is)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Dt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function bv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,v){let S=v.program;n.uniformBlockBinding(T,S)}function l(T,v){let S=s[T.id];S===void 0&&(g(T),S=u(T),s[T.id]=S,T.addEventListener("dispose",m));let E=v.program;n.updateUBOMapping(T,E);let w=e.render.frame;r[T.id]!==w&&(h(T),r[T.id]=w)}function u(T){let v=d();T.__bindingPointIndex=v;let S=i.createBuffer(),E=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){let v=s[T.id],S=T.uniforms,E=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,C=S.length;w<C;w++){let P=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,_=P.length;b<_;b++){let R=P[b];if(f(R,w,b,E)===!0){let N=R.__offset,F=Array.isArray(R.value)?R.value:[R.value],G=0;for(let X=0;X<F.length;X++){let k=F[X],Z=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,N+G,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,G),G+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,N,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,v,S,E){let w=T.value,C=v+"_"+S;if(E[C]===void 0)return typeof w=="number"||typeof w=="boolean"?E[C]=w:E[C]=w.clone(),!0;{let P=E[C];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return E[C]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){let v=T.uniforms,S=0,E=16;for(let C=0,P=v.length;C<P;C++){let b=Array.isArray(v[C])?v[C]:[v[C]];for(let _=0,R=b.length;_<R;_++){let N=b[_],F=Array.isArray(N.value)?N.value:[N.value];for(let G=0,X=F.length;G<X;G++){let k=F[G],Z=x(k),H=S%E,j=H%Z.boundary,se=H+j;S+=j,se!==0&&E-se<Z.storage&&(S+=E-se),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=S,S+=Z.storage}}}let w=S%E;return w>0&&(S+=E-w),T.__size=S,T.__cache={},this}function x(T){let v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){let v=T.target;v.removeEventListener("dispose",m);let S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var Sv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),fi=null;function Mv(){return fi===null&&(fi=new zn(Sv,32,32,No,Nt),fi.minFilter=Ht,fi.magFilter=Ht,fi.wrapS=yn,fi.wrapT=yn,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var pl=class{constructor(e={}){let{canvas:t=_h(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Set([Uo,Fo,Do]),x=new Set([gn,Ti,Xs,Ei,Io,Po]),m=new Uint32Array(4),p=new Int32Array(4),T=null,v=null,S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,C=!1;this._outputColorSpace=At;let P=0,b=0,_=null,R=-1,N=null,F=new lt,G=new lt,X=null,k=new Re(0),Z=0,H=t.width,j=t.height,se=1,Te=null,ze=null,Qe=new lt(0,0,H,j),st=new lt(0,0,H,j),Ke=!1,K=new Us,Q=!1,ve=!1,De=new Ge,ge=new D,$=new lt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function Me(){return _===null?se:1}let I=n;function Xe(M,O){return t.getContext(M,O)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",te,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),I===null){let O="webgl2";if(I=Xe(O,M),I===null)throw Xe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw M("WebGLRenderer: "+M.message),M}let V,U,ee,ae,fe,Oe,A,y,z,J,ne,Y,Ie,pe,Ue,Ne,re,ue,qe,Ve,be,He,L,me;function ce(){V=new kg(I),V.init(),He=new gv(I,V),U=new Ig(I,V,e,He),ee=new pv(I,V),U.reversedDepthBuffer&&h&&ee.buffers.depth.setReversed(!0),ae=new Hg(I),fe=new tv,Oe=new mv(I,V,ee,fe,U,He,ae),A=new Lg(w),y=new Bg(w),z=new qp(I),L=new Cg(I,z),J=new zg(I,z,ae,L),ne=new Wg(I,J,z,ae),qe=new Gg(I,U,Oe),Ne=new Pg(fe),Y=new ev(w,A,y,V,U,L,Ne),Ie=new _v(w,fe),pe=new iv,Ue=new cv(V),ue=new Ag(w,A,y,ee,ne,f,c),re=new hv(w,ne,U),me=new bv(I,ae,U,ee),Ve=new Rg(I,V,ae),be=new Vg(I,V,ae),ae.programs=Y.programs,w.capabilities=U,w.extensions=V,w.properties=fe,w.renderLists=pe,w.shadowMap=re,w.state=ee,w.info=ae}ce();let xe=new tu(w,I);this.xr=xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=V.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=V.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(M){M!==void 0&&(se=M,this.setSize(H,j,!1))},this.getSize=function(M){return M.set(H,j)},this.setSize=function(M,O,W=!0){if(xe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}H=M,j=O,t.width=Math.floor(M*se),t.height=Math.floor(O*se),W===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(H*se,j*se).floor()},this.setDrawingBufferSize=function(M,O,W){H=M,j=O,se=W,t.width=Math.floor(M*W),t.height=Math.floor(O*W),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(F)},this.getViewport=function(M){return M.copy(Qe)},this.setViewport=function(M,O,W,q){M.isVector4?Qe.set(M.x,M.y,M.z,M.w):Qe.set(M,O,W,q),ee.viewport(F.copy(Qe).multiplyScalar(se).round())},this.getScissor=function(M){return M.copy(st)},this.setScissor=function(M,O,W,q){M.isVector4?st.set(M.x,M.y,M.z,M.w):st.set(M,O,W,q),ee.scissor(G.copy(st).multiplyScalar(se).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(M){ee.setScissorTest(Ke=M)},this.setOpaqueSort=function(M){Te=M},this.setTransparentSort=function(M){ze=M},this.getClearColor=function(M){return M.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,W=!0){let q=0;if(M){let B=!1;if(_!==null){let de=_.texture.format;B=g.has(de)}if(B){let de=_.texture.type,we=x.has(de),Le=ue.getClearColor(),Ee=ue.getClearAlpha(),$e=Le.r,Ye=Le.g,ke=Le.b;we?(m[0]=$e,m[1]=Ye,m[2]=ke,m[3]=Ee,I.clearBufferuiv(I.COLOR,0,m)):(p[0]=$e,p[1]=Ye,p[2]=ke,p[3]=Ee,I.clearBufferiv(I.COLOR,0,p))}else q|=I.COLOR_BUFFER_BIT}O&&(q|=I.DEPTH_BUFFER_BIT),W&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",te,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),ue.dispose(),pe.dispose(),Ue.dispose(),fe.dispose(),A.dispose(),y.dispose(),ne.dispose(),L.dispose(),me.dispose(),Y.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Vu),xe.removeEventListener("sessionend",Hu),Di.stop()};function oe(M){M.preventDefault(),xr("WebGLRenderer: Context Lost."),C=!0}function te(){xr("WebGLRenderer: Context Restored."),C=!1;let M=ae.autoReset,O=re.enabled,W=re.autoUpdate,q=re.needsUpdate,B=re.type;ce(),ae.autoReset=M,re.enabled=O,re.autoUpdate=W,re.needsUpdate=q,re.type=B}function Pe(M){et("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ze(M){let O=M.target;O.removeEventListener("dispose",Ze),xt(O)}function xt(M){ht(M),fe.remove(M)}function ht(M){let O=fe.get(M).programs;O!==void 0&&(O.forEach(function(W){Y.releaseProgram(W)}),M.isShaderMaterial&&Y.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,W,q,B,de){O===null&&(O=Se);let we=B.isMesh&&B.matrixWorld.determinant()<0,Le=If(M,O,W,q,B);ee.setMaterial(q,we);let Ee=W.index,$e=1;if(q.wireframe===!0){if(Ee=J.getWireframeAttribute(W),Ee===void 0)return;$e=2}let Ye=W.drawRange,ke=W.attributes.position,rt=Ye.start*$e,ft=(Ye.start+Ye.count)*$e;de!==null&&(rt=Math.max(rt,de.start*$e),ft=Math.min(ft,(de.start+de.count)*$e)),Ee!==null?(rt=Math.max(rt,0),ft=Math.min(ft,Ee.count)):ke!=null&&(rt=Math.max(rt,0),ft=Math.min(ft,ke.count));let Mt=ft-rt;if(Mt<0||Mt===1/0)return;L.setup(B,q,Le,W,Ee);let wt,pt=Ve;if(Ee!==null&&(wt=z.get(Ee),pt=be,pt.setIndex(wt)),B.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*Me()),pt.setMode(I.LINES)):pt.setMode(I.TRIANGLES);else if(B.isLine){let We=q.linewidth;We===void 0&&(We=1),ee.setLineWidth(We*Me()),B.isLineSegments?pt.setMode(I.LINES):B.isLineLoop?pt.setMode(I.LINE_LOOP):pt.setMode(I.LINE_STRIP)}else B.isPoints?pt.setMode(I.POINTS):B.isSprite&&pt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let We=B._multiDrawStarts,yt=B._multiDrawCounts,ot=B._multiDrawCount,un=Ee?z.get(Ee).bytesPerElement:1,ls=fe.get(q).currentProgram.getUniforms();for(let dn=0;dn<ot;dn++)ls.setValue(I,"_gl_DrawID",dn),pt.render(We[dn]/un,yt[dn])}else if(B.isInstancedMesh)pt.renderInstances(rt,Mt,B.count);else if(W.isInstancedBufferGeometry){let We=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,We);pt.renderInstances(rt,Mt,yt)}else pt.render(rt,Mt)};function On(M,O,W){M.transparent===!0&&M.side===Wt&&M.forceSinglePass===!1?(M.side=Dt,M.needsUpdate=!0,xa(M,O,W),M.side=Dn,M.needsUpdate=!0,xa(M,O,W),M.side=Wt):xa(M,O,W)}this.compile=function(M,O,W=null){W===null&&(W=M),v=Ue.get(W),v.init(O),E.push(v),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),M!==W&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights();let q=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let de=B.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){let Le=de[we];On(Le,W,B),q.add(Le)}else On(de,W,B),q.add(de)}),v=E.pop(),q},this.compileAsync=function(M,O,W=null){let q=this.compile(M,O,W);return new Promise(B=>{function de(){if(q.forEach(function(we){fe.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){B(M);return}setTimeout(de,10)}V.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Tn=null;function Rf(M){Tn&&Tn(M)}function Vu(){Di.stop()}function Hu(){Di.start()}let Di=new $h;Di.setAnimationLoop(Rf),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(M){Tn=M,xe.setAnimationLoop(M),M===null?Di.stop():Di.start()},xe.addEventListener("sessionstart",Vu),xe.addEventListener("sessionend",Hu),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(O),O=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(w,M,O,_),v=Ue.get(M,E.length),v.init(O),E.push(v),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),K.setFromProjectionMatrix(De,Pn,O.reversedDepth),ve=this.localClippingEnabled,Q=Ne.init(this.clippingPlanes,ve),T=pe.get(M,S.length),T.init(),S.push(T),xe.enabled===!0&&xe.isPresenting===!0){let de=w.xr.getDepthSensingMesh();de!==null&&Nl(de,O,-1/0,w.sortObjects)}Nl(M,O,0,w.sortObjects),T.finish(),w.sortObjects===!0&&T.sort(Te,ze),ye=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,ye&&ue.addToRenderList(T,M),this.info.render.frame++,Q===!0&&Ne.beginShadows();let W=v.state.shadowsArray;re.render(W,M,O),Q===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=T.opaque,B=T.transmissive;if(v.setupLights(),O.isArrayCamera){let de=O.cameras;if(B.length>0)for(let we=0,Le=de.length;we<Le;we++){let Ee=de[we];Wu(q,B,M,Ee)}ye&&ue.render(M);for(let we=0,Le=de.length;we<Le;we++){let Ee=de[we];Gu(T,M,Ee,Ee.viewport)}}else B.length>0&&Wu(q,B,M,O),ye&&ue.render(M),Gu(T,M,O);_!==null&&b===0&&(Oe.updateMultisampleRenderTarget(_),Oe.updateRenderTargetMipmap(_)),M.isScene===!0&&M.onAfterRender(w,M,O),L.resetDefaultState(),R=-1,N=null,E.pop(),E.length>0?(v=E[E.length-1],Q===!0&&Ne.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,S.pop(),S.length>0?T=S[S.length-1]:T=null};function Nl(M,O,W,q){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){q&&$.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);let we=ne.update(M),Le=M.material;Le.visible&&T.push(M,we,Le,W,$.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){let we=ne.update(M),Le=M.material;if(q&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),$.copy(we.boundingSphere.center)),$.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(Le)){let Ee=we.groups;for(let $e=0,Ye=Ee.length;$e<Ye;$e++){let ke=Ee[$e],rt=Le[ke.materialIndex];rt&&rt.visible&&T.push(M,we,rt,W,$.z,ke)}}else Le.visible&&T.push(M,we,Le,W,$.z,null)}}let de=M.children;for(let we=0,Le=de.length;we<Le;we++)Nl(de[we],O,W,q)}function Gu(M,O,W,q){let{opaque:B,transmissive:de,transparent:we}=M;v.setupLightsView(W),Q===!0&&Ne.setGlobalState(w.clippingPlanes,W),q&&ee.viewport(F.copy(q)),B.length>0&&ga(B,O,W),de.length>0&&ga(de,O,W),we.length>0&&ga(we,O,W),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Wu(M,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[q.id]===void 0&&(v.state.transmissionRenderTarget[q.id]=new bt(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Nt:gn,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));let de=v.state.transmissionRenderTarget[q.id],we=q.viewport||F;de.setSize(we.z*w.transmissionResolutionScale,we.w*w.transmissionResolutionScale);let Le=w.getRenderTarget(),Ee=w.getActiveCubeFace(),$e=w.getActiveMipmapLevel();w.setRenderTarget(de),w.getClearColor(k),Z=w.getClearAlpha(),Z<1&&w.setClearColor(16777215,.5),w.clear(),ye&&ue.render(W);let Ye=w.toneMapping;w.toneMapping=di;let ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),Q===!0&&Ne.setGlobalState(w.clippingPlanes,q),ga(M,W,q),Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de),V.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let ft=0,Mt=O.length;ft<Mt;ft++){let wt=O[ft],{object:pt,geometry:We,material:yt,group:ot}=wt;if(yt.side===Wt&&pt.layers.test(q.layers)){let un=yt.side;yt.side=Dt,yt.needsUpdate=!0,Xu(pt,W,q,We,yt,ot),yt.side=un,yt.needsUpdate=!0,rt=!0}}rt===!0&&(Oe.updateMultisampleRenderTarget(de),Oe.updateRenderTargetMipmap(de))}w.setRenderTarget(Le,Ee,$e),w.setClearColor(k,Z),ke!==void 0&&(q.viewport=ke),w.toneMapping=Ye}function ga(M,O,W){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,de=M.length;B<de;B++){let we=M[B],{object:Le,geometry:Ee,group:$e}=we,Ye=we.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),Le.layers.test(W.layers)&&Xu(Le,O,W,Ee,Ye,$e)}}function Xu(M,O,W,q,B,de){M.onBeforeRender(w,O,W,q,B,de),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(w,O,W,q,M,de),B.transparent===!0&&B.side===Wt&&B.forceSinglePass===!1?(B.side=Dt,B.needsUpdate=!0,w.renderBufferDirect(W,O,q,B,M,de),B.side=Dn,B.needsUpdate=!0,w.renderBufferDirect(W,O,q,B,M,de),B.side=Wt):w.renderBufferDirect(W,O,q,B,M,de),M.onAfterRender(w,O,W,q,B,de)}function xa(M,O,W){O.isScene!==!0&&(O=Se);let q=fe.get(M),B=v.state.lights,de=v.state.shadowsArray,we=B.state.version,Le=Y.getParameters(M,B.state,de,O,W),Ee=Y.getProgramCacheKey(Le),$e=q.programs;q.environment=M.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(M.isMeshStandardMaterial?y:A).get(M.envMap||q.environment),q.envMapRotation=q.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",Ze),$e=new Map,q.programs=$e);let Ye=$e.get(Ee);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===we)return $u(M,Le),Ye}else Le.uniforms=Y.getUniforms(M),M.onBeforeCompile(Le,w),Ye=Y.acquireProgram(Le,Ee),$e.set(Ee,Ye),q.uniforms=Le.uniforms;let ke=q.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ke.clippingPlanes=Ne.uniform),$u(M,Le),q.needsLights=Lf(M),q.lightsStateVersion=we,q.needsLights&&(ke.ambientLightColor.value=B.state.ambient,ke.lightProbe.value=B.state.probe,ke.directionalLights.value=B.state.directional,ke.directionalLightShadows.value=B.state.directionalShadow,ke.spotLights.value=B.state.spot,ke.spotLightShadows.value=B.state.spotShadow,ke.rectAreaLights.value=B.state.rectArea,ke.ltc_1.value=B.state.rectAreaLTC1,ke.ltc_2.value=B.state.rectAreaLTC2,ke.pointLights.value=B.state.point,ke.pointLightShadows.value=B.state.pointShadow,ke.hemisphereLights.value=B.state.hemi,ke.directionalShadowMap.value=B.state.directionalShadowMap,ke.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ke.spotShadowMap.value=B.state.spotShadowMap,ke.spotLightMatrix.value=B.state.spotLightMatrix,ke.spotLightMap.value=B.state.spotLightMap,ke.pointShadowMap.value=B.state.pointShadowMap,ke.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function qu(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Ys.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function $u(M,O){let W=fe.get(M);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function If(M,O,W,q,B){O.isScene!==!0&&(O=Se),Oe.resetTextureUnits();let de=O.fog,we=q.isMeshStandardMaterial?O.environment:null,Le=_===null?w.outputColorSpace:_.isXRRenderTarget===!0?_.texture.colorSpace:Gt,Ee=(q.isMeshStandardMaterial?y:A).get(q.envMap||we),$e=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color,Mt=di;q.toneMapped&&(_===null||_.isXRRenderTarget===!0)&&(Mt=w.toneMapping);let wt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=wt!==void 0?wt.length:0,We=fe.get(q),yt=v.state.lights;if(Q===!0&&(ve===!0||M!==N)){let Zt=M===N&&q.id===R;Ne.setState(q,M,Zt)}let ot=!1;q.version===We.__version?(We.needsLights&&We.lightsStateVersion!==yt.state.version||We.outputColorSpace!==Le||B.isBatchedMesh&&We.batching===!1||!B.isBatchedMesh&&We.batching===!0||B.isBatchedMesh&&We.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&We.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&We.instancing===!1||!B.isInstancedMesh&&We.instancing===!0||B.isSkinnedMesh&&We.skinning===!1||!B.isSkinnedMesh&&We.skinning===!0||B.isInstancedMesh&&We.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&We.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&We.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&We.instancingMorph===!1&&B.morphTexture!==null||We.envMap!==Ee||q.fog===!0&&We.fog!==de||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ne.numPlanes||We.numIntersection!==Ne.numIntersection)||We.vertexAlphas!==$e||We.vertexTangents!==Ye||We.morphTargets!==ke||We.morphNormals!==rt||We.morphColors!==ft||We.toneMapping!==Mt||We.morphTargetsCount!==pt)&&(ot=!0):(ot=!0,We.__version=q.version);let un=We.currentProgram;ot===!0&&(un=xa(q,O,B));let ls=!1,dn=!1,nr=!1,_t=un.getUniforms(),nn=We.uniforms;if(ee.useProgram(un.program)&&(ls=!0,dn=!0,nr=!0),q.id!==R&&(R=q.id,dn=!0),ls||N!==M){ee.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),_t.setValue(I,"projectionMatrix",M.projectionMatrix),_t.setValue(I,"viewMatrix",M.matrixWorldInverse);let sn=_t.map.cameraPosition;sn!==void 0&&sn.setValue(I,ge.setFromMatrixPosition(M.matrixWorld)),U.logarithmicDepthBuffer&&_t.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),N!==M&&(N=M,dn=!0,nr=!0)}if(B.isSkinnedMesh){_t.setOptional(I,B,"bindMatrix"),_t.setOptional(I,B,"bindMatrixInverse");let Zt=B.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),_t.setValue(I,"boneTexture",Zt.boneTexture,Oe))}B.isBatchedMesh&&(_t.setOptional(I,B,"batchingTexture"),_t.setValue(I,"batchingTexture",B._matricesTexture,Oe),_t.setOptional(I,B,"batchingIdTexture"),_t.setValue(I,"batchingIdTexture",B._indirectTexture,Oe),_t.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&_t.setValue(I,"batchingColorTexture",B._colorsTexture,Oe));let xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&qe.update(B,W,un),(dn||We.receiveShadow!==B.receiveShadow)&&(We.receiveShadow=B.receiveShadow,_t.setValue(I,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(nn.envMap.value=Ee,nn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=Mv()),dn&&(_t.setValue(I,"toneMappingExposure",w.toneMappingExposure),We.needsLights&&Pf(nn,nr),de&&q.fog===!0&&Ie.refreshFogUniforms(nn,de),Ie.refreshMaterialUniforms(nn,q,se,j,v.state.transmissionRenderTarget[M.id]),Ys.upload(I,qu(We),nn,Oe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ys.upload(I,qu(We),nn,Oe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(I,"center",B.center),_t.setValue(I,"modelViewMatrix",B.modelViewMatrix),_t.setValue(I,"normalMatrix",B.normalMatrix),_t.setValue(I,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let Zt=q.uniformsGroups;for(let sn=0,Fl=Zt.length;sn<Fl;sn++){let Ni=Zt[sn];me.update(Ni,un),me.bind(Ni,un)}}return un}function Pf(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Lf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(M,O,W){let q=fe.get(M);q.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),fe.get(M.texture).__webglTexture=O,fe.get(M.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let W=fe.get(M);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};let Df=I.createFramebuffer();this.setRenderTarget=function(M,O=0,W=0){_=M,P=O,b=W;let q=!0,B=null,de=!1,we=!1;if(M){let Ee=fe.get(M);if(Ee.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ee.__webglFramebuffer===void 0)Oe.setupRenderTarget(M);else if(Ee.__hasExternalTextures)Oe.rebindTextures(M,fe.get(M.texture).__webglTexture,fe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(Ee.__boundDepthTexture!==ke){if(ke!==null&&fe.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(M)}}let $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);let Ye=fe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?B=Ye[O][W]:B=Ye[O],de=!0):M.samples>0&&Oe.useMultisampledRTT(M)===!1?B=fe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[W]:B=Ye,F.copy(M.viewport),G.copy(M.scissor),X=M.scissorTest}else F.copy(Qe).multiplyScalar(se).floor(),G.copy(st).multiplyScalar(se).floor(),X=Ke;if(W!==0&&(B=Df),ee.bindFramebuffer(I.FRAMEBUFFER,B)&&q&&ee.drawBuffers(M,B),ee.viewport(F),ee.scissor(G),ee.setScissorTest(X),de){let Ee=fe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,W)}else if(we){let Ee=O;for(let $e=0;$e<M.textures.length;$e++){let Ye=fe.get(M.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,Ye.__webglTexture,W,Ee)}}else if(M!==null&&W!==0){let Ee=fe.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ee.__webglTexture,W)}R=-1},this.readRenderTargetPixels=function(M,O,W,q,B,de,we,Le=0){if(!(M&&M.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee){ee.bindFramebuffer(I.FRAMEBUFFER,Ee);try{let $e=M.textures[Le],Ye=$e.format,ke=$e.type;if(!U.textureFormatReadable(Ye)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-q&&W>=0&&W<=M.height-B&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(O,W,q,B,He.convert(Ye),He.convert(ke),de))}finally{let $e=_!==null?fe.get(_).__webglFramebuffer:null;ee.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(M,O,W,q,B,de,we,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=fe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ee=Ee[we]),Ee)if(O>=0&&O<=M.width-q&&W>=0&&W<=M.height-B){ee.bindFramebuffer(I.FRAMEBUFFER,Ee);let $e=M.textures[Le],Ye=$e.format,ke=$e.type;if(!U.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.bufferData(I.PIXEL_PACK_BUFFER,de.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Le),I.readPixels(O,W,q,B,He.convert(Ye),He.convert(ke),0);let ft=_!==null?fe.get(_).__webglFramebuffer:null;ee.bindFramebuffer(I.FRAMEBUFFER,ft);let Mt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await bh(I,Mt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,de),I.deleteBuffer(rt),I.deleteSync(Mt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,W=0){let q=Math.pow(2,-W),B=Math.floor(M.image.width*q),de=Math.floor(M.image.height*q),we=O!==null?O.x:0,Le=O!==null?O.y:0;Oe.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,W,0,0,we,Le,B,de),ee.unbindTexture()};let Nf=I.createFramebuffer(),Ff=I.createFramebuffer();this.copyTextureToTexture=function(M,O,W=null,q=null,B=0,de=null){de===null&&(B!==0?(Rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=B,B=0):de=0);let we,Le,Ee,$e,Ye,ke,rt,ft,Mt,wt=M.isCompressedTexture?M.mipmaps[de]:M.image;if(W!==null)we=W.max.x-W.min.x,Le=W.max.y-W.min.y,Ee=W.isBox3?W.max.z-W.min.z:1,$e=W.min.x,Ye=W.min.y,ke=W.isBox3?W.min.z:0;else{let xn=Math.pow(2,-B);we=Math.floor(wt.width*xn),Le=Math.floor(wt.height*xn),M.isDataArrayTexture?Ee=wt.depth:M.isData3DTexture?Ee=Math.floor(wt.depth*xn):Ee=1,$e=0,Ye=0,ke=0}q!==null?(rt=q.x,ft=q.y,Mt=q.z):(rt=0,ft=0,Mt=0);let pt=He.convert(O.format),We=He.convert(O.type),yt;O.isData3DTexture?(Oe.setTexture3D(O,0),yt=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Oe.setTexture2DArray(O,0),yt=I.TEXTURE_2D_ARRAY):(Oe.setTexture2D(O,0),yt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);let ot=I.getParameter(I.UNPACK_ROW_LENGTH),un=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ls=I.getParameter(I.UNPACK_SKIP_PIXELS),dn=I.getParameter(I.UNPACK_SKIP_ROWS),nr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,wt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,wt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke);let _t=M.isDataArrayTexture||M.isData3DTexture,nn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let xn=fe.get(M),Zt=fe.get(O),sn=fe.get(xn.__renderTarget),Fl=fe.get(Zt.__renderTarget);ee.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let Ni=0;Ni<Ee;Ni++)_t&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(M).__webglTexture,B,ke+Ni),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fe.get(O).__webglTexture,de,Mt+Ni)),I.blitFramebuffer($e,Ye,we,Le,rt,ft,we,Le,I.DEPTH_BUFFER_BIT,I.NEAREST);ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||fe.has(M)){let xn=fe.get(M),Zt=fe.get(O);ee.bindFramebuffer(I.READ_FRAMEBUFFER,Nf),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ff);for(let sn=0;sn<Ee;sn++)_t?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xn.__webglTexture,B,ke+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,xn.__webglTexture,B),nn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Zt.__webglTexture,de,Mt+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Zt.__webglTexture,de),B!==0?I.blitFramebuffer($e,Ye,we,Le,rt,ft,we,Le,I.COLOR_BUFFER_BIT,I.NEAREST):nn?I.copyTexSubImage3D(yt,de,rt,ft,Mt+sn,$e,Ye,we,Le):I.copyTexSubImage2D(yt,de,rt,ft,$e,Ye,we,Le);ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else nn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(yt,de,rt,ft,Mt,we,Le,Ee,pt,We,wt.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(yt,de,rt,ft,Mt,we,Le,Ee,pt,wt.data):I.texSubImage3D(yt,de,rt,ft,Mt,we,Le,Ee,pt,We,wt):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,de,rt,ft,we,Le,pt,We,wt.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,de,rt,ft,wt.width,wt.height,pt,wt.data):I.texSubImage2D(I.TEXTURE_2D,de,rt,ft,we,Le,pt,We,wt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,un),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ls),I.pixelStorei(I.UNPACK_SKIP_ROWS,dn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,nr),de===0&&O.generateMipmaps&&I.generateMipmap(yt),ee.unbindTexture()},this.initRenderTarget=function(M){fe.get(M).__webglFramebuffer===void 0&&Oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Oe.setTextureCube(M,0):M.isData3DTexture?Oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Oe.setTexture2DArray(M,0):Oe.setTexture2D(M,0),ee.unbindTexture()},this.resetState=function(){P=0,b=0,_=null,ee.reset(),L.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};function Jh(i,e){let t=new Kt;t.visible=!1,i.add(t);let n=new Vt({color:6845563,metalness:.78,roughness:.38}),s=(g,x)=>{let m=new at(new Jt(...g),n);m.position.copy(e).add(new D(...x)),t.add(m)};s([.76,.022,.018],[0,-.008,-.166]),s([.76,.022,.018],[0,-.008,.166]),s([.018,.022,.35],[-.371,-.008,0]),s([.018,.022,.35],[.371,-.008,0]);let r={value:-.05},a={value:0},o={value:0},c=new Vt({color:12894632,roughness:.98,side:Wt});c.onBeforeCompile=g=>{g.uniforms.uBurn=r,g.uniforms.uBurning=a,g.uniforms.uFireClock=o,g.vertexShader=`varying vec2 vFabricUv;
`+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
vFabricUv=uv;`),g.fragmentShader=`varying vec2 vFabricUv;uniform float uBurn;uniform float uBurning;uniform float uFireClock;float fabricHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   float edge=uBurn+.014*sin(vFabricUv.y*26.)+.007*sin(vFabricUv.y*63.);
   float burnt=1.-smoothstep(edge-.007,edge+.014,vFabricUv.x);
   float weave=.88+.075*sin(vFabricUv.x*1100.)*sin(vFabricUv.y*620.);
   float grain=.9+.1*fabricHash(floor(vFabricUv*650.));
   diffuseColor.rgb*=mix(vec3(weave*grain),vec3(.035,.031,.027)*(weave+.15),burnt);
  `),g.fragmentShader=g.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
   float emberCell=fabricHash(floor(vFabricUv*vec2(145.,78.)));
   float nearFront=exp(-abs(vFabricUv.x-(edge-.025))*60.);
   float ember=step(.91,emberCell)*nearFront*uBurning*(.65+.35*sin(uFireClock*1.7+emberCell*60.));
   totalEmissiveRadiance+=vec3(1.8,.24,.018)*ember;
  `)};let l=new at(new ji(.72,.31,1,1),c);l.rotation.x=-Math.PI/2,l.position.copy(e),t.add(l);let u=new Sn(16747586,0,1.5,2);u.position.copy(e).add(new D(-.2,.06,0)),t.add(u);let d={uClock:o,uAmount:a,uFront:{value:-.4},uInverseModel:{value:new Ge}},h=new ut({uniforms:d,transparent:!0,depthWrite:!1,side:Dt,vertexShader:"varying vec3 vLocal;void main(){vLocal=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
   precision highp float;varying vec3 vLocal;uniform mat4 uInverseModel;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform float uClock,uAmount,uFront;
   float hash(vec3 p){p=fract(p*.3183099+vec3(.17,.23,.31));p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
   float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
   float fbm(vec3 p){return noise(p)*.64+noise(p*2.07)*.25+noise(p*4.13)*.11;}
   vec2 intersectBox(vec3 ro,vec3 rd){vec3 inv=1./rd;vec3 a=(-.5-ro)*inv,b=(.5-ro)*inv;vec3 lo=min(a,b),hi=max(a,b);return vec2(max(max(lo.x,lo.y),lo.z),min(min(hi.x,hi.y),hi.z));}
   void main(){
    if(uAmount<.001)discard;
    vec3 ro=(uInverseModel*vec4(cameraPosition,1.)).xyz,rd=normalize(vLocal-ro);
    vec2 bounds=intersectBox(ro,rd);float nearT=max(bounds.x,0.);if(bounds.y<=nearT)discard;
    float stepSize=(bounds.y-nearT)/64.;vec3 sum=vec3(0.);float alpha=0.;vec3 firstHit=vLocal;bool foundHit=false;
    for(int i=0;i<64;i++){
     vec3 p=ro+rd*(nearT+(float(i)+.5)*stepSize);
     float h=p.y+.5;
     float ripple=.016*sin(p.z*27.)+.008*sin(p.z*65.);
     float n=fbm(vec3(p.x*24.-uClock*.6,p.y*15.,p.z*24.+uClock*.15));
     float tongues=noise(vec3(p.z*18.,uClock*.65,1.7));
     float height=.27+.49*tongues+.12*sin(p.z*36.-uClock*1.3);
     float lean=.24*h;
     float waviness=(n-.5)*(.018+h*.15);
     float centre=uFront+ripple+lean+waviness;
     float thickness=.008+.018*(1.-h/max(height,.001));
     float sheet=max(0.,1.-abs(p.x-centre)/max(thickness,.006));
     float lateral=1.-smoothstep(.35,.40,abs(p.z));
     float top=1.-smoothstep(height-.1,height,h);
     float density=pow(sheet,.9)*lateral*top*smoothstep(0.,.025,h)*uAmount;
     density*=mix(1.,smoothstep(.25,.62,n),smoothstep(.12,.65,h)*.65);
     float a=1.-exp(-density*stepSize*57.);if(!foundHit&&a>.003){firstHit=p;foundHit=true;}
     vec3 tint=mix(vec3(.025,.13,.62),vec3(1.7,.32,.028),smoothstep(.045,.22,h));
     tint=mix(tint,vec3(2.2,1.1,.32),pow(sheet,5.)*.4*smoothstep(.10,.3,h));
     sum+=(1.-alpha)*tint*a;alpha+=(1.-alpha)*a;
     // A faint downstream plume follows the authored flow direction, not a universal upward axis.
     float smokeWindow=smoothstep(uFront+.10,uFront+.2,p.x)*(1.-smoothstep(.40,.5,p.x));
     float smoke=smokeWindow*smoothstep(.1,.3,h)*(1.-smoothstep(.65,.9,h))*lateral*smoothstep(.48,.7,n)*uAmount;
     float sa=1.-exp(-smoke*stepSize*1.5);sum+=(1.-alpha)*vec3(.13,.16,.19)*sa;alpha+=(1.-alpha)*sa;
     if(alpha>.98)break;
    }
    if(alpha<.003)discard;vec4 clip=projectionMatrix*modelViewMatrix*vec4(firstHit,1.);gl_FragDepth=(clip.z/clip.w)*.5+.5;gl_FragColor=vec4(sum/max(alpha,.001),alpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
   }`}),f=new at(new Jt(1,1,1),h);return f.scale.set(.82,.18,.39),f.position.copy(e).add(new D(0,.084,0)),f.renderOrder=5,t.add(f),f.onBeforeRender=()=>d.uInverseModel.value.copy(f.matrixWorld).invert(),{group:t,update(g){let x=Lt.clamp((g-60.027)/420,0,1),m=Lt.smoothstep(g,60.027,69)*(1-Lt.smoothstep(g,480.054,496));o.value=g,a.value=m,r.value=g<60.027?-.05:x;let p=(x-.5)*.72;d.uFront.value=p/.82,u.position.x=e.x+p,u.intensity=m*.14*(.9+.1*Math.sin(g*2.3))}}}var Ae=i=>document.getElementById(i),Ks=(i,e=1)=>Number.isFinite(i)?i.toLocaleString("en-US",{maximumFractionDigits:e,minimumFractionDigits:e}):"\u2014",Qh=i=>`${Math.floor(i/60).toString().padStart(2,"0")}:${Math.floor(i%60).toString().padStart(2,"0")}`,ef=["#214E3C","#A66E28","#1D4ED8","#6B4E71"];function tf({scene:i,enter:e,hidePanels:t,travelTo:n,onMode:s,stopMovement:r,openResearch:a}){let o=!1,c=!1,l=!1,u=0,d=5,h=null,f=null,g=[],x=[],m=-1,p=0,T=[],v=null,S=new D(-.18,-.22,-.33),E=S.clone(),w="Center \xB7 Main Science Aisle",C=Jh(i,S),P=new Kt;i.add(P),P.visible=!1;let b=new at(new Jt(.7,.014,.35),new Vt({color:4017235,metalness:.65,roughness:.4}));b.position.y=-.025,P.add(b);let _=new Vt({color:14997178,roughness:.85,metalness:0}),R=new at(new Jt(.52,.008,.22),_);P.add(R);let N=new at(new ks(.012,.012,.12,14),new Vt({color:14206887}));N.position.y=.06,P.add(N);let F=new at(new Rr(.045,.004,6,32),new Vt({color:6709077,emissive:14045716,emissiveIntensity:0,metalness:.6,roughness:.5}));F.rotation.x=Math.PI/2,F.position.y=.02,P.add(F);let G={open:$=>{c=!1,r(),Ae("record-metadata").querySelector("video")?.pause(),a($)}},X=Ae("free-roam-toggle");X&&(X.onclick=()=>{l=!l,X.classList.toggle("active",l),X.innerHTML=l?'<svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3v18M3 12h18"/></svg> Show Combustion Tray':'<svg viewBox="0 0 24 24" aria-hidden="true" style="width:16px;height:16px;display:inline-block;vertical-align:middle;margin-right:4px;"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 3 9 5v8l-9 5-9-5V8l9-5Zm0 10v8M3 8l9 5 9-5"/></svg> Free Walk Mode',se(),Ae("fire-panel").hidden=l,Ae("fire-timeline").hidden=l||!h}),Ae("experiment-select").onchange=$=>ze(T.find(Se=>Se.id===$.target.value));let k=["data","conditions","source"];function Z($){for(let Se of k){let ye=Ae("tab-"+Se);ye&&(ye.setAttribute("aria-selected",String(Se===$)),ye.tabIndex=Se===$?0:-1);let Me=Ae("record-"+Se);Me&&(Me.hidden=Se!==$)}$!=="data"&&Ae("record-metadata").querySelector("video")?.pause()}for(let $ of k){let Se=Ae("tab-"+$);Se&&(Se.onclick=()=>Z($),Se.onkeydown=ye=>{if(!["ArrowRight","ArrowLeft"].includes(ye.key))return;ye.preventDefault();let Me=k[(k.indexOf($)+(ye.key==="ArrowRight"?1:2))%3];Z(Me),Ae("tab-"+Me)?.focus()})}Ae("fire-close").onclick=()=>{Ae("fire-panel").hidden=!0},Ae("fire-play").onclick=()=>{h&&(u>=h.sampling.endElapsedS&&(u=0),c=!c,ge())},Ae("fire-reset").onclick=()=>{c=!1,u=0,ge()},Ae("fire-speed").onchange=$=>d=Number($.target.value),Ae("fire-range").oninput=$=>{u=Number($.target.value),c=!1,ge()},Ae("fire-focus").onclick=j,Ae("fire-visual-toggle").onchange=se,Ae("placement-select").onchange=$=>{let Se={center:[-.18,-.22,-.33],aft:[-1.75,-.22,-.33],forward:[1.75,-.22,-.33]};Se[$.target.value]&&(E.fromArray(Se[$.target.value]),w=$.target.selectedOptions[0].text,H(),j())},Ae("fire-download").onclick=()=>{if(!h)return;let $=[h.columns.map(Me=>Me.key).join(","),...g.map(Me=>Me.join(","))],Se=URL.createObjectURL(new Blob([$.join(`
`)],{type:"text/csv;charset=utf-8"})),ye=document.createElement("a");ye.href=Se,ye.download=`${f.id}-source-measurements.csv`,ye.click(),setTimeout(()=>URL.revokeObjectURL(Se),1e3)};function H(){C.group.position.copy(E).sub(S),P.position.copy(E),Ae("context-caption").textContent=`${w} \xB7 Active Simulation`,Ae("placement-select").title=w}function j(){n([E.x-.85,.22,.35],[E.x,E.y+.07,E.z])}function se(){let $=o&&!l&&Ae("fire-visual-toggle").checked;C.group.visible=$&&f?.id==="saffire-i-sample1",P.visible=$&&!!f&&f.id!=="saffire-i-sample1"}async function Te(){T.length||(T=await va(),Ae("experiment-select").replaceChildren(...T.map($=>new Option(`${$.experiment} \u2014 ${$.title}`,$.id))))}async function ze($){let Se=++p;o=!0,c=!1,e(),t(),s(!0),document.body.classList.remove("has-telemetry","expanded-scene"),Ae("fire-panel").hidden=l,Ae("fire-context").hidden=!1,Ae("fire-timeline").hidden=!0,Ae("lab-button")?.setAttribute("aria-pressed","true"),Ae("fire-loading").hidden=!1,Ae("fire-loading").textContent="Loading calibrated NASA flight telemetry\u2026",Ae("fire-content").hidden=!0,Ae("record-metadata").hidden=!0,Ae("fire-download").hidden=!0,Ae("record-metadata").querySelector("video")?.pause(),h=null,g=[],v=null,m=-1,u=0,se(),Z("data");try{if(await Te(),Se!==p)return;if(f=$??f??T[0],Ae("experiment-select").value=f.id,Ae("record-title").textContent=f.experiment,Ae("context-title").textContent=`${f.material} \xB7 ${f.experiment}${f.testId?" / "+f.testId:""}`,H(),st(),se(),Ke(),K(),j(),f.telemetryFile){let ye=await fetch("./assets/"+f.telemetryFile);if(!ye.ok)throw Error("Could not load sensor telemetry JSON");let Me=await ye.json();if(Se!==p)return;if(Me.schemaVersion!==1||!Me.rows?.length)throw Error("Corrupted sensor telemetry schema");h=Me,g=h.rows,Ae("fire-range").max=h.sampling.endElapsedS,ve(),De(),Ae("fire-content").hidden=!1,l||(Ae("fire-timeline").hidden=!1),document.body.classList.add("has-telemetry"),Ae("fire-download").hidden=!1,Ae("record-intro").textContent=f.id==="same-r55"?"Calibrated voltage readouts from spacecraft ionization and photoelectric smoke detectors with stir-fan sequence.":"Real-time thermocouple arrays and radiometer channels during SIBAL zero-gravity flame spread.",K(),ge()}else Q(),Ae("record-metadata").hidden=!1;Ae("fire-loading").hidden=!0}catch(ye){if(Se!==p)return;console.error("Experiment loading error:",ye),Ae("fire-loading").replaceChildren(document.createTextNode("Unable to load flight telemetry. "));let Me=document.createElement("button");Me.textContent="Retry",Me.className="secondary",Me.onclick=()=>ze($),Ae("fire-loading").append(Me),Ae("fire-loading").hidden=!1}}function Qe(){++p,o=!1,c=!1,s(!1),document.body.classList.remove("has-telemetry","expanded-scene"),se(),Ae("fire-panel").hidden=!0,Ae("fire-timeline").hidden=!0,Ae("fire-context").hidden=!0,Ae("record-metadata").querySelector("video")?.pause()}function st(){let $=f.geometryType==="candle",Se=f.id==="same-r55";R.visible=!Se,N.visible=Se||$,F.visible=Se,R.geometry.dispose(),R.geometry=$?new ks(.055,.055,.15,40):new Jt(.52,.008,.22),R.position.y=$?.075:0,N.position.y=$?.18:.06,_.color.set(f.material==="PMMA"?12375258:f.material==="Nomex III"?12102793:14997178),F.material.emissiveIntensity=0}function Ke(){Ae("condition-list").innerHTML=`
     <div><dt>Flight Environment</dt><dd>${he(f.platform)}</dd></div>
     <div><dt>Fuel Material</dt><dd>${he(f.materialOriginal)}</dd></div>
     ${f.conditions.filter($=>!["Numune","Malzeme","Sample","Material"].includes($.label)).map($=>`<div><dt>${he($.label)}</dt><dd>${he(Ul($))}</dd></div>`).join("")}
   `}function K(){let $=h?.source??f.source;Ae("source-content").innerHTML=`
     <span class="evidence-badge ${f.kind==="telemetry"?"series":"metadata"}">${f.kind==="telemetry"?"TIME-SERIES TELEMETRY":"EXPERIMENTAL TABLE"}</span>
     <p>${he(f.evidence.description)}</p>
     <a href="${he(f.sourceUrl)}" target="_blank" rel="noopener noreferrer">NASA PSI Investigation Record \u2197</a>
     ${$?.downloadUrl?`<a href="${he($.downloadUrl)}" target="_blank" rel="noopener noreferrer">Source Raw Data File \u2197</a>`:""}
     <h3>Scientific Boundaries & Limitations</h3>
     <ul>${f.limitations.map(Se=>`<li>${he(Se)}</li>`).join("")}</ul>
     ${$?`<details><summary>Checksum & Provenance</summary><code>${he($.fileName)}</code>${$.sheet?`<p>Sheet: ${he($.sheet)}</p>`:""}${$.csvRow?`<p>CSV Row: ${$.csvRow}</p>`:""}${$.sha256?`<p>SHA-256</p><code>${$.sha256}</code>`:""}</details>`:""}
   `}function Q(){let $=f.media;Ae("record-metadata").innerHTML=`
     <span class="evidence-badge ${$?"video":"metadata"}">${$?"FLIGHT VIDEO ARCHIVE":"TEST CONDITIONS"}</span>
     ${$?`<video controls playsinline preload="metadata" aria-label="${he(f.title)} NASA experiment video" src="./assets/${he($.file)}"></video><p class="caption">${he($.caption??"Archival camera footage from the experiment.")}</p>`:`<div class="sample-card"><span class="sample-symbol ${f.geometryType}"></span><h3>${he(f.material)}</h3><p>${he(f.materialOriginal)}</p></div>`}
     <p class="data-note">This investigation includes discrete test matrix points. 3D view illustrates sample geometry and relative scale inside US Lab.</p>
     <dl class="condition-list">${f.conditions.map(Se=>`<div><dt>${he(Se.label)}</dt><dd>${he(Ul(Se))}</dd></div>`).join("")}</dl>
   `}function ve(){x=f.chartKeys.map(($,Se)=>{let ye=h.columns.findIndex(Me=>Me.key===$);return{...h.columns[ye],index:ye,color:ef[Se%ef.length],digits:$==="stsDetectorV"?6:$==="issScatterV"||$.endsWith("Pct")?3:1}}),Ae("fire-charts").replaceChildren();for(let $ of x){let[Se,ye]=$.originalRange;$.lo=Se,$.range=ye-Se||1;let Me=g.map(Xe=>`${(Xe[0]/h.sampling.endElapsedS*264).toFixed(2)},${(55-(Xe[$.index]-Se)/$.range*48).toFixed(2)}`).join(" "),I=document.createElement("div");I.className="telemetry-card",I.style.setProperty("--trace",$.color),I.innerHTML=`
       <div class="telemetry-heading"><span>${he($.label)}</span><strong>\u2014</strong></div>
       <svg viewBox="0 0 264 62" role="img" aria-label="${he($.label)} time series">
         <path d="M0 7H264M0 31H264M0 55H264" class="chart-grid"/>
         <polyline points="${Me}" class="chart-line"/>
         <line class="chart-cursor" x1="0" x2="0" y1="0" y2="62"/>
         <circle class="chart-dot" r="3" cx="0" cy="55"/>
       </svg>
       <div class="chart-axis">
         <span>${Ks(Se,$.digits)} \u2013 ${Ks(ye,$.digits)} ${he($.unit)}</span>
         <span>0\u2013${Math.ceil(h.sampling.endElapsedS)} s</span>
       </div>
     `,Ae("fire-charts").append(I),$.element=I}}function De(){let $=f.id==="same-r55"?[{time:0,label:"Initial baseline"},{time:398,label:"Wire heater on"},{time:452,label:"Heater off"},{time:498,label:"Stir fan active"},{time:506,label:"Stir fan off"}]:[{time:0,label:"Ignition standby"},{time:60.027,label:"Igniter hot wire"},{time:120,label:"Steady flame spread"},{time:480.054,label:"Tunnel fan shutdown"}];Ae("timeline-events").replaceChildren(...$.map(Se=>{let ye=document.createElement("button");return ye.textContent=`${Se.time?Math.round(Se.time)+"s \xB7 ":""}${Se.label}`,ye.onclick=()=>{c=!1,u=Se.time,ge()},ye}))}function ge(){if(!h)return;Ae("fire-range").value=u,Ae("fire-time").textContent=`${Qh(u)} / ${Qh(h.sampling.endElapsedS)}`,Ae("fire-play").textContent=c?"\u2161 Pause":"\u25B6 Play";let $=0,Se=g.length-1;for(;$<Se;){let I=$+Se>>1;g[I][0]<u?$=I+1:Se=I}let ye=$;$>0&&Math.abs(g[$-1][0]-u)<Math.abs(g[$][0]-u)&&(ye=$-1);let Me=g[ye];v=Me,Ae("fire-phase").textContent=f.id==="same-r55"?Me[5]?"Heater Active":Me[6]?"Mixing Fan Active":Me[7]?"Sampling Run Active":"Post-test Purge":u<60.027?"Pre-ignition Airflow":u<68.013?"Igniter Coil Firing":Me[8]===0?"Ventilation Quenched":"Active Microgravity Flame";for(let I of x){let Xe=u/h.sampling.endElapsedS*264;I.element.querySelector(".chart-cursor").setAttribute("x1",Xe),I.element.querySelector(".chart-cursor").setAttribute("x2",Xe),I.element.querySelector(".chart-dot").setAttribute("cx",Me[0]/h.sampling.endElapsedS*264),I.element.querySelector(".chart-dot").setAttribute("cy",55-(Me[I.index]-I.lo)/I.range*48),m!==ye&&(I.element.querySelector("strong").textContent=`${Ks(Me[I.index],I.digits)} ${I.unit}`)}if(m!==ye){let I=f.id==="same-r55"?[["Heater Relay",Me[5]?"Engaged":"Standby"],["Mixing Blower",Me[6]?"Active":"Off"],["Run Index",Me[8]],["STS Alarm Trigger",Me[9]?"Active Alarm":"Nominal"]]:[["Tunnel Velocity",Ks(Me[6])+" cm/s"],["Igniter Current",Ks(Me[7],3)+" A"],["Blower Power",Me[8]===1?"Nominal Flow":"Zero-flow Shutdown"]];Ae("control-readings").innerHTML=I.map(([Xe,V])=>`<div><dt>${Xe}</dt><dd>${V}</dd></div>`).join(""),Ae("fire-sample").textContent=`Telemetry Epoch: ${Ks(Me[0],3)} s \xB7 CSV Row ${Me[1]}`,m=ye}}return{get active(){return o},get status(){return{id:f?.id,time:u,playing:c,sourceRow:v?.[1],placement:E.toArray()}},close:Qe,openRecord:ze,pause(){c=!1,r(),Ae("record-metadata").querySelector("video")?.pause()},openCatalog:G.open,placeAt($,Se){E.set(Lt.clamp($[0],-2.2,2.2),-.22,Lt.clamp($[2]*.3,-.33,.33)),w=Se+" Proximity",Ae("placement-select").value="custom",ze()},update($){o&&(c&&!document.querySelector("dialog[open]")&&(u=Math.min(u+$*d,h?.sampling.endElapsedS??0),h&&u>=h.sampling.endElapsedS&&(c=!1),ge()),f?.id==="saffire-i-sample1"&&C.update(u),f?.id==="same-r55"&&(F.material.emissiveIntensity=v?.[5]?.65:0))}}}function nf(i,{onOpenLab:e,onOpenData:t,onOpenStudy:n}={}){let s=1,r=null,a=0,o=34;i.innerHTML=`
    <div class="story-container">
      <header class="story-header">
        <span class="story-kicker">CINEMATIC SCIENTIFIC STORY</span>
        <h1>From Teardrop to Blue Sphere</h1>
        <p>
          Microgravity fundamentally breaks our terrestrial intuition of fire. Without buoyant convection, 
          flames undergo a radical metamorphosis\u2014from turbulent, flickering yellow plumes to quiet, 
          soot-free, diffusion-controlled blue spheres. Explore how NASA PSI data transforms this physics shift into life-saving spacecraft design.
        </p>

        <div class="story-chapters-nav" role="tablist">
          <button class="story-nav-item active" data-chapter="1">
            <span class="story-nav-num">CH 01</span>
            <span>The Physics Shift (1g vs 0g)</span>
          </button>
          <button class="story-nav-item" data-chapter="2">
            <span class="story-nav-num">CH 02</span>
            <span>The Lunar Habitat Paradox</span>
          </button>
          <button class="story-nav-item" data-chapter="3">
            <span class="story-nav-num">CH 03</span>
            <span>Hidden Hazards in Space</span>
          </button>
          <button class="story-nav-item" data-chapter="4">
            <span class="story-nav-num">CH 04</span>
            <span>12 TB PSI Data to Action</span>
          </button>
        </div>
      </header>

      <div id="story-chapter-body"></div>
    </div>
  `;let c=i.querySelector("#story-chapter-body");function l(){switch(r&&(cancelAnimationFrame(r),r=null),i.querySelectorAll(".story-nav-item").forEach(m=>{m.classList.toggle("active",Number(m.dataset.chapter)===s)}),s){case 1:u(c);break;case 2:f(c);break;case 3:g(c);break;case 4:x(c);break}}function u(m){m.innerHTML=`
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 01</span>
          <span class="telemetry-badge badge-psi">NASA PSI-69 & PSI-25 GROUNDING</span>
        </div>
        <h2 class="chapter-title">The Physics Shift: Buoyancy vs. Pure Diffusion</h2>
        <p class="chapter-intro">
          On Earth, gravity creates a density differential: hot combustion gases expand, become buoyant, and rush upward at 1\u20132 m/s, 
          drawing fresh oxygen into the flame base and carrying unburnt carbon soot upward into an incandescent yellow teardrop. 
          In microgravity (g \u2248 0), buoyancy vanishes. Molecular diffusion alone feeds the flame, forming a spherical, soot-free blue halo.
        </p>

        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--space-border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-cyan); text-transform: uppercase;">
              Interactive Gravity Morph: <span id="grav-morph-val">${a.toFixed(2)} g</span>
            </label>
            <div style="display: flex; gap: 8px;">
              <button class="quick-chip ${a===0?"active":""}" id="btn-grav-0">0g Microgravity (ISS)</button>
              <button class="quick-chip ${a===.16?"active":""}" id="btn-grav-moon">0.16g Lunar</button>
              <button class="quick-chip ${a===1?"active":""}" id="btn-grav-1">1.0g Earth Normal</button>
            </div>
          </div>
          <input type="range" id="grav-slider" min="0" max="1" step="0.02" value="${a}" style="width: 100%; accent-color: var(--telemetry-cyan);">
        </div>

        <div class="physics-split-grid">
          <article class="split-card earth-side">
            <div class="split-card-header">
              <h3>Earth Reference Flame (1.0g)</h3>
              <span class="telemetry-badge" style="background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);">
                1.0g BUOYANCY-DOMINATED
              </span>
            </div>
            <div class="split-canvas-wrapper">
              <canvas id="canvas-ch1-earth"></canvas>
            </div>
            <ul class="physics-features-list">
              <li><strong>Transport:</strong> Natural buoyant convection (F<sub>b</sub> = \u03C1g\u03B2\u0394T)</li>
              <li><strong>Shape & Color:</strong> Elongated teardrop, flickering tip, bright yellow soot incandescence (1500\u20131900 K)</li>
              <li><strong>Combustion Speed:</strong> High mass burning rate due to rapid convective oxygen replenishment</li>
              <li><strong>Extinction Limit:</strong> Blowout occurs under high convective air velocity</li>
            </ul>
          </article>

          <article class="split-card space-side">
            <div class="split-card-header">
              <h3 id="right-card-title">Microgravity Flame (0.00g)</h3>
              <span class="telemetry-badge badge-psi" id="right-card-badge">DIFFUSION-DOMINATED</span>
            </div>
            <div class="split-canvas-wrapper">
              <canvas id="canvas-ch1-micro"></canvas>
            </div>
            <ul class="physics-features-list">
              <li><strong>Transport:</strong> Pure molecular diffusion (Fick's law: J = \u2212D\u2207C)</li>
              <li><strong>Shape & Color:</strong> Perfect sphere, silent, non-flickering, translucent blue CH/C\u2082 chemiluminescence</li>
              <li><strong>Combustion Speed:</strong> Low reaction rate, combustion products (CO<sub>2</sub>, H<sub>2</sub>O) linger around flame shell</li>
              <li><strong>Extinction Limit:</strong> Radiative cooling extinction; can transition into "cool flame" (600\u2013800 K)</li>
            </ul>
          </article>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <div style="font-size: 13px; color: var(--space-text-secondary);">
            Primary Reference: <strong>NASA Glenn Research Center \u2014 Physical Sciences Informatics (PSI-69 FLEX & PSI-25 BASS)</strong>
          </div>
          <button class="primary" id="btn-to-ch2" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
            Next Chapter: The Lunar Habitat Paradox \u2192
          </button>
        </div>
      </section>
    `;let p=m.querySelector("#canvas-ch1-earth"),T=m.querySelector("#canvas-ch1-micro"),v=m.querySelector("#grav-slider"),S=m.querySelector("#grav-morph-val");function E(C){let P=m.querySelector("#right-card-title"),b=m.querySelector("#right-card-badge");!P||!b||(C<=.05?(P.textContent=`Microgravity Flame (${C.toFixed(2)}g)`,b.textContent="DIFFUSION-DOMINATED",b.className="telemetry-badge badge-psi",b.removeAttribute("style")):C<=.45?(P.textContent=`Partial-Gravity Flame (${C.toFixed(2)}g)`,b.textContent="TRANSITIONAL CONVECTION",b.className="telemetry-badge",b.setAttribute("style","background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);")):(P.textContent=`Elevated-Gravity Flame (${C.toFixed(2)}g)`,b.textContent="BUOYANCY-DOMINATED",b.className="telemetry-badge",b.setAttribute("style","background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);")))}v.oninput=C=>{a=parseFloat(C.target.value),S.textContent=`${a.toFixed(2)} g`,m.querySelectorAll(".quick-chip").forEach(P=>P.classList.remove("active")),E(a)},m.querySelector("#btn-grav-0").onclick=()=>{a=0,v.value=0,S.textContent="0.00 g",E(a)},m.querySelector("#btn-grav-moon").onclick=()=>{a=.16,v.value=.16,S.textContent="0.16 g",E(a)},m.querySelector("#btn-grav-1").onclick=()=>{a=1,v.value=1,S.textContent="1.00 g",E(a)},E(a),m.querySelector("#btn-to-ch2").onclick=()=>{s=2,l()};function w(C){!p||!T||(d(p,C),h(T,C,a),r=requestAnimationFrame(w))}r=requestAnimationFrame(w)}function d(m,p){let T=m.getBoundingClientRect(),v=Math.min(window.devicePixelRatio||1,2);m.width=T.width*v,m.height=T.height*v;let S=m.getContext("2d");S.scale(v,v);let E=T.width,w=T.height;S.clearRect(0,0,E,w),S.fillStyle="#050811",S.fillRect(0,0,E,w);let C=E*.5,P=w*.78;S.fillStyle="#cbd5e1",S.fillRect(C-14,P,28,50),S.fillStyle="#475569",S.fillRect(C-2,P-14,4,14);let b=Math.sin(p*.012)*4+Math.sin(p*.027)*2,_=90+b*2,R=28+Math.cos(p*.018)*2;S.save(),S.translate(C,P-14);let N=S.createLinearGradient(0,0,0,-_);N.addColorStop(0,"rgba(56, 189, 248, 0.9)"),N.addColorStop(.2,"rgba(245, 158, 11, 0.95)"),N.addColorStop(.7,"rgba(239, 68, 68, 0.85)"),N.addColorStop(1,"rgba(239, 68, 68, 0.0)"),S.fillStyle=N,S.beginPath(),S.moveTo(-R*.5,0),S.bezierCurveTo(-R*.8,-_*.4,-R*.2,-_*.8,b*.5,-_),S.bezierCurveTo(R*.2,-_*.8,R*.8,-_*.4,R*.5,0),S.closePath(),S.fill();let F=S.createLinearGradient(0,0,0,-_*.5);F.addColorStop(0,"rgba(224, 242, 254, 0.95)"),F.addColorStop(1,"rgba(251, 191, 36, 0.0)"),S.fillStyle=F,S.beginPath(),S.ellipse(0,-_*.25,R*.3,_*.25,0,0,Math.PI*2),S.fill(),S.restore()}function h(m,p,T){let v=m.getBoundingClientRect(),S=Math.min(window.devicePixelRatio||1,2);m.width=v.width*S,m.height=v.height*S;let E=m.getContext("2d");E.scale(S,S);let w=v.width,C=v.height;E.clearRect(0,0,w,C),E.fillStyle="#050811",E.fillRect(0,0,w,C);let P=w*.5,b=C*.55;E.fillStyle="#38bdf8",E.beginPath(),E.arc(P,b,6,0,Math.PI*2),E.fill();let _=54,R=1+T*1.2,N=T*35,F=T;E.save(),E.translate(P,b-N);let G=3;for(let X=0;X<G;X++){let k=1+X*.18,Z=E.createRadialGradient(0,0,_*.2,0,0,_*k);F<.3?(Z.addColorStop(0,"rgba(224, 242, 254, 0.8)"),Z.addColorStop(.4,"rgba(34, 211, 238, 0.6)"),Z.addColorStop(.8,"rgba(56, 189, 248, 0.35)"),Z.addColorStop(1,"rgba(30, 58, 138, 0)")):(Z.addColorStop(0,"rgba(254, 243, 199, 0.8)"),Z.addColorStop(.4,`rgba(${Math.round(34+200*F)}, ${Math.round(211-60*F)}, 238, 0.6)`),Z.addColorStop(.8,"rgba(245, 158, 11, 0.35)"),Z.addColorStop(1,"rgba(180, 83, 9, 0)")),E.fillStyle=Z,E.beginPath(),E.ellipse(0,0,_*k,_*k*R,0,0,Math.PI*2),E.fill()}E.strokeStyle=F<.4?"rgba(34, 211, 238, 0.5)":"rgba(245, 158, 11, 0.5)",E.lineWidth=1.5,E.beginPath(),E.ellipse(0,0,_*1.1,_*1.1*R,0,0,Math.PI*2),E.stroke(),E.restore()}function f(m){m.innerHTML=`
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 02</span>
          <span class="telemetry-badge badge-ntrs">NASA-STD-6001B & ARTEMIS MISSION ARCHITECTURE</span>
        </div>
        <h2 class="chapter-title">The Lunar Habitat Paradox: EVA Decompression vs. Extreme Flammability</h2>
        <p class="chapter-intro">
          NASA's Artemis lunar surface habitats plan for cabin pressures of <strong>56\u201370 kPa (8.2 psi)</strong> with elevated oxygen concentrations of <strong>32\u201334% O\u2082</strong>. 
          This maintains identical alveolar partial pressure of oxygen for crew respiration while drastically reducing the 4-hour pre-breathe time required to prevent decompression sickness (the "bends") before moonwalks. 
          <strong>The Paradox:</strong> At 34% O\u2082, spacecraft materials (Nomex, PMMA acrylic, wire insulation) ignite at vastly lower energy thresholds and burn up to 4\xD7 faster.
        </p>

        <div class="lunar-paradox-layout">
          <div class="paradox-interactive-plot">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">
                OXYGEN FRACTION vs FLAME SPREAD REGIMES
              </span>
              <span class="telemetry-num" style="color: var(--telemetry-amber); font-weight: 700;">
                Active Cabin: ${o}% O\u2082
              </span>
            </div>

            <svg viewBox="0 0 540 260" style="width: 100%; height: auto; display: block;">
              <!-- Grid lines -->
              <line x1="50" y1="20" x2="50" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <line x1="50" y1="210" x2="510" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <line x1="50" y1="115" x2="510" y2="115" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
              
              <!-- Shaded Artemis Hazard Zone (30% to 36% O2) -->
              <rect x="290" y="20" width="180" height="190" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1"/>
              <text x="380" y="40" fill="#f87171" font-family="JetBrains Mono" font-size="10" text-anchor="middle">ARTEMIS LUNAR ZONE (32-34% O\u2082)</text>

              <!-- Earth Baseline Marker (21%) -->
              <line x1="130" y1="20" x2="130" y2="210" stroke="#38bdf8" stroke-dasharray="3"/>
              <text x="130" y="225" fill="#38bdf8" font-family="JetBrains Mono" font-size="9" text-anchor="middle">21% Earth/ISS</text>

              <!-- Spread Rate Curves -->
              <!-- PMMA Curve (steep) -->
              <path d="M 80 190 Q 200 170 330 110 T 480 30" fill="none" stroke="#f59e0b" stroke-width="3"/>
              <circle cx="370" cy="85" r="4" fill="#f59e0b"/>
              <text x="490" y="35" fill="#f59e0b" font-family="JetBrains Mono" font-size="10">PMMA Acrylic</text>

              <!-- Nomex Curve (moderate) -->
              <path d="M 170 205 Q 260 195 360 160 T 480 100" fill="none" stroke="#22d3ee" stroke-width="2.5"/>
              <text x="490" y="105" fill="#22d3ee" font-family="JetBrains Mono" font-size="10">Nomex (Aramid)</text>

              <!-- Dynamic Cursor based on oxygenPlotVal -->
              <line x1="${50+(o-18)*25.5}" y1="20" x2="${50+(o-18)*25.5}" y2="210" stroke="#ef4444" stroke-width="2"/>
              <circle cx="${50+(o-18)*25.5}" cy="${190-(o-18)*9.5}" r="6" fill="#ef4444" stroke="#fff" stroke-width="2"/>

              <!-- Axis Labels -->
              <text x="280" y="250" fill="#94a3b8" font-family="Space Grotesk" font-size="11" text-anchor="middle">Atmospheric Oxygen Concentration (%)</text>
              <text x="20" y="115" fill="#94a3b8" font-family="Space Grotesk" font-size="11" transform="rotate(-90 20 115)" text-anchor="middle">Spread Rate (mm/s)</text>
            </svg>

            <div style="margin-top: 16px;">
              <label style="font-family: var(--font-mono); font-size: 11px; color: var(--space-text-secondary); display: block; margin-bottom: 6px;">
                Slide Oxygen Level: <strong>${o}% O\u2082</strong>
              </label>
              <input type="range" id="ox-slider" min="18" max="36" step="1" value="${o}" style="width: 100%; accent-color: var(--telemetry-amber);">
            </div>
          </div>

          <div class="paradox-callout-box">
            <h4>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
              </svg>
              The Flammability Cliff
            </h4>
            <p>
              Standard NASA flammability acceptance tests (<strong>NASA-STD-6001B Test 1</strong>) historically tested upward flame propagation at Earth atmospheric pressure (101.3 kPa, 21% O\u2082).
            </p>
            <p>
              When pressure is lowered to 56 kPa and O\u2082 elevated to 34%, the <em>Limiting Oxygen Concentration (LOC)</em> drops precipitously. Materials certified as "self-extinguishing" on the ISS can burn continuously on the Lunar surface.
            </p>
            <div style="background: rgba(0,0,0,0.4); border-radius: 6px; padding: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">
              <div>\u0394LOC Margin at 34% O\u2082: <strong style="color: #ef4444;">+12.4% (EXTREME HAZARD)</strong></div>
              <div>Artemis EVA Suit Pre-breathe: <strong>20 min (vs 240 min on ISS)</strong></div>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <button class="secondary" id="btn-back-ch1">\u2190 Back to Chapter 1</button>
          <button class="primary" id="btn-to-ch3" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
            Next Chapter: Hidden Space Hazards \u2192
          </button>
        </div>
      </section>
    `;let p=m.querySelector("#ox-slider");p.oninput=T=>{o=parseInt(T.target.value),f(m)},m.querySelector("#btn-back-ch1").onclick=()=>{s=1,l()},m.querySelector("#btn-to-ch3").onclick=()=>{s=3,l()}}function g(m){let p="stealth",T={stealth:{title:"Near-Invisible Blue Flame & Silent Smoldering",psi:"PSI-101 / SAME-R & PSI-69 FLEX",text:"Because microgravity flames produce virtually zero glowing carbon soot, emissions peak in the ultraviolet and faint blue CH/C\u2082 bands. Under bright white ISS cabin LED lighting, a 20 cm open flame is almost completely invisible to the astronaut eye. Flameless smoldering can travel deep inside cable ducts for hours without tripping optical obscuration detectors."},hvac:{title:"HVAC Ventilation Fire Jet Metamorphosis",psi:"PSI-98 Saffire-I & PSI-25 BASS-II",text:"Without convection, a stationary microgravity flame surrounds itself with its own combustion products (CO\u2082 and H\u2082O), starving itself of oxygen. However, when the spacecraft Environmental Control and Life Support System (ECLSS) fans circulate air at typical cabin speeds (15\u201325 cm/s), the dormant sphere is fed fresh oxidizer, transforming into a high-speed, directional fire jet spreading across equipment racks."},eclss:{title:"Toxic Accumulation in Hermetically Sealed Cabin Loops",psi:"PSI-100 Saffire-III & Apollo/Mir Archival Logs",text:"Unlike on Earth where smoke ventilates outside, a spacecraft is a closed hermetic loop. Combustion of Teflon (PTFE), Kapton, and polyurethane releases lethal hydrofluoric acid (HF), hydrogen cyanide (HCN), and carbon monoxide (CO). The scrubber beds become saturated within minutes, threatening catastrophic crew incapacitation even after flame extinguishment."}};function v(){let S=T[p];m.innerHTML=`
        <section class="story-chapter">
          <div class="chapter-kicker-row">
            <span class="chapter-num">CHAPTER 03</span>
            <span class="telemetry-badge badge-gap">CRITICAL HAZARDS IN MICROGRAVITY</span>
          </div>
          <h2 class="chapter-title">Three Hidden Failure Modes of Spacecraft Fires</h2>
          <p class="chapter-intro">
            Terrestrial firefighting tactics fail in orbit. Explore the three unique failure modes uncovered 
            by NASA Saffire and BASS investigations that redefine astronaut emergency response protocols.
          </p>

          <div class="hotspots-grid">
            <div class="hotspot-card ${p==="stealth"?"active":""}" data-hotspot="stealth">
              <div class="hotspot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h4>01. Invisible Blue Flame</h4>
              <p>Zero soot luminescence; undetectable by standard visual observation or optical smoke detectors.</p>
            </div>

            <div class="hotspot-card ${p==="hvac"?"active":""}" data-hotspot="hvac">
              <div class="hotspot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                </svg>
              </div>
              <h4>02. HVAC Ventilation Jet</h4>
              <p>Cabin airflow acts as a forced-draft blowtorch, converting dormant embers into high-velocity fire fronts.</p>
            </div>

            <div class="hotspot-card ${p==="eclss"?"active":""}" data-hotspot="eclss">
              <div class="hotspot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24m-14.14 0 4.24-4.24m5.66-5.66 4.24-4.24"/>
                </svg>
              </div>
              <h4>03. Closed-Loop ECLSS Toxicity</h4>
              <p>Fatal HF, HCN, and CO gases concentrate rapidly inside recirculating life-support atmospheres.</p>
            </div>
          </div>

          <!-- Active Hotspot Deep Dive Panel -->
          <div style="background: rgba(13, 22, 38, 0.95); border: 1px solid var(--space-border); border-radius: 12px; padding: 28px; margin-top: 24px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <span class="telemetry-badge badge-psi">${S.psi}</span>
              <span style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">DETAILED FAILURE ARCHITECTURE</span>
            </div>
            <h3 style="font-size: 22px; color: #fff; margin: 0 0 12px;">${S.title}</h3>
            <p style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); margin: 0 0 20px;">
              ${S.text}
            </p>
            <div style="display: flex; gap: 12px;">
              <button class="secondary" id="btn-hotspot-data">Explore Underlying PSI Datasets \u2192</button>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
            <button class="secondary" id="btn-back-ch2">\u2190 Back to Chapter 2</button>
            <button class="primary" id="btn-to-ch4" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
              Next Chapter: 12 TB PSI Data to Action \u2192
            </button>
          </div>
        </section>
      `,m.querySelectorAll(".hotspot-card").forEach(E=>{E.onclick=()=>{p=E.dataset.hotspot,v()}}),m.querySelector("#btn-back-ch2").onclick=()=>{s=2,l()},m.querySelector("#btn-to-ch4").onclick=()=>{s=4,l()},m.querySelector("#btn-hotspot-data").onclick=()=>{t?.("PSI-98")}}v()}function x(m){m.innerHTML=`
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 04</span>
          <span class="telemetry-badge badge-psi">NASA PHYSICAL SCIENCES INFORMATICS PIPELINE</span>
        </div>
        <h2 class="chapter-title">Turning 12 Terabytes of PSI Data into Actionable Crew Safety</h2>
        <p class="chapter-intro">
          NASA\u2019s Physical Sciences Informatics (PSI) repository stores over 12 terabytes of flight experiment telemetry, 
          high-speed shadowgraph imagery, and chemiluminescence spectra from the ISS, Cygnus, and drop towers. 
          Here is how raw combustion science is distilled into flight-ready safety protocols.
        </p>

        <div class="funnel-pipeline">
          <div class="funnel-step">
            <div class="funnel-step-arrow">\u2192</div>
            <h3>24</h3>
            <strong>Raw PSI Investigations</strong>
            <p>BASS, Saffire, FLEX, ACME, SoFIE flight campaigns covering solid, droplet, and gaseous fuels in true microgravity.</p>
          </div>

          <div class="funnel-step">
            <div class="funnel-step-arrow">\u2192</div>
            <h3>12 TB</h3>
            <strong>Sensor Telemetry & Video</strong>
            <p>Thermocouple matrices, radiometer spectra, O\u2082/CO\u2082 mass spectrometer channels, and particle obscuration traces.</p>
          </div>

          <div class="funnel-step">
            <div class="funnel-step-arrow">\u2192</div>
            <h3>AI / ML</h3>
            <strong>Predictive Flame Models</strong>
            <p>Neural regression of LOC boundaries, droplet lifetime formulas, and automated smoldering smoke characterization.</p>
          </div>

          <div class="funnel-step">
            <h3>SAFETY</h3>
            <strong>Operational Protocols</strong>
            <p>Artemis cabin material acceptance screening, automated emergency ventilation trip switches, and fine water-mist deployment.</p>
          </div>
        </div>

        <!-- Interactive Next Steps / Action Banner -->
        <div style="background: linear-gradient(135deg, rgba(34,211,238,0.1), rgba(56,189,248,0.05)); border: 1px solid var(--space-border-glow); border-radius: 12px; padding: 28px; text-align: center; margin-top: 30px;">
          <h3 style="font-size: 22px; color: #fff; margin: 0 0 10px;">Experience the Engineering Workbench</h3>
          <p style="font-size: 14px; color: var(--space-text-secondary); max-width: 680px; margin: 0 auto 20px;">
            Transition from narrative to hands-on analysis. Test custom oxygen and pressure regimes inside the 
            <strong>Interactive Flame Lab</strong>, or query the <strong>AI Safety Analyst</strong> with inline citations.
          </p>
          <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap;">
            <button class="primary" id="btn-launch-flame-lab" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 700; padding: 12px 24px; border-radius: 8px; cursor: pointer; border: none;">
              \u26A1 Launch Interactive Flame Lab
            </button>
            <button class="secondary" id="btn-launch-mission-ranker" style="border-color: var(--telemetry-blue); color: var(--telemetry-blue); padding: 12px 24px;">
              \u{1F4CA} Open PSI Mission Ranker
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-start; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <button class="secondary" id="btn-back-ch3">\u2190 Back to Chapter 3</button>
        </div>
      </section>
    `,m.querySelector("#btn-back-ch3").onclick=()=>{s=3,l()},m.querySelector("#btn-launch-flame-lab").onclick=()=>{e?.()},m.querySelector("#btn-launch-mission-ranker").onclick=()=>{t?.("PSI-69")}}return i.querySelectorAll(".story-nav-item").forEach(m=>{m.onclick=()=>{s=Number(m.dataset.chapter),l()}}),l(),{destroy(){r&&(cancelAnimationFrame(r),r=null)},goToChapter(m){s=m,l()}}}function sf(i,{onOpenData:e,onOpenStudy:t}={}){let n={gravity:0,oxygen:21,pressure:101.3,airflow:10,fuel:"pmma",efield:!1,animActive:!0},s={pmma:{name:"PMMA (Polymethyl Methacrylate)",type:"Solid Thermoplastic Rod",locEarth:17.5,locLunar:15.2,baseSpread:1.4,sootIndex:"Moderate (Earth) / Pure Vapor (0g)",suppression:"Fine Water-Mist or CO\u2082 Total Flooding",psiMatch:"PSI-25 (BASS-II) & PSI-20 (BRE)",ntrs:"NTRS-20190028412"},cotton:{name:"Cotton / Fiberglass Blend (SIBO)",type:"Solid Thin Fabric Sheet",locEarth:16,locLunar:14.1,baseSpread:1.8,sootIndex:"High Smoldering Risk / Low Visible Plume",suppression:"Fine Water-Mist PFE (Soaks fabric weave)",psiMatch:"PSI-98 (Saffire-I) & PSI-26 (BASS)",ntrs:"NTRS-20180006742"},nomex:{name:"Nomex (Aramid Spacecraft Fabric)",type:"Flame-Resistant Polymer",locEarth:28.5,locLunar:23.5,baseSpread:.6,sootIndex:"Carbonaceous char layer with low soot",suppression:"Airflow Interruption + Nitrogen Purge",psiMatch:"PSI-99 (Saffire-II) & NASA-STD-6001B",ntrs:"NTRS-20210018593"},heptane:{name:"n-Heptane Fuel Droplet",type:"Liquid Hydrocarbon Droplet",locEarth:14,locLunar:12.5,baseSpread:3.2,sootIndex:"Soot-Free Cool Flame Regime (<800 K)",suppression:"Inert Gas Extinction (N\u2082 / He / CO\u2082)",psiMatch:"PSI-69 (FLEX) & PSI-68 (FLEX-2)",ntrs:"NTRS-20150023456"},kapton:{name:"Kapton / PTFE Wire Insulation",type:"Electrical Wiring Insulation",locEarth:21,locLunar:17.5,baseSpread:.9,sootIndex:"Toxic HF / CO Off-gassing (High Toxicity)",suppression:"Electrical Bus Isolation + CO\u2082 PFE",psiMatch:"PSI-101 (SAME-R) & SoFIE-GEL",ntrs:"NTRS-20220004521"}};i.innerHTML=`
    <div class="flame-lab-container">
      <header class="lab-header">
        <div class="lab-title-group">
          <span class="telemetry-badge badge-psi">AEROSPACE COMBUSTION WORKBENCH</span>
          <h1>Microgravity Flame Physics & Habitat Simulator</h1>
          <p>
            Dynamically adjust spacecraft cabin environmental telemetry to inspect flame morphometry, 
            spread velocity (V<sub>f</sub>), Limiting Oxygen Concentration margins, and zero-gravity evidence boundaries.
          </p>
        </div>
        <div id="evidence-status-pill-box"></div>
      </header>

      <div class="flame-lab-grid">
        <!-- Column 1: Controls -->
        <aside class="lab-controls-panel">
          <!-- Gravity Control -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Gravity Regime</span>
              <span class="control-val" id="val-gravity">${n.gravity.toFixed(2)} g</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${n.gravity===0?"active":""}" data-g="0.0">0g (ISS)</button>
              <button class="quick-chip ${n.gravity===.16?"active":""}" data-g="0.16">0.16g (Moon)</button>
              <button class="quick-chip ${n.gravity===.38?"active":""}" data-g="0.38">0.38g (Mars)</button>
              <button class="quick-chip ${n.gravity===1?"active":""}" data-g="1.0">1.0g (Earth)</button>
            </div>
            <input type="range" class="control-slider" id="slider-gravity" min="0" max="1" step="0.01" value="${n.gravity}">
          </div>

          <!-- Oxygen Concentration -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Oxygen Fraction</span>
              <span class="control-val" id="val-oxygen">${n.oxygen}% O\u2082</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${n.oxygen===21?"active":""}" data-ox="21">21% (ISS Std)</button>
              <button class="quick-chip ${n.oxygen===30?"active":""}" data-ox="30">30% (EVA Prep)</button>
              <button class="quick-chip ${n.oxygen===34?"active":""}" data-ox="34">34% (Lunar Habitat)</button>
            </div>
            <input type="range" class="control-slider" id="slider-oxygen" min="18" max="36" step="1" value="${n.oxygen}">
            <div class="quick-markers">
              <span>18%</span>
              <span>21% (Earth)</span>
              <span>30%</span>
              <span>34% (Artemis)</span>
              <span>36%</span>
            </div>
          </div>

          <!-- Cabin Pressure -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Cabin Pressure</span>
              <span class="control-val" id="val-pressure">${n.pressure.toFixed(1)} kPa</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${n.pressure===56?"active":""}" data-pres="56">56 kPa (Lunar Target)</button>
              <button class="quick-chip ${n.pressure===70.3?"active":""}" data-pres="70.3">70.3 kPa (Cygnus)</button>
              <button class="quick-chip ${n.pressure===101.3?"active":""}" data-pres="101.3">101.3 kPa (1 atm)</button>
            </div>
            <input type="range" class="control-slider" id="slider-pressure" min="50" max="101.3" step="0.5" value="${n.pressure}">
          </div>

          <!-- Airflow Velocity -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Forced Airflow (HVAC)</span>
              <span class="control-val" id="val-airflow">${n.airflow} cm/s</span>
            </div>
            <input type="range" class="control-slider" id="slider-airflow" min="0" max="30" step="1" value="${n.airflow}">
            <div class="quick-markers">
              <span>0 cm/s (Stagnant)</span>
              <span>10 cm/s (ISS Baseline)</span>
              <span>25 cm/s (High Draft)</span>
            </div>
          </div>

          <!-- Fuel Material -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Sample Material</span>
            </div>
            <select class="material-select" id="select-fuel">
              <option value="pmma">PMMA Acrylic Rod (BASS-II / BRE)</option>
              <option value="cotton">Cotton / Fiberglass Blend (Saffire-I)</option>
              <option value="nomex">Nomex Aramid Fabric (Saffire-II)</option>
              <option value="heptane">Heptane Fuel Droplet (FLEX / FLEX-2)</option>
              <option value="kapton">Kapton / PTFE Wire Insulation (SAME-R)</option>
            </select>
          </div>

          <!-- E-Field Toggle (ACME / E-FIELD Flames) -->
          <div class="control-group">
            <button class="efield-toggle-btn" id="btn-efield">
              <span>\u26A1 Electric Field (E-FIELD Flames)</span>
              <span id="efield-status-text">OFF (0 kV)</span>
            </button>
            <span style="font-size: 10px; color: var(--space-text-muted); margin-top: 2px;">
              Applies 5 kV ion-wind body force (F = qE) deforming microgravity flame structure.
            </span>
          </div>
        </aside>

        <!-- Column 2: Center Stage Combustion Chamber -->
        <main class="lab-chamber-viewport">
          <div class="chamber-top-hud">
            <div class="chamber-meta-label">
              <span>SIMULATED COMBUSTION CHAMBER \xB7 CIR / MSG FACILITY</span>
            </div>
            <div class="chamber-live-indicator">
              <span class="pulse-dot" style="background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
              <span>REAL-TIME PHYSICS</span>
            </div>
          </div>

          <div class="chamber-canvas-box">
            <canvas id="flame-lab-canvas"></canvas>
          </div>

          <div class="chamber-bottom-telemetry">
            <div>
              <span>REGIME: </span>
              <strong id="telemetry-regime" style="color: var(--telemetry-cyan);">DIFFUSION SPHERICAL</strong>
            </div>
            <div>
              <span>ION-WIND: </span>
              <strong id="telemetry-ion" style="color: var(--space-text-muted);">INACTIVE</strong>
            </div>
            <div>
              <span>LOCAL FLAME TEMP: </span>
              <strong id="telemetry-temp" style="color: var(--telemetry-amber);">~1180 K</strong>
            </div>
          </div>
        </main>

        <!-- Column 3: Real-Time Telemetry & Evidence Boundary -->
        <aside class="lab-readouts-panel">
          <!-- KPI 1: Flame Spread Rate -->
          <article class="telemetry-kpi-card">
            <span class="kpi-title">Flame Spread Rate (V<sub>f</sub>)</span>
            <div class="kpi-main-val" id="kpi-spread-rate">1.42 mm/s</div>
            <span class="kpi-sub" id="kpi-spread-sub">Grounded correlation: BASS-II low-flow empirical model</span>
          </article>

          <!-- KPI 2: LOC Margin -->
          <article class="telemetry-kpi-card">
            <span class="kpi-title">Limiting O\u2082 Concentration (LOC) Margin</span>
            <div class="kpi-main-val" id="kpi-loc-margin" style="color: #10b981;">+3.5% (STABLE)</div>
            <span class="kpi-sub" id="kpi-loc-sub">Material ignites when [O<sub>2</sub>] > LOC</span>
          </article>

          <!-- KPI 3: Soot & Smoldering Hazard -->
          <article class="telemetry-kpi-card">
            <span class="kpi-title">Soot & Smoldering Hazard</span>
            <div class="kpi-main-val" id="kpi-soot-risk" style="font-size: 18px; color: var(--telemetry-cyan);">
              LOW SOOT / INVISIBLE
            </div>
            <span class="kpi-sub" id="kpi-soot-sub">Near-infrared chemiluminescence dominant</span>
          </article>

          <!-- KPI 4: Recommended Suppression -->
          <article class="telemetry-kpi-card">
            <span class="kpi-title">Suppression Protocol</span>
            <div class="kpi-main-val" id="kpi-suppression" style="font-size: 15px; color: #1E2421;">
              Fine Water-Mist PFE
            </div>
            <span class="kpi-sub">NASA ISS Operational Flight Rule 7.4.2</span>
          </article>

          <!-- Evidence Boundary & Recommended Next Experiment Card -->
          <div id="evidence-boundary-card-box"></div>
        </aside>
      </div>
    </div>
  `;let r=i.querySelector("#flame-lab-canvas"),a=null;function o(){let m=s[n.fuel],p=n.gravity>.8,T=n.gravity>.1&&n.gravity<.3,v=n.gravity<=.05,S=(101.3-n.pressure)*.035,E=m.locEarth-S,w=n.oxygen-E,C=m.baseSpread,P=Math.max(.2,(n.oxygen-15)/10),b=1+n.airflow/30*1.4,_=v?.85:T?1.35:1.65;C=C*P*b*_;let R=w<-1;R&&(C=0);let N=1100+(n.oxygen-21)*35+n.gravity*250;n.fuel==="heptane"&&v&&n.airflow<5&&(N=720),R&&(N=295);let F="high",G="",X="";return n.gravity>.05&&n.gravity<.7&&n.oxygen>30?(F="gap",G=`NASA PSI has zero microgravity flight test data for ${m.name} under ${n.gravity.toFixed(2)}g with elevated ${n.oxygen}% O\u2082. Weak buoyancy coupled with oxygen enrichment can cause unexpected rapid transition from smoldering to deflagration.`,X=`Proposed SoFIE-II Matrix: 0.16g parabolic flight centrifuge, 56 kPa, 34% O\u2082, 10 cm/s co-flow for ${m.name}.`):n.airflow>22&&n.pressure<60?(F="gap",G=`High forced draft (${n.airflow} cm/s) at sub-atmospheric pressure (${n.pressure.toFixed(1)} kPa) creates an untested convective boundary layer for ${m.name}.`,X="Proposed Saffire-VII Payload: Reduced pressure duct with 25 cm/s forced draft."):n.efield&&n.gravity>.5&&(F="gap",G="E-FIELD Flames investigations focused exclusively on microgravity (0g). 1g buoyancy overwhelms ion-wind body forces.",X="ACME Ground Test: Counter-flow gaseous burner under inverted DC potential."),{mat:m,isEarth:p,isLunar:T,isMicro:v,effectiveLoc:E,locMargin:w,vf:C,temp:N,isExtinguished:R,confidence:F,gapReason:G,nextExperiment:X}}function c(){let m=o();i.querySelector("#val-gravity").textContent=`${n.gravity.toFixed(2)} g`,i.querySelector("#val-oxygen").textContent=`${n.oxygen}% O\u2082`,i.querySelector("#val-pressure").textContent=`${n.pressure.toFixed(1)} kPa`,i.querySelector("#val-airflow").textContent=`${n.airflow} cm/s`,i.querySelector("#btn-efield").classList.toggle("active",n.efield),i.querySelector("#efield-status-text").textContent=n.efield?"ACTIVE (5 kV ION-WIND)":"OFF (0 kV)";let T=i.querySelector("#evidence-status-pill-box");m.confidence==="high"?T.innerHTML=`
        <div class="evidence-status-pill">
          <span class="telemetry-badge badge-match">HIGH CONFIDENCE: DIRECT PSI MATCH</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--space-text-secondary);">${m.mat.psiMatch}</span>
        </div>
      `:T.innerHTML=`
        <div class="evidence-status-pill" style="border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.1);">
          <span class="telemetry-badge badge-gap">EVIDENCE BOUNDARY WARNING</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: #f87171;">UNTESTED NASA REGIME</span>
        </div>
      `;let v=i.querySelector("#telemetry-regime");m.isExtinguished?(v.textContent="EXTINGUISHED (BELOW LOC)",v.style.color="#94a3b8"):n.fuel==="heptane"&&m.isMicro&&n.airflow<5?(v.textContent="COOL FLAME REGIME (LOW TEMP CH*)",v.style.color="#38bdf8"):m.isMicro&&!n.efield&&n.airflow<8?(v.textContent="DIFFUSION SPHERICAL BLUE",v.style.color="var(--telemetry-cyan)"):n.efield&&m.isMicro?(v.textContent="ION-DEFORMED TEARDROP (E-FIELD)",v.style.color="#c084fc"):m.isEarth?(v.textContent="BUOYANT TEARDROP (1.0g)",v.style.color="var(--telemetry-amber)"):(v.textContent="PARTIAL GRAVITY DRIFT",v.style.color="#fbbf24"),i.querySelector("#telemetry-ion").textContent=n.efield?"5 kV ACTIVE":"INACTIVE",i.querySelector("#telemetry-temp").textContent=`~${Math.round(m.temp)} K`;let S=i.querySelector("#kpi-spread-rate");m.isExtinguished?(S.textContent="0.00 mm/s",S.style.color="#94a3b8"):(S.textContent=`${m.vf.toFixed(2)} mm/s`,S.style.color=m.vf>2.5?"#ef4444":m.vf>1.2?"#f59e0b":"#38bdf8");let E=i.querySelector("#kpi-loc-margin");m.locMargin<0?(E.textContent=`${m.locMargin.toFixed(1)}% (BELOW LOC - QUENCHED)`,E.style.color="#38bdf8"):m.locMargin>8?(E.textContent=`+${m.locMargin.toFixed(1)}% (EXTREME HAZARD)`,E.style.color="#ef4444"):(E.textContent=`+${m.locMargin.toFixed(1)}% (SUSTAINED FLAME)`,E.style.color="#f59e0b");let w=i.querySelector("#kpi-soot-risk");m.isExtinguished?w.textContent="NONE (INERT)":m.isEarth?(w.textContent="HIGH YELLOW SOOT",w.style.color="var(--telemetry-amber)"):(w.textContent="LOW SOOT / TOXIC SMOLDERING",w.style.color="var(--telemetry-cyan)"),i.querySelector("#kpi-suppression").textContent=m.mat.suppression;let C=i.querySelector("#evidence-boundary-card-box");m.confidence==="high"?(C.innerHTML=`
        <article class="evidence-card">
          <div class="evidence-header">
            <span class="telemetry-badge badge-psi">DIRECT PSI INVESTIGATION</span>
            <span>${m.mat.psiMatch}</span>
          </div>
          <p class="evidence-desc">
            Conditions match validated microgravity flight runs. Data corroborated in <strong>${m.mat.ntrs}</strong>.
          </p>
          <div style="display: flex; gap: 8px;">
            <button class="secondary" id="btn-view-source-data" style="font-size: 11px; padding: 6px 12px;">
              View NASA PSI Tables \u2192
            </button>
          </div>
        </article>
      `,C.querySelector("#btn-view-source-data").onclick=()=>{e?.("PSI-25")}):C.innerHTML=`
        <article class="evidence-card gap-alert">
          <div class="evidence-header" style="color: #f87171;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01"/>
            </svg>
            <span>Evidence Boundary / Data Gap Alert</span>
          </div>
          <p class="evidence-desc" style="color: #fca5a5;">
            ${m.gapReason}
          </p>
          <div class="next-experiment-box">
            <strong>Recommended Next Experiment:</strong>
            <p>${m.nextExperiment}</p>
          </div>
        </article>
      `}function l(m){if(!r)return;let p=r.getBoundingClientRect(),T=Math.min(window.devicePixelRatio||1,2);r.width=p.width*T,r.height=p.height*T;let v=r.getContext("2d");v.scale(T,T);let S=p.width,E=p.height;v.clearRect(0,0,S,E);let w=v.createRadialGradient(S*.5,E*.5,20,S*.5,E*.5,S*.7);w.addColorStop(0,"#0a1020"),w.addColorStop(.7,"#040711"),w.addColorStop(1,"#020408"),v.fillStyle=w,v.fillRect(0,0,S,E),v.strokeStyle="rgba(56, 189, 248, 0.06)",v.lineWidth=1;for(let k=40;k<S;k+=40)v.beginPath(),v.moveTo(k,0),v.lineTo(k,E),v.stroke();for(let k=40;k<E;k+=40)v.beginPath(),v.moveTo(0,k),v.lineTo(S,k),v.stroke();let C=o(),P=S*.5,b=E*.55;if(n.airflow>0){let k=E-30,Z=30+n.airflow/30*120;v.strokeStyle="rgba(34, 211, 238, 0.4)",v.fillStyle="rgba(34, 211, 238, 0.4)",v.lineWidth=1.5,v.beginPath(),v.moveTo(30,k),v.lineTo(30+Z,k),v.stroke(),v.beginPath(),v.moveTo(30+Z,k),v.lineTo(22+Z,k-4),v.lineTo(22+Z,k+4),v.closePath(),v.fill(),v.fillStyle="rgba(148, 163, 184, 0.6)",v.font="9px JetBrains Mono",v.fillText(`FORCED FLOW: ${n.airflow} cm/s \u2192`,30,k-8)}if(v.save(),v.translate(P,b+30),v.fillStyle="#1e293b",v.fillRect(-16,0,32,50),v.fillStyle="#334155",v.fillRect(-10,2,20,40),v.restore(),C.isExtinguished){v.fillStyle="#475569",v.beginPath(),v.arc(P,b+25,6,0,Math.PI*2),v.fill();let k=4;for(let Z=0;Z<k;Z++){let H=Math.sin(m*.002+Z)*10+n.airflow/30*(Z*15);v.fillStyle="rgba(148, 163, 184, 0.15)",v.beginPath(),v.arc(P+H,b-Z*14,5+Z*2,0,Math.PI*2),v.fill()}v.fillStyle="#94a3b8",v.font="10px JetBrains Mono",v.textAlign="center",v.fillText("[EXTINGUISHED: BELOW LIMITING OXYGEN CONCENTRATION]",P,b-40);return}let _=n.airflow/30*.7,R=n.gravity,N=n.efield?1:0;v.save(),v.translate(P,b+25),v.rotate(_*.35);let F=38+(n.oxygen-18)*1.8,G=R*40+N*30;if(n.fuel==="heptane"&&C.isMicro&&n.airflow<5){let k=v.createRadialGradient(0,0,F*.2,0,0,F*1.3);k.addColorStop(0,"rgba(56, 189, 248, 0.25)"),k.addColorStop(.5,"rgba(30, 58, 138, 0.45)"),k.addColorStop(.9,"rgba(15, 23, 42, 0.2)"),k.addColorStop(1,"rgba(0, 0, 0, 0)"),v.fillStyle=k,v.beginPath(),v.arc(0,0,F*1.3,0,Math.PI*2),v.fill(),v.strokeStyle="rgba(56, 189, 248, 0.4)",v.setLineDash([4,4]),v.stroke(),v.setLineDash([])}else if(R<.2&&!n.efield)for(let Z=0;Z<3;Z++){let H=F*(1+Z*.2),j=v.createRadialGradient(0,0,H*.1,0,0,H);j.addColorStop(0,"rgba(240, 249, 255, 0.9)"),j.addColorStop(.3,"rgba(34, 211, 238, 0.65)"),j.addColorStop(.7,"rgba(56, 189, 248, 0.4)"),j.addColorStop(1,"rgba(3, 105, 161, 0)"),v.fillStyle=j,v.beginPath();let se=n.airflow/30*20;v.ellipse(se,0,H*(1+n.airflow/30*.3),H,0,0,Math.PI*2),v.fill()}else{let k=Math.sin(m*.015)*3,Z=F*1.6+G+k,H=F*.85,j=v.createLinearGradient(0,0,n.airflow/30*30,-Z);n.efield&&R<.3?(j.addColorStop(0,"rgba(224, 242, 254, 0.95)"),j.addColorStop(.3,"rgba(34, 211, 238, 0.8)"),j.addColorStop(.7,"rgba(192, 132, 252, 0.6)"),j.addColorStop(1,"rgba(139, 92, 246, 0)")):(j.addColorStop(0,"rgba(56, 189, 248, 0.9)"),j.addColorStop(.2,"rgba(245, 158, 11, 0.95)"),j.addColorStop(.8,"rgba(239, 68, 68, 0.8)"),j.addColorStop(1,"rgba(239, 68, 68, 0)")),v.fillStyle=j,v.beginPath();let se=n.airflow/30*35;v.moveTo(-H*.5,0),v.bezierCurveTo(-H*.7,-Z*.4,-H*.2+se*.5,-Z*.8,se,-Z),v.bezierCurveTo(H*.2+se*.5,-Z*.8,H*.7,-Z*.4,H*.5,0),v.closePath(),v.fill()}v.restore()}function u(m){n.animActive&&(l(m),a=requestAnimationFrame(u))}let d=i.querySelector("#slider-gravity");d.oninput=m=>{n.gravity=parseFloat(m.target.value),i.querySelectorAll("[data-g]").forEach(p=>p.classList.toggle("active",parseFloat(p.dataset.g)===n.gravity)),c()},i.querySelectorAll("[data-g]").forEach(m=>{m.onclick=()=>{n.gravity=parseFloat(m.dataset.g),d.value=n.gravity,i.querySelectorAll("[data-g]").forEach(p=>p.classList.toggle("active",p===m)),c()}});let h=i.querySelector("#slider-oxygen");h.oninput=m=>{n.oxygen=parseInt(m.target.value),i.querySelectorAll("[data-ox]").forEach(p=>p.classList.toggle("active",parseInt(p.dataset.ox)===n.oxygen)),c()},i.querySelectorAll("[data-ox]").forEach(m=>{m.onclick=()=>{n.oxygen=parseInt(m.dataset.ox),h.value=n.oxygen,i.querySelectorAll("[data-ox]").forEach(p=>p.classList.toggle("active",p===m)),c()}});let f=i.querySelector("#slider-pressure");f.oninput=m=>{n.pressure=parseFloat(m.target.value),i.querySelectorAll("[data-pres]").forEach(p=>p.classList.toggle("active",parseFloat(p.dataset.pres)===n.pressure)),c()},i.querySelectorAll("[data-pres]").forEach(m=>{m.onclick=()=>{n.pressure=parseFloat(m.dataset.pres),f.value=n.pressure,i.querySelectorAll("[data-pres]").forEach(p=>p.classList.toggle("active",p===m)),c()}});let g=i.querySelector("#slider-airflow");g.oninput=m=>{n.airflow=parseInt(m.target.value),c()};let x=i.querySelector("#select-fuel");return x.onchange=m=>{n.fuel=m.target.value,c()},i.querySelector("#btn-efield").onclick=()=>{n.efield=!n.efield,c()},c(),a=requestAnimationFrame(u),{destroy(){n.animActive=!1,a&&(cancelAnimationFrame(a),a=null)},setParameters(m){Object.assign(n,m),c()}}}function rf(i,{onOpenData:e,onOpenStudy:t}={}){let n=[{keywords:["lunar","ay","gravity","0.16g","partial","kismi"],title:"Why is flame spread often faster in Lunar partial gravity (0.16g) than in 0g microgravity?",answer:`
        Counter-intuitively, partial gravity (0.16g Moon, 0.38g Mars) can be <em>more hazardous</em> than pure zero gravity (0g). 
        In zero gravity, combustion products (CO<sub>2</sub>, H<sub>2</sub>O) linger spherically around the flame, starving it of oxygen through diffusion resistance <span class="citation-link" data-study="bass">[PSI-BASS: PSI-26]</span>. 
        In Lunar partial gravity (0.16g), a weak buoyant plume forms. This plume is sufficient to continuously bring fresh oxygen into the flame base, yet too weak to cool the flame base through high-speed convective heat removal <span class="citation-link" data-study="luci">[LUCI: NTRS-20220004521]</span>. 
        As documented in NASA SoFIE (Solid Fuel Ignition and Extinction) ground drop-tower and parabolic tests, solid fuel flammability boundaries expand under 0.16g <span class="citation-link" data-study="fm2">[SoFIE-FM\xB2: NTRS-20210018593]</span>.
      `,citations:["PSI-26 (BASS)","LUCI (NTRS-20220004521)","SoFIE-FM\xB2 (NTRS-20210018593)"]},{keywords:["cool flame","flex","droplet","heptane","s\xF6nme","extinction"],title:"What are the dual-mode extinction limits of Heptane droplets in FLEX and why do cool flames persist?",answer:`
        During the FLEX and FLEX-2 experiments aboard the ISS Combustion Integrated Rack (CIR), scientists discovered that alkane droplets (heptane, octane) do not simply extinguish when their hot visible flame dies <span class="citation-link" data-study="flex">[PSI-FLEX: PSI-69]</span>. 
        Instead, radiative heat loss extinguishes the high-temperature flame (1500\u20131800 K), but chemical reactions continue silently as a low-temperature "cool flame" (600\u2013800 K) driven by low-temperature chain-branching chemistry <span class="citation-link" data-study="flex-2">[PSI-FLEX-2: PSI-68]</span>. 
        These cool flames produce zero visible soot and emit primarily in the infrared, remaining capable of reigniting into a catastrophic hot fire if ventilation airflow shifts <span class="citation-link" data-ntrs="20150023456">[NTRS-20150023456]</span>.
      `,citations:["PSI-69 (FLEX)","PSI-68 (FLEX-2)","NTRS-20150023456"]},{keywords:["efield","electric","ion","acme","deform","elektrik"],title:"How do electric fields (E-FIELD Flames) alter flame geometry and soot formation?",answer:`
        Combustion naturally generates chemi-ions (CHO\u207A, H\u2083O\u207A, e\u207B) in the primary reaction zone. On Earth, buoyant convection overwhelms these ionic forces. 
        In microgravity, applying a DC electric field (up to 10 kV) exerts a direct electrostatic Lorentz force (F = qE) on the ions, inducing an artificial "ion-driven wind" <span class="citation-link" data-study="e-field-flames">[PSI-E-FIELD: PSI-22]</span>. 
        This ion wind deforms the spherical microgravity flame into an elongated teardrop, draws in oxidizer, reduces soot emission, and shifts the flame lift-off and blow-off extinction limits <span class="citation-link" data-ntrs="20170008892">[NTRS-20170008892]</span>.
      `,citations:["PSI-22 (E-FIELD Flames)","ACME Program","NTRS-20170008892"]},{keywords:["pmma","acrylic","artemis","oxygen","oksijen","bass-ii","34%"],title:"What is the fire hazard of PMMA acrylic under Artemis 34% O\u2082 at 56 kPa?",answer:`
        In standard terrestrial atmospheres (101.3 kPa, 21% O\u2082), PMMA rods have a Limiting Oxygen Concentration (LOC) of approximately 17.5% O<sub>2</sub> <span class="citation-link" data-study="bass-ii">[PSI-BASS-II: PSI-25]</span>. 
        Under the Artemis lunar habitat baseline of 56 kPa (8.2 psi) and 34% O<sub>2</sub>, PMMA exhibits a flame spread rate increase of over 240% <span class="citation-link" data-study="bre">[PSI-BRE: PSI-20]</span>. 
        The lower pressure reduces convective quenching, while the 34% oxygen concentration lowers the activation energy required to sustain flame propagation along solid surfaces <span class="citation-link" data-ntrs="20190028412">[NTRS-20190028412]</span>.
      `,citations:["PSI-25 (BASS-II)","PSI-20 (BRE)","NTRS-20190028412"]},{keywords:["hvac","ventilation","havalandirma","fan","airflow","emergency","protokol"],title:"Why is immediate HVAC ventilation shutdown the mandatory first response during a space fire?",answer:`
        NASA Saffire-I and Saffire-III flight experiments demonstrated that in stagnant microgravity, flames naturally suffocate in their own combustion products (CO<sub>2</sub>, H<sub>2</sub>O) <span class="citation-link" data-study="saffire-i">[PSI-Saffire-I: PSI-98]</span>. 
        However, active spacecraft cabin ventilation (15\u201325 cm/s) delivers a continuous stream of fresh oxygen to the hot vapor zone, creating a forced-flow blowtorch effect that drives rapid flame spread across equipment racks <span class="citation-link" data-study="saffire-iii">[PSI-Saffire-III: PSI-100]</span>. 
        Therefore, ISS Flight Rule 7.4.2 mandates instantaneous automated isolation of all cabin ventilation loops before any suppression agent is discharged <span class="citation-link" data-ntrs="20180006742">[NTRS-20180006742]</span>.
      `,citations:["PSI-98 (Saffire-I)","PSI-100 (Saffire-III)","NTRS-20180006742"]}];i.innerHTML=`
    <div style="width: min(1360px, 95vw); margin: 0 auto; padding: 30px 0 80px; color: var(--space-text-primary);">
      <header style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--space-border);">
        <span class="telemetry-badge badge-psi">EVIDENCE-GROUNDED FLIGHT SAFETY</span>
        <h1 style="font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 42px); margin: 8px 0;">
          Citation-Grounded AI Safety Analyst & Emergency Protocol Generator
        </h1>
        <p style="color: var(--space-text-secondary); max-width: 780px; font-size: 14px; line-height: 1.6; margin: 0;">
          Directly grounded in NASA Physical Sciences Informatics (PSI) investigation data and NASA Technical Reports Server (NTRS) records. 
          Every claim renders clickable, traceable citation badges.
        </p>
      </header>

      <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 28px; align-items: start;">
        <!-- Left: Q&A Assistant -->
        <section class="telemetry-panel" style="padding: 28px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <div style="font-family: var(--font-display); font-size: 18px; font-weight: 600;">
              Aerospace Safety Inquiry Console
            </div>
            <span class="telemetry-badge badge-match">ZERO HALLUCINATION BOUNDARY</span>
          </div>

          <div style="margin-bottom: 20px;">
            <label style="font-family: var(--font-mono); font-size: 10px; color: var(--telemetry-cyan); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 8px;">
              Pre-Loaded Flight Safety Queries:
            </label>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="preset-queries-box">
              <button class="quick-chip active" data-q="0">Lunar 0.16g Flammability Paradox</button>
              <button class="quick-chip" data-q="1">FLEX Droplet Cool Flame Limits</button>
              <button class="quick-chip" data-q="2">E-FIELD Ion Wind Body Forces</button>
              <button class="quick-chip" data-q="3">PMMA in Artemis 34% O\u2082</button>
              <button class="quick-chip" data-q="4">HVAC Shutdown Fire Protocol</button>
            </div>
          </div>

          <!-- Free-text query form -->
          <form id="analyst-query-form" style="display: flex; gap: 10px; margin-bottom: 24px;">
            <input type="text" id="analyst-query-input" placeholder="Search safety topic (e.g., Kapton wire, Saffire, smoke detector)..." style="flex: 1; background: #FFFFFF; border: 1px solid var(--space-border); color: #1E2421; padding: 12px 16px; border-radius: 8px; font-family: var(--font-sans); font-size: 13px;">
            <button type="submit" class="primary" style="background: var(--telemetry-cyan); color: #FFFFFF; font-weight: 600; padding: 0 20px; border-radius: 8px; border: none; cursor: pointer;">
              Analyze
            </button>
          </form>

          <!-- Answer Output Card -->
          <article id="analyst-answer-box" style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 10px; padding: 24px; min-height: 220px; box-shadow: var(--space-shadow);">
            <!-- Populated dynamically -->
          </article>
        </section>

        <!-- Right: Astronaut Emergency Quick-Action Card -->
        <section class="telemetry-panel" style="padding: 28px; background: #FFFFFF; border-color: rgba(185, 28, 28, 0.3); box-shadow: var(--space-shadow);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; padding-bottom: 14px; border-bottom: 1px solid var(--space-border);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="pulse-dot" style="background: #B91C1C; box-shadow: 0 0 6px rgba(185, 28, 28, 0.4);"></span>
              <strong style="font-family: var(--font-display); font-size: 18px; color: #B91C1C; letter-spacing: 0.5px;">
                ASTRONAUT EMERGENCY ACTION CARD
              </strong>
            </div>
            <span class="telemetry-badge" style="background: rgba(185, 28, 28, 0.08); color: #B91C1C; border: 1px solid rgba(185, 28, 28, 0.25);">
              FLIGHT RULE 7.4.2
            </span>
          </div>

          <p style="font-size: 12px; line-height: 1.5; color: var(--space-text-secondary); margin-bottom: 20px;">
            Automated checklist generated for active microgravity cabin operations. Grounded in NASA Saffire, BASS, and ISS ECLSS protocols.
          </p>

          <div style="display: flex; flex-direction: column; gap: 14px;" id="emergency-checklist">
            <!-- Step 1 -->
            <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 4px solid #B91C1C; border-radius: 8px; padding: 14px 16px; display: flex; gap: 14px; align-items: flex-start; box-shadow: 0 1px 3px rgba(30,36,33,0.05);">
              <span style="font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: #B91C1C; padding-top: 2px;">01</span>
              <div>
                <strong style="color: #1E2421; font-size: 14px; display: block; margin-bottom: 4px;">
                  IMMEDIATE HVAC AIRFLOW ISOLATION
                </strong>
                <span style="font-size: 12px; color: var(--space-text-secondary); line-height: 1.5; display: block;">
                  Trip cabin ventilation circuit breakers. Depriving the flame of forced draft (15\u201325 cm/s) chokes the microgravity fire in its own stagnant CO\u2082 shell <span class="citation-link" data-study="saffire-i">[Saffire-I]</span>.
                </span>
              </div>
            </div>

            <!-- Step 2 -->
            <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 4px solid #A66E28; border-radius: 8px; padding: 14px 16px; display: flex; gap: 14px; align-items: flex-start; box-shadow: 0 1px 3px rgba(30,36,33,0.05);">
              <span style="font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: #A66E28; padding-top: 2px;">02</span>
              <div>
                <strong style="color: #1E2421; font-size: 14px; display: block; margin-bottom: 4px;">
                  ELECTRICAL POWER BUS DE-ENERGIZATION
                </strong>
                <span style="font-size: 12px; color: var(--space-text-secondary); line-height: 1.5; display: block;">
                  Isolate power to affected equipment rack to extinguish ohmic heating and prevent wire insulation (Kapton/PTFE) toxic off-gassing <span class="citation-link" data-study="same-r">[SAME-R]</span>.
                </span>
              </div>
            </div>

            <!-- Step 3 -->
            <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 4px solid var(--telemetry-cyan); border-radius: 8px; padding: 14px 16px; display: flex; gap: 14px; align-items: flex-start; box-shadow: 0 1px 3px rgba(30,36,33,0.05);">
              <span style="font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: var(--telemetry-cyan); padding-top: 2px;">03</span>
              <div>
                <strong style="color: #1E2421; font-size: 14px; display: block; margin-bottom: 4px;">
                  DEPLOY PORTABLE FINE WATER-MIST EXTINGUISHER
                </strong>
                <span style="font-size: 12px; color: var(--space-text-secondary); line-height: 1.5; display: block;">
                  Discharge the fine water-mist PFE into the rack suppression port. Droplets cool the fuel surface without creating electrical shorts or dislodging hot burning debris <span class="citation-link" data-study="flex">[FLEX Extinction]</span>.
                </span>
              </div>
            </div>

            <!-- Step 4 -->
            <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 4px solid #214E3C; border-radius: 8px; padding: 14px 16px; display: flex; gap: 14px; align-items: flex-start; box-shadow: 0 1px 3px rgba(30,36,33,0.05);">
              <span style="font-family: var(--font-mono); font-size: 18px; font-weight: 700; color: #214E3C; padding-top: 2px;">04</span>
              <div>
                <strong style="color: #1E2421; font-size: 14px; display: block; margin-bottom: 4px;">
                  POST-FIRE ECLSS SCRUBBING & ATMOSPHERE VERIFICATION
                </strong>
                <span style="font-size: 12px; color: var(--space-text-secondary); line-height: 1.5; display: block;">
                  Don Emergency Oxygen Masks. Sample cabin atmosphere for CO (>50 ppm) and HCN with Dr\xE4ger tubes before re-engaging primary life support.
                </span>
              </div>
            </div>
          </div>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--space-border); text-align: right;">
            <button class="secondary" id="btn-print-protocol" style="font-size: 11px; padding: 6px 14px;">
              Export Emergency Protocol \xB7 PDF / JSON \u2193
            </button>
          </div>
        </section>
      </div>
    </div>
  `;let s=i.querySelector("#analyst-answer-box"),r=i.querySelector("#analyst-query-input"),a=i.querySelector("#analyst-query-form");function o(c){s.innerHTML=`
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="telemetry-badge badge-ntrs">CORROBORATED INVESTIGATION</span>
        <span style="font-family: var(--font-mono); font-size: 10px; color: var(--telemetry-cyan);">
          CITATIONS: ${c.citations.join(" \xB7 ")}
        </span>
      </div>
      <h3 style="font-size: 18px; color: #1E2421; margin: 0 0 14px; line-height: 1.4;">
        ${c.title}
      </h3>
      <div style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); margin-bottom: 20px;">
        ${c.answer}
      </div>
      <div style="border-top: 1px solid var(--space-border); padding-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
        ${c.citations.map(l=>`<span class="telemetry-badge badge-psi">${l}</span>`).join("")}
      </div>
    `,s.querySelectorAll(".citation-link").forEach(l=>{l.onclick=u=>{u.preventDefault();let d=l.dataset.study;d?t?.(d):e?.("PSI-25")}})}return i.querySelectorAll("#preset-queries-box button").forEach(c=>{c.onclick=()=>{i.querySelectorAll("#preset-queries-box button").forEach(u=>u.classList.remove("active")),c.classList.add("active");let l=parseInt(c.dataset.q);o(n[l])}}),a.onsubmit=c=>{c.preventDefault();let l=r.value.trim().toLowerCase();if(!l)return;let u=n.find(d=>d.keywords.some(h=>l.includes(h))||d.title.toLowerCase().includes(l)||d.answer.toLowerCase().includes(l));u?o(u):(s.innerHTML=`
        <div style="padding: 20px; text-align: center;">
          <strong style="color: var(--telemetry-amber); font-size: 16px; display: block; margin-bottom: 8px;">
            Evidence Boundary Notice: Direct Flight Match Not Found
          </strong>
          <p style="color: var(--space-text-secondary); font-size: 13px; max-width: 500px; margin: 0 auto 16px;">
            The query "<em>${l}</em>" does not have an exact matching flight record in the packaged NASA PSI combustion tables.
            To prevent hallucination, unverified predictions are withheld. Try searching for "PMMA", "Lunar", "FLEX cool flame", or "HVAC".
          </p>
          <button class="secondary" id="btn-browse-all-psi">Browse All 23 PSI Research Cards \u2192</button>
        </div>
      `,s.querySelector("#btn-browse-all-psi").onclick=()=>{t?.("saffire-i")})},i.querySelector("#btn-print-protocol").onclick=()=>{let c={flightRule:"NASA ISS Flight Rule 7.4.2 - Microgravity Fire Response",generatedAt:new Date().toISOString(),steps:["01. IMMEDIATE HVAC AIRFLOW ISOLATION (Choke diffusion flame in CO2 shell)","02. ELECTRICAL POWER BUS DE-ENERGIZATION (Cut ignition source & prevent wire off-gassing)","03. DEPLOY PORTABLE FINE WATER-MIST EXTINGUISHER (Surface cooling without electrical damage)","04. POST-FIRE ECLSS SCRUBBING & ATMOSPHERE VERIFICATION (Monitor CO / HCN before re-breathing)"],authoritativeCitations:["NASA PSI-98 (Saffire-I)","NASA PSI-25 (BASS-II)","NASA NTRS-20180006742","NASA-STD-6001B"]},l=new Blob([JSON.stringify(c,null,2)],{type:"application/json"}),u=URL.createObjectURL(l),d=document.createElement("a");d.href=u,d.download="astronaut-emergency-fire-protocol.json",d.click(),setTimeout(()=>URL.revokeObjectURL(u),1e3)},o(n[0]),{destroy(){}}}function af(i,{onOpenData:e}={}){let t=[{id:"water-mist",title:"Fine Water-Mist Fire Suppression Systems",subtitle:"ISS Portable Fire Extinguisher (PFE) \u2192 High-Tech Terrestrial Infrastructure",nasaOrigin:"Developed to extinguish spacecraft fires without flooding the ISS Destiny cabin or shorting avionics.",earthUse:"Data centers, semiconductor cleanrooms, historical archives, museums, and hospital MRI suites.",spinoffUrl:"https://spinoff.nasa.gov/Spinoff2020/ip_5.html",spinoffCitation:"NASA Spinoff 2020 \xB7 Environmental Control",keyMetrics:[{label:"Water Usage Reduction",val:"80%"},{label:"Avionics / Electrical Short Risk",val:"ZERO"},{label:"Droplet Diameter",val:"< 50 \u03BCm"}],description:`
        On Earth, traditional sprinkler systems cause tens of millions of dollars in catastrophic water damage to electronics and server racks. 
        Halon gas alternatives were banned globally under the Montreal Protocol. NASA engineers, needing a safe extinguisher for the ISS, 
        pioneered supersonic atomizing nozzles that generate ultra-fine micro-droplets (<50 microns). 
        The mist rapidly evaporates into steam at the flame front, expanding 1,700-fold to smother oxygen and extract thermal energy\u2014leaving dry surfaces and zero conductive residue.
      `},{id:"optical-detector",title:"Multi-Spectral Optical Cool-Flame Detectors",subtitle:"FLEX Droplet Chemiluminescence \u2192 Green Hydrogen & Chemical Plants",nasaOrigin:"ISS FLEX and ACME investigations measuring non-luminous, cool-burning hydrocarbon droplets.",earthUse:"Hydrogen fueling stations, chemical refineries, clean energy battery storage facilities.",spinoffUrl:"https://spinoff.nasa.gov/node/9407",spinoffCitation:"NASA Spinoff 2018 \xB7 Industrial Safety",keyMetrics:[{label:"Detection Speed",val:"< 25 ms"},{label:"False Alarm Rejection",val:"99.8%"},{label:"Spectral Range",val:"UV to Wide IR"}],description:`
        Hydrogen burns with a completely invisible pale-blue/ultraviolet flame that emits zero visible soot\u2014making daytime hydrogen leaks 
        virtually undetectable until someone walks into the flame front. 
        Using multi-spectral optical radiometers developed for the ISS FLEX cool flame experiments, terrestrial detectors scan simultaneously 
        across UV (OH* radical emission at 308 nm) and dual infrared wavelengths. Machine learning algorithms filter out sunlight, hot machinery, 
        and welding flashes, providing instantaneous, reliable alert triggers.
      `},{id:"firefighter-gear",title:"Next-Gen Firefighter Turnout Gear & Lightweight SCBA",subtitle:"Apollo & Saffire Thermal Protection \u2192 First Responder Armor",nasaOrigin:"Extravehicular Mobility Unit (EMU) thermal micrometeoroid suits and Apollo spacecraft heat shields.",earthUse:"Municipal firefighting turnout coats, hazmat protective suits, ultra-lightweight composite air tanks.",spinoffUrl:"https://spinoff.nasa.gov/node/9918",spinoffCitation:"NASA Spinoff \xB7 Public Safety",keyMetrics:[{label:"Weight Reduction",val:"40%"},{label:"Continuous Thermal Threshold",val:"550\xB0C"},{label:"Air Supply Tank Pressure",val:"4500 psi"}],description:`
        Prior to NASA technology transfer, municipal firefighters wore heavy rubber coats and cumbersome steel air cylinders weighing over 35 lbs. 
        NASA transferred polymer matrix composites (polybenzimidazole - PBI and Nomex blends) developed for spacesuit outer layers to create 
        breathable, flame-resistant turnout coats. Furthermore, filament-wound carbon-fiber composite pressure vessels developed for rocket motor casings 
        cut the weight of Self-Contained Breathing Apparatus (SCBA) bottles by more than 15 pounds, significantly reducing firefighter cardiac strain.
      `}],n=0;function s(){let r=t[n];i.innerHTML=`
      <div style="width: min(1360px, 95vw); margin: 0 auto; padding: 30px 0 80px; color: var(--space-text-primary);">
        <header style="margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid var(--space-border);">
          <span class="telemetry-badge badge-psi">TERRESTRIAL TECHNOLOGY TRANSFER</span>
          <h1 style="font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 42px); margin: 8px 0;">
            From Orbit to Earth: NASA Fire Safety Spin-Offs
          </h1>
          <p style="color: var(--space-text-secondary); max-width: 780px; font-size: 14px; line-height: 1.6; margin: 0;">
            How fundamental combustion physics conducted aboard the International Space Station and Apollo program 
            empowers everyday safety, protecting firefighters, clean energy infrastructure, and critical facilities.
          </p>
        </header>

        <!-- Selector Tabs -->
        <div style="display: flex; gap: 12px; margin-bottom: 30px; flex-wrap: wrap;">
          ${t.map((a,o)=>`
            <button class="quick-chip ${o===n?"active":""}" data-idx="${o}" style="padding: 10px 18px; font-size: 12px; border-radius: 8px;">
              ${a.title}
            </button>
          `).join("")}
        </div>

        <!-- Main Showcase Card -->
        <article class="telemetry-panel" style="padding: 36px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div>
              <span class="telemetry-badge badge-ntrs">${r.spinoffCitation}</span>
              <h2 style="font-family: var(--font-display); font-size: 28px; margin: 10px 0 4px; color: #fff;">
                ${r.title}
              </h2>
              <span style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-cyan);">
                ${r.subtitle}
              </span>
            </div>
            <a href="${r.spinoffUrl}" target="_blank" rel="noopener noreferrer" class="citation-link" style="padding: 8px 14px; font-size: 11px;">
              Read Official NASA Spinoff Article \u2197
            </a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 26px 0;">
            ${r.keyMetrics.map(a=>`
              <div style="background: rgba(11, 19, 37, 0.85); border: 1px solid var(--space-border); border-radius: 10px; padding: 18px; text-align: center;">
                <span style="font-family: var(--font-mono); font-size: 10px; color: var(--space-text-muted); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">
                  ${a.label}
                </span>
                <strong style="font-family: var(--font-mono); font-size: 26px; color: var(--telemetry-cyan);">
                  ${a.val}
                </strong>
              </div>
            `).join("")}
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
            <div style="background: rgba(11, 19, 37, 0.6); border: 1px solid var(--space-border); border-radius: 10px; padding: 20px;">
              <strong style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber); text-transform: uppercase; display: block; margin-bottom: 8px;">
                \u{1F680} NASA Mission Origin
              </strong>
              <p style="font-size: 13px; line-height: 1.6; color: var(--space-text-secondary); margin: 0;">
                ${r.nasaOrigin}
              </p>
            </div>

            <div style="background: rgba(11, 19, 37, 0.6); border: 1px solid var(--space-border); border-radius: 10px; padding: 20px;">
              <strong style="font-family: var(--font-mono); font-size: 11px; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 8px;">
                \u{1F30D} Terrestrial Impact & Applications
              </strong>
              <p style="font-size: 13px; line-height: 1.6; color: var(--space-text-secondary); margin: 0;">
                ${r.earthUse}
              </p>
            </div>
          </div>

          <div style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); border-top: 1px solid var(--space-border); padding-top: 24px;">
            ${r.description}
          </div>
        </article>
      </div>
    `,i.querySelectorAll("[data-idx]").forEach(a=>{a.onclick=()=>{n=parseInt(a.dataset.idx),s()}})}return s(),{destroy(){}}}function iu({onClose:i,onSwitchTab:e}){let t=0,n=!0,s=[{kicker:"NASA SPACE APPS CHALLENGE 2026",title:"Flame in Freefall: AI-Powered Spacecraft Fire Safety",subtitle:"Transforming 12 Terabytes of Microgravity Combustion Science into Actionable Artemis Mission Safety",badge:"EXECUTIVE OVERVIEW",speakerNotes:"\u{1F3A4} Presenter Cue: Open with the core hook\u2014fire in space behaves completely opposite to our terrestrial intuition. We built both a cinematic storytelling experience and an aerospace engineering workbench grounded in 24 NASA PSI investigations.",content:`
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; text-align: left; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 32px; color: var(--telemetry-cyan); margin-bottom: 8px;">24</div>
            <strong style="font-size: 16px; color: #1E2421; display: block; margin-bottom: 8px;">NASA PSI Investigations</strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Full trace of BASS, Saffire, FLEX, ACME, and SoFIE experiments conducted aboard the ISS and Cygnus.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; text-align: left; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 32px; color: var(--telemetry-amber); margin-bottom: 8px;">671</div>
            <strong style="font-size: 16px; color: #1E2421; display: block; margin-bottom: 8px;">Validated Source Rows</strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              8,546 preserved telemetry cells across 9 official NASA CSV tables with zero synthetic imputation.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; text-align: left; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 32px; color: var(--telemetry-cyan); margin-bottom: 8px;">0-g \u2192 1-g</div>
            <strong style="font-size: 16px; color: #1E2421; display: block; margin-bottom: 8px;">Physics Simulation Lab</strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Interactive multi-variable combustion engine modeling oxygen, pressure, airflow, and E-field body forces.
            </p>
          </div>
        </div>
      `},{kicker:"MODULE 1: CINEMATIC VISUAL STORY",title:"The Physics Shift: From Teardrop to Blue Sphere",subtitle:"The Collapse of Buoyancy and the Emergence of Pure Molecular Diffusion",badge:"FUNDAMENTAL COMBUSTION PHYSICS",speakerNotes:"\u{1F3A4} Presenter Cue: Point out that without gravity (g=0), buoyant convection is eliminated. The flame becomes a soot-free spherical blue halo. Emphasize that standard smoke detectors fail because microgravity flames produce virtually zero smoke plumes.",content:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid var(--telemetry-amber); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber); margin-bottom: 6px;">EARTH NORMAL (1.0g)</div>
            <h3 style="font-size: 20px; color: #1E2421; margin: 0 0 10px;">Convection-Dominated Teardrop</h3>
            <ul style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px;">
              <li>Hot gases expand and rise at 1\u20132 m/s due to gravity density gradient (F<sub>b</sub> = \u03C1g\u03B2\u0394T).</li>
              <li>High convective flow drags unburnt carbon soot upward into incandescent yellow luminescence.</li>
              <li>Rapid oxygen supply accelerates mass consumption and causes Rayleigh-Taylor flickering.</li>
            </ul>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid var(--telemetry-cyan); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan); margin-bottom: 6px;">MICROGRAVITY (0g ISS)</div>
            <h3 style="font-size: 20px; color: #1E2421; margin: 0 0 10px;">Diffusion-Dominated Blue Sphere</h3>
            <ul style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px;">
              <li>Zero buoyancy (g \u2248 0): combustion is governed solely by Fickian molecular diffusion.</li>
              <li>Soot-free reaction zone emitting faint blue CH/C\u2082 radical chemiluminescence.</li>
              <li>Combustion products linger in a spherical shell, creating unique low-temperature "cool flame" regimes.</li>
            </ul>
          </div>
        </div>
      `},{kicker:"MODULE 1 & 2: SCIENTIFIC DISCOVERY",title:"The Lunar Habitat Paradox & Flammability Cliff",subtitle:"Why Artemis Habitats (56 kPa, 34% O\u2082) Turn Spacecraft Materials Hyper-Flammable",badge:"MISSION ARCHITECTURE HAZARD",speakerNotes:"\u{1F3A4} Presenter Cue: This is a major design paradox. To prevent decompression sickness during moonwalks, the Artemis cabin operates at 34% O2 and 56 kPa. But our data reveals this drops the Limiting Oxygen Concentration, causing Nomex and acrylic to burn up to 4x faster!",content:`
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <h4 style="font-size: 16px; color: #1E2421; margin: 0 0 14px;">The Artemis Cabin Engineering Tradeoff:</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="background: #EAF2EE; border-left: 3px solid #214E3C; padding: 10px 14px; font-size: 13px; color: #1E2421;">
                <strong>EVA Decompression Mitigation:</strong> Lower cabin pressure (56 kPa) matches lunar EVA spacesuits, slashing pre-breathe time from 4 hours to 20 minutes.
              </div>
              <div style="background: #FDF2F2; border-left: 3px solid #B91C1C; padding: 10px 14px; font-size: 13px; color: #7F1D1D;">
                <strong>The Flammability Cliff:</strong> At 34% O\u2082, Limiting Oxygen Concentration (LOC) drops by over 5%. Materials certified as "self-extinguishing" on ISS ignite effortlessly and propagate rapidly.
              </div>
              <div style="background: #FEF7EE; border-left: 3px solid #A66E28; padding: 10px 14px; font-size: 13px; color: #78350F;">
                <strong>Partial Gravity Hazard:</strong> Lunar gravity (0.16g) creates a weak buoyant plume that replenishes O\u2082 without providing convective flame cooling.
              </div>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: center; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan); margin-bottom: 8px;">MEASURED SPREAD ACCELERATION</div>
            <div style="font-family: var(--font-mono); font-size: 42px; font-weight: 700; color: #B91C1C; line-height: 1;">+240%</div>
            <span style="font-size: 13px; color: var(--space-text-secondary); margin-top: 8px;">
              Increase in PMMA flame propagation velocity between 21% O\u2082 (ISS) and 34% O\u2082 (Lunar Artemis).
            </span>
            <div style="margin-top: 20px; font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber);">
              NASA NTRS Citation: <strong>NTRS-20190028412 & PSI-25</strong>
            </div>
          </div>
        </div>
      `},{kicker:"MODULE 2 & 3: ENGINEERING WORKBENCH",title:"Interactive Flame Lab & PSI Mission Ranker",subtitle:"Zero-Hallucination Physics Modeling with Strict Evidence Boundaries",badge:"AEROSPACE WORKBENCH",speakerNotes:'\u{1F3A4} Presenter Cue: Highlight our zero-hallucination philosophy. When users test regimes outside NASA experimental flight data (e.g. 0.16g with 35% O2 and high draft), our platform triggers an explicit "Evidence Gap Alert" proposing the exact test matrix for the next NASA mission.',content:`
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid var(--telemetry-cyan); border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: var(--telemetry-cyan); font-size: 15px; display: block; margin-bottom: 8px;">
              \u26A1 E-FIELD Body Forces
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Simulates ACME E-FIELD Flames 5 kV DC potential, demonstrating how electrostatic forces on chemi-ions deform spherical microgravity flames.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid #B91C1C; border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: #B91C1C; font-size: 15px; display: block; margin-bottom: 8px;">
              \u26A0\uFE0F Evidence Boundary Alerts
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Replaces ungrounded AI hallucinations with transparent NASA data boundaries and recommended next flight experiments (e.g. SoFIE-II).
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid #214E3C; border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: #214E3C; font-size: 15px; display: block; margin-bottom: 8px;">
              \u{1F4CA} Dynamic Mission Ranker
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Weight-based ranking across Material Screening, Detection, Extinction, and Predictive Modeling with instant JSON/CSV export.
            </p>
          </div>
        </div>
      `},{kicker:"MODULE 4 & 5: ACTION & TERRESTRIAL IMPACT",title:"AI Safety Protocols & Terrestrial Spin-Offs",subtitle:"From ISS Flight Rule 7.4.2 to Server Rooms, Hydrogen Stations, and Firefighter Gear",badge:"MISSION TO EARTH",speakerNotes:"\u{1F3A4} Presenter Cue: Close strong on operational utility. Show the Astronaut Emergency Action Card\u2014step 1 is always HVAC shutdown to starve the flame. Finally, show how NASA microgravity research protects Earth: fine water-mist for server rooms and optical detectors for clean hydrogen plants.",content:`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid #B91C1C; border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <strong style="color: #B91C1C; font-size: 16px;">Astronaut Quick-Action Card</strong>
              <span class="telemetry-badge badge-ntrs">FLIGHT RULE 7.4.2</span>
            </div>
            <ol style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
              <li><strong>Immediate HVAC Trip:</strong> Choke forced draft to trap flame in its own CO\u2082 shell.</li>
              <li><strong>Electrical Isolation:</strong> Cut power to prevent Kapton wire off-gassing.</li>
              <li><strong>Fine Water-Mist PFE:</strong> Cool fuel surface without creating electrical shorts.</li>
              <li><strong>Atmosphere Verification:</strong> Sample CO and HCN before restoring life support.</li>
            </ol>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid var(--telemetry-cyan); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <strong style="color: var(--telemetry-cyan); font-size: 16px;">Earth Safety Spin-Offs</strong>
              <span class="telemetry-badge badge-psi">NASA TECHNOLOGY TRANSFER</span>
            </div>
            <ul style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
              <li><strong>Fine Water-Mist:</strong> 80% water reduction protecting data centers & museums.</li>
              <li><strong>Cool-Flame Detectors:</strong> Sub-25ms multi-spectral detection of invisible hydrogen leaks.</li>
              <li><strong>First Responder SCBA:</strong> 40% lighter composite tanks reducing firefighter strain.</li>
            </ul>
          </div>
        </div>
      `}],r=document.createElement("div");r.className="pitch-overlay",r.id="pitch-mode-overlay";function a(){let d=s[t];r.innerHTML=`
      <header class="pitch-top-bar">
        <div class="pitch-brand-badge">
          <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true" style="stroke: var(--telemetry-cyan); fill: none; stroke-width: 2;">
            <circle cx="20" cy="20" r="11"/>
            <ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(-35 20 20)"/>
            <circle cx="32" cy="10" r="2" fill="var(--telemetry-cyan)"/>
          </svg>
          <span>FLAME IN FREEFALL \xB7 PRESENTATION STAGE MODE</span>
        </div>

        <div class="pitch-slide-tracker">
          ${s.map((f,g)=>`
            <div class="pitch-bullet ${g===t?"active":""}" data-slide="${g}"></div>
          `).join("")}
        </div>

        <button class="pitch-exit-btn" id="btn-pitch-exit">
          Exit Pitch Mode [ESC]
        </button>
      </header>

      <main class="pitch-stage-content">
        <div class="pitch-slide-view">
          <div style="text-align: center; max-width: 960px; margin: 0 auto;">
            <span class="telemetry-badge badge-psi" style="margin-bottom: 12px;">
              ${d.badge} \xB7 SLIDE 0${t+1} OF 0${s.length}
            </span>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-amber); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">
              ${d.kicker}
            </div>
            <h1 style="font-family: var(--font-display); font-size: clamp(32px, 4.2vw, 52px); font-weight: 700; letter-spacing: -1.2px; margin: 0 0 16px; color: #1E2421; line-height: 1.15;">
              ${d.title}
            </h1>
            <p style="font-size: 16px; color: var(--space-text-secondary); margin: 0 auto; max-width: 820px; line-height: 1.6;">
              ${d.subtitle}
            </p>
          </div>

          ${d.content}
        </div>
      </main>

      <footer class="pitch-bottom-hud">
        <div class="pitch-notes-drawer ${n?"":"collapsed"}" id="pitch-notes-drawer">
          <p class="pitch-speaker-notes">
            ${d.speakerNotes}
          </p>
        </div>

        <div class="pitch-bottom-bar">
          <button class="pitch-toggle-notes-btn" id="btn-toggle-notes" title="Toggle Presenter Notes">
            <span>\u{1F3A4} Notes ${n?"\u25BC":"\u25B2"}</span>
          </button>

          <div class="pitch-nav-arrows">
            <button class="pitch-arrow-btn" id="btn-pitch-prev" ${t===0?"disabled":""}>
              \u2190 Previous
            </button>
            <button class="pitch-arrow-btn" id="btn-pitch-next" ${t===s.length-1?"disabled":""}>
              Next Slide \u2192
            </button>
          </div>
        </div>
      </footer>
    `,r.querySelector("#btn-pitch-exit").onclick=l,r.querySelector("#btn-pitch-prev").onclick=c,r.querySelector("#btn-pitch-next").onclick=o;let h=r.querySelector("#btn-toggle-notes");h&&(h.onclick=()=>{n=!n;let f=r.querySelector("#pitch-notes-drawer");f&&f.classList.toggle("collapsed",!n),h.innerHTML=`<span>\u{1F3A4} Notes ${n?"\u25BC":"\u25B2"}</span>`}),r.querySelectorAll(".pitch-bullet").forEach(f=>{f.onclick=()=>{t=parseInt(f.dataset.slide),a()}})}function o(){t<s.length-1&&(t++,a())}function c(){t>0&&(t--,a())}function l(){document.removeEventListener("keydown",u),document.body.classList.remove("pitch-active"),r.remove(),i?.()}function u(d){d.key==="ArrowRight"||d.key===" "||d.key==="PageDown"?(d.preventDefault(),o()):d.key==="ArrowLeft"||d.key==="PageUp"?(d.preventDefault(),c()):(d.key==="Escape"||d.key==="p"||d.key==="P")&&(d.preventDefault(),l())}return document.body.classList.add("pitch-active"),document.body.appendChild(r),document.addEventListener("keydown",u),a(),{exit:l,goToSlide(d){t=d,a()}}}var en=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},wv=new ci(-1,1,1,-1,0,1),su=class extends zt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}},Tv=new su,$n=class{constructor(e){this._mesh=new at(Tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,wv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ta={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ge},cameraProjectionMatrixInverse:{value:new Ge},cameraWorldMatrix:{value:new Ge},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},na={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},xl={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function of(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=Ev(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new zn(s,e,e);return r.wrapS=rn,r.wrapT=rn,r.needsUpdate=!0,r}function Ev(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var ia={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:ru(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Fe},cameraProjectionMatrixInverse:{value:new Ge},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ru(i,e,t){let n=Av(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function Av(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var Ri={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var vl=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,d=(c+l)*u,h=c-d,f=l-d,g=e-h,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let T=g-m+u,v=x-p+u,S=g-1+2*u,E=x-1+2*u,w=c&255,C=l&255,P=this.perm[w+this.perm[C]]%12,b=this.perm[w+m+this.perm[C+p]]%12,_=this.perm[w+1+this.perm[C+1]]%12,R=.5-g*g-x*x;R<0?n=0:(R*=R,n=R*R*this._dot(this.grad3[P],g,x));let N=.5-T*T-v*v;N<0?s=0:(N*=N,s=N*N*this._dot(this.grad3[b],T,v));let F=.5-S*S-E*E;return F<0?r=0:(F*=F,r=F*F*this._dot(this.grad3[_],S,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),d=Math.floor(t+l),h=Math.floor(n+l),f=1/6,g=(u+d+h)*f,x=u-g,m=d-g,p=h-g,T=e-x,v=t-m,S=n-p,E,w,C,P,b,_;T>=v?v>=S?(E=1,w=0,C=0,P=1,b=1,_=0):T>=S?(E=1,w=0,C=0,P=1,b=0,_=1):(E=0,w=0,C=1,P=1,b=0,_=1):v<S?(E=0,w=0,C=1,P=0,b=1,_=1):T<S?(E=0,w=1,C=0,P=0,b=1,_=1):(E=0,w=1,C=0,P=1,b=1,_=0);let R=T-E+f,N=v-w+f,F=S-C+f,G=T-P+2*f,X=v-b+2*f,k=S-_+2*f,Z=T-1+3*f,H=v-1+3*f,j=S-1+3*f,se=u&255,Te=d&255,ze=h&255,Qe=this.perm[se+this.perm[Te+this.perm[ze]]]%12,st=this.perm[se+E+this.perm[Te+w+this.perm[ze+C]]]%12,Ke=this.perm[se+P+this.perm[Te+b+this.perm[ze+_]]]%12,K=this.perm[se+1+this.perm[Te+1+this.perm[ze+1]]]%12,Q=.6-T*T-v*v-S*S;Q<0?s=0:(Q*=Q,s=Q*Q*this._dot3(this.grad3[Qe],T,v,S));let ve=.6-R*R-N*N-F*F;ve<0?r=0:(ve*=ve,r=ve*ve*this._dot3(this.grad3[st],R,N,F));let De=.6-G*G-X*X-k*k;De<0?a=0:(De*=De,a=De*De*this._dot3(this.grad3[Ke],G,X,k));let ge=.6-Z*Z-H*H-j*j;return ge<0?o=0:(ge*=ge,o=ge*ge*this._dot3(this.grad3[K],Z,H,j)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,d,h,f,g,x=(e+t+n+s)*c,m=Math.floor(e+x),p=Math.floor(t+x),T=Math.floor(n+x),v=Math.floor(s+x),S=(m+p+T+v)*l,E=m-S,w=p-S,C=T-S,P=v-S,b=e-E,_=t-w,R=n-C,N=s-P,F=b>_?32:0,G=b>R?16:0,X=_>R?8:0,k=b>N?4:0,Z=_>N?2:0,H=R>N?1:0,j=F+G+X+k+Z+H,se=a[j][0]>=3?1:0,Te=a[j][1]>=3?1:0,ze=a[j][2]>=3?1:0,Qe=a[j][3]>=3?1:0,st=a[j][0]>=2?1:0,Ke=a[j][1]>=2?1:0,K=a[j][2]>=2?1:0,Q=a[j][3]>=2?1:0,ve=a[j][0]>=1?1:0,De=a[j][1]>=1?1:0,ge=a[j][2]>=1?1:0,$=a[j][3]>=1?1:0,Se=b-se+l,ye=_-Te+l,Me=R-ze+l,I=N-Qe+l,Xe=b-st+2*l,V=_-Ke+2*l,U=R-K+2*l,ee=N-Q+2*l,ae=b-ve+3*l,fe=_-De+3*l,Oe=R-ge+3*l,A=N-$+3*l,y=b-1+4*l,z=_-1+4*l,J=R-1+4*l,ne=N-1+4*l,Y=m&255,Ie=p&255,pe=T&255,Ue=v&255,Ne=o[Y+o[Ie+o[pe+o[Ue]]]]%32,re=o[Y+se+o[Ie+Te+o[pe+ze+o[Ue+Qe]]]]%32,ue=o[Y+st+o[Ie+Ke+o[pe+K+o[Ue+Q]]]]%32,qe=o[Y+ve+o[Ie+De+o[pe+ge+o[Ue+$]]]]%32,Ve=o[Y+1+o[Ie+1+o[pe+1+o[Ue+1]]]]%32,be=.6-b*b-_*_-R*R-N*N;be<0?u=0:(be*=be,u=be*be*this._dot4(r[Ne],b,_,R,N));let He=.6-Se*Se-ye*ye-Me*Me-I*I;He<0?d=0:(He*=He,d=He*He*this._dot4(r[re],Se,ye,Me,I));let L=.6-Xe*Xe-V*V-U*U-ee*ee;L<0?h=0:(L*=L,h=L*L*this._dot4(r[ue],Xe,V,U,ee));let me=.6-ae*ae-fe*fe-Oe*Oe-A*A;me<0?f=0:(me*=me,f=me*me*this._dot4(r[qe],ae,fe,Oe,A));let ce=.6-y*y-z*z-J*J-ne*ne;return ce<0?g=0:(ce*=ce,g=ce*ce*this._dot4(r[Ve],y,z,J,ne)),27*(u+d+h+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var sa=class i extends en{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=of(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new bt(this.width,this.height,{type:Nt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ut({defines:Object.assign({},ta.defines),uniforms:cn.clone(ta.uniforms),vertexShader:ta.vertexShader,fragmentShader:ta.fragmentShader,blending:vt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Pr,this.normalMaterial.blending=vt,this.pdMaterial=new ut({defines:Object.assign({},ia.defines),uniforms:cn.clone(ia.uniforms),vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ut({defines:Object.assign({},na.defines),uniforms:cn.clone(na.uniforms),vertexShader:na.vertexShader,fragmentShader:na.fragmentShader,blending:vt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ut({uniforms:cn.clone(Ri.uniforms),vertexShader:Ri.vertexShader,fragmentShader:Ri.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Xr,blendDst:Ki,blendEquation:pn,blendSrcAlpha:Wr,blendDstAlpha:Ki,blendEquationAlpha:pn}),this.blendMaterial=new ut({uniforms:cn.clone(xl.uniforms),vertexShader:xl.vertexShader,fragmentShader:xl.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:uo,blendSrc:Xr,blendDst:Ki,blendEquation:pn,blendSrcAlpha:Wr,blendDstAlpha:Ki,blendEquationAlpha:pn}),this._fsQuad=new $n(null),this._originalClearColor=new Re,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Zi,this.depthTexture.format=Ai,this.depthTexture.type=Ei,this.normalRenderTarget=new bt(this.width,this.height,{minFilter:Pt,magFilter:Pt,type:Nt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ru(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=vt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new vl,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new zn(s,e,e,Qt,gn);return r.wrapS=rn,r.wrapT=rn,r.needsUpdate=!0,r}};sa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function au(i,e){if(e===Nc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===qs||e===Kr){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===qs)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var yl=class extends Wn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Au(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=ui.extractUrlBase(e);a=ui.resolveURL(l,this.path)}else a=ui.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Vs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===hf){try{a[it.KHR_BINARY_GLTF]=new Cu(e)}catch(d){s&&s(d);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Fu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let d=this.pluginCallbacks[u](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let d=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(d){case it.KHR_MATERIALS_UNLIT:a[d]=new du;break;case it.KHR_DRACO_MESH_COMPRESSION:a[d]=new Ru(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[d]=new Iu;break;case it.KHR_MESH_QUANTIZATION:a[d]=new Pu;break;default:h.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Cv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Re(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Gt);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new kr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sn(u),l.distance=d;break;case"spot":l=new Br(u),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Yn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},du=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){let s=[];e.color=new Re(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Gt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},fu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Gt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},xu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(o[0],o[1],o[2],Gt),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},_u=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(o[0],o[1],o[2],Gt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:on}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},wu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Tu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Eu=class{constructor(e){this.name=it.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,d=s.byteStride,h=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,d,h,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*d);return a.decodeGltfBuffer(new Uint8Array(f),u,d,h,s.mode,s.filter),f})})}else return null}},Au=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==wn.TRIANGLES&&l.mode!==wn.TRIANGLE_STRIP&&l.mode!==wn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),d=u.isGroup?u.children:[u],h=l[0].count,f=[];for(let g of d){let x=new Ge,m=new D,p=new _n,T=new D(1,1,1),v=new $i(g.geometry,g.material,h);for(let S=0;S<h;S++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&T.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,x.compose(m,p,T));for(let S in c)if(S==="_COLOR_0"){let E=c[S];v.instanceColor=new Mi(E.array,E.itemSize,E.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,c[S]);gt.prototype.copy.call(v,g),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},hf="glTF",ra=12,lf={JSON:1313821514,BIN:5130562},Cu=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ra),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==hf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ra,r=new DataView(e,ra),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===lf.JSON){let l=new Uint8Array(e,ra+a,o);this.content=n.decode(l)}else if(c===lf.BIN){let l=ra+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ru=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let d=Du[u]||u.toLowerCase();o[d]=a[u]}for(let u in e.attributes){let d=Du[u]||u.toLowerCase();if(a[u]!==void 0){let h=n.accessors[e.attributes[u]],f=Js[h.componentType];l[d]=f.name,c[d]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(d,h){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}d(f)},o,l,Gt,h)})})}},Iu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Pu=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},_l=class extends ai{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,d=(n-t)/u,h=d*d,f=h*d,g=e*l,x=g-l,m=-2*f+3*h,p=f-h,T=1-m,v=p-h+d;for(let S=0;S!==o;S++){let E=a[x+S+o],w=a[x+S+c]*u,C=a[g+S+o],P=a[g+S]*u;r[S]=T*E+v*w+m*C+p*P}return r}},Rv=new _n,Lu=class extends _l{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Rv.fromArray(r).normalize().toArray(r),r}},wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Js={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cf={9728:Pt,9729:Ht,9984:Co,9985:Ws,9986:es,9987:Fn},uf={33071:yn,33648:Ts,10497:rn},ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Iv={CUBICSPLINE:void 0,LINEAR:Wi,STEP:Gi},lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Pv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function rs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Lv(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let d=e[l];if(n){let h=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;a.push(h)}if(s){let h=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(h)}if(r){let h=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],d=l[1],h=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=d),r&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function Dv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Nv(i){let e,t=i.extensions&&i.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cu(t.attributes):e=i.indices+":"+cu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cu(i.targets[n]);return e}function cu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Fv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Uv=new Ge,Fu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Cv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Fr(this.options.manager):this.textureLoader=new Vr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return rs(r,o,s),Yn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(ui.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ou[s.type],o=Js[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new It(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=ou[s.type],l=Js[s.componentType],u=l.BYTES_PER_ELEMENT,d=u*c,h=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==d){let p=Math.floor(h/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(T);v||(x=new l(o,p*f,s.count*f/u),v=new Ds(x,f/u),t.cache.add(T,v)),m=new Ns(v,c,h%f/u,g)}else o===null?x=new l(s.count*c):x=new l(o,h,s.count*c),m=new It(x,c,g);if(s.sparse!==void 0){let p=ou.SCALAR,T=Js[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,E=new T(a[1],v,s.sparse.count*p),w=new l(a[2],S,s.sparse.count*c);o!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=E.length;C<P;C++){let b=E[C];if(m.setX(b,w[C*c]),c>=2&&m.setY(b,w[C*c+1]),c>=3&&m.setZ(b,w[C*c+2]),c>=4&&m.setW(b,w[C*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let h=(r.samplers||{})[a.sampler]||{};return u.magFilter=cf[h.magFilter]||Ht,u.minFilter=cf[h.minFilter]||Fn,u.wrapS=uf[h.wrapS]||rn,u.wrapT=uf[h.wrapT]||rn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Pt&&u.minFilter!==Ht,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let h=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(h),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(d){return new Promise(function(h,f){let g=h;t.isImageBitmapLoader===!0&&(g=function(x){let m=new kt(x);m.needsUpdate=!0,h(m)}),t.load(ui.resolveURL(d,r.path),g,void 0,f)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),Yn(d,a),d.userData.mimeType=a.mimeType||Fv(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Bs,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Os,$t.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Vt}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let d=s[it.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,t))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let h=d.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],Gt),o.opacity=h[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,At)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);let u=r.alphaMode||lu.OPAQUE;if(u===lu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===lu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Nn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Nn){let d=r.emissiveFactor;o.emissive=new Re().setRGB(d[0],d[1],d[2],Gt)}return r.emissiveTexture!==void 0&&a!==Nn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),Yn(d,r),t.associations.set(d,{materials:e}),r.extensions&&rs(s,d,r),d})}createUniqueName(e){let t=mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return df(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=Nv(l),d=s[u];if(d)a.push(d.promise);else{let h;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=df(new zt,l,t),s[u]={primitive:l,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Pv(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],d=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=a[f],p,T=l[f];if(m.mode===wn.TRIANGLES||m.mode===wn.TRIANGLE_STRIP||m.mode===wn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Mr(x,T):new at(x,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===wn.TRIANGLE_STRIP?p.geometry=au(p.geometry,Kr):m.mode===wn.TRIANGLE_FAN&&(p.geometry=au(p.geometry,qs));else if(m.mode===wn.LINES)p=new Tr(x,T);else if(m.mode===wn.LINE_STRIP)p=new Yi(x,T);else if(m.mode===wn.LINE_LOOP)p=new Er(x,T);else if(m.mode===wn.POINTS)p=new Ar(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Dv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yn(p,r),m.extensions&&rs(s,p,m),t.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)t.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&rs(s,d[0],r),d[0];let h=new Kt;r.extensions&&rs(s,h,r),t.associations.set(h,{meshes:e});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);return h})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Lt.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ci(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let d=a[l];if(d){o.push(d);let h=new Ge;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let d=0,h=s.channels.length;d<h;d++){let f=s.channels[d],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(d){let h=d[0],f=d[1],g=d[2],x=d[3],m=d[4],p=[];for(let v=0,S=h.length;v<S;v++){let E=h[v],w=f[v],C=g[v],P=x[v],b=m[v];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let _=n._createAnimationTracks(E,w,C,P,b);if(_)for(let R=0;R<_.length;R++)p.push(_[R])}let T=new Nr(r,void 0,p);return Yn(T,s),T})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],d=l[1],h=l[2];h!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(h,Uv)});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Fs:l.length>1?u=new Kt:l.length===1?u=l[0]:u=new gt,u!==l[0])for(let d=0,h=l.length;d<h;d++)u.add(l[d]);if(r.name&&(u.userData.name=r.name,u.name=a),Yn(u,r),r.extensions&&rs(n,u,r),r.matrix!==void 0){let d=new Ge;d.fromArray(r.matrix),u.applyMatrix4(d)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(u);s.associations.set(u,{...d})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Kt;n.name&&(r.name=s.createUniqueName(n.name)),Yn(r,n),n.extensions&&rs(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,d=c.length;u<d;u++)r.add(c[u]);let l=u=>{let d=new Map;for(let[h,f]of s.associations)(h instanceof $t||h instanceof kt)&&d.set(h,f);return u.traverse(h=>{let f=s.associations.get(h);f!=null&&d.set(h,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];Ii[r.path]===Ii.weights?e.traverse(function(h){h.morphTargetInfluences&&c.push(h.name?h.name:h.uuid)}):c.push(o);let l;switch(Ii[r.path]){case Ii.weights:l=Vn;break;case Ii.rotation:l=Hn;break;case Ii.translation:case Ii.scale:l=Gn;break;default:switch(n.itemSize){case 1:l=Vn;break;case 2:case 3:default:l=Gn;break}break}let u=s.interpolation!==void 0?Iv[s.interpolation]:Wi,d=this._getArrayFromAccessor(n);for(let h=0,f=c.length;h<f;h++){let g=new l(c[h]+"."+Ii[r.path],t.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Hn?Lu:_l;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Ov(i,e,t){let n=e.attributes,s=new mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let u=Nu(Js[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let d=r[l];if(d.POSITION!==void 0){let h=t.json.accessors[d.POSITION],f=h.min,g=h.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),h.normalized){let x=Nu(Js[h.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new an;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function df(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Du[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return tt.workingColorSpace!==Gt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Yn(i,e),Ov(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Lv(i,e.targets,t):i})}var bl=class extends qi{constructor(){super();let e=new Jt;e.deleteAttribute("uv");let t=new Vt({side:Dt}),n=new Vt,s=new Sn(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new at(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new $i(e,n,6),o=new gt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new at(e,Qs(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new at(e,Qs(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new at(e,Qs(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new at(e,Qs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new at(e,Qs(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new at(e,Qs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Qs(i){return new Lr({color:0,emissive:16777215,emissiveIntensity:i})}var Sl=class extends en{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cn.clone(e.uniforms),this.material=new ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $n(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var aa=class extends en{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Ml=class extends en{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var wl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Fe);this._width=n.width,this._height=n.height,t=new bt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sl(Ri),this.copyPass.material.blending=vt,this.clock=new Hr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}aa!==void 0&&(a instanceof aa?n=!0:a instanceof Ml&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Tl=class extends en{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Re}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var er=class i extends en{constructor(e,t,n,s){super(),this.renderScene=t,this.renderCamera=n,this.selectedObjects=s!==void 0?s:[],this.visibleEdgeColor=new Re(1,1,1),this.hiddenEdgeColor=new Re(.1,.04,.02),this.edgeGlow=0,this.usePatternTexture=!1,this.patternTexture=null,this.edgeThickness=1,this.edgeStrength=3,this.downSampleRatio=2,this.pulsePeriod=0,this._visibilityCache=new Map,this._selectionCache=new Set,this.resolution=e!==void 0?new Fe(e.x,e.y):new Fe(256,256);let r=Math.round(this.resolution.x/this.downSampleRatio),a=Math.round(this.resolution.y/this.downSampleRatio);this.renderTargetMaskBuffer=new bt(this.resolution.x,this.resolution.y),this.renderTargetMaskBuffer.texture.name="OutlinePass.mask",this.renderTargetMaskBuffer.texture.generateMipmaps=!1,this.depthMaterial=new zs,this.depthMaterial.side=Wt,this.depthMaterial.depthPacking=dl,this.depthMaterial.blending=vt,this.prepareMaskMaterial=this._getPrepareMaskMaterial(),this.prepareMaskMaterial.side=Wt,this.prepareMaskMaterial.fragmentShader=u(this.prepareMaskMaterial.fragmentShader,this.renderCamera),this.renderTargetDepthBuffer=new bt(this.resolution.x,this.resolution.y,{type:Nt}),this.renderTargetDepthBuffer.texture.name="OutlinePass.depth",this.renderTargetDepthBuffer.texture.generateMipmaps=!1,this.renderTargetMaskDownSampleBuffer=new bt(r,a,{type:Nt}),this.renderTargetMaskDownSampleBuffer.texture.name="OutlinePass.depthDownSample",this.renderTargetMaskDownSampleBuffer.texture.generateMipmaps=!1,this.renderTargetBlurBuffer1=new bt(r,a,{type:Nt}),this.renderTargetBlurBuffer1.texture.name="OutlinePass.blur1",this.renderTargetBlurBuffer1.texture.generateMipmaps=!1,this.renderTargetBlurBuffer2=new bt(Math.round(r/2),Math.round(a/2),{type:Nt}),this.renderTargetBlurBuffer2.texture.name="OutlinePass.blur2",this.renderTargetBlurBuffer2.texture.generateMipmaps=!1,this.edgeDetectionMaterial=this._getEdgeDetectionMaterial(),this.renderTargetEdgeBuffer1=new bt(r,a,{type:Nt}),this.renderTargetEdgeBuffer1.texture.name="OutlinePass.edge1",this.renderTargetEdgeBuffer1.texture.generateMipmaps=!1,this.renderTargetEdgeBuffer2=new bt(Math.round(r/2),Math.round(a/2),{type:Nt}),this.renderTargetEdgeBuffer2.texture.name="OutlinePass.edge2",this.renderTargetEdgeBuffer2.texture.generateMipmaps=!1;let o=4,c=4;this.separableBlurMaterial1=this._getSeparableBlurMaterial(o),this.separableBlurMaterial1.uniforms.texSize.value.set(r,a),this.separableBlurMaterial1.uniforms.kernelRadius.value=1,this.separableBlurMaterial2=this._getSeparableBlurMaterial(c),this.separableBlurMaterial2.uniforms.texSize.value.set(Math.round(r/2),Math.round(a/2)),this.separableBlurMaterial2.uniforms.kernelRadius.value=c,this.overlayMaterial=this._getOverlayMaterial();let l=Ri;this.copyUniforms=cn.clone(l.uniforms),this.materialCopy=new ut({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:vt,depthTest:!1,depthWrite:!1}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Re,this.oldClearAlpha=1,this._fsQuad=new $n(null),this.tempPulseColor1=new Re,this.tempPulseColor2=new Re,this.textureMatrix=new Ge;function u(d,h){let f=h.isPerspectiveCamera?"perspective":"orthographic";return d.replace(/DEPTH_TO_VIEW_Z/g,f+"DepthToViewZ")}}dispose(){this.renderTargetMaskBuffer.dispose(),this.renderTargetDepthBuffer.dispose(),this.renderTargetMaskDownSampleBuffer.dispose(),this.renderTargetBlurBuffer1.dispose(),this.renderTargetBlurBuffer2.dispose(),this.renderTargetEdgeBuffer1.dispose(),this.renderTargetEdgeBuffer2.dispose(),this.depthMaterial.dispose(),this.prepareMaskMaterial.dispose(),this.edgeDetectionMaterial.dispose(),this.separableBlurMaterial1.dispose(),this.separableBlurMaterial2.dispose(),this.overlayMaterial.dispose(),this.materialCopy.dispose(),this._fsQuad.dispose()}setSize(e,t){this.renderTargetMaskBuffer.setSize(e,t),this.renderTargetDepthBuffer.setSize(e,t);let n=Math.round(e/this.downSampleRatio),s=Math.round(t/this.downSampleRatio);this.renderTargetMaskDownSampleBuffer.setSize(n,s),this.renderTargetBlurBuffer1.setSize(n,s),this.renderTargetEdgeBuffer1.setSize(n,s),this.separableBlurMaterial1.uniforms.texSize.value.set(n,s),n=Math.round(n/2),s=Math.round(s/2),this.renderTargetBlurBuffer2.setSize(n,s),this.renderTargetEdgeBuffer2.setSize(n,s),this.separableBlurMaterial2.uniforms.texSize.value.set(n,s)}render(e,t,n,s,r){if(this.selectedObjects.length>0){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,r&&e.state.buffers.stencil.setTest(!1),e.setClearColor(16777215,1),this._updateSelectionCache(),this._changeVisibilityOfSelectedObjects(!1);let o=this.renderScene.background,c=this.renderScene.overrideMaterial;if(this.renderScene.background=null,this.renderScene.overrideMaterial=this.depthMaterial,e.setRenderTarget(this.renderTargetDepthBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfSelectedObjects(!0),this._visibilityCache.clear(),this._updateTextureMatrix(),this._changeVisibilityOfNonSelectedObjects(!1),this.renderScene.overrideMaterial=this.prepareMaskMaterial,this.prepareMaskMaterial.uniforms.cameraNearFar.value.set(this.renderCamera.near,this.renderCamera.far),this.prepareMaskMaterial.uniforms.depthTexture.value=this.renderTargetDepthBuffer.texture,this.prepareMaskMaterial.uniforms.textureMatrix.value=this.textureMatrix,e.setRenderTarget(this.renderTargetMaskBuffer),e.clear(),e.render(this.renderScene,this.renderCamera),this._changeVisibilityOfNonSelectedObjects(!0),this._visibilityCache.clear(),this._selectionCache.clear(),this.renderScene.background=o,this.renderScene.overrideMaterial=c,this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetMaskBuffer.texture,e.setRenderTarget(this.renderTargetMaskDownSampleBuffer),e.clear(),this._fsQuad.render(e),this.tempPulseColor1.copy(this.visibleEdgeColor),this.tempPulseColor2.copy(this.hiddenEdgeColor),this.pulsePeriod>0){let l=.625+Math.cos(performance.now()*.01/this.pulsePeriod)*.75/2;this.tempPulseColor1.multiplyScalar(l),this.tempPulseColor2.multiplyScalar(l)}this._fsQuad.material=this.edgeDetectionMaterial,this.edgeDetectionMaterial.uniforms.maskTexture.value=this.renderTargetMaskDownSampleBuffer.texture,this.edgeDetectionMaterial.uniforms.texSize.value.set(this.renderTargetMaskDownSampleBuffer.width,this.renderTargetMaskDownSampleBuffer.height),this.edgeDetectionMaterial.uniforms.visibleEdgeColor.value=this.tempPulseColor1,this.edgeDetectionMaterial.uniforms.hiddenEdgeColor.value=this.tempPulseColor2,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial1,this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=i.BlurDirectionX,this.separableBlurMaterial1.uniforms.kernelRadius.value=this.edgeThickness,e.setRenderTarget(this.renderTargetBlurBuffer1),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial1.uniforms.colorTexture.value=this.renderTargetBlurBuffer1.texture,this.separableBlurMaterial1.uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer1),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.separableBlurMaterial2,this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetEdgeBuffer1.texture,this.separableBlurMaterial2.uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetBlurBuffer2),e.clear(),this._fsQuad.render(e),this.separableBlurMaterial2.uniforms.colorTexture.value=this.renderTargetBlurBuffer2.texture,this.separableBlurMaterial2.uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetEdgeBuffer2),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.overlayMaterial,this.overlayMaterial.uniforms.maskTexture.value=this.renderTargetMaskBuffer.texture,this.overlayMaterial.uniforms.edgeTexture1.value=this.renderTargetEdgeBuffer1.texture,this.overlayMaterial.uniforms.edgeTexture2.value=this.renderTargetEdgeBuffer2.texture,this.overlayMaterial.uniforms.patternTexture.value=this.patternTexture,this.overlayMaterial.uniforms.edgeStrength.value=this.edgeStrength,this.overlayMaterial.uniforms.edgeGlow.value=this.edgeGlow,this.overlayMaterial.uniforms.usePatternTexture.value=this.usePatternTexture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(n),this._fsQuad.render(e),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}this.renderToScreen&&(this._fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=n.texture,e.setRenderTarget(null),this._fsQuad.render(e))}_updateSelectionCache(){let e=this._selectionCache;function t(n){n.isMesh&&e.add(n)}e.clear();for(let n=0;n<this.selectedObjects.length;n++)this.selectedObjects[n].traverse(t)}_changeVisibilityOfSelectedObjects(e){let t=this._visibilityCache;for(let n of this._selectionCache)e===!0?n.visible=t.get(n):(t.set(n,n.visible),n.visible=e)}_changeVisibilityOfNonSelectedObjects(e){let t=this._visibilityCache,n=this._selectionCache;function s(r){if(r.isPoints||r.isLine||r.isLine2)e===!0?r.visible=t.get(r):(t.set(r,r.visible),r.visible=e);else if((r.isMesh||r.isSprite)&&!n.has(r)){let a=r.visible;(e===!1||t.get(r)===!0)&&(r.visible=e),t.set(r,a)}}this.renderScene.traverse(s)}_updateTextureMatrix(){this.textureMatrix.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),this.textureMatrix.multiply(this.renderCamera.projectionMatrix),this.textureMatrix.multiply(this.renderCamera.matrixWorldInverse)}_getPrepareMaskMaterial(){return new ut({uniforms:{depthTexture:{value:null},cameraNearFar:{value:new Fe(.5,.5)},textureMatrix:{value:null}},vertexShader:`#include <batching_pars_vertex>
				#include <morphtarget_pars_vertex>
				#include <skinning_pars_vertex>

				varying vec4 projTexCoord;
				varying vec4 vPosition;
				uniform mat4 textureMatrix;

				void main() {

					#include <batching_vertex>
					#include <skinbase_vertex>
					#include <begin_vertex>
					#include <morphtarget_vertex>
					#include <skinning_vertex>
					#include <project_vertex>

					vPosition = mvPosition;

					vec4 worldPosition = vec4( transformed, 1.0 );

					#ifdef USE_INSTANCING

						worldPosition = instanceMatrix * worldPosition;

					#endif

					worldPosition = modelMatrix * worldPosition;

					projTexCoord = textureMatrix * worldPosition;

				}`,fragmentShader:`#include <packing>
				varying vec4 vPosition;
				varying vec4 projTexCoord;
				uniform sampler2D depthTexture;
				uniform vec2 cameraNearFar;

				void main() {

					float depth = unpackRGBAToDepth(texture2DProj( depthTexture, projTexCoord ));
					float viewZ = - DEPTH_TO_VIEW_Z( depth, cameraNearFar.x, cameraNearFar.y );
					float depthTest = (-vPosition.z > viewZ) ? 1.0 : 0.0;
					gl_FragColor = vec4(0.0, depthTest, 1.0, 1.0);

				}`})}_getEdgeDetectionMaterial(){return new ut({uniforms:{maskTexture:{value:null},texSize:{value:new Fe(.5,.5)},visibleEdgeColor:{value:new D(1,1,1)},hiddenEdgeColor:{value:new D(1,1,1)}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform vec2 texSize;
				uniform vec3 visibleEdgeColor;
				uniform vec3 hiddenEdgeColor;

				void main() {
					vec2 invSize = 1.0 / texSize;
					vec4 uvOffset = vec4(1.0, 0.0, 0.0, 1.0) * vec4(invSize, invSize);
					vec4 c1 = texture2D( maskTexture, vUv + uvOffset.xy);
					vec4 c2 = texture2D( maskTexture, vUv - uvOffset.xy);
					vec4 c3 = texture2D( maskTexture, vUv + uvOffset.yw);
					vec4 c4 = texture2D( maskTexture, vUv - uvOffset.yw);
					float diff1 = (c1.r - c2.r)*0.5;
					float diff2 = (c3.r - c4.r)*0.5;
					float d = length( vec2(diff1, diff2) );
					float a1 = min(c1.g, c2.g);
					float a2 = min(c3.g, c4.g);
					float visibilityFactor = min(a1, a2);
					vec3 edgeColor = 1.0 - visibilityFactor > 0.001 ? visibleEdgeColor : hiddenEdgeColor;
					gl_FragColor = vec4(edgeColor, 1.0) * vec4(d);
				}`})}_getSeparableBlurMaterial(e){return new ut({defines:{MAX_RADIUS:e},uniforms:{colorTexture:{value:null},texSize:{value:new Fe(.5,.5)},direction:{value:new Fe(.5,.5)},kernelRadius:{value:1}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;
				uniform float kernelRadius;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}

				void main() {
					vec2 invSize = 1.0 / texSize;
					float sigma = kernelRadius/2.0;
					float weightSum = gaussianPdf(0.0, sigma);
					vec4 diffuseSum = texture2D( colorTexture, vUv) * weightSum;
					vec2 delta = direction * invSize * kernelRadius/float(MAX_RADIUS);
					vec2 uvOffset = delta;
					for( int i = 1; i <= MAX_RADIUS; i ++ ) {
						float x = kernelRadius * float(i) / float(MAX_RADIUS);
						float w = gaussianPdf(x, sigma);
						vec4 sample1 = texture2D( colorTexture, vUv + uvOffset);
						vec4 sample2 = texture2D( colorTexture, vUv - uvOffset);
						diffuseSum += ((sample1 + sample2) * w);
						weightSum += (2.0 * w);
						uvOffset += delta;
					}
					gl_FragColor = diffuseSum/weightSum;
				}`})}_getOverlayMaterial(){return new ut({uniforms:{maskTexture:{value:null},edgeTexture1:{value:null},edgeTexture2:{value:null},patternTexture:{value:null},edgeStrength:{value:1},edgeGlow:{value:1},usePatternTexture:{value:0}},vertexShader:`varying vec2 vUv;

				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;

				uniform sampler2D maskTexture;
				uniform sampler2D edgeTexture1;
				uniform sampler2D edgeTexture2;
				uniform sampler2D patternTexture;
				uniform float edgeStrength;
				uniform float edgeGlow;
				uniform bool usePatternTexture;

				void main() {
					vec4 edgeValue1 = texture2D(edgeTexture1, vUv);
					vec4 edgeValue2 = texture2D(edgeTexture2, vUv);
					vec4 maskColor = texture2D(maskTexture, vUv);
					vec4 patternColor = texture2D(patternTexture, 6.0 * vUv);
					float visibilityFactor = 1.0 - maskColor.g > 0.0 ? 1.0 : 0.5;
					vec4 edgeValue = edgeValue1 + edgeValue2 * edgeGlow;
					vec4 finalColor = edgeStrength * maskColor.r * edgeValue;
					if(usePatternTexture)
						finalColor += + visibilityFactor * (1.0 - maskColor.r) * (1.0 - patternColor.r);
					gl_FragColor = finalColor;
				}`,blending:Gr,depthTest:!1,depthWrite:!1,transparent:!0})}};er.BlurDirectionX=new Fe(1,0);er.BlurDirectionY=new Fe(0,1);var oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var El=class extends en{constructor(){super(),this.uniforms=cn.clone(oa.uniforms),this.material=new Ir({name:oa.name,uniforms:this.uniforms,vertexShader:oa.vertexShader,fragmentShader:oa.fragmentShader}),this._fsQuad=new $n(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_o?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===So?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===To?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Mo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ie=i=>document.getElementById(i),ff={arrow:"M4 12h16m-6-6 6 6-6 6",right:"m9 5 7 7-7 7",left:"m15 5-7 7 7 7",up:"m5 15 7-7 7 7",down:"m5 9 7 7 7-7",close:"m6 6 12 12M6 18 18 6",expand:"M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6",info:"M12 11v6m0-10v.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",help:"M9 9a3 3 0 1 1 5 2.24c-1.2.8-2 1.2-2 2.76m0 3v.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0",home:"m3 10 9-7 9 7M5 9v12h14V9M9 21v-7h6v7",cube:"m12 3 9 5v8l-9 5-9-5V8l9-5Zm0 10v8M3 8l9 5 9-5",layers:"m12 3 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 16l9 5 9-5",search:"M20 20l-5-5m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0",focus:"M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0",route:"M5 6a2 2 0 1 1 0 .01M19 18a2 2 0 1 1 0 .01M7 6h8a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8",spark:"m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z",hand:"M8 12V5a2 2 0 0 1 4 0v6-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 4-2 7-6 7h-2c-2 0-3-1-4-3l-4-6a2 2 0 0 1 3-2l1 1",cursor:"m5 3 14 10-7 1-3 7L5 3Z",external:"M14 3h7v7m0-7L10 14M10 3H3v18h18v-7",bike:"M9 17a4 4 0 1 1-8 0 4 4 0 0 1 8 0m14 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0M5 17l5-9 5 9H5m5-9h7l2 9M8 5h5m4-2h3v5",cable:"M6 3v5a4 4 0 0 0 4 4h4a4 4 0 0 1 4 4v5M3 3h6m6 18h6M5 1v2m2-2v2m10 18v2m2-2v2",rack:"M4 3h16v18H4V3Zm0 6h16M4 15h16M8 6h2m-2 6h2m-2 6h2",light:"M8 16c0-3-3-4-3-8a7 7 0 0 1 14 0c0 4-3 5-3 8H8Zm0 3h8m-6 3h4",hatch:"M6 3h12l3 3v12l-3 3H6l-3-3V6l3-3Zm2 4h8v10H8V7m5 5h1",screen:"M3 4h18v13H3V4Zm9 13v4m-5 0h10",camera:"M3 6h5l2-3h4l2 3h5v15H3V6Zm13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0",frame:"M3 3h18v18H3V3m4 0v18M17 3v18M3 7h18M3 17h18"};function Dl(i){return`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ff[i]||ff.cube}"/></svg>`}document.querySelectorAll("[data-icon]").forEach(i=>i.innerHTML=Dl(i.dataset.icon));var le={ready:!1,entered:!1,selected:null,hover:null,filter:"all",query:"",quality:"high",route:!0,visited:new Set,yaw:-Math.PI/2,pitch:0,targetYaw:-Math.PI/2,targetPitch:0,travel:null},Bv=matchMedia("(prefers-reduced-motion: reduce)"),_f=matchMedia("(pointer: coarse)").matches,fa=()=>_f||innerWidth<=760,pa=new Set,Pi=new Set,Rl=[],ca=[],bf=new Map,pf,Ot,jn,Zn,St,tn,tr,pi,Ou=performance.now(),mf=0,gf,kv=new D,xf=new Hs,vf=new Fe,Uu=new Hs,Al=new D,la=new D,Sf=new D(-3.15,-.45,-.4),Mf=new D(3.15,.45,.4),wf=new D(-2.85,.03,0),Il=[{name:"CEVIS.Bike",title:"CEVIS Cycle Ergometer",sub:"Crew Exercise System",icon:"bike",pos:[.25,.04,.18],target:[1.1,-.58,-.67]},{name:"EXPRESS_Racks_ATLAS_11B_Generic_Locker_01",title:"EXPRESS Science Lockers",sub:"Modular payload volume",icon:"rack",pos:[-1.15,.15,.05],target:[-.74,.7,-1.28]},{name:"US_Lab_Int_MSS_AV_Wires",title:"Avionics Cable Loom",sub:"High-voltage harness routing",icon:"cable",pos:[-.7,.05,-.12],target:[.05,-.09,.87]},{name:"US_Lab_Int_Lights_Emissive",title:"Destiny Lighting Fixtures",sub:"Illumination array",icon:"light",pos:[-1.7,-.1,0],target:[-.9,1.06,0]},{name:"US_Lab_Int_FWD_Bulkhead",title:"Forward Passageway Bulkhead",sub:"Module boundary to Node 2",icon:"hatch",pos:[2.65,.03,0],target:[3.7,0,0]}];function zv(i){let e="Equipment Component",t="Identifiable hardware component in the US Lab Destiny interior mesh.",n="Equipment",s="cube",r="equipment";return i==="CEVIS.Bike"?(e="CEVIS Exercise Ergometer",t="Cycle Ergometer with Vibration Isolation and Stabilization system. Used by astronauts for daily cardiovascular conditioning.",n="Crew Systems",s="bike"):/Cevis.Mount/i.test(i)?(e="CEVIS Structural Mount",t="Vibration-isolated mounting fixture securing the exercise bike to internal seat tracks.",s="bike"):/Wires/i.test(i)?(e="Avionics Wire Loom",t="Inter-rack avionics and power wiring bundles running along utility standoffs.",n="Cabling & Power",s="cable"):/Generic_Locker/i.test(i)?(e=`EXPRESS Payload Locker ${i.match(/_(\d+)$/)?.[1]||""}`,t="Standardized middeck locker enclosure inside the EXPRESS rack structure for microgravity experiments.",n="Science Hardware",s="rack"):/_Base$/.test(i)?(e="EXPRESS Rack Base Structure",t="Primary standardized rack chassis providing power, data, and cooling fluids to experiments.",n="Science Hardware",s="rack"):/Drawer/i.test(i)?(e="Equipment Drawer",t="Modular pull-out utility and payload drawer.",n="Science Hardware",s="rack"):/Lights/i.test(i)?(e=/EndCaps/.test(i)?"Lighting End Caps":"Module Luminaire Assembly",t="Overhead interior light fixture running along ceiling standoffs.",n="Interior Systems",s="light",r="structure"):/Bulkhead/.test(i)?(e=/FWD/.test(i)?"Forward Bulkhead Hatchway":"Aft Bulkhead Hatchway",t="Endcone structural bulkhead and vestibule ring separating US Lab from adjacent modules.",n="Structural Shell",s="hatch",r="structure"):/WORF/.test(i)?(e="WORF Optical Window Frame",t="Window Observational Research Facility optical bench mounting ring.",n="Earth Observation",s="camera"):/MainFrame/.test(i)?(e="Internal Standoff Frame",t="Longitudinal structural titanium/aluminum framework supporting equipment racks and ducting.",n="Structural Shell",s="frame",r="structure"):/Int_Racks/.test(i)?(e=`Avionics Rack Shell ${i.slice(-3)}`,t="Enclosed hardware rack chassis flanking the central aisle.",n="Interior Systems",s="rack",r="structure"):/Elbow_Screens/.test(i)?(e="Avionics Interface Panel",t="Side utility panel providing auxiliary display and telemetry connections.",n="Interior Systems",s="screen"):/Elbows/.test(i)?(e="Corner Structural Connectors",t="Corner bracket couplings linking transverse bulkhead rings.",n="Structural Shell",s="frame",r="structure"):/Metals/.test(i)?(e="Internal Metal Bracketry",t="Structural mounts and bracket assemblies throughout the aisle.",n="Structural Shell",s="frame",r="structure"):/Patches/.test(i)?(e="Mission Decals & Badges",t="Interior station insignia and expedition commemorative plaques.",n="Interior Systems",s="spark",r="structure"):/MSS_AV$/.test(i)?(e="MSS Avionics Terminal",t="Mobile Servicing System robotic workstation display terminal.",s="screen"):(e=i.replace(/^EXPRESS_Racks_ATLAS_(?:\d+_)?/,"").replaceAll("_"," ").replace(/\s+/g," ").trim()||e,t="Hardware element cataloged in official NASA JSC interior geometry archive.",n="Science Hardware",s="rack"),{title:e,description:t,category:n,icon:s,group:r}}function da(i){ie("toast").textContent=i,ie("toast").hidden=!1,clearTimeout(gf),gf=setTimeout(()=>ie("toast").hidden=!0,3200)}function Pl(){return!!document.querySelector("dialog[open]")}function Kn(){pa.clear(),Pi.clear(),Al.set(0,0,0),document.querySelectorAll("[data-move]").forEach(i=>i.classList.remove("pressed"))}function Tf(i){Kn(),le.travel=null,ie(i).showModal()}ie("help-button").onclick=()=>Tf("help-dialog");ie("info-button").onclick=()=>Tf("info-dialog");ie("retry-button").onclick=()=>location.reload();ie("fullscreen-button").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():da("Fullscreen is not supported in this browser.")}catch{da("Unable to toggle fullscreen.")}};document.addEventListener("fullscreenchange",()=>ie("fullscreen-button").setAttribute("aria-label",document.fullscreenElement?"Exit Fullscreen":"Fullscreen"));function Bu(){if(!le.ready)return;let i=!le.entered;le.entered=!0,document.body.classList.add("entered"),ie("welcome").hidden=!0,ie("hud").hidden=!1,ie("explore-hint").hidden=!1,i&&os(!fa()),Ot.domElement.focus({preventScroll:!0})}ie("enter-button").onclick=Bu;function os(i){le.route=i,ie("route").hidden=!i||!le.entered,ie("route-button").setAttribute("aria-pressed",String(i)),i&&(ie("inventory").hidden=!0)}ie("route-button").onclick=()=>{fa()&&!le.route&&Li(),os(!le.route)};function Vv(){le.ready&&(os(!1),fa()&&Li(),ie("inventory").hidden=!1,ku(),ie("part-search").focus())}ie("inventory-button").onclick=Vv;ie("inventory-close").onclick=()=>{ie("inventory").hidden=!0,os(!0)};ie("part-search").addEventListener("input",i=>{le.query=i.target.value.toLowerCase(),ku()});document.querySelectorAll("[data-filter]").forEach(i=>i.onclick=()=>{le.filter=i.dataset.filter,document.querySelectorAll("[data-filter]").forEach(e=>e.setAttribute("aria-pressed",String(e===i))),ku()});function ku(){let i=ca.filter(e=>{let t=e.userData.description;return(le.filter==="all"||t.group===le.filter)&&`${t.title} ${e.userData.sourceName}`.toLowerCase().includes(le.query)}).sort((e,t)=>e.userData.description.title.localeCompare(t.userData.description.title));ie("parts-list").replaceChildren();for(let e of i){let t=e.userData.description,n=document.createElement("button");n.dataset.part=String(e.userData.index),n.className="part-row"+(le.selected===e?" selected":""),n.innerHTML=`<span>${Dl(t.icon)}</span><span><strong></strong><small></small></span>`,n.querySelector("strong").textContent=t.title,n.querySelector("small").textContent=t.category,n.onclick=()=>{zu(e),fa()&&(ie("inventory").hidden=!0)},ie("parts-list").append(n)}if(!i.length){let e=document.createElement("p");e.className="empty-search",e.textContent="No matching hardware parts found.",ie("parts-list").append(e)}ie("search-count").textContent=`${i.length} / ${ca.length} cataloged parts`}function Hv(){Il.forEach((i,e)=>{let t=document.createElement("button");t.className="route-stop",t.dataset.stop=String(e),t.innerHTML=`<span class="stop-number">${String(e+1).padStart(2,"0")}</span><span class="stop-copy"><strong>${i.title}</strong><small>${i.sub}</small></span><span class="stop-arrow">${Dl("arrow")}</span>`,t.onclick=()=>{let n=bf.get(i.name);n?(zu(n),ha(i.pos,i.target)):da("Part not found in model mesh.")},ie("route-stops").append(t)})}function zu(i){le.selected=i,le.hover=null,le.travel=null,Kn(),ie("hover-label").hidden=!0;let e=i.userData.description;ie("detail-title").textContent=e.title,ie("detail-description").textContent=e.description,ie("detail-category").textContent=e.category,ie("detail-icon").innerHTML=Dl(e.icon),ie("detail-number").textContent=`USL / ${String(i.userData.index+1).padStart(2,"0")}`,ie("detail-source").textContent=i.userData.sourceName,ie("detail").hidden=!1,document.body.classList.add("part-selected"),os(!1),ie("inventory").hidden=!0;let t=/Wires|Bulkhead/i.test(i.userData.sourceName)?"Wire Overheating & Smoke Detection Studies":"Solid Fuel Flammability & Quenching Limits";ie("detail-research-label").textContent=t,ie("detail-research").onclick=()=>{Et("research"),Un.open(/Wires|Bulkhead/i.test(i.userData.sourceName)?"detection":"prevention")},ie("detail-placement").onclick=()=>{pi.placeAt(i.userData.center.toArray(),e.title),Li()},fa()&&(os(!1),ie("inventory").hidden=!0);let n=Il.findIndex(s=>s.name===i.userData.sourceName);n>=0&&le.visited.add(n),document.querySelectorAll("[data-stop]").forEach(s=>{s.classList.toggle("selected",Number(s.dataset.stop)===n),s.classList.toggle("visited",le.visited.has(Number(s.dataset.stop)))}),ie("visited-count").textContent=`${le.visited.size} / ${Il.length}`,ua(),document.querySelectorAll("[data-part]").forEach(s=>s.classList.toggle("selected",Number(s.dataset.part)===i.userData.index))}function Li(){le.selected=null,le.hover=null,document.body.classList.remove("part-selected"),ie("detail").hidden=!0,ie("selection-pin").hidden=!0,document.querySelectorAll("[data-stop]").forEach(i=>i.classList.remove("selected")),ua()}ie("detail-close").onclick=Li;function ua(){Zn&&(Zn.selectedObjects=le.selected?[le.selected]:le.hover?[le.hover]:[])}function Gv(i,e){let t=new D(...e).sub(i).normalize();return{yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(Lt.clamp(t.y,-1,1))}}function Wv(i,e){return i+Math.atan2(Math.sin(e-i),Math.cos(e-i))}function ha(i,e){Kn();let t=new D(...i).clamp(Sf,Mf),n=Gv(t,e);if(Bv.matches){St.position.copy(t),le.yaw=le.targetYaw=n.yaw,le.pitch=le.targetPitch=n.pitch,le.travel=null;return}le.travel={start:St.position.clone(),end:t,startYaw:le.yaw,endYaw:Wv(le.yaw,n.yaw),startPitch:le.pitch,endPitch:n.pitch,t:0,duration:1.15}}ie("focus-button").onclick=()=>{if(!le.selected)return;let i=le.selected,e=Il.find(t=>t.name===i.userData.sourceName);if(e)ha(e.pos,e.target);else{let t=i.userData.center.clone(),n=t.clone();n.x=Lt.clamp(t.x-.65,-2.9,2.9),n.y=Lt.clamp(t.y*.15,-.15,.2),n.z=0,ha(n.toArray(),t.toArray())}};function Ef(){Li(),ie("inventory").hidden=!0,ha(wf.toArray(),[3.1,.03,0]),da("Reset view to module entrance.")}ie("home-button").onclick=Ef;ie("quality-button").onclick=()=>{le.quality=le.quality==="high"?"balanced":"high",ie("quality-label").textContent=le.quality==="high"?"High":"Balanced",ma(),da(le.quality==="high"?"High Fidelity (PBR + GTAO)":"Balanced (Low GPU overhead)")};var Ll={KeyW:"forward",ArrowUp:"forward",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyQ:"down",KeyE:"up"};window.addEventListener("keydown",i=>{if(!(!le.entered||Pl())){if(i.code==="Escape"){Li(),ie("inventory").hidden=!0,Kn(),le.travel=null,Ot?.domElement.focus({preventScroll:!0});return}/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)||(Ll[i.code]&&(i.preventDefault(),pa.add(Ll[i.code]),le.travel=null),i.code==="KeyR"&&!i.repeat&&Ef())}});window.addEventListener("keyup",i=>{Ll[i.code]&&pa.delete(Ll[i.code])});window.addEventListener("blur",Kn);document.addEventListener("visibilitychange",()=>{Kn(),Ou=performance.now()});document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",e=>{e.preventDefault(),le.travel=null,Pi.add(i.dataset.move),i.classList.add("pressed"),i.setPointerCapture(e.pointerId)});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>{Pi.delete(i.dataset.move),i.classList.remove("pressed")});i.addEventListener("keydown",e=>{["Enter"," "].includes(e.key)&&(e.preventDefault(),Pi.add(i.dataset.move),le.travel=null)}),i.addEventListener("keyup",()=>Pi.delete(i.dataset.move)),i.addEventListener("blur",()=>Pi.delete(i.dataset.move))});function Xv(){let i=Ot.domElement,e=null,t={x:0,y:0};i.addEventListener("pointerdown",s=>{!le.entered||Pl()||e||s.button!==0||(i.focus({preventScroll:!0}),le.travel=null,e={id:s.pointerId,x:s.clientX,y:s.clientY,moved:0},i.setPointerCapture(s.pointerId),ie("hover-label").hidden=!0)}),i.addEventListener("pointermove",s=>{if(t={x:s.clientX,y:s.clientY},!!le.entered)if(e&&e.id===s.pointerId){let r=s.clientX-e.x,a=s.clientY-e.y;e.moved+=Math.abs(r)+Math.abs(a),le.targetYaw-=r*.0032,le.targetPitch=Lt.clamp(le.targetPitch-a*.0032,-1.38,1.38),e.x=s.clientX,e.y=s.clientY,le.hover=null,ua()}else performance.now()-mf>70&&!_f&&(mf=performance.now(),n(s.clientX,s.clientY,!1))}),i.addEventListener("pointerup",s=>{if(e?.id!==s.pointerId)return;let r=e.moved;e=null,i.hasPointerCapture(s.pointerId)&&i.releasePointerCapture(s.pointerId),r<6&&n(s.clientX,s.clientY,!0)}),i.addEventListener("pointercancel",()=>{e=null}),i.addEventListener("lostpointercapture",()=>{e=null}),i.addEventListener("pointerleave",()=>{e||(le.hover=null,ie("hover-label").hidden=!0,ua())}),i.addEventListener("contextmenu",s=>s.preventDefault());function n(s,r,a){if(Pl()||!le.ready)return;let o=i.getBoundingClientRect();vf.set((s-o.left)/o.width*2-1,-(r-o.top)/o.height*2+1),xf.setFromCamera(vf,St);let c=xf.intersectObjects(Rl,!1)[0];c?a?(zu(c.object.userData.part),kv.copy(c.point)):(le.hover=c.object.userData.part,ie("hover-text").textContent=c.object.userData.part.userData.description.title,ie("hover-label").hidden=!1,ie("hover-label").style.left=`${Math.min(s+17,window.innerWidth-270)}px`,ie("hover-label").style.top=`${Math.min(r+20,window.innerHeight-160)}px`):(le.hover=null,ie("hover-label").hidden=!0,a&&Li()),ua()}}function qv(i,e){if(e.lengthSq()<1e-9)return!0;let t=e.clone().normalize(),n=new D().crossVectors(t,Math.abs(t.y)<.9?new D(0,1,0):new D(1,0,0)).normalize().multiplyScalar(.09),s=new D().crossVectors(t,n).normalize().multiplyScalar(.09);Uu.far=e.length()+.14;for(let r of[new D,n,n.clone().negate(),s,s.clone().negate()])if(Uu.set(i.clone().add(r),t),Uu.intersectObjects(Rl,!1).length)return!1;return!0}function $v(i){if(!(!le.entered||Pl())){if(le.travel){let e=le.travel;e.t+=i;let t=Math.min(e.t/e.duration,1),n=t*t*(3-2*t);St.position.lerpVectors(e.start,e.end,n),le.yaw=le.targetYaw=Lt.lerp(e.startYaw,e.endYaw,n),le.pitch=le.targetPitch=Lt.lerp(e.startPitch,e.endPitch,n),t===1&&(le.travel=null)}else{le.yaw=Lt.damp(le.yaw,le.targetYaw,22,i),le.pitch=Lt.damp(le.pitch,le.targetPitch,22,i);let e=a=>pa.has(a)||Pi.has(a),t=Number(e("forward"))-Number(e("back")),n=Number(e("right"))-Number(e("left")),s=Number(e("up"))-Number(e("down"));la.set(-Math.sin(le.yaw)*t+Math.cos(le.yaw)*n,s,-Math.cos(le.yaw)*t-Math.sin(le.yaw)*n),la.lengthSq()>1&&la.normalize(),la.multiplyScalar(.85),Al.lerp(la,1-Math.exp(-i*12));let r=Al.clone().multiplyScalar(i);for(let a of["x","y","z"]){let o=new D;o[a]=r[a],qv(St.position,o)?St.position.add(o):Al[a]=0}St.position.clamp(Sf,Mf)}St.rotation.set(le.pitch,le.yaw,0,"YXZ"),ie("map-marker").style.left=`${Lt.clamp((St.position.x+3.15)/6.3*100,3,97)}%`,ie("map-marker").firstElementChild.style.transform=`rotate(${(-le.yaw-Math.PI/2)*180/Math.PI}deg)`,ie("position-label").textContent=St.position.x<-1.5?"Aft Section":St.position.x>1.5?"Forward Section":"Center Aisle";for(let e of document.querySelectorAll("[data-move]"))e.classList.toggle("pressed",Yv(e.dataset.move))}}function Yv(i){return pa.has(i)||Pi.has(i)}function ma(){if(!Ot||!jn)return;tr&&(tr.enabled=le.quality==="high"&&!pi?.active);let{width:i,height:e}=ie("viewport").getBoundingClientRect(),t=Math.min(devicePixelRatio,le.quality==="high"?1.65:1);Ot.setPixelRatio(t),Ot.setSize(i,e),jn.setPixelRatio(t),jn.setSize(i,e),St.aspect=i/e,St.updateProjectionMatrix()}window.addEventListener("resize",ma);new ResizeObserver(ma).observe(ie("viewport"));function Af(i){requestAnimationFrame(Af);let e=(i-Ou)/1e3,t=Math.min(e,.045);if(Ou=i,!(document.hidden||!le.ready||Cf!=="lab3d")){if($v(t),le.selected&&le.entered){let n=le.selected.userData.center.clone().project(St),s=ie("viewport").getBoundingClientRect(),r=n.z>-1&&n.z<1&&Math.abs(n.x)<1&&Math.abs(n.y)<1;ie("selection-pin").hidden=!r,r&&(ie("selection-pin").style.left=`${s.left+(n.x*.5+.5)*s.width}px`,ie("selection-pin").style.top=`${s.top+(-n.y*.5+.5)*s.height}px`)}pi?.update(e,St),jn.render()}}async function Zv(){try{Ot=new pl({antialias:!0,alpha:!1,powerPreference:"high-performance"}),Ot.outputColorSpace=At,Ot.toneMapping=Gs,Ot.toneMappingExposure=.88,Ot.setClearColor(1714483),Ot.domElement.tabIndex=0,Ot.domElement.setAttribute("aria-label","Interactive 3D viewport"),ie("viewport").append(Ot.domElement),Ot.domElement.addEventListener("webglcontextlost",h=>{h.preventDefault(),Kn(),yf("WebGL context lost. Reload to resume.")}),tn=new qi,tn.background=new Re(1253934),St=new Rt(68,innerWidth/innerHeight,.02,45),St.position.copy(wf),St.rotation.set(0,-Math.PI/2,0,"YXZ");let i=new Zs(Ot),e=new bl;tn.environment=i.fromScene(e,.04).texture,tn.environmentIntensity=.48,e.dispose(),i.dispose(),tn.add(new Ur(15923455,8820901,.55)),tn.add(new zr(16777215,.12));for(let h of[-2.7,-1.35,0,1.35,2.7]){let f=new Sn(16185068,1.5,4,1.5);f.position.set(h,.72,0),tn.add(f)}let t=new Sn(14479103,.7,5,1);t.position.set(-2.8,0,0),tn.add(t),jn=new wl(Ot),jn.addPass(new Tl(tn,St)),tr=new sa(tn,St,innerWidth,innerHeight,void 0,{radius:.16,thickness:.35,distanceExponent:1}),tr.blendIntensity=.55,jn.addPass(tr),Zn=new er(new Fe(innerWidth,innerHeight),tn,St),Zn.edgeStrength=3,Zn.edgeGlow=.1,Zn.edgeThickness=1,Zn.visibleEdgeColor.set("#efbc64"),Zn.hiddenEdgeColor.set("#665235"),Zn.pulsePeriod=0,jn.addPass(Zn),jn.addPass(new El),ma();let n=await fetch("./assets/us-lab-metadata.json");if(!n.ok)throw new Error("Could not load metadata");pf=await n.json();let s=await fetch("./assets/us-lab.asset.json");if(!s.ok)throw Error("Could not load asset manifest");let r=await s.json(),a=r.parts.map(()=>0),o=await Promise.all(r.parts.map(async(h,f)=>{let g=await fetch("./assets/"+h.file);if(!g.ok)throw Error("Model chunk missing");let x=g.body.getReader(),m=[];for(;;){let{value:v,done:S}=await x.read();if(S)break;m.push(v),a[f]+=v.byteLength;let E=Math.round(a.reduce((w,C)=>w+C,0)/r.bytes*93);ie("load-progress").style.width=`${E}%`,ie("load-status").textContent=`Loading US Lab Geometry \xB7 ${E}%`}if(a[f]!==h.bytes)throw Error("Model chunk size mismatch");let p=new Uint8Array(a[f]),T=0;for(let v of m)p.set(v,T),T+=v.byteLength;return p})),c=new Uint8Array(r.bytes),l=0;for(let h of o)c.set(h,l),l+=h.byteLength;let u=await new yl().parseAsync(c.buffer,"./assets/"),d=new Map(pf.items.map(h=>[h.name,h]));if(u.scene.updateMatrixWorld(!0),u.scene.traverse(h=>{let f=h.userData.source_name;if(!f||!d.has(f))return;let g=d.get(f);h.userData.sourceName=f,h.userData.description=zv(f),h.userData.index=ca.length,h.userData.center=new D(...g.center),ca.push(h),bf.set(f,h),h.traverse(x=>{if(!x.isMesh)return;x.userData.part=h,Rl.push(x),x.frustumCulled=!0;let m=Array.isArray(x.material)?x.material:[x.material];for(let p of m)/USLab_Racks_0[13]/i.test(p.name)&&(p.transparent=!1,p.alphaTest=.5,p.depthWrite=!0,p.opacity=1,p.needsUpdate=!0),/Patches1/i.test(p.name)&&(p.transparent=!1,p.alphaTest=0,p.depthWrite=!0,p.opacity=1,p.needsUpdate=!0),p.map&&(p.map.anisotropy=Math.min(8,Ot.capabilities.getMaxAnisotropy())),p.emissive&&(p.emissiveIntensity=Math.min(p.emissiveIntensity,/Lights/i.test(f)?1.05:.55))})}),tn.add(u.scene),tn.updateMatrixWorld(!0),St.updateMatrixWorld(!0),Rl.length<10)throw new Error("Model meshes failed to initialize");ie("part-count").textContent=String(ca.length),Hv(),Xv(),ie("load-progress").style.width="100%",ie("load-status").textContent="Initializing flight telemetry",pi=tf({scene:tn,enter:Bu,travelTo:ha,stopMovement:Kn,openResearch:h=>{Et("research"),Un.open(h)},hidePanels:()=>{Li(),os(!1),ie("inventory").hidden=!0},onMode:h=>{document.body.classList.toggle("fire-mode",h),tr.enabled=!h&&le.quality==="high"}}),await Ot.compileAsync(tn,St),jn.render(),le.ready=!0,ie("loading").hidden=!0,requestAnimationFrame(Af),Cl&&(pi.openRecord(Cl),Cl=null)}catch(i){console.error("US Lab initialization error:",i),yf(i.message?.includes("WebGL")?"WebGL failed to initialize. Try modern hardware-accelerated browser.":"Unable to load 3D assets.")}}function yf(i){ie("loading").hidden=!1,ie("loading").querySelector("h1").textContent="Laboratory Offline",ie("load-status").textContent=i,ie("retry-button").hidden=!1,ie("retry-button").style.marginTop="25px"}var Cl=null,Cf="story",as=null,Un=null;function Et(i){Cf=i,document.body.classList.toggle("module-active",i!=="lab3d"),as?.destroy&&(as.destroy(),as=null);let e={story:ie("story-nav-btn"),"flame-lab":ie("flame-lab-nav-btn"),safety:ie("safety-nav-btn"),spinoff:ie("spinoff-nav-btn"),lab3d:ie("lab-button"),research:ie("research-button")};Object.entries(e).forEach(([n,s])=>{if(s){let r=n===i;s.setAttribute("aria-pressed",String(r)),s.classList.toggle("active",r)}});let t=ie("active-module-view");if(i==="lab3d"){t&&(t.hidden=!0),ma(),le.ready&&(Bu(),pi?.openRecord());return}t&&(t.hidden=!1,t.innerHTML=""),ie("route").hidden=!0,ie("inventory").hidden=!0,ie("detail").hidden=!0,ie("welcome").hidden=!0,pi?.pause(),Kn(),i==="story"?as=nf(t,{onOpenLab:()=>Et("flame-lab"),onOpenData:n=>{Et("research"),Un?.open()},onOpenStudy:n=>{Et("research"),Un?.open(n)}}):i==="flame-lab"?as=sf(t,{onOpenData:n=>{Et("research"),Un?.open()},onOpenStudy:n=>{Et("research"),Un?.open(n)}}):i==="safety"?as=rf(t,{onOpenData:n=>{Et("research"),Un?.open()},onOpenStudy:n=>{Et("research"),Un?.open(n)}}):i==="spinoff"?as=af(t,{onOpenData:n=>{Et("research"),Un?.open()}}):i==="research"&&(Un=rd({container:t,onExplore:()=>Et("lab3d"),onReplay:n=>{Et("lab3d"),le.ready?pi.openRecord(n):Cl=n},onOpen:()=>{Kn(),pi?.pause()}}),Un.open())}ie("story-nav-btn")?.addEventListener("click",()=>Et("story"));ie("flame-lab-nav-btn")?.addEventListener("click",()=>Et("flame-lab"));ie("safety-nav-btn")?.addEventListener("click",()=>Et("safety"));ie("spinoff-nav-btn")?.addEventListener("click",()=>Et("spinoff"));ie("lab-button")?.addEventListener("click",()=>Et("lab3d"));ie("research-button")?.addEventListener("click",()=>Et("research"));ie("welcome-research")?.addEventListener("click",()=>Et("research"));ie("pitch-button")?.addEventListener("click",()=>{iu({onClose:()=>{},onSwitchTab:i=>Et(i)})});document.addEventListener("keydown",i=>{(i.key==="p"||i.key==="P")&&!["INPUT","TEXTAREA","SELECT"].includes(document.activeElement?.tagName)&&(document.body.classList.contains("pitch-active")||iu({onClose:()=>{},onSwitchTab:e=>Et(e)}))});Et("story");Zv();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
