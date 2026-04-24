const props = [
  {
    num: "1",
    title: "Clinical\n(biomechanical)\nPrecision",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Foot side profile */}
        <path d="M9 28 L9 17 Q9 9 14 7 Q19 5 22 9 Q25 12 24 17 L24 22 Q26 21 28 23 Q28 26 26 27 Q22 28 16 28 Z"
          stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        {/* Measurement angle at heel */}
        <line x1="4" y1="28" x2="12" y2="28" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="6" y1="28" x2="4" y2="21" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M5.5 27 Q6.5 27 6.5 25.5" stroke="#d97706" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "2",
    title: "Aesthetic\nDesign",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Shoe side silhouette */}
        <path d="M4 23 Q8 16 14 15 Q20 14 26 18 L28 22 Q22 20 16 21 Q10 22 6 26 Z"
          stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        {/* Sole underline */}
        <path d="M6 26 Q10 24 16 23 Q22 22 28 24" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        {/* Ankle collar */}
        <path d="M14 15 Q16 10 20 10 Q22 10 22 14" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "3",
    title: "DTC (direct-\nto-customer)\nAccessibility",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* House body */}
        <path d="M6 28 L6 15 L16 6 L26 15 L26 28 Z"
          stroke="#d97706" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
        {/* Roof peak line */}
        <line x1="3" y1="16" x2="16" y2="6" stroke="#d97706" strokeWidth="1" opacity="0" strokeLinecap="round"/>
        {/* Door */}
        <rect x="12" y="21" width="8" height="7" rx="1" stroke="#d97706" strokeWidth="1.2" fill="none"/>
        {/* Arrow pointing into house from above */}
        <line x1="16" y1="1" x2="16" y2="8" stroke="#d97706" strokeWidth="1.3" strokeLinecap="round"/>
        <path d="M13 6 L16 9 L19 6" stroke="#d97706" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    num: "4",
    title: "Personalised\northopaedic\nprescription &\nexercises",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Clipboard body */}
        <rect x="7" y="6" width="18" height="22" rx="2" stroke="#d97706" strokeWidth="1.5" fill="none"/>
        {/* Clip at top */}
        <path d="M12 6 L12 3 L20 3 L20 6" stroke="#d97706" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Text lines */}
        <line x1="10" y1="12" x2="22" y2="12" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="10" y1="16" x2="22" y2="16" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="10" y1="20" x2="16" y2="20" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        {/* Checkmark */}
        <path d="M11 23.5 L14 27 L21 19.5" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
];

export default function Slide6() {
  return (
    <section className="section">
      {/* Sphere top-left */}
      <div
        className="orb"
        style={{
          top: "-90px", left: "22%",
          width: "320px", height: "320px",
          background: "radial-gradient(circle at 42% 42%, rgba(13,13,13,0.04) 0%, transparent 58%)",
          filter: "blur(4px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="flex-shrink-0 lg:w-[240px]">
            <p className="slide-label mb-3">Why us</p>
            <h2 className="slide-heading">
              Value<br />
              <span className="amber">Proposition</span>
            </h2>
          </div>

          {/* Right: 4 oval pills in staircase (ascending left → right) */}
          <div
            className="flex flex-row gap-4 flex-1"
            style={{ alignItems: "flex-end" }}
          >
            {props.map((p, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center text-center px-6 py-8"
                style={{
                  border: "1.5px solid rgba(217,119,6,0.3)",
                  borderRadius: "999px",
                  minWidth: "148px",
                  minHeight: "210px",
                  flex: "1 1 140px",
                  maxWidth: "185px",
                  background: "rgba(217,119,6,0.04)",
                  marginBottom: `${i * 50}px`,
                }}
              >
                <div className="mb-3">
                  {p.icon}
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    color: "#0d0d0d",
                    lineHeight: 1.45,
                    whiteSpace: "pre-line",
                  }}
                >
                  {p.title}
                </p>
                <div
                  className="absolute flex items-center justify-center font-black text-xs"
                  style={{
                    bottom: "-14px",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#d97706",
                    color: "#f9f8f3",
                  }}
                >
                  {p.num}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
