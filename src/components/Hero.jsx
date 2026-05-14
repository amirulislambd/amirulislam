"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import heroPng from '@/assets/amirulIslam.png'

const ORBS = [
  { size: 420, x: "-10%", y: "-15%", delay: 0 },
  { size: 320, x: "75%",  y: "55%",  delay: 1.4 },
  { size: 200, x: "60%",  y: "-5%",  delay: 2.1 },
  { size: 160, x: "10%",  y: "70%",  delay: 0.8 },
];

const PARTICLES = [
  { id:0,  x:"8%",  y:"15%", size:2.5, delay:0.2, duration:8  },
  { id:1,  x:"23%", y:"72%", size:1.8, delay:1.1, duration:7  },
  { id:2,  x:"38%", y:"5%",  size:3.2, delay:2.3, duration:9  },
  { id:3,  x:"55%", y:"82%", size:1.5, delay:0.7, duration:11 },
  { id:4,  x:"67%", y:"30%", size:2.8, delay:3.1, duration:8  },
  { id:5,  x:"80%", y:"60%", size:2.0, delay:1.8, duration:10 },
  { id:6,  x:"92%", y:"18%", size:1.6, delay:0.4, duration:7  },
  { id:7,  x:"12%", y:"50%", size:3.5, delay:2.9, duration:12 },
  { id:8,  x:"46%", y:"40%", size:1.9, delay:1.5, duration:9  },
  { id:9,  x:"72%", y:"88%", size:2.3, delay:0.9, duration:8  },
];

const COMETS = [
  { id:0,  startX:"105%", startY:"15%",  dx:-650, dy: 120,  angle:170, delay:0,    dur:2.6, len:130 },
  { id:1,  startX:"105%", startY:"55%",  dx:-650, dy:-80,   angle:187, delay:7.5,  dur:2.3, len:100 },
  { id:2,  startX:"105%", startY:"35%",  dx:-650, dy: 60,   angle:175, delay:14.0, dur:3.0, len:150 },
  { id:3,  startX:"-8%",  startY:"25%",  dx: 650, dy: 100,  angle:  8, delay:3.5,  dur:2.5, len:120 },
  { id:4,  startX:"-8%",  startY:"65%",  dx: 650, dy:-60,   angle:354, delay:11.0, dur:2.8, len:110 },
];

const TECHS = ["React", "Next.js", "Node.js", "MongoDB", "Express", "JavaScript"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 py-10"
      style={{ background: isDark ? "transparent" : "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)" }}
    >
      {/* Orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full blur-3xl opacity-40 dark:opacity-60"
          style={{ 
            width: orb.size, 
            height: orb.size, 
            left: orb.x, 
            top: orb.y, 
            background: i % 2 === 0 ? "rgba(124,77,255,0.22)" : "rgba(76,215,246,0.18)",
            willChange: "transform",
            transform: 'translateZ(0)'
          }}
          animate={shouldReduceMotion ? { opacity: 0.6 } : { scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5], y: [0, -30, 0] }}
          transition={{ duration: 12 + i, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {/* Particles */}
      {!shouldReduceMotion && PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          className="pointer-events-none absolute rounded-full hidden sm:block"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: "rgba(124,77,255,0.45)", transform: 'translateZ(0)' }}
          animate={{ y: [0, -60, 0], opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Comets */}
      {!shouldReduceMotion && COMETS.map((comet) => (
        <motion.div
          key={comet.id}
          className="comet hidden sm:block"
          style={{
            position: "absolute",
            left: comet.startX,
            top:  comet.startY,
            width:  comet.len,
            height: 2,
            rotate: comet.angle,
            background: "linear-gradient(to left, white, rgba(124,77,255,0.6), transparent)",
            zIndex: 20,
            willChange: "transform",
            transform: 'translateZ(0)'
          }}
          animate={{ x: [0, comet.dx], y: [0, comet.dy], opacity: [0, 1, 0] }}
          transition={{ duration: comet.dur, repeat: Infinity, repeatDelay: 6 + comet.delay, delay: comet.delay }}
        />
      ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          className={`relative glass-card rounded-[2rem] sm:rounded-[2.5rem] border p-6 sm:p-14 text-center transition-all duration-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${isDark ? 'bg-[#0b1326]/70 border-white/10' : 'bg-white/90 border-purple-500/10'} backdrop-blur-2xl shadow-2xl`}
        >
          <motion.div variants={fadeUpVariants} className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] p-1 rounded-full bg-gradient-to-tr from-purple-500 to-blue-400 shadow-[0_0_40px_rgba(124,77,255,0.35)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0b1326]">
                <Image
                  src={heroPng}
                  alt="Amirul Islam"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUpVariants}
            className={`text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Experiences</span>
            <span className="animated-gradient-text block text-xl sm:text-4xl mt-2 sm:mt-3 tracking-wide">Beyond Gravity</span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            className={`text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Hi, I&apos;m <span className="text-purple-500 font-bold">Amirul Islam</span>, a Full Stack Developer specializing in MERN, Next.js & Flutter.
          </motion.p>

          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Link
                href="#projects"
                className="btn-shine group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold shadow-xl shadow-purple-500/25 overflow-hidden transition-all"
              >
                View My Work
                <HiArrowDown className="group-hover:translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <a
                href="/assets/Amirul_Islam_CV.pdf"
                download
                className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-600 dark:text-purple-400 rounded-xl sm:rounded-2xl font-bold hover:bg-purple-500/5 transition-all"
              >
                <HiOutlineDocumentArrowDown className="text-xl" />
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUpVariants} className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10 sm:mt-12">
            {TECHS.map((tech) => (
              <span key={tech} className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold border transition-colors ${isDark ? 'bg-white/5 border-white/10 text-slate-400' : 'bg-purple-50 border-purple-100 text-purple-600'}`}>
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
        }
        .btn-shine:hover::after {
          animation: shine 0.8s ease-in-out;
        }
        @keyframes shine {
          100% { left: 200%; }
        }
      `}</style>
    </section>
  );
}
