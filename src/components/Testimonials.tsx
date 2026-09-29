import { Star, Building, Award } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'Sur Construction delivered our 24-storey commercial tower ahead of schedule and with structural tolerances that exceeded our independent engineering audit. Their site discipline and material quality are unmatched.',
      name: 'Dawit Haile',
      role: 'Managing Director, Addis Commercial Properties',
      project: 'Nexus Commercial Tower',
      rating: 5,
    },
    {
      quote:
        'From deep caisson foundations to complex pre-stressed concrete flyovers, Sur’s civil division executed the highway package with zero critical downtime. They are our most dependable Grade-1 contractor.',
      name: 'Eng. Bethlehem Tadesse',
      role: 'Lead Infrastructure Liaison, Regional Authority',
      project: 'Expressway Viaduct Package 3',
      rating: 5,
    },
    {
      quote:
        'Developing a master-planned enclave of 38 luxury residences requires obsessive attention to architectural finishing and site logistics. Sur’s turnkey management made our vision a tangible landmark.',
      name: 'Marcus Alemayehu',
      role: 'Principal Partner, Arcadia Luxury Developments',
      project: 'Arcadia Enclave Villas',
      rating: 5,
    },
  ];

  return (
    <section className="section bg-white text-ink">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-bronze tracking-[0.25em]">Client Voices</p>
            <h2 className="headline-lg mt-6 max-w-xl text-ink">
              Trusted by the People
              <br />
              <span className="text-bronze">We Build For.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 border border-ink/10 bg-bone px-5 py-3">
            <Award className="text-bronze" size={24} />
            <div>
              <p className="font-display text-sm font-bold text-ink">30-Year Reputation</p>
              <p className="text-xs text-stone">Grade-1 Contractor of Choice in Ethiopia</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="flex flex-col justify-between border border-ink/10 bg-bone p-8 md:p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-bronze/40"
            >
              <div>
                <div className="flex items-center gap-1 text-bronze mb-6">
                  {[...Array(t.rating)].map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" stroke="none" />
                  ))}
                </div>
                <blockquote className="text-base leading-relaxed text-stone-dark font-normal">
                  “{t.quote}”
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-ink/10 pt-6">
                <p className="font-display text-base font-bold tracking-tight text-ink">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-stone font-medium">{t.role}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-bronze">
                  <Building size={13} />
                  <span>{t.project}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
