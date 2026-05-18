"use client";

import { about } from "@/data/portfolio-content";
import { Info, LayoutDashboard, Plug, Users, FileCode } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STRENGTH_ICONS = [LayoutDashboard, Plug, Users, FileCode] as const;

const About = () => {
  const sectionRef = useScrollAnimation(".anim-child", 0.13);

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="about-anim py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="w-full">
        {/* Top: icon + text */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10 mb-16">
          {/* Left icon */}
          <div className="anim-child md:col-span-2 flex flex-col items-center justify-center">
            <div className="w-full max-w-[200px] aspect-square rounded-2xl bg-[#FAF7F4] border border-[#E8DDD4] flex items-center justify-center shadow-sm">
              <Info className="size-20 sm:size-24 text-[#A86B3E]" aria-hidden />
            </div>
          </div>

          {/* Right text */}
          <div className="md:col-span-4">
            <p className="anim-child text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-3">
              GET TO KNOW ME
            </p>
            <h2 className="anim-child flex items-center gap-3 text-2xl sm:text-3xl font-bold text-[#3B2F2F] tracking-tight mb-4">
              <span
                className="w-1.5 h-8 sm:h-9 bg-[#A86B3E] rounded-full shrink-0"
                aria-hidden
              />
              {about.title}
            </h2>
            <p className="anim-child text-[#4C3D36] text-base sm:text-lg leading-[1.75] mb-5">
              {about.bio}
            </p>
            <p className="anim-child text-[#4C3D36] text-base sm:text-lg leading-[1.75]">
              {about.careerStory}
            </p>
          </div>
        </div>

        <hr className="anim-child border-[#E8DDD4] mb-12" />

        {/* Strengths */}
        <div>
          <h3 className="anim-child text-xl font-semibold text-[#3B2F2F] mb-8 text-center">
            What I bring to the table
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.strengths.map((item, i) => {
              const Icon = STRENGTH_ICONS[i];
              return (
                <li
                  key={i}
                  className="anim-child flex items-start gap-4 rounded-2xl border border-[#E8DDD4] bg-[#FAF7F4] p-5 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#A86B3E]/10 text-[#A86B3E]">
                    {Icon && <Icon className="size-5" aria-hidden />}
                  </span>
                  <p className="text-[#4C3D36] text-sm sm:text-base leading-relaxed pt-0.5">
                    {item}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
