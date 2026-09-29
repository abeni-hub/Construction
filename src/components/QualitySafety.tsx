import { Check } from 'lucide-react';

const points = [
  {
    title: 'Quality Control',
    body: 'Systematic checks at every phase, from foundation to finishing.',
  },
  {
    title: 'Professional Supervision',
    body: 'Experienced supervisors on site throughout the project.',
  },
  {
    title: 'Construction Standards',
    body: 'Work executed to established structural and professional standards.',
  },
  {
    title: 'Site Management',
    body: 'Disciplined, orderly sites with efficient day-to-day operations.',
  },
  {
    title: 'Safety Procedures',
    body: 'Safety protocols implemented and enforced across all sites and teams.',
  },
  {
    title: 'Materials & Workmanship',
    body: 'Materials and workmanship verified for durability and long-term value.',
  },
];

export default function QualitySafety() {
  return (
    <section className="section bg-ink text-white">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <p className="eyebrow-rule">Quality &amp; Safety</p>
            <h2 className="headline-md mt-7 text-white">
              Quality is not a final check. It is built into the process.
            </h2>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-white/60">
              Three decades of building in Ethiopia have taught us one thing: the standard is set
              on site, every day — not at handover.
            </p>
            <div className="aspect-[16/11] overflow-hidden shadow-2xl mt-10">
              <img
                src="/images/quality-safety.jpg"
                alt="Sur Construction certified quality inspectors verifying rebar and column specifications on site"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ul className="border-t border-white/15">
            {points.map((point, i) => (
              <li
                key={point.title}
                className="grid gap-3 border-b border-white/15 py-7 md:grid-cols-[3rem_1fr] md:items-baseline md:gap-6"
              >
                <span className="font-display flex items-center gap-3 text-sm font-semibold text-bronze">
                  <Check size={16} strokeWidth={2.5} />
                  <span className="hidden md:inline">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight">{point.title}</h3>
                  <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-white/55">
                    {point.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
