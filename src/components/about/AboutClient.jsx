"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ORBS } from "./AboutData";

export default function AboutClient({ children }) {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-16  transition-colors duration-500"
      style={{ background: "transparent" }}
    >
      <style>{`
        @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .about-gradient-text {
          background: linear-gradient(270deg, #d0bcff, #7c4dff, #4cd7f6, #a78bfa, #818cf8, #d0bcff);
          background-size: 400% 400%;
          animation: gradientShift 5s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Orbs */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-70"
          style={{ 
            width: orb.size, 
            height: orb.size, 
            left: orb.x, 
            top: orb.y, 
            background: "rgba(124,77,255,0.18)",
            willChange: "transform, opacity",
            transform: 'translateZ(0)'
          }}
          animate={shouldReduceMotion ? { opacity: 1 } : { 
            scale: [1, 1.15, 1], 
            opacity: isDark ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
            y: [0, -40, 20, 0] 
          }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      <div 
        className={`absolute inset-0 pointer-events-none opacity-[0.05] sm:opacity-[0.1]`}
        style={{ backgroundImage: `linear-gradient(rgba(124,77,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.1) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} 
      />

      <motion.div 
        className={`relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </section>
  );
}