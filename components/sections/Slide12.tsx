const milestones = [
  { date: "2026\n31 May",    above: "100 pairs sold\nin Delhi NCR region",          below: "Product & Process trials/\ntesting done, PMF achieved" },
  { date: "2026\n30 June",   above: "Clinical & Community\npartnerships done\nin NCR region", below: "" },
  { date: "2026\n30 Sept",   above: "",                                              below: "Semi-custom launched,\npre-order website\npipeline live" },
  { date: "2026\n31 Dec",    above: "Expanded to all Tier 1\ncities of India,\n5000+ pairs sold,\nB2B expansion", below: "" },
  { date: "2027\n30 June",   above: "",                                              below: "15000+ pairs sold,\nExpanded to tier-2 &\ntier-3, OTC line\nlaunched on e-commerce" },
  { date: "2028\n30 June",   above: "Preventive biomechanics\ndevices for DFU\nprevention launch\n(patentable)", below: "" },
  { date: "2028\n31 Dec",    above: "",                                              below: "" },
  { date: "2029\n30 June",   above: "Self-adjusting smart\nfootwear launch\nNational Sports Federation,\nArmed forces partnerships", below: "" },
];

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

            {/* Above-line labels */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center pb-4"
                  style={{ minHeight: "100px" }}
                >
                  {m.above && (
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "rgba(13,13,13,0.65)",
                        lineHeight: 1.5,
                        whiteSpace: "pre-line",
                        textAlign: "center",
                      }}
                    >
                      {m.above}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Arrow row */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div key={i} className="flex-1 flex items-center">
                  <div
                    className="relative w-full flex items-center justify-center"
                    style={{
                      height: "38px",
                      background: "#d97706",
                      clipPath:
                        i < milestones.length - 1
                          ? "polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%, 12px 50%)"
                          : "polygon(0 0, 100% 0, 100% 100%, 0 100%, 12px 50%)",
                      marginRight: i < milestones.length - 1 ? "1px" : "0",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 800,
                        color: "#f9f8f3",
                        whiteSpace: "pre-line",
                        textAlign: "center",
                        lineHeight: 1.3,
                      }}
                    >
                      {m.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Below-line labels */}
            <div className="flex">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="flex-1 flex flex-col items-center pt-4"
                  style={{ minHeight: "100px" }}
                >
                  {m.below && (
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "rgba(13,13,13,0.65)",
                        lineHeight: 1.5,
                        whiteSpace: "pre-line",
                        textAlign: "center",
                      }}
                    >
                      {m.below}
                    </p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
