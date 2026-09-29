export default function Process() {
  const stages = [
    {
      title: 'Consultation',
      body: 'We listen first — objectives, site, budget and constraints — then tell you plainly what is achievable.',
    },
    {
      title: 'Planning',
      body: 'Feasibility, budget and programme are set before anything is built. No surprises later.',
    },
    {
      title: 'Design',
      body: 'Drawings developed with architects and engineers to the standard our site teams will hold.',
    },
    {
      title: 'Construction',
      body: 'Supervised execution with weekly reporting, strict safety discipline and quality checks at every stage.',
    },
    {
      title: 'Handover',
      body: 'Snagging, documentation, as-builts and training — delivered complete, then supported after handover.',
    },
  ];

  return (
    <section id="process" className="section bg-bone">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow-rule">How We Work</p>
            <h2 className="headline-md mt-7 max-w-2xl text-ink">
              A process refined over three decades.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-stone">
            Five stages, one continuous line of accountability from first meeting to final
            handover.
          </p>
        </div>

        <ol className="mt-16 grid border-t border-ink/10 md:grid-cols-3 lg:grid-cols-5">
          {stages.map((stage, i) => (
            <li
              key={stage.title}
              className={`border-ink/10 pt-8 md:px-6 md:pb-2 ${i > 0 ? 'border-t md:border-t-0 md:border-l' : ''} ${
                i === 0 ? 'md:pl-0' : ''
              }`}
            >
              <div className="flex items-baseline justify-between md:block">
                <span className="font-display text-4xl font-bold tracking-tight text-bronze md:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display mt-4 text-xl font-bold tracking-tight text-ink">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
