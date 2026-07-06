"use client";

import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { FaWhatsapp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ContactButton from "./ContactButton";

const BACKGROUND_ICONS = [
  { Icon: FaReact, x: "10%", y: "15%", delay: 0 },
  { Icon: SiJavascript, x: "85%", y: "20%", delay: 2 },
  { Icon: FaNodeJs, x: "15%", y: "75%", delay: 4 },
  { Icon: SiTailwindcss, x: "80%", y: "80%", delay: 1 },
];

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          style: { borderRadius: '10px', background: '#333', color: '#fff' }
        });
        e.target.reset();
      } else {
        toast.error(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            className="p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white mb-8">Send me a message</h3>
            
            <form onSubmit={onSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-slate-600 dark:text-slate-300 ml-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white placeholder:text-slate-400"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-600 dark:text-slate-300 ml-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all dark:text-white placeholder:text-slate-400"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-300 ml-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="4" 
                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all resize-none dark:text-white placeholder:text-slate-400"
                  placeholder="Hello Amirul, I'd like to talk about..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-1 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : "Send Message"}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col gap-6 h-full justify-center">
            {CONTACT_METHODS.map((method, index) => (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-1 rounded-[2rem] transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 blur-[2px]" />
                <div className="relative p-6 sm:p-8 rounded-[1.9rem] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-white/5 flex items-center gap-6 shadow-xl">
                  <div className={`p-4 rounded-2xl text-white bg-gradient-to-br ${method.color} ${method.shadow} shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shrink-0`}>
                    <method.icon size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{method.label}</h3>
                    <p className="text-slate-500 dark:text-slate-400 font-medium truncate mb-2">{method.value}</p>
                    <ContactButton link={method.link} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <Toaster position="bottom-right" />
      </div>
    </section>
  );
}