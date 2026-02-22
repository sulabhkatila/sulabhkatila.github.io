import "./App.css";

import Awards from "./components/Awards";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Footer";
import NavigationBar from "./components/NavigationBar";
import NewHome from "./components/NewHome";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavigationBar />
      <NewHome />
      <Experience />
      <ProjectCard />
      <Education />
      <Awards />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
