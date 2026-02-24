import { lazy } from "react";

const HomeSection = lazy(() => import("../app/home/page"));
const About = lazy(() => import("../app/about/page"));
const SkillsSection = lazy(() => import("../app/skills/page"));
const Experience = lazy(() => import("../app/experience/page"));
const Projects = lazy(() => import("../app/projects/page"));
const Contact = lazy(() => import("../app/contact/page"));

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
