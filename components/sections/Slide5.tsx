const steps = [
  {
    num: "01",
    label: "Capture",
    title: "Measure",
    desc: "Gait analysis + pressure sensing + 3D scan",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="18" cy="26" rx="13" ry="5" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <path d="M8 26 C8 18 10 12 18 10 C26 12 28 18 28 26" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <path d="M12 26 C12 20 14 15 18 14 C22 15 24 20 24 26" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="2 2" fill="none"/>
        <circle cx="18" cy="10" r="2" fill="#14b8a6"/>
        <line x1="18" y1="4" x2="18" y2="8" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="6" y1="16" x2="10" y2="18" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="30" y1="16" x2="26" y2="18" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Model",
    title: "Analyze & Prescribe",
    desc: "Personal Biomechanical analysis & prescription",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="28" height="22" rx="2" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <polyline points="8,20 12,14 16,17 20,10 24,13 28,7" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="20" cy="10" r="2" fill="#14b8a6"/>
        <line x1="12" y1="30" x2="24" y2="30" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="18" y1="26" x2="18" y2="30" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Design",
    title: "Design & Manufacture",
    desc: "Personalised orthotic via CAD/CAM engineering",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="5" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="18" r="2" fill="#14b8a6"/>
        <path d="M18 6 L20 10 L18 9 L16 10 Z" fill="#14b8a6"/>
        <path d="M18 30 L20 26 L18 27 L16 26 Z" fill="#14b8a6"/>
        <path d="M6 18 L10 20 L9 18 L10 16 Z" fill="#14b8a6"/>
        <path d="M30 18 L26 20 L27 18 L26 16 Z" fill="#14b8a6"/>
        <path d="M9.5 9.5 L12.5 13 L11 12.5 L10.5 14 Z" fill="#14b8a6"/>
        <path d="M26.5 26.5 L23.5 23 L25 23.5 L25.5 22 Z" fill="#14b8a6"/>
        <path d="M26.5 9.5 L23 12.5 L23.5 11 L22 10.5 Z" fill="#14b8a6"/>
        <path d="M9.5 26.5 L13 23.5 L12.5 25 L14 25.5 Z" fill="#14b8a6"/>
        <circle cx="18" cy="6" r="1.5" stroke="#14b8a6" strokeWidth="1" fill="none"/>
        <circle cx="18" cy="30" r="1.5" stroke="#14b8a6" strokeWidth="1" fill="none"/>
        <circle cx="6" cy="18" r="1.5" stroke="#14b8a6" strokeWidth="1" fill="none"/>
        <circle cx="30" cy="18" r="1.5" stroke="#14b8a6" strokeWidth="1" fill="none"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Deliver",
    title: "Deliver & Scale",
    desc: "Custom footwear shipped direct-to-customer",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="20" height="14" rx="2" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <path d="M24 16 L30 16 L32 22 L32 26 L24 26 Z" stroke="#14b8a6" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        <circle cx="10" cy="28" r="2.5" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <circle cx="27" cy="28" r="2.5" stroke="#14b8a6" strokeWidth="1.5" fill="none"/>
        <line x1="8" y1="12" x2="8" y2="8" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="5" y1="8" x2="11" y2="8" stroke="#14b8a6" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="14" y1="8" x2="20" y2="8" stroke="#14b8a6" strokeWidth="1.2" strokeDasharray="1.5 1.5" strokeLinecap="round"/>
      </svg>
    ),
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
              {/* Teal icon box */}
              <div
                className="relative z-10 mb-4 inline-flex items-center justify-center"
                style={{
                  border: "1.5px solid #14b8a6",
                  borderRadius: "12px",
                  padding: "16px",
                  background: "rgba(20,184,166,0.04)",
                }}
              >
                {s.icon}
              </div>
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
