// hooks/useScrollAnimation.ts
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Attach to any section's root ref.
 * Each `.anim-child` inside gets its OWN ScrollTrigger so it animates
 * exactly when *that element* enters the viewport — not when the section does.
 *
 * @param selector  – CSS selector for animated children (default: ".anim-child")
 * @param stagger   – delay between each child in seconds (default: 0.1)
 */
export function useScrollAnimation(
  selector = ".anim-child",
  stagger = 0.1
) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context;

    // rAF ensures DOM has painted before we measure positions
    const raf = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const children = gsap.utils.toArray<HTMLElement>(selector, el);
        if (!children.length) return;

        // Each child gets its own trigger — fires the moment IT enters view
        children.forEach((child, i) => {
          gsap.fromTo(
            child,
            { opacity: 0, y: 28, filter: "blur(5px)" },
            {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power3.out",
              delay: i * stagger,
              scrollTrigger: {
                trigger: child,
                // fires as soon as the element top crosses 95% down the viewport
                start: "top 105%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        ScrollTrigger.refresh();
      }, el);
    });

    return () => {
      cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [selector, stagger]);

  return ref;
}
