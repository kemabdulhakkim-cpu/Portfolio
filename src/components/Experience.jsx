import React from "react";
import { FaBriefcase, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

const experiences = [
  {
    role: "In-House Full Stack Developer Intern",
    company: "Algo Tutor Academy",
    duration: "2025",
    description: "Completed an intensive full-stack engineering internship, contributing to production-ready enterprise structures.",
    highlights: [
      "Developed and maintained full-stack web applications using the MERN (MongoDB, Express, React, Node) stack.",
      "Engineered analytical dashboard systems featuring modular state visualization and data aggregations.",
      "Implemented security best practices including JSON Web Tokens (JWT) authentication and Role-Based Access Control (RBAC).",
      "Built responsive, mobile-first frontend user interface systems utilizing layout standards and custom animations.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-cyber-dark">
      <div className="absolute top-1/4 right-0 w-[250px] h-[250px] bg-purple-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Work History
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Experience
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 md:ml-8 text-left space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Indicator */}
              <span className="absolute -left-[39px] md:-left-[55px] top-2 flex h-8 w-8 items-center justify-center rounded-full bg-cyber-dark border border-cyan-accent shadow-[0_0_10px_#00f5d4] group-hover:border-purple-accent group-hover:shadow-[0_0_10px_#6366f1] transition-all duration-300">
                <FaBriefcase className="text-xs text-cyan-accent group-hover:text-purple-accent transition-colors duration-300" />
              </span>

              {/* Glass Card */}
              <div className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 group-hover:border-cyan-accent/20 transition-all duration-300 glass-panel shadow-2xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="text-md font-semibold text-purple-accent block mt-0.5">
                      {exp.company}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                    <FaCalendarAlt className="text-cyan-accent" />
                    {exp.duration}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="mt-0.5 text-cyan-accent">
                        <FaCheckCircle className="text-xs mt-1" />
                      </span>
                      <span className="leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
