"use client";

import { about } from "@/data/portfolio-content";
import {
  Code2,
  Globe,
  GraduationCap,
  Briefcase,
  LayoutDashboard,
  Plug,
  Users,
  FileCode,
} from "lucide-react";

const STRENGTH_ICONS = [
  LayoutDashboard,
  Plug,
  Users,
  FileCode,
] as const;

const ABOUT_ICONS = [
  { Icon: Code2, label: "Frontend" },
  { Icon: Globe, label: "International" },
  { Icon: GraduationCap, label: "Learning" },
  { Icon: Briefcase, label: "Product" },
];

const About = () => {
  return (
    <section
      id="about"
      className="about-anim min-h-screen container mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="w-full">
        {/* Top section: two columns — left visual, right text + tags */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-10 mb-16">
          {/* Left: icons representing About me (lighter shade) */}
          <div className="md:col-span-2 flex flex-col items-center justify-center">
            <div className="w-full max-w-[240px] aspect-square relative rounded-2xl bg-[#FAF7F4] border border-[#E8DDD4] p-6 flex items-center justify-center shadow-sm">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
                {ABOUT_ICONS.map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center rounded-xl bg-white/90 border border-[#E8DDD4]/80 p-3"
                  >
                    <Icon className="size-8 text-[#A86B3E] mb-1" aria-hidden />
                    <span className="text-[10px] font-medium text-[#5C4B45] uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: About me heading and paragraphs */}
          <div className="md:col-span-4">
            <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-[#3B2F2F] tracking-tight mb-4">
              <span className="w-1.5 h-8 sm:h-9 bg-[#A86B3E] rounded-full shrink-0" aria-hidden />
              {about.title}
            </h2>
            <p className="text-[#4C3D36] text-base sm:text-lg leading-[1.75] mb-5">
              {about.bio}
            </p>
            <p className="text-[#4C3D36] text-base sm:text-lg leading-[1.75]">
              {about.careerStory}
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#E8DDD4] mb-12" />

        {/* What can I do — card grid with icon on top, text below */}
        <div>
          <h3 className="text-xl font-semibold text-[#3B2F2F] mb-8 text-center">
            What I bring to the table
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {about.strengths.map((item, i) => {
              const Icon = STRENGTH_ICONS[i];
              return (
                <li
                  key={i}
                  className="flex items-start gap-4 rounded-2xl border border-[#E8DDD4] bg-[#FAF7F4] p-5 shadow-sm hover:shadow-md hover:border-[#E8DDD4] transition-all duration-300"
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
