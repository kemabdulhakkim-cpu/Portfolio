import React from "react";
import { FaCode, FaBrain, FaServer, FaDatabase, FaTools } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode className="text-cyan-accent" />,
    skills: [
      { name: "C", level: 85 },
      { name: "C++", level: 80 },
      { name: "Python", level: 80 },
      { name: "Java", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Machine Learning",
    icon: <FaBrain className="text-pink-accent" />,
    skills: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 75 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-purple-accent" />,
    skills: [
      { name: "FastAPI", level: 70 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Spring Boot", level: 65 },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase className="text-blue-accent" />,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Tools & Libraries",
    icon: <FaTools className="text-yellow-400" />,
    skills: [
      { name: "GitHub / Git", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "Tableau", level: 70 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "Google Colab", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Technical Skills
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-cyan-accent/20 transition-all duration-300 glass-panel shadow-[0_4px_30px_rgba(0,0,0,0.1)] group hover:-translate-y-1.5"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/5">
                <span className="text-2xl p-3.5 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  {category.icon}
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-accent transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Skill Bars List */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2 text-left">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold text-gray-300">{skill.name}</span>
                      <span className="font-mono text-gray-400">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-accent to-blue-accent transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(0,245,212,0.3)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
