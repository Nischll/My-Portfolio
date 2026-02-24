"use client";

import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/data/portfolio-content";
import { FileText } from "lucide-react";

const Home = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageElement = imageRef.current;
      gsap.set(imageElement, {
        opacity: 0,
        x: 50,
        scale: 1,
      });
      gsap.to(imageElement, {
        duration: 0.8,
        opacity: 1,
        x: 0,
        scale: 1,
        ease: "power2.out",
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-b from-[#FAF7F4] to-background"
    >
      {/* Content */}
      <div className="flex flex-col justify-center max-w-xl lg:max-w-2xl order-2 lg:order-1">
        <p className="text-sm sm:text-base font-medium tracking-wide text-[#A86B3E] uppercase mb-2">
          {hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight text-[#3B2F2F]">
          {hero.name}
        </h1>
        <p className="mt-3 text-lg sm:text-xl font-semibold text-[#5C4B45]">
          {hero.headline} · {hero.subline}
        </p>
        <p className="mt-5 sm:mt-6 text-base sm:text-lg text-[#4C3D36] leading-relaxed">
          {hero.intro}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-[#A86B3E] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#A86B3E]/25 hover:bg-[#8f5a34] hover:shadow-lg hover:shadow-[#A86B3E]/20 transition-all duration-200"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#A86B3E] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#A86B3E] hover:bg-[#A86B3E]/10 transition-colors duration-200"
          >
            {hero.ctaSecondary}
          </a>
          <a
            href={hero.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#5C4B45]/30 bg-white/80 px-4 py-2.5 text-sm font-medium text-[#4C3D36] hover:bg-[#F5EFE9] hover:border-[#5C4B45]/50 transition-all duration-200 shadow-sm"
          >
            <FileText className="size-4 shrink-0" aria-hidden />
            {hero.ctaResume}
          </a>
        </div>
      </div>

      {/* Image */}
      <div
        ref={imageRef}
        className="relative w-full flex items-center justify-center order-1 lg:order-2 lg:flex-1 lg:max-w-[28rem] xl:max-w-[32rem]"
      >
        <div className="relative w-full aspect-square max-w-[20rem] sm:max-w-[24rem] lg:max-w-none min-w-[16rem] min-h-[16rem] sm:min-w-[20rem] sm:min-h-[20rem]">
          <div className="relative w-full h-full overflow-hidden rounded-2xl sm:rounded-[1.75rem] ring-2 ring-white/90 shadow-xl shadow-[#3B2F2F]/15">
            <Image
              src={profile}
              alt="Nischal Shrestha"
              className="object-cover"
              priority
              fill
              sizes="(max-width: 640px) 20rem, (max-width: 1024px) 24rem, 32rem"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
