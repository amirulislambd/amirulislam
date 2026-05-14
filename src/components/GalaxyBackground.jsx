"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

// ─── Diverse Cosmic Colors ───────────────────────────────────────────────────
const C = "#67e8f9";  // Cyan
const P = "#c4b5fd";  // Purple
const G = "#fbbf24";  // Gold / Fire
const F = "#f87171";  // Soft Red / Ember
const W = "#ffffff";  // Pure Star White

// ─── Star Data ───────────────────────────────────────────────────────────────
const STARS = [
  [4,3,2.2,C,0.0,3.5],[11,17,1.8,W,1.2,4.5],[19,8,2.8,G,2.8,2.8],[26,26,1.5,P,0.5,5.0],
  [37,13,1.8,F,3.5,3.2],[45,5,2.8,C,1.8,4.0],[53,20,1.5,W,0.9,2.5],[61,9,1.2,G,4.2,5.5],
  [69,29,2.8,P,2.1,3.8],[78,15,2.0,F,0.3,4.3],[87,7,1.8,C,3.8,3.0],[94,23,2.8,W,1.5,5.2],
  [3,44,2.0,G,2.6,2.9],[14,53,1.2,F,0.7,4.8],[23,39,2.2,C,4.0,3.5],[31,62,1.5,W,1.3,2.7],
  [40,48,1.2,P,3.2,5.1],[49,56,2.2,G,0.6,3.9],[58,44,1.5,F,2.4,4.6],[67,69,1.2,C,4.5,3.3],
  [75,51,2.8,W,1.0,2.6],[83,63,2.0,P,3.6,5.4],[91,46,1.8,G,2.2,4.1],[8,76,2.8,F,0.4,3.7],
];

// ─── Global Comets Data ─────────────────────────────────────────────────────
const COMETS = [
  { id:0,  startX:"105%", startY:"15%",  dx:-1200, dy: 300, angle:165, delay:0,    dur:4.5, len:180 },
  { id:1,  startX:"105%", startY:"55%",  dx:-1200, dy:-200, angle:195, delay:8.0,  dur:4.0, len:150 },
  { id:2,  startX:"-10%", startY:"30%",  dx: 1200, dy: 250, angle:15,  delay:4.5,  dur:5.0, len:200 },
  { id:3,  startX:"105%", startY:"80%",  dx:-1200, dy:-300, angle:200, delay:12.0, dur:4.2, len:160 },
  { id:4,  startX:"-10%", startY:"65%",  dx: 1200, dy:-150, angle:345, delay:16.0, dur:4.8, len:170 },
];

export default function GalaxyBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => setMounted(true), []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <>
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) translateZ(0); }
          50% { opacity: 1; transform: scale(1.3) translateZ(0); filter: brightness(2) drop-shadow(0 0 8px currentColor); }
        }
        @keyframes planetPulse {
          0%, 100% { opacity: 0.7; transform: scale(1) translateZ(0); }
          50% { opacity: 0.9; transform: scale(1.05) translateZ(0); }
        }
      `}</style>

      {/* 1. Deep Space Base */}
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: -22, background: "linear-gradient(150deg, #020617 0%, #08112b 100%)" }} />

      {/* 2. Cosmic Planet */}
      <div className="cosmic-planet pointer-events-none fixed" style={{ top:"-10%", right:"-5%", width:450, height:450, borderRadius:"50%", background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08) 0%, rgba(56,189,248,0.04) 40%, transparent 80%)", boxShadow: "inset -30px -30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(59,130,246,0.1)", zIndex: -20, animation: "planetPulse 15s ease-in-out infinite" }} />
      <div className="planet-glow pointer-events-none fixed" style={{ top:"-5%", right:"-5%", width:550, height:550, borderRadius:"50%", background: "radial-gradient(circle, rgba(124,77,255,0.08) 0%, transparent 70%)", filter: "blur(50px)", zIndex: -21 }} />

      {/* 3. Star Field */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: -18 }}>
        {STARS.map(([left, top, size, color, delay, duration], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: color,
              color: color,
              boxShadow: `0 0 ${size * 4}px ${color}`,
              animation: `starTwinkle ${duration}s ${delay}s ease-in-out infinite`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      {/* 4. Global Comets (উড়ন্ত ধুমকেতু - সবার ওপরে) */}
      {!shouldReduceMotion && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 100 }}>
          {COMETS.map((comet) => (
            <motion.div
              key={comet.id}
              style={{
                position: "absolute",
                left: comet.startX,
                top: comet.startY,
                width: comet.len,
                height: 2,
                rotate: comet.angle,
                background: "linear-gradient(to left, white, rgba(124,77,255,0.6), transparent)",
                willChange: "transform, opacity",
              }}
              animate={{ x: [0, comet.dx], y: [0, comet.dy], opacity: [0, 1, 0] }}
              transition={{ duration: comet.dur, repeat: Infinity, repeatDelay: 5 + comet.delay, delay: comet.delay }}
            />
          ))}
        </div>
      )}
    </>
  );
}
