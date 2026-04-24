const steps = [
  {
    num: "01",
    label: "Capture",
    title: "Measure",
    desc: "Gait analysis + pressure sensing + 3D scan",
  },
  {
    num: "02",
    label: "Model",
    title: "Analyze & Prescribe",
    desc: "Personal Biomechanical analysis & prescription",
  },
  {
    num: "03",
    label: "Design",
    title: "Design & Manufacture",
    desc: "Personalised orthotic via CAD/CAM engineering",
  },
  {
    num: "04",
    label: "Deliver",
    title: "Deliver & Scale",
    desc: "Custom footwear shipped direct-to-customer",
  },
];

export default function Slide5() {
  return (
    <section className="section">
      {/* Orb top-right */}
      <div
        className="orb"
        style={{
          top: "-60px", right: "-50px",
          width: "220px", height: "220px",
          background: "radial-gradient(circle, rgba(217,119,6,0.6) 0%, rgba(217,119,6,0.1) 50%, transparent 70%)",
          filter: "blur(3px)",
        }}
      />
      {/* Orb bottom-left */}
      <div
        className="orb"
        style={{
          bottom: "-60px", left: "-40px",
          width: "180px", height: "180px",
          background: "radial-gradient(circle, rgba(217,119,6,0.4) 0%, transparent 65%)",
          filter: "blur(3px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-12">
          <p className="slide-label mb-3">How it works</p>
          <h2 className="slide-heading">
            Our <span className="amber">Solution</span>
          </h2>
        </div>

        {/* 4 steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-3 z-0"
                  style={{
                    left: "100%",
                    width: "calc(100% - 2rem)",
                    height: "1px",
                    background: "rgba(217,119,6,0.2)",
                    transform: "translateX(-50%)",
                  }}
                />
              )}
              <div
                className="text-xs font-black mb-3 relative z-10"
                style={{ color: "#d97706", letterSpacing: "0.1em" }}
              >
                {s.num}
              </div>
              <p
                className="slide-label mb-1 relative z-10"
                style={{ letterSpacing: "0.08em" }}
              >
                {s.label}
              </p>
              <p
                className="relative z-10"
                style={{ fontSize: "1rem", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.5rem" }}
              >
                {s.title}
              </p>
              <p className="slide-body relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Evolution of Support */}
        <div
          className="pt-7"
          style={{ borderTop: "1px solid rgba(13,13,13,0.07)" }}
        >
          <p className="slide-label mb-4">The Evolution of Support</p>
          <div className="flex flex-wrap items-center gap-3">
            {["OTC (Off-the-shelf)", "Semi-Custom", "Sole-Arium Fully Custom"].map((item, i, arr) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: i === arr.length - 1 ? 700 : 400,
                    color: i === arr.length - 1 ? "#d97706" : "rgba(13,13,13,0.45)",
                  }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: "rgba(13,13,13,0.2)", fontSize: "0.8rem" }}>→</span>
                )}
              </div>
            ))}
          </div>
          <p
            className="mt-4"
            style={{ fontSize: "0.82rem", color: "rgba(13,13,13,0.5)", lineHeight: 1.7 }}
          >
            <span style={{ color: "#d97706", fontWeight: 600 }}>Bottom line: </span>
            Clinical-grade correction without the hospital queues. Measurement driven by biomechanical intelligence, delivered with DTC efficiency.
          </p>
        </div>
      </div>
    </section>
  );
}
