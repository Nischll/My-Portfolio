"use client";

import { skills } from "@/data/portfolio-content";
import { Code2, Database, Wrench } from "lucide-react";

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Frontend": Code2,
  "State & data": Database,
  "Tools & backend": Wrench,
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="min-h-screen container mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-3">
          What I use
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3B2F2F] tracking-tight mb-4">
          {skills.title}
        </h2>
        <p className="text-[#5C4B45] text-lg max-w-2xl mb-12">
          Technologies and tools I work with to build and ship products.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.groups.map((group) => {
            const Icon = SKILL_ICONS[group.label];
            return (
              <div
                key={group.label}
                className="group relative flex flex-col rounded-2xl border border-[#E8DDD4] bg-[#FAF7F4] p-6 sm:p-7 shadow-sm hover:shadow-lg hover:border-[#E8DDD4] transition-all duration-300"
              >
                <span className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-[#A86B3E] to-[#A86B3E]/60 opacity-80" aria-hidden />
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#A86B3E]/10 text-[#A86B3E]">
                    {Icon && <Icon className="size-5" aria-hidden />}
                  </span>
                  <h3 className="text-base font-semibold text-[#3B2F2F]">
                    {group.label}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg bg-white/90 border border-[#E8DDD4]/80 px-3 py-2 text-sm font-medium text-[#3B2F2F] shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
