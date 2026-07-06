import AboutClient from "@/components/about/AboutClient";
import GitHubHeatmap from "@/components/about/GitHubHeatmap";
import Image from "next/image";
import { SKILLS, STATS, EDUCATION, EXPERIENCE } from "@/components/about/AboutData";
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineAcademicCap,
  HiOutlineHeart,
  HiOutlineBriefcase,
} from "react-icons/hi";
import {
  HiOutlineSparkles,
  HiOutlineRocketLaunch,
  HiOutlineCubeTransparent
} from "react-icons/hi2";


import heroPng from '@/assets/hero.png'

export const metadata = {
  title: "About Amirul Islam | Full Stack Developer — Skills, Education & Experience",
  description:
    "Learn about Amirul Islam — a Full Stack Web Developer from Dhaka, Bangladesh. Proficient in React, Next.js, Node.js, MongoDB, and Flutter. View skills, education, and work experience.",
  alternates: {
    canonical: "https://amirulislam.vercel.app/about",
  },
  keywords: [
    "about Amirul Islam",
    "Amirul Islam skills",
    "Amirul Islam experience",
    "Amirul Islam education",
    "full stack developer skills Bangladesh",
    "MERN stack developer skills",
    "React developer Dhaka",
    "Next.js developer experience",
    "web developer portfolio Bangladesh",
    "Amirul Islam background",
  ],
  openGraph: {
    title: "About Amirul Islam | Full Stack Developer",
    description:
      "Full Stack Web Developer from Dhaka, Bangladesh. Expert in MERN Stack, Next.js, and Flutter. View skills, experience & education.",
    url: "https://amirulislam.vercel.app/about",
    siteName: "Amirul Islam — Full Stack Developer",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Amirul Islam — Full Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Amirul Islam | Full Stack Developer",
    description:
      "MERN & Next.js expert from Dhaka, Bangladesh. View skills, experience & education.",
    creator: "@amirulislambd",
    images: ["/og-image.jpg"],
  },
};


const WHAT_I_DO = [
  {
    icon: HiOutlineCode,
    title: "Full Stack Development",
    desc: "I build production-grade web apps using the MERN stack.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-blue-500"
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Performance Focused",
    desc: "I believe in blazing-fast, pixel-perfect UIs.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500"
  },
  {
    icon: HiOutlineAcademicCap,
    title: "Analytical Thinker",
    desc: "Leveraging structured logic and deep research skills to solve complex engineering problems.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500"
  },
  {
    icon: HiOutlineHeart,
    title: "Mentoring & Teaching",
    desc: "Passionate about helping new developers grow.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500"
  },
];

export default function AboutPage() {
  return (
    <AboutClient>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        
        {/* Header Section */}
        <div className="text-center mb-16 ">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-sm font-bold mb-6 animate-fade-in">
            <HiOutlineRocketLaunch className="animate-bounce" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter text-slate-900 dark:text-white leading-tight">
            Developer. <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Scholar.</span> Adventurer.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            I&apos;m <span className="text-slate-900 dark:text-white font-bold">Amirul Islam</span> — a Full Stack Developer on a mission to build meaningful digital products that bridge the gap between technology and purpose.
          </p>
        </div>

        {/* Bio Section with Image */}
        <div className="grid gap-12  items-center mb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-10">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 blur-3xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-square sm:aspect-[4/5] max-w-lg mx-auto rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-2">
              <Image
                src={heroPng}
                alt="Amirul Islam"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                 <HiOutlineSparkles className="text-purple-500" />
                 Building the Future
              </h3>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                My programming journey started with a deep curiosity for how the internet works. What began as a hobby soon turned into a passion for building <span className="text-purple-500 font-bold underline decoration-purple-500/30 underline-offset-8">full-stack applications</span> that solve real-world problems.
              </p>
              <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                My background in <span className="text-blue-500 font-bold">advanced academic studies</span> has given me a unique perspective on learning. The discipline, deep research methodology, and logical deduction required in classical studies perfectly complement the analytical thinking needed for software engineering.
              </p>
            </div>

          </div>
          </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-purple-500/50"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <HiOutlineCubeTransparent size={48} />
                  </div>
                  <p className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm uppercase tracking-widest font-black text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
        </div>


        {/* Skills Section - Redesigned as Bento Grid */}
        <div className="mb-20">
          <div className="flex flex-col items-center text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-black mb-4 text-slate-900 dark:text-white">Technical Arsenal</h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <div 
                key={category} 
                className={`relative group p-1 rounded-[2.5rem] bg-gradient-to-br transition-all duration-700 hover:scale-[1.02] shadow-xl ${
                  idx === 0 ? "from-purple-500/20 to-blue-500/20" : 
                  idx === 1 ? "from-blue-500/20 to-emerald-500/20" : 
                  "from-emerald-500/20 to-amber-500/20"
                }`}
              >
                <div className="relative h-full p-8 sm:p-10 rounded-[2.4rem] bg-white dark:bg-[#0f172a] border border-slate-100 dark:border-white/5 overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full group-hover:bg-purple-500/10 transition-all duration-700" />
                  
                  <h4 className="text-2xl font-black mb-8 capitalize text-slate-900 dark:text-white flex items-center justify-between">
                    {category}
                    <span className="text-slate-300 dark:text-slate-700 text-4xl">0{idx + 1}</span>
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {items.map((tech) => (
                      <div 
                        key={tech.name} 
                        className="group/item flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-100 dark:border-white/5 transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:shadow-lg hover:border-purple-500/30"
                      >
                        <tech.icon 
                          size={32} 
                          style={{ color: tech.color !== "inherit" ? tech.color : undefined }} 
                          className={`transition-transform duration-500 group-hover/item:scale-125 group-hover/item:rotate-6 ${tech.color === "inherit" ? "text-slate-900 dark:text-white" : ""}`} 
                        />
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 items-start">
          {/* Education */}
          <div className="space-y-12">
            <h3 className="text-3xl font-black flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-500 shrink-0">
                <HiOutlineAcademicCap size={32} />
              </div>
              Education
            </h3>
            <div className="space-y-8">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="group relative flex gap-6 h-full">
                  <div className="flex flex-col items-center mt-2">
                    <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7] z-10 shrink-0" />
                    {idx !== EDUCATION.length - 1 && <div className="w-0.5 h-full bg-purple-500/20 -mt-2" />}
                    {idx === EDUCATION.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-purple-500/20 to-transparent -mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="h-full p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white dark:group-hover:bg-white/[0.05] group-hover:shadow-2xl flex flex-col">
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-[10px] font-black uppercase tracking-widest mb-4">
                        {edu.duration}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{edu.degree}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-4 leading-relaxed">{edu.institution}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">{edu.desc}</p>
                      {edu.result && (
                        <div className="mt-auto inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold text-[11px] w-fit max-w-full">
                           <span className="truncate whitespace-normal leading-tight">{edu.result}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-12">
            <h3 className="text-3xl font-black flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500 shrink-0">
                <HiOutlineBriefcase size={32} />
              </div>
              Experience
            </h3>
            <div className="space-y-8">
              {EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="group relative flex gap-6 h-full">
                  <div className="flex flex-col items-center mt-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_15px_#3b82f6] z-10 shrink-0" />
                    {idx !== EXPERIENCE.length - 1 && <div className="w-0.5 h-full bg-blue-500/20 -mt-2" />}
                    {idx === EXPERIENCE.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-blue-500/20 to-transparent -mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="h-full p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white dark:group-hover:bg-white/[0.05] group-hover:shadow-2xl flex flex-col">
                      <span className="inline-block w-fit px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-4">
                        {exp.duration}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{exp.role}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium text-sm mb-4 leading-relaxed">{exp.company}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-grow">{exp.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Services Section - More Professional */}
        <div className="pt-16 border-t border-slate-100 dark:border-white/10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Expertise & Services</h3>
            <p className="text-slate-500 dark:text-slate-400 font-medium">How I can help bring your ideas to life</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHAT_I_DO.map((item) => (
              <div
                key={item.title}
                className="group relative p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-slate-50 dark:bg-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${item.iconColor}`}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-purple-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Heatmap */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <GitHubHeatmap />
        </div>

      </div>
    </AboutClient>
  );
}
