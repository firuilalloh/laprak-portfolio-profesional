import photo from "../assets/WhatsApp Image 2024-09-21 at 09.00.15_9ac5a827.jpg";

function About() {
  return (
    <section id="about">
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 md:gap-10 w-full max-w-6xl mx-auto py-12 md:py-16">
          <div className="flex flex-col justify-center items-center md:items-start md:justify-start order-2 md:order-1 text-center md:text-left md:pt-10 ">
            <h1 className="text-5xl font-bold mb-3 tracking-tight">
              Mochammad Fafirru Ilalloh
            </h1>
            <h2 className="text-2xl text-gray-400 font-light mb-2">
              Frontend Developer
            </h2>
            <h2 className="text-2xl text-sky-400 mb-4 font-medium">
              1 Year & 9 Month Experience
            </h2>
            <p className="text-xl text-gray-300 mb-2 md:mb-8 max-w-2xl md:text-justify">
              Passionate about creating beautiful, user-friendly web experiences
              with modern technologies. I love turning ideas into interactive
              digital solutions.
            </p>
          </div>
          <div className="flex justify-center items-center order-1 md:order-2 md:mb-0 md:pl-20 mt-4 md:mt-0">
            <img
              src={photo}
              alt="Profile"
              className="w-48 h-48 md:w-70 md:h-70 rounded-full border-4 border-gray-700 shadow-md object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center gap-4 mb-2 md:mb-6">
          <a
            href="https://github.com/firuilalloh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 hover:bg-cyan-600 transition-all duration-200 transform hover:scale-110"
          >
            <i className="fa-brands fa-github text-xl text-gray-100"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mochammad-fafirru-ilalloh-bb9178269"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-200 transform hover:scale-110"
          >
            <i className="fa-brands fa-linkedin-in text-xl text-gray-100"></i>
          </a>

          <a
            href="mailto:firuil@example.com"
            aria-label="Email"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gray-800 hover:bg-rose-500 transition-all duration-200 transform hover:scale-110"
          >
            <i className="fa-regular fa-envelope text-xl text-gray-100"></i>
          </a>
        </div>
        <a href="#projects">
          <div className="flex justify-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition duration-200 shadow-lg">
              My Work
            </button>
          </div>
        </a>
      </div>
    </section>
  );
}
export default About;
