function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 Mochammad Fafirru Ilalloh. All rights reserved.
        </p>

        <div className="flex space-x-4 text-sm">
          <a
            href="https://github.com/firuilalloh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mochammad-fafirru-ilalloh-bb9178269"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;