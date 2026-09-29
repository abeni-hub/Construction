import { services } from '@/data/services';
import { ArrowUpRight, ShieldCheck, Building2, HardHat } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section bg-ink text-white">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-bronze tracking-[0.25em]">
              What We Do
            </p>
            <h2 className="headline-lg mt-6 max-w-2xl text-white">
              Mastering Every Discipline.
              <br />
              <span className="text-bronze-light">From Foundation to Handover.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-white/60">
            Eight integrated disciplines, one accountable team — delivering complex commercial,
            residential, civil, and industrial infrastructure projects across Ethiopia.
          </p>
        </div>

        {/* Services List with sleek modern hover states */}
        <ul className="mt-16 border-t border-white/15">
          {services.map((service, i) => (
            <li key={service.id} className="border-b border-white/15">
              <a
                href="#contact"
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-x-6 py-8 transition-colors duration-300 hover:bg-white/[0.02] px-2 md:grid-cols-[4.5rem_minmax(0,22rem)_1fr_auto] md:gap-x-10 md:py-9"
              >
                <span className="font-display text-base font-bold text-bronze transition-colors duration-300 group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-bronze-light md:text-2xl">
                  {service.title}
                </h3>
                <p className="col-span-3 mt-3 max-w-xl text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white/80 md:col-span-1 md:mt-0">
                  {service.description}
                </p>
                <div className="hidden items-center justify-end md:flex">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* Value Callout Banner */}
        <div className="mt-16 grid grid-cols-1 gap-6 border border-white/10 bg-white/[0.02] p-8 md:grid-cols-3 md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-bronze/10 text-bronze border border-bronze/20">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Full Regulatory Compliance</h4>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Licensed Grade-1 general contractor fully compliant with Ethiopian building codes and safety regulations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-bronze/10 text-bronze border border-bronze/20">
              <HardHat size={24} />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">Resident Site Supervision</h4>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Dedicated senior project managers and certified safety officers stationed permanently on every active site.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-bronze/10 text-bronze border border-bronze/20">
              <Building2 size={24} />
            </div>
            <div>
              <h4 className="font-display text-lg font-bold text-white">In-House Heavy Machinery</h4>
              <p className="mt-1 text-xs text-white/60 leading-relaxed">
                Extensive fleet of company-owned earthmoving equipment, tower cranes, and batching plants for rapid mobilization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

