import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";

export default function Portfolio() {
  return (
    <div className="bg-background">
      {/* <Navigation /> */}

      <main>
        <section className=" flex items-center justify-center">
          <Hero />
        </section>

        <section className="flex items-center justify-center -mt-10">
          <About />
        </section>

        <section className=" flex items-center justify-center">
          <Skills />
        </section>

        <section className=" flex items-center justify-center">
          <Projects />
        </section>

        <section className=" flex items-center justify-center">
          <Certifications />
        </section>

        <section className="flex items-center justify-center">
          <Education />
        </section>

        <section className=" flex items-center justify-center">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
