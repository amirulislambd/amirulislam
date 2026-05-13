"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

// ─── Brand colors per icon ────────────────────────────────────────────────────
const ICONS = [
  { I: SiHtml5,       t:"7%",  l:"4%",   s:42, o:0.18, c:"#e34f26", dx:[0,14,-8,0],  dy:[0,-20,10,0],  d:14, dl:0,   r:[0,12,-10,0] },
  { I: SiCss,         t:"20%", l:"87%",  s:38, o:0.16, c:"#264de4", dx:[0,-12,8,0],  dy:[0,16,-18,0],  d:16, dl:1.2, r:[0,-10,8,0]  },
  { I: SiJavascript,  t:"64%", l:"7%",   s:36, o:0.18, c:"#f7df1e", dx:[0,10,-14,0], dy:[0,-12,20,0],  d:13, dl:2.5, r:[0,10,-8,0]  },
  { I: SiTailwindcss, t:"79%", l:"74%",  s:40, o:0.16, c:"#38bdf8", dx:[0,-16,8,0],  dy:[0,18,-10,0],  d:18, dl:0.7, r:[0,-8,12,0]  },
  { I: SiReact,       t:"11%", l:"44%",  s:48, o:0.14, c:"#61dafb", dx:[0,10,-6,0],  dy:[0,-24,12,0],  d:20, dl:3.1, r:[0,22,-16,0] },
  { I: SiNextdotjs,   t:"44%", l:"91%",  s:36, o:0.16, c:"#e2e8f0", dx:[0,-8,12,0],  dy:[0,16,-8,0],   d:15, dl:1.8, r:[0,-10,6,0]  },
  { I: SiMongodb,     t:"54%", l:"1%",   s:34, o:0.17, c:"#4db33d", dx:[0,8,-12,0],  dy:[0,-14,22,0],  d:17, dl:0.4, r:[0,8,-14,0]  },
  { I: SiExpress,     t:"34%", l:"54%",  s:30, o:0.12, c:"#94a3b8", dx:[0,-14,10,0], dy:[0,20,-12,0],  d:19, dl:2.9, r:[0,-14,10,0] },
  { I: SiNodedotjs,   t:"87%", l:"39%",  s:40, o:0.17, c:"#68a063", dx:[0,16,-10,0], dy:[0,-18,10,0],  d:16, dl:1.5, r:[0,12,-8,0]  },
  // Smaller secondary layer for depth
  { I: SiHtml5,       t:"49%", l:"29%",  s:24, o:0.11, c:"#e34f26", dx:[0,-8,6,0],   dy:[0,12,-8,0],   d:22, dl:4.0, r:[0,-6,8,0]  },
  { I: SiReact,       t:"74%", l:"59%",  s:28, o:0.12, c:"#61dafb", dx:[0,6,-4,0],   dy:[0,-8,6,0],    d:21, dl:2.0, r:[0,20,-14,0] },
  { I: SiJavascript,  t:"29%", l:"17%",  s:22, o:0.11, c:"#f7df1e", dx:[0,10,-6,0],  dy:[0,-6,10,0],   d:24, dl:3.5, r:[0,-10,8,0]  },
  { I: SiMongodb,     t:"4%",  l:"69%",  s:26, o:0.12, c:"#4db33d", dx:[0,-6,8,0],   dy:[0,10,-14,0],  d:18, dl:1.0, r:[0,6,-10,0]  },
  { I: SiTailwindcss, t:"91%", l:"14%",  s:24, o:0.11, c:"#38bdf8", dx:[0,8,-6,0],   dy:[0,-10,6,0],   d:20, dl:3.8, r:[0,10,-6,0]  },
];

export default function FloatingBackground() {
  const reduce = useReducedMotion();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Only show in dark mode; respect reduced motion
  if (reduce || !mounted || resolvedTheme !== "dark") return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: -10 }}
    >
      {ICONS.map(({ I: Icon, t, l, s, o, c, dx, dy, d, dl, r }, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: t, left: l }}
          animate={{ x: dx, y: dy, rotate: r }}
          transition={{
            duration: d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dl,
            times: [0, 0.33, 0.66, 1],
          }}
        >
          <Icon
            style={{
              width: s,
              height: s,
              opacity: o,
              color: c,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
