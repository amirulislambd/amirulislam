"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// ─── Star colors ──────────────────────────────────────────────────────────────
const C = "#67e8f9";  // Cyan
const P = "#c4b5fd";  // Purple (brighter)
const G = "#fcd34d";  // Gold  (brighter)

// ─── Static star data — [left%, top%, sizePx, color, delay(s), duration(s)] ──
// No Math.random() — prevents SSR ↔ Client hydration mismatch
const STARS = [
  // Cyan
  [4,3,1.5,C,0.0,4.5],[11,17,1.2,C,1.2,5.5],[19,8,2.2,C,2.8,3.8],[26,26,1.5,C,0.5,6.0],
  [37,13,1.2,C,3.5,4.2],[45,5,2.2,C,1.8,5.0],[53,20,1.5,C,0.9,3.5],[61,9,1.2,C,4.2,6.5],
  [69,29,2.2,C,2.1,4.8],[78,15,1.5,C,0.3,5.3],[87,7,1.2,C,3.8,4.0],[94,23,2.2,C,1.5,6.2],
  [3,44,1.5,C,2.6,3.9],[14,53,1.2,C,0.7,5.8],[23,39,2.2,C,4.0,4.5],[31,62,1.5,C,1.3,3.7],
  [40,48,1.2,C,3.2,6.1],[49,56,2.2,C,0.6,4.9],[58,44,1.5,C,2.4,5.6],[67,69,1.2,C,4.5,4.3],
  [75,51,2.2,C,1.0,3.6],[83,63,1.5,C,3.6,6.4],[91,46,1.2,C,2.2,5.1],[8,76,2.2,C,0.4,4.7],
  [17,86,1.5,C,3.9,3.8],[29,93,1.2,C,1.6,5.9],[46,83,2.2,C,2.9,4.3],[63,97,1.5,C,0.8,6.2],
  [80,90,1.2,C,4.3,3.5],[97,72,2.2,C,1.1,5.7],[50,2,1.8,C,2.3,4.9],[33,74,1.4,C,3.4,5.3],
  // Purple
  [2,11,2.2,P,1.1,5.2],[10,31,1.8,P,2.7,4.6],[18,21,1.2,P,0.2,6.3],[27,16,2.8,P,4.1,3.9],
  [34,36,1.8,P,1.6,5.7],[43,24,1.2,P,3.3,4.4],[51,11,2.2,P,0.8,6.0],[60,33,1.8,P,2.5,3.7],
  [70,19,1.2,P,4.4,5.4],[79,41,2.2,P,1.7,4.1],[88,27,1.8,P,0.1,6.6],[96,14,1.2,P,3.0,5.0],
  [5,59,2.2,P,2.3,4.8],[13,66,1.8,P,4.6,3.5],[22,73,1.2,P,1.4,6.2],[30,81,2.2,P,0.5,5.3],
  [38,69,1.8,P,3.7,4.0],[47,79,1.2,P,2.0,5.9],[56,57,2.2,P,4.8,3.6],[64,71,1.8,P,1.9,6.1],
  [73,83,1.2,P,0.6,4.7],[82,76,2.2,P,3.4,5.5],[90,60,1.8,P,2.8,4.2],[1,89,1.2,P,4.3,6.4],
  [16,95,2.2,P,1.2,3.8],[33,87,1.8,P,3.1,5.2],[55,91,1.2,P,0.5,4.6],[74,96,2.2,P,2.4,6.0],
  [92,88,1.8,P,4.0,3.7],[99,50,1.2,P,1.8,5.8],[6,42,2.0,P,3.3,4.7],[84,52,1.6,P,0.9,6.3],
  // Gold
  [7,23,2.5,G,0.3,5.8],[15,10,1.8,G,3.2,4.3],[24,43,1.2,G,1.9,6.5],[36,31,3.0,G,4.7,3.7],
  [48,49,1.8,G,0.7,5.1],[59,18,1.2,G,2.6,4.9],[71,55,2.5,G,4.1,3.4],[81,37,1.8,G,1.5,6.3],
  [93,49,1.2,G,3.8,5.6],[6,71,2.5,G,0.9,4.5],[20,79,1.8,G,4.4,3.9],[32,88,1.2,G,2.1,6.0],
  [44,96,2.5,G,0.4,5.4],[57,84,1.8,G,3.6,4.8],[66,92,1.2,G,1.8,3.6],[77,87,2.5,G,4.9,6.2],
  [85,95,1.8,G,2.4,5.0],[98,80,1.2,G,0.1,4.6],[9,35,2.5,G,3.5,5.7],[25,58,1.8,G,1.3,3.5],
  [41,76,1.2,G,4.6,6.1],[68,40,2.5,G,2.7,4.4],[52,65,1.5,G,0.6,5.6],[89,15,2.0,G,3.9,4.1],
];

export default function GalaxyBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || resolvedTheme !== "dark") return null;

  return (
    <>
      {/* ── KEYFRAMES ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.18; transform: scale(0.7);  filter: brightness(0.65); }
          40%       { opacity: 0.65; transform: scale(1.05); filter: brightness(1.4);  }
          50%       { opacity: 1.00; transform: scale(1.40); filter: brightness(2.5) drop-shadow(0 0 3px currentColor); }
          60%       { opacity: 0.65; transform: scale(1.05); filter: brightness(1.4);  }
        }
        @keyframes moonPulse {
          0%, 100% { opacity: 0.85; }
          50%       { opacity: 1.00; }
        }
      `}</style>

      {/* ── 1. DEEP-SPACE BASE GRADIENT ─────────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: -22,
          background: [
            "linear-gradient(145deg,",
            "  #020617 0%,",     /* slate-950 — almost pure black */
            "  #050e25 20%,",    /* deep indigo-navy */
            "  #0c1a3a 45%,",    /* indigo-900 */
            "  #080d1e 70%,",    /* back to near-black */
            "  #020617 100%",
            ")",
          ].join(""),
        }}
      />

      {/* ── 2. MOONLIGHT — cosmic light source, top-right ────────────── */}
      {/* Level 1: giant diffuse halo — 900px, barely visible, sets the mood */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{
          zIndex: -20,
          top: "-22%",
          right: "-16%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(186,230,253,0.09) 0%, rgba(103,232,249,0.05) 30%, rgba(139,92,246,0.03) 55%, transparent 72%)",
          animation: "moonPulse 8s ease-in-out infinite",
        }}
      />
      {/* Level 2: mid glow — 480px */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{
          zIndex: -20,
          top: "-10%",
          right: "-6%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(224,242,254,0.16) 0%, rgba(186,230,253,0.10) 30%, rgba(103,232,249,0.05) 60%, transparent 78%)",
          filter: "blur(4px)",
          animation: "moonPulse 8s 1s ease-in-out infinite",
        }}
      />
      {/* Level 3: bright inner core — 200px, sharp */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{
          zIndex: -19,
          top: "-3%",
          right: "0%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.26) 0%, rgba(224,242,254,0.18) 30%, rgba(186,230,253,0.10) 55%, transparent 75%)",
          filter: "blur(2px)",
          boxShadow:
            "0 0 60px 20px rgba(186,230,253,0.18), 0 0 120px 50px rgba(103,232,249,0.08)",
          animation: "moonPulse 6s 0.5s ease-in-out infinite",
        }}
      />
      {/* Level 4: crescent rim highlight — tiny, very bright */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed"
        style={{
          zIndex: -19,
          top: "1%",
          right: "3%",
          width: 80,
          height: 80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(224,242,254,0.25) 40%, transparent 70%)",
          boxShadow:
            "0 0 30px 8px rgba(255,255,255,0.20), 0 0 70px 20px rgba(186,230,253,0.12)",
        }}
      />

      {/* ── 3. NEBULA ACCENT POOLS ──────────────────────────────────── */}
      <div aria-hidden="true" className="pointer-events-none fixed" style={{
        zIndex: -21, top: "30%", left: "0%", width: 380, height: 380,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div aria-hidden="true" className="pointer-events-none fixed" style={{
        zIndex: -21, bottom: "15%", right: "5%", width: 320, height: 320,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)",
        filter: "blur(60px)",
      }} />
      <div aria-hidden="true" className="pointer-events-none fixed" style={{
        zIndex: -21, top: "55%", left: "40%", width: 260, height: 260,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,77,255,0.04) 0%, transparent 70%)",
        filter: "blur(50px)",
      }} />

      {/* ── 4. STAR FIELD — sharp dots with box-shadow glow ─────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden"
        style={{ zIndex: -18 }}
      >
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
              boxShadow: [
                `0 0 ${size * 2.5}px ${size}px ${color}`,       // tight glow
                `0 0 ${size * 6}px ${size * 2}px ${color}66`,   // medium halo
                `0 0 ${size * 12}px ${size * 3}px ${color}22`,  // wide outer bloom
              ].join(", "),
              color,
              animationName: "starTwinkle",
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              animationTimingFunction: "ease-in-out",
              animationIterationCount: "infinite",
            }}
          />
        ))}
      </div>
    </>
  );
}
