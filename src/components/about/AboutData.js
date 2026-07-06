import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineLightningBolt, HiOutlineHeart, HiOutlineLibrary, HiOutlineBriefcase } from "react-icons/hi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiFirebase, SiFlutter, SiGit, SiFigma, SiPostman, SiVercel } from "react-icons/si";

export const SKILLS = {
  frontend: [
    { name: "React", icon: SiReact, color: "#61DAFB", level: 90 },
    { name: "Next.js", icon: SiNextdotjs, color: "inherit", level: 85 },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 95 },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 90 },
  ],

  backend: [
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063", level: 80 },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
    { name: "Express", icon: SiExpress, color: "inherit", level: 80 },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 75 },
  ],
  tools: [
    { name: "Git", icon: SiGit, color: "#F05032", level: 85 },
    { name: "Figma", icon: SiFigma, color: "#F24E1E", level: 70 },
    { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 80 },
    { name: "Vercel", icon: SiVercel, color: "inherit", level: 85 },
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
    role: "Freelance Full Stack Developer",
    company: "Independent Contractor",
    duration: "2023 — Present",
    desc: "Architecting and developing full-stack web applications for global clients. Optimized application load times by up to 40% using Next.js SSR and advanced caching strategies. Delivered secure, scalable, and responsive platforms using the MERN stack."
  },
  {
    role: "Open Source Contributor & Engineer",
    company: "GitHub Community",
    duration: "2023 — Present",
    desc: "Actively contributing to open-source projects, writing clean, maintainable code, and collaborating with developers worldwide. Consistently participating in code reviews and implementing complex UI/UX features with Framer Motion and Tailwind CSS."
  },
  {
    role: "Educator (Islamic Studies)",
    company: "Islamic Educational Institution",
    duration: "2022 — Present",
    desc: "Developing strong communication, analytical, and mentoring skills. Applying deep research methodologies and logical deduction from Islamic jurisprudence into structural problem-solving in software engineering."
  }
];

export const TESTIMONIALS = [
  {
    name: "Client from Upwork",
    role: "Startup Founder",
    text: "Amirul delivered our project ahead of schedule. His expertise in Next.js made our platform incredibly fast. Highly recommended!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    name: "Senior Developer",
    role: "Programming Hero Mentor",
    text: "An exceptional learner with a sharp logical mind. His code quality and ability to solve complex backend problems stand out from his peers.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"
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