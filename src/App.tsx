import { useState } from "react";
import "./App.css";

import NavigationBar from "./components/NavigationBar";
import NewHome from "./components/NewHome";
import Education from "./components/Education";
import ProjectCard from "./components/ProjectCard";
import Contact from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience"

function App() {
  return (
    <>
      <NavigationBar />
      <NewHome />
      <Skills />
      <Experience />
      <Education />
      <ProjectCard />
      <Contact />
    </>
  );
}

export default App;
