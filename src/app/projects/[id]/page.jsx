import { PROJECTS_DATA } from "@/data/projectsData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  HiExternalLink,
  HiCode,
  HiArrowLeft,
  HiLightningBolt,
  HiChip,
  HiCheckCircle,
} from "react-icons/hi";
import { HiOutlineRocketLaunch, HiOutlineCpuChip } from "react-icons/hi2";

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
    title: `${project.title} — Case Study | Amirul Islam`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = PROJECTS_DATA.find((p) => p.id === id);

  if (!project) notFound();

  const btnPrimaryBg = `linear-gradient(135deg, ${project.accent} 0%, ${project.accentSecondary} 100%)`;
  const cs = project.caseStudy;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-purple-500 transition-colors mb-10 font-bold group"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/50 p-8 sm:p-12 mb-12 shadow-2xl backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 flex flex-col lg:flex-row gap-10 items-center">
          <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
            <HiOutlineRocketLaunch size={120} style={{ color: project.accent }} />
          </div>

          <div className="relative z-10 flex-1 w-full">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full" style={{ background: project.accent, boxShadow: `0 0 15px ${project.accent}` }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: project.accent }}>
                {project.category}
              </span>
              {cs && (
                <span className="ml-2 px-3 py-0.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30">
                  Case Study
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl font-black mb-4 text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium mb-8 opacity-80" style={{ color: project.accentSecondary }}>
              {project.tagline}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-bold border bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-white font-bold shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{ background: btnPrimaryBg }}>
                <HiExternalLink size={20} /> Live Demo
              </a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 bg-white dark:bg-white/5 transition-all duration-300 hover:scale-105 active:scale-95">
                <HiCode size={20} /> Source Code
              </a>
            </div>
          </div>

          {project.image && (
            <div className="hidden lg:block relative w-full lg:w-5/12 min-h-[280px] shrink-0 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl">
              <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 hover:scale-105" priority />
            </div>
          )}
        </div>

        {/* CASE STUDY SECTION */}
        {cs ? (
          <div className="space-y-8">

            {/* Goal */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                🎯 The Goal
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                {cs.goal}
              </p>
            </section>

            {/* Architecture */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                <HiOutlineCpuChip className="text-blue-500" size={28} /> Tech Stack & Architecture
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {cs.architecture.map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-purple-500/30 transition-all duration-200">
                    <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: project.accent }}>{item.title}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                  <HiChip className="text-orange-500" size={26} /> Key Challenge
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cs.keyChallenge}
                </p>
              </section>

              <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-slate-900 dark:text-white">
                  <HiLightningBolt className="text-yellow-500" size={26} /> The Solution
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cs.solution}
                </p>
              </section>
            </div>

            {/* Impact */}
            <section className="rounded-[2rem] border border-purple-500/20 dark:border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/5 p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                🚀 Results & Impact
              </h2>
              <ul className="space-y-3">
                {cs.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <HiCheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={22} />
                    <span className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Future Plans */}
            <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                🔮 Future Plans
              </h2>
              <div className="relative pl-6">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-30" />
                <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  &quot;{project.improvements}&quot;
                </p>
              </div>
            </section>
          </div>
        ) : (
          /* Fallback for non-case-study projects */
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  <HiLightningBolt className="text-purple-500" /> Project Overview
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">{project.description}</p>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tag) => (
                    <span key={tag} className="rounded-xl px-4 py-2 text-sm font-bold border bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-purple-500/50 hover:text-purple-500 transition-all duration-200 cursor-default">{tag}</span>
                  ))}
                </div>
              </section>
              <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900 dark:text-white">
                  <HiChip className="text-blue-500" /> Development Challenges
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{project.challenges}</p>
              </section>
            </div>
            <div>
              <section className="rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b1326]/40 p-8 sm:p-10 shadow-xl h-full hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300">
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Future Plans</h2>
                <div className="relative pl-6">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-blue-500 rounded-full opacity-20" />
                  <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed italic">&quot;{project.improvements}&quot;</p>
                </div>
              </section>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}