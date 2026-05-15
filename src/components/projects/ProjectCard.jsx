"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiExternalLink, HiCode, HiStar } from "react-icons/hi";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  const btnPrimaryBg = `linear-gradient(135deg, ${project.accent} 0%, ${project.accentSecondary} 100%)`;

  return (
    <div
      className="relative h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative rounded-[1.5rem] md:rounded-[2.2rem] border h-full flex flex-col overflow-hidden transition-all duration-500 backdrop-blur-2xl bg-white/65 dark:bg-[#0b1326]/45 shadow-xl dark:shadow-black/40`}
        style={{
          borderColor: hovered ? project.accent : "rgba(124,77,255,0.25)",
        }}
      >
        <span
          className="absolute top-2 right-4 md:top-4 md:right-6 text-5xl md:text-7xl font-black leading-none select-none opacity-50 md:opacity-100 text-purple-500/10 dark:text-white/10"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="p-6 md:p-8 flex flex-col flex-1 relative z-10">
          <div className="flex items-start justify-between mb-4 md:mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ background: project.accent, boxShadow: `0 0 10px ${project.accent}` }} />
              <span className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase" style={{ color: project.accent }}>
                {project.category}
              </span>
            </div>
            {project.featured && <HiStar className="text-lg md:text-xl animate-pulse" style={{ color: project.accent }} />}
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors duration-300 text-slate-900 dark:text-slate-100" style={{ color: hovered ? project.accent : undefined }}>
            {project.title}
          </h3>

          <p className="text-[10px] md:text-[11px] font-bold mb-4 uppercase tracking-wide opacity-80" style={{ color: project.accentSecondary }}>
            {project.tagline}
          </p>

          <p className="text-sm md:text-[14.5px] leading-relaxed mb-6 md:mb-8 flex-1 text-slate-700 dark:text-slate-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tech.map((tag) => (
              <span key={tag} className="rounded-md md:rounded-lg px-2.5 py-1 text-[10px] md:text-[11px] font-bold border bg-purple-500/10 dark:bg-white/10 border-purple-500/20 dark:border-white/10 text-purple-700 dark:text-purple-200">
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-5 h-px w-full opacity-20" style={{ background: project.accent }} />

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            <motion.a href={project.liveUrl} target="_blank"
              className="flex items-center justify-center gap-2 rounded-lg md:rounded-xl py-3 text-[13px] font-bold text-white shadow-lg"
              style={{ background: btnPrimaryBg }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <HiExternalLink className="text-lg" /> Live Preview
            </motion.a>

            <div className="grid grid-cols-2 gap-3">
              <Link href={`/projects/${project.id}`}
                className="flex items-center justify-center gap-2 rounded-lg md:rounded-xl py-3 text-[13px] font-bold border border-purple-500/20 dark:border-white/10 text-purple-600 dark:text-purple-300 hover:bg-purple-500/5 transition-all text-center"
              >
                View Details
              </Link>

              <motion.a href={project.githubUrl} target="_blank"
                className="flex items-center justify-center gap-2 rounded-lg md:rounded-xl py-3 text-[13px] font-bold border border-purple-500/20 dark:border-white/10 text-purple-600 dark:text-purple-300"
                whileHover={{ scale: 1.02, borderColor: project.accent }} whileTap={{ scale: 0.98 }}>
                <HiCode className="text-lg" /> Code
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}