import { ArrowRight, Phone } from 'lucide-react';
import { site } from '@/data/site';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src="/images/cta.jpg"
          alt="Sur Construction - Commercial Bank Headquarters Tower illuminated at night in Addis Ababa"
          className="h-full w-full object-cover opacity-35"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/50" />
      </div>

      <div className="wrap relative z-10 py-28 md:py-36">
        <div className="max-w-3xl">
          <p className="eyebrow-rule text-bronze-light">Start With a Conversation</p>
          <h2 className="headline-lg mt-7 text-white">
            Ready to Build Something
            <br />
            <span className="text-bronze-light">That Lasts?</span>
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            Tell us about your site, your programme and your ambitions — we will respond with a
            clear view of what it takes to build it well.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-bronze">
              Start a Project <ArrowRight size={17} />
            </a>
            <a href={site.phoneHref} className="btn-light">
              <Phone size={17} /> {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
