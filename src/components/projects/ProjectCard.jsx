// components/projects/ProjectCard.jsx — CLIENT COMPONENT

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode, HiStar } from "react-icons/hi";

const CARD_STYLES = `
.featured-star {
  animation: starPulse 2.5s ease-in-out infinite;
}
@keyframes starPulse {
  0%, 100% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.2); opacity: 1; }
}
`;

export default function ProjectCard({ project, index, isDark }) {
  const [hovered, setHovered] = useState(false);

  const t = {
    cardBg: isDark ? "rgba(11,19,38,0.75)" : "rgba(255,255,255,0.85)",
    cardBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(124,77,255,0.2)",
    cardShadow: isDark
      ? "0 15px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)"
      : "0 15px 40px rgba(124,77,255,0.1), inset 0 1px 0 rgba(255,255,255,0.95)",
    cardShadowHover: isDark
      ? `0 0 0 1px ${project.accent}40, 0 25px 60px rgba(0,0,0,0.5), 0 0 30px ${project.accent}20`
      : `0 0 0 1px ${project.accent}35, 0 25px 60px ${project.accent}20`,

    headingColor: isDark ? "#f1f5f9" : "#1e1b4b",
    subColor: isDark ? "rgba(218,226,253,0.7)" : "rgba(30,27,75,0.65)",
    pillBg: isDark ? "rgba(255,255,255,0.06)" : "rgba(124,77,255,0.08)",
    pillBorder: isDark ? "rgba(255,255,255,0.12)" : "rgba(124,77,255,0.25)",
    pillText: isDark ? "rgba(218,226,253,0.8)" : "rgba(109,40,217,0.8)",
    divider: isDark ? "rgba(255,255,255,0.08)" : "rgba(124,77,255,0.15)",
    btnPrimaryBg: `linear-gradient(135deg, ${project.accent} 0%, ${project.accentSecondary} 100%)`,
    btnSecBg: isDark ? "rgba(255,255,255,0.05)" : "rgba(124,77,255,0.05)",
    btnSecBorder: isDark ? "rgba(255,255,255,0.15)" : "rgba(124,77,255,0.3)",
    btnSecText: isDark ? "#d0bcff" : "#6d28d9",
    numberColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(124,77,255,0.06)",
  };

  return (
    <>
      <style>{CARD_STYLES}</style>
      <div
        className="project-card-wrap relative h-full group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="relative rounded-[1.8rem] border h-full flex flex-col overflow-hidden transition-all duration-500"
          style={{
            background: t.cardBg,
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: hovered ? project.accent : t.cardBorder,
            boxShadow: hovered ? t.cardShadowHover : t.cardShadow,
            zIndex: 2,
          }}
        >
          {/* Top glow line */}
          <span
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accent}, ${project.accentSecondary}, transparent)`,
              opacity: hovered ? 1 : 0.4,
              transition: "opacity 0.4s ease",
            }}
          />

          {/* Decorative Number */}
          <span
            className="absolute top-4 right-6 text-7xl font-black leading-none select-none"
            style={{ color: t.numberColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="p-8 flex flex-col flex-1 relative z-10">
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    background: project.accent, 
                    boxShadow: `0 0 12px ${project.accent}` 
                  }}
                />
                <span className="text-[11px] font-bold tracking-[0.15em] uppercase" style={{ color: project.accent }}>
                  {project.category}
                </span>
              </div>

              {project.featured && (
                <HiStar className="text-xl featured-star" style={{ color: project.accent }} />
              )}
            </div>

            <h3
              className="text-2xl font-bold mb-1.5 transition-colors duration-300"
              style={{ color: hovered ? project.accent : t.headingColor }}
            >
              {project.title}
            </h3>

            <p className="text-[12px] font-bold mb-5 uppercase tracking-wide" style={{ color: project.accentSecondary }}>
              {project.tagline}
            </p>

            <p className="text-[14.5px] leading-relaxed mb-8 flex-1" style={{ color: t.subColor }}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg px-3 py-1.5 text-[11px] font-bold border transition-colors"
                  style={{ 
                    background: t.pillBg, 
                    borderColor: t.pillBorder, 
                    color: t.pillText 
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-6 h-px w-full" style={{ background: t.divider }} />

            <div className="grid grid-cols-2 gap-4">
              <motion.a
                href={project.liveUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold text-white shadow-lg"
                style={{ background: t.btnPrimaryBg }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <HiExternalLink className="text-lg" /> Live Demo
              </motion.a>

              <motion.a
                href={project.githubUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-bold border transition-all"
                style={{ 
                  background: t.btnSecBg, 
                  borderColor: t.btnSecBorder, 
                  color: t.btnSecText 
                }}
                whileHover={{ scale: 1.02, y: -2, borderColor: project.accent }}
                whileTap={{ scale: 0.98 }}
              >
                <HiCode className="text-lg" /> Source
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}