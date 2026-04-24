const stats = [
  {
    number: "62M+",
    bold: "Indians suffer from osteoarthritis",
    detail: "the most common form of arthritis with numbers nearly tripling from 23M in 1990 to 62M in 2019",
    footnote: "Projected to increase by 74.9% by 2050",
  },
  {
    number: "25–30%",
    bold: "of India's population",
    detail: "(350 Million+ people) is affected by Musculoskeletal and rheumatic diseases",
    footnote: "Projected to increase by 115% from 2020 to 2050 globally",
  },
  {
    number: "50M+",
    bold: "Indians suffer from diabetic peripheral neuropathy",
    detail: "silently losing sensation in their feet, making every step a potential wound",
    footnote: "Expected to rise to over 84 million by 2045",
  },
];

export default function Slide2() {
  return (
    <section className="section">
      {/* Amber orb bottom-left */}
      <div
        className="orb"
        style={{
          bottom: "-80px", left: "-60px",
          width: "240px", height: "240px",
          background: "radial-gradient(circle, #d97706 0%, rgba(217,119,6,0.25) 45%, transparent 68%)",
          filter: "blur(2px)",
        }}
      />

      <div className="slide-container z-10">
        {/* Heading block — shifted left to align with first box edge */}
        <div className="mb-14" style={{ marginLeft: "-5rem" }}>
          <p className="slide-label mb-3">The Problem</p>
          <h2 className="slide-heading">
            The Numbers Behind the Pain
          </h2>
          <p className="slide-subtext mt-4">
            Nowadays, most people walk with incorrect biomechanics their entire lives, without ever knowing it
          </p>
        </div>

        {/* Stat columns */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          style={{ alignItems: "stretch", marginLeft: "-5rem", marginRight: "-5rem", gridTemplateColumns: "1fr 1.4fr 1fr" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                border: "1.5px solid #14b8a6",
                borderRadius: "12px",
                padding: "28px 16px",
                background: "rgba(20, 184, 166, 0.04)",
                boxShadow: "0 2px 12px rgba(20, 184, 166, 0.1)",
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
              }}
            >
              <div
                className="slide-stat"
                style={i === 1 ? { whiteSpace: "nowrap" } : undefined}
              >
                {s.number}
              </div>
              <div className="divider" />
              <p style={{ color: "#0d0d0d", fontSize: "0.9rem", lineHeight: 1.6 }}>
                <strong>{s.bold}</strong>{" "}
                <span style={{ color: "rgba(13,13,13,0.6)" }}>{s.detail}</span>
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(13,13,13,0.4)", marginTop: "auto", paddingTop: "0.75rem" }}>
                {s.footnote}
              </p>
            </div>
          ))}
        </div>

        {/* Footer rule — spans from first box left edge to last box right edge */}
        <div
          className="mt-14 pt-6"
          style={{
            borderTop: "1px solid rgba(13,13,13,0.08)",
            marginLeft: "-5rem",
            marginRight: "-5rem",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "rgba(13,13,13,0.5)" }}>
            Clinical-grade biomechanics based orthopaedic correction{" "}
            <strong style={{ color: "rgba(13,13,13,0.85)" }}>
              today reaches fewer than 1 in 10 people who need it
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
