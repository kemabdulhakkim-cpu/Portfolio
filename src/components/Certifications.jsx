import React from "react";
import { FaAward, FaImage, FaCheckCircle } from "react-icons/fa";

const certificates = [
  {
    name: "Mastering Data Structures & Algorithms using C and C++",
    issuer: "Udemy",
    year: "2025",
    link: null, // No image in assets
  },
  {
    name: "Mastering Python with NumPy for Data Science and Machine Learning",
    issuer: "Udemy",
    year: "2025",
    link: "/assets/python_numpy_certificate.png",
  },
  {
    name: "SQL Intermediate",
    issuer: "HackerRank",
    year: "2025",
    link: "/assets/sql_certificate.png",
  },
  {
    name: "Design Thinking – A Primer",
    issuer: "NPTEL | Score: 75%",
    year: "2026",
    link: "/assets/design_thinking_nptel.png",
  },
  {
    name: "Oracle Java Foundations",
    issuer: "Oracle University",
    year: "2025",
    link: "/assets/oracle_java_certificate.png",
  },
  {
    name: "Completion of C Training",
    issuer: "Spoken Tutorial, IIT Bombay | Score: 85%",
    year: "2024",
    link: "/assets/c_spoken_tutorial.png",
  },
  {
    name: "Completion of Cpp Training",
    issuer: "Spoken Tutorial, IIT Bombay | Score: 77.5%",
    year: "2024",
    link: "/assets/cpp_spoken_tutorial.png",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#05021a]/40">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Certifications
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300 glass-panel hover:-translate-y-1.5 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xl p-3 rounded-xl bg-white/5 text-cyan-accent group-hover:bg-cyan-accent/10 transition-colors duration-300">
                    <FaAward />
                  </span>
                  <span className="text-xs font-mono font-medium text-gray-400">
                    {cert.year}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-md md:text-lg font-bold text-white mb-2 group-hover:text-cyan-accent transition-colors duration-300 line-clamp-2 leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-6">
                  {cert.issuer}
                </p>
              </div>

              {/* Action and status */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-emerald-400/80 flex items-center gap-1.5">
                  <FaCheckCircle className="text-sm" /> Verified
                </span>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyan-accent/40 text-xs font-medium text-gray-300 hover:text-white transition-all duration-300 hover:bg-cyan-accent/5"
                  >
                    <FaImage className="text-cyan-accent" />
                    <span>View Proof</span>
                  </a>
                ) : (
                  <span className="text-[10px] text-gray-500 font-mono italic">
                    Cred. Issued
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
