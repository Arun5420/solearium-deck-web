const steps = [
  {
    num: "01",
    label: "Capture",
    title: "Measure",
    desc: "Gait analysis + pressure sensing + 3D scan",
    icon: (
      /* Foot standing on a platform with a 3D scanner scanning it from the side */
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Platform base */}
        <rect x="8" y="66" width="50" height="7" rx="2" stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.07)"/>
        {/* Foot silhouette (side view) */}
        <path d="M16 66 L16 50 Q16 40 22 36 Q30 32 38 36 Q44 40 42 50 L42 58 Q46 56 50 58 Q54 62 50 65 Q44 66 30 66 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.06)" strokeLinejoin="round"/>
        {/* 3 horizontal scan lines */}
        <line x1="8" y1="44" x2="60" y2="44" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <line x1="8" y1="52" x2="60" y2="52" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        <line x1="8" y1="60" x2="60" y2="60" stroke="#d97706" strokeWidth="1" strokeDasharray="3 2" opacity="0.5"/>
        {/* Scanner device body */}
        <rect x="60" y="36" width="14" height="26" rx="2" stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.05)"/>
        {/* Scanner lens */}
        <circle cx="67" cy="49" r="4" stroke="#d97706" strokeWidth="1.2" fill="none"/>
        <circle cx="67" cy="49" r="1.5" fill="#d97706" opacity="0.5"/>
        {/* Scan beam (triangle pointing left from scanner) */}
        <path d="M60 44 L52 49 L60 54 Z" stroke="#d97706" strokeWidth="1" fill="rgba(217,119,6,0.12)" strokeLinejoin="round"/>
        {/* Point-cloud dots under foot */}
        <circle cx="21" cy="63" r="1" fill="#d97706" opacity="0.45"/>
        <circle cx="27" cy="63" r="1" fill="#d97706" opacity="0.45"/>
        <circle cx="33" cy="63" r="1" fill="#d97706" opacity="0.45"/>
        <circle cx="39" cy="63" r="1" fill="#d97706" opacity="0.45"/>
        {/* "3D" label on scanner top */}
        <text x="67" y="34" textAnchor="middle" fontSize="7" fontWeight="700" fill="#d97706">3D</text>
      </svg>
    ),
  },
  {
    num: "02",
    label: "Model",
    title: "Analyze & Prescribe",
    desc: "Personal Biomechanical analysis & prescription",
    icon: (
      /* X-ray side view of foot/ankle skeleton with data chart suggesting analysis */
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Heel bone (calcaneus) */}
        <rect x="8" y="44" width="20" height="24" rx="7" stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.05)"/>
        {/* Ankle bone */}
        <circle cx="30" cy="44" r="8" stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.04)"/>
        {/* Metatarsal bones (3 curved lines going toward toes) */}
        <path d="M30 38 Q48 30 66 26" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M30 42 Q48 36 64 34" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.65"/>
        <path d="M30 48 Q46 46 62 44" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45"/>
        {/* Toe bones (small circles) */}
        <circle cx="68" cy="24" r="4" stroke="#d97706" strokeWidth="1.2" fill="rgba(217,119,6,0.04)"/>
        <circle cx="66" cy="32" r="3.5" stroke="#d97706" strokeWidth="1.2" fill="rgba(217,119,6,0.04)"/>
        <circle cx="64" cy="40" r="3" stroke="#d97706" strokeWidth="1.2" fill="rgba(217,119,6,0.04)"/>
        {/* Data chart (upper-left area) */}
        <rect x="8" y="8" width="24" height="18" rx="2" stroke="#d97706" strokeWidth="1.2" fill="rgba(217,119,6,0.04)"/>
        <rect x="11" y="16" width="3.5" height="8" fill="#d97706" opacity="0.55"/>
        <rect x="16" y="12" width="3.5" height="12" fill="#d97706" opacity="0.75"/>
        <rect x="21" y="14" width="3.5" height="10" fill="#d97706" opacity="0.65"/>
        <rect x="26" y="11" width="3.5" height="13" fill="#d97706" opacity="0.85"/>
        {/* Dashed line connecting chart to ankle */}
        <line x1="32" y1="18" x2="28" y2="38" stroke="#d97706" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.5"/>
        {/* Vertical measurement arrow on left */}
        <line x1="4" y1="44" x2="4" y2="68" stroke="#d97706" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
        <path d="M2 46 L4 43 L6 46" stroke="#d97706" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
        <path d="M2 66 L4 69 L6 66" stroke="#d97706" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6"/>
      </svg>
    ),
  },
  {
    num: "03",
    label: "Design",
    title: "Design & Manufacture",
    desc: "Personalised orthotic via CAD/CAM engineering",
    icon: (
      /* 3D insole/orthotic top-view with CAD contour lines and a mouse cursor */
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Insole outline (elongated oval, slightly heel-wider) */}
        <path d="M22 70 Q12 64 12 52 Q12 36 18 26 Q24 16 34 14 Q44 12 52 18 Q62 24 64 36 Q66 48 62 58 Q56 68 44 72 Q34 74 22 70 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.05)"/>
        {/* CAD contour lines across insole surface */}
        <path d="M24 28 Q36 20 48 26 Q58 30 62 38" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M18 40 Q28 30 42 32 Q56 34 64 46" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M14 52 Q24 42 40 44 Q56 46 64 58" stroke="#d97706" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M16 62 Q26 54 40 56 Q52 58 60 68" stroke="#d97706" strokeWidth="0.8" fill="none" opacity="0.4"/>
        {/* Control points on contour lines */}
        <circle cx="36" cy="21" r="2" fill="#d97706" opacity="0.6"/>
        <circle cx="52" cy="34" r="2" fill="#d97706" opacity="0.6"/>
        <circle cx="38" cy="43" r="2" fill="#d97706" opacity="0.6"/>
        {/* Mouse/cursor icon (top-right) */}
        <path d="M60 8 L60 22 L63 18.5 L65.5 24 L67.5 23 L65 17.5 L69 17.5 Z"
          stroke="#d97706" strokeWidth="1.2" fill="rgba(217,119,6,0.12)" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    label: "Deliver",
    title: "Deliver & Scale",
    desc: "Custom footwear shipped direct-to-customer",
    icon: (
      /* Isometric delivery box labeled "SA" with arrows pointing to a shoe below */
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Box top face */}
        <path d="M40 8 L60 17 L40 26 L20 17 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.08)" strokeLinejoin="round"/>
        {/* Box left face */}
        <path d="M20 17 L20 38 L40 47 L40 26 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.05)" strokeLinejoin="round"/>
        {/* Box right face */}
        <path d="M40 26 L40 47 L60 38 L60 17 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.03)" strokeLinejoin="round"/>
        {/* Center seam on top */}
        <line x1="40" y1="8" x2="40" y2="26" stroke="#d97706" strokeWidth="1" opacity="0.4"/>
        {/* "SA" brand text on right face */}
        <text x="50" y="35" textAnchor="middle" fontSize="8" fontWeight="700" fill="#d97706" opacity="0.85">SA</text>
        {/* Down arrow */}
        <line x1="40" y1="49" x2="40" y2="58" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M36 55 L40 60 L44 55" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Shoe silhouette below */}
        <path d="M16 76 Q20 67 28 66 Q38 64 46 67 L52 69 Q48 72 40 73 Q30 75 22 77 Z"
          stroke="#d97706" strokeWidth="1.5" fill="rgba(217,119,6,0.05)" strokeLinejoin="round"/>
        <path d="M16 76 Q18 78 22 78 L40 73" stroke="#d97706" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55"/>
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
              {/* Teal icon box — sized to the 80×80 icon */}
              <div
                className="relative z-10 mb-4 flex items-center justify-center"
                style={{
                  border: "1.5px solid #14b8a6",
                  borderRadius: "12px",
                  padding: "14px",
                  background: "rgba(20,184,166,0.04)",
                  width: "fit-content",
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
