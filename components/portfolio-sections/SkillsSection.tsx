'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Skill {
  name: string;
  category: 'languages' | 'frameworks' | 'databases' | 'tools' | 'concepts';
  level: string;
  dots: number; // 1 to 5
  tagColor: string;
}

const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'languages', level: 'Advanced', dots: 5, tagColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  { name: 'JavaScript', category: 'languages', level: 'Advanced', dots: 5, tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  { name: 'C Language', category: 'languages', level: 'Proficient', dots: 4, tagColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'HTML5 & CSS3', category: 'languages', level: 'Advanced', dots: 5, tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
  { name: 'SQL', category: 'languages', level: 'Proficient', dots: 4, tagColor: 'bg-teal-100 text-teal-800 border-teal-300' },

  // Frameworks & Libraries
  { name: 'ReactJS', category: 'frameworks', level: 'Advanced', dots: 5, tagColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  { name: 'NodeJS', category: 'frameworks', level: 'Advanced', dots: 5, tagColor: 'bg-teal-100 text-teal-800 border-teal-300' },
  { name: 'AngularJS', category: 'frameworks', level: 'Intermediate', dots: 3, tagColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'NumPy & Pandas', category: 'frameworks', level: 'Proficient', dots: 4, tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  { name: 'Matplotlib', category: 'frameworks', level: 'Proficient', dots: 4, tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300' },

  // Databases & Cloud
  { name: 'MongoDB', category: 'databases', level: 'Advanced', dots: 5, tagColor: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { name: 'MySQL', category: 'databases', level: 'Proficient', dots: 4, tagColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  { name: 'AWS Cloud', category: 'databases', level: 'Certified', dots: 5, tagColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'Google Cloud', category: 'databases', level: 'Certified', dots: 5, tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300' },

  // Developer Tools
  { name: 'Git & GitHub', category: 'tools', level: 'Advanced', dots: 5, tagColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  { name: 'VS Code & Postman', category: 'tools', level: 'Advanced', dots: 5, tagColor: 'bg-blue-100 text-blue-800 border-blue-300' },
  { name: 'OpenCV', category: 'tools', level: 'Intermediate', dots: 3, tagColor: 'bg-teal-100 text-teal-800 border-teal-300' },

  // Core Concepts
  { name: 'Data Structures & Algo', category: 'concepts', level: 'Advanced', dots: 5, tagColor: 'bg-sky-100 text-sky-800 border-sky-300' },
  { name: 'Full-Stack Dev', category: 'concepts', level: 'Advanced', dots: 5, tagColor: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  { name: 'Machine Learning', category: 'concepts', level: 'Proficient', dots: 4, tagColor: 'bg-indigo-100 text-indigo-800 border-indigo-300' },
];

const CATEGORIES = [
  { id: 'all', label: 'All Stack' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'databases', label: 'Cloud & DB' },
  { id: 'tools', label: 'Tools' },
  { id: 'concepts', label: 'Concepts' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter((s) => s.category === activeCategory);

  const marqueeSkills = [...SKILLS, ...SKILLS];

  return (
    <section className="relative w-full py-20 px-6 md:px-16 bg-gradient-to-b from-sky-100/90 via-sky-50 to-cyan-100/60 text-slate-900 overflow-hidden border-t border-sky-200">

      {/* Decorative Blur Spheres */}
      <div className="absolute top-10 left-1/3 w-[450px] h-[250px] bg-sky-200/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-200/80 text-sky-900 border border-sky-300 shadow-sm">
            Technical Competencies
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-slate-900 mt-3">
            Skills & Capabilities
          </h2>
          <p className="text-slate-700 max-w-xl mx-auto mt-2 text-sm md:text-base font-sans">
            Full-stack engineering, AI/ML models, cloud architecture, and core computer science fundamentals.
          </p>
        </div>

        {/* Subtle Sleek Marquee Panning Ticker */}
        <div className="relative w-full overflow-hidden mb-10 py-2.5 bg-white/80 rounded-2xl border border-sky-200 backdrop-blur-md shadow-sm">
          <motion.div
            className="flex gap-4 w-max will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, ease: 'linear', duration: 20 }}
          >
            {marqueeSkills.map((skill, idx) => (
              <div
                key={`panning-${idx}`}
                className="px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 flex items-center gap-2 shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                <span className="text-xs font-bold text-slate-800 whitespace-nowrap">{skill.name}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono border ${skill.tagColor}`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs md:text-sm rounded-full font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-sky-600 text-white font-semibold shadow-md shadow-sky-500/25 scale-105'
                  : 'bg-white/80 text-sky-900 border border-sky-200 hover:bg-white hover:border-sky-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sleek Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, delay: index * 0.02 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 rounded-2xl bg-white/90 border border-sky-200 hover:border-sky-400 shadow-sm hover:shadow-md hover:shadow-sky-500/10 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full border ${skill.tagColor}`}>
                    {skill.level}
                  </span>
                  {/* Dot Proficiency Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((d) => (
                      <span
                        key={d}
                        className={`w-1.5 h-1.5 rounded-full ${
                          d <= skill.dots ? 'bg-sky-500' : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-base font-bold mt-3 text-slate-900 group-hover:text-sky-700 transition-colors font-sans">
                  {skill.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-sky-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="capitalize">{skill.category}</span>
                <span className="text-sky-600 font-semibold group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
