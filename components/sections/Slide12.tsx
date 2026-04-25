const milestones = [
  { date: "2026\n31 May",  above: "",  below: "Product & Process trials/\ntesting done, PMF achieved" },
  { date: "2026\n30 June", above: "100 pairs sold\nin Delhi NCR region", below: "" },
  { date: "2026\n30 Sept", above: "",  below: "Clinical & Community\npartnerships done\nin NCR region" },
  { date: "2026\n31 Dec",  above: "Semi-custom launched,\npre-order website\npipeline live", below: "" },
  { date: "2027\n30 June", above: "",  below: "Expanded to all Tier 1\ncities of India,\n5000+ pairs sold,\nB2B expansion" },
  { date: "2028\n30 June", above: "15000+ pairs sold,\nExpanded to tier-2 &\ntier-3, OTC line\nlaunched on e-commerce", below: "" },
  { date: "2028\n31 Dec",  above: "",  below: "Preventive biomechanics\ndevices for DFU\nprevention launch\n(patentable)" },
  { date: "2029\n30 June", above: "Self-adjusting smart\nfootwear launch\nNational Sports Federation,\nArmed forces partnerships", below: "" },
];

function DownConnector() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 0, height: "20px", borderLeft: "1.5px dashed rgba(13,13,13,0.3)" }} />
      <div style={{ width: 0, height: 0, borderLeft: "3.5px solid transparent", borderRight: "3.5px solid transparent", borderTop: "5px solid rgba(13,13,13,0.3)" }} />
    </div>
  );
}

function UpConnector() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: 0, height: 0, borderLeft: "3.5px solid transparent", borderRight: "3.5px solid transparent", borderBottom: "5px solid rgba(13,13,13,0.3)" }} />
      <div style={{ width: 0, height: "20px", borderLeft: "1.5px dashed rgba(13,13,13,0.3)" }} />
    </div>
  );
}

export default function Slide12() {
  return (
    <section className="section">
      <div className="slide-container z-10">
        <div className="mb-12 text-center">
          <p className="slide-label mb-3">Milestones</p>
          <h2 className="slide-heading">
            The <span className="amber">Road Ahead</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: "900px" }}>

            {/* Above-line labels — text at top, connector arrow at bottom pointing down */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center"
                  style={{ minHeight: "130px" }}
                >
                  {m.above ? (
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "flex-end" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(13,13,13,0.65)",
                          lineHeight: 1.55,
                          whiteSpace: "pre-line",
                          textAlign: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {m.above}
                      </p>
                      <DownConnector />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            {/* Timeline arrow row */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{
                      height: "46px",
                      background: "#d97706",
                      clipPath:
                        i < milestones.length - 1
                          ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 12px 50%)"
                          : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12px 50%)",
                      marginRight: i < milestones.length - 1 ? "1px" : "0",
                    }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <span style={{ display: "block", fontSize: "13px", fontWeight: 800, color: "#f9f8f3", lineHeight: 1.2 }}>
                        {m.date.split("\n")[0]}
                      </span>
                      <span style={{ display: "block", fontSize: "12px", fontWeight: 600, color: "#f9f8f3", lineHeight: 1.2 }}>
                        {m.date.split("\n")[1]}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Below-line labels — connector arrow at top pointing up, then text */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center"
                  style={{ minHeight: "130px" }}
                >
                  {m.below ? (
                    <>
                      <div style={{ marginTop: "0px" }}>
                        <UpConnector />
                      </div>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(13,13,13,0.65)",
                          lineHeight: 1.55,
                          whiteSpace: "pre-line",
                          textAlign: "center",
                          marginTop: "10px",
                        }}
                      >
                        {m.below}
                      </p>
                    </>
                  ) : null}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
