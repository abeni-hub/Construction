import { site } from '@/data/site';
import { navLinks } from '@/data/site';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="wrap pb-10 pt-20 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold tracking-[0.18em] text-white">
              SUR<span className="mx-1.5 text-bronze">·</span>CONSTRUCTION
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone/50">
              Building with experience. Delivering with precision. Thirty years of construction
              across Ethiopia.
            </p>
            <div className="mt-8 space-y-2.5 text-sm">
              <a
                href={site.phoneHref}
                className="block text-bone/60 transition-colors hover:text-bronze-light"
              >
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="block text-bone/60 transition-colors hover:text-bronze-light"
              >
                {site.email}
              </a>
              <p className="text-bone/60">{site.address}</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-bronze-light">Navigate</p>
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-bone/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-bronze-light">Services</p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-bone/60 transition-colors hover:text-white"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 select-none overflow-hidden">
          <p className="font-display whitespace-nowrap text-[18vw] font-bold leading-[0.85] tracking-[-0.02em] text-white/[0.05]">
            SUR CONSTRUCTION
          </p>
        </div>

        <div className="mt-4 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} Sur Construction. All rights reserved.
          </p>
          <p className="text-xs text-bone/40">Addis Ababa, Ethiopia — Est. 1996</p>
        </div>
      </div>
    </footer>
  );
}
