'use client'

import { motion, type Variants } from 'framer-motion';

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
};

const riseItem: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', duration: 0.6, bounce: 0 },
    },
};

const giantTextVariant: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', duration: 0.8, bounce: 0 },
    },
};

export interface Footer20Props {
    brandName?: string;
    description?: string;
    email?: string;
    links?: {
        good: { label: string; href: string }[];
        boring: { label: string; href: string }[];
        cool: { label: string; href: string; icon?: React.ReactNode }[];
    }
}

function LogoIcon({ className = "size-8" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
    );
}

function ArrowUpRightIcon({ className = "size-4" }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
    );
}

export default function Footer20({
    brandName = "TEJASWINI",
    description = "Computer Science undergraduate with hands-on experience in MERN Stack, AI, and full-stack development.",
    email = "tejaswinikothakotla@gmail.com",
    links = {
        good: [
            { label: "Home", href: "#" },
            { label: "Projects", href: "#projects" },
            { label: "Work & Education", href: "#work" },
            { label: "Resume PDF", href: "./TejaswiniResume.pdf" },
        ],
        boring: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Rules", href: "#" },
            { label: "Contact", href: "mailto:tejaswinikothakotla@gmail.com" },
        ],
        cool: [
            { label: "GitHub", href: "https://github.com/Tejaswinikothakotla" },
            { label: "Phone (+91 9392062095)", href: "tel:+919392062095" },
            { label: "Email", href: "mailto:tejaswinikothakotla@gmail.com" },
        ]
    }
}: Footer20Props) {
    return (
        <motion.footer
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative w-full bg-gradient-to-b from-cyan-100/80 via-sky-50 to-white text-slate-800 font-sans overflow-hidden flex flex-col justify-between transition-colors duration-300 border-t border-sky-200"
        >
            {/* Main content wrapper with dashed borders */}
            <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-32 flex flex-col border-x border-dashed border-sky-300/60">
                
                {/* Top Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-10 md:mb-16 lg:mb-24">
                    
                    {/* Left Column (Brand info) */}
                    <motion.div variants={riseItem} className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 md:gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-2 text-slate-900">
                           <LogoIcon className='size-8 text-sky-600' />
                            <span className="font-bold tracking-wide text-lg mt-0.5">{brandName}</span>
                        </div>

                        {/* Description */}
                        <p className="text-[15px] leading-relaxed text-slate-700 max-w-[320px]">
                            {description}
                        </p>

                        {/* Email */}
                        <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-[17px] text-sky-900 font-medium hover:text-sky-600 transition-colors group mt-2">
                            {email}
                            <ArrowUpRightIcon className="size-4 text-sky-600 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Right Columns (Links) */}
                    <div className="lg:col-span-7 xl:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-8">
                        
                        {/* Quick Links */}
                        <motion.div variants={riseItem} className="flex flex-col gap-6">
                            <h4 className="font-bold text-slate-900">Quick Links</h4>
                            <ul className="flex flex-col gap-3">
                                {links.good.map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.href} className="text-[15px] text-slate-700 hover:text-sky-700 font-medium transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Information */}
                        <motion.div variants={riseItem} className="flex flex-col gap-6">
                            <h4 className="font-bold text-slate-900">Information</h4>
                            <ul className="flex flex-col gap-3">
                                {links.boring.map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.href} className="text-[15px] text-slate-700 hover:text-sky-700 font-medium transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Connect */}
                        <motion.div variants={riseItem} className="flex flex-col gap-6">
                            <h4 className="font-bold text-slate-900">Connect</h4>
                            <ul className="flex flex-col gap-3">
                                {links.cool.map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[15px] text-slate-700 hover:text-sky-700 font-medium transition-colors">
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Giant Text SVG */}
                <motion.div variants={giantTextVariant} className="w-full flex justify-center md:mt-auto pb-0">
                    <svg
                        className="w-full h-auto select-none transition-colors duration-300"
                        viewBox={`0 30 ${Math.max(brandName.length * 80, 400)} 80`}
                        preserveAspectRatio="xMidYMid meet"
                        aria-label={brandName}
                    >
                        <defs>
                            <linearGradient id="watermark-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#bae6fd" />
                                <stop offset="50%" stopColor="#38bdf8" />
                                <stop offset="100%" stopColor="#0284c7" />
                            </linearGradient>
                        </defs>
                        <text
                            x="0"
                            y="130"
                            dominantBaseline="alphabetic"
                            textAnchor="start"
                            textLength="100%"
                            lengthAdjust="spacing"
                            fill="url(#watermark-gradient)"
                            className="font-semibold tracking-tighter"
                            fontSize="140"
                        >
                            {brandName}
                        </text>
                    </svg>
                </motion.div>
            </div>
        </motion.footer>
    );
}
