"use client";


export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020617] py-12 px-4 print:py-0 print:px-0 print:bg-white">
      {/* Print Button — hidden when printing */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="flex items-center gap-2 text-slate-500 hover:text-purple-500 transition-colors font-semibold"
        >
          ← Back to Portfolio
        </a>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg hover:shadow-purple-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          🖨 Print / Save as PDF
        </button>
      </div>

      {/* Resume Paper */}
      <div
        id="resume"
        className="max-w-4xl mx-auto bg-white dark:bg-[#0f172a] print:bg-white print:text-slate-900 rounded-[2rem] print:rounded-none shadow-2xl print:shadow-none border border-slate-200 dark:border-white/10 print:border-0 overflow-hidden"
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 print:bg-none px-8 py-10 print:px-8 print:py-8 print:border-b-2 print:border-slate-300">
          <h1 className="text-4xl font-black text-white print:text-slate-900 mb-1">Amirul Islam</h1>
          <p className="text-purple-200 print:text-purple-700 font-semibold text-lg mb-4">Full Stack Web Developer (MERN & Next.js)</p>
          <div className="flex flex-wrap gap-4 text-sm text-purple-100 print:text-slate-600">
            <span>📧 amirulislambd313@gmail.com</span>
            <span>🌐 amirulislam.vercel.app</span>
            <span>💼 github.com/amirulislambd</span>
            <span>📍 Dhaka, Bangladesh</span>
          </div>
        </div>

        <div className="p-8 print:p-8 space-y-8 print:space-y-6">

          {/* Summary */}
          <section>
            <h2 className="text-base font-black uppercase tracking-widest text-purple-600 mb-3 pb-1 border-b-2 border-purple-200 dark:border-purple-500/30 print:border-slate-300">
              Professional Summary
            </h2>
            <p className="text-slate-600 dark:text-slate-300 print:text-slate-700 leading-relaxed">
              Passionate Full Stack Web Developer with hands-on experience in building production-grade web applications using the MERN stack and Next.js. 
              Strong analytical mindset built through advanced academic studies and self-driven software engineering. 
              Focused on writing clean, scalable code and delivering high-performance user experiences.
            </p>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-base font-black uppercase tracking-widest text-purple-600 mb-4 pb-1 border-b-2 border-purple-200 dark:border-purple-500/30 print:border-slate-300">
              Technical Skills
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 print:grid-cols-2">
              {[
                { label: "Frontend", skills: "React.js, Next.js, JavaScript (ES6+), Tailwind CSS, Framer Motion" },
                { label: "Backend", skills: "Node.js, Express.js, REST API, JWT Authentication" },
                { label: "Database", skills: "MongoDB, Mongoose, Firebase Firestore" },
                { label: "Tools", skills: "Git, GitHub, Vercel, Postman, Figma, VS Code" },
              ].map(({ label, skills }) => (
                <div key={label}>
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900 text-sm mb-1">{label}</h3>
                  <p className="text-slate-500 dark:text-slate-400 print:text-slate-600 text-sm leading-relaxed">{skills}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-base font-black uppercase tracking-widest text-purple-600 mb-4 pb-1 border-b-2 border-purple-200 dark:border-purple-500/30 print:border-slate-300">
              Experience
            </h2>
            <div className="space-y-5 print:space-y-4">
              {[
                {
                  role: "Freelance Full Stack Developer",
                  company: "Independent Contractor",
                  duration: "2023 — Present",
                  points: [
                    "Architected and delivered full-stack web applications using Next.js, Node.js & MongoDB",
                    "Optimized application load times by up to 40% using SSR and caching strategies",
                    "Integrated secure payment gateways, authentication, and admin dashboards",
                  ],
                },
                {
                  role: "Open Source Contributor",
                  company: "GitHub Community",
                  duration: "2023 — Present",
                  points: [
                    "Contributed to public repositories with clean, maintainable code",
                    "Implemented complex UI/UX features with Framer Motion and Tailwind CSS",
                    "Consistently maintained 200+ GitHub contributions in 365 days",
                  ],
                },
              ].map((exp) => (
                <div key={exp.role} className="break-inside-avoid">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900">{exp.role}</h3>
                      <p className="text-purple-600 text-sm font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 print:text-slate-500 text-sm shrink-0 mt-0.5">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.points.map((p, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 print:text-slate-600 text-sm leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section>
            <h2 className="text-base font-black uppercase tracking-widest text-purple-600 mb-4 pb-1 border-b-2 border-purple-200 dark:border-purple-500/30 print:border-slate-300">
              Featured Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-5 print:grid-cols-2">
              {[
                {
                  name: "ZapShift",
                  desc: "Logistics & parcel management platform with real-time tracking, role-based dashboards, and Stripe payments.",
                  tech: "Next.js, MongoDB, Stripe, JWT",
                },
                {
                  name: "Veluxora",
                  desc: "Premium car rental SaaS with dynamic pricing, booking calendar, and SEO-optimized landing pages.",
                  tech: "Next.js, Firebase, Tailwind CSS",
                },
                {
                  name: "MangoBooks",
                  desc: "Full-stack digital library with authentication, book categorization, and admin dashboard.",
                  tech: "React, Node.js, MongoDB, Express",
                },
                {
                  name: "GymVortex",
                  desc: "Gym management system with trainer registry, class scheduling, and member analytics.",
                  tech: "Next.js, MongoDB, NextAuth",
                },
              ].map((project) => (
                <div key={project.name} className="break-inside-avoid p-4 rounded-xl border border-slate-200 dark:border-white/10 print:border-slate-300">
                  <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900 mb-1">{project.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 print:text-slate-600 text-xs mb-2 leading-relaxed">{project.desc}</p>
                  <p className="text-purple-600 text-xs font-bold">{project.tech}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-base font-black uppercase tracking-widest text-purple-600 mb-4 pb-1 border-b-2 border-purple-200 dark:border-purple-500/30 print:border-slate-300">
              Education
            </h2>
            <div className="space-y-4 print:space-y-3">
              {[
                {
                  degree: "Advanced Full Stack Web Development (MERN)",
                  institution: "Programming Hero",
                  duration: "2023 — Present",
                  note: "SCIC (Super Charged Intern Club) Member",
                },
                {
                  degree: "Dawra-e-Hadith — Masters in Islamic Studies",
                  institution: "Jamia Arabia Ashraful Uloom, Dhaka",
                  duration: "2023 — 2024",
                  note: "Jayed Jiddan (Very Good) — Al-Haiatul Ulya Board",
                },
              ].map((edu) => (
                <div key={edu.degree} className="flex items-start justify-between break-inside-avoid">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white print:text-slate-900 text-sm">{edu.degree}</h3>
                    <p className="text-slate-500 dark:text-slate-400 print:text-slate-600 text-sm">{edu.institution}</p>
                    {edu.note && <p className="text-emerald-600 text-xs font-semibold mt-0.5">{edu.note}</p>}
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 print:text-slate-500 text-sm shrink-0 ml-4">{edu.duration}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page { margin: 1cm; size: A4; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
}
