export default function About() {
  const aboutStats = [
    { value: '30+', label: 'Years' },
    { value: '35+', label: 'Completed' },
    { value: '25+', label: 'Ongoing' },
  ];

  return (
    <section id="about" className="section overflow-hidden bg-white">
      <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-center">
        {/* Left Column: Story & Metrics */}
        <div className="lg:col-span-6 xl:col-span-7">
          <p className="eyebrow text-bronze tracking-[0.25em]">
            About Sur Construction
          </p>

          <h2 className="headline-lg mt-6 text-ink">
            Three Decades
            <br />
            of Experience.
            <br />
            <span className="text-bronze">One Standard of Quality.</span>
          </h2>

          <div className="mt-8 space-y-5 max-w-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-stone-dark">
              With more than 30 years of experience in the construction industry, Sur Construction
              has built its reputation around dependable project execution, quality workmanship,
              professional management, and long-term value.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-stone">
              Based in Addis Ababa, Ethiopia, we approach every project — from commercial towers to
              residential complexes and civil infrastructure — with the same commitment to
              precision, safety, and structural integrity that has defined our work for three
              decades.
            </p>
          </div>

          {/* Three Stats under text as shown in Screenshot 3 */}
          <div className="mt-12 pt-8 border-t border-ink/10 grid grid-cols-3 gap-6 max-w-lg">
            {aboutStats.map((item) => (
              <div key={item.label}>
                <span className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                  {item.value}
                </span>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-widest2 text-stone">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Site Engineers Image & Floating Established Badge */}
        <div className="lg:col-span-6 xl:col-span-5">
          <div className="relative pb-10 sm:pb-12 lg:pb-0">
            {/* Engineers on site photo */}
            <div className="aspect-[4/3] w-full overflow-hidden bg-bone-dark shadow-2xl">
              <img
                src="/images/about.jpg"
                alt="Sur Construction engineers reviewing technical blueprints on active site"
                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Floating Overlapping Card as shown in Screenshot 3 */}
            <div className="relative -mt-16 ml-4 sm:ml-6 max-w-[280px] bg-ink p-7 text-white shadow-2xl border border-white/10 sm:-mt-20 lg:-bottom-8 lg:left-6 lg:ml-0 lg:absolute lg:mt-0 z-20">
              <p className="text-[10px] font-bold uppercase tracking-widest3 text-bronze">
                Established
              </p>
              <h3 className="font-display mt-1.5 text-2xl sm:text-3xl font-bold text-white">
                30+ Years
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                of construction excellence in Ethiopia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

