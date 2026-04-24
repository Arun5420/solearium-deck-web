const markets = [
  {
    label: "Entry Market",
    sub: "Custom Orthopaedics Market",
    items: [
      { val: "$9.76 B", key: "TAM (Global)" },
      { val: "$440 M", key: "SAM (Indian)" },
      { val: "$25 M", key: "SOM*" },
    ],
    cagr: "8–8.5%",
    source: "Grand View Research",
  },
  {
    label: "Platform Vision",
    sub: "Total Footwear Market",
    items: [
      { val: "$550 B", key: "TAM (Global)" },
      { val: "$38.01 B", key: "SAM (Indian)" },
      { val: "$10 M", key: "SOM*" },
    ],
    cagr: "7%",
    source: "Fortune Business Insights",
  },
];

export default function Slide8() {
  return (
    <section className="section">
      <div className="slide-container z-10">
        <div className="mb-12">
          <p className="slide-label mb-3">Market sizing</p>
          <h2 className="slide-heading">
            Market <span className="amber">Opportunity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {markets.map((m, mi) => (
            <div key={mi}>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F5F2EE",
                  marginBottom: "0.2rem",
                }}
              >
                {m.label}
              </p>
              <p className="slide-body mb-8">{m.sub}</p>

              <div className="flex flex-col gap-4">
                {m.items.map((item, ii) => (
                  <div key={ii} className="flex items-baseline gap-4">
                    <span
                      style={{
                        fontSize: ii === 0 ? "clamp(2.2rem, 5vw, 3.5rem)" : ii === 1 ? "clamp(1.6rem, 3.5vw, 2.4rem)" : "clamp(1.2rem, 2.5vw, 1.8rem)",
                        fontWeight: 900,
                        color: ii === 0 ? "#E8A020" : ii === 1 ? "rgba(232,160,32,0.7)" : "rgba(232,160,32,0.45)",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        minWidth: ii === 0 ? "160px" : ii === 1 ? "130px" : "100px",
                      }}
                    >
                      {item.val}
                    </span>
                    <span className="slide-label">{item.key}</span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(245,242,238,0.07)" }}
              >
                <span className="tag-chip">CAGR {m.cagr}</span>
                <p className="mt-2" style={{ fontSize: "0.72rem", color: "rgba(245,242,238,0.3)" }}>
                  * {m.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8" style={{ fontSize: "0.72rem", color: "rgba(245,242,238,0.3)" }}>
          *SOM is based on year 3 revenue estimations
        </p>
      </div>
    </section>
  );
}
