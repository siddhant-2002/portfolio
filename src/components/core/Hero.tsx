import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';


const HeroSection: React.FC = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            // Using a specific time zone for consistency
            const timeInIST = new Date().toLocaleTimeString('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            });
            setTime(timeInIST);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="bg-black text-white w-full pt-20 flex items-center">
            <div className="w-full max-w-6xl mx-auto px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-12 flex flex-col items-start justify-center gap-4 sm:gap-6 font-['Inter',_sans-serif]">
                <motion.header
                    initial={{ opacity: 0, y: -20, x: -40 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-4 w-full"
                >
                    <motion.img
                        src="https://placehold.co/60x60/1a1a1a/ffffff?text=SD"
                        alt="Siddhant Deshmukh"
                        className="w-10 h-10 rounded-full border-2 border-gray-700 flex-shrink-0"
                        initial={{ scale: 0.6, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    />

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="text-gray-400 max-w-md text-sm sm:text-sm"
                    >
                        Hi, I'm Siddhant — a full stack developer building robust, scalable web apps.
                    </motion.p>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.12, duration: 0.6 }}
                    className="relative w-full"
                >
                    <img
                        src="pth.png"
                        alt="Pixel art cityscape"
                        className="w-full h-28 sm:h-36 md:h-44 object-cover rounded-md"
                    />
                    <motion.span
                        className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-300 text-lg sm-hidden font-mono tracking-widest"
                        initial={{ opacity: 0, x: 120, y: -40 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ delay: 0.18, type: 'spring', stiffness: 200, damping: 18 }}
                    >
                       {"  "} curious.
                    </motion.span>
                </motion.div>

                {/* Heading: animate into the requested layout and color */}
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
                    aria-label="Software Engineer and Web Architect"
                >
                    {/** First part: "Software Engineer " */}
                    {useMemo(() => {
                        const first = 'Software Engineer ';
                        return Array.from(first).map((ch, i) => {
                            if (ch === ' ') return <span key={`f-sp-${i}`} className="inline-block w-2" />;
                            const rx = (Math.random() - 0.5) * 300;
                            const ry = (Math.random() - 0.5) * 200;
                            const rrot = (Math.random() - 0.5) * 60;
                            const delay = 0.2 + i * 0.02;
                            return (
                                <motion.span
                                    key={`f-${ch}-${i}`}
                                    initial={{ opacity: 0, x: rx, y: ry, rotate: rrot }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ delay, type: 'spring', stiffness: 260, damping: 20 }}
                                    className="inline-block"
                                >
                                    {ch}
                                </motion.span>
                            );
                        });
                    }, [])}
                    <br />
                    {/** The gray 'and' as requested */}
                    <motion.span
                        className="inline-block text-gray-400 mx-1"
                        initial={{ opacity: 0, y: 60, x: 80, rotate: 20 }}
                        animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
                        transition={{ delay: 0.45, type: 'spring', stiffness: 220, damping: 22 }}
                    >
                        and
                    </motion.span>

                    {" "}

                    {/** Second line: "Web Architect" */}
                    {useMemo(() => {
                        const second = 'Web Architect';
                        return Array.from(second).map((ch, i) => {
                            if (ch === ' ') return <span key={`s-sp-${i}`} className="inline-block w-2" />;
                            const rx = (Math.random() - 0.5) * 300;
                            const ry = (Math.random() - 0.5) * 200;
                            const rrot = (Math.random() - 0.5) * 60;
                            const delay = 0.35 + i * 0.02;
                            return (
                                <motion.span
                                    key={`s-${ch}-${i}`}
                                    initial={{ opacity: 0, x: rx, y: ry, rotate: rrot }}
                                    animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                                    transition={{ delay, type: 'spring', stiffness: 260, damping: 20 }}
                                    className="inline-block"
                                >
                                    {ch}
                                </motion.span>
                            );
                        });
                    }, [])}
                </motion.h1>

                <motion.footer
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="mt-2 text-gray-400 text-xs sm:text-sm uppercase tracking-wider flex flex-wrap gap-x-6 gap-y-2 items-center justify-between"
                >
                    <span>Pune, India</span>
                    <span>{time} IST (UTC+05:30)</span>
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden></span>
                        <span className="text-green-400 font-medium">Open to Work</span>
                    </span>
                </motion.footer>
            </div>
        </section>
    );
}

export default HeroSection;









{/* <header className="flex items-center gap-4 w-full">
                    <img
                        src="https://placehold.co/60x60/1a1a1a/ffffff?text=SD"
                        alt="Siddhant Deshmukh"
                        className="w-10 h-10 rounded-full border-2 border-gray-700 flex-shrink-0"
                    />
                    <p className="text-gray-400 max-w-md text-sm sm:text-sm">
                        Hi, I'm Siddhant — a full stack developer building robust, scalable web apps.
                    </p>
                </header>

                <div className="relative w-full">
                    <img
                        src="https://placehold.co/1200x200/1a1a1a/4a4a4a?text=Pixel+Cityscape"
                        alt="Pixel art cityscape"
                        className="w-full h-28 sm:h-36 md:h-44 object-cover rounded-md"
                    />
                    <span className="absolute top-1/2 right-6 -translate-y-1/2 text-gray-300 text-lg font-mono tracking-widest">
                        curious.
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                    Software Engineer <span className="text-gray-400">and</span>
                    <br />
                    Web Architect
                </h1> */}