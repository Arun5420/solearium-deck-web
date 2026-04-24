const solutions = [
  {
    title: "Retail and Mass Market",
    brands: "Tynor, Frido, Scholl, Boldfit",
    nature: "OTC, mass-produced, cushioning",
    gap: "One-size-fits-all, lacks biomechanical correction",
  },
  {
    title: "Traditional Local Workshops",
    brands: "Hand-ground EVA foam",
    nature: "Unorganized orthetists & small-scale cobblers",
    gap: "No standardization, quality control, or clinical precision",
  },
  {
    title: "Institutional and Hospital Rehab",
    brands: "AIIMS, Apollo, Fortis, Max",
    nature: "Clinically sound; utilize pressure mapping",
    gap: "High costs (₹5–15k), long waitlists; restricted to metros",
  },
  {
    title: "Public Health & Govt. Schemes",
    brands: "ALIMCO, NLEP, RehabCenter",
    nature: "Free/subsidized for disability & leprosy patients",
    gap: "Basic functionality, supply constraints & visual stigma",
  },
  {
    title: "Premium Global Brands",
    brands: "Superfeet, Bauerfeind, Aetrex",
    nature: "Technology-driven and globally proven",
    gap: "Import pricing (₹5–15k), no local infra, designed for Western morphology",
  },
];

export default function Slide3() {
  return (
    <section className="section">
      {/* Amber orb top-right */}
      <div
        className="orb"
        style={{
          top: "-60px", right: "-60px",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(232,160,32,0.6) 0%, rgba(232,160,32,0.1) 50%, transparent 70%)",
          filter: "blur(3px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-10">
          <p className="slide-label mb-3">Landscape</p>
          <h2 className="slide-heading">
            Existing <span className="amber">Solutions & Gaps</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="flex flex-col py-5 lg:pr-6"
              style={{
                borderRight: i < solutions.length - 1 ? "1px solid rgba(245,242,238,0.07)" : "none",
                paddingLeft: i > 0 ? "1.5rem" : "0",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#F5F2EE",
                  lineHeight: 1.35,
                  marginBottom: "0.75rem",
                }}
              >
                {s.title}
              </p>
              <p className="slide-body mb-1">{s.brands}</p>
              <p className="slide-body mb-4">{s.nature}</p>
              <div className="mt-auto">
                <p className="slide-label mb-1">Gap</p>
                <p style={{ fontSize: "0.8rem", color: "rgba(245,242,238,0.5)", lineHeight: 1.5 }}>
                  {s.gap}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
