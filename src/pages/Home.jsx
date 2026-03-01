import ScrollArrows from "../components/ScrollArrows";

import Hero from "../components/Hero";
import Journey from "../components/Journey";
import AboutPreview from "../components/AboutPreview";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";

const homeSections = [
  "hero",
  "journey",
  "aboutpreview",
  "skills",
  "projects",
  "certifications",
];

export default function Home() {
  return (
    <main>
      <ScrollArrows sections={homeSections} />

      <section id="hero" className="pt-40 md:pt-24">
        <Hero />
      </section>

      <section id="journey">
        <Journey />
      </section>

      <section id="aboutpreview">
        <AboutPreview />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>
    </main>
  );
}