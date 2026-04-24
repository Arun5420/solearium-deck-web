export default function Slide15() {
  return (
    <section className="section" style={{ borderTop: "1px solid rgba(13,13,13,0.08)" }}>
      {/* Amber orbs */}
      <div
        className="orb"
        style={{
          bottom: "-60px", left: "-60px",
          width: "260px", height: "260px",
          background: "radial-gradient(circle, #d97706 0%, rgba(217,119,6,0.35) 40%, transparent 65%)",
          filter: "blur(1px)",
        }}
      />
      <div
        className="orb"
        style={{
          top: "-60px", right: "-60px",
          width: "240px", height: "240px",
          background: "radial-gradient(circle, #d97706 0%, rgba(217,119,6,0.3) 40%, transparent 65%)",
          filter: "blur(1px)",
        }}
      />
      <span className="absolute bottom-10 right-14 text-xl select-none" style={{ color: "rgba(13,13,13,0.15)" }}>+</span>

      <div className="slide-container z-10 flex flex-col items-center text-center">
        <h1
          style={{
            fontSize: "clamp(5rem, 14vw, 10rem)",
            fontWeight: 900,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          <span className="amber">THANK </span>
          <span style={{ color: "#0d0d0d" }}>YOU</span>
        </h1>

        <div
          style={{
            width: "60px",
            height: "1px",
            background: "rgba(13,13,13,0.2)",
            margin: "2.5rem auto",
          }}
        />

        <div className="flex flex-col gap-2">
          <p style={{ fontSize: "1rem", fontWeight: 600, color: "#0d0d0d" }}>
            Have any question?
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(13,13,13,0.6)" }}>
            business@sole-arium.com
          </p>
          <p style={{ fontSize: "0.9rem", color: "rgba(13,13,13,0.6)" }}>
            +91 7230945132
          </p>
        </div>

        <a
          href="https://www.sole-arium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 500,
            color: "#0d0d0d",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            opacity: 0.8,
          }}
        >
          https://www.sole-arium.com/
        </a>
      </div>
    </section>
  );
}
