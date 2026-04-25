const segments = [
  { label: "General Consumers", pct: 100, color: "#d97706", strength: "High",        strengthColor: "#d97706" },
  { label: "Schools (Students)", pct: 75,  color: "#d97706", strength: "Medium-High", strengthColor: "#d97706" },
  { label: "Clinical Segment",   pct: 50,  color: "#14b8a6", strength: "Medium",      strengthColor: "#14b8a6" },
  { label: "Sports (Golf)",      pct: 100, color: "#d97706", strength: "High",        strengthColor: "#d97706" },
];

const middleBoxes = [
  {
    title: "Clinical Network",
    lines: [
      "Conversations with orthopedists and podiatrists",
      "Early support for pilot and validation",
    ],
  },
  {
    title: "School Partnerships",
    lines: [
      "Connected with 2 schools · Building pipeline for foot health camps",
      "Targeting students and teachers segment",
    ],
  },
  {
    title: "Community Building",
    lines: [
      "Active outreach and awareness building",
      "Expanding user base for pilot cohorts",
    ],
  },
];

export default function Slide18() {
  return (
    <section className="section" style={{ background: "#f9f8f3" }}>
      <div
        className="orb"
        style={{
          top: "-60px", right: "-80px",
          width: "350px", height: "350px",
          background: "radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-60px", left: "-60px",
          width: "280px", height: "280px",
          background: "radial-gradient(circle, rgba(217,119,6,0.05) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-8">
          <p className="slide-label mb-3" style={{ color: "#14b8a6" }}>Traction</p>
          <h2 className="slide-heading">
            Early Validation <span className="amber">& Market Access</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left: 2 stat boxes */}
          <div className="flex flex-col gap-4">
            <div
              style={{
                border: "1.5px solid #14b8a6",
                borderRadius: "12px",
                padding: "20px",
                background: "rgba(20,184,166,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "2.25rem", fontWeight: 900,
                  color: "#d97706", lineHeight: 1, marginBottom: "4px",
                }}
              >
                70+
              </p>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "8px" }}>
                Pilot Volunteers
              </p>
              <p className="slide-body">Users signed up for pilot testing via surveys and early outreach</p>
              <p
                style={{
                  fontSize: "0.78rem", fontStyle: "italic",
                  color: "rgba(13,13,13,0.45)", marginTop: "8px",
                }}
              >
                Strong early demand signal before product launch
              </p>
            </div>

            <div
              style={{
                border: "1.5px solid #14b8a6",
                borderRadius: "12px",
                padding: "20px",
                background: "rgba(20,184,166,0.04)",
              }}
            >
              <p
                style={{
                  fontSize: "2.25rem", fontWeight: 900,
                  color: "#14b8a6", lineHeight: 1, marginBottom: "4px",
                }}
              >
                50+
              </p>
              <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "8px" }}>
                Sports Segment — Golf Focus
              </p>
              <p className="slide-body">Golfers surveyed · Early dataset collected</p>
              <p className="slide-body" style={{ marginTop: "6px" }}>
                Connected with{" "}
                <span style={{ color: "#14b8a6", fontWeight: 600 }}>Romit Bose</span>
                {" "}(golf coach, academy operator) &{" "}
                <span style={{ color: "#14b8a6", fontWeight: 600 }}>Rahul Bajaj</span>
                {" "}(professional golfer, international medalist)
              </p>
              <p
                style={{
                  fontSize: "0.78rem", fontStyle: "italic",
                  color: "rgba(13,13,13,0.45)", marginTop: "8px",
                }}
              >
                Validating performance segment starting with golf
              </p>
            </div>
          </div>

          {/* Middle: 3 teal boxes */}
          <div className="flex flex-col gap-4">
            {middleBoxes.map((box, i) => (
              <div
                key={i}
                style={{
                  border: "1.5px solid #14b8a6",
                  borderRadius: "12px",
                  padding: "18px 20px",
                  background: "rgba(20,184,166,0.04)",
                  flex: 1,
                }}
              >
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "6px" }}>
                  {box.title}
                </p>
                {box.lines.map((line, j) => (
                  <p
                    key={j}
                    className="slide-body"
                    style={{ marginBottom: j < box.lines.length - 1 ? "4px" : 0 }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Right: progress bars */}
          <div
            style={{
              border: "1.5px solid #14b8a6",
              borderRadius: "12px",
              padding: "24px",
              background: "rgba(20,184,166,0.04)",
            }}
          >
            <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "1.25rem" }}>
              Segment-wise Access Strength
            </p>
            <div className="flex flex-col gap-5">
              {segments.map((seg, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "6px",
                    }}
                  >
                    <p style={{ fontSize: "0.8rem", color: "rgba(13,13,13,0.7)" }}>{seg.label}</p>
                    <p
                      style={{
                        fontSize: "0.72rem", fontWeight: 700,
                        color: seg.strengthColor, letterSpacing: "0.02em",
                      }}
                    >
                      {seg.strength}
                    </p>
                  </div>
                  <div
                    style={{
                      height: "8px", borderRadius: "4px",
                      background: "rgba(0,0,0,0.08)", overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%", borderRadius: "4px",
                        background: seg.color, width: `${seg.pct}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
