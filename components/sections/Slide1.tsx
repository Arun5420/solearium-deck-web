export default function Slide1() {
  return (
    <section className="section" style={{ background: "#f9f8f3", borderTop: "none" }}>
      {/* Large sphere — top right */}
      <div
        className="orb"
        style={{
          top: "-140px", right: "-100px",
          width: "520px", height: "520px",
          background: "radial-gradient(circle at 38% 38%, rgba(13,13,13,0.06) 0%, rgba(13,13,13,0.015) 45%, transparent 68%)",
          filter: "blur(4px)",
        }}
      />
      {/* Smaller sphere — center-bottom */}
      <div
        className="orb"
        style={{
          bottom: "-80px", left: "38%",
          width: "360px", height: "360px",
          background: "radial-gradient(circle at 50% 30%, rgba(13,13,13,0.04) 0%, rgba(13,13,13,0.008) 50%, transparent 70%)",
          filter: "blur(5px)",
        }}
      />

      {/* Crosshair marks */}
      <span className="absolute top-7 right-9 text-xl font-thin select-none" style={{ color: "rgba(13,13,13,0.2)", lineHeight: 1 }}>+</span>
      <span className="absolute bottom-9 right-14 text-xl font-thin select-none" style={{ color: "rgba(13,13,13,0.2)", lineHeight: 1 }}>+</span>

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
            <span style={{ color: "#0d0d0d" }}>-arium</span>
          </h1>
          <p
            className="mt-4"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.15rem)",
              color: "#0d0d0d",
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
