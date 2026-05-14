"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

// ─── Floating orb data ────────────────────────────────────────────────────────
const ORBS = [
  { size: 420, x: "-10%", y: "-15%", delay: 0 },
  { size: 320, x: "75%",  y: "55%",  delay: 1.4 },
  { size: 200, x: "60%",  y: "-5%",  delay: 2.1 },
  { size: 160, x: "10%",  y: "70%",  delay: 0.8 },
];

// ─── Particles ────────────────────────────────────────────────────────────────
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
  { id:10, x:"30%", y:"25%", size:1.4, delay:3.5, duration:11 },
  { id:11, x:"85%", y:"45%", size:2.7, delay:2.0, duration:7  },
  { id:12, x:"18%", y:"90%", size:1.7, delay:1.3, duration:10 },
  { id:13, x:"60%", y:"12%", size:3.0, delay:0.6, duration:9  },
  { id:14, x:"42%", y:"65%", size:2.1, delay:2.7, duration:8  },
  { id:15, x:"95%", y:"75%", size:1.5, delay:1.0, duration:12 },
  { id:16, x:"5%",  y:"38%", size:2.9, delay:3.8, duration:7  },
  { id:17, x:"50%", y:"55%", size:1.8, delay:0.3, duration:10 },
  { id:18, x:"75%", y:"22%", size:2.4, delay:2.5, duration:9  },
  { id:19, x:"28%", y:"48%", size:3.1, delay:1.7, duration:11 },
  { id:20, x:"88%", y:"8%",  size:1.6, delay:3.2, duration:8  },
  { id:21, x:"15%", y:"62%", size:2.6, delay:0.8, duration:7  },
];

const TECHS = ["React", "Next.js", "Node.js", "MongoDB", "Express", "JavaScript"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.25, 0.4, 0.25, 1] } },
};

// ─── Static keyframes (theme-independent) ────────────────────────────────────
const STATIC_STYLES = `
@keyframes gradientShift {
  0%   { background-position: 0%   50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0%   50%; }
}

/* "Beyond Gravity" — dark mode */
.dark .animated-gradient-text {
  background: linear-gradient(270deg, #d0bcff, #7c4dff, #4cd7f6, #a78bfa, #818cf8, #d0bcff);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* "Beyond Gravity" — light mode: deeper purples so it pops on white */
.light .animated-gradient-text,
:root:not(.dark) .animated-gradient-text {
  background: linear-gradient(270deg, #6d28d9, #7c4dff, #0e7490, #5b21b6, #4338ca, #6d28d9);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Avatar ring */
@keyframes borderSpin  { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
@keyframes borderPulse { 0%,100% { opacity:.85; } 50% { opacity:1; } }
.avatar-ring {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: conic-gradient(from 0deg, #7c4dff, #4cd7f6, #a78bfa, #7c4dff);
  animation: borderSpin 4s linear infinite, borderPulse 3s ease-in-out infinite;
  z-index: 0;
}

/* Gap layer colour changes with theme */
.dark  .avatar-gap { background: rgba(11,19,38,0.9); }
.light .avatar-gap,
:root:not(.dark) .avatar-gap { background: rgba(255,255,255,0.92); }
.avatar-gap {
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  z-index: 1;
}

/* Button shine */
@keyframes shineSweep {
  0%   { transform: translateX(-100%) skewX(-20deg); }
  100% { transform: translateX(250%)  skewX(-20deg); }
}
.btn-shine::after {
  content: '';
  position: absolute;
  inset-block: 0;
  left: 0;
  width: 40%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.28), transparent);
  transform: translateX(-100%) skewX(-20deg);
  pointer-events: none;
}
.btn-shine:hover::after { animation: shineSweep 0.6s ease forwards; }

.avatar-glow {
  box-shadow: 0 0 18px 4px rgba(124,77,255,0.45), 0 0 40px 8px rgba(76,215,246,0.18);
}
`;

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const sectionRef = useRef(null);

  const rawX = useMotionValue(-500);
  const rawY = useMotionValue(-500);
  const glowX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const glowY = useSpring(rawY, { stiffness: 80, damping: 20 });

  const handleMouseMove = useCallback((e) => {
    if (shouldReduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  }, [rawX, rawY, shouldReduceMotion]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(-500);
    rawY.set(-500);
  }, [rawX, rawY]);

  // ── Theme-aware design tokens ──────────────────────────────────────────────
  const t = {
    sectionBg: isDark
      ? "transparent"
      : "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)",

    gridLine: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,77,255,0.07)",

    orbColors: isDark
      ? ["rgba(124,77,255,0.18)", "rgba(76,215,246,0.14)", "rgba(124,77,255,0.10)", "rgba(76,215,246,0.10)"]
      : ["rgba(124,77,255,0.25)", "rgba(14,116,144,0.20)",  "rgba(109,40,217,0.16)", "rgba(14,116,144,0.14)"],

    mouseGlow: isDark
      ? "radial-gradient(circle, rgba(124,77,255,0.18) 0%, rgba(76,215,246,0.10) 50%, transparent 70%)"
      : "radial-gradient(circle, rgba(124,77,255,0.16) 0%, rgba(14,116,144,0.10) 50%, transparent 70%)",

    cardBg:     isDark ? "rgba(11,19,38,0.55)"    : "rgba(255,255,255,0.75)",
    cardBorder: isDark ? "rgba(255,255,255,0.09)"  : "rgba(124,77,255,0.20)",
    cardShadow: isDark
      ? "0 0 0 1px rgba(124,77,255,0.12), 0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)"
      : "0 0 0 1px rgba(124,77,255,0.15), 0 24px 80px rgba(124,77,255,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",

    topGlow: isDark
      ? "linear-gradient(90deg, transparent, rgba(124,77,255,0.7), rgba(76,215,246,0.6), transparent)"
      : "linear-gradient(90deg, transparent, rgba(109,40,217,0.5), rgba(14,116,144,0.4), transparent)",

    headingMain: isDark ? "#ffffff" : "#1e1b4b",

    expGradient: isDark
      ? "linear-gradient(135deg, #d0bcff 0%, #7c4dff 40%, #4cd7f6 100%)"
      : "linear-gradient(135deg, #6d28d9 0%, #7c4dff 50%, #0e7490 100%)",

    subText:   isDark ? "rgba(218,226,253,0.65)" : "rgba(30,27,75,0.65)",
    nameColor: isDark ? "#d0bcff" : "#6d28d9",
    roleColor: isDark ? "#4cd7f6" : "#0e7490",

    badgeBg:     isDark ? "rgba(124,77,255,0.12)" : "rgba(124,77,255,0.10)",
    badgeBorder: isDark ? "rgba(124,77,255,0.35)" : "rgba(124,77,255,0.40)",
    badgeText:   isDark ? "#d0bcff"                : "#6d28d9",

    pillBg:     isDark ? "rgba(255,255,255,0.04)" : "rgba(124,77,255,0.07)",
    pillBorder: isDark ? "rgba(255,255,255,0.10)" : "rgba(124,77,255,0.22)",
    pillText:   isDark ? "rgba(218,226,253,0.55)" : "rgba(109,40,217,0.75)",
    pillHoverText: isDark ? "#e9d5ff" : "#4c1d95",

    cvBg:     "rgba(124,77,255,0.08)",
    cvBgHov:  isDark ? "rgba(124,77,255,0.18)" : "rgba(124,77,255,0.16)",
    cvBorder: isDark ? "rgba(124,77,255,0.40)" : "rgba(124,77,255,0.50)",
    cvText:   isDark ? "#d0bcff" : "#6d28d9",

    scrollText:   isDark ? "rgba(218,226,253,0.35)" : "rgba(109,40,217,0.45)",
    scrollBorder: isDark ? "rgba(124,77,255,0.35)"  : "rgba(124,77,255,0.45)",

    pColorA: isDark ? "rgba(124,77,255,0.55)" : "rgba(124,77,255,0.40)",
    pColorB: isDark ? "rgba(76,215,246,0.45)" : "rgba(14,116,144,0.35)",
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-500"
      aria-label="Hero Section"
      style={{ background: t.sectionBg }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{STATIC_STYLES}</style>

      {/* ── Mouse-follower glow ────────────────────────────────────── */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            width: 340, height: 340,
            x: glowX, y: glowY,
            translateX: "-50%", translateY: "-50%",
            background: t.mouseGlow,
            zIndex: 1,
          }}
        />
      )}

      {/* ── Background orbs ───────────────────────────────────────── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: t.orbColors[i] }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { scale: [1, 1.12, 0.95, 1], opacity: [0.6, 1, 0.7, 0.6], y: [0, -28, 12, 0] }
          }
          transition={{ duration: 10 + i * 1.5, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {/* ── Floating particles ────────────────────────────────────── */}
      {!shouldReduceMotion && PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size, background: p.id % 2 === 0 ? t.pColorA : t.pColorB }}
          animate={{ y: [0, -40, 0], opacity: [0, 0.9, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
        />
      ))}

      {/* ── Grid overlay ──────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Main glassmorphism card ────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="relative rounded-3xl border p-10 sm:p-14 text-center overflow-hidden transition-all duration-500"
            style={{
              background: t.cardBg,
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderColor: t.cardBorder,
              boxShadow: t.cardShadow,
            }}
          >
            {/* Top glow line */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
              style={{ background: t.topGlow }}
            />

            {/* ── Profile image ─────────────────────────────────── */}
            <motion.div variants={fadeUpVariants} className="flex justify-center mb-8">
              <motion.div
                className="avatar-glow"
                animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{ position: "relative", width: 120, height: 120, borderRadius: "50%" }}
              >
                <span className="avatar-ring" aria-hidden="true" />
                <span className="avatar-gap" aria-hidden="true" />
                <div style={{ position: "relative", width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", zIndex: 2 }}>
                  <Image
                    src="https://i.ibb.co/Q37gdvNf/profile-pic.png"
                    alt="Amirul Islam — Full Stack Developer"
                    fill
                    sizes="120px"
                    className="object-cover object-center"
                    priority
                    unoptimized
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* ── "Available" badge ─────────────────────────────── */}
            <motion.div variants={fadeUpVariants} className="flex justify-center mb-6">
              <motion.span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border transition-colors duration-500"
                style={{ background: t.badgeBg, borderColor: t.badgeBorder, color: t.badgeText }}
                animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#7c4dff" }} />
                Available for hire
              </motion.span>
            </motion.div>

            {/* ── Headline ──────────────────────────────────────── */}
            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              <span className="block drop-shadow-lg transition-colors duration-500" style={{ color: t.headingMain }}>
                Crafting Digital
              </span>
              {/* Scoped style fixes WebkitTextFillColor rendering bug in Chromium
                  when parent has overflow:hidden + backdrop-filter */}
              <style>{`
                .exp-gradient-text {
                  background: ${t.expGradient};
                  -webkit-background-clip: text;
                  -webkit-text-fill-color: transparent;
                  background-clip: text;
                  color: transparent;
                  display: block;
                  margin-top: 0.25rem;
                }
              `}</style>
              <span className="exp-gradient-text">Experiences</span>
              <span className="animated-gradient-text block text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3 tracking-wide drop-shadow-xl">
                Beyond Gravity
              </span>
            </motion.h1>

            {/* ── Sub-headline ──────────────────────────────────── */}
            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500"
              style={{ color: t.subText }}
            >
              Hi, I&apos;m{" "}
              <span className="font-semibold transition-colors duration-500" style={{ color: t.nameColor }}>Amirul Islam</span>
              , a{" "}
              <span className="font-semibold transition-colors duration-500" style={{ color: t.roleColor }}>Full Stack Developer</span>{" "}
              specialising in MERN, Next.js &amp; Flutter — turning ideas into
              blazing-fast, pixel-perfect web applications.
            </motion.p>

            {/* ── CTA Buttons ───────────────────────────────────── */}
            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="relative">
                <Link
                  href="#projects"
                  id="hero-view-work-btn"
                  className="btn-shine group relative inline-flex items-center justify-center gap-2.5 rounded-xl overflow-hidden font-semibold text-sm sm:text-base transition-shadow duration-300"
                  style={{
                    background: "linear-gradient(135deg, #7c4dff 0%, #5a3ed9 60%, #4cd7f6 160%)",
                    color: "#fff",
                    boxShadow: "0 4px 24px rgba(124,77,255,0.45)",
                    padding: "14px 32px",
                    minHeight: "52px",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(124,77,255,0.6), 0 8px 32px rgba(124,77,255,0.55)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,77,255,0.45)"; }}
                >
                  View My Work
                  <motion.span
                    animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <HiArrowDown className="text-lg" />
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="relative">
                <a
                  href="/assets/Amirul_Islam_CV.pdf"
                  download="Amirul_Islam_CV.pdf"
                  id="hero-download-cv-btn"
                  className="btn-shine relative inline-flex items-center justify-center gap-2.5 rounded-xl overflow-hidden font-semibold text-sm sm:text-base border transition-all duration-300"
                  style={{
                    background: t.cvBg,
                    borderColor: t.cvBorder,
                    color: t.cvText,
                    backdropFilter: "blur(8px)",
                    padding: "14px 32px",
                    minHeight: "52px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = t.cvBgHov;
                    e.currentTarget.style.boxShadow = "0 0 0 2px rgba(124,77,255,0.5), 0 8px 28px rgba(124,77,255,0.28)";
                    e.currentTarget.style.borderColor = "rgba(124,77,255,0.7)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = t.cvBg;
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = t.cvBorder;
                  }}
                >
                  <HiOutlineDocumentArrowDown className="text-lg" />
                  Download CV
                </a>
              </motion.div>
            </motion.div>

            {/* ── Tech pills ────────────────────────────────────── */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap justify-center gap-2 mt-10">
              {TECHS.map((tech) => (
                <motion.span
                  key={tech}
                  className="relative rounded-full px-4 py-1.5 text-xs font-semibold border cursor-default select-none overflow-hidden transition-colors duration-500"
                  style={{ background: t.pillBg, borderColor: t.pillBorder, color: t.pillText }}
                  whileHover={{
                    background: "rgba(124,77,255,0.18)",
                    borderColor: "rgba(124,77,255,0.55)",
                    color: t.pillHoverText,
                    scale: 1.12,
                    boxShadow: "0 0 14px rgba(124,77,255,0.45), 0 0 4px rgba(76,215,246,0.3)",
                  }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      {!shouldReduceMotion && (
        <motion.div
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs tracking-widest uppercase transition-colors duration-500" style={{ color: t.scrollText }}>
            scroll
          </span>
          <div
            className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5 transition-colors duration-500"
            style={{ borderColor: t.scrollBorder }}
          >
            <motion.div
              className="w-1 h-2 rounded-full"
              style={{ background: "#7c4dff" }}
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn" }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}