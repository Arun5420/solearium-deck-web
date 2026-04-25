const phases = [
  {
    num: 1,
    bullet: "amber",
    title: "Wedge Product",
    tags: ["Launch Semi-Custom Insoles", "Community-led DTC", "Early traction + validation"],
    detail: "Clinics + digital channels",
  },
  {
    num: 2,
    bullet: "teal",
    title: "Expansion",
    tags: ["Launch OTC line (e-commerce)", "Expand semi-custom via clinics", "Tier-1 city expansion"],
    detail: null,
  },
  {
    num: 3,
    bullet: "amber",
    title: "Platform Scale",
    tags: ["Fully custom clinical expansion", "Preventive biomechanics devices", "Smart footwear"],
    detail: null,
  },
];

export default function Slide17() {
  return (
    <section className="section" style={{ background: "#f9f8f3" }}>
      <div
        className="orb"
        style={{
          top: "-80px", right: "-100px",
          width: "380px", height: "380px",
          background: "radial-gradient(circle, rgba(217,119,6,0.06) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-60px", left: "-60px",
          width: "280px", height: "280px",
          background: "radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-8">
          <p className="slide-label mb-3" style={{ color: "#14b8a6" }}>Strategy</p>
          <h2 className="slide-heading">
            Go-To-Market <span className="amber">Product Launch</span>
          </h2>
          <p className="mt-3 mb-4" style={{ fontSize: "0.95rem", color: "rgba(13,13,13,0.6)" }}>
            Phased rollout from wedge product to platform scale
          </p>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: vertical timeline — spans 2 cols */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              {phases.map((phase, i) => (
                <div key={i} className="flex gap-4">
                  {/* Bullet + connector column */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      flexShrink: 0,
                      width: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: phase.bullet === "amber" ? "#d97706" : "#14b8a6",
                        marginTop: "4px",
                        flexShrink: 0,
                      }}
                    />
                    {i < phases.length - 1 && (
                      <div
                        style={{
                          width: "2px",
                          flex: 1,
                          background: "#14b8a6",
                          opacity: 0.35,
                          minHeight: "52px",
                          marginTop: "6px",
                          marginBottom: "6px",
                        }}
                      />
                    )}
                  </div>

                  {/* Content with left teal bar accent */}
                  <div
                    style={{
                      flex: 1,
                      borderLeft: "2px solid #14b8a6",
                      paddingLeft: "1.25rem",
                      paddingBottom: i < phases.length - 1 ? "1.75rem" : 0,
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 700,
                        color: "#0d0d0d",
                        fontSize: "0.95rem",
                        marginBottom: "0.6rem",
                      }}
                    >
                      Phase {phase.num} –{" "}
                      <span className="amber">{phase.title}</span>
                    </p>
                    <div
                      className="flex flex-wrap gap-2"
                      style={{ marginBottom: phase.detail ? "0.5rem" : 0 }}
                    >
                      {phase.tags.map((tag, j) => (
                        <span key={j} className="tag-chip">{tag}</span>
                      ))}
                    </div>
                    {phase.detail && (
                      <p className="slide-body">{phase.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: product progression box */}
          <div>
            <div
              style={{
                border: "1.5px solid #14b8a6",
                borderRadius: "12px",
                padding: "24px",
                background: "rgba(20,184,166,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                height: "100%",
              }}
            >
              <p
                style={{
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(13,13,13,0.45)",
                }}
              >
                Product Progression
              </p>
              <p style={{ fontSize: "0.875rem", color: "#0d0d0d", lineHeight: 1.7 }}>
                Semi-Custom{" "}
                <span style={{ color: "#d97706", fontWeight: 700 }}>→</span>
                {" "}OTC Scale{" "}
                <span style={{ color: "#d97706", fontWeight: 700 }}>→</span>
                {" "}Fully Custom{" "}
                <span style={{ color: "#d97706", fontWeight: 700 }}>→</span>
                {" "}Smart Footwear
              </p>
              <div
                style={{
                  borderLeft: "3px solid #d97706",
                  paddingLeft: "1rem",
                  marginTop: "auto",
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontStyle: "italic",
                    color: "rgba(13,13,13,0.6)",
                    lineHeight: 1.65,
                  }}
                >
                  "We launch with Semi-Custom as our wedge, scale via OTC, and expand into clinical-grade orthopaedics."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
