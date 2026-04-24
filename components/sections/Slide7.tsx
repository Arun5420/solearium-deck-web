const pipeline = [
  { num: "1", label: "Analysis", desc: "CV/ML Gait Analysis" },
  { num: "2", label: "Sensing", desc: "Smart Pressure-Sensing Insoles" },
  { num: "3", label: "Modeling", desc: "3D Foot Scanning" },
  { num: "4", label: "Execution", desc: "CAD/CAM Fabrication" },
];

const advantages = [
  {
    num: "1",
    title: "Integrated Tech Pipeline",
    desc: "A proprietary technology pipeline no Indian competitor has built.",
  },
  {
    num: "2",
    title: "DTC Model",
    desc: "Eliminating specialist gatekeeping to make orthotics accessible to everyone.",
  },
  {
    num: "3",
    title: "Aesthetic Focus",
    desc: "High-design products that remove the medical stigma from solutions.",
  },
];

const nodes = [
  { label: "More Patients", angle: -90 },
  { label: "More Data", angle: 0 },
  { label: "Smarter Prescriptions", angle: 90 },
  { label: "Better Outcomes", angle: 180 },
];

function FlywheelSVG() {
  const cx = 110;
  const cy = 110;
  const r = 72;

  function nodePos(angleDeg: number) {
    const rad = (angleDeg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .flywheel-ring { transform-origin: 110px 110px; animation: spin 12s linear infinite; }
      `}</style>

      {/* Rotating dashed ring */}
      <circle
        className="flywheel-ring"
        cx={cx} cy={cy} r={r}
        stroke="#d97706"
        strokeWidth="2"
        strokeDasharray="8 6"
        fill="none"
        opacity="0.35"
      />

      {/* Arc arrows between nodes */}
      {nodes.map((n, i) => {
        const next = nodes[(i + 1) % nodes.length];
        const from = nodePos(n.angle + 20);
        const to = nodePos(next.angle - 20);
        const mid = nodePos(n.angle + (next.angle > n.angle ? (next.angle - n.angle) / 2 : (n.angle + 360 - next.angle) / 2 + n.angle));
        return (
          <path
            key={i}
            d={`M ${from.x} ${from.y} Q ${cx + (mid.x - cx) * 1.1} ${cy + (mid.y - cy) * 1.1} ${to.x} ${to.y}`}
            stroke="#d97706"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
            markerEnd={`url(#arrow${i})`}
          />
        );
      })}

      {/* Arrow markers */}
      {nodes.map((_, i) => (
        <defs key={i}>
          <marker id={`arrow${i}`} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 Z" fill="#d97706"/>
          </marker>
        </defs>
      ))}

      {/* Node circles */}
      {nodes.map((n, i) => {
        const pos = nodePos(n.angle);
        return (
          <g key={i}>
            <circle cx={pos.x} cy={pos.y} r="18" fill="#14b8a6" opacity="0.15"/>
            <circle cx={pos.x} cy={pos.y} r="18" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
            <foreignObject
              x={pos.x - 24}
              y={pos.y - 14}
              width="48"
              height="28"
            >
              <div
                style={{
                  fontSize: "7px",
                  fontWeight: 700,
                  color: "#0d0d0d",
                  textAlign: "center",
                  lineHeight: 1.3,
                  wordBreak: "break-word",
                }}
              >
                {n.label}
              </div>
            </foreignObject>
          </g>
        );
      })}

      {/* Center text */}
      <circle cx={cx} cy={cy} r="32" fill="rgba(20,184,166,0.07)" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3"/>
      <text x={cx} y={cy - 5} textAnchor="middle" fontSize="8" fontWeight="700" fill="#0d0d0d">The Flywheel</text>
      <text x={cx} y={cy + 8} textAnchor="middle" fontSize="8" fontWeight="700" fill="#d97706">Effect</text>
    </svg>
  );
}

export default function Slide7() {
  return (
    <section className="section">
      <div className="slide-container z-10">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="slide-label mb-3">Competitive moat</p>
          <h2 className="slide-heading">
            A Data Moat That{" "}
            <span className="amber">Compounds With Every Step</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Flywheel */}
          <div>
            <p className="slide-label mb-5">The Compounding Data Moat</p>
            <div className="flex items-center justify-center">
              <FlywheelSVG />
            </div>
          </div>

          {/* Tech Pipeline */}
          <div>
            <p className="slide-label mb-5">Our Technology Pipeline</p>
            <div className="grid grid-cols-2 gap-3">
              {pipeline.map((p, i) => (
                <div
                  key={i}
                  style={{
                    border: "1.5px solid #14b8a6",
                    borderRadius: "12px",
                    padding: "14px",
                    background: "rgba(20,184,166,0.04)",
                  }}
                >
                  <span
                    className="text-xs font-black"
                    style={{ color: "#d97706" }}
                  >
                    {p.num}.
                  </span>{" "}
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#0d0d0d",
                    }}
                  >
                    {p.label}
                  </span>
                  <p className="slide-body mt-0.5">{p.desc}</p>
                </div>
              ))}
            </div>
            <p
              className="mt-4"
              style={{
                fontSize: "0.72rem",
                color: "rgba(13,13,13,0.35)",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(13,13,13,0.07)",
              }}
            >
              Bridging clinical precision & consumer accessibility
            </p>
          </div>

          {/* Three Structural Advantages */}
          <div>
            <p className="slide-label mb-5">Three Structural Advantages</p>
            <div className="flex flex-col gap-5">
              {advantages.map((a, i) => (
                <div key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 font-black text-sm mt-0.5"
                    style={{ color: "#d97706", width: "16px" }}
                  >
                    {a.num}.
                  </span>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d" }}>
                      {a.title}
                    </p>
                    <p className="slide-body mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div
          className="mt-10 pt-8"
          style={{ borderTop: "1px solid rgba(13,13,13,0.07)" }}
        >
          <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)", color: "rgba(13,13,13,0.7)", lineHeight: 1.6 }}>
            We are not building a better insole. We are building India&apos;s{" "}
            <span style={{ color: "#0d0d0d", fontWeight: 600 }}>
              biomechanical correction infrastructure
            </span>
            , starting with footwear.
          </p>
        </div>
      </div>
    </section>
  );
}
