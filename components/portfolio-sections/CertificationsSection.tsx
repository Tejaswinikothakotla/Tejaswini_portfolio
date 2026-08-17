'use client';

import { motion } from 'framer-motion';

interface Certification {
  title: string;
  issuer: string;
  details: string;
  badgeText: string;
  iconSvg: React.ReactNode;
  cardBg: string;
  borderColor: string;
  badgeBg: string;
  accentColor: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    details: 'Validated expertise in AWS cloud services, IAM security, cloud architecture, and cost optimization.',
    badgeText: 'AWS Certified',
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
    accentColor: 'text-sky-700',
    iconSvg: (
      <svg className="w-7 h-7 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17.5 19H9a7 7 0 116.71-9h1.79a4.5 4.5 0 110 9z" />
      </svg>
    ),
  },
  {
    title: 'Generative AI Specialization',
    issuer: 'Google Cloud Platform',
    details: 'Earned 24 skill badges covering Generative AI, LLMs, Gemini API integration, and prompt engineering.',
    badgeText: '24 Skill Badges',
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-300',
    accentColor: 'text-sky-700',
    iconSvg: (
      <svg className="w-7 h-7 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'NPTEL Certifications',
    issuer: 'NPTEL / IIT Initiatives',
    details: 'Certified in Internet of Things (IoT), Public Speaking, E-business, and Principles of Management.',
    badgeText: 'Multi-Domain',
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    accentColor: 'text-cyan-700',
    iconSvg: (
      <svg className="w-7 h-7 text-cyan-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: 'Cambridge PET (B1 English)',
    issuer: 'Cambridge Assessment English',
    details: 'Achieved score of 152 in Preliminary English Test, verifying professional communication proficiency.',
    badgeText: 'Score: 152',
    cardBg: 'bg-white/90',
    borderColor: 'border-sky-200 hover:border-sky-400',
    badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
    accentColor: 'text-blue-700',
    iconSvg: (
      <svg className="w-7 h-7 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

export default function CertificationsSection() {
  return (
    <section className="relative w-full py-16 px-6 md:px-16 bg-gradient-to-b from-cyan-100/60 via-sky-50 to-blue-100/70 text-slate-900 overflow-hidden border-t border-sky-200">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sky-200/80 text-sky-900 border border-sky-300">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-slate-900 mt-2">
            Certifications & Training
          </h2>
          <p className="text-slate-700 max-w-xl mx-auto mt-2 text-sm md:text-base font-sans">
            Recognized industry credentials from AWS, Google Cloud Platform, NPTEL, and Cambridge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl ${cert.cardBg} border ${cert.borderColor} shadow-sm hover:shadow-md hover:shadow-sky-500/10 transition-all duration-200 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 group-hover:scale-105 transition-transform">
                    {cert.iconSvg}
                  </div>
                  <span className={`px-3 py-1 text-xs font-mono font-bold rounded-full border ${cert.badgeBg}`}>
                    {cert.badgeText}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-4 text-slate-900 font-sans">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-0.5">
                  {cert.issuer}
                </p>
                <p className="text-slate-700 text-sm mt-3 leading-relaxed font-sans">
                  {cert.details}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-sky-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>Verified Credential</span>
                <span className={`${cert.accentColor} font-bold flex items-center gap-1`}>
                  Verified ✓
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
