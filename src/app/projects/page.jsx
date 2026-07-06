import ProjectsSection from "@/components/projects/ProjectsSection";

export const metadata = {
  title: "Projects — Amirul Islam | Full Stack Developer Portfolio",
  description:
    "Explore production-ready web applications built by Amirul Islam — Full Stack Developer from Bangladesh. Projects using MERN Stack, Next.js, Firebase, and Flutter with live demos and source code.",
  alternates: {
    canonical: "https://amirulislam.vercel.app/projects",
  },
  keywords: [
    "Amirul Islam projects",
    "Amirul Islam portfolio projects",
    "full stack developer projects Bangladesh",
    "MERN stack projects",
    "Next.js projects portfolio",
    "React developer projects",
    "Node.js projects",
    "MongoDB projects",
    "web application portfolio",
    "Veluxora car rental",
    "Mango Books project",
    "ZapShift logistics",
  ],
  openGraph: {
    title: "Projects — Amirul Islam | Full Stack Developer",
    description:
      "Production-grade web apps built with MERN, Next.js & Flutter by Amirul Islam. Live demos included.",
    url: "https://amirulislam.vercel.app/projects",
    siteName: "Amirul Islam — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amirul Islam Projects — Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Amirul Islam | Full Stack Developer",
    description:
      "Production-grade web apps built with MERN, Next.js & Flutter. Live demos included.",
    creator: "@amirulislambd",
    images: ["/og-image.jpg"],
  },
};


import { PROJECTS_DATA } from "@/data/projectsData";

// Server component — renders ProjectsSection with pre-fetched data
export default function ProjectsPage() {
  return <ProjectsSection projects={PROJECTS_DATA} />;
}
