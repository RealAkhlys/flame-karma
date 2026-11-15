/**
 * PRESENTATION PITCH MODE ("STAGE MODE")
 * Designed specifically for live hackathon judging and pitch presentations.
 * Keyboard arrow navigation (← / →), full-screen stage layout, and presenter prompts.
 */

export function createPresentationMode({ onClose, onSwitchTab }) {
  let currentSlide = 0;
  let notesExpanded = true;

  const slides = [
    {
      kicker: 'NASA SPACE APPS CHALLENGE 2026',
      title: 'Flame in Freefall: AI-Powered Spacecraft Fire Safety',
      subtitle: 'Transforming 12 Terabytes of Microgravity Combustion Science into Actionable Artemis Mission Safety',
      badge: 'EXECUTIVE OVERVIEW',
      speakerNotes: '🎤 Presenter Cue: Open with the core hook—fire in space behaves completely opposite to our terrestrial intuition. We built both a cinematic storytelling experience and an aerospace engineering workbench grounded in 24 NASA PSI investigations.',
      content: `
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
            <div style="font-family: var(--font-mono); font-size: 32px; color: var(--telemetry-cyan); margin-bottom: 8px;">0-g → 1-g</div>
            <strong style="font-size: 16px; color: #1E2421; display: block; margin-bottom: 8px;">Physics Simulation Lab</strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Interactive multi-variable combustion engine modeling oxygen, pressure, airflow, and E-field body forces.
            </p>
          </div>
        </div>
      `
    },
    {
      kicker: 'MODULE 1: CINEMATIC VISUAL STORY',
      title: 'The Physics Shift: From Teardrop to Blue Sphere',
      subtitle: 'The Collapse of Buoyancy and the Emergence of Pure Molecular Diffusion',
      badge: 'FUNDAMENTAL COMBUSTION PHYSICS',
      speakerNotes: '🎤 Presenter Cue: Point out that without gravity (g=0), buoyant convection is eliminated. The flame becomes a soot-free spherical blue halo. Emphasize that standard smoke detectors fail because microgravity flames produce virtually zero smoke plumes.',
      content: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid var(--telemetry-amber); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber); margin-bottom: 6px;">EARTH NORMAL (1.0g)</div>
            <h3 style="font-size: 20px; color: #1E2421; margin: 0 0 10px;">Convection-Dominated Teardrop</h3>
            <ul style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px;">
              <li>Hot gases expand and rise at 1–2 m/s due to gravity density gradient (F<sub>b</sub> = ρgβΔT).</li>
              <li>High convective flow drags unburnt carbon soot upward into incandescent yellow luminescence.</li>
              <li>Rapid oxygen supply accelerates mass consumption and causes Rayleigh-Taylor flickering.</li>
            </ul>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid var(--telemetry-cyan); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan); margin-bottom: 6px;">MICROGRAVITY (0g ISS)</div>
            <h3 style="font-size: 20px; color: #1E2421; margin: 0 0 10px;">Diffusion-Dominated Blue Sphere</h3>
            <ul style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px;">
              <li>Zero buoyancy (g ≈ 0): combustion is governed solely by Fickian molecular diffusion.</li>
              <li>Soot-free reaction zone emitting faint blue CH/C₂ radical chemiluminescence.</li>
              <li>Combustion products linger in a spherical shell, creating unique low-temperature "cool flame" regimes.</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      kicker: 'MODULE 1 & 2: SCIENTIFIC DISCOVERY',
      title: 'The Lunar Habitat Paradox & Flammability Cliff',
      subtitle: 'Why Artemis Habitats (56 kPa, 34% O₂) Turn Spacecraft Materials Hyper-Flammable',
      badge: 'MISSION ARCHITECTURE HAZARD',
      speakerNotes: '🎤 Presenter Cue: This is a major design paradox. To prevent decompression sickness during moonwalks, the Artemis cabin operates at 34% O2 and 56 kPa. But our data reveals this drops the Limiting Oxygen Concentration, causing Nomex and acrylic to burn up to 4x faster!',
      content: `
        <div style="display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 30px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <h4 style="font-size: 16px; color: #1E2421; margin: 0 0 14px;">The Artemis Cabin Engineering Tradeoff:</h4>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="background: #EAF2EE; border-left: 3px solid #214E3C; padding: 10px 14px; font-size: 13px; color: #1E2421;">
                <strong>EVA Decompression Mitigation:</strong> Lower cabin pressure (56 kPa) matches lunar EVA spacesuits, slashing pre-breathe time from 4 hours to 20 minutes.
              </div>
              <div style="background: #FDF2F2; border-left: 3px solid #B91C1C; padding: 10px 14px; font-size: 13px; color: #7F1D1D;">
                <strong>The Flammability Cliff:</strong> At 34% O₂, Limiting Oxygen Concentration (LOC) drops by over 5%. Materials certified as "self-extinguishing" on ISS ignite effortlessly and propagate rapidly.
              </div>
              <div style="background: #FEF7EE; border-left: 3px solid #A66E28; padding: 10px 14px; font-size: 13px; color: #78350F;">
                <strong>Partial Gravity Hazard:</strong> Lunar gravity (0.16g) creates a weak buoyant plume that replenishes O₂ without providing convective flame cooling.
              </div>
            </div>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-radius: 12px; padding: 24px; display: flex; flex-direction: column; justify-content: center; box-shadow: var(--space-shadow);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-cyan); margin-bottom: 8px;">MEASURED SPREAD ACCELERATION</div>
            <div style="font-family: var(--font-mono); font-size: 42px; font-weight: 700; color: #B91C1C; line-height: 1;">+240%</div>
            <span style="font-size: 13px; color: var(--space-text-secondary); margin-top: 8px;">
              Increase in PMMA flame propagation velocity between 21% O₂ (ISS) and 34% O₂ (Lunar Artemis).
            </span>
            <div style="margin-top: 20px; font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber);">
              NASA NTRS Citation: <strong>NTRS-20190028412 & PSI-25</strong>
            </div>
          </div>
        </div>
      `
    },
    {
      kicker: 'MODULE 2 & 3: ENGINEERING WORKBENCH',
      title: 'Interactive Flame Lab & PSI Mission Ranker',
      subtitle: 'Zero-Hallucination Physics Modeling with Strict Evidence Boundaries',
      badge: 'AEROSPACE WORKBENCH',
      speakerNotes: '🎤 Presenter Cue: Highlight our zero-hallucination philosophy. When users test regimes outside NASA experimental flight data (e.g. 0.16g with 35% O2 and high draft), our platform triggers an explicit "Evidence Gap Alert" proposing the exact test matrix for the next NASA mission.',
      content: `
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid var(--telemetry-cyan); border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: var(--telemetry-cyan); font-size: 15px; display: block; margin-bottom: 8px;">
              ⚡ E-FIELD Body Forces
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Simulates ACME E-FIELD Flames 5 kV DC potential, demonstrating how electrostatic forces on chemi-ions deform spherical microgravity flames.
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid #B91C1C; border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: #B91C1C; font-size: 15px; display: block; margin-bottom: 8px;">
              ⚠️ Evidence Boundary Alerts
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Replaces ungrounded AI hallucinations with transparent NASA data boundaries and recommended next flight experiments (e.g. SoFIE-II).
            </p>
          </div>

          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-top: 3px solid #214E3C; border-radius: 12px; padding: 22px; box-shadow: var(--space-shadow);">
            <strong style="color: #214E3C; font-size: 15px; display: block; margin-bottom: 8px;">
              📊 Dynamic Mission Ranker
            </strong>
            <p style="font-size: 13px; color: var(--space-text-secondary); line-height: 1.6; margin: 0;">
              Weight-based ranking across Material Screening, Detection, Extinction, and Predictive Modeling with instant JSON/CSV export.
            </p>
          </div>
        </div>
      `
    },
    {
      kicker: 'MODULE 4 & 5: ACTION & TERRESTRIAL IMPACT',
      title: 'AI Safety Protocols & Terrestrial Spin-Offs',
      subtitle: 'From ISS Flight Rule 7.4.2 to Server Rooms, Hydrogen Stations, and Firefighter Gear',
      badge: 'MISSION TO EARTH',
      speakerNotes: '🎤 Presenter Cue: Close strong on operational utility. Show the Astronaut Emergency Action Card—step 1 is always HVAC shutdown to starve the flame. Finally, show how NASA microgravity research protects Earth: fine water-mist for server rooms and optical detectors for clean hydrogen plants.',
      content: `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 30px; text-align: left;">
          <div style="background: #FFFFFF; border: 1px solid var(--space-border); border-left: 3px solid #B91C1C; border-radius: 12px; padding: 24px; box-shadow: var(--space-shadow);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <strong style="color: #B91C1C; font-size: 16px;">Astronaut Quick-Action Card</strong>
              <span class="telemetry-badge badge-ntrs">FLIGHT RULE 7.4.2</span>
            </div>
            <ol style="color: var(--space-text-secondary); font-size: 13px; line-height: 1.8; padding-left: 20px; margin: 0;">
              <li><strong>Immediate HVAC Trip:</strong> Choke forced draft to trap flame in its own CO₂ shell.</li>
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
      `
    }
  ];

  const pitchEl = document.createElement('div');
  pitchEl.className = 'pitch-overlay';
  pitchEl.id = 'pitch-mode-overlay';

  function renderSlide() {
    const slide = slides[currentSlide];

    pitchEl.innerHTML = `
      <header class="pitch-top-bar">
        <div class="pitch-brand-badge">
          <svg width="24" height="24" viewBox="0 0 40 40" aria-hidden="true" style="stroke: var(--telemetry-cyan); fill: none; stroke-width: 2;">
            <circle cx="20" cy="20" r="11"/>
            <ellipse cx="20" cy="20" rx="18" ry="7" transform="rotate(-35 20 20)"/>
            <circle cx="32" cy="10" r="2" fill="var(--telemetry-cyan)"/>
          </svg>
          <span>FLAME IN FREEFALL · PRESENTATION STAGE MODE</span>
        </div>

        <div class="pitch-slide-tracker">
          ${slides.map((_, i) => `
            <div class="pitch-bullet ${i === currentSlide ? 'active' : ''}" data-slide="${i}"></div>
          `).join('')}
        </div>

        <button class="pitch-exit-btn" id="btn-pitch-exit">
          Exit Pitch Mode [ESC]
        </button>
      </header>

      <main class="pitch-stage-content">
        <div class="pitch-slide-view">
          <div style="text-align: center; max-width: 960px; margin: 0 auto;">
            <span class="telemetry-badge badge-psi" style="margin-bottom: 12px;">
              ${slide.badge} · SLIDE 0${currentSlide + 1} OF 0${slides.length}
            </span>
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-amber); letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">
              ${slide.kicker}
            </div>
            <h1 style="font-family: var(--font-display); font-size: clamp(32px, 4.2vw, 52px); font-weight: 700; letter-spacing: -1.2px; margin: 0 0 16px; color: #1E2421; line-height: 1.15;">
              ${slide.title}
            </h1>
            <p style="font-size: 16px; color: var(--space-text-secondary); margin: 0 auto; max-width: 820px; line-height: 1.6;">
              ${slide.subtitle}
            </p>
          </div>

          ${slide.content}
        </div>
      </main>

      <footer class="pitch-bottom-hud">
        <div class="pitch-notes-drawer ${notesExpanded ? '' : 'collapsed'}" id="pitch-notes-drawer">
          <p class="pitch-speaker-notes">
            ${slide.speakerNotes}
          </p>
        </div>

        <div class="pitch-bottom-bar">
          <button class="pitch-toggle-notes-btn" id="btn-toggle-notes" title="Toggle Presenter Notes">
            <span>🎤 Notes ${notesExpanded ? '▼' : '▲'}</span>
          </button>

          <div class="pitch-nav-arrows">
            <button class="pitch-arrow-btn" id="btn-pitch-prev" ${currentSlide === 0 ? 'disabled' : ''}>
              ← Previous
            </button>
            <button class="pitch-arrow-btn" id="btn-pitch-next" ${currentSlide === slides.length - 1 ? 'disabled' : ''}>
              Next Slide →
            </button>
          </div>
        </div>
      </footer>
    `;

    // Hook events
    pitchEl.querySelector('#btn-pitch-exit').onclick = exit;
    pitchEl.querySelector('#btn-pitch-prev').onclick = prev;
    pitchEl.querySelector('#btn-pitch-next').onclick = next;

    const toggleNotesBtn = pitchEl.querySelector('#btn-toggle-notes');
    if (toggleNotesBtn) {
      toggleNotesBtn.onclick = () => {
        notesExpanded = !notesExpanded;
        const drawer = pitchEl.querySelector('#pitch-notes-drawer');
        if (drawer) {
          drawer.classList.toggle('collapsed', !notesExpanded);
        }
        toggleNotesBtn.innerHTML = `<span>🎤 Notes ${notesExpanded ? '▼' : '▲'}</span>`;
      };
    }

    pitchEl.querySelectorAll('.pitch-bullet').forEach(bullet => {
      bullet.onclick = () => {
        currentSlide = parseInt(bullet.dataset.slide);
        renderSlide();
      };
    });
  }

  function next() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      renderSlide();
    }
  }

  function prev() {
    if (currentSlide > 0) {
      currentSlide--;
      renderSlide();
    }
  }

  function exit() {
    document.removeEventListener('keydown', handleKey);
    document.body.classList.remove('pitch-active');
    pitchEl.remove();
    onClose?.();
  }

  function handleKey(e) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      next();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prev();
    } else if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
      e.preventDefault();
      exit();
    }
  }

  document.body.classList.add('pitch-active');
  document.body.appendChild(pitchEl);
  document.addEventListener('keydown', handleKey);
  renderSlide();

  return {
    exit,
    goToSlide(idx) {
      currentSlide = idx;
      renderSlide();
    }
  };
}
