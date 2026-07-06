// components/contact/ContactButton.jsx
"use client";

import { motion } from "framer-motion";

export default function ContactButton({ link }) {
  return (
    <motion.a
      href={link} 
      whileTap={{ scale: 0.95 }}
      className="block w-full py-4 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white hover:shadow-xl text-center cursor-pointer"
    >
      Contact Now
    </motion.a>
  );
}