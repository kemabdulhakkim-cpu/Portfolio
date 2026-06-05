import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "coding", label: "Coding Profiles" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for glass navbar effect & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#030014]/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home");
          }}
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-1 group"
        >
          <span className="text-cyan-accent group-hover:text-pink-accent transition-colors duration-300">&lt;</span>
          <span>Abdul Hakkim</span>
          <span className="text-cyan-accent group-hover:text-pink-accent transition-colors duration-300">/&gt;</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-8">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section.id);
                }}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 ${
                  activeSection === section.id
                    ? "text-cyan-accent font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.label}
                {activeSection === section.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-accent to-purple-accent shadow-[0_0_8px_#00f5d4]"></span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="hidden xl:block">
          <a
            href="/assets/Abdul_Hakkim_T_Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-accent/50 text-white font-medium text-sm transition-all duration-300 hover:bg-cyan-accent/10 hover:-translate-y-0.5 shadow-md shadow-black/10 group btn-glow-cyan"
          >
            <FaDownload className="text-cyan-accent group-hover:animate-bounce" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="xl:hidden text-2xl text-gray-300 hover:text-white transition-colors duration-300"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="xl:hidden fixed inset-0 top-[72px] bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
        />
      )}

      {/* Mobile Drawer Menu */}
      <div
        className={`xl:hidden fixed top-[72px] right-0 w-3/4 max-w-sm h-[calc(100vh-72px)] bg-[#07051a]/95 border-l border-white/5 shadow-2xl z-50 transition-all duration-300 ease-out flex flex-col p-6 backdrop-blur-xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 my-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section.id);
                }}
                className={`text-lg font-medium block py-2 border-b border-white/5 transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-cyan-accent"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/assets/Abdul_Hakkim_T_Resume.pdf"
          download
          className="mt-auto flex items-center justify-center gap-2 w-full py-3 rounded-full bg-cyan-accent text-cyber-dark font-semibold transition-all duration-300 hover:bg-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
        >
          <FaDownload />
          <span>Download Resume</span>
        </a>
      </div>
    </nav>
  );
}
