import NavBar from "./NavBar";
import { SiDjango, SiDotnet, SiPython, SiC, SiJavascript, SiHtml5, SiCss3, SiReact } from "react-icons/si";
import { useState } from "react";

export default function About() {
  const [state, setState] = useState(true);

  function toggle() {
    setState((prev) => !prev);
  }

  return (
    <>
      <div className="relative min-h-screen w-full flex flex-col justify-center items-center bg-black">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90 z-0 pointer-events-none"></div>

        {/* Navbar */}
        <div className="absolute top-0 w-full z-20">
          <NavBar />
        </div>

        {/* About Section */}
        {state ? (
          <div id="about" className="min-h-screen w-full px-4 sm:px-10 md:px-20 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif underline underline-offset-4 z-20">
              About Me
            </h2>
            <p className="text-white mt-6 sm:mt-8 md:mt-10 font-serif text-base sm:text-lg md:text-xl z-20 leading-relaxed">
              I am a passionate software engineer with a love for coding and technology. I'm from Bangladesh and have
              graduated with a bachelor's in Computer Science and Engineering from the University of Liberal Arts
              Bangladesh. I enjoy solving complex problems and building innovative solutions that leverage the latest technologies.
              My expertise lies in web development and software engineering.
              <br />
              I'm always eager to collaborate with like-minded individuals and contribute to exciting projects.
            </p>
            <p className="text-white mt-4 font-serif text-base sm:text-lg md:text-xl z-20">
              Feel free to explore my projects and get in touch!
            </p>
          </div>
        ) : (
          /* Skills Section */
          <section id="skills" className="relative w-full px-4 sm:px-8 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 bg-black">
            {/* Languages */}
            <h3 className="text-xl sm:text-2xl font-serif text-gray-300 mb-4 sm:mb-6">Programming Languages</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
              <SkillCard icon={<SiPython className="text-yellow-400" />} name="Python" />
              <SkillCard icon={<SiC className="text-blue-400" />} name="C" />
              <SkillCard icon={<SiJavascript className="text-yellow-300" />} name="JavaScript" />
              <SkillCard icon={<SiHtml5 className="text-orange-500" />} name="HTML" />
              <SkillCard icon={<SiCss3 className="text-blue-500" />} name="CSS" />
            </div>

            {/* Backend */}
            <h3 className="text-xl sm:text-2xl font-serif text-gray-300 mb-4 sm:mb-6">Backend Framework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
              <SkillCard icon={<SiDjango className="text-green-500" />} name="Django" />
              <SkillCard icon={<SiDjango className="text-green-400" />} name="Django Rest" />
              <SkillCard icon={<SiDotnet className="text-blue-500" />} name="ASP.NET Core" />
            </div>

            {/* Frontend */}
            <h3 className="text-xl sm:text-2xl font-serif text-gray-300 mb-4 sm:mb-6">Frontend Framework</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillCard icon={<SiReact className="text-cyan-400" />} name="React" />
            </div>
          </section>
        )}

        {/* Toggle Button */}
        <button
          onClick={toggle}
          className="fixed bottom-6 sm:bottom-10 bg-gray-500 hover:bg-sky-700 transition z-40 text-white w-full sm:w-64 font-bold py-3 rounded-lg shadow-md"
        >
          {state ? "Skills" : "About"}
        </button>
      </div>
    </>
  );
}

function SkillCard({ icon, name }) {
  return (
    <div className="bg-gray-900/80 border border-neutral-700 rounded-lg p-6 flex flex-col items-center shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition">
      <div className="text-2xl mb-4">{icon}</div>
      <p className="text-white font-serif text-md">{name}</p>
    </div>
  );
}
