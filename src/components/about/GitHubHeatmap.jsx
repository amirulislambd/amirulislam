"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { HiCode } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function GitHubHeatmap() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  const customTheme = {
    light: ["#eef0f3", "#e0d4ff", "#b085ff", "#7c4dff", "#5a3ed9"],
    dark: ["#0d1117", "#1a0533", "#4a1a8f", "#7c4dff", "#b085ff"],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative p-8 sm:p-10 rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 dark:bg-white/5 flex items-center justify-center shadow-lg">
              <FaGithub size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                GitHub Activity
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                365 days of consistent coding
              </p>
            </div>
          </div>
          <a
            href="https://github.com/amirulislambd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white/10 text-white text-sm font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            <HiCode className="text-lg" />
            View Profile
          </a>
        </div>

        {/* Calendar */}
        {mounted && (
          <div className="overflow-x-auto pb-2">
            <GitHubCalendar
              username="amirulislambd"
              colorScheme={isDark ? "dark" : "light"}
              theme={customTheme}
              blockSize={14}
              blockMargin={4}
              fontSize={12}
              style={{ fontFamily: "inherit" }}
            />
          </div>
        )}

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { label: "Public Repos", value: "10+", color: "text-purple-500" },
            { label: "Contributions", value: "200+", color: "text-blue-500" },
            { label: "Languages", value: "5+", color: "text-emerald-500" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5"
            >
              <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
