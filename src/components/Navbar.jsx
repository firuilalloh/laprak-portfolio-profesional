import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900/70 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-sky-400 tracking-tight">
            Fafirru
          </span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8">
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
              TechStack
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

        {/* Mobile hamburger (Font Awesome) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="p-2 rounded-md text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {open ? (
              <i className="fa-solid fa-xmark text-1xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-1xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-gray-900/90 backdrop-blur-sm border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="block text-gray-300 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setOpen(false)}
              className="block text-gray-300 py-2 rounded-md"
            >
              Tech Stack
            </a>
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="block text-gray-300 py-2 rounded-md"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-gray-300 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
