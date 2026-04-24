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

// Nodes at -90° (top), 0° (right), 90° (bottom), 180° (left) on r=72 circle at (110,110)
const nodeData = [
  { x: 110, y: 38,  label: "More\nPatients" },
  { x: 182, y: 110, label: "More\nData" },
  { x: 110, y: 182, label: "Smarter\nPrescriptions" },
  { x: 38,  y: 110, label: "Better\nOutcomes" },
];

// Each arc is 50° clockwise: departure = node_angle+20°, arrival = next_node_angle-20°
// Using SVG arc command: A rx ry x-rot large-arc-flag sweep-flag x y  (sweep=1 = clockwise)
const arcPaths = [
  { from: [134.6, 42.3],  to: [177.7, 85.4],  id: "fa0" }, // top  → right
  { from: [177.7, 134.6], to: [134.6, 177.7],  id: "fa1" }, // right → bottom
  { from: [85.4,  177.7], to: [42.3,  134.6],  id: "fa2" }, // bottom → left
  { from: [42.3,  85.4],  to: [85.4,  42.3],   id: "fa3" }, // left  → top  (completes loop)
];

function FlywheelSVG() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {arcPaths.map(a => (
          <marker key={a.id} id={a.id} markerWidth="7" markerHeight="7" refX="5.5" refY="3.5" orient="auto">
            <path d="M0,0 L0,7 L7,3.5 Z" fill="#d97706"/>
          </marker>
        ))}
      </defs>

      <style>{`
        @keyframes flywheel-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .flywheel-ring { transform-origin: 110px 110px; animation: flywheel-spin 12s linear infinite; }
      `}</style>

      {/* Rotating dashed ring */}
      <circle
        className="flywheel-ring"
        cx="110" cy="110" r="72"
        stroke="#d97706" strokeWidth="2" strokeDasharray="8 6"
        fill="none" opacity="0.35"
      />

      {/* 4 arc arrows — each a 50° clockwise arc, completing a full closed loop */}
      {arcPaths.map(a => (
        <path
          key={a.id}
          d={`M ${a.from[0]} ${a.from[1]} A 72 72 0 0 1 ${a.to[0]} ${a.to[1]}`}
          stroke="#d97706" strokeWidth="2" strokeLinecap="round"
          fill="none" markerEnd={`url(#${a.id})`}
        />
      ))}

      {/* Node circles */}
      {nodeData.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="20" fill="#14b8a6" opacity="0.12"/>
          <circle cx={n.x} cy={n.y} r="20" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
          <text
            x={n.x} y={n.y - 4}
            textAnchor="middle"
            fontSize="6.5" fontWeight="700" fill="#0d0d0d"
          >
            {n.label.split("\n").map((line, li) => (
              <tspan key={li} x={n.x} dy={li === 0 ? "0" : "9"}>{line}</tspan>
            ))}
          </text>
        </g>
      ))}

      {/* Center circle + label */}
      <circle cx="110" cy="110" r="32" fill="rgba(20,184,166,0.07)" stroke="#14b8a6" strokeWidth="1" strokeDasharray="3 3"/>
      <text x="110" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0d0d0d">The Flywheel</text>
      <text x="110" y="118" textAnchor="middle" fontSize="8" fontWeight="700" fill="#d97706">Effect</text>
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
                  <span className="text-xs font-black" style={{ color: "#d97706" }}>{p.num}.</span>{" "}
                  <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#0d0d0d" }}>{p.label}</span>
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
                  <span className="flex-shrink-0 font-black text-sm mt-0.5" style={{ color: "#d97706", width: "16px" }}>
                    {a.num}.
                  </span>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#0d0d0d" }}>{a.title}</p>
                    <p className="slide-body mt-0.5">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom quote */}
        <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(13,13,13,0.07)" }}>
          <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)", color: "rgba(13,13,13,0.7)", lineHeight: 1.6 }}>
            We are not building a better insole. We are building India&apos;s{" "}
            <span style={{ color: "#0d0d0d", fontWeight: 600 }}>biomechanical correction infrastructure</span>
            , starting with footwear.
          </p>
        </div>
      </div>
    </section>
  );
}
