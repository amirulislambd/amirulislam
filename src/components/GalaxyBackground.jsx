"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// ─── Star colors ──────────────────────────────────────────────────────────────
const C = "#67e8f9";  // Cyan
const P = "#c4b5fd";  // Purple
const G = "#fcd34d";  // Gold

// ─── Full Star Data ──────────────────────────────────────────────────────────
const STARS = [
  [4,3,1.5,C,0.0,3.5],[11,17,1.2,C,1.2,4.5],[19,8,2.2,C,2.8,2.8],[26,26,1.5,C,0.5,5.0],
  [37,13,1.2,C,3.5,3.2],[45,5,2.2,C,1.8,4.0],[53,20,1.5,C,0.9,2.5],[61,9,1.2,C,4.2,5.5],
  [69,29,2.2,C,2.1,3.8],[78,15,1.5,C,0.3,4.3],[87,7,1.2,C,3.8,3.0],[94,23,2.2,C,1.5,5.2],
  [3,44,1.5,C,2.6,2.9],[14,53,1.2,C,0.7,4.8],[23,39,2.2,C,4.0,3.5],[31,62,1.5,C,1.3,2.7],
  [40,48,1.2,C,3.2,5.1],[49,56,2.2,C,0.6,3.9],[58,44,1.5,C,2.4,4.6],[67,69,1.2,C,4.5,3.3],
  [75,51,2.2,C,1.0,2.6],[83,63,1.5,C,3.6,5.4],[91,46,1.2,C,2.2,4.1],[8,76,2.2,C,0.4,3.7],
  [17,86,1.5,C,3.9,2.8],[29,93,1.2,C,1.6,4.9],[46,83,2.2,C,2.9,3.3],[63,97,1.5,C,0.8,5.2],
  [2,11,2.2,P,1.1,4.2],[10,31,1.8,P,2.7,3.6],[18,21,1.2,P,0.2,5.3],[27,16,2.8,P,4.1,2.9],
  [34,36,1.8,P,1.6,4.7],[43,24,1.2,P,3.3,3.4],[51,11,2.2,P,0.8,5.0],[60,33,1.8,P,2.5,2.7],
  [70,19,1.2,P,4.4,4.4],[79,41,2.2,P,1.7,3.1],[88,27,1.8,P,0.1,5.6],[96,14,1.2,P,3.0,4.0],
  [5,59,2.2,P,2.3,3.8],[13,66,1.8,P,4.6,2.5],[22,73,1.2,P,1.4,5.2],[30,81,2.2,P,0.5,4.3],
  [38,69,1.8,P,3.7,3.0],[47,79,1.2,P,2.0,4.9],[56,57,2.2,P,4.8,2.6],[64,71,1.8,P,1.9,5.1],
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
          0%, 100% { opacity: 0.3; transform: scale(0.7) translateZ(0); filter: brightness(1); }
          50% { opacity: 1; transform: scale(1.3) translateZ(0); filter: brightness(1.8); }
        }
        @keyframes moonPulse {
          0%, 100% { opacity: 0.7; transform: scale(1) translateZ(0); }
          50% { opacity: 1; transform: scale(1.05) translateZ(0); }
        }
      `}</style>

      {/* 1. Deep Space Base */}
      <div className="pointer-events-none fixed inset-0" style={{ zIndex: -22, background: "linear-gradient(145deg, #020617 0%, #050e25 100%)" }} />

      {/* 2. Moonlight Layers */}
      <div className="pointer-events-none fixed" style={{ zIndex: -20, top: "-20%", right: "-10%", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(186,230,253,0.12) 0%, transparent 75%)", animation: "moonPulse 10s ease-in-out infinite" }} />
      <div className="pointer-events-none fixed" style={{ zIndex: -19, top: "-5%", right: "0%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 75%)", filter: "blur(30px)", animation: "moonPulse 8s ease-in-out infinite" }} />

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
              boxShadow: `0 0 ${size * 3}px ${color}`,
              animation: `starTwinkle ${duration}s ${delay}s ease-in-out infinite`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
    </>
  );
}
