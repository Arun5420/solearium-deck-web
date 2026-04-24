const leaders = [
  {
    name: "Arun Mittal",
    role: "Co-founder & Co-CEO",
    detail: "B.Tech. IIT Delhi",
    initials: "AM",
  },
  {
    name: "Aryan Balotiya",
    role: "Co-founder & Co-CEO",
    detail: "B.Tech. IIT Delhi",
    initials: "AB",
  },
  {
    name: "Prof. Rajesh Khanna",
    role: "Advisor",
    detail: "Professor, IIT Delhi\nB.Tech. IIT Kanpur",
    initials: "RK",
  },
  {
    name: "Dr Govind Sing Bisht",
    role: "Medical Advisor",
    detail: "Associate Director, Podiatry (Footcare Specialist) — Max Healthcare\nExecutive Comittee, DFSI",
    initials: "GB",
  },
];

export default function Slide13() {
  return (
    <section className="section">
      {/* Orb top-left */}
      <div
        className="orb"
        style={{
          top: "-50px", left: "-50px",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(232,160,32,0.6) 0%, rgba(232,160,32,0.08) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <span className="absolute top-8 right-10 text-xl select-none" style={{ color: "rgba(245,242,238,0.15)" }}>+</span>

      <div className="slide-container z-10">
        <div className="mb-12 text-center">
          <p className="slide-label mb-3">The people</p>
          <h2 className="slide-heading">
            Our <span className="amber">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div
                className="flex items-center justify-center font-black text-lg rounded-2xl"
                style={{
                  width: "96px",
                  height: "96px",
                  background: "rgba(232,160,32,0.1)",
                  border: "1px solid rgba(232,160,32,0.25)",
                  color: "#E8A020",
                  letterSpacing: "0.05em",
                }}
              >
                {p.initials}
              </div>
              <div>
                <p style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F5F2EE", marginBottom: "0.2rem" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "#E8A020", marginBottom: "0.4rem" }}>
                  {p.role}
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(245,242,238,0.45)",
                    lineHeight: 1.55,
                    whiteSpace: "pre-line",
                  }}
                >
                  {p.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
