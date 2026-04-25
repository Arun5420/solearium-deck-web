export default function Slide1() {
  return (
    <section
      className="section"
      style={{
        background: "#f9f8f3",
        borderTop: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Amber orb — top right, large */}
      <div
        className="orb"
        style={{
          top: "-100px", right: "-140px",
          width: "680px", height: "680px",
          background: "radial-gradient(circle at 38% 38%, rgba(217,119,6,0.06) 0%, rgba(217,119,6,0.02) 50%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      {/* Amber orb — bottom left, medium */}
      <div
        className="orb"
        style={{
          bottom: "-110px", left: "-90px",
          width: "500px", height: "500px",
          background: "radial-gradient(circle at 50% 50%, rgba(217,119,6,0.05) 0%, rgba(217,119,6,0.015) 50%, transparent 70%)",
          filter: "blur(12px)",
        }}
      />
      {/* Amber orb — top left, small */}
      <div
        className="orb"
        style={{
          top: "50px", left: "50px",
          width: "300px", height: "300px",
          background: "radial-gradient(circle at 50% 50%, rgba(217,119,6,0.04) 0%, transparent 68%)",
          filter: "blur(8px)",
        }}
      />

      {/* Crosshair marks */}
      <span className="absolute top-7 right-9 text-xl font-thin select-none" style={{ color: "rgba(13,13,13,0.2)", lineHeight: 1 }}>+</span>
      <span className="absolute bottom-9 right-14 text-xl font-thin select-none" style={{ color: "rgba(13,13,13,0.2)", lineHeight: 1 }}>+</span>

      {/* Centered hero content */}
      <div
        className="z-10 flex flex-col items-center text-center"
        style={{ padding: "2rem", maxWidth: "700px" }}
      >
        <h1
          style={{
            fontSize: "clamp(5.5rem, 13vw, 11rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          <span className="amber">Sole</span>
          <span style={{ color: "#0d0d0d" }}>-arium</span>
        </h1>

        {/* Amber divider */}
        <div
          style={{
            width: "40px",
            height: "2px",
            background: "#d97706",
            margin: "1.75rem auto 1.5rem",
            borderRadius: "1px",
          }}
        />

        <p
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

        <p
          style={{
            fontSize: "clamp(0.8rem, 1.1vw, 1rem)",
            color: "#0d0d0d",
            fontWeight: 300,
            letterSpacing: "0.01em",
            opacity: 0.62,
            maxWidth: "500px",
            marginTop: "0.85rem",
            lineHeight: 1.65,
          }}
        >
          The biomechanical intelligence layer for how India moves — starting beneath the foot
        </p>
      </div>
    </section>
  );
}
