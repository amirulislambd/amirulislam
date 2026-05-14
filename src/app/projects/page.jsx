// app/projects/page.jsx — SERVER COMPONENT (SEO + metadata)

import ProjectsSection from "@/components/projects/ProjectsSection";



export const metadata = {
  title: "Projects — Amirul Islam | Full Stack Developer",
  description:
    "Explore production-grade web applications built by Amirul Islam using MERN stack, Next.js, and Flutter. Real-world projects with live demos.",
  keywords: [
    "Amirul Islam",
    "Full Stack Developer",
    "MERN stack projects",
    "Next.js projects",
    "React developer Bangladesh",
    "web applications",
    "portfolio projects",
  ],
  openGraph: {
    title: "Projects — Amirul Islam",
    description: "Production-grade web apps built with MERN, Next.js & Flutter.",
    url: "https://amirulislam.dev/projects",
    siteName: "Amirul Islam Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Amirul Islam",
    description: "Production-grade web apps built with MERN, Next.js & Flutter.",
  },
};

// Static project data lives on the server — SEO crawlers read this directly
export const PROJECTS_DATA = [
  {
    id: "mangobooks",
    title: "MangoBooks",
    tagline: "Discover. Read. Manage.",
    description:
      "A full-featured book discovery and management platform. Users can browse, search, and manage their reading lists with a clean, responsive UI.",
    tech: ["Next.js", "MongoDB", "Tailwind CSS", "HeroUI"],
    liveUrl: "https://mango-books.vercel.app/",
    githubUrl: "https://github.com/amirulislambd",
    category: "Full Stack",
    accent: "#7c4dff",
    accentSecondary: "#a78bfa",
    featured: true,
  },
  {
    id: "zapshift",
    title: "ZapShift",
    tagline: "Logistics, redefined.",
    description:
      "A fast, modern logistics and shift management web app. Handles real-time scheduling, delivery tracking, and team coordination.",
    tech: ["MERN Stack", "Firebase", "Express.js", "JWT"],
    liveUrl: "https://zap-shift-e9cfa.web.app/",
    githubUrl: "https://github.com/amirulislambd",
    category: "Full Stack",
    accent: "#4cd7f6",
    accentSecondary: "#06b6d4",
    featured: true,
  },
  {
    id: "digitools",
    title: "DigiTools",
    tagline: "Your all-in-one dev toolkit.",
    description:
      "A digital tools platform providing developers with a suite of productivity tools in one place. Full-stack with authentication and dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://programming-assignment-5.vercel.app/",
    githubUrl: "https://github.com/amirulislambd",
    category: "Full Stack",
    accent: "#818cf8",
    accentSecondary: "#6366f1",
    featured: false,
  },
];

// Server component — renders ProjectsSection with pre-fetched data
export default function ProjectsPage() {
  return <ProjectsSection projects={PROJECTS_DATA} />;
}