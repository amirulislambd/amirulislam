"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiGit,
} from "react-icons/si";

// ─── Tech stack data ──────────────────────────────────────────────────────────
const TECH_STACK = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

// ─── What I do cards ──────────────────────────────────────────────────────────
const WHAT_I_DO = [
  {
    icon: HiOutlineCode,
    title: "Full Stack Development",
    desc: "I build production-grade web apps using the MERN stack, Next.js, and Flutter — managing the complete lifecycle from design to deployment.",
    accent: "#7c4dff",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Performance Focused",
    desc: "I believe in blazing-fast, pixel-perfect UIs. I craft responsive and animated interfaces using Tailwind CSS and HeroUI.",
    accent: "#4cd7f6",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Islamic Scholar",
    desc: "Completed Dawra-e-Hadith (Fiqh, Hadith, Arabic) with first-class honours. Currently teaching at a Qawmi Madrasa in Dhaka.",
    accent: "#a78bfa",
  },
  {
    icon: HiOutlineHeart,
    title: "Mentoring & Teaching",
    desc: "Passionate about helping students grow in both traditional Islamic knowledge and modern digital skills.",
    accent: "#818cf8",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "3+", label: "Years of Experience" },
  { value: "10+", label: "Projects Completed" },
  { value: "1st", label: "Class — Dawra-e-Hadith" },
  { value: "∞", label: "Passion for Learning" },
];

// ─── Orbs ─────────────────────────────────────────────────────────────────────
const ORBS = [
  { size: 380, x: "80%", y: "-10%", delay: 0 },
  { size: 280, x: "-5%", y: "60%", delay: 1.2 },
  { size: 180, x: "50%", y: "75%", delay: 2.5 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const STATIC_STYLES = `
@keyframes gradientShift {
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
@keyframes borderSpin  { to { transform: rotate(360deg); } }
@keyframes borderPulse { 0%,100%{opacity:.85;} 50%{opacity:1;} }
@keyframes techFloat   { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-6px);} }
@keyframes shimmer {
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
}

.about-gradient-text {
  background: linear-gradient(270deg, #d0bcff, #7c4dff, #4cd7f6, #a78bfa, #818cf8, #d0bcff);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
:root:not(.dark) .about-gradient-text {
  background: linear-gradient(270deg, #6d28d9, #7c4dff, #0e7490, #5b21b6, #4338ca, #6d28d9);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.avatar-ring-about {
  position: absolute;
  inset: -3px;
  border-radius: 1.5rem;
  background: conic-gradient(from 0deg, #7c4dff, #4cd7f6, #a78bfa, #7c4dff);
  animation: borderSpin 5s linear infinite, borderPulse 3s ease-in-out infinite;
  z-index: 0;
}
.dark  .avatar-gap-about { background: rgba(11,19,38,0.9); }
:root:not(.dark) .avatar-gap-about { background: rgba(255,255,255,0.92); }
.avatar-gap-about {
  position: absolute;
  inset: -1px;
  border-radius: 1.4rem;
  z-index: 1;
}

.skill-bar-fill {
  background: linear-gradient(90deg, #7c4dff, #4cd7f6);
  background-size: 200% 100%;
  animation: shimmer 2.5s linear infinite;
}

.tech-icon-card:hover {
  transform: translateY(-6px) scale(1.08);
  box-shadow: 0 12px 32px rgba(124,77,255,0.35);
}
.tech-icon-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }

.what-card:hover { transform: translateY(-4px); }
.what-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
`;

export default function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const t = {
    sectionBg: isDark
      ? "transparent"
      : "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)",

    gridLine: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,77,255,0.07)",

    orbColors: isDark
      ? [
          "rgba(124,77,255,0.18)",
          "rgba(76,215,246,0.13)",
          "rgba(167,139,250,0.12)",
        ]
      : [
          "rgba(124,77,255,0.22)",
          "rgba(14,116,144,0.18)",
          "rgba(109,40,217,0.14)",
        ],

    cardBg: isDark ? "rgba(11,19,38,0.55)" : "rgba(255,255,255,0.78)",
    cardBorder: isDark ? "rgba(255,255,255,0.09)" : "rgba(124,77,255,0.20)",
    cardShadow: isDark
      ? "0 0 0 1px rgba(124,77,255,0.12), 0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07)"
      : "0 0 0 1px rgba(124,77,255,0.15), 0 24px 80px rgba(124,77,255,0.12), inset 0 1px 0 rgba(255,255,255,0.95)",

    topGlow: isDark
      ? "linear-gradient(90deg, transparent, rgba(124,77,255,0.7), rgba(76,215,246,0.6), transparent)"
      : "linear-gradient(90deg, transparent, rgba(109,40,217,0.5), rgba(14,116,144,0.4), transparent)",

    headingMain: isDark ? "#ffffff" : "#1e1b4b",
    subText: isDark ? "rgba(218,226,253,0.65)" : "rgba(30,27,75,0.60)",
    nameColor: isDark ? "#d0bcff" : "#6d28d9",
    roleColor: isDark ? "#4cd7f6" : "#0e7490",
    mutedText: isDark ? "rgba(148,163,184,0.8)" : "rgba(100,116,139,0.9)",

    badgeBg: isDark ? "rgba(124,77,255,0.12)" : "rgba(124,77,255,0.10)",
    badgeBorder: isDark ? "rgba(124,77,255,0.35)" : "rgba(124,77,255,0.40)",
    badgeText: isDark ? "#d0bcff" : "#6d28d9",

    innerCard: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.85)",
    innerCardBorder: isDark
      ? "rgba(255,255,255,0.08)"
      : "rgba(124,77,255,0.15)",
    innerCardShadow: isDark
      ? "0 4px 20px rgba(0,0,0,0.3)"
      : "0 4px 20px rgba(124,77,255,0.08)",

    statBg: isDark ? "rgba(124,77,255,0.08)" : "rgba(124,77,255,0.07)",
    statBorder: isDark ? "rgba(124,77,255,0.25)" : "rgba(124,77,255,0.25)",

    techBg: isDark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.90)",
    techBorder: isDark ? "rgba(255,255,255,0.10)" : "rgba(124,77,255,0.18)",
    techShadow: isDark ? "none" : "0 2px 12px rgba(124,77,255,0.08)",
    techText: isDark ? "rgba(218,226,253,0.6)" : "rgba(109,40,217,0.70)",

    divider: isDark ? "rgba(255,255,255,0.07)" : "rgba(124,77,255,0.12)",

    avatarImgBorder: isDark ? "rgba(124,77,255,0.4)" : "rgba(109,40,217,0.3)",
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 transition-all duration-500"
      aria-label="About Section"
      style={{ background: t.sectionBg }}
    >
      <style>{STATIC_STYLES}</style>

      {/* ── Background orbs ───────────────────────────────────────── */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: t.orbColors[i],
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : {
                  scale: [1, 1.1, 0.95, 1],
                  opacity: [0.55, 0.9, 0.65, 0.55],
                  y: [0, -24, 10, 0],
                }
          }
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
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

      {/* ── Content ───────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* ── Main glass card ─────────────────────────────────────── */}
        <div
          className="relative rounded-3xl border p-10 sm:p-14 transition-all duration-500"
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

          {/* ── Section badge ─────────────────────────────────────── */}
          <motion.div
            variants={fadeUpVariants}
            className="flex justify-center mb-8"
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border"
              style={{
                background: t.badgeBg,
                borderColor: t.badgeBorder,
                color: t.badgeText,
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "#7c4dff" }}
              />
              About Me
            </span>
          </motion.div>

          {/* ── Heading ───────────────────────────────────────────── */}
          <motion.div variants={fadeUpVariants} className="text-center mb-12">
            <h2
              className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-3"
              style={{ color: t.headingMain }}
            >
              Developer. <span className="about-gradient-text">Scholar.</span>
            </h2>
            <p
              className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: t.subText }}
            >
              I&apos;m{" "}
              <span className="font-semibold" style={{ color: t.nameColor }}>
                Amirul Islam
              </span>{" "}
              — a{" "}
              <span className="font-semibold" style={{ color: t.roleColor }}>
                Full Stack Developer
              </span>{" "}
              and Islamic Scholar, navigating both the world of technology and
              traditional knowledge.
            </p>
          </motion.div>

          {/* ── Two-column: photo + bio ────────────────────────────── */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14 items-center"
          >
            {/* Photo column */}
            <div className="flex justify-center">
              <motion.div
                
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ position: "relative", width: 500, height: 360}}
              >
                
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "1.25rem",
                    overflow: "hidden",
                    zIndex: 2,
                    boxShadow:
                      "0 0 24px 6px rgba(124,77,255,0.3), 0 0 60px 12px rgba(76,215,246,0.12)",
                  }}
                >
                  <Image
                    src="https://i.ibb.co/Q37gdvNf/profile-pic.png"
                    alt="Amirul Islam"
                    fill
                    sizes="220px"
                    className="object-cover object-center"
                    priority
                    unoptimized
                  />
                </div>

                {/* Floating "3+ yrs" badge */}
                <motion.div
                  animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 -right-4 z-10 rounded-2xl px-3 py-2 text-center border"
                  style={{
                    background: t.cardBg,
                    backdropFilter: "blur(12px)",
                    borderColor: t.badgeBorder,
                    boxShadow: "0 4px 20px rgba(124,77,255,0.3)",
                  }}
                >
                  <p
                    className="text-xl font-extrabold"
                    style={{ color: "#7c4dff" }}
                  >
                    3+
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: t.mutedText }}
                  >
                    Years Exp.
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Bio column */}
            <div className="space-y-5">
              <p
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: t.subText }}
              >
                I&apos;m a passionate{" "}
                <span className="font-semibold" style={{ color: t.nameColor }}>
                  MERN Stack
                </span>
                ,{" "}
                <span className="font-semibold" style={{ color: t.roleColor }}>
                  Next.js
                </span>{" "}
                &{" "}
                <span className="font-semibold" style={{ color: "#a78bfa" }}>
                  Flutter
                </span>{" "}
                developer who loves turning ideas into refined digital
                experiences.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: t.subText }}
              >
                I&apos;m also an Islamic Scholar — having completed
                Dawra-e-Hadith with first-class honours, I currently teach at a
                Qawmi Madrasa in Dhaka. My goal is to advance both technology
                and traditional knowledge side by side.
              </p>

              {/* Info rows */}
              <div className="space-y-2 pt-2">
                {[
                  { label: "Location", value: "Dhaka, Bangladesh" },
                  { label: "Email", value: "amirulislambd313@gmail.com" },
                  { label: "GitHub", value: "amirulislambd" },
                  { label: "LinkedIn", value: "in/mr-amirulislam" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: t.mutedText }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#7c4dff" }}
                    />
                    <span
                      className="font-semibold w-24 flex-shrink-0"
                      style={{ color: t.badgeText }}
                    >
                      {row.label}
                    </span>
                    <span>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Divider ───────────────────────────────────────────── */}
          <div
            className="mb-12"
            style={{ height: "1px", background: t.divider }}
          />

          {/* ── Stats row ─────────────────────────────────────────── */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                className="rounded-2xl p-4 text-center border"
                style={{ background: t.statBg, borderColor: t.statBorder }}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.04,
                        boxShadow: "0 8px 24px rgba(124,77,255,0.25)",
                      }
                }
                transition={{ duration: 0.2 }}
              >
                <p
                  className="text-2xl sm:text-3xl font-extrabold mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #7c4dff 0%, #4cd7f6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs font-medium leading-snug"
                  style={{ color: t.mutedText }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ── What I do ─────────────────────────────────────────── */}
          <motion.div variants={fadeUpVariants} className="mb-14">
            <h3
              className="text-xl font-bold text-center mb-6"
              style={{ color: t.headingMain }}
            >
              What I Do
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHAT_I_DO.map((item) => (
                <div
                  key={item.title}
                  className="what-card rounded-2xl p-5 border"
                  style={{
                    background: t.innerCard,
                    borderColor: t.innerCardBorder,
                    boxShadow: t.innerCardShadow,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${item.accent}18`,
                        border: `1px solid ${item.accent}40`,
                      }}
                    >
                      <item.icon
                        className="text-xl"
                        style={{ color: item.accent }}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-sm mb-1.5"
                        style={{ color: t.headingMain }}
                      >
                        {item.title}
                      </p>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: t.mutedText }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Divider ───────────────────────────────────────────── */}
          <div
            className="mb-12"
            style={{ height: "1px", background: t.divider }}
          />

          {/* ── Tech Stack ────────────────────────────────────────── */}
          <motion.div variants={fadeUpVariants}>
            <h3
              className="text-xl font-bold text-center mb-2"
              style={{ color: t.headingMain }}
            >
              Tech Stack
            </h3>
            <p
              className="text-sm text-center mb-8"
              style={{ color: t.mutedText }}
            >
              Technologies I work with every day
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH_STACK.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className="tech-icon-card flex flex-col items-center gap-2 rounded-2xl px-4 py-3 border cursor-default select-none"
                  style={{
                    background: t.techBg,
                    borderColor: t.techBorder,
                    boxShadow: t.techShadow,
                    minWidth: 72,
                    backdropFilter: "blur(8px)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <tech.icon
                    style={{
                      fontSize: 28,
                      color: tech.color,
                      filter: "drop-shadow(0 0 6px " + tech.color + "55)",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: t.techText }}
                  >
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
