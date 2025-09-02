"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import profile from "@/assets/profile.jpg";

const Home = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setMounted(true);
      return;
    }

    // Run on next animation frame so initial styles are applied,
    // then animate in — looks smoother.
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <section
        id="home"
        className="min-h-screen relative flex flex-col gap-8 sm:grid sm:grid-cols-9 sm:gap-8 bg-accent scroll-section container mx-auto px-4 py-2 sm:py-14 overflow-hidden"
      >
        <div
          className={cn(
            "lg:col-span-4 col-span-1 bg-transparent py-10",
            "transform transition-all duration-700 ease-out will-change-transform",
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          )}
        >
          <p className="text-lg text-[#A86B3E] font-medium tracking-wide">
            👋 Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-[#3B2F2F]">
            Nischal Shrestha
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-[#5C4B45]">
            Software Engineer • Frontend Developer
          </h2>

          <p className="text-base sm:text-lg text-[#4C3D36] max-w-lg">
            I build modern, interactive, and scalable web applications with a
            strong focus on{" "}
            <span className="font-semibold text-[#A86B3E]">React </span>
            and <span className="font-semibold text-[#A86B3E]">JavaScript</span>
            . Currently exploring{" "}
            <span className="font-semibold text-[#A86B3E]">
              full-stack development{" "}
            </span>
            and crafting seamless digital experiences.
          </p>

          <div className="flex gap-3 flex-wrap mt-2">
            <span className="px-4 py-2 bg-[#E6C6AD] text-[#A86B3E] font-medium rounded-full shadow-sm">
              JavaScript
            </span>
            <span className="px-4 py-2 bg-[#D8CFE5] text-[#6B4DA8] font-medium rounded-full shadow-sm">
              React
            </span>
            <span className="px-4 py-2 bg-[#CDE6D8] text-[#3B8A5C] font-medium rounded-full shadow-sm">
              Express
            </span>
            <span className="px-4 py-2 bg-[#E0D0E6] text-[#6B3BA8] font-medium rounded-full shadow-sm">
              Node.js
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#A86B3E] hover:bg-[#8E5630] text-white rounded-xl shadow-md transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-[#A86B3E] text-[#A86B3E] hover:bg-[#A86B3E] hover:text-white rounded-xl transition"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div
          className={cn(
            "lg:col-start-6 lg:col-end-10 col-span-1 flex items-center justify-center py-10",
            "transform transition-all duration-700 ease-out will-change-transform",
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          )}
        >
          <div className="w-[32rem] h-[32rem] relative">
            <Image
              src={profile}
              alt="profile"
              className="w-full h-full object-cover rounded-2xl lg:rounded-[2rem] shadow-lg"
              priority
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 32rem"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
