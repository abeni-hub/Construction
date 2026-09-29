import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/data/site';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-site ${
        scrolled && !open
          ? 'border-b border-white/10 bg-ink/90 py-4 backdrop-blur-md'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="wrap flex items-center justify-between">
        <a href="#home" className="font-display text-lg font-bold tracking-[0.16em]">
          <span className="text-bronze">SUR</span>{' '}
          <span className="text-white">CONSTRUCTION</span>
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link text-white/80 hover:text-white text-[13px] font-medium">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contact"
          className="hidden min-h-0 bg-bronze px-6 py-3 text-[12px] font-semibold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-white hover:text-ink lg:inline-flex"
        >
          Request a Consultation
        </a>

        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 -z-10 flex flex-col justify-center bg-ink px-8 lg:hidden">
          <ul className="space-y-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-bold text-white transition-colors hover:text-bronze"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href={site.phoneHref} className="eyebrow-rule text-white/70">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
