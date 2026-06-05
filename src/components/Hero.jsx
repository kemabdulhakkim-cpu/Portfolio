import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaDownload, FaEnvelope } from "react-icons/fa";

const roles = [
  "AI Developer",
  "Full Stack Developer",
  "Machine Learning",
  "Data Science Student",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  const handleScrollTo = (id) => {
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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Decorative Radial glow behind Hero */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-purple-accent/15 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-cyan-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Content */}
        <div className="lg:col-span-7 text-left space-y-6 flex flex-col justify-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-accent animate-ping" />
            <span className="text-xs font-semibold tracking-wide text-cyan-accent uppercase">
              Open to SDE Internships & SDE Roles
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan-accent via-blue-accent to-purple-accent bg-clip-text text-transparent glow-text-cyan">
              ABDUL HAKKIM T
            </span>
          </h1>

          <div className="h-10 md:h-12 flex items-center">
            <h2 className="text-xl md:text-2xl font-mono text-gray-300 flex items-center">
              <span>I'm a&nbsp;</span>
              <span className="text-cyan-accent border-r-2 border-cyan-accent animate-pulse pr-1">
                {currentText}
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
            Passionate about building AI-powered and full-stack applications that solve real-world problems. Specialized in machine learning, full stack development, and algorithm structures.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-accent to-blue-accent text-cyber-dark font-bold transition-all duration-300 hover:shadow-[0_0_20px_#00f5d4] hover:scale-105 btn-glow-cyan"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-sm" />
            </button>
            
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-accent/50 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105 btn-glow-purple"
            >
              <span>Contact Me</span>
              <FaEnvelope className="text-sm text-purple-accent" />
            </button>

            <a
              href="/assets/Abdul_Hakkim_T_Resume.pdf"
              download="Abdul_Hakkim_T_Resume.pdf"
              className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-accent/50 text-white font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              <span>Download CV</span>
              <FaDownload className="text-sm text-cyan-accent" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-6">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              Follow Me
            </span>
            <div className="h-[1px] w-12 bg-white/10" />
            <a
              href="https://github.com/kemabdulhakkim-cpu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-accent hover:shadow-[0_0_12px_#00f5d4] transition-all duration-300 hover:-translate-y-1"
              aria-label="GitHub profile"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-hakkim-t-a04528333/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-accent hover:shadow-[0_0_12px_#6366f1] transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        {/* Right Graphic SVG Network illustration */}
        <div className="lg:col-span-5 flex justify-center items-center z-10 relative">
          <div className="relative w-full max-w-[400px] aspect-square rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 to-transparent p-6 glass-panel animate-float shadow-[0_0_30px_rgba(0,245,212,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-accent/5 to-purple-accent/5 rounded-3xl pointer-events-none" />
            
            {/* SVG Network design */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-cyan-accent"
              fill="none"
              stroke="currentColor"
            >
              {/* Grid Background Lines inside SVG */}
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="15" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
              
              {/* Synapse Lines */}
              <line x1="50" y1="15" x2="30" y2="35" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
              <line x1="50" y1="15" x2="70" y2="35" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
              <line x1="30" y1="35" x2="30" y2="65" stroke="rgba(0, 245, 212, 0.4)" strokeWidth="0.8" />
              <line x1="70" y1="35" x2="70" y2="65" stroke="rgba(0, 245, 212, 0.4)" strokeWidth="0.8" />
              <line x1="30" y1="65" x2="50" y2="85" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
              <line x1="70" y1="65" x2="50" y2="85" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.8" />
              
              {/* Central connections */}
              <line x1="50" y1="15" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />
              <line x1="30" y1="35" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />
              <line x1="70" y1="35" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />
              <line x1="30" y1="65" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />
              <line x1="70" y1="65" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />
              <line x1="50" y1="85" x2="50" y2="50" stroke="rgba(255, 0, 127, 0.3)" strokeWidth="0.6" />

              {/* Diagonal Cross lines */}
              <line x1="30" y1="35" x2="70" y2="65" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.4" />
              <line x1="70" y1="35" x2="30" y2="65" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="0.4" />

              {/* Nodes (Circles) */}
              <circle cx="50" cy="15" r="3.5" fill="#030014" stroke="#00f5d4" strokeWidth="1.5" className="animate-pulse" />
              <circle cx="30" cy="35" r="3" fill="#030014" stroke="#6366f1" strokeWidth="1.5" />
              <circle cx="70" cy="35" r="3" fill="#030014" stroke="#6366f1" strokeWidth="1.5" />
              
              {/* AI Hub Center */}
              <circle cx="50" cy="50" r="5" fill="url(#aiGradient)" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="50" cy="50" r="4" fill="#030014" stroke="#ff007f" strokeWidth="2" />
              
              <circle cx="30" cy="65" r="3" fill="#030014" stroke="#00b4d8" strokeWidth="1.5" />
              <circle cx="70" cy="65" r="3" fill="#030014" stroke="#00b4d8" strokeWidth="1.5" />
              <circle cx="50" cy="85" r="3.5" fill="#030014" stroke="#00f5d4" strokeWidth="1.5" className="animate-pulse" />

              {/* SVG Gradients definitions */}
              <defs>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff007f" />
                  <stop offset="100%" stopColor="#00f5d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Orbiting text / details */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#030014]/80 border border-white/5 rounded-full text-[10px] font-mono tracking-widest uppercase text-cyan-accent flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-accent animate-ping" />
              AI Neural Model: Online
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
