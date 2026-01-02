import NavBar from "./NavBar";

export default function Project({ projects }) {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Navbar */}
      <div className="absolute top-0 w-full z-20">
        <NavBar />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Page Heading */}
        <h1 className="text-gray-300 text-5xl font-serif text-center mb-14">
          Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/80 border-2 border-neutral-500 rounded-3xl p-8 shadow-lg shadow-neutral-900/50 hover:scale-[1.02] transition-transform duration-300"
            >
              <h2 className="text-gray-200 text-3xl font-serif mb-3">
                {project.title}
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                {project.stack}
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-neutral-500 text-gray-300 hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-neutral-500 text-gray-300 hover:bg-gray-800 transition"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
