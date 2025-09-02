import { lazy } from "react";

const HomeSection = lazy(() => import("../app/home/page"));
const About = lazy(() => import("../app/about/page"));
const Projects = lazy(() => import("../app/projects/page"));
const Contact = lazy(() => import("../app/contact/page"));

export default function Home() {
  return (
    <>
      <HomeSection />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
