"use client";

import Image from "next/image";
import profile from "@/assets/profile.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const hoverTween = useRef(null);

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

  // const handleMouseEnter = () => {
  //   if(!imageRef.current) return;
  //   if(hoverTween.current){
  //     hoverTween.current.kill()
  //   }

  //   hoverTween.current = gsap.to(imageRef.current,{
  //     duration
  //   })
  // };
  // const handleMouseLeave = () => {

  // };
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col gap-8 sm:grid sm:grid-cols-9 sm:gap-8 bg-accent scroll-section container mx-auto px-4 py-14 overflow-hidden"
    >
      <div className="sm:col-span-4 col-span-1 bg-transparent py-10">
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
          <span className="font-semibold text-[#A86B3E]">React</span> and{" "}
          <span className="font-semibold text-[#A86B3E]">JavaScript</span>.
        </p>
      </div>

      <div
        ref={imageRef}
        className="sm:col-start-6 sm:col-end-10 col-span-1 flex items-center justify-center py-10"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
      >
        <div className="w-[32rem] h-[32rem] relative">
          <Image
            src={profile}
            alt="profile"
            className="w-full h-full object-cover rounded-2xl sm:rounded-[2rem] shadow-lg"
            priority
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
