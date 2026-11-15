/**
 * MODULE 5: EARTH FIRE SAFETY SPIN-OFFS ("FROM ORBIT TO EARTH")
 * Demonstrates how NASA microgravity combustion breakthroughs directly translate
 * into life-saving terrestrial applications.
 */

export function createEarthSpinOffs(container, { onOpenData } = {}) {
  const spinOffs = [
    {
      id: 'water-mist',
      title: 'Fine Water-Mist Fire Suppression Systems',
      subtitle: 'ISS Portable Fire Extinguisher (PFE) → High-Tech Terrestrial Infrastructure',
      nasaOrigin: 'Developed to extinguish spacecraft fires without flooding the ISS Destiny cabin or shorting avionics.',
      earthUse: 'Data centers, semiconductor cleanrooms, historical archives, museums, and hospital MRI suites.',
      spinoffUrl: 'https://spinoff.nasa.gov/Spinoff2020/ip_5.html',
      spinoffCitation: 'NASA Spinoff 2020 · Environmental Control',
      keyMetrics: [
        { label: 'Water Usage Reduction', val: '80%' },
        { label: 'Avionics / Electrical Short Risk', val: 'ZERO' },
        { label: 'Droplet Diameter', val: '< 50 μm' }
      ],
      description: `
        On Earth, traditional sprinkler systems cause tens of millions of dollars in catastrophic water damage to electronics and server racks. 
        Halon gas alternatives were banned globally under the Montreal Protocol. NASA engineers, needing a safe extinguisher for the ISS, 
        pioneered supersonic atomizing nozzles that generate ultra-fine micro-droplets (<50 microns). 
        The mist rapidly evaporates into steam at the flame front, expanding 1,700-fold to smother oxygen and extract thermal energy—leaving dry surfaces and zero conductive residue.
      `
    },
    {
      id: 'optical-detector',
      title: 'Multi-Spectral Optical Cool-Flame Detectors',
      subtitle: 'FLEX Droplet Chemiluminescence → Green Hydrogen & Chemical Plants',
      nasaOrigin: 'ISS FLEX and ACME investigations measuring non-luminous, cool-burning hydrocarbon droplets.',
      earthUse: 'Hydrogen fueling stations, chemical refineries, clean energy battery storage facilities.',
      spinoffUrl: 'https://spinoff.nasa.gov/node/9407',
      spinoffCitation: 'NASA Spinoff 2018 · Industrial Safety',
      keyMetrics: [
        { label: 'Detection Speed', val: '< 25 ms' },
        { label: 'False Alarm Rejection', val: '99.8%' },
        { label: 'Spectral Range', val: 'UV to Wide IR' }
      ],
      description: `
        Hydrogen burns with a completely invisible pale-blue/ultraviolet flame that emits zero visible soot—making daytime hydrogen leaks 
        virtually undetectable until someone walks into the flame front. 
        Using multi-spectral optical radiometers developed for the ISS FLEX cool flame experiments, terrestrial detectors scan simultaneously 
        across UV (OH* radical emission at 308 nm) and dual infrared wavelengths. Machine learning algorithms filter out sunlight, hot machinery, 
        and welding flashes, providing instantaneous, reliable alert triggers.
      `
    },
    {
      id: 'firefighter-gear',
      title: 'Next-Gen Firefighter Turnout Gear & Lightweight SCBA',
      subtitle: 'Apollo & Saffire Thermal Protection → First Responder Armor',
      nasaOrigin: 'Extravehicular Mobility Unit (EMU) thermal micrometeoroid suits and Apollo spacecraft heat shields.',
      earthUse: 'Municipal firefighting turnout coats, hazmat protective suits, ultra-lightweight composite air tanks.',
      spinoffUrl: 'https://spinoff.nasa.gov/node/9918',
      spinoffCitation: 'NASA Spinoff · Public Safety',
      keyMetrics: [
        { label: 'Weight Reduction', val: '40%' },
        { label: 'Continuous Thermal Threshold', val: '550°C' },
        { label: 'Air Supply Tank Pressure', val: '4500 psi' }
      ],
      description: `
        Prior to NASA technology transfer, municipal firefighters wore heavy rubber coats and cumbersome steel air cylinders weighing over 35 lbs. 
        NASA transferred polymer matrix composites (polybenzimidazole - PBI and Nomex blends) developed for spacesuit outer layers to create 
        breathable, flame-resistant turnout coats. Furthermore, filament-wound carbon-fiber composite pressure vessels developed for rocket motor casings 
        cut the weight of Self-Contained Breathing Apparatus (SCBA) bottles by more than 15 pounds, significantly reducing firefighter cardiac strain.
      `
    }
  ];

  let selectedSpinOff = 0;

  function render() {
    const item = spinOffs[selectedSpinOff];

    container.innerHTML = `
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
          ${spinOffs.map((s, idx) => `
            <button class="quick-chip ${idx === selectedSpinOff ? 'active' : ''}" data-idx="${idx}" style="padding: 10px 18px; font-size: 12px; border-radius: 8px;">
              ${s.title}
            </button>
          `).join('')}
        </div>

        <!-- Main Showcase Card -->
        <article class="telemetry-panel" style="padding: 36px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; margin-bottom: 20px; flex-wrap: wrap;">
            <div>
              <span class="telemetry-badge badge-ntrs">${item.spinoffCitation}</span>
              <h2 style="font-family: var(--font-display); font-size: 28px; margin: 10px 0 4px; color: #fff;">
                ${item.title}
              </h2>
              <span style="font-family: var(--font-mono); font-size: 12px; color: var(--telemetry-cyan);">
                ${item.subtitle}
              </span>
            </div>
            <a href="${item.spinoffUrl}" target="_blank" rel="noopener noreferrer" class="citation-link" style="padding: 8px 14px; font-size: 11px;">
              Read Official NASA Spinoff Article ↗
            </a>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin: 26px 0;">
            ${item.keyMetrics.map(m => `
              <div style="background: rgba(11, 19, 37, 0.85); border: 1px solid var(--space-border); border-radius: 10px; padding: 18px; text-align: center;">
                <span style="font-family: var(--font-mono); font-size: 10px; color: var(--space-text-muted); text-transform: uppercase; letter-spacing: 1px; display: block; margin-bottom: 6px;">
                  ${m.label}
                </span>
                <strong style="font-family: var(--font-mono); font-size: 26px; color: var(--telemetry-cyan);">
                  ${m.val}
                </strong>
              </div>
            `).join('')}
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 24px 0;">
            <div style="background: rgba(11, 19, 37, 0.6); border: 1px solid var(--space-border); border-radius: 10px; padding: 20px;">
              <strong style="font-family: var(--font-mono); font-size: 11px; color: var(--telemetry-amber); text-transform: uppercase; display: block; margin-bottom: 8px;">
                🚀 NASA Mission Origin
              </strong>
              <p style="font-size: 13px; line-height: 1.6; color: var(--space-text-secondary); margin: 0;">
                ${item.nasaOrigin}
              </p>
            </div>

            <div style="background: rgba(11, 19, 37, 0.6); border: 1px solid var(--space-border); border-radius: 10px; padding: 20px;">
              <strong style="font-family: var(--font-mono); font-size: 11px; color: #10b981; text-transform: uppercase; display: block; margin-bottom: 8px;">
                🌍 Terrestrial Impact & Applications
              </strong>
              <p style="font-size: 13px; line-height: 1.6; color: var(--space-text-secondary); margin: 0;">
                ${item.earthUse}
              </p>
            </div>
          </div>

          <div style="font-size: 14px; line-height: 1.8; color: var(--space-text-secondary); border-top: 1px solid var(--space-border); padding-top: 24px;">
            ${item.description}
          </div>
        </article>
      </div>
    `;

    container.querySelectorAll('[data-idx]').forEach(btn => {
      btn.onclick = () => {
        selectedSpinOff = parseInt(btn.dataset.idx);
        render();
      };
    });
  }

  render();

  return {
    destroy() {}
  };
}
