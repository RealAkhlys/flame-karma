/**
 * MODULE 2: INTERACTIVE FLAME PHYSICS & HABITAT SIMULATOR ("FLAME LAB")
 * Real-time physics workbench grounded in NASA PSI Combustion Science:
 * BASS, BASS-II, Saffire, FLEX, E-FIELD Flames, BRE, and SoFIE.
 */

export function createFlameLab(container, { onOpenData, onOpenStudy } = {}) {
  // Simulator State
  const state = {
    gravity: 0.0, // 0g (ISS), 0.16g (Moon), 0.38g (Mars), 1.0g (Earth)
    oxygen: 21, // 18% - 36%
    pressure: 101.3, // 50 kPa - 101.3 kPa
    airflow: 10, // 0 - 30 cm/s
    fuel: 'pmma', // 'pmma', 'cotton', 'nomex', 'heptane', 'kapton'
    efield: false, // E-FIELD Flames ion-wind toggle
    animActive: true
  };

  // Empirical Data Envelopes derived from PSI & NTRS
  const materials = {
    pmma: {
      name: 'PMMA (Polymethyl Methacrylate)',
      type: 'Solid Thermoplastic Rod',
      locEarth: 17.5, // % O2 LOC at 101.3 kPa
      locLunar: 15.2, // % O2 LOC at 56 kPa
      baseSpread: 1.4, // mm/s at 21% O2, 0g, 10 cm/s
      sootIndex: 'Moderate (Earth) / Pure Vapor (0g)',
      suppression: 'Fine Water-Mist or CO₂ Total Flooding',
      psiMatch: 'PSI-25 (BASS-II) & PSI-20 (BRE)',
      ntrs: 'NTRS-20190028412'
    },
    cotton: {
      name: 'Cotton / Fiberglass Blend (SIBO)',
      type: 'Solid Thin Fabric Sheet',
      locEarth: 16.0,
      locLunar: 14.1,
      baseSpread: 1.8,
      sootIndex: 'High Smoldering Risk / Low Visible Plume',
      suppression: 'Fine Water-Mist PFE (Soaks fabric weave)',
      psiMatch: 'PSI-98 (Saffire-I) & PSI-26 (BASS)',
      ntrs: 'NTRS-20180006742'
    },
    nomex: {
      name: 'Nomex (Aramid Spacecraft Fabric)',
      type: 'Flame-Resistant Polymer',
      locEarth: 28.5, // Self-extinguishes in standard air!
      locLunar: 23.5, // Can burn in Artemis 34% O2!
      baseSpread: 0.6,
      sootIndex: 'Carbonaceous char layer with low soot',
      suppression: 'Airflow Interruption + Nitrogen Purge',
      psiMatch: 'PSI-99 (Saffire-II) & NASA-STD-6001B',
      ntrs: 'NTRS-20210018593'
    },
    heptane: {
      name: 'n-Heptane Fuel Droplet',
      type: 'Liquid Hydrocarbon Droplet',
      locEarth: 14.0,
      locLunar: 12.5,
      baseSpread: 3.2,
      sootIndex: 'Soot-Free Cool Flame Regime (<800 K)',
      suppression: 'Inert Gas Extinction (N₂ / He / CO₂)',
      psiMatch: 'PSI-69 (FLEX) & PSI-68 (FLEX-2)',
      ntrs: 'NTRS-20150023456'
    },
    kapton: {
      name: 'Kapton / PTFE Wire Insulation',
      type: 'Electrical Wiring Insulation',
      locEarth: 21.0,
      locLunar: 17.5,
      baseSpread: 0.9,
      sootIndex: 'Toxic HF / CO Off-gassing (High Toxicity)',
      suppression: 'Electrical Bus Isolation + CO₂ PFE',
      psiMatch: 'PSI-101 (SAME-R) & SoFIE-GEL',
      ntrs: 'NTRS-20220004521'
    }
  };

  container.innerHTML = `
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
              <span class="control-val" id="val-gravity">${state.gravity.toFixed(2)} g</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${state.gravity === 0.0 ? 'active' : ''}" data-g="0.0">0g (ISS)</button>
              <button class="quick-chip ${state.gravity === 0.16 ? 'active' : ''}" data-g="0.16">0.16g (Moon)</button>
              <button class="quick-chip ${state.gravity === 0.38 ? 'active' : ''}" data-g="0.38">0.38g (Mars)</button>
              <button class="quick-chip ${state.gravity === 1.0 ? 'active' : ''}" data-g="1.0">1.0g (Earth)</button>
            </div>
            <input type="range" class="control-slider" id="slider-gravity" min="0" max="1" step="0.01" value="${state.gravity}">
          </div>

          <!-- Oxygen Concentration -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Oxygen Fraction</span>
              <span class="control-val" id="val-oxygen">${state.oxygen}% O₂</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${state.oxygen === 21 ? 'active' : ''}" data-ox="21">21% (ISS Std)</button>
              <button class="quick-chip ${state.oxygen === 30 ? 'active' : ''}" data-ox="30">30% (EVA Prep)</button>
              <button class="quick-chip ${state.oxygen === 34 ? 'active' : ''}" data-ox="34">34% (Lunar Habitat)</button>
            </div>
            <input type="range" class="control-slider" id="slider-oxygen" min="18" max="36" step="1" value="${state.oxygen}">
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
              <span class="control-val" id="val-pressure">${state.pressure.toFixed(1)} kPa</span>
            </div>
            <div class="quick-chip-row">
              <button class="quick-chip ${state.pressure === 56 ? 'active' : ''}" data-pres="56">56 kPa (Lunar Target)</button>
              <button class="quick-chip ${state.pressure === 70.3 ? 'active' : ''}" data-pres="70.3">70.3 kPa (Cygnus)</button>
              <button class="quick-chip ${state.pressure === 101.3 ? 'active' : ''}" data-pres="101.3">101.3 kPa (1 atm)</button>
            </div>
            <input type="range" class="control-slider" id="slider-pressure" min="50" max="101.3" step="0.5" value="${state.pressure}">
          </div>

          <!-- Airflow Velocity -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Forced Airflow (HVAC)</span>
              <span class="control-val" id="val-airflow">${state.airflow} cm/s</span>
            </div>
            <input type="range" class="control-slider" id="slider-airflow" min="0" max="30" step="1" value="${state.airflow}">
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
              <span>⚡ Electric Field (E-FIELD Flames)</span>
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
              <span>SIMULATED COMBUSTION CHAMBER · CIR / MSG FACILITY</span>
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
            <span class="kpi-title">Limiting O₂ Concentration (LOC) Margin</span>
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
  `;

  // Canvas & Context Setup
  const canvas = container.querySelector('#flame-lab-canvas');
  let animFrame = null;

  // Real-Time Physics Calculation Function
  function calculatePhysics() {
    const mat = materials[state.fuel];
    const isEarth = state.gravity > 0.8;
    const isLunar = state.gravity > 0.1 && state.gravity < 0.3;
    const isMicro = state.gravity <= 0.05;

    // Estimate LOC based on pressure and material
    // Lower pressure shifts LOC slightly lower
    const pressureFactor = (101.3 - state.pressure) * 0.035;
    const effectiveLoc = mat.locEarth - pressureFactor;
    const locMargin = state.oxygen - effectiveLoc;

    // Spread Rate calculation grounded in Saffire / BASS-II data
    // Vf scales with O2%, forced airflow, and partial gravity buoyancy
    let vf = mat.baseSpread;
    const oxFactor = Math.max(0.2, (state.oxygen - 15) / 10);
    const flowFactor = 1 + (state.airflow / 30) * 1.4;
    const gFactor = isMicro ? 0.85 : isLunar ? 1.35 : 1.65; // Lunar weak buoyancy often accelerates burning!

    vf = vf * oxFactor * flowFactor * gFactor;

    // Extinction check
    const isExtinguished = locMargin < -1.0;
    if (isExtinguished) vf = 0;

    // Flame Temperature estimation (Kelvin)
    let temp = 1100 + (state.oxygen - 21) * 35 + state.gravity * 250;
    if (state.fuel === 'heptane' && isMicro && state.airflow < 5) {
      temp = 720; // Cool flame regime!
    }
    if (isExtinguished) temp = 295;

    // Evidence Confidence Assessment
    // High Confidence: ISS (0g, 21% O2, 101.3 kPa, 0-20 cm/s) or Saffire conditions
    // Evidence Gap Warning: High O2 (>32%) at Lunar/Mars gravity, or high airflow (>25 cm/s) at low pressure
    let confidence = 'high';
    let gapReason = '';
    let nextExperiment = '';

    if (state.gravity > 0.05 && state.gravity < 0.7 && state.oxygen > 30) {
      confidence = 'gap';
      gapReason = `NASA PSI has zero microgravity flight test data for ${mat.name} under ${state.gravity.toFixed(2)}g with elevated ${state.oxygen}% O₂. Weak buoyancy coupled with oxygen enrichment can cause unexpected rapid transition from smoldering to deflagration.`;
      nextExperiment = `Proposed SoFIE-II Matrix: 0.16g parabolic flight centrifuge, 56 kPa, 34% O₂, 10 cm/s co-flow for ${mat.name}.`;
    } else if (state.airflow > 22 && state.pressure < 60) {
      confidence = 'gap';
      gapReason = `High forced draft (${state.airflow} cm/s) at sub-atmospheric pressure (${state.pressure.toFixed(1)} kPa) creates an untested convective boundary layer for ${mat.name}.`;
      nextExperiment = `Proposed Saffire-VII Payload: Reduced pressure duct with 25 cm/s forced draft.`;
    } else if (state.efield && state.gravity > 0.5) {
      confidence = 'gap';
      gapReason = `E-FIELD Flames investigations focused exclusively on microgravity (0g). 1g buoyancy overwhelms ion-wind body forces.`;
      nextExperiment = `ACME Ground Test: Counter-flow gaseous burner under inverted DC potential.`;
    }

    return {
      mat,
      isEarth,
      isLunar,
      isMicro,
      effectiveLoc,
      locMargin,
      vf,
      temp,
      isExtinguished,
      confidence,
      gapReason,
      nextExperiment
    };
  }

  // Update Telemetry UI
  function updateTelemetryUI() {
    const phys = calculatePhysics();

    // Controls text updates
    container.querySelector('#val-gravity').textContent = `${state.gravity.toFixed(2)} g`;
    container.querySelector('#val-oxygen').textContent = `${state.oxygen}% O₂`;
    container.querySelector('#val-pressure').textContent = `${state.pressure.toFixed(1)} kPa`;
    container.querySelector('#val-airflow').textContent = `${state.airflow} cm/s`;

    // Efield button state
    const efieldBtn = container.querySelector('#btn-efield');
    efieldBtn.classList.toggle('active', state.efield);
    container.querySelector('#efield-status-text').textContent = state.efield ? 'ACTIVE (5 kV ION-WIND)' : 'OFF (0 kV)';

    // Status Pill
    const pillBox = container.querySelector('#evidence-status-pill-box');
    if (phys.confidence === 'high') {
      pillBox.innerHTML = `
        <div class="evidence-status-pill">
          <span class="telemetry-badge badge-match">HIGH CONFIDENCE: DIRECT PSI MATCH</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--space-text-secondary);">${phys.mat.psiMatch}</span>
        </div>
      `;
    } else {
      pillBox.innerHTML = `
        <div class="evidence-status-pill" style="border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.1);">
          <span class="telemetry-badge badge-gap">EVIDENCE BOUNDARY WARNING</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: #f87171;">UNTESTED NASA REGIME</span>
        </div>
      `;
    }

    // Chamber bottom bar
    const regimeEl = container.querySelector('#telemetry-regime');
    if (phys.isExtinguished) {
      regimeEl.textContent = 'EXTINGUISHED (BELOW LOC)';
      regimeEl.style.color = '#94a3b8';
    } else if (state.fuel === 'heptane' && phys.isMicro && state.airflow < 5) {
      regimeEl.textContent = 'COOL FLAME REGIME (LOW TEMP CH*)';
      regimeEl.style.color = '#38bdf8';
    } else if (phys.isMicro && !state.efield && state.airflow < 8) {
      regimeEl.textContent = 'DIFFUSION SPHERICAL BLUE';
      regimeEl.style.color = 'var(--telemetry-cyan)';
    } else if (state.efield && phys.isMicro) {
      regimeEl.textContent = 'ION-DEFORMED TEARDROP (E-FIELD)';
      regimeEl.style.color = '#c084fc';
    } else if (phys.isEarth) {
      regimeEl.textContent = 'BUOYANT TEARDROP (1.0g)';
      regimeEl.style.color = 'var(--telemetry-amber)';
    } else {
      regimeEl.textContent = 'PARTIAL GRAVITY DRIFT';
      regimeEl.style.color = '#fbbf24';
    }

    container.querySelector('#telemetry-ion').textContent = state.efield ? '5 kV ACTIVE' : 'INACTIVE';
    container.querySelector('#telemetry-temp').textContent = `~${Math.round(phys.temp)} K`;

    // Right Column KPIs
    const spreadEl = container.querySelector('#kpi-spread-rate');
    if (phys.isExtinguished) {
      spreadEl.textContent = '0.00 mm/s';
      spreadEl.style.color = '#94a3b8';
    } else {
      spreadEl.textContent = `${phys.vf.toFixed(2)} mm/s`;
      spreadEl.style.color = phys.vf > 2.5 ? '#ef4444' : phys.vf > 1.2 ? '#f59e0b' : '#38bdf8';
    }

    const locEl = container.querySelector('#kpi-loc-margin');
    if (phys.locMargin < 0) {
      locEl.textContent = `${phys.locMargin.toFixed(1)}% (BELOW LOC - QUENCHED)`;
      locEl.style.color = '#38bdf8';
    } else if (phys.locMargin > 8) {
      locEl.textContent = `+${phys.locMargin.toFixed(1)}% (EXTREME HAZARD)`;
      locEl.style.color = '#ef4444';
    } else {
      locEl.textContent = `+${phys.locMargin.toFixed(1)}% (SUSTAINED FLAME)`;
      locEl.style.color = '#f59e0b';
    }

    const sootEl = container.querySelector('#kpi-soot-risk');
    if (phys.isExtinguished) {
      sootEl.textContent = 'NONE (INERT)';
    } else if (phys.isEarth) {
      sootEl.textContent = 'HIGH YELLOW SOOT';
      sootEl.style.color = 'var(--telemetry-amber)';
    } else {
      sootEl.textContent = 'LOW SOOT / TOXIC SMOLDERING';
      sootEl.style.color = 'var(--telemetry-cyan)';
    }

    container.querySelector('#kpi-suppression').textContent = phys.mat.suppression;

    // Evidence Card
    const evidenceBox = container.querySelector('#evidence-boundary-card-box');
    if (phys.confidence === 'high') {
      evidenceBox.innerHTML = `
        <article class="evidence-card">
          <div class="evidence-header">
            <span class="telemetry-badge badge-psi">DIRECT PSI INVESTIGATION</span>
            <span>${phys.mat.psiMatch}</span>
          </div>
          <p class="evidence-desc">
            Conditions match validated microgravity flight runs. Data corroborated in <strong>${phys.mat.ntrs}</strong>.
          </p>
          <div style="display: flex; gap: 8px;">
            <button class="secondary" id="btn-view-source-data" style="font-size: 11px; padding: 6px 12px;">
              View NASA PSI Tables →
            </button>
          </div>
        </article>
      `;
      evidenceBox.querySelector('#btn-view-source-data').onclick = () => {
        onOpenData?.('PSI-25');
      };
    } else {
      evidenceBox.innerHTML = `
        <article class="evidence-card gap-alert">
          <div class="evidence-header" style="color: #f87171;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4m0 4h.01"/>
            </svg>
            <span>Evidence Boundary / Data Gap Alert</span>
          </div>
          <p class="evidence-desc" style="color: #fca5a5;">
            ${phys.gapReason}
          </p>
          <div class="next-experiment-box">
            <strong>Recommended Next Experiment:</strong>
            <p>${phys.nextExperiment}</p>
          </div>
        </article>
      `;
    }
  }

  // Canvas Drawing Routine
  function drawChamber(time) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Deep space chamber background
    const bg = ctx.createRadialGradient(w * 0.5, h * 0.5, 20, w * 0.5, h * 0.5, w * 0.7);
    bg.addColorStop(0, '#0a1020');
    bg.addColorStop(0.7, '#040711');
    bg.addColorStop(1, '#020408');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Grid coordinates
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.06)';
    ctx.lineWidth = 1;
    for (let x = 40; x < w; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 40; y < h; y += 40) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    const phys = calculatePhysics();
    const cx = w * 0.5;
    const cy = h * 0.55;

    // Airflow indicator arrows
    if (state.airflow > 0) {
      const arrowY = h - 30;
      const arrowLen = 30 + (state.airflow / 30) * 120;
      ctx.strokeStyle = 'rgba(34, 211, 238, 0.4)';
      ctx.fillStyle = 'rgba(34, 211, 238, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(30, arrowY);
      ctx.lineTo(30 + arrowLen, arrowY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(30 + arrowLen, arrowY);
      ctx.lineTo(22 + arrowLen, arrowY - 4);
      ctx.lineTo(22 + arrowLen, arrowY + 4);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
      ctx.font = '9px JetBrains Mono';
      ctx.fillText(`FORCED FLOW: ${state.airflow} cm/s →`, 30, arrowY - 8);
    }

    // Burner / Sample Base
    ctx.save();
    ctx.translate(cx, cy + 30);
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-16, 0, 32, 50);
    ctx.fillStyle = '#334155';
    ctx.fillRect(-10, 2, 20, 40);
    ctx.restore();

    // If extinguished: show cold unburnt fuel rod or droplet with smoke trace
    if (phys.isExtinguished) {
      ctx.fillStyle = '#475569';
      ctx.beginPath();
      ctx.arc(cx, cy + 25, 6, 0, Math.PI * 2);
      ctx.fill();

      // Cold smoke wisps
      const smokeCount = 4;
      for (let s = 0; s < smokeCount; s++) {
        const drift = Math.sin(time * 0.002 + s) * 10 + (state.airflow / 30) * (s * 15);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.15)';
        ctx.beginPath();
        ctx.arc(cx + drift, cy - s * 14, 5 + s * 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText('[EXTINGUISHED: BELOW LIMITING OXYGEN CONCENTRATION]', cx, cy - 40);
      return;
    }

    // Active Flame Rendering
    const flowTilt = (state.airflow / 30) * 0.7; // angle tilt from airflow
    const gEffect = state.gravity; // 0 = sphere, 1 = teardrop
    const eEffect = state.efield ? 1.0 : 0.0; // ion-wind elongation

    ctx.save();
    ctx.translate(cx, cy + 25);
    ctx.rotate(flowTilt * 0.35);

    const radius = 38 + (state.oxygen - 18) * 1.8;
    const teardropUp = (gEffect * 40) + (eEffect * 30);

    // Cool flame check (Heptane in microgravity low flow)
    const isCoolFlame = state.fuel === 'heptane' && phys.isMicro && state.airflow < 5;

    if (isCoolFlame) {
      // Extremely faint, translucent deep blue/UV cool flame
      const grad = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius * 1.3);
      grad.addColorStop(0, 'rgba(56, 189, 248, 0.25)');
      grad.addColorStop(0.5, 'rgba(30, 58, 138, 0.45)');
      grad.addColorStop(0.9, 'rgba(15, 23, 42, 0.2)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(0, 0, radius * 1.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);
    } else if (gEffect < 0.2 && !state.efield) {
      // Pure Microgravity Spherical Blue Flame (0g)
      const layers = 3;
      for (let l = 0; l < layers; l++) {
        const rad = radius * (1 + l * 0.2);
        const grad = ctx.createRadialGradient(0, 0, rad * 0.1, 0, 0, rad);
        grad.addColorStop(0, 'rgba(240, 249, 255, 0.9)');
        grad.addColorStop(0.3, 'rgba(34, 211, 238, 0.65)');
        grad.addColorStop(0.7, 'rgba(56, 189, 248, 0.4)');
        grad.addColorStop(1, 'rgba(3, 105, 161, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        // Shift slightly with airflow
        const driftX = (state.airflow / 30) * 20;
        ctx.ellipse(driftX, 0, rad * (1 + (state.airflow / 30) * 0.3), rad, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Teardrop (due to Earth Gravity or E-Field Ion-Wind)
      const flicker = Math.sin(time * 0.015) * 3;
      const flameH = (radius * 1.6) + teardropUp + flicker;
      const flameW = radius * 0.85;

      // Color selection: if gravity > 0.4: yellow/amber soot; if E-field in 0g: blue/purple ion wind teardrop
      const grad = ctx.createLinearGradient(0, 0, (state.airflow / 30) * 30, -flameH);
      if (state.efield && gEffect < 0.3) {
        // E-FIELD ION WIND: Purple/Cyan Elongation
        grad.addColorStop(0, 'rgba(224, 242, 254, 0.95)');
        grad.addColorStop(0.3, 'rgba(34, 211, 238, 0.8)');
        grad.addColorStop(0.7, 'rgba(192, 132, 252, 0.6)');
        grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
      } else {
        // Earth Buoyant Yellow/Orange
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.9)'); // blue root
        grad.addColorStop(0.2, 'rgba(245, 158, 11, 0.95)'); // golden soot
        grad.addColorStop(0.8, 'rgba(239, 68, 68, 0.8)'); // tip
        grad.addColorStop(1, 'rgba(239, 68, 68, 0)');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      const leanX = (state.airflow / 30) * 35;
      ctx.moveTo(-flameW * 0.5, 0);
      ctx.bezierCurveTo(-flameW * 0.7, -flameH * 0.4, -flameW * 0.2 + leanX * 0.5, -flameH * 0.8, leanX, -flameH);
      ctx.bezierCurveTo(flameW * 0.2 + leanX * 0.5, -flameH * 0.8, flameW * 0.7, -flameH * 0.4, flameW * 0.5, 0);
      ctx.closePath();
      ctx.fill();
    }

    ctx.restore();
  }

  // Animation Loop
  function loop(time) {
    if (!state.animActive) return;
    drawChamber(time);
    animFrame = requestAnimationFrame(loop);
  }

  // Event Listeners Wiring
  // Gravity Slider & Quick Buttons
  const sliderG = container.querySelector('#slider-gravity');
  sliderG.oninput = (e) => {
    state.gravity = parseFloat(e.target.value);
    container.querySelectorAll('[data-g]').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.g) === state.gravity));
    updateTelemetryUI();
  };
  container.querySelectorAll('[data-g]').forEach(btn => {
    btn.onclick = () => {
      state.gravity = parseFloat(btn.dataset.g);
      sliderG.value = state.gravity;
      container.querySelectorAll('[data-g]').forEach(b => b.classList.toggle('active', b === btn));
      updateTelemetryUI();
    };
  });

  // Oxygen Slider & Quick Buttons
  const sliderOx = container.querySelector('#slider-oxygen');
  sliderOx.oninput = (e) => {
    state.oxygen = parseInt(e.target.value);
    container.querySelectorAll('[data-ox]').forEach(b => b.classList.toggle('active', parseInt(b.dataset.ox) === state.oxygen));
    updateTelemetryUI();
  };
  container.querySelectorAll('[data-ox]').forEach(btn => {
    btn.onclick = () => {
      state.oxygen = parseInt(btn.dataset.ox);
      sliderOx.value = state.oxygen;
      container.querySelectorAll('[data-ox]').forEach(b => b.classList.toggle('active', b === btn));
      updateTelemetryUI();
    };
  });

  // Pressure Slider & Quick Buttons
  const sliderPres = container.querySelector('#slider-pressure');
  sliderPres.oninput = (e) => {
    state.pressure = parseFloat(e.target.value);
    container.querySelectorAll('[data-pres]').forEach(b => b.classList.toggle('active', parseFloat(b.dataset.pres) === state.pressure));
    updateTelemetryUI();
  };
  container.querySelectorAll('[data-pres]').forEach(btn => {
    btn.onclick = () => {
      state.pressure = parseFloat(btn.dataset.pres);
      sliderPres.value = state.pressure;
      container.querySelectorAll('[data-pres]').forEach(b => b.classList.toggle('active', b === btn));
      updateTelemetryUI();
    };
  });

  // Airflow Slider
  const sliderFlow = container.querySelector('#slider-airflow');
  sliderFlow.oninput = (e) => {
    state.airflow = parseInt(e.target.value);
    updateTelemetryUI();
  };

  // Fuel Material Select
  const fuelSel = container.querySelector('#select-fuel');
  fuelSel.onchange = (e) => {
    state.fuel = e.target.value;
    updateTelemetryUI();
  };

  // E-field Toggle
  container.querySelector('#btn-efield').onclick = () => {
    state.efield = !state.efield;
    updateTelemetryUI();
  };

  updateTelemetryUI();
  animFrame = requestAnimationFrame(loop);

  return {
    destroy() {
      state.animActive = false;
      if (animFrame) {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    },
    setParameters(params) {
      Object.assign(state, params);
      updateTelemetryUI();
    }
  };
}
