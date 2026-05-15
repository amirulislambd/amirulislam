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

import { PROJECTS_DATA } from "@/data/projectsData";


// Server component — renders ProjectsSection with pre-fetched data
export default function ProjectsPage() {
  return <ProjectsSection projects={PROJECTS_DATA} />;
}