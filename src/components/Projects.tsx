import { useState } from 'react';
import { ArrowUpRight, X, Building, MapPin, Calendar, Layers, CheckCircle2, Ruler } from 'lucide-react';
import { projects, Project } from '@/data/projects';

type Filter = 'All' | 'Commercial' | 'Residential' | 'Infrastructure' | 'Ongoing';
const FILTERS: Filter[] = ['All', 'Commercial', 'Residential', 'Infrastructure', 'Ongoing'];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Ongoing') return p.status === 'Ongoing';
    if (filter === 'Commercial') return p.category.includes('Commercial') || p.category.includes('Building');
    if (filter === 'Residential') return p.category.includes('Residential');
    if (filter === 'Infrastructure') return p.category.includes('Infrastructure') || p.category.includes('General');
    return true;
  });

  return (
    <section id="projects" className="section bg-bone">
      <div className="wrap">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow text-bronze tracking-[0.25em]">Our Work</p>
            <h2 className="headline-lg mt-6 text-ink">
              Projects That Speak
              <br />
              <span className="text-bronze">For Themselves.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`min-h-11 px-5 text-[12px] font-semibold uppercase tracking-widest transition-all duration-300 ${
                  filter === f
                    ? 'bg-ink text-white shadow-md'
                    : 'border border-ink/15 bg-white/70 text-ink hover:border-ink hover:bg-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {filtered.map((project, idx) => {
            // Give specific cards broader spans for magazine layout
            const isWide = (idx % 5 === 0 || idx % 5 === 3) && filter === 'All';
            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer overflow-hidden bg-ink shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
                  isWide
                    ? 'sm:col-span-2 min-h-[440px] md:min-h-[540px] lg:col-span-8'
                    : 'min-h-[380px] lg:col-span-4'
                }`}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-site group-hover:scale-105"
                />

                {/* Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent" />
                <div className="absolute inset-0 bg-ink/10 transition-colors duration-300 group-hover:bg-transparent" />

                {/* Top Badges */}
                <div className="absolute left-6 top-6 flex items-center gap-2 z-10">
                  <span
                    className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest2 text-white ${
                      project.status === 'Completed' ? 'bg-bronze' : 'bg-ink/80 backdrop-blur-md border border-white/20'
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="hidden sm:inline-block bg-white/20 backdrop-blur-md px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-6 p-6 md:p-8">
                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-widest2 text-bronze-light">
                      {project.location}
                    </p>
                    <h3 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-white md:text-3xl">
                      {project.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-xs sm:text-sm text-white/70">
                      {project.description}
                    </p>
                  </div>

                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-all duration-300 group-hover:border-bronze group-hover:bg-bronze group-hover:text-ink">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Note & Consultation CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-stone">
            Showing key featured projects across Ethiopia. Full engineering dossier available upon consultation.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink hover:text-bronze transition-colors"
          >
            Submit an RFP / Project Tender →
          </a>
        </div>
      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-ink sm:aspect-[21/9]">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-md transition-colors hover:bg-bronze hover:text-ink"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block bg-bronze px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-ink">
                  {selectedProject.status}
                </span>
                <h3 className="font-display mt-2 text-2xl sm:text-4xl font-bold">
                  {selectedProject.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-2 gap-4 border-b border-ink/10 pb-8 sm:grid-cols-4">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone">Location</p>
                    <p className="font-semibold text-ink text-sm">{selectedProject.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone">Timeline</p>
                    <p className="font-semibold text-ink text-sm">{selectedProject.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Ruler size={20} className="text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone">Gross Area</p>
                    <p className="font-semibold text-ink text-sm">{selectedProject.area || 'Full Site'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Layers size={20} className="text-bronze" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-stone">Category</p>
                    <p className="font-semibold text-ink text-sm">{selectedProject.category}</p>
                  </div>
                </div>
              </div>

              {/* Scope & Description */}
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                    Project Overview
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-stone-dark">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.scope && (
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-ink">
                      Scope of Execution
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {selectedProject.scope}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-8">
                  <div className="flex items-center gap-2 text-xs font-semibold text-stone">
                    <CheckCircle2 size={16} className="text-bronze" />
                    <span>Quality standards verified &amp; safety compliant</span>
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="inline-flex items-center gap-3 bg-bronze px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    Inquire About This Project <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
