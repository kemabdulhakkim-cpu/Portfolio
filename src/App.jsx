import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBg from "./components/ParticlesBg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Contact from "./components/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Simulate initial loading animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-gray-200 overflow-x-hidden">
      <AnimatePresence>
        {loading ? (
          // Preloader
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#030014] z-[9999] flex flex-col items-center justify-center"
          >
            <div className="relative w-24 h-24 flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-accent/20 animate-ping" />
              {/* Rotating gradient ring */}
              <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-cyan-accent animate-spin" />
              {/* Center icon */}
              <div className="absolute text-cyan-accent font-mono font-bold text-sm tracking-tighter">
                &lt;AH/&gt;
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 font-mono text-xs tracking-widest uppercase text-cyan-accent animate-pulse"
            >
              Initializing AI Model...
            </motion.p>
          </motion.div>
        ) : (
          // Main Portfolio Site
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Page Scroll Progress Indicator */}
            <div
              id="scroll-progress"
              style={{ transform: `scaleX(${scrollProgress / 100})` }}
            />

            {/* Particle Canvas background */}
            <ParticlesBg />

            {/* Sticky Header Nav */}
            <Navbar />

            {/* Main Sections wrapper */}
            <main className="relative z-10 w-full">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <CodingProfiles />
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
