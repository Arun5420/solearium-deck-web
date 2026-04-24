const rows = [
  { solution: "Generic OTC insoles\n(Tynor, Scholl, Frido)", clinical: false, aesthetic: true, dtc: true },
  { solution: "Local orthotist workshops", clinical: "partial", aesthetic: false, dtc: false },
  { solution: "Hospital rehab departments", clinical: true, aesthetic: false, dtc: false },
  { solution: "Government schemes (ALIMCO)", clinical: "partial", aesthetic: false, dtc: false },
  { solution: "Global brands (Superfeet, Bauerfeind)", clinical: true, aesthetic: "partial", dtc: false },
  { solution: "Sole-Arium", clinical: true, aesthetic: true, dtc: true, highlight: true },
];

const Cell = ({ val }: { val: boolean | string }) => {
  if (val === true) return <span className="check-yes text-base">✓</span>;
  if (val === false) return <span className="check-no text-base">✗</span>;
  return <span className="check-partial text-sm">~</span>;
};

export default function Slide9() {
  return (
    <section className="section">
      {/* Orb top-right */}
      <div
        className="orb"
        style={{
          top: "-30px", right: "-30px",
          width: "160px", height: "160px",
          background: "radial-gradient(circle, rgba(217,119,6,0.55) 0%, rgba(217,119,6,0.08) 50%, transparent 70%)",
          filter: "blur(3px)",
        }}
      />

      <div className="slide-container z-10">
        <div className="mb-10">
          <p className="slide-label mb-3">Competitive landscape</p>
          <h2 className="slide-heading">
            Competitor <span className="amber">Analysis</span>
          </h2>
        </div>

        <table className="deck-table">
          <thead>
            <tr>
              <th style={{ width: "36%" }}>Solution</th>
              <th className="text-center">Clinical Precision / Accuracy</th>
              <th className="text-center">Aesthetic Design, Wearability</th>
              <th className="text-center">DTC Accessibility</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={r.highlight ? "row-highlight" : ""}>
                <td style={{ whiteSpace: "pre-line" }}>{r.solution}</td>
                <td className="text-center"><Cell val={r.clinical} /></td>
                <td className="text-center"><Cell val={r.aesthetic} /></td>
                <td className="text-center"><Cell val={r.dtc} /></td>
              </tr>
            ))}
          </tbody>
        </table>

        <p
          className="mt-8"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.1rem)", color: "rgba(13,13,13,0.7)" }}
        >
          Every solution fails on{" "}
          <strong style={{ color: "#0d0d0d" }}>at least two of three dimensions</strong>
        </p>
      </div>
    </section>
  );
}
