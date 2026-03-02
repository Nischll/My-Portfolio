"use client";

import { useState } from "react";
import { skills } from "@/data/portfolio-content";
import {
  Code2,
  Database,
  Wrench,
  ChevronLeft,
  ChevronRight,
  Box,
  FileCode,
  Type,
  Layout,
  Palette,
  Sparkles,
  GitBranch,
  Layers,
  Globe,
  Server,
  Send,
} from "lucide-react";

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Code2,
  "State & data": Database,
  "Tools & backend": Wrench,
};

const SKILL_ITEM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "React.js": Box,
  "JavaScript (ES6+)": FileCode,
  TypeScript: Type,
  HTML5: Layout,
  CSS3: Palette,
  "Tailwind CSS": Sparkles,
  "React Hooks": GitBranch,
  "Context API": Layers,
  "REST APIs": Globe,
  "Git, Gitlab & GitHub": GitBranch,
  Postman: Send,
  "Express.js (basic)": Server,
  PostgreSQL: Database,
};

const total = skills.groups.length;

function SkillCard({
  group,
  isActive,
}: {
  group: (typeof skills.groups)[number];
  isActive: boolean;
}) {
  const Icon = SKILL_ICONS[group.label];

  return (
    <div
      className={`flex flex-col rounded-2xl border bg-[#FAF7F4] p-5 sm:p-6 shadow-sm min-h-[260px] sm:min-h-[280px] transition-all duration-500 ease-out will-change-transform ${isActive
          ? "min-h-[340px] sm:min-h-[380px] border-[#A86B3E]/50 shadow-2xl ring-2 ring-[#A86B3E]/20"
          : "border-[#E8DDD4] shadow-md opacity-100"
        }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A86B3E]/10 text-[#A86B3E]">
          {Icon && <Icon className="size-6" aria-hidden />}
        </span>
        <h3 className="sm:text-lg text-base font-semibold text-[#3B2F2F]">{group.label}</h3>
      </div>

      <ul className="flex flex-col gap-2">
        {group.items.map((skill) => {
          const ItemIcon = SKILL_ITEM_ICONS[skill] ?? Code2;
          return (
            <li
              key={skill}
              className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-medium text-[#4C3D36] border border-[#E8DDD4]/60"
            >
              <ItemIcon className="size-3.5 shrink-0 text-[#A86B3E]" aria-hidden />
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const SkillsSection = () => {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((i) => (i - 1 + total) % total);
  const goNext = () => setCurrent((i) => (i + 1) % total);

  const leftIndex = (current - 1 + total) % total;
  const centerIndex = current;
  const rightIndex = (current + 1) % total;

  return (
    <section
      id="skills"
      className="min-h-screen container mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="w-full">
        <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-[#3B2F2F] tracking-tight mb-4">
          <span className="w-1.5 h-8 sm:h-9 bg-[#A86B3E] rounded-full shrink-0" />
          {skills.title}
        </h2>

        <p className="text-[#5C4B45] text-lg max-w-2xl mb-12">
          Technologies and tools I work with.
        </p>

        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center justify-center gap-4 w-full max-w-5xl mx-auto">
            <button
              onClick={goPrev}
              className="z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E8DDD4] bg-white hover:border-[#A86B3E] transition"
            >
              <ChevronLeft />
            </button>

            {/* COVERFLOW CAROUSEL — fixed order by group index so same node gets new transform (smooth prev/next) */}
            <div className="relative w-full max-w-4xl min-h-[420px] sm:min-h-[460px] flex items-center justify-center">
              {skills.groups.map((group, index) => {
                const position =
                  index === leftIndex ? "left" : index === centerIndex ? "center" : "right";
                const positionStyles = {
                  left: "hidden sm:block translate-x-[-70%] scale-90 opacity-80 blur-[2px] rotate-[-6deg] z-10",
                  center: "translate-x-0 scale-100 opacity-100 z-20",
                  right: "hidden sm:block translate-x-[70%] scale-90 opacity-80 blur-[2px] rotate-[6deg] z-10",
                };

                return (
                  <div
                    key={group.label}
                    className={`absolute w-[200px] sm:w-[300px] transition-all duration-500 ease-in-out will-change-transform ${positionStyles[position]}`}
                  >
                    <SkillCard group={group} isActive={position === "center"} />
                  </div>
                );
              })}
            </div>

            <button
              onClick={goNext}
              className="z-20 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#E8DDD4] bg-white hover:border-[#A86B3E] transition"
            >
              <ChevronRight />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex gap-2">
            {skills.groups.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "w-6 bg-[#A86B3E]" : "w-2 bg-[#E8DDD4]"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;