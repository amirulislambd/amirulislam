"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiCode, HiStar } from "react-icons/hi";

// Console Error এড়াতে CSS অ্যানিমেশন গুলো globals.css এ রাখাই ভালো
// তবে এখানে আমি ইনলাইন রেসপন্সিভ স্টাইল দিচ্ছি
export default function ProjectCard({ project, index, isDark }) {
  const [hovered, setHovered] = useState(false);

  const t = {
    cardBg: isDark ? "rgba(11,19,38,0.75)" : "rgba(255,255,255,0.85)",
    cardBorder: isDark ? "rgba(255,255,255,0.1)" : "rgba(124,77,255,0.2)",
    cardShadow: isDark
      ? "0 10px 30px rgba(0,0,0,0.3)"
      : "0 10px 30px rgba(124,77,255,0.1)",
    headingColor: isDark ? "#f1f5f9" : "#1e1b4b",
    subColor: isDark ? "rgba(218,226,253,0.7)" : "rgba(30,27,75,0.65)",
    pillBg: isDark ? "rgba(255,255,255,0.06)" : "rgba(124,77,255,0.08)",
    pillText: isDark ? "rgba(218,226,253,0.8)" : "rgba(109,40,217,0.8)",
    btnPrimaryBg: `linear-gradient(135deg, ${project.accent} 0%, ${project.accentSecondary} 100%)`,
    btnSecText: isDark ? "#d0bcff" : "#6d28d9",
    numberColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(124,77,255,0.06)",
  };

  return (
    <div
      className="relative h-full group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative rounded-[1.5rem] md:rounded-[1.8rem] border h-full flex flex-col overflow-hidden transition-all duration-500"
        style={{
          background: t.cardBg,
          backdropFilter: "blur(16px)",
          borderColor: hovered ? project.accent : t.cardBorder,
          boxShadow: t.cardShadow,
        }}
      >
        {/* Decorative Number - মোবাইলে ছোট করা হয়েছে */}
        <span
          className="absolute top-2 right-4 md:top-4 md:right-6 text-5xl md:text-7xl font-black leading-none select-none opacity-50 md:opacity-100"
          style={{ color: t.numberColor }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Padding মোবাইলে কমানো হয়েছে (p-6), ডেস্কটপে p-8 */}
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

          {/* Heading - মোবাইলে text-xl, ডেস্কটপে text-2xl */}
          <h3 className="text-xl md:text-2xl font-bold mb-1 transition-colors duration-300" style={{ color: hovered ? project.accent : t.headingColor }}>
            {project.title}
          </h3>

          <p className="text-[10px] md:text-[11px] font-bold mb-4 uppercase tracking-wide opacity-80" style={{ color: project.accentSecondary }}>
            {project.tagline}
          </p>

          {/* Description - মোবাইলে ছোট ফন্ট */}
          <p className="text-sm md:text-[14.5px] leading-relaxed mb-6 md:mb-8 flex-1" style={{ color: t.subColor }}>
            {project.description}
          </p>

          {/* Tech Stack - মোবাইলে গ্যাপ কমানো হয়েছে */}
          <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
            {project.tech.map((tag) => (
              <span key={tag} className="rounded-md md:rounded-lg px-2.5 py-1 text-[10px] md:text-[11px] font-bold border"
                style={{ background: t.pillBg, borderColor: t.cardBorder, color: t.pillText }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="mb-5 h-px w-full opacity-20" style={{ background: project.accent }} />

          {/* Buttons - মোবাইলে প্যাডিং এবং টেক্সট সাইজ অপ্টিমাইজড */}
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <motion.a href={project.liveUrl} target="_blank"
              className="flex items-center justify-center gap-1 md:gap-2 rounded-lg md:rounded-xl py-2.5 md:py-3 text-[12px] md:text-[13px] font-bold text-white shadow-lg"
              style={{ background: t.btnPrimaryBg }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <HiExternalLink className="text-base md:text-lg" /> Live
            </motion.a>

            <motion.a href={project.githubUrl} target="_blank"
              className="flex items-center justify-center gap-1 md:gap-2 rounded-lg md:rounded-xl py-2.5 md:py-3 text-[12px] md:text-[13px] font-bold border"
              style={{ background: "transparent", borderColor: t.cardBorder, color: t.btnSecText }}
              whileHover={{ scale: 1.02, borderColor: project.accent }} whileTap={{ scale: 0.98 }}>
              <HiCode className="text-base md:text-lg" /> Code
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}