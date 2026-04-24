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
            <div
              className="flex items-center justify-center rounded-full mx-auto"
              style={{
                width: "180px",
                height: "180px",
                border: "2px solid rgba(232,160,32,0.35)",
                background: "rgba(232,160,32,0.05)",
              }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(245,242,238,0.6)",
                  lineHeight: 1.5,
                  textAlign: "center",
                  padding: "0 1rem",
                }}
              >
                The flywheel effect: the more patients we serve, the smarter our prescriptions become
              </p>
            </div>
          </div>

          {/* Tech Pipeline */}
          <div>
            <p className="slide-label mb-5">Our Technology Pipeline</p>
            <div className="grid grid-cols-2 gap-3">
              {pipeline.map((p, i) => (
                <div key={i}>
                  <span
                    className="text-xs font-black"
                    style={{ color: "#E8A020" }}
                  >
                    {p.num}.
                  </span>{" "}
                  <span
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "#F5F2EE",
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
                color: "rgba(245,242,238,0.35)",
                paddingTop: "0.75rem",
                borderTop: "1px solid rgba(245,242,238,0.07)",
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
                    style={{ color: "#E8A020", width: "16px" }}
                  >
                    {a.num}.
                  </span>
                  <div>
                    <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "#F5F2EE" }}>
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
          style={{ borderTop: "1px solid rgba(245,242,238,0.07)" }}
        >
          <p style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)", color: "rgba(245,242,238,0.7)", lineHeight: 1.6 }}>
            We are not building a better insole. We are building India&apos;s{" "}
            <span style={{ color: "#F5F2EE", fontWeight: 600 }}>
              biomechanical correction infrastructure
            </span>
            , starting with footwear.
          </p>
        </div>
      </div>
    </section>
  );
}
