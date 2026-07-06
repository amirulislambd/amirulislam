"use client";

import { useState, useEffect } from "react";
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
  const [activeFilter, setActiveFilter] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only use dark styles after mount to prevent hydration mismatch
  const isDark = mounted && resolvedTheme === "dark";

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative min-h-screen overflow-hidden py-12 sm:py-20 transition-all duration-500"
      style={{ background: isDark ? "transparent" : "transparent" }}
    >
      {ORBS.map((orb, i) => (
        <motion.div key={i} className="pointer-events-none absolute rounded-full blur-3xl opacity-30 dark:opacity-50"
          style={{ 
            width: orb.size, 
            height: orb.size, 
            left: orb.x, 
            top: orb.y, 
            background: isDark ? "rgba(124,77,255,0.22)" : "rgba(124,77,255,0.18)",
            willChange: "transform, opacity",
            transform: 'translateZ(0)'
          }}
          animate={shouldReduceMotion ? { opacity: 1 } : { scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4], y: [0, -30, 0] }}
          transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] sm:opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(124,77,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(124,77,255,0.05) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        <ProjectsHeader />
        
        <div className="mt-4 sm:mt-0">
          <ProjectFilter
            categories={CATEGORIES}
            active={activeFilter}
            onChange={setActiveFilter}
            isDark={isDark}
          />
        </div>

        <div className="mt-8 sm:mt-12 overflow-visible">
          {filtered.length > 0 ? (
           <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            speed={1200} 
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            watchSlidesProgress={true}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
            pagination={{ clickable: true }}
            className="projects-swiper !py-8 sm:!py-10"
          >
            {[...filtered, ...filtered, ...filtered].map((project, i) => (
              <SwiperSlide key={`${project.id}-${i}`} style={{ width: "min(400px, 85vw)", display: "flex", justifyContent: "center" }}>
                <ProjectCard project={project} index={i % filtered.length} />
              </SwiperSlide>
            ))}
          </Swiper>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20 text-slate-500">
              <p className="text-lg">No projects found.</p>
            </motion.div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .swiper { overflow: visible !important; }
        .swiper-slide { transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1); opacity: 0.3; filter: blur(3px) scale(0.85); }
        .swiper-slide-active { opacity: 1; filter: blur(0) scale(1); z-index: 20; }
        .swiper-pagination-bullet { background: rgba(124,77,255,0.3) !important; }
        .swiper-pagination-bullet-active { background: #7c4dff !important; width: 24px !important; border-radius: 4px !important; transition: all 0.3s ease !important; }
      `}</style>
    </section>
  );
}