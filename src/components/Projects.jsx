import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Tariff Import Impact System",
    category: "fullstack",
    tags: ["MERN Stack", "Data Visualizations", "Analytical Dashboard"],
    description:
      "A simulator that enables users to input tariff rates and import metrics to forecast business cost variations, profit margins, and risk profiles. Features a rich visualization dashboard and history tracker.",
    github: "https://github.com/kemabdulhakkim-cpu/Portfolio",
    demo: "#",
  },
  {
    title: "Real-Time Event Scheduler",
    category: "fullstack",
    tags: ["React.js", "Firebase", "Firestore", "Cloud Functions"],
    description:
      "Collaborative scheduling engine supporting shared calendars, real-time availability sync, live chat, conflict detection algorithms, and automated email invitations.",
    github: "https://github.com/kemabdulhakkim-cpu/Portfolio",
    demo: "#",
  },
  {
    title: "Contact Notebook",
    category: "software",
    tags: ["Python", "SQLite", "Tkinter", "SMTP Server"],
    description:
      "An offline contact book software featuring real-time name autocompletion, database integration, birthday reminders, automated email notifications via SMTP, and UI toggles.",
    github: "https://github.com/kemabdulhakkim-cpu/Portfolio",
    demo: "#",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#05021a]/30">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-cyan-accent/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Work
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Projects
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        {/* Filters Button Row */}
        <div className="flex justify-center items-center gap-3 md:gap-4 mb-12 flex-wrap">
          {[
            { key: "all", label: "All Works" },
            { key: "fullstack", label: "Full Stack" },
            { key: "software", label: "Software & Python" },
          ].map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-300 ${
                filter === btn.key
                  ? "bg-gradient-to-r from-cyan-accent to-blue-accent text-cyber-dark shadow-[0_0_12px_#00f5d4] scale-105"
                  : "bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-accent/30 transition-all duration-300 glass-panel shadow-2xl overflow-hidden hover:-translate-y-2"
            >
              {/* Glow Accent Card top */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Project Header */}
                <div className="flex justify-between items-start mb-6">
                  <span className="p-3.5 rounded-2xl bg-white/5 border border-white/5 text-cyan-accent group-hover:bg-cyan-accent/15 transition-colors duration-300">
                    <FaCode className="text-xl" />
                  </span>
                  <div className="flex items-center gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                      title="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={p.demo}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-accent transition-colors duration-300 leading-snug">
                  {p.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4 group-hover:text-gray-300 transition-colors duration-300">
                  {p.description}
                </p>
              </div>

              {/* Project Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {p.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-md bg-white/5 text-gray-400 text-[11px] font-mono font-medium tracking-wide uppercase group-hover:bg-purple-accent/10 group-hover:text-purple-accent transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
