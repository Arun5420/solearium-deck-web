const props = [
  { num: "1", title: "Clinical\n(biomechanical)\nPrecision" },
  { num: "2", title: "Aesthetic\nDesign" },
  { num: "3", title: "DTC (direct-\nto-customer)\nAccessibility" },
  { num: "4", title: "Personalised\northopaedic\nprescription &\nexercises" },
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
