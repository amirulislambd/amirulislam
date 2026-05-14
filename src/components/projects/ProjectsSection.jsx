"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import ProjectFilter from "./Projectfilter";

const ORBS = [
  { size: 400, x: "-8%", y: "10%",  delay: 0   },
  { size: 300, x: "82%", y: "55%",  delay: 1.5 },
  { size: 200, x: "45%", y: "-8%",  delay: 2.8 },
];

const CATEGORIES = ["All", "Full Stack", "Frontend", "Backend"];

export default function ProjectsSection({ projects }) {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme }  = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const t = {
    sectionBg: isDark
      ? "transparent"
      : "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)",
    gridLine: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,77,255,0.07)",
    orbColors: isDark
      ? ["rgba(124,77,255,0.16)", "rgba(76,215,246,0.12)", "rgba(167,139,250,0.10)"]
      : ["rgba(124,77,255,0.20)", "rgba(14,116,144,0.16)", "rgba(109,40,217,0.12)"],
    emptyText: isDark ? "rgba(148,163,184,0.7)" : "rgba(100,116,139,0.8)",
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden pb-10 transition-all duration-500"
      style={{ background: t.sectionBg }}
    >
      {/* Background orbs & Grid overlay (আগের মতোই থাকবে) */}
      {ORBS.map((orb, i) => (
        <motion.div key={i} className="pointer-events-none absolute rounded-full blur-3xl"
          style={{ width: orb.size, height: orb.size, left: orb.x, top: orb.y, background: t.orbColors[i] }}
          animate={shouldReduceMotion ? { opacity: 1 } : { scale: [1, 1.1, 0.95, 1], opacity: [0.5, 0.85, 0.6, 0.5], y: [0, -20, 8, 0] }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: `linear-gradient(${t.gridLine} 1px, transparent 1px), linear-gradient(90deg, ${t.gridLine} 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <ProjectsHeader isDark={isDark} />
        
        <ProjectFilter
          categories={CATEGORIES}
          active={activeFilter}
          onChange={setActiveFilter}
          isDark={isDark}
        />

        {/* Swiper Slider */}
        <div className="mt-12 overflow-visible">
          {filtered.length > 0 ? (
           // ProjectsSection.jsx এর Swiper অংশটুকু নিচের মতো করে আপডেট করো

           // ProjectsSection.jsx এর Swiper অংশটুকু নিচের কোড দিয়ে পরিবর্তন করো

           <Swiper
           modules={[Autoplay, EffectCoverflow, Pagination]}
           effect={"coverflow"}
           grabCursor={true}
           centeredSlides={true}
           slidesPerView={"auto"}
           loop={true}
           
           // --- নতুন এবং উন্নত কনফিগারেশন ---
           speed={1500} 
           autoplay={{
             delay: 2500,
             disableOnInteraction: false,
             pauseOnMouseEnter: true, // মাউস কার্ডের ওপর নিলে স্লাইডার থেমে যাবে
           }}
           
           // দুপাশে কার্ড পরিপূর্ণ রাখার জন্য এই ট্রিকটি ব্যবহার করো
           initialSlide={filtered.length} // মাঝখানের স্লাইড থেকে শুরু হবে
           watchSlidesProgress={true}
           loopedSlides={filtered.length * 2} // ডুপ্লিকেট স্লাইড ম্যানেজমেন্ট
           
           coverflowEffect={{
             rotate: 0,
             stretch: 0, // স্লাইডগুলোর মাঝের গ্যাপ কমাতে এটি ০ রাখাই ভালো
             depth: 100,
             modifier: 2,
             slideShadows: false,
           }}
           
           pagination={{ clickable: true }}
           className="projects-swiper !py-20"
         >
           {/* ৩টি প্রজেক্টের ক্ষেত্রে ৩ বার রিপিট করা ভালো যাতে স্ক্রিন সবসময় ভর্তি থাকে */}
           {[...filtered, ...filtered, ...filtered].map((project, i) => (
             <SwiperSlide 
               key={`${project.id}-${i}`} 
               style={{ 
                 width: "min(400px, 80vw)", // উইডথ একটু কমিয়েছি যাতে দুপাশের কার্ড উঁকি দেয়
                 display: "flex",
                 justifyContent: "center"
               }}
             >
               <ProjectCard
                 project={project}
                 index={i % filtered.length}
                 isDark={isDark}
               />
             </SwiperSlide>
           ))}
         </Swiper>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
              <p className="text-lg" style={{ color: t.emptyText }}>No projects found.</p>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        /* স্পিনিং রিং যাতে দেখা যায় তার জন্য overflow-visible */
        .swiper {
          overflow: visible !important;
        }
        .swiper-slide {
          transition: all 0.5s ease-in-out;
          opacity: 0.4;
          filter: blur(2px) scale(0.9);
        }
        .swiper-slide-active {
          opacity: 1;
          filter: blur(0) scale(1);
          z-index: 20;
        }
        .swiper-pagination-bullet-active {
          background: #7c4dff !important;
        }
      `}</style>
    </section>
  );
}