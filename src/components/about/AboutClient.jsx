"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ORBS } from "./AboutData";

/**
 * @description AboutClient একটি ক্লায়েন্ট কম্পোনেন্ট যা শুধুমাত্র 
 * অ্যানিমেশন এবং থিম-ভিত্তিক স্টাইলিং হ্যান্ডেল করে।
 */
export default function AboutClient({ children }) {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch এড়াতে মাউন্ট হওয়া পর্যন্ত অপেক্ষা
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen" />; // লোডিং স্টেট
  }

  const isDark = resolvedTheme === "dark";

  // থিম অনুযায়ী ডাইনামিক স্টাইল
  const themeStyles = {
    sectionBg: isDark 
      ? "transparent" 
      : "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)",
    
    orbColors: isDark
      ? ["rgba(124,77,255,0.18)", "rgba(76,215,246,0.13)", "rgba(167,139,250,0.12)"]
      : ["rgba(124,77,255,0.22)", "rgba(14,116,144,0.18)", "rgba(109,40,217,0.14)"],
    
    gridOpacity: isDark ? "opacity-20" : "opacity-40",
  };

  const STATIC_STYLES = `
    @keyframes gradientShift { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
    
    .about-gradient-text {
      background: linear-gradient(270deg, #d0bcff, #7c4dff, #4cd7f6, #a78bfa, #818cf8, #d0bcff);
      background-size: 400% 400%;
      animation: gradientShift 5s ease infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    /* লাইট মোডে টেক্সট গ্রেডিয়েন্ট কিছুটা ডার্ক হবে */
    :root:not(.dark) .about-gradient-text {
      background: linear-gradient(270deg, #6d28d9, #7c4dff, #0e7490, #5b21b6, #4338ca, #6d28d9);
      background-size: 400% 400%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `;

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 transition-colors duration-500"
      style={{ background: themeStyles.sectionBg }}
    >
      <style>{STATIC_STYLES}</style>

      {/* ব্যাকগ্রাউন্ড অ্যানিমেটেড অর্বস */}
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{ 
            width: orb.size, 
            height: orb.size, 
            left: orb.x, 
            top: orb.y, 
            background: themeStyles.orbColors[i] 
          }}
          animate={shouldReduceMotion ? { opacity: 1 } : { 
            scale: [1, 1.1, 0.95, 1], 
            opacity: isDark ? [0.4, 0.7, 0.5, 0.4] : [0.3, 0.5, 0.4, 0.3],
            y: [0, -30, 15, 0] 
          }}
          transition={{ 
            duration: 12 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
            delay: orb.delay 
          }}
        />
      ))}

      {/* গ্রিড ওভারলে - যা থিম অনুযায়ী অপাসিটি চেঞ্জ করবে */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${themeStyles.gridOpacity}`}
        style={{ 
          backgroundImage: `linear-gradient(rgba(124,77,255,0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(124,77,255,0.1) 1px, transparent 1px)`, 
          backgroundSize: "60px 60px" 
        }} 
      />

      {/* মেইন কন্টেন্ট র‍্যাপার (এখানেই page.jsx এর সব কন্টেন্ট আসবে) */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}