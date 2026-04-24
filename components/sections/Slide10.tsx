const phaseIcons = [
  /* Phase 1 — shield with handshake + checkmark */
  <svg key="p1" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 3 L41 10 L41 25 Q41 37 24 44 Q7 37 7 25 L7 10 Z"
      stroke="#0d0d0d" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    {/* Handshake */}
    <path d="M14 30 L18 24 L22 26 L24 24 L26 26 L30 24 L34 30"
      stroke="#0d0d0d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    {/* Checkmark circle above */}
    <circle cx="24" cy="15" r="5" stroke="#0d0d0d" strokeWidth="2" fill="none"/>
    <path d="M21 15 L23 17 L27 12.5"
      stroke="#0d0d0d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>,

  /* Phase 2 — truck with 3 location pins */
  <svg key="p2" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Truck body */}
    <rect x="3" y="27" width="23" height="13" rx="2"
      stroke="#0d0d0d" strokeWidth="2.5" fill="none"/>
    {/* Truck cab */}
    <path d="M26 32 L26 27 L35 27 L43 32 L43 40 L26 40"
      stroke="#0d0d0d" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    {/* Wheels */}
    <circle cx="11" cy="43" r="3.5" stroke="#0d0d0d" strokeWidth="2.5" fill="none"/>
    <circle cx="36" cy="43" r="3.5" stroke="#0d0d0d" strokeWidth="2.5" fill="none"/>
    {/* Location pin 1 */}
    <path d="M11 4 C11 1 15 1 15 4 C15 7 13 10 13 10 C13 10 11 7 11 4 Z"
      stroke="#0d0d0d" strokeWidth="2" fill="none"/>
    <circle cx="13" cy="4.5" r="1" fill="#0d0d0d"/>
    <line x1="13" y1="10" x2="13" y2="25" stroke="#0d0d0d" strokeWidth="1.5" strokeDasharray="2 1.5" strokeLinecap="round"/>
    {/* Location pin 2 */}
    <path d="M20 2 C20 -1 24 -1 24 2 C24 5 22 8 22 8 C22 8 20 5 20 2 Z"
      stroke="#0d0d0d" strokeWidth="2" fill="none"/>
    <circle cx="22" cy="2.5" r="1" fill="#0d0d0d"/>
    <line x1="22" y1="8" x2="22" y2="25" stroke="#0d0d0d" strokeWidth="1.5" strokeDasharray="2 1.5" strokeLinecap="round"/>
    {/* Location pin 3 */}
    <path d="M31 4 C31 1 35 1 35 4 C35 7 33 10 33 10 C33 10 31 7 31 4 Z"
      stroke="#0d0d0d" strokeWidth="2" fill="none"/>
    <circle cx="33" cy="4.5" r="1" fill="#0d0d0d"/>
    <line x1="33" y1="10" x2="33" y2="25" stroke="#0d0d0d" strokeWidth="1.5" strokeDasharray="2 1.5" strokeLinecap="round"/>
  </svg>,

  /* Phase 3 — warehouse inside circle with 8 radiating dots */
  <svg key="p3" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer circle */}
    <circle cx="24" cy="24" r="16" stroke="#0d0d0d" strokeWidth="2.5" fill="none"/>
    {/* Warehouse roof */}
    <path d="M14 23 L24 15 L34 23" stroke="#0d0d0d" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    {/* Warehouse walls */}
    <rect x="16" y="23" width="16" height="10" stroke="#0d0d0d" strokeWidth="2" fill="none"/>
    {/* Door */}
    <rect x="21" y="28" width="6" height="5" stroke="#0d0d0d" strokeWidth="1.5" fill="none"/>
    {/* 8 radiating dots at r=22 from center */}
    <circle cx="46" cy="24" r="2" fill="#0d0d0d"/>
    <circle cx="40" cy="40" r="2" fill="#0d0d0d"/>
    <circle cx="24" cy="46" r="2" fill="#0d0d0d"/>
    <circle cx="8"  cy="40" r="2" fill="#0d0d0d"/>
    <circle cx="2"  cy="24" r="2" fill="#0d0d0d"/>
    <circle cx="8"  cy="8"  r="2" fill="#0d0d0d"/>
    <circle cx="24" cy="2"  r="2" fill="#0d0d0d"/>
    <circle cx="40" cy="8"  r="2" fill="#0d0d0d"/>
  </svg>,
];

const phases = [
  {
    phase: "Phase 1",
    year: "Year 1",
    label: "Community-led DTC",
    objective: "Validate PMF & build trust",
    scale: "500+ customers · 15–20 clinical partners · 30–40 communities",
    channels: "Clinics, schools, sports clubs, RWAs, corporate wellness, Website + WhatsApp funnel",
    mechanism: [
      "Free screening camps → foot reports",
      "10–20% conversion to paid insoles",
      "Low CAC via community aggregation",
    ],
  },
  {
    phase: "Phase 2",
    year: "Year 2",
    label: "Multi-city Clinic Network",
    objective: "Scale distribution across cities",
    scale: "5 cities · 8,400 pairs sold",
    channels: "Clinic replication, Marketplaces (PharmEasy etc.), Corporate wellness (B2B), Pharmacy kiosks",
    mechanism: [
      "Clinic-led trust replication",
      "Semi-custom unlocks wider market",
      "Hybrid online + offline scale",
    ],
  },
  {
    phase: "Phase 3",
    year: "Year 3",
    label: "Platform Scale",
    objective: "Mass distribution + category leadership",
    scale: "10+ cities · 39,600 pairs sold",
    channels: "Amazon, Flipkart, Nykaa Health · Franchise/kiosk retail · Sports & defense partnerships",
    mechanism: [
      "Franchise-led distribution",
      "Community → Tier 2 expansion",
      "Low marginal CAC at scale",
    ],
  },
];

export default function Slide10() {
  return (
    <section className="section">
      <div className="slide-container z-10">
        <div className="mb-12">
          <p className="slide-label mb-3">Go-to-market</p>
          <h2 className="slide-heading">GTM Strategy</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((p, i) => (
            <div key={i}>
              {/* Header box — dark border, icon + phase label */}
              <div
                style={{
                  border: "1.5px solid rgba(13,13,13,0.7)",
                  borderBottom: "none",
                  borderRadius: "12px 12px 0 0",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  background: "rgba(13,13,13,0.03)",
                }}
              >
                <div style={{ flexShrink: 0 }}>{phaseIcons[i]}</div>
                <div>
                  <p className="slide-label">{p.phase} · {p.year}</p>
                  <p style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", marginTop: "0.2rem" }}>
                    {p.label}
                  </p>
                </div>
              </div>

              {/* Content box — teal border */}
              <div
                style={{
                  border: "1.5px solid #14b8a6",
                  borderTop: "1px solid rgba(13,13,13,0.09)",
                  borderRadius: "0 0 12px 12px",
                  padding: "20px",
                  background: "rgba(20,184,166,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <p className="slide-label mb-1">Objective</p>
                  <p style={{ fontSize: "0.875rem", color: "#0d0d0d" }}>{p.objective}</p>
                </div>
                <div>
                  <p className="slide-label mb-1">Scale</p>
                  <p className="slide-body">{p.scale}</p>
                </div>
                <div>
                  <p className="slide-label mb-1">Channels</p>
                  <p className="slide-body">{p.channels}</p>
                </div>
                <div>
                  <p className="slide-label mb-2">Mechanism</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.mechanism.map((m, j) => (
                      <li
                        key={j}
                        className="flex gap-2"
                        style={{ fontSize: "0.82rem", color: "rgba(13,13,13,0.6)", lineHeight: 1.5 }}
                      >
                        <span style={{ color: "#d97706", flexShrink: 0 }}>›</span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
