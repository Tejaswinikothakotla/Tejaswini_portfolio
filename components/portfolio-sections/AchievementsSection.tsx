'use client';

import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  category: string;
  metric: string;
  description: string;
  highlights: string[];
  cardBg: string;
  borderColor: string;
  badgeBg: string;
  textColor: string;
  icon: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Vignan Foundation Hackathon',
    category: 'Hackathon Achievement',
    metric: 'MERN Stack Winner',
    description: 'Built the Smart Subject Allocation System during Vignan Foundation hackathon using full MERN stack.',
    highlights: [
      'Automated preference-based allocation algorithms',
      'Conflict-free optimization logic for student mapping',
      'Role-based access control and REST API architecture'
    ],
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
    textColor: 'text-teal-700',
    icon: '🥇',
  },
  {
    title: 'Google Cloud Generative AI',
    category: 'AI Specialization',
    metric: '24 Skill Badges',
    description: 'Completed Google Cloud online specialization in Generative AI technology.',
    highlights: [
      'Mastered Large Language Model (LLM) workflows',
      'Integrated Gemini API into real-world AI applications',
      'Prompt engineering & fine-tuning best practices'
    ],
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
    textColor: 'text-sky-700',
    icon: '⚡',
  },
  {
    title: 'Academic Distinction',
    category: 'Academic Record',
    metric: '8.57 CGPA / 96%',
    description: 'Consistently achieved high academic performance throughout engineering and pre-university education.',
    highlights: [
      '8.57 / 10 CGPA in B.Tech Computer Science & Engineering',
      '96% Percentage in Intermediate MPC at Narayana Junior College',
      'Strong theoretical foundation in Data Structures, OOP & DBMS'
    ],
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    textColor: 'text-cyan-700',
    icon: '🎓',
  }
];

export default function AchievementsSection() {
  return (
    <section className="relative w-full py-16 px-6 md:px-16 bg-gradient-to-b from-blue-100/70 via-sky-50 to-cyan-100/80 text-slate-900 overflow-hidden border-t border-sky-200">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-200/80 text-sky-900 border border-sky-300">
            Milestones & Honors
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-slate-900 mt-2">
            Achievements & Hackathons
          </h2>
          <p className="text-slate-700 max-w-xl mx-auto mt-2 text-sm md:text-base font-sans">
            Key accomplishments in hackathons, AI learning milestones, and academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl ${item.cardBg} border ${item.borderColor} shadow-sm hover:shadow-md hover:shadow-sky-500/10 transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-full border ${item.badgeBg}`}>
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-lg font-bold mt-4 text-slate-900 font-sans">
                  {item.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5 uppercase tracking-wider">
                  {item.category}
                </p>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed font-sans">
                  {item.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <span className={`${item.textColor} font-bold mt-0.5`}>✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Milestone</span>
                <span className={`${item.textColor} font-bold`}>Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
