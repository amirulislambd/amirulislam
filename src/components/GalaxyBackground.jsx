"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
  [2,11,2.8,C,1.1,4.2],[10,31,2.2,W,2.7,3.6],[18,21,1.8,P,0.2,5.3],[27,16,3.5,G,4.1,2.9],
  [34,36,2.2,F,1.6,4.7],[43,24,1.8,C,3.3,3.4],[51,11,2.8,W,0.8,5.0],[60,33,2.2,P,2.5,2.7],
  [70,19,1.8,G,4.4,4.4],[79,41,2.8,F,1.7,3.1],[88,27,2.2,C,0.1,5.6],[96,14,1.8,W,3.0,4.0],
];

export default function GalaxyBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <>
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8) translateZ(0); }
          50% { opacity: 1; transform: scale(1.3) translateZ(0); filter: brightness(2) drop-shadow(0 0 8px currentColor); }
        }
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.5; transform: scale(1) translateZ(0); }
          50% { opacity: 0.8; transform: scale(1.05) translateZ(0); }
        }
        .focused-aura {
          position: fixed;
          top: -10%;
          right: -5%;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167,139,250,0.12) 0%, rgba(56,189,248,0.05) 40%, transparent 70%);
          filter: blur(40px);
          z-index: -20;
          animation: subtleGlow 12s ease-in-out infinite;
        }
        .sharp-core {
          position: fixed;
          top: -2%;
          right: -2%;
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(124,77,255,0.05) 50%, transparent 80%);
          filter: blur(20px);
          z-index: -19;
          animation: subtleGlow 8s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Deep Space Base */}
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: -22, background: "linear-gradient(150deg, #020617 0%, #08112b 100%)" }} />

      {/* 2. Focused Celestial Aura (চিকন এবং সরু রোশনি) */}
      <div className="focused-aura pointer-events-none" />
      <div className="sharp-core pointer-events-none" />

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
    </>
  );
}
