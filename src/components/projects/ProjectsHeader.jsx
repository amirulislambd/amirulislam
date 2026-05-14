// components/projects/ProjectsHeader.jsx — CLIENT COMPONENT

"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] } },
};

const HEADER_STYLES = `
@keyframes gradientShift {
  0%,100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
.projects-gradient-text {
  background: linear-gradient(270deg, #d0bcff, #7c4dff, #4cd7f6, #a78bfa, #818cf8, #d0bcff);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
:root:not(.dark) .projects-gradient-text {
  background: linear-gradient(270deg, #6d28d9, #7c4dff, #0e7490, #5b21b6, #4338ca, #6d28d9);
  background-size: 400% 400%;
  animation: gradientShift 5s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
`;

export default function ProjectsHeader() {

  return (
    <>
      <style>{HEADER_STYLES}</style>
      <motion.div
        className="text-center mb-14"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-6">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border bg-purple-500/10 dark:bg-purple-500/15 border-purple-500/30 dark:border-purple-500/40 text-purple-600 dark:text-purple-300"
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#7c4dff" }}
            />
            Featured Work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4 text-slate-900 dark:text-white"
        >
          Things I&apos;ve{" "}
          <span className="projects-gradient-text">Built</span>
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-slate-600 dark:text-slate-300"
        >
          A selection of projects I&apos;ve designed, developed, and shipped —
          from concept to production.
        </motion.p>
      </motion.div>
    </>
  );
}