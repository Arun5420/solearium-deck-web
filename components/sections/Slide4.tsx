const segments = [
  {
    title: "Medical Condition",
    desc: "Diabetic Foot, Leprosy, Polio, Charcot Arthropathy, Arthritis, Varicos Veins",
    tag: "High urgency, Doctors driven",
  },
  {
    title: "Performance",
    desc: "Athletes, other sports persons",
    tag: "High willingness to pay",
  },
  {
    title: "Structural Issues",
    desc: "Flat feet, High Arches, Bunions, Hammer toes etc",
    tag: "Large, silent population",
  },
  {
    title: "Occupational",
    desc: "Long standing jobs (teachers, nurses etc)",
    tag: "Daily pain, Repeated usage",
  },
  {
    title: "Injury & Recovery",
    desc: "Plantar Fascitis, Post-Surgical, ACL tear, fracture etc",
    tag: "Active seekers, high conversion",
  },
  {
    title: "General Comfort",
    desc: "Overpronation, Supination, fatigue, back/knee/ankle pain",
    tag: "Mass entry point",
  },
];

export default function Slide4() {
  return (
    <section className="section">
      {/* Orbs */}
      <div
        className="orb"
        style={{
          top: "-50px", right: "-50px",
          width: "200px", height: "200px",
          background: "radial-gradient(circle, rgba(232,160,32,0.55) 0%, rgba(232,160,32,0.1) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="orb"
        style={{
          bottom: "-70px", left: "-50px",
          width: "220px", height: "220px",
          background: "radial-gradient(circle, rgba(232,160,32,0.55) 0%, rgba(232,160,32,0.08) 50%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-12">
          <p className="slide-label mb-3">Who we serve</p>
          <h2 className="slide-heading">
            Target <span className="amber">Market</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {segments.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div
                className="w-6 h-0.5 mb-3"
                style={{ background: "#E8A020" }}
              />
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#F5F2EE",
                  lineHeight: 1.3,
                  marginBottom: "0.4rem",
                }}
              >
                {s.title}
              </p>
              <p className="slide-body">{s.desc}</p>
              <p className="mt-2" style={{ fontSize: "0.75rem", color: "rgba(245,242,238,0.4)", fontStyle: "italic" }}>
                {s.tag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
