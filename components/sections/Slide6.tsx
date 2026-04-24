const props = [
  {
    num: "1",
    title: "Clinical\n(biomechanical)\nPrecision",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="16" cy="23" rx="10" ry="4" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <path d="M7 23 C7 16 9 10 16 8 C23 10 25 16 25 23" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <path d="M10 23 C10 18 12 13 16 12 C20 13 22 18 22 23" stroke="#d97706" strokeWidth="1.2" strokeDasharray="2 1.5" fill="none"/>
        <circle cx="16" cy="8" r="1.8" fill="#d97706"/>
        <line x1="13" y1="18" x2="19" y2="18" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="16" y1="15" x2="16" y2="21" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "2",
    title: "Aesthetic\nDesign",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22 Q8 16 14 15 Q20 14 26 18 L28 22 Q22 20 16 21 Q10 22 6 26 Z" stroke="#d97706" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        <path d="M6 26 Q10 24 16 23 Q22 22 28 24" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <ellipse cx="9" cy="24" rx="3" ry="2" stroke="#d97706" strokeWidth="1.2" fill="none"/>
        <ellipse cx="22" cy="21" rx="3" ry="2" stroke="#d97706" strokeWidth="1.2" fill="none"/>
        <path d="M14 15 Q16 10 20 10 Q22 10 22 13" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "3",
    title: "DTC (direct-\nto-customer)\nAccessibility",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="13" width="17" height="12" rx="2" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <path d="M20 16 L26 16 L28 20 L28 25 L20 25 Z" stroke="#d97706" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
        <circle cx="8" cy="27" r="2" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <circle cx="23" cy="27" r="2" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <path d="M16 13 L16 8 L20 8 L20 13" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinejoin="round"/>
        <path d="M8 8 Q12 4 16 8" stroke="#d97706" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="1" fill="#d97706"/>
      </svg>
    ),
  },
  {
    num: "4",
    title: "Personalised\northopaedic\nprescription &\nexercises",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="16" height="22" rx="2" stroke="#d97706" strokeWidth="1.4" fill="none"/>
        <line x1="11" y1="10" x2="21" y2="10" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="21" y2="14" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="18" x2="17" y2="18" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="5" stroke="#d97706" strokeWidth="1.4" fill="rgba(217,119,6,0.08)"/>
        <line x1="24" y1="21.5" x2="24" y2="26.5" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="21.5" y1="24" x2="26.5" y2="24" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round"/>
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
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">

          {/* Left: heading */}
          <div className="flex-shrink-0 lg:w-[240px]">
            <p className="slide-label mb-3">Why us</p>
            <h2 className="slide-heading">
              Value<br />
              <span className="amber">Proposition</span>
            </h2>
          </div>

          {/* Right: 4 oval pills */}
          <div className="flex flex-row flex-wrap gap-5 flex-1">
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
