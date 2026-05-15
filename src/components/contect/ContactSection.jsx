"use client";

import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ContactButton from "./ContactButton";

const BACKGROUND_ICONS = [
  { Icon: FaReact, x: "10%", y: "15%", delay: 0 },
  { Icon: SiJavascript, x: "85%", y: "20%", delay: 2 },
  { Icon: FaNodeJs, x: "15%", y: "75%", delay: 4 },
  { Icon: SiTailwindcss, x: "80%", y: "80%", delay: 1 },
];

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const CONTACT_METHODS = [
    {
      icon: HiOutlineMail,
      label: "Email Me",
      value: "amirulislambd313@gmail.com",
      link: "mailto:amirulislambd313@gmail.com",
      color: "from-blue-500 to-cyan-400",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+880 1928-570020",
      link: "https://wa.me/8801928570020",
      color: "from-green-500 to-emerald-400",
      shadow: "shadow-green-500/20",
    },
    {
      icon: HiOutlinePhone,
      label: "Call Now",
      value: "+880 1814-022917",
      link: "tel:+8801814022917",
      color: "from-purple-500 to-violet-400",
      shadow: "shadow-purple-500/20",
    },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden transition-opacity duration-700">
      {/* Background Atoms/Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.1] sm:opacity-[0.2]">
        {BACKGROUND_ICONS.map((item, i) => (
          <motion.div
            key={i}
            className="absolute text-3xl sm:text-4xl text-slate-400"
            style={{ left: item.x, top: item.y }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.6, 0.2], rotate: [0, 15, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: item.delay }}
          >
            <item.Icon style={{ transform: 'translateZ(0)' }} />
          </motion.div>
        ))}
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 blur-[100px] sm:blur-[130px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[100px] sm:blur-[130px] rounded-full" />
      </div>

      <div className={`max-w-6xl mx-auto relative z-10 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center mb-10 sm:mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Touch</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out through any of the channels below.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {CONTACT_METHODS.map((method, index) => (
            <motion.div
              key={method.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 rounded-[2.5rem] transition-opacity duration-500 blur-[2px]" />
              <div className="relative h-full p-6 sm:p-8 rounded-[2.4rem] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-white/5 flex flex-col items-center text-center shadow-xl">
                <div className={`p-4 sm:p-5 rounded-2xl mb-5 sm:mb-6 text-white bg-gradient-to-br ${method.color} ${method.shadow} shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6`}>
                  <method.icon size={28} className="sm:size-[32px]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-2">{method.label}</h3>
                <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mb-6 sm:mb-8 font-medium truncate w-full px-2">{method.value}</p>
                <div className="mt-auto w-full">
                  <ContactButton link={method.link} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}