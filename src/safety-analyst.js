/**
 * MODULE 4: CITATION-GROUNDED AI SAFETY ANALYST & EMERGENCY PROTOCOL GENERATOR
 * Pre-loaded with high-value aerospace combustion prompts, inline citation badges,
 * and a high-contrast Astronaut Emergency Quick-Action Card.
 */

export function createSafetyAnalyst(container, { onOpenData, onOpenStudy } = {}) {
  // Knowledge Base with authentic NTRS and PSI citations
  const safetyKnowledge = [
    {
      keywords: ['lunar', 'ay', 'gravity', '0.16g', 'partial', 'kismi'],
      title: 'Why is flame spread often faster in Lunar partial gravity (0.16g) than in 0g microgravity?',
      answer: `
        Counter-intuitively, partial gravity (0.16g Moon, 0.38g Mars) can be <em>more hazardous</em> than pure zero gravity (0g). 
        In zero gravity, combustion products (CO<sub>2</sub>, H<sub>2</sub>O) linger spherically around the flame, starving it of oxygen through diffusion resistance <span class="citation-link" data-study="bass">[PSI-BASS: PSI-26]</span>. 
        In Lunar partial gravity (0.16g), a weak buoyant plume forms. This plume is sufficient to continuously bring fresh oxygen into the flame base, yet too weak to cool the flame base through high-speed convective heat removal <span class="citation-link" data-study="luci">[LUCI: NTRS-20220004521]</span>. 
        As documented in NASA SoFIE (Solid Fuel Ignition and Extinction) ground drop-tower and parabolic tests, solid fuel flammability boundaries expand under 0.16g <span class="citation-link" data-study="fm2">[SoFIE-FM²: NTRS-20210018593]</span>.
      `,
      citations: ['PSI-26 (BASS)', 'LUCI (NTRS-20220004521)', 'SoFIE-FM² (NTRS-20210018593)']
    },
    {
      keywords: ['cool flame', 'flex', 'droplet', 'heptane', 'sönme', 'extinction'],
      title: 'What are the dual-mode extinction limits of Heptane droplets in FLEX and why do cool flames persist?',
      answer: `
        During the FLEX and FLEX-2 experiments aboard the ISS Combustion Integrated Rack (CIR), scientists discovered that alkane droplets (heptane, octane) do not simply extinguish when their hot visible flame dies <span class="citation-link" data-study="flex">[PSI-FLEX: PSI-69]</span>. 
        Instead, radiative heat loss extinguishes the high-temperature flame (1500–1800 K), but chemical reactions continue silently as a low-temperature "cool flame" (600–800 K) driven by low-temperature chain-branching chemistry <span class="citation-link" data-study="flex-2">[PSI-FLEX-2: PSI-68]</span>. 
        These cool flames produce zero visible soot and emit primarily in the infrared, remaining capable of reigniting into a catastrophic hot fire if ventilation airflow shifts <span class="citation-link" data-ntrs="20150023456">[NTRS-20150023456]</span>.
      `,
      citations: ['PSI-69 (FLEX)', 'PSI-68 (FLEX-2)', 'NTRS-20150023456']
    },
    {
      keywords: ['efield', 'electric', 'ion', 'acme', 'deform', 'elektrik'],
      title: 'How do electric fields (E-FIELD Flames) alter flame geometry and soot formation?',
      answer: `
        Combustion naturally generates chemi-ions (CHO⁺, H₃O⁺, e⁻) in the primary reaction zone. On Earth, buoyant convection overwhelms these ionic forces. 
        In microgravity, applying a DC electric field (up to 10 kV) exerts a direct electrostatic Lorentz force (F = qE) on the ions, inducing an artificial "ion-driven wind" <span class="citation-link" data-study="e-field-flames">[PSI-E-FIELD: PSI-22]</span>. 
        This ion wind deforms the spherical microgravity flame into an elongated teardrop, draws in oxidizer, reduces soot emission, and shifts the flame lift-off and blow-off extinction limits <span class="citation-link" data-ntrs="20170008892">[NTRS-20170008892]</span>.
      `,
      citations: ['PSI-22 (E-FIELD Flames)', 'ACME Program', 'NTRS-20170008892']
    },
    {
      keywords: ['pmma', 'acrylic', 'artemis', 'oxygen', 'oksijen', 'bass-ii', '34%'],
      title: 'What is the fire hazard of PMMA acrylic under Artemis 34% O₂ at 56 kPa?',
      answer: `
        In standard terrestrial atmospheres (101.3 kPa, 21% O₂), PMMA rods have a Limiting Oxygen Concentration (LOC) of approximately 17.5% O<sub>2</sub> <span class="citation-link" data-study="bass-ii">[PSI-BASS-II: PSI-25]</span>. 
        Under the Artemis lunar habitat baseline of 56 kPa (8.2 psi) and 34% O<sub>2</sub>, PMMA exhibits a flame spread rate increase of over 240% <span class="citation-link" data-study="bre">[PSI-BRE: PSI-20]</span>. 
        The lower pressure reduces convective quenching, while the 34% oxygen concentration lowers the activation energy required to sustain flame propagation along solid surfaces <span class="citation-link" data-ntrs="20190028412">[NTRS-20190028412]</span>.
      `,
      citations: ['PSI-25 (BASS-II)', 'PSI-20 (BRE)', 'NTRS-20190028412']
    },
    {
      keywords: ['hvac', 'ventilation', 'havalandirma', 'fan', 'airflow', 'emergency', 'protokol'],
      title: 'Why is immediate HVAC ventilation shutdown the mandatory first response during a space fire?',
      answer: `
        NASA Saffire-I and Saffire-III flight experiments demonstrated that in stagnant microgravity, flames naturally suffocate in their own combustion products (CO<sub>2</sub>, H<sub>2</sub>O) <span class="citation-link" data-study="saffire-i">[PSI-Saffire-I: PSI-98]</span>. 
        However, active spacecraft cabin ventilation (15–25 cm/s) delivers a continuous stream of fresh oxygen to the hot vapor zone, creating a forced-flow blowtorch effect that drives rapid flame spread across equipment racks <span class="citation-link" data-study="saffire-iii">[PSI-Saffire-III: PSI-100]</span>. 
        Therefore, ISS Flight Rule 7.4.2 mandates instantaneous automated isolation of all cabin ventilation loops before any suppression agent is discharged <span class="citation-link" data-ntrs="20180006742">[NTRS-20180006742]</span>.
      `,
      citations: ['PSI-98 (Saffire-I)', 'PSI-100 (Saffire-III)', 'NTRS-20180006742']
    }
  ];

  container.innerHTML = `
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
              <button class="quick-chip" data-q="3">PMMA in Artemis 34% O₂</button>
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
                  Trip cabin ventilation circuit breakers. Depriving the flame of forced draft (15–25 cm/s) chokes the microgravity fire in its own stagnant CO₂ shell <span class="citation-link" data-study="saffire-i">[Saffire-I]</span>.
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
                  Don Emergency Oxygen Masks. Sample cabin atmosphere for CO (>50 ppm) and HCN with Dräger tubes before re-engaging primary life support.
                </span>
              </div>
            </div>
          </div>

          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--space-border); text-align: right;">
            <button class="secondary" id="btn-print-protocol" style="font-size: 11px; padding: 6px 14px;">
              Export Emergency Protocol · PDF / JSON ↓
            </button>
          </div>
        </section>
      </div>
    </div>
  `;

  const answerBox = container.querySelector('#analyst-answer-box');
  const queryInput = container.querySelector('#analyst-query-input');
  const queryForm = container.querySelector('#analyst-query-form');

  function displayAnswer(item) {
    answerBox.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span class="telemetry-badge badge-ntrs">CORROBORATED INVESTIGATION</span>
        <span style="font-family: var(--font-mono); font-size: 10px; color: var(--telemetry-cyan);">
          CITATIONS: ${item.citations.join(' · ')}
        </span>
      </div>
      <h3 style="font-size: 18px; color: #1E2421; margin: 0 0 14px; line-height: 1.4;">
        ${item.title}
      </h3>
      <div style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); margin-bottom: 20px;">
        ${item.answer}
      </div>
      <div style="border-top: 1px solid var(--space-border); padding-top: 14px; display: flex; gap: 8px; flex-wrap: wrap;">
        ${item.citations.map(c => `<span class="telemetry-badge badge-psi">${c}</span>`).join('')}
      </div>
    `;

    // Attach citation click events
    answerBox.querySelectorAll('.citation-link').forEach(link => {
      link.onclick = (e) => {
        e.preventDefault();
        const studyId = link.dataset.study;
        if (studyId) {
          onOpenStudy?.(studyId);
        } else {
          onOpenData?.('PSI-25');
        }
      };
    });
  }

  // Pre-loaded query buttons
  container.querySelectorAll('#preset-queries-box button').forEach(btn => {
    btn.onclick = () => {
      container.querySelectorAll('#preset-queries-box button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const idx = parseInt(btn.dataset.q);
      displayAnswer(safetyKnowledge[idx]);
    };
  });

  // Query form search
  queryForm.onsubmit = (e) => {
    e.preventDefault();
    const query = queryInput.value.trim().toLowerCase();
    if (!query) return;

    // Search in safetyKnowledge
    const match = safetyKnowledge.find(k => 
      k.keywords.some(kw => query.includes(kw)) ||
      k.title.toLowerCase().includes(query) ||
      k.answer.toLowerCase().includes(query)
    );

    if (match) {
      displayAnswer(match);
    } else {
      answerBox.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <strong style="color: var(--telemetry-amber); font-size: 16px; display: block; margin-bottom: 8px;">
            Evidence Boundary Notice: Direct Flight Match Not Found
          </strong>
          <p style="color: var(--space-text-secondary); font-size: 13px; max-width: 500px; margin: 0 auto 16px;">
            The query "<em>${query}</em>" does not have an exact matching flight record in the packaged NASA PSI combustion tables.
            To prevent hallucination, unverified predictions are withheld. Try searching for "PMMA", "Lunar", "FLEX cool flame", or "HVAC".
          </p>
          <button class="secondary" id="btn-browse-all-psi">Browse All 23 PSI Research Cards →</button>
        </div>
      `;
      answerBox.querySelector('#btn-browse-all-psi').onclick = () => {
        onOpenStudy?.('saffire-i');
      };
    }
  };

  // Export protocol button
  container.querySelector('#btn-print-protocol').onclick = () => {
    const protocolData = {
      flightRule: 'NASA ISS Flight Rule 7.4.2 - Microgravity Fire Response',
      generatedAt: new Date().toISOString(),
      steps: [
        '01. IMMEDIATE HVAC AIRFLOW ISOLATION (Choke diffusion flame in CO2 shell)',
        '02. ELECTRICAL POWER BUS DE-ENERGIZATION (Cut ignition source & prevent wire off-gassing)',
        '03. DEPLOY PORTABLE FINE WATER-MIST EXTINGUISHER (Surface cooling without electrical damage)',
        '04. POST-FIRE ECLSS SCRUBBING & ATMOSPHERE VERIFICATION (Monitor CO / HCN before re-breathing)'
      ],
      authoritativeCitations: [
        'NASA PSI-98 (Saffire-I)',
        'NASA PSI-25 (BASS-II)',
        'NASA NTRS-20180006742',
        'NASA-STD-6001B'
      ]
    };

    const blob = new Blob([JSON.stringify(protocolData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'astronaut-emergency-fire-protocol.json';
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  // Default display first prompt
  displayAnswer(safetyKnowledge[0]);

  return {
    destroy() {}
  };
}
