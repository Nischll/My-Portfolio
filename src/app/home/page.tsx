"use client";

import Image from "next/image";
import profile from "@/assets/profile.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/data/portfolio-content";
import { FileText } from "lucide-react";

const Home = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row lg:items-stretch gap-0 overflow-hidden"
    >
      {/* Left — content */}
      <div
        ref={imageRef}
        className="
          relative
          w-full h-[60vw] max-h-[480px]
          lg:h-auto lg:max-h-none lg:w-[45%] xl:w-[48%]
          lg:min-h-screen
        "
      >
        <Image
          src={profile}
          alt="Nischal Shrestha"
          className="object-cover object-top"
          priority
          fill
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
        {/* Subtle left-side fade so image blends into the content side */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#FDF8F4]/60 via-transparent to-transparent lg:block hidden pointer-events-none" />
      </div>

      {/* Right — full-bleed photo */}

      <div
        ref={contentRef}
        className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 xl:px-20 py-20 lg:py-0 lg:w-[55%] xl:w-[52%]"
      >
        <p className="text-sm sm:text-base font-medium tracking-widest text-[#A86B3E] uppercase mb-3">
          {hero.greeting}
        </p>
        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.08] tracking-tight text-[#3B2F2F]">
          {hero.name}
        </h1>
        <p className="mt-4 text-lg sm:text-xl font-semibold text-[#5C4B45]">
          {hero.headline}
          <span className="mx-2 text-[#A86B3E]">·</span>
          {hero.subline}
        </p>
        <p className="mt-5 text-base sm:text-lg text-[#4C3D36] leading-relaxed max-w-lg">
          {hero.intro}
        </p>

        {/* CTA row */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-[#A86B3E] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#A86B3E]/25 hover:bg-[#8f5a34] transition-all duration-200"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#A86B3E] px-6 py-3 text-sm font-semibold text-[#A86B3E] hover:bg-[#A86B3E]/10 transition-colors duration-200"
          >
            {hero.ctaSecondary}
          </a>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#5C4B45]/25 bg-white/70 px-4 py-3 text-sm font-medium text-[#4C3D36] hover:bg-[#F5EFE9] hover:border-[#5C4B45]/40 transition-all duration-200"
          >
            <FileText className="size-4 shrink-0" aria-hidden />
            {hero.ctaResume}
          </a>
        </div>

        {/* Subtle scroll hint */}
        <div className="mt-14 hidden lg:flex items-center gap-2 text-xs text-[#A86B3E]/60 font-medium tracking-wider uppercase">
          <span className="w-8 h-px bg-[#A86B3E]/30" />
          Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default Home;