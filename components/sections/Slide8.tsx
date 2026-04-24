const markets = [
  {
    label: "Entry Market",
    sub: "Custom Orthopaedics Market",
    items: [
      { val: "$9.76 B", key: "TAM (Global)", size: 120, bg: "#0d9488", text: "#fff" },
      { val: "$440 M", key: "SAM (Indian)", size: 86, bg: "#5eead4", text: "#0d0d0d" },
      { val: "$25 M", key: "SOM*", size: 60, bg: "#ccfbf1", text: "#0d0d0d" },
    ],
    cagr: "8–8.5%",
    source: "Grand View Research",
  },
  {
    label: "Platform Vision",
    sub: "Total Footwear Market",
    items: [
      { val: "$550 B", key: "TAM (Global)", size: 120, bg: "#0d9488", text: "#fff" },
      { val: "$38.01 B", key: "SAM (Indian)", size: 86, bg: "#5eead4", text: "#0d0d0d" },
      { val: "$10 M", key: "SOM*", size: 60, bg: "#ccfbf1", text: "#0d0d0d" },
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
                  color: "#0d0d0d",
                  marginBottom: "0.2rem",
                }}
              >
                {m.label}
              </p>
              <p className="slide-body mb-8">{m.sub}</p>

              {/* Bubble stack */}
              <div className="flex flex-col gap-3 items-start">
                {m.items.map((item, ii) => (
                  <div
                    key={ii}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="flex-shrink-0 flex flex-col items-center justify-center rounded-full"
                      style={{
                        width: item.size,
                        height: item.size,
                        background: item.bg,
                        boxShadow: `0 4px 16px ${item.bg}55`,
                      }}
                    >
                      <span
                        style={{
                          fontSize: ii === 0 ? "1rem" : ii === 1 ? "0.82rem" : "0.7rem",
                          fontWeight: 900,
                          color: item.text,
                          lineHeight: 1.1,
                          textAlign: "center",
                          padding: "0 6px",
                        }}
                      >
                        {item.val}
                      </span>
                    </div>
                    <span
                      className="slide-label"
                      style={{ color: "rgba(13,13,13,0.55)" }}
                    >
                      {item.key}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="mt-6 pt-5"
                style={{ borderTop: "1px solid rgba(13,13,13,0.07)" }}
              >
                <span className="tag-chip">CAGR {m.cagr}</span>
                <p className="mt-2" style={{ fontSize: "0.72rem", color: "rgba(13,13,13,0.3)" }}>
                  * {m.source}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8" style={{ fontSize: "0.72rem", color: "rgba(13,13,13,0.3)" }}>
          *SOM is based on year 3 revenue estimations
        </p>
      </div>
    </section>
  );
}
