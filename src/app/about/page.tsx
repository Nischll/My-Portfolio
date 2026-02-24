"use client";

import { about } from "@/data/portfolio-content";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="about-anim min-h-screen container mx-auto px-4 sm:px-6 py-16 sm:py-20 scroll-mt-[var(--nav-h)]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-3">
          About
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#3B2F2F] tracking-tight mb-2">
          {about.title}
        </h2>
        <p className="text-[#5C4B45] text-lg sm:text-xl font-medium max-w-2xl mb-12">
          Frontend developer focused on building products that are reliable and a pleasure to use.
        </p>

        {/* Lead paragraph */}
        <div className="mb-10">
          <p className="text-[#4C3D36] text-base sm:text-lg leading-[1.75]">
            {about.bio}
          </p>
        </div>

        {/* Career journey — subtle card */}
        <div className="relative pl-4 sm:pl-6 border-l-2 border-[#A86B3E]/40 mb-12">
          <p className="text-[#4C3D36] text-base sm:text-lg leading-[1.75]">
            {about.careerStory}
          </p>
        </div>

        {/* What I bring — strengths */}
        <div>
          <h3 className="text-lg font-semibold text-[#3B2F2F] mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-[#A86B3E] rounded-full" aria-hidden />
            What I bring to the table
          </h3>
          <ul className="grid gap-4 sm:grid-cols-1 sm:gap-5">
            {about.strengths.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 p-4 rounded-xl bg-[#FAF7F4] border border-[#E8DDD4]/80 text-[#4C3D36] text-base sm:text-lg leading-relaxed"
              >
                <span className="shrink-0 mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#A86B3E]/15 text-[#A86B3E]">
                  <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
