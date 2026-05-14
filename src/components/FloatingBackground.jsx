"use client";

import { motion, useReducedMotion } from "framer-motion";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, 
  SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb 
} from "react-icons/si";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ICONS = [
  { Icon: SiHtml5,       x: "5%",   y: "35%", size: 45, color: "#E34F26", delay: 0,   duration: 35 },
  { Icon: SiCss,         x: "90%",  y: "40%", size: 40, color: "#1572B6", delay: 5,   duration: 40 },
  { Icon: SiJavascript,  x: "12%",  y: "75%", size: 48, color: "#F7DF1E", delay: 10,  duration: 38 },
  { Icon: SiReact,       x: "82%",  y: "85%", size: 55, color: "#61DAFB", delay: 2,   duration: 32 },
  { Icon: SiNextdotjs,   x: "45%",  y: "92%", size: 48, color: "#ffffff", delay: 7,   duration: 45 },
  { Icon: SiNodedotjs,   x: "8%",   y: "60%", size: 42, delay: 12,  duration: 37 },
  { Icon: SiExpress,     x: "92%",  y: "75%", size: 38, color: "#ffffff", delay: 15,  duration: 42 },
  { Icon: SiMongodb,     x: "35%",  y: "45%", size: 50, color: "#47A248", delay: 4,   duration: 39 },
];

export default function FloatingBackground() {
  const shouldReduceMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -15 }}>
      {ICONS.map(({ Icon, x, y, size, color, delay, duration }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ 
            left: x, 
            top: y, 
            fontSize: size,
            color: color,
            willChange: "transform, opacity"
          }}
          animate={shouldReduceMotion ? { opacity: 0.1 } : {
            x: [0, 120, -120, 0],
            y: [0, -80, 80, 0],
            rotate: [0, 360],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
          }}
        >
          <Icon />
        </motion.div>
      ))}
    </div>
  );
}
