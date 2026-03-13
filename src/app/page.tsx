import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GovernmentHighlight from "@/components/GovernmentHighlight";
import AIResearch from "@/components/AIResearch";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <GovernmentHighlight />
      <Projects />
      <AIResearch />
      <Contact />
    </main>
  );
}
