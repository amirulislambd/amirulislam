"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // ৩০০ পিক্সেল স্ক্রল করলে বাটন আসবে
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 group flex flex-col items-center gap-1"
          aria-label="Scroll to top"
        >
          {/* Floating Indicator Text */}
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c4dff] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Top
          </span>

          {/* Main Button Body */}
          <div className="relative p-4 rounded-full border border-white/10 dark:border-white/20 bg-white/10 dark:bg-[#7c4dff]/5 backdrop-blur-md shadow-2xl transition-all duration-500 group-hover:border-[#7c4dff]/50 group-hover:bg-[#7c4dff]/20 overflow-hidden">
            
            {/* Glow Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7c4dff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            {/* Arrow Icon */}
            <HiOutlineChevronDoubleUp className="relative z-10 text-xl text-slate-600 dark:text-slate-300 group-hover:text-[#7c4dff] group-hover:-translate-y-1 transition-all duration-300" />
            
            {/* Animated Ring (Optional) */}
            <div className="absolute inset-0 rounded-full border border-[#7c4dff] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}