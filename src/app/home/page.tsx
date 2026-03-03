"use client";

import Image from "next/image";
import profile from "@/assets/profile2.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hero } from "@/data/portfolio-content";
import { FileText } from "lucide-react";

/* Tech logo SVGs — icons only (correct paths for React atom, CSS3, JS) */
const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="-11.5 -10.23174 23 20.46348" className={className} aria-hidden>
    <circle r="2.05" fill="currentColor" />
    <g stroke="currentColor" fill="none" strokeWidth="1.2">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const HtmlIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
  </svg>
);
/* CSS3: inline SVG path from simple-icons (CDN returns 404 for css3) */
const CssIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
    <path d="M0 0v20.16A3.84 3.84 0 0 0 3.84 24h16.32A3.84 3.84 0 0 0 24 20.16V3.84A3.84 3.84 0 0 0 20.16 0Zm14.256 13.08c1.56 0 2.28 1.08 2.304 2.64h-1.608c.024-.288-.048-.6-.144-.84-.096-.192-.288-.264-.552-.264-.456 0-.696.264-.696.84-.024.576.288.888.768 1.08.72.288 1.608.744 1.92 1.296q.432.648.432 1.656c0 1.608-.912 2.592-2.496 2.592-1.656 0-2.4-1.032-2.424-2.688h1.68c0 .792.264 1.176.792 1.176.264 0 .456-.072.552-.24.192-.312.24-1.176-.048-1.512-.312-.408-.912-.6-1.32-.816q-.828-.396-1.224-.936c-.24-.36-.36-.888-.36-1.536 0-1.44.936-2.472 2.424-2.448m5.4 0c1.584 0 2.304 1.08 2.328 2.64h-1.608c0-.288-.048-.6-.168-.84-.096-.192-.264-.264-.528-.264-.48 0-.72.264-.72.84s.288.888.792 1.08c.696.288 1.608.744 1.92 1.296.264.432.408.984.408 1.656.024 1.608-.888 2.592-2.472 2.592-1.68 0-2.424-1.056-2.448-2.688h1.68c0 .744.264 1.176.792 1.176.264 0 .456-.072.552-.24.216-.312.264-1.176-.048-1.512-.288-.408-.888-.6-1.32-.816-.552-.264-.96-.576-1.2-.936s-.36-.888-.36-1.536c-.024-1.44.912-2.472 2.4-2.448m-11.031.018c.711-.006 1.419.198 1.839.63.432.432.672 1.128.648 1.992H9.336c.024-.456-.096-.792-.432-.96-.312-.144-.768-.048-.888.24-.12.264-.192.576-.168.864v3.504c0 .744.264 1.128.768 1.128a.65.65 0 0 0 .552-.264c.168-.24.192-.552.168-.84h1.776c.096 1.632-.984 2.712-2.568 2.688-1.536 0-2.496-.864-2.472-2.472v-4.032c0-.816.24-1.44.696-1.848.432-.408 1.146-.624 1.857-.63" />
  </svg>
);
/* JS: CDN works; keep as img */
const JS_ICON_URL = "https://imgs.search.brave.com/2Lop95efMN3mNn8YORMHw4gXlmuiYbR1SXVpQQV4NCo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi85Lzk5L1Vu/b2ZmaWNpYWxfSmF2/YVNjcmlwdF9sb2dv/XzIuc3ZnLzI1MHB4/LVVub2ZmaWNpYWxf/SmF2YVNjcmlwdF9s/b2dvXzIuc3ZnLnBu/Zw";
const JsIcon = ({ className }: { className?: string }) => (
  <img src={JS_ICON_URL} alt="" className={className} aria-hidden width={24} height={24} />
);

const FLOAT_ICONS = [
  { id: "react", Icon: ReactIcon, color: "text-[#61DAFB]", style: "top-[18%] left-[5%]", delay: 0 },
  { id: "html", Icon: HtmlIcon, color: "text-[#E34F26]", style: "top-[12%] right-[20%]", delay: 0.2 },
  { id: "css", Icon: CssIcon, color: "text-[#7431dd]", style: "bottom-[20%] left-[2%]", delay: 0.4 },
  { id: "js", Icon: JsIcon, color: "text-[#111111]", style: "bottom-[15%] right-[25%]", delay: 0.6 },
] as const;

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
        duration: 3,
        opacity: 1,
        x: 0,
        scale: 1.2,
        ease: "power2.out",
      });
      return () => ctx.revert();
    });
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Content */}
      <div className="flex flex-col justify-center max-w-xl lg:max-w-2xl order-1">
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

      {/* Image with floating tech icons */}
      <div
        ref={imageRef}
        className="relative w-full flex items-center justify-center order-2 lg:flex-1 lg:max-w-[28rem] xl:max-w-[32rem]"
      >
        <div className="relative w-full aspect-square max-w-[20rem] sm:max-w-[24rem] lg:max-w-none min-w-[16rem] min-h-[16rem] sm:min-w-[20rem] sm:min-h-[20rem]">
          {/* Floating tech icons — inside image area, icons only */}
          {FLOAT_ICONS.map(({ id, Icon, color, style, delay }) => (
            <span
              key={id}
              className={`absolute z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 ${color} ${style} animate-float will-change-transform`}
              style={{ animationDelay: `${delay}s` }}
              aria-hidden
            >
              <Icon className="size-5 sm:size-8" />
            </span>
          ))}
          <div className="relative w-full h-full overflow-hidden rounded-2xl">
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
