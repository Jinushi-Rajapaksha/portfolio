"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
// import { About } from "@/components/About"
// import { Skills } from "@/components/Skills"
// import { Projects } from "@/components/Projects"
// import { Education } from "@/components/Education"
// import { Contact } from "@/components/Contact"
// import { Footer } from "@/components/Footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center min-h-screen">
        <Hero />
      </div>{" "}
      {/* <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer /> */}
    </div>
  );
}
