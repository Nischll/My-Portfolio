// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// interface GsapOptions {
//   duration?: number;
//   delay?: number;
//   stagger?: number;
//   repeat?: boolean; // repeat animation on scroll
//   initial?: boolean; // for Home / initial animation
//   ready?: boolean; // wait for page ready signal
// }

// export const useGsapScroll = (selector: string, options?: GsapOptions) => {
//   useEffect(() => {
//     if (!options?.ready) return; // wait until page is ready

//     const elements = document.querySelectorAll(selector);
//     if (!elements.length) return;

//     const triggers: ScrollTrigger[] = [];

//     elements.forEach((el) => {
//       if (options?.initial) {
//         // Home section animation
//         gsap.fromTo(
//           el,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: options.duration ?? 1,
//             delay: options.delay ?? 0,
//             ease: "power2.out",
//           }
//         );
//       } else {
//         const tween = gsap.fromTo(
//           el,
//           { opacity: 0, y: 50 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: options.duration ?? 1,
//             delay: options.delay ?? 0,
//             stagger: options.stagger ?? 0.2,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: el,
//               start: "top 85%",
//               end: "bottom 10%",
//               toggleActions: options.repeat
//                 ? "play reverse play reverse"
//                 : "play none none none",
//               once: !options.repeat,
//             },
//           }
//         );
//         if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
//       }
//     });

//     return () => triggers.forEach((t) => t.kill());
//   }, [selector, options?.ready]);
// };                    
