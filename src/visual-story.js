/**
 * MODULE 1: VISUAL STORY ("FROM TEARDROP TO BLUE SPHERE")
 * 4 Interactive chapters for live hackathon presentation & scientific storytelling.
 * Grounded in NASA PSI Combustion Science & NTRS reports.
 */

export function createVisualStory(container, { onOpenLab, onOpenData, onOpenStudy } = {}) {
  let activeChapter = 1;
  let animId = null;
  let gravitySliderVal = 0.0; // 0g to 1g
  let oxygenPlotVal = 34; // Lunar target %

  container.innerHTML = `
    <div class="story-container">
      <header class="story-header">
        <span class="story-kicker">CINEMATIC SCIENTIFIC STORY</span>
        <h1>From Teardrop to Blue Sphere</h1>
        <p>
          Microgravity fundamentally breaks our terrestrial intuition of fire. Without buoyant convection, 
          flames undergo a radical metamorphosis—from turbulent, flickering yellow plumes to quiet, 
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
  `;

  const bodyEl = container.querySelector('#story-chapter-body');

  function renderChapter() {
    if (animId) {
      cancelAnimationFrame(animId);
      animId = null;
    }

    container.querySelectorAll('.story-nav-item').forEach(b => {
      b.classList.toggle('active', Number(b.dataset.chapter) === activeChapter);
    });

    switch (activeChapter) {
      case 1:
        renderChapter1(bodyEl);
        break;
      case 2:
        renderChapter2(bodyEl);
        break;
      case 3:
        renderChapter3(bodyEl);
        break;
      case 4:
        renderChapter4(bodyEl);
        break;
    }
  }

  // --- CHAPTER 1: THE PHYSICS SHIFT (1g vs 0g) ---
  function renderChapter1(root) {
    root.innerHTML = `
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 01</span>
          <span class="telemetry-badge badge-psi">NASA PSI-69 & PSI-25 GROUNDING</span>
        </div>
        <h2 class="chapter-title">The Physics Shift: Buoyancy vs. Pure Diffusion</h2>
        <p class="chapter-intro">
          On Earth, gravity creates a density differential: hot combustion gases expand, become buoyant, and rush upward at 1–2 m/s, 
          drawing fresh oxygen into the flame base and carrying unburnt carbon soot upward into an incandescent yellow teardrop. 
          In microgravity (g ≈ 0), buoyancy vanishes. Molecular diffusion alone feeds the flame, forming a spherical, soot-free blue halo.
        </p>

        <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid var(--space-border); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <label style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-cyan); text-transform: uppercase;">
              Interactive Gravity Morph: <span id="grav-morph-val">${gravitySliderVal.toFixed(2)} g</span>
            </label>
            <div style="display: flex; gap: 8px;">
              <button class="quick-chip ${gravitySliderVal === 0 ? 'active' : ''}" id="btn-grav-0">0g Microgravity (ISS)</button>
              <button class="quick-chip ${gravitySliderVal === 0.16 ? 'active' : ''}" id="btn-grav-moon">0.16g Lunar</button>
              <button class="quick-chip ${gravitySliderVal === 1 ? 'active' : ''}" id="btn-grav-1">1.0g Earth Normal</button>
            </div>
          </div>
          <input type="range" id="grav-slider" min="0" max="1" step="0.02" value="${gravitySliderVal}" style="width: 100%; accent-color: var(--telemetry-cyan);">
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
              <li><strong>Transport:</strong> Natural buoyant convection (F<sub>b</sub> = ρgβΔT)</li>
              <li><strong>Shape & Color:</strong> Elongated teardrop, flickering tip, bright yellow soot incandescence (1500–1900 K)</li>
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
              <li><strong>Transport:</strong> Pure molecular diffusion (Fick's law: J = −D∇C)</li>
              <li><strong>Shape & Color:</strong> Perfect sphere, silent, non-flickering, translucent blue CH/C₂ chemiluminescence</li>
              <li><strong>Combustion Speed:</strong> Low reaction rate, combustion products (CO<sub>2</sub>, H<sub>2</sub>O) linger around flame shell</li>
              <li><strong>Extinction Limit:</strong> Radiative cooling extinction; can transition into "cool flame" (600–800 K)</li>
            </ul>
          </article>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <div style="font-size: 13px; color: var(--space-text-secondary);">
            Primary Reference: <strong>NASA Glenn Research Center — Physical Sciences Informatics (PSI-69 FLEX & PSI-25 BASS)</strong>
          </div>
          <button class="primary" id="btn-to-ch2" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
            Next Chapter: The Lunar Habitat Paradox →
          </button>
        </div>
      </section>
    `;

    const canvasEarth = root.querySelector('#canvas-ch1-earth');
    const canvasMicro = root.querySelector('#canvas-ch1-micro');
    const gravSlider = root.querySelector('#grav-slider');
    const gravValEl = root.querySelector('#grav-morph-val');

    function updateRightCardLabels(val) {
      const titleEl = root.querySelector('#right-card-title');
      const badgeEl = root.querySelector('#right-card-badge');
      if (!titleEl || !badgeEl) return;
      if (val <= 0.05) {
        titleEl.textContent = `Microgravity Flame (${val.toFixed(2)}g)`;
        badgeEl.textContent = 'DIFFUSION-DOMINATED';
        badgeEl.className = 'telemetry-badge badge-psi';
        badgeEl.removeAttribute('style');
      } else if (val <= 0.45) {
        titleEl.textContent = `Partial-Gravity Flame (${val.toFixed(2)}g)`;
        badgeEl.textContent = 'TRANSITIONAL CONVECTION';
        badgeEl.className = 'telemetry-badge';
        badgeEl.setAttribute('style', 'background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);');
      } else {
        titleEl.textContent = `Elevated-Gravity Flame (${val.toFixed(2)}g)`;
        badgeEl.textContent = 'BUOYANCY-DOMINATED';
        badgeEl.className = 'telemetry-badge';
        badgeEl.setAttribute('style', 'background: rgba(245,158,11,0.15); color: #fbbf24; border: 1px solid rgba(245,158,11,0.3);');
      }
    }

    gravSlider.oninput = (e) => {
      gravitySliderVal = parseFloat(e.target.value);
      gravValEl.textContent = `${gravitySliderVal.toFixed(2)} g`;
      root.querySelectorAll('.quick-chip').forEach(c => c.classList.remove('active'));
      updateRightCardLabels(gravitySliderVal);
    };

    root.querySelector('#btn-grav-0').onclick = () => {
      gravitySliderVal = 0.0;
      gravSlider.value = 0.0;
      gravValEl.textContent = '0.00 g';
      updateRightCardLabels(gravitySliderVal);
    };
    root.querySelector('#btn-grav-moon').onclick = () => {
      gravitySliderVal = 0.16;
      gravSlider.value = 0.16;
      gravValEl.textContent = '0.16 g';
      updateRightCardLabels(gravitySliderVal);
    };
    root.querySelector('#btn-grav-1').onclick = () => {
      gravitySliderVal = 1.0;
      gravSlider.value = 1.0;
      gravValEl.textContent = '1.00 g';
      updateRightCardLabels(gravitySliderVal);
    };

    updateRightCardLabels(gravitySliderVal);

    root.querySelector('#btn-to-ch2').onclick = () => {
      activeChapter = 2;
      renderChapter();
    };

    // Canvas animation loop
    function animateSplit(time) {
      if (!canvasEarth || !canvasMicro) return;
      drawEarthFlame(canvasEarth, time);
      drawMorphMicroFlame(canvasMicro, time, gravitySliderVal);
      animId = requestAnimationFrame(animateSplit);
    }
    animId = requestAnimationFrame(animateSplit);
  }

  function drawEarthFlame(canvas, time) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);

    // Dark chamber background
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, w, h);

    // Candle base
    const cx = w * 0.5;
    const cy = h * 0.78;
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(cx - 14, cy, 28, 50);
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx - 2, cy - 14, 4, 14);

    // Flickering Earth Flame (Teardrop)
    const flicker = Math.sin(time * 0.012) * 4 + Math.sin(time * 0.027) * 2;
    const flameH = 90 + flicker * 2;
    const flameW = 28 + Math.cos(time * 0.018) * 2;

    ctx.save();
    ctx.translate(cx, cy - 14);

    // Yellow outer soot envelope
    const gradOuter = ctx.createLinearGradient(0, 0, 0, -flameH);
    gradOuter.addColorStop(0, 'rgba(56, 189, 248, 0.9)'); // blue root
    gradOuter.addColorStop(0.2, 'rgba(245, 158, 11, 0.95)'); // golden yellow
    gradOuter.addColorStop(0.7, 'rgba(239, 68, 68, 0.85)'); // flame tip
    gradOuter.addColorStop(1, 'rgba(239, 68, 68, 0.0)');

    ctx.fillStyle = gradOuter;
    ctx.beginPath();
    ctx.moveTo(-flameW * 0.5, 0);
    ctx.bezierCurveTo(-flameW * 0.8, -flameH * 0.4, -flameW * 0.2, -flameH * 0.8, flicker * 0.5, -flameH);
    ctx.bezierCurveTo(flameW * 0.2, -flameH * 0.8, flameW * 0.8, -flameH * 0.4, flameW * 0.5, 0);
    ctx.closePath();
    ctx.fill();

    // Hot inner core (white/cyan)
    const gradInner = ctx.createLinearGradient(0, 0, 0, -flameH * 0.5);
    gradInner.addColorStop(0, 'rgba(224, 242, 254, 0.95)');
    gradInner.addColorStop(1, 'rgba(251, 191, 36, 0.0)');
    ctx.fillStyle = gradInner;
    ctx.beginPath();
    ctx.ellipse(0, -flameH * 0.25, flameW * 0.3, flameH * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  function drawMorphMicroFlame(canvas, time, g) {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#050811';
    ctx.fillRect(0, 0, w, h);

    const cx = w * 0.5;
    const cy = h * 0.55;

    // Center fuel droplet / burner
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();

    // Morphing shape: as g increases from 0 -> 1, spherical flame pulls upward into teardrop
    const radius = 54;
    const elongation = 1.0 + g * 1.2;
    const upwardShift = g * 35;
    const sootYellowMix = g; // 0 is pure cyan/blue, 1 is yellow

    ctx.save();
    ctx.translate(cx, cy - upwardShift);

    // Multi-layer translucent diffusion flame
    const layers = 3;
    for (let i = 0; i < layers; i++) {
      const layerScale = 1.0 + i * 0.18;
      const grad = ctx.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius * layerScale);

      if (sootYellowMix < 0.3) {
        grad.addColorStop(0, 'rgba(224, 242, 254, 0.8)');
        grad.addColorStop(0.4, 'rgba(34, 211, 238, 0.6)');
        grad.addColorStop(0.8, 'rgba(56, 189, 248, 0.35)');
        grad.addColorStop(1, 'rgba(30, 58, 138, 0)');
      } else {
        grad.addColorStop(0, 'rgba(254, 243, 199, 0.8)');
        grad.addColorStop(0.4, `rgba(${Math.round(34 + 200 * sootYellowMix)}, ${Math.round(211 - 60 * sootYellowMix)}, 238, 0.6)`);
        grad.addColorStop(0.8, 'rgba(245, 158, 11, 0.35)');
        grad.addColorStop(1, 'rgba(180, 83, 9, 0)');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Ellipse morphing
      ctx.ellipse(0, 0, radius * layerScale, radius * layerScale * elongation, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outer glow ring
    ctx.strokeStyle = sootYellowMix < 0.4 ? 'rgba(34, 211, 238, 0.5)' : 'rgba(245, 158, 11, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * 1.1, radius * 1.1 * elongation, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  // --- CHAPTER 2: THE LUNAR HABITAT PARADOX ---
  function renderChapter2(root) {
    root.innerHTML = `
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 02</span>
          <span class="telemetry-badge badge-ntrs">NASA-STD-6001B & ARTEMIS MISSION ARCHITECTURE</span>
        </div>
        <h2 class="chapter-title">The Lunar Habitat Paradox: EVA Decompression vs. Extreme Flammability</h2>
        <p class="chapter-intro">
          NASA's Artemis lunar surface habitats plan for cabin pressures of <strong>56–70 kPa (8.2 psi)</strong> with elevated oxygen concentrations of <strong>32–34% O₂</strong>. 
          This maintains identical alveolar partial pressure of oxygen for crew respiration while drastically reducing the 4-hour pre-breathe time required to prevent decompression sickness (the "bends") before moonwalks. 
          <strong>The Paradox:</strong> At 34% O₂, spacecraft materials (Nomex, PMMA acrylic, wire insulation) ignite at vastly lower energy thresholds and burn up to 4× faster.
        </p>

        <div class="lunar-paradox-layout">
          <div class="paradox-interactive-plot">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
              <span style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">
                OXYGEN FRACTION vs FLAME SPREAD REGIMES
              </span>
              <span class="telemetry-num" style="color: var(--telemetry-amber); font-weight: 700;">
                Active Cabin: ${oxygenPlotVal}% O₂
              </span>
            </div>

            <svg viewBox="0 0 540 260" style="width: 100%; height: auto; display: block;">
              <!-- Grid lines -->
              <line x1="50" y1="20" x2="50" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <line x1="50" y1="210" x2="510" y2="210" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
              <line x1="50" y1="115" x2="510" y2="115" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4"/>
              
              <!-- Shaded Artemis Hazard Zone (30% to 36% O2) -->
              <rect x="290" y="20" width="180" height="190" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.3)" stroke-width="1"/>
              <text x="380" y="40" fill="#f87171" font-family="JetBrains Mono" font-size="10" text-anchor="middle">ARTEMIS LUNAR ZONE (32-34% O₂)</text>

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
              <line x1="${50 + (oxygenPlotVal - 18) * 25.5}" y1="20" x2="${50 + (oxygenPlotVal - 18) * 25.5}" y2="210" stroke="#ef4444" stroke-width="2"/>
              <circle cx="${50 + (oxygenPlotVal - 18) * 25.5}" cy="${190 - (oxygenPlotVal - 18) * 9.5}" r="6" fill="#ef4444" stroke="#fff" stroke-width="2"/>

              <!-- Axis Labels -->
              <text x="280" y="250" fill="#94a3b8" font-family="Space Grotesk" font-size="11" text-anchor="middle">Atmospheric Oxygen Concentration (%)</text>
              <text x="20" y="115" fill="#94a3b8" font-family="Space Grotesk" font-size="11" transform="rotate(-90 20 115)" text-anchor="middle">Spread Rate (mm/s)</text>
            </svg>

            <div style="margin-top: 16px;">
              <label style="font-family: var(--font-mono); font-size: 11px; color: var(--space-text-secondary); display: block; margin-bottom: 6px;">
                Slide Oxygen Level: <strong>${oxygenPlotVal}% O₂</strong>
              </label>
              <input type="range" id="ox-slider" min="18" max="36" step="1" value="${oxygenPlotVal}" style="width: 100%; accent-color: var(--telemetry-amber);">
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
              Standard NASA flammability acceptance tests (<strong>NASA-STD-6001B Test 1</strong>) historically tested upward flame propagation at Earth atmospheric pressure (101.3 kPa, 21% O₂).
            </p>
            <p>
              When pressure is lowered to 56 kPa and O₂ elevated to 34%, the <em>Limiting Oxygen Concentration (LOC)</em> drops precipitously. Materials certified as "self-extinguishing" on the ISS can burn continuously on the Lunar surface.
            </p>
            <div style="background: rgba(0,0,0,0.4); border-radius: 6px; padding: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">
              <div>ΔLOC Margin at 34% O₂: <strong style="color: #ef4444;">+12.4% (EXTREME HAZARD)</strong></div>
              <div>Artemis EVA Suit Pre-breathe: <strong>20 min (vs 240 min on ISS)</strong></div>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <button class="secondary" id="btn-back-ch1">← Back to Chapter 1</button>
          <button class="primary" id="btn-to-ch3" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
            Next Chapter: Hidden Space Hazards →
          </button>
        </div>
      </section>
    `;

    const oxSlider = root.querySelector('#ox-slider');
    oxSlider.oninput = (e) => {
      oxygenPlotVal = parseInt(e.target.value);
      renderChapter2(root);
    };

    root.querySelector('#btn-back-ch1').onclick = () => {
      activeChapter = 1;
      renderChapter();
    };
    root.querySelector('#btn-to-ch3').onclick = () => {
      activeChapter = 3;
      renderChapter();
    };
  }

  // --- CHAPTER 3: HIDDEN HAZARDS IN SPACE ---
  function renderChapter3(root) {
    let activeHotspot = 'stealth';

    const hotspotDetails = {
      stealth: {
        title: 'Near-Invisible Blue Flame & Silent Smoldering',
        psi: 'PSI-101 / SAME-R & PSI-69 FLEX',
        text: 'Because microgravity flames produce virtually zero glowing carbon soot, emissions peak in the ultraviolet and faint blue CH/C₂ bands. Under bright white ISS cabin LED lighting, a 20 cm open flame is almost completely invisible to the astronaut eye. Flameless smoldering can travel deep inside cable ducts for hours without tripping optical obscuration detectors.'
      },
      hvac: {
        title: 'HVAC Ventilation Fire Jet Metamorphosis',
        psi: 'PSI-98 Saffire-I & PSI-25 BASS-II',
        text: 'Without convection, a stationary microgravity flame surrounds itself with its own combustion products (CO₂ and H₂O), starving itself of oxygen. However, when the spacecraft Environmental Control and Life Support System (ECLSS) fans circulate air at typical cabin speeds (15–25 cm/s), the dormant sphere is fed fresh oxidizer, transforming into a high-speed, directional fire jet spreading across equipment racks.'
      },
      eclss: {
        title: 'Toxic Accumulation in Hermetically Sealed Cabin Loops',
        psi: 'PSI-100 Saffire-III & Apollo/Mir Archival Logs',
        text: 'Unlike on Earth where smoke ventilates outside, a spacecraft is a closed hermetic loop. Combustion of Teflon (PTFE), Kapton, and polyurethane releases lethal hydrofluoric acid (HF), hydrogen cyanide (HCN), and carbon monoxide (CO). The scrubber beds become saturated within minutes, threatening catastrophic crew incapacitation even after flame extinguishment.'
      }
    };

    function renderHotspotUI() {
      const data = hotspotDetails[activeHotspot];
      root.innerHTML = `
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
            <div class="hotspot-card ${activeHotspot === 'stealth' ? 'active' : ''}" data-hotspot="stealth">
              <div class="hotspot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <h4>01. Invisible Blue Flame</h4>
              <p>Zero soot luminescence; undetectable by standard visual observation or optical smoke detectors.</p>
            </div>

            <div class="hotspot-card ${activeHotspot === 'hvac' ? 'active' : ''}" data-hotspot="hvac">
              <div class="hotspot-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
                </svg>
              </div>
              <h4>02. HVAC Ventilation Jet</h4>
              <p>Cabin airflow acts as a forced-draft blowtorch, converting dormant embers into high-velocity fire fronts.</p>
            </div>

            <div class="hotspot-card ${activeHotspot === 'eclss' ? 'active' : ''}" data-hotspot="eclss">
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
              <span class="telemetry-badge badge-psi">${data.psi}</span>
              <span style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan);">DETAILED FAILURE ARCHITECTURE</span>
            </div>
            <h3 style="font-size: 22px; color: #fff; margin: 0 0 12px;">${data.title}</h3>
            <p style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); margin: 0 0 20px;">
              ${data.text}
            </p>
            <div style="display: flex; gap: 12px;">
              <button class="secondary" id="btn-hotspot-data">Explore Underlying PSI Datasets →</button>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
            <button class="secondary" id="btn-back-ch2">← Back to Chapter 2</button>
            <button class="primary" id="btn-to-ch4" style="background: var(--telemetry-cyan); color: #070b14; font-weight: 600; padding: 10px 20px; border-radius: 6px; cursor: pointer; border: none;">
              Next Chapter: 12 TB PSI Data to Action →
            </button>
          </div>
        </section>
      `;

      root.querySelectorAll('.hotspot-card').forEach(c => {
        c.onclick = () => {
          activeHotspot = c.dataset.hotspot;
          renderHotspotUI();
        };
      });

      root.querySelector('#btn-back-ch2').onclick = () => {
        activeChapter = 2;
        renderChapter();
      };
      root.querySelector('#btn-to-ch4').onclick = () => {
        activeChapter = 4;
        renderChapter();
      };
      root.querySelector('#btn-hotspot-data').onclick = () => {
        onOpenData?.('PSI-98');
      };
    }

    renderHotspotUI();
  }

  // --- CHAPTER 4: 12 TB PSI DATA INTO ACTION ---
  function renderChapter4(root) {
    root.innerHTML = `
      <section class="story-chapter">
        <div class="chapter-kicker-row">
          <span class="chapter-num">CHAPTER 04</span>
          <span class="telemetry-badge badge-psi">NASA PHYSICAL SCIENCES INFORMATICS PIPELINE</span>
        </div>
        <h2 class="chapter-title">Turning 12 Terabytes of PSI Data into Actionable Crew Safety</h2>
        <p class="chapter-intro">
          NASA’s Physical Sciences Informatics (PSI) repository stores over 12 terabytes of flight experiment telemetry, 
          high-speed shadowgraph imagery, and chemiluminescence spectra from the ISS, Cygnus, and drop towers. 
          Here is how raw combustion science is distilled into flight-ready safety protocols.
        </p>

        <div class="funnel-pipeline">
          <div class="funnel-step">
            <div class="funnel-step-arrow">→</div>
            <h3>24</h3>
            <strong>Raw PSI Investigations</strong>
            <p>BASS, Saffire, FLEX, ACME, SoFIE flight campaigns covering solid, droplet, and gaseous fuels in true microgravity.</p>
          </div>

          <div class="funnel-step">
            <div class="funnel-step-arrow">→</div>
            <h3>12 TB</h3>
            <strong>Sensor Telemetry & Video</strong>
            <p>Thermocouple matrices, radiometer spectra, O₂/CO₂ mass spectrometer channels, and particle obscuration traces.</p>
          </div>

          <div class="funnel-step">
            <div class="funnel-step-arrow">→</div>
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
              ⚡ Launch Interactive Flame Lab
            </button>
            <button class="secondary" id="btn-launch-mission-ranker" style="border-color: var(--telemetry-blue); color: var(--telemetry-blue); padding: 12px 24px;">
              📊 Open PSI Mission Ranker
            </button>
          </div>
        </div>

        <div style="display: flex; justify-content: flex-start; align-items: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid var(--space-border);">
          <button class="secondary" id="btn-back-ch3">← Back to Chapter 3</button>
        </div>
      </section>
    `;

    root.querySelector('#btn-back-ch3').onclick = () => {
      activeChapter = 3;
      renderChapter();
    };
    root.querySelector('#btn-launch-flame-lab').onclick = () => {
      onOpenLab?.();
    };
    root.querySelector('#btn-launch-mission-ranker').onclick = () => {
      onOpenData?.('PSI-69');
    };
  }

  // Setup tab click listeners
  container.querySelectorAll('.story-nav-item').forEach(btn => {
    btn.onclick = () => {
      activeChapter = Number(btn.dataset.chapter);
      renderChapter();
    };
  });

  renderChapter();

  return {
    destroy() {
      if (animId) {
        cancelAnimationFrame(animId);
        animId = null;
      }
    },
    goToChapter(num) {
      activeChapter = num;
      renderChapter();
    }
  };
}
