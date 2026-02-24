"use client";

import { projects } from "@/data/portfolio-content";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 min-h-screen scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3B2F2F] tracking-tight mb-4">
          {projects.title}
        </h2>
        <p className="text-[#5C4B45] text-lg max-w-2xl mb-12">
          Selected work spanning property management, healthcare, and operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.list.map((project, i) => (
            <article
              key={i}
              className="group gsap-project-card flex flex-col rounded-2xl border border-[#E8DDD4] bg-[#FAF7F4] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#E8DDD4] transition-all duration-300"
            >
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <h3 className="text-lg font-semibold text-[#3B2F2F] leading-tight">
                    {project.name}
                  </h3>
                  {project.client && (
                    <span className="text-xs font-semibold text-[#A86B3E] bg-[#A86B3E]/10 px-2.5 py-1 rounded-lg shrink-0">
                      {project.client}
                    </span>
                  )}
                </div>
                <p className="text-[#4C3D36] text-sm sm:text-base leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white/80 border border-[#E8DDD4]/80 mb-5">
                  <Sparkles className="size-4 text-[#A86B3E] shrink-0 mt-0.5" aria-hidden />
                  <p className="text-sm text-[#5C4B45] leading-relaxed italic">
                    {project.impact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/90 border border-[#E8DDD4]/80 px-2.5 py-1 text-xs font-medium text-[#3B2F2F]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#A86B3E] hover:text-[#8f5a34] transition-colors"
                  >
                    <Github className="size-4" aria-hidden />
                    View code
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
