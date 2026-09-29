import { useState } from 'react';
import { ArrowRight, Check, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { site } from '@/data/site';
import { services } from '@/data/services';

const locations = [
  'Addis Ababa (Bole, Kazanchis, CMC, Dembel)',
  'Hawassa Industrial Corridor',
  'Adama & Expressway Zone',
  'Dire Dawa Free Trade Area',
  'Bahir Dar & Amhara Region',
  'Mekelle & Tigray Region',
  'Other National Infrastructure',
];

const budgetRanges = [
  'Under 25 Million ETB',
  '25M - 100 Million ETB',
  '100M - 500 Million ETB',
  '500M+ Million ETB (Major Commercial / Civil)',
  'To be determined during feasibility',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="section bg-bone-dark/50">
      <div className="wrap grid gap-16 lg:grid-cols-12 lg:gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-5">
          <p className="eyebrow text-bronze tracking-[0.25em]">Direct Consultation</p>
          <h2 className="headline-lg mt-6 text-ink">
            Let’s Discuss
            <br />
            <span className="text-bronze">Your Project.</span>
          </h2>

          <p className="mt-7 max-w-md text-base leading-relaxed text-stone-dark">
            Whether you are preparing a commercial tender, planning a private residential development,
            or evaluating civil infrastructure feasibility, our senior engineering directors respond
            directly.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-bronze shadow-sm border border-ink/10">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-stone">Direct Telephone</p>
                <a
                  href={site.phoneHref}
                  className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-bronze"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-bronze shadow-sm border border-ink/10">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-stone">Inquiries &amp; Tenders</p>
                <a
                  href={site.emailHref}
                  className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-bronze"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-bronze shadow-sm border border-ink/10">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-stone">Headquarters</p>
                <p className="font-display text-base font-bold text-ink">
                  {site.address}
                </p>
                <p className="text-xs text-stone mt-0.5">Addis Ababa, Ethiopia — Est. 1996</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-white text-bronze shadow-sm border border-ink/10">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest2 text-stone">Office Hours</p>
                <p className="text-sm font-semibold text-ink">
                  Monday – Friday: 8:00 AM – 5:30 PM (EAT)
                </p>
                <p className="text-xs text-stone">Saturday: 8:30 AM – 12:30 PM</p>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-stone-dark">
              <ShieldCheck size={16} className="text-bronze" />
              <span>Grade-1 General Contractor License &bull; ISO Certified QA/QC</span>
            </div>
          </div>
        </div>

        {/* Interactive Consultation Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="flex h-full min-h-[500px] flex-col items-center justify-center border border-ink/10 bg-white p-10 text-center shadow-xl">
              <span className="flex h-16 w-16 items-center justify-center bg-bronze text-white shadow-lg">
                <Check size={28} />
              </span>
              <h3 className="font-display mt-6 text-3xl font-bold tracking-tight text-ink">
                Consultation Request Received
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-dark">
                Thank you for reaching out to Sur Construction. A senior engineering director has received your project briefing and will contact you within 24 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 border border-ink/20 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-ink/10 bg-white p-8 md:p-12 shadow-xl">
              <div className="border-b border-ink/10 pb-6 mb-8">
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                  Project Consultation &amp; RFP Brief
                </h3>
                <p className="mt-1 text-xs text-stone">
                  Provide your initial requirements for technical review and cost estimation.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Full Name *
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Abebe Bikila"
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Organization / Developer
                  </span>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company or agency name"
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Official Email *
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Phone Number *
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+251 9..."
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze focus:bg-white"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Construction Discipline *
                  </span>
                  <select
                    name="projectType"
                    defaultValue=""
                    required
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-bronze focus:bg-white"
                  >
                    <option value="">Select a discipline</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Project Location
                  </span>
                  <select
                    name="location"
                    defaultValue=""
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-bronze focus:bg-white"
                  >
                    <option value="">Select general location</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Target Budget Range
                  </span>
                  <select
                    name="budget"
                    defaultValue=""
                    className="mt-2 w-full border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors focus:border-bronze focus:bg-white"
                  >
                    <option value="">Select estimated budget tier</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-[11px] font-bold uppercase tracking-widest2 text-ink">
                    Project Scope, Timeline &amp; Site Specifications *
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe your site location, gross area, structural goals, estimated start date, and whether drawings/permits are already in place..."
                    className="mt-2 w-full resize-none border border-ink/15 bg-bone/30 px-4 py-3.5 text-sm text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-bronze focus:bg-white"
                  />
                </label>
              </div>

              <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 bg-bronze px-8 py-4 text-xs font-bold uppercase tracking-widest text-ink transition-all duration-300 hover:bg-ink hover:text-white shadow-lg w-full sm:w-auto"
                >
                  {loading ? 'Submitting...' : 'Submit Consultation Request'} <ArrowRight size={17} />
                </button>
                <p className="text-[11px] text-stone">
                  Confidentiality guaranteed. Non-disclosure upon request.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
