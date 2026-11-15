# Orbital Telemetry & Research — Flame in Freefall
> **NASA Space Apps Challenge 2026:** *"Flame in Freefall: AI-Powered Fire Safety Insights from Microgravity Combustion Data"*

An aerospace-grade dual-experience platform merging **cinematic visual storytelling** with an **interactive microgravity combustion engineering workbench** and **3D ISS Destiny laboratory exploration**. Grounded in NASA's Physical Sciences Informatics (PSI) repository (`psi.nasa.gov`) and NASA Technical Reports Server (NTRS).

---

## 🚀 Dual-Experience Architecture & Modules

### 1. Presentation Pitch Mode (`P` Key)
- Designed specifically for live hackathon judging and stage storytelling.
- Full-screen slide presentation view with keyboard arrow navigation (`←` / `→`).
- Slide tracker bullets and presenter speaker notes (`🎤 Presenter Cue`).
- Instant exit back to interactive workbench via `ESC` or `Exit Pitch Mode`.

### 2. Module 1: Visual Story ("From Teardrop to Blue Sphere")
- **Chapter 1 — The Physics Shift (1g vs. 0g):** Interactive split-screen comparison: buoyant convective yellow teardrop ($1g$) vs. diffusion-governed soot-free blue sphere ($0g$) with real-time gravity morphing.
- **Chapter 2 — The Lunar Habitat Paradox:** Visualizes why Artemis lunar habitats utilize reduced cabin pressure ($56\text{–}70\text{ kPa}$) with elevated oxygen ($32\text{–}34\% O_2$) for EVA decompression mitigation—and how material flammability thresholds drop sharply.
- **Chapter 3 — Hidden Hazards in Space:** Interactive hotspot failure modes: (a) near-invisible blue flames and silent smoldering, (b) HVAC ventilation airflow converting dormant spheres into rapid fire jets, (c) toxic combustion byproducts ($CO, HCN, HF$) in hermetically sealed ECLSS loops.
- **Chapter 4 — Turning 12 TB of PSI Data into Action:** Visual funnel distilling 24 flight investigations into flight-ready safety protocols.

### 3. Module 2: Interactive Flame Physics & Habitat Simulator ("Flame Lab")
- Real-time HTML5 Canvas simulation with dynamic controls:
  - **Gravity:** `0g ISS`, `0.16g Moon`, `0.38g Mars`, `1.0g Earth`.
  - **Oxygen Fraction:** `18% to 36%` with quick markers (`21% ISS`, `30% EVA Prep`, `34% Lunar Habitat`).
  - **Cabin Pressure:** `50 kPa to 101.3 kPa`.
  - **Forced Airflow:** `0 to 30 cm/s` (ISS HVAC baseline).
  - **Fuel Materials:** PMMA Acrylic, Cotton/Fiberglass (SIBO), Nomex, Heptane Droplets, Kapton/PTFE Wire Insulation.
  - **Electric Field Body Forces:** Simulating ACME *E-FIELD Flames* (5 kV DC potential) deforming microgravity flames via ion wind.
- **Live Telemetry & Evidence Boundaries:** Real-time spread rate ($V_f$), LOC margin, soot index, suppression protocol, and explicit **"Evidence Boundary / Data Gap Alerts"** proposing the next flight experiment matrix (e.g., SoFIE-II) when parameters exceed tested envelopes.

### 4. Module 3: PSI Investigation Explorer & Mission Relevance Ranker
- Dynamic multi-criteria scoring across 23 NASA research cards and 19 unique PSI accessions.
- Mission environments: ISS / Orbital, Lunar Surface Habitat, Mars Surface Habitat, Pressurized Rover.
- Interactive priority weighting sliders (Material Screening, Suppression, Detection, Predictive Modeling).
- Comparative plots ($O_2\%$ vs. Flame Spread Rate across gravity regimes) and 1-click JSON/CSV exports.

### 5. Module 4: Citation-Grounded AI Safety Analyst & Emergency Protocols
- Aerospace safety inquiry console with inline clickable citations (`[PSI-BASS-II]`, `[PSI-Saffire-I]`, `[PSI-FLEX]`, `[NTRS-20190028412]`).
- **Astronaut Emergency Quick-Action Card:** Step-by-step checklist based on NASA ISS Flight Rule 7.4.2:
  1. *Immediate HVAC Airflow Isolation*
  2. *Electrical Power Bus De-energization*
  3. *Portable Fine Water-Mist PFE Deployment*
  4. *Post-Fire ECLSS Scrubbing & Atmosphere Verification*

### 6. Module 5: Earth Fire Safety Spin-Offs ("From Orbit to Earth")
- Interactive showcase translating NASA microgravity breakthroughs to terrestrial safety:
  - **Fine Water-Mist Suppression:** 80% water reduction protecting data centers, cleanrooms, and museums without electrical damage.
  - **Multi-Spectral Optical Cool-Flame Detectors:** Sub-25ms infrared/UV detection of invisible hydrogen leaks.
  - **Next-Gen Firefighter Turnout Gear & SCBA:** 40% lighter composite air tanks and PBI/Nomex thermal armor.

### 7. Module 6: 3D US Lab Destiny Explorer & Flight Replays
- Fully interactive Three.js 3D walkthrough of the ISS US Lab Destiny module.
- 66 selectable equipment racks, CEVIS exercise bike, EXPRESS racks, and cable trays.
- Flight telemetry time-series replay and NASA synchronized video footage.

---

## 🛠️ Local Development & Build

```sh
cd project
npm install
npm run build    # Bundles via esbuild and runs check:data + unit tests
npm test         # Executes strict node:test test suite (11/11 passing)
npm run dev      # Serves production build on http://127.0.0.1:4173
```

BASS kayıtları deney koşullarını içerir; dört kayıtta NASA videosu da vardır. Fan/hava gösterge notlarının birimleri ve geçiş zamanları kaynakta belirtilmediğinde tahmin edilmez. SAME-R karıştırma fanı, deney haznesine aittir. Video ve deney tablosu arasındaki tarih farkları açıklanır; videolar telemetriyle eşzamanlı kabul edilmez.

3D yanma, numune boyutu ve US Lab içindeki yerleşim **temsili görselleştirmedir**. Bu proje doğrulanmış CFD, yangın yayılımı, söndürme başarısı veya eğitilmiş erken uyarı modeli sunmaz. Saffire deneyi Cygnus'ta yürütüldü. NASA iç mekân modeli fiziksel malzeme envanteri sağlamaz; görsel doku adları gerçek kimyasal bileşim sayılmaz.

Ek ayrıntılar: [EXPERIMENTS.md](EXPERIMENTS.md).

## Kaynaklar ve atıflar

- [ISS E Internal 3D modeli — NASA / JSC / IGOAL](https://science.nasa.gov/3d-resources/international-space-station-iss-e-internal/)
- [Saffire-I — NASA PSI-98](https://psi.nasa.gov/physci/repo/data/investigations/PSI-98)
- [BASS-II — NASA PSI-25](https://psi.nasa.gov/physci/repo/data/investigations/PSI-25)
- [SAME-R — NASA PSI-101](https://psi.nasa.gov/physci/repo/data/investigations/PSI-101)
- [Saffire-I görsel referansı](https://www.nasa.gov/image-article/fiberglass-composite/)

Kaynak dosya adları, bağlantılar, satır bilgileri ve SHA-256 değerleri ilgili JSON dosyalarında bulunur. NASA modelinin özgün geometrisi korunmuş; dokular web için hazırlanmıştır. Yaklaşık 44 MB GLB, kayıpsız üç parçaya bölünmüştür ve tarayıcıda birleştirilir. Video dosyaları özgün halleriyle sunulur. Bağımsız bir projedir; NASA tarafından onaylanmış değildir. Üçüncü taraf varlıkların kaynak atıfları korunmalıdır.

## Proje yapısı

```text
src/main.js           Sahne, gezinme ve parça seçimi
src/catalog.js        3D kayıt kataloğu
src/research.js       Araştırma merkezi ve tablo arayüzü
src/research-model.js Sıralama, filtreleme ve dışa aktarma kuralları
src/insights.js       Görev yakınlığı, kapsam haritası ve kanıt bulucu
src/simulator.js      Dünya–mikroçekim kavramsal alev karşılaştırması
tests/                Kaynak bütünlüğü, araştırma ve görev analizi testleri
src/fire.js           Deney görünümü ve telemetri oynatma
src/flame-visual.js   Temsili hacimsel alev
dist/                Arayüz ve derlenmiş uygulama
dist/assets/         Model parçaları, deney JSON dosyaları ve videolar
scripts/check-data.mjs 3D kayıt ve araştırma paketi doğrulaması
server.mjs           Yerel statik sunucu
.openai/hosting.json  Mevcut Sites yayınının yapılandırması
```

Three.js ve esbuild kullanılır. API anahtarı veya veritabanı kurulumu gerekmez. Üretim için `npm run build` sonrasında `dist/` klasörü statik olarak sunulabilir.
