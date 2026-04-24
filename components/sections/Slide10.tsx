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
          <h2 className="slide-heading">GTM</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-5"
              style={{
                borderLeft: "2px solid rgba(232,160,32,0.3)",
                paddingLeft: "1.25rem",
              }}
            >
              {/* Phase number */}
              <div>
                <p className="slide-label">{p.phase} · {p.year}</p>
                <p
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#F5F2EE",
                    marginTop: "0.25rem",
                  }}
                >
                  {p.label}
                </p>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <div>
                  <p className="slide-label mb-1">Objective</p>
                  <p style={{ fontSize: "0.875rem", color: "#F5F2EE" }}>{p.objective}</p>
                </div>
                <div>
                  <p className="slide-label mb-1">Scale</p>
                  <p className="slide-body">{p.scale}</p>
                </div>
                <div>
                  <p className="slide-label mb-1">Channels</p>
                  <p className="slide-body">{p.channels}</p>
                </div>
              </div>

              {/* Mechanism */}
              <div>
                <p className="slide-label mb-2">Mechanism</p>
                <ul className="flex flex-col gap-1.5">
                  {p.mechanism.map((m, j) => (
                    <li
                      key={j}
                      className="flex gap-2"
                      style={{ fontSize: "0.82rem", color: "rgba(245,242,238,0.6)", lineHeight: 1.5 }}
                    >
                      <span style={{ color: "#E8A020", flexShrink: 0 }}>›</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
