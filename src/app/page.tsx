import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";
import Experience from "@/components/Experience";
import About from "@/components/About";
import FloatingCode from "@/components/FloatingCode";
import Terminal from "@/components/Terminal";

export default function Home() {
  return (
    <main>
      <FloatingCode />
      <Terminal />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Footer />
    </main>
  );
}
