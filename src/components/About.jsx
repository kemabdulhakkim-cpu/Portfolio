import React from "react";
import { FaGraduationCap, FaCalendarAlt, FaBookOpen } from "react-icons/fa";

const education = [
  {
    institution: "Sri Eshwar College of Engineering",
    degree: "B.Tech Artificial Intelligence & Data Science",
    score: "CGPA: 7.9",
    duration: "2024 - 2028",
    description: "Deepening knowledge in Machine Learning algorithms, Big Data frameworks, Generative AI models, and Advanced Data Structures.",
  },
  {
    institution: "Sowdambikaa Matriculation Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    score: "Percentage: 86.2%",
    duration: "2022 - 2024",
    description: "Specialized in Computer Science, Mathematics, Physics, and Chemistry.",
  },
  {
    institution: "Govt. Boys Higher Secondary School",
    degree: "Secondary School Leaving Certificate (SSLC)",
    score: "Percentage: 79.2%",
    duration: "2021 - 2022",
    description: "Foundation in general science, mathematics, and analytical reasoning.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#05021a]/40">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Introduction
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Text Bio */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FaBookOpen className="text-cyan-accent" />
              <span>My Journey</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I am a B.Tech AI & Data Science student at Sri Eshwar College of Engineering with a passion for Machine Learning, Full Stack Development, Data Analytics, and Generative AI applications. I enjoy building impactful software solutions and continuously improving my problem-solving skills through coding and real-world projects.
            </p>
            <p className="text-gray-400 leading-relaxed">
              With a strong foundation in structures like object-oriented programming, database schemas, and mathematical modeling, I bridge the gap between AI theories and full-stack software implementation.
            </p>

            {/* Quick stats cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <span className="block text-3xl font-extrabold text-cyan-accent">7.9</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Current CGPA</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                <span className="block text-3xl font-extrabold text-purple-accent">750+</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">Problems Solved</span>
              </div>
            </div>
          </div>

          {/* Right Education Timeline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2 mb-6">
              <FaGraduationCap className="text-purple-accent text-3xl" />
              <span>Education History</span>
            </h3>

            {/* Timeline wrapper */}
            <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 ml-2">
              {education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] md:-left-[39px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-cyber-dark border-2 border-cyan-accent group-hover:border-purple-accent group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_#00f5d4] group-hover:shadow-[0_0_8px_#6366f1]" />

                  {/* Card Container */}
                  <div className="p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:border-cyan-accent/20 transition-all duration-300 glass-panel group-hover:shadow-[0_8px_30px_rgba(0,245,212,0.03)]">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                          {item.institution}
                        </h4>
                        <span className="text-sm font-medium text-purple-accent block">
                          {item.degree}
                        </span>
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:gap-1">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-accent/10 text-cyan-accent text-xs font-semibold">
                          {item.score}
                        </span>
                        <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                          <FaCalendarAlt className="text-[10px]" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
