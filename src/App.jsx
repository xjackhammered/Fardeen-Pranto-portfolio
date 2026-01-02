import { useState } from "react";
import "./App.css";
import { heroData } from "./data";
import About from "./About.jsx"
import {Routes, Route} from 'react-router-dom'
import Hero from "./Hero.jsx";
import projects from "./projectData";
import Project from "./Project.jsx"

function App() {
  const [info] = useState(heroData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero info={info}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project projects={projects}/>}/>
      </Routes>
    </>
  );
}

export default App;
