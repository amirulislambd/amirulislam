import { PROJECTS_DATA } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  HiExternalLink,
  HiCode,
  HiArrowLeft,
  HiLightningBolt,
  HiChip,
} from "react-icons/hi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const btnPrimaryBg = `linear-gradient(135deg, ${project.accent} 0%, ${project.accentSecondary} 100%)`;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-purple-500 transition-colors mb-10 font-bold group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/50 p-8 sm:p-16 mb-12 shadow-2xl backdrop-blur-xl hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <HiOutlineRocketLaunch
              size={120}
              style={{ color: project.accent }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background: project.accent,
                  boxShadow: `0 0 15px ${project.accent}`,
                }}
              />
              <span
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: project.accent }}
              >
                {project.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black mb-4 text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p
              className="text-lg sm:text-2xl font-medium mb-10 opacity-80"
              style={{ color: project.accentSecondary }}
            >
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
              id="#projects" 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold shadow-xl transition-all duration-500 hover:scale-105 active:scale-95"
                style={{ background: btnPrimaryBg }}
              >
                <HiExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <HiCode size={20} />
                Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Left Column: Tech Stack & Description */}
          <div className="md:col-span-2 space-y-8">

            {/* Project Overview */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <HiLightningBolt className="text-purple-500" />
                Project Overview
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {project.description}
              </p>

              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-xl px-4 py-2 text-sm font-bold border bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-purple-500/50 hover:text-purple-500 transition-all duration-200 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Development Challenges */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-blue-500/10 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <HiChip className="text-blue-500" />
                Development Challenges
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </section>
          </div>

          {/* Right Column: Future Improvements */}
          <div className="space-y-8">
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl h-full hover:border-purple-500/30 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                Future Plans
              </h2>
              <div className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-20" />
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed pl-6 italic">
                  &quot;{project.improvements}&quot;
                </p>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}