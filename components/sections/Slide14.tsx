const members = [
  { name: "Dipinder Sekhon",   role: "Mentor",           detail: "Founder, iKITES\nB.Tech. IIT Delhi",    initials: "DS" },
  { name: "Prashant Rewar",    role: "Tech Engineer",    detail: "B.Tech. IIT Delhi",                     initials: "PR" },
  { name: "Vivek Shrivastava", role: "Mentor",           detail: "Founder, HCAH India\nB.Tech. IIT Delhi", initials: "VS" },
  { name: "Shivam Mittal",     role: "CS Engineer",      detail: "B.Tech. IIIT Hyderabad",                initials: "SM" },
  { name: "Kirti Singh",       role: "Founders Office",  detail: "Miranda House",                         initials: "KS" },
  { name: "Priyanshu Pratik",  role: "ML Engineer",      detail: "B.Tech. IIT Delhi",                     initials: "PP" },
];

export default function Slide14() {
  return (
    <section className="section">
      {/* Orbs */}
      <div
        className="orb"
        style={{
          top: "-40px", left: "-40px",
          width: "180px", height: "180px",
          background: "radial-gradient(circle, rgba(217,119,6,0.6) 0%, rgba(217,119,6,0.08) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-40px", right: "-40px",
          width: "160px", height: "160px",
          background: "radial-gradient(circle, rgba(217,119,6,0.45) 0%, rgba(217,119,6,0.06) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <span className="absolute top-8 right-10 text-xl select-none" style={{ color: "rgba(13,13,13,0.15)" }}>+</span>

      <div className="slide-container z-10">
        <div className="mb-12 text-center">
          <p className="slide-label mb-3">Extended team</p>
          <h2 className="slide-heading">
            Our <span className="amber">Team</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
          {members.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-6">
              <div
                className="flex items-center justify-center font-black rounded-2xl"
                style={{
                  width: "120px",
                  height: "120px",
                  background: "rgba(217,119,6,0.08)",
                  border: "1px solid rgba(217,119,6,0.2)",
                  color: "#d97706",
                  letterSpacing: "0.05em",
                  fontSize: "1.35rem",
                }}
              >
                {p.initials}
              </div>
              <div>
                <p style={{ fontSize: "18px", fontWeight: 700, color: "#0d0d0d", marginBottom: "0.35rem" }}>
                  {p.name}
                </p>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "#d97706", marginBottom: "0.5rem" }}>
                  {p.role}
                </p>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(13,13,13,0.4)",
                    lineHeight: 1.6,
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
