import { lazy } from "react";

const HomeSection = lazy(() => import("../app/home/Home"));
const About = lazy(() => import("../app/about/About"));
const SkillsSection = lazy(() => import("../app/skills/Skills"));
const Experience = lazy(() => import("../app/experience/Experience"));
const Projects = lazy(() => import("../app/projects/Projects"));
const Contact = lazy(() => import("../app/contact/Contact"));

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <SkillsSection />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
