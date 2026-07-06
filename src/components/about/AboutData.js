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
    degree: "Advanced Full Stack Web Development (MERN)",
    institution: "Programming Hero",
    duration: "2023 — Present",
    result: "Selected for SCIC",
    desc: "Completed an intensive web development program. Currently participating in SCIC (Super Charged Intern Club) for advanced problem-solving and industry-level training."
  },
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
    role: "Teacher (Islamic Studies)",
    company: "Islamic Educational Institution",
    duration: "Present",
    desc: "Serving as an educator. This role has deeply enhanced my communication, patience, discipline, and mentoring skills, which I consistently apply to my programming journey."
  },
  {
    role: "Full Stack Developer (Self-Driven)",
    company: "Personal Projects & Open Source",
    duration: "2023 — Present",
    desc: "Continuously building, deploying, and maintaining full-stack web applications to solve real-world problems. Actively learning new technologies and contributing to the GitHub community."
  }
];

export const STATS = [
  { value: "3+", label: "Years Coding" },
  { value: "15+", label: "Projects Built" },
  { value: "10K+", label: "Lines of Code" },
  { value: "5+", label: "Tech Stacks" },
];

export const ORBS = [
  { size: 380, x: "80%", y: "-10%", delay: 0 },
  { size: 280, x: "-5%", y: "60%", delay: 1.2 },
  { size: 180, x: "50%", y: "75%", delay: 2.5 },
];