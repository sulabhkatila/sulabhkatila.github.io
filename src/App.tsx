import "./App.css";

import AnimatedSection from "./components/AnimatedSection";
import Awards from "./components/Awards";
import Education from "./components/Education";
import ScrollProgress from "./components/ScrollProgress";
import Experience from "./components/Experience";
import Contact from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NewHome from "./components/NewHome";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <ScrollProgress />
      <NavigationBar />
      <main id="main-content">
        <NewHome />
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <ProjectCard />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Education />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Awards />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Skills />
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <Contact />
        </AnimatedSection>
      </main>
    </>
  );
}

export default App;
