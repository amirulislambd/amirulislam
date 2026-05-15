import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineLightningBolt, HiOutlineHeart, HiOutlineLibrary, HiOutlineBriefcase } from "react-icons/hi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiFirebase, SiFlutter, SiGit, SiFigma, SiPostman, SiVercel } from "react-icons/si";

export const SKILLS = {
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "inherit" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Express", icon: SiExpress, color: "inherit" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Vercel", icon: SiVercel, color: "inherit" },
  ]
};

export const EDUCATION = [
  {
    degree: "Dawra-e-Hadith (Masters in Islamic Studies)",
    institution: "Jamia Arabia Ashraful Uloom, Dhaka",
    duration: "2023 — 2024",
    result: "Jayed Jiddan (Very Good)",
    desc: "Completed Takmil (Masters) under Al-Haiatul Ulya board, focusing on advanced Hadith studies, Fiqh, and Arabic literature with high distinction."
  },
  {
    degree: "Mishkat (Degree in Islamic Studies)",
    institution: "Jamia Arabia Ashraful Uloom, Dhaka",
    duration: "2021 — 2023",
    result: "Jayed Jiddan (Very Good)",
    desc: "Focused on intensive study of prophetic traditions (Mishkat al-Masabih) and Islamic jurisprudence under the Befaq Board."
  }
];


export const EXPERIENCE = [
  {
    role: "Full Stack Developer (Freelance)",
    company: "Self-Employed",
    duration: "2023 — Present",
    desc: "Building custom web solutions for clients using the MERN stack. Focused on creating responsive, SEO-friendly, and high-performance applications."
  },
  {
    role: "Open Source Contributor",
    company: "GitHub Community",
    duration: "2022 — Present",
    desc: "Actively contributing to various web development projects and maintaining my own suite of tools for the developer community."
  }
];

export const STATS = [
  { value: "3+", label: "Years Coding" },
  { value: "15+", label: "Projects Built" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "∞", label: "Learning Energy" },
];

export const ORBS = [
  { size: 380, x: "80%", y: "-10%", delay: 0 },
  { size: 280, x: "-5%", y: "60%", delay: 1.2 },
  { size: 180, x: "50%", y: "75%", delay: 2.5 },
];