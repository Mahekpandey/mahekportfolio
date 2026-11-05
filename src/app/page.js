"use client";

import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Papers } from "./components/Papers";
import { Blogs } from "./components/Blogs";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#121212] text-[#f6f2ea]">
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work" className="border-t border-[var(--line)]">
        <Experience />
      </section>
      <section id="papers" className="border-t border-[var(--line)] bg-[#0f0f0f]">
        <Papers />
      </section>
      <section id="writing" className="relative border-t border-[var(--line)]">
        <span id="blogs" className="absolute -top-16" aria-hidden="true" />
        <Blogs />
      </section>
      <section id="projects" className="border-t border-[var(--line)]">
        <Projects />
      </section>
      <section id="skills" className="border-t border-[var(--line)]">
        <Skills />
      </section>
      <section id="contact" className="border-t border-[var(--line)]">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
