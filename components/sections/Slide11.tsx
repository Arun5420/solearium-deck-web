const tiers = [
  {
    label: "Fully Custom",
    rows: [
      { variant: "Moderate", cogs: "₹3,622", price: "₹7,999" },
      { variant: "Premium", cogs: "₹4,222", price: "₹9,499" },
      { variant: "Blended", cogs: "₹3,922", price: "₹8,749", bold: true },
    ],
    fixed: "₹2,597",
    materials: "₹1,025–₹1,625",
  },
  {
    label: "Semi-Custom",
    rows: [
      { variant: "Low Cost", cogs: "₹2,200", price: "₹4,899" },
      { variant: "Moderate", cogs: "₹2,650", price: "₹5,999" },
      { variant: "Premium", cogs: "₹3,250", price: "₹7,199" },
      { variant: "Blended", cogs: "₹2,700", price: "₹6,032", bold: true },
    ],
    fixed: "₹1,625",
    materials: "₹575–₹1,425",
  },
  {
    label: "OTC",
    rows: [
      { variant: "Basic", cogs: "₹800", price: "₹1,799" },
      { variant: "Standard", cogs: "₹1,025", price: "₹2,299" },
      { variant: "Premium", cogs: "₹1,425", price: "₹3,199" },
      { variant: "Blended", cogs: "₹1,083", price: "₹2,432", bold: true },
    ],
    fixed: "₹550",
    materials: "₹275–₹775",
  },
];

export default function Slide11() {
  return (
    <section className="section">
      <div className="slide-container z-10">
        <div className="mb-10">
          <p className="slide-label mb-3">Financials</p>
          <h2 className="slide-heading">
            Unit Economics{" "}
            <span className="amber">and Gross Margin</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t, ti) => (
            <div key={ti}>
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(13,13,13,0.4)",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                {t.label}
              </p>

              <table className="deck-table w-full" style={{ marginBottom: "0.75rem" }}>
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th className="text-right">COGS</th>
                    <th className="text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {t.rows.map((r, ri) => (
                    <tr key={ri} className={r.bold ? "row-highlight" : ""}>
                      <td>{r.variant}</td>
                      <td className="text-right" style={{ color: "rgba(13,13,13,0.55)" }}>{r.cogs}</td>
                      <td className="text-right">{r.price}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan={2} style={{ color: "rgba(13,13,13,0.35)", fontSize: "0.75rem" }}>
                      Fixed Costs
                    </td>
                    <td className="text-right" style={{ color: "rgba(13,13,13,0.5)", fontSize: "0.75rem" }}>
                      {t.fixed}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ color: "rgba(13,13,13,0.3)", fontSize: "0.72rem" }}>
                      Materials: {t.materials}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div
                className="flex items-center gap-2 mt-3"
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 900,
                    color: "#d97706",
                    lineHeight: 1,
                  }}
                >
                  55%
                </span>
                <span className="slide-label">Gross Margin</span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-10 pt-6"
          style={{ borderTop: "1px solid rgba(13,13,13,0.07)" }}
        >
          <p className="slide-label" style={{ letterSpacing: "0.1em" }}>
            Keeping consistent gross margin of 55% across products
          </p>
        </div>
      </div>
    </section>
  );
}
