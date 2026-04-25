const columns = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="4" y1="9"  x2="24" y2="9"  stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="4" y1="14" x2="24" y2="14" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="4" y1="19" x2="24" y2="19" stroke="#14b8a6" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "OTC",
    label: "OFF-THE-SHELF",
    subtext: "Instant comfort",
    items: ["Ready-made insoles", "No scan required", "Mass market access", "Fast delivery"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="11" stroke="#14b8a6" strokeWidth="2"/>
        <circle cx="14" cy="14" r="6"  stroke="#14b8a6" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="2"  fill="#14b8a6"/>
        <line x1="14" y1="1"  x2="14" y2="5"  stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14" y1="23" x2="14" y2="27" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        <line x1="1"  y1="14" x2="5"  y2="14" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
        <line x1="23" y1="14" x2="27" y2="14" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Semi-Custom",
    label: "SCAN-BASED FIT",
    subtext: "Personalized at scale",
    items: ["Foot scan based recommendation", "Algorithm-driven design", "Balanced price-performance", "Core launch product"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 3 L25 10.5 L14 25 L3 10.5 Z" stroke="#14b8a6" strokeWidth="2" fill="none" strokeLinejoin="round"/>
        <line x1="3"  y1="10.5" x2="25" y2="10.5" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="3"    x2="14" y2="25"   stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fully Custom",
    label: "CLINICAL GRADE",
    subtext: "Clinical-grade correction",
    items: ["Advanced biomechanical analysis", "CAD/CAM orthotics", "Prescription-grade precision", "Premium offering"],
  },
];

export default function Slide16() {
  return (
    <section className="section" style={{ background: "#f9f8f3" }}>
      <div
        className="orb"
        style={{
          top: "-80px", right: "-100px",
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-60px", left: "-60px",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-8">
          <p className="slide-label mb-3" style={{ color: "#14b8a6" }}>Our Solution</p>
          <h2 className="slide-heading">
            Product <span className="amber">Offering</span>
          </h2>
          <p className="mt-3 mb-4" style={{ fontSize: "0.95rem", color: "rgba(13,13,13,0.6)" }}>
            Three-tier product architecture
          </p>
          <div className="divider" />
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-5">
          {columns.map((col, i) => (
            <div
              key={i}
              style={{
                border: "1.5px solid #14b8a6",
                borderRadius: "12px",
                padding: "24px",
                background: "rgba(20,184,166,0.04)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ marginBottom: "12px" }}>{col.icon}</div>
              <p
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                  fontWeight: 900,
                  color: "#d97706",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {col.title}
              </p>
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#0d0d0d",
                  marginBottom: "6px",
                }}
              >
                {col.label}
              </p>
              <p style={{ fontSize: "0.8rem", color: "#14b8a6", fontWeight: 500, marginBottom: "10px" }}>
                {col.subtext}
              </p>
              <div
                style={{
                  width: "28px", height: "2px",
                  background: "#d97706",
                  borderRadius: "1px",
                  marginBottom: "10px",
                }}
              />
              <ul className="flex flex-col gap-1.5">
                {col.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-2"
                    style={{ fontSize: "0.82rem", color: "rgba(13,13,13,0.7)", lineHeight: 1.5 }}
                  >
                    <span style={{ color: "#d97706", fontWeight: 700, flexShrink: 0 }}>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison bar */}
        <div style={{ borderTop: "1px solid rgba(13,13,13,0.08)", paddingTop: "1.25rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 1fr 1fr",
              gap: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            <div />
            {["OTC", "Semi-Custom", "Fully Custom"].map((h) => (
              <p
                key={h}
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(13,13,13,0.45)",
                  textAlign: "center",
                }}
              >
                {h}
              </p>
            ))}
          </div>

          {/* Personalization dots */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 1fr 1fr",
              gap: "1rem",
              alignItems: "center",
              marginBottom: "0.6rem",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(13,13,13,0.6)", fontWeight: 500 }}>Personalization</p>
            {[[1, 3], [2, 3], [3, 3]].map(([filled, total], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
                {Array.from({ length: total }).map((_, k) => (
                  <div
                    key={k}
                    style={{
                      width: "10px", height: "10px", borderRadius: "50%",
                      background: k < filled ? "#d97706" : "rgba(13,13,13,0.12)",
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Price */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 1fr 1fr",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "rgba(13,13,13,0.6)", fontWeight: 500 }}>Price</p>
            {["₹", "₹₹", "₹₹₹"].map((price, i) => (
              <p
                key={i}
                style={{ fontSize: "1rem", fontWeight: 700, color: "#d97706", textAlign: "center" }}
              >
                {price}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
