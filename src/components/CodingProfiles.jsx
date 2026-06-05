import React from "react";
import { FaCode, FaExternalLinkAlt, FaTerminal } from "react-icons/fa";

const profiles = [
  {
    platform: "LeetCode",
    solved: "150+",
    totalText: "Problems Solved",
    color: "from-yellow-500 to-amber-600",
    shadow: "shadow-yellow-500/10",
    url: "https://leetcode.com/u/abdulhakkim/",
    difficulty: [
      { name: "Easy", count: 80, pct: 80, color: "bg-emerald-400" },
      { name: "Medium", count: 60, pct: 60, color: "bg-amber-400" },
      { name: "Hard", count: 10, pct: 10, color: "bg-rose-500" },
    ],
  },
  {
    platform: "SkillRack",
    solved: "600+",
    totalText: "Problems Solved",
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/10",
    url: "https://www.skillrack.com/faces/ui/profile.xhtml;jsessionid=136FF61CDF2FF975BB8B44C127BADDCA",
    difficulty: [
      { name: "Daily Challenge", count: 350, pct: 90, color: "bg-cyan-400" },
      { name: "Daily Test", count: 180, pct: 75, color: "bg-purple-400" },
      { name: "Code Exercises", count: 70, pct: 50, color: "bg-pink-500" },
    ],
  },
];

export default function CodingProfiles() {
  return (
    <section id="coding" className="py-24 relative overflow-hidden bg-cyber-dark">
      <div className="absolute bottom-1/4 left-0 w-[250px] h-[250px] bg-cyan-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-sm font-semibold tracking-widest text-cyan-accent uppercase">
            Consistency
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Coding Profiles
          </h2>
          <div className="h-[2px] w-16 bg-gradient-to-r from-cyan-accent to-purple-accent mx-auto" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {profiles.map((profile, idx) => (
            <div
              key={idx}
              className={`p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/15 transition-all duration-300 glass-panel shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5`}
            >
              <div>
                {/* Platform Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-3">
                    <span className={`p-3 rounded-2xl bg-gradient-to-br ${profile.color} text-cyber-dark font-black`}>
                      <FaTerminal className="text-lg text-white" />
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-accent transition-colors duration-300">
                      {profile.platform}
                    </h3>
                  </div>
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    title={`View ${profile.platform} Profile`}
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Problems Solved Counter */}
                <div className="mb-8 text-left">
                  <span className="block text-4xl lg:text-5xl font-extrabold text-white font-mono tracking-tight">
                    {profile.solved}
                  </span>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold mt-1 block">
                    {profile.totalText}
                  </span>
                </div>
              </div>

              {/* Progress metrics bars */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                {profile.difficulty.map((diff, dIdx) => (
                  <div key={dIdx} className="space-y-1.5 text-left">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-gray-400">{diff.name}</span>
                      <span className="text-gray-300 font-mono">{diff.count}</span>
                    </div>
                    {/* Linear Bar */}
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                      <div
                        className={`h-full rounded-full ${diff.color} opacity-80`}
                        style={{ width: `${diff.pct}%` }}
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
