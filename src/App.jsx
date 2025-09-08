import { useState } from "react";
import "./App.css";
import { heroData } from "./data";
import About from "./About.jsx"
import {Routes, Route} from 'react-router-dom'
import Hero from "./Hero.jsx";

function App() {
  const [info] = useState(heroData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Hero info={info}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
