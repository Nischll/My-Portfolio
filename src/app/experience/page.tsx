"use client";

import { experience } from "@/data/portfolio-content";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen container mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-3">
          Work history
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3B2F2F] tracking-tight mb-4">
          {experience.title}
        </h2>
        <p className="text-[#5C4B45] text-lg max-w-2xl mb-12">
          Roles and responsibilities across product and contract work.
        </p>

        <div className="space-y-6">
          {experience.jobs.map((job, i) => (
            <article
              key={i}
              className="group relative flex flex-col rounded-2xl border border-[#E8DDD4] bg-[#FAF7F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#E8DDD4] transition-all duration-300 overflow-hidden"
            >
              <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#A86B3E] to-[#A86B3E]/50" aria-hidden />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 pl-4 sm:pl-5">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="size-4 text-[#A86B3E] shrink-0" aria-hidden />
                    <h3 className="text-lg font-semibold text-[#3B2F2F]">
                      {job.role}
                    </h3>
                  </div>
                  <p className="text-[#A86B3E] font-medium">
                    {job.company}
                    {"project" in job && job.project && ` — ${job.project}`}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-[#5C4B45]">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="size-3.5" aria-hidden />
                      {job.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-3.5" aria-hidden />
                      {job.location}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="mt-5 pl-4 sm:pl-5 space-y-2">
                {job.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-[#4C3D36] text-sm sm:text-base leading-relaxed relative pl-4 before:absolute before:left-0 before:top-[0.55em] before:size-1.5 before:rounded-full before:bg-[#A86B3E]/70"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
