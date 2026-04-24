export default function Slide1() {
  return (
    <section className="section" style={{ background: "#0D0D0D", borderTop: "none" }}>
      {/* Large sphere — top right */}
      <div
        className="orb"
        style={{
          top: "-140px", right: "-100px",
          width: "520px", height: "520px",
          background: "radial-gradient(circle at 38% 38%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 45%, transparent 68%)",
          filter: "blur(4px)",
        }}
      />
      {/* Smaller sphere — center-bottom */}
      <div
        className="orb"
        style={{
          bottom: "-80px", left: "38%",
          width: "360px", height: "360px",
          background: "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 70%)",
          filter: "blur(5px)",
        }}
      />

      {/* Crosshair marks */}
      <span className="absolute top-7 right-9 text-xl font-thin select-none" style={{ color: "rgba(245,242,238,0.2)", lineHeight: 1 }}>+</span>
      <span className="absolute bottom-9 right-14 text-xl font-thin select-none" style={{ color: "rgba(245,242,238,0.2)", lineHeight: 1 }}>+</span>

      {/* Content pinned to bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="slide-container pb-16">
          <h1
            style={{
              fontSize: "clamp(4.5rem, 10vw, 8.5rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            <span className="amber">Sole</span>
            <span style={{ color: "#F5F2EE" }}>-arium</span>
          </h1>
          <p
            className="mt-4"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              color: "#F5F2EE",
              fontWeight: 500,
              letterSpacing: "0.02em",
              opacity: 0.75,
            }}
          >
            Every Step, Corrected!
          </p>
        </div>
      </div>
    </section>
  );
}
