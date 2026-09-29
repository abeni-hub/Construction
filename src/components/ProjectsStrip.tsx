import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectsStrip() {
  return (
    <section className="border-y border-white/10 bg-ink-800 text-white">
      <div className="wrap flex flex-col divide-y divide-white/10 md:flex-row md:divide-x md:divide-y-0">
        {projects.slice(0, 4).map((project, i) => (
          <a
            key={project.id}
            href="#projects"
            className="group flex flex-1 items-baseline gap-4 py-8 px-4 transition-colors duration-300 hover:bg-white/[0.03] md:flex-col md:items-start md:justify-between md:gap-6 md:py-10 md:px-8"
          >
            <div className="flex w-full items-center justify-between">
              <span className="text-[11px] font-bold tracking-widest2 text-bronze">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                {project.status}
              </span>
            </div>

            <div className="flex flex-1 items-baseline justify-between gap-6 md:block">
              <span className="font-display text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-bronze-light md:text-xl">
                {project.name}
              </span>
              <span className="text-xs uppercase tracking-widest2 text-white/50 md:mt-2 md:block">
                {project.category}
              </span>
            </div>

            <div className="flex w-full items-center justify-between pt-2">
              <span className="text-[11px] text-white/40">{project.location}</span>
              <ArrowUpRight
                size={16}
                className="text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bronze"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
