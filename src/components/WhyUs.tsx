export default function WhyUs() {
  const pillars = [
    {
      title: 'Proven Track Record',
      body: 'Thirty years of completed work across commercial, residential and civil projects — standing and in use today.',
    },
    {
      title: 'Single Point of Accountability',
      body: 'One contract, one team, one standard. We own the schedule, the budget and the quality from start to finish.',
    },
    {
      title: 'Engineering-Led Management',
      body: 'Decisions made by engineers and project managers on site, not by intermediaries — problems solved where they happen.',
    },
    {
      title: 'Long-Term Value',
      body: 'We build for the decades after handover: durable structures, honest materials and documentation you can maintain against.',
    },
  ];

  return (
    <section className="section bg-ink">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow-rule">Why Sur Construction</p>
            <h2 className="headline-lg mt-7 text-white">
              Experience You
              <br />
              Can <span className="text-bronze-light">Build On.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/60">
              Clients return to us because the way we build is the way we run projects: precisely,
              transparently, and without surprises.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-white/15">
            {pillars.map((pillar, i) => (
              <li key={pillar.title} className="border-b border-white/15 py-9 md:py-11">
                <div className="grid gap-4 md:grid-cols-[5rem_1fr] md:gap-8">
                  <span className="font-display text-sm font-semibold text-bronze">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 max-w-xl leading-relaxed text-white/55">{pillar.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
