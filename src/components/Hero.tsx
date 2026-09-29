import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const stats = [
    { value: '30+', label: 'Years of Experience' },
    { value: '35+', label: 'Projects Completed' },
    { value: '25+', label: 'Projects Ongoing' },
    { value: 'Pro', label: 'Construction Team' },
  ];

  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-ink pt-32">
      {/* Background Image & Architectural Overlays */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Sur Construction - Modern Architectural Skyscraper Structure"
          className="h-full w-full object-cover object-center scale-100 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/65" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink/90 via-ink/60 to-transparent" />
      </div>

      {/* Main Content */}
      <div className="wrap relative z-10 my-auto pb-16 pt-12 md:pb-24">
        <p className="eyebrow text-bronze-light tracking-[0.25em]">
          Building with Experience. Delivering with Precision.
        </p>

        <h1 className="headline-xl mt-6 max-w-4xl text-white">
          30 Years of Building
          <br />
          <span className="text-bronze-light">What Matters.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg md:text-xl">
          With more than 30 years of construction experience, Sur Construction delivers projects
          built around quality, precision, safety, and long-term value.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-3 bg-bronze px-8 py-4 text-[12px] font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white hover:text-ink shadow-lg"
          >
            Explore Our Projects <ArrowRight size={17} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 border border-white/30 px-8 py-4 text-[12px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Start a Project <ArrowUpRight size={17} />
          </a>
        </div>
      </div>

      {/* Bottom Integrated Metrics Bar as seen in Screenshot 1 */}
      <div className="relative z-10 border-t border-white/15 bg-ink/75 backdrop-blur-md">
        <div className="wrap grid grid-cols-2 divide-y divide-white/10 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col py-6 sm:py-8 ${
                i % 2 === 0 ? 'pr-4 md:px-8' : 'pl-4 md:px-8'
              } ${i === 0 ? 'md:pl-0' : ''} ${i === stats.length - 1 ? 'md:pr-0' : ''}`}
            >
              <span className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
                {stat.value}
              </span>
              <span className="mt-1.5 text-[11px] font-semibold uppercase tracking-widest2 text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

