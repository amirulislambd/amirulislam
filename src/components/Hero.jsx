"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import heroPng from '@/assets/amirulIslam.png'
import { TypeAnimation } from 'react-type-animation';

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
];

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
      className="relative md:min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500 md:py-10"
      style={{ background: isDark ? "transparent" : "transparent" }}
    >
      <style jsx global>{`
        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .rotating-border-container::before {
          content: "";
          position: absolute;
          inset: -4px;
          background: conic-gradient(from 0deg, #7c4dff, #3b82f6, #7c4dff);
          border-radius: 50%;
          animation: rotate-border 3s linear infinite;
          mask: radial-gradient(circle, transparent 69%, black 70%);
          -webkit-mask: radial-gradient(circle, transparent 69%, black 70%);
          filter: blur(3px);
          box-shadow:
            0 0 30px rgba(124, 77, 255, 0.6),
            0 0 50px rgba(59, 130, 246, 0.4);
        }
        .btn-shine-effect {
          position: relative;
          overflow: hidden;
        }
        .btn-shine-effect::after {
          content: "";
          position: absolute;
          top: -50%;
          left: -150%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            to right,
            transparent,
            rgba(255, 255, 255, 0.5),
            transparent
          );
          transform: rotate(25deg);
          transition: none;
        }
        .btn-shine-effect:hover::after {
          animation: shine-animation 0.8s ease-in-out;
        }
        @keyframes shine-animation {
          0% {
            left: -150%;
          }
          100% {
            left: 150%;
          }
        }
      `}</style>

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
            background:
              i % 2 === 0 ? "rgba(124,77,255,0.22)" : "rgba(76,215,246,0.18)",
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          animate={
            shouldReduceMotion
              ? { opacity: 0.6 }
              : {
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.9, 0.5],
                  y: [0, -30, 0],
                }
          }
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Particles */}
      {!shouldReduceMotion &&
        PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="pointer-events-none absolute rounded-full hidden sm:block"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              background: "rgba(124,77,255,0.45)",
              transform: "translateZ(0)",
            }}
            animate={{ y: [0, -60, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 mb-10">
        <motion.div
          className={`relative glass-card rounded-[2rem] sm:rounded-[2.5rem] border p-6 sm:p-14 text-center transition-all duration-700 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"} bg-white/70 dark:bg-[#0b1326]/40 border-purple-500/10 dark:border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden`}
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-purple-500/5 to-blue-500/5 pointer-events-none" />

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex justify-center mb-6 sm:mb-8"
          >
            <div className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] flex items-center justify-center">
              <div className="absolute inset-[-100px] sm:inset-[-150px] bg-gradient-to-tr from-purple-600/25 to-blue-500/20 blur-[60px] sm:blur-[90px] rounded-full pointer-events-none animate-pulse" />

              <div className="rotating-border-container absolute inset-0 rounded-full" />
              <div className="relative w-[116px] h-[116px] sm:w-[156px] sm:h-[156px] rounded-full overflow-hidden bg-transparent z-10">
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
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-3xl sm:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-slate-900 dark:text-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Amirul Islam
            </span>
            <span className="animated-gradient-text block text-xl sm:text-4xl mt-2 sm:mt-3 tracking-wide h-[30px] sm:h-[48px]">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1500,
                  'MERN Stack Expert',
                  1500,
                  'Next.js Specialist',
                  1500,
                  'Software Engineer',
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="text-sm sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-medium text-slate-600 dark:text-slate-300"
          >
            Hi, I&apos;m{" "}
            <span className="text-purple-400 font-bold">Amirul Islam</span>, a
            Full Stack Developer specializing in MERN, Next.js & Flutter.
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="#projects"
                className="btn-shine-effect group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl sm:rounded-2xl font-bold shadow-xl shadow-purple-500/25 overflow-hidden transition-all"
              >
                View My Work
                <HiArrowDown className="group-hover:translate-y-1 transition-transform animate-bounce" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <a
                href="/assets/Amirul_Islam_Resume.pdf"
                download
                className="btn-shine-effect group relative inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-purple-500/30 dark:border-purple-500/50 text-purple-600 dark:text-purple-300 rounded-xl sm:rounded-2xl font-bold hover:bg-purple-500/5 transition-all"
              >
                <HiOutlineDocumentArrowDown className="text-xl" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-6 h-10 border-2 border-purple-500/30 dark:border-white/20 rounded-full relative overflow-hidden">
          <motion.div
            animate={{ y: [2, 18, 2] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-purple-500 dark:bg-white rounded-full absolute left-1/2 -translate-x-1/2"
          />
        </div>
        <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-bold group-hover:text-purple-500 transition-colors">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
