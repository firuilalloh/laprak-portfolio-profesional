function Navbar() {
  return (
    <nav className="w-full bg-gray-900/70 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-sky-400 tracking-tight">
            Fafirru
          </span>
        </div>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#about"
              className="text-gray-300 hover:text-sky-400 font-medium transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-gray-300 hover:text-sky-400 font-medium transition duration-200"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-gray-300 hover:text-sky-400 font-medium transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-300 hover:text-sky-400 font-medium transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
