import NavBar from "./NavBar";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Navbar */}
      <div className="absolute top-0 w-full z-20">
        <NavBar />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-6 pt-32 pb-20">
        <div className="w-full max-w-xl bg-gray-900/80 border-2 border-neutral-500 rounded-3xl p-10 shadow-lg shadow-neutral-900/50">
          
          {/* Heading */}
          <h1 className="text-gray-300 text-4xl font-serif text-center mb-6">
            Contact Me
          </h1>

          <p className="text-gray-400 text-center mb-10">
            Feel free to reach out for opportunities, collaborations, or just to connect.
          </p>

          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <div className="flex justify-between border-b border-neutral-700 pb-2">
              <span>Email</span>
              <a
                href="mailto:fardeenpranto7@gmail.com"
                className="hover:text-gray-100 transition"
              >
                fardeenpranto7@gmail.com
              </a>
            </div>

            <div className="flex justify-between border-b border-neutral-700 pb-2">
              <span>Phone</span>
              <span>+8801751810506</span>
            </div>

            <div className="flex justify-between border-b border-neutral-700 pb-2">
              <span>LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/fardeen-pranto-a34214246"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                linkedin.com/in/fardeen-pranto
              </a>
            </div>

            <div className="flex justify-between">
              <span>GitHub</span>
              <a
                href="https://github.com/xjackhammered"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                github.com/xjackhammered
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
