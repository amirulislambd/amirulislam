import AboutClient from "@/components/about/AboutClient";
import Image from "next/image";
import { TECH_STACK, STATS } from "@/components/about/AboutData";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
  HiOutlineHeart,
} from "react-icons/hi";

import heroPng from '@/assets/hero.png'

const WHAT_I_DO = [
  {
    icon: HiOutlineCode,
    title: "Full Stack Development",
    desc: "I build production-grade web apps using the MERN stack.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Performance Focused",
    desc: "I believe in blazing-fast, pixel-perfect UIs.",
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Islamic Scholar",
    desc: "Completed Dawra-e-Hadith with first-class honours.",
  },
  {
    icon: HiOutlineHeart,
    title: "Mentoring & Teaching",
    desc: "Passionate about helping students grow.",
  },
];

export default function AboutPage() {
  return (
    <AboutClient>
      <div
        className="relative rounded-[2.5rem] border transition-all duration-500
        bg-white dark:bg-[#0b1326]/50 border-slate-200 dark:border-white/10 
        shadow-[0_20px_50px_rgba(124,77,255,0.08)] dark:shadow-2xl
        p-8 sm:p-16 overflow-hidden"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50" />

        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-slate-900 dark:text-white">
            Developer. <span className="about-gradient-text">Scholar.</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
            I&apos;m{" "}
            <span className="text-purple-600 dark:text-purple-400 font-bold">
              Amirul Islam
            </span>{" "}
            — a Full Stack Developer specializing in MERN.
          </p>
        </div>

        {/* Bio & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 flex justify-center">
            {/* Image Hover: Scale and Rotate */}
            <div className="group relative w-64 h-80 sm:w-72 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 dark:border-slate-800 ring-1 ring-slate-200 dark:ring-white/10 transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
              <Image
                src={heroPng}
                alt="Amirul Islam"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I love turning ideas into{" "}
              <span className="text-slate-900 dark:text-white font-semibold">
                blazing-fast, pixel-perfect
              </span>{" "}
              web applications. My journey is a blend of modern code and
              deep-rooted Islamic knowledge.
            </p>

            {/* Stats Cards: Scale & Shadow Hover */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group p-5 rounded-2xl border transition-all duration-300
                  bg-slate-50/50 border-slate-100 dark:bg-white/5 dark:border-white/10
                  hover:bg-white hover:shadow-xl hover:-translate-y-1 dark:hover:bg-white/10"
                >
                  <p className="text-2xl font-black bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110 origin-left">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-tighter font-bold text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Services - Card Hover Effects */}
        <div className="mb-16">
          <h3 className="text-center font-bold text-slate-900 dark:text-white mb-8">
            Professional Services
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {WHAT_I_DO.map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-2xl border transition-all duration-300
                bg-white border-slate-200/60 shadow-sm hover:shadow-purple-500/10 hover:shadow-xl hover:-translate-y-1 dark:bg-white/5 dark:border-white/10"
              >
                <div className="flex gap-4">
                  <div className="p-3 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack - Hover Border Effect */}
        <div className="pt-5 border-t border-slate-100 dark:border-white/5">
          <h1 className="text-center font-bold text-slate-900 dark:text-white mb-8">
            Tech Stack
          </h1>
          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl border min-w-[85px] 
          /* ডিফল্ট বর্ডার */
          bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10 
          /* হোভার ইফেক্টস */
          transition-all duration-500 hover:-translate-y-2 hover:shadow-lg 
          hover:bg-white dark:hover:bg-white/10
          /* বর্ডার কালার অ্যাড করা হলো */
          hover:border-purple-500/50 dark:hover:border-purple-400/50"
              >
                <tech.icon
                  size={22}
                  style={{ color: tech.color !== "inherit" ? tech.color : undefined }}
                  className={`opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300 ${tech.color === "inherit" ? "text-slate-900 dark:text-white" : ""}`}
                />
                <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AboutClient>
  );
}
