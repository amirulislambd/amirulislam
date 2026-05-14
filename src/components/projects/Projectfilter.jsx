// components/projects/ProjectFilter.jsx — CLIENT COMPONENT

"use client";

import { motion } from "framer-motion";

export default function ProjectFilter({ categories, active, onChange, isDark }) {
  const wrapBg     = isDark ? "rgba(255,255,255,0.03)" : "rgba(124,77,255,0.05)";
  const wrapBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(124,77,255,0.15)";
  const inactiveText   = isDark ? "rgba(148,163,184,0.8)"  : "rgba(100,116,139,0.85)";
  const inactiveBorder = isDark ? "rgba(255,255,255,0.07)" : "rgba(124,77,255,0.15)";

  return (
    <div className="flex justify-center mb-12">
      <div
        className="inline-flex flex-wrap justify-center gap-2 rounded-2xl p-2 border"
        style={{ background: wrapBg, borderColor: wrapBorder }}
      >
        {categories.map((cat) => {
          const isActive = cat === active;
          return (
            <motion.button
              key={cat}
              onClick={() => onChange(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative rounded-xl px-5 py-2 text-sm font-semibold border transition-all duration-300 cursor-pointer"
              style={
                isActive
                  ? {
                      background: "linear-gradient(135deg, #7c4dff 0%, #5a3ed9 60%, #4cd7f6 160%)",
                      borderColor: "transparent",
                      color: "#ffffff",
                      boxShadow: "0 4px 16px rgba(124,77,255,0.45)",
                    }
                  : {
                      background: "transparent",
                      borderColor: inactiveBorder,
                      color: inactiveText,
                    }
              }
            >
              {isActive && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #7c4dff 0%, #5a3ed9 60%, #4cd7f6 160%)",
                    zIndex: -1,
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}