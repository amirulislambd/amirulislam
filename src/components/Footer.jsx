import Link from "next/link";
import FooterSocials from "./FooterSocials";

const NAV_LINKS = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/40 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              Amirul<span className="text-[#7c4dff]">.dev</span>
            </span>
            <p className="text-sm leading-relaxed max-w-[280px] text-slate-600 dark:text-slate-400">
              Full Stack Developer crafting high-performance, animated web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
              Navigation
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {NAV_LINKS.map(({ name, href }) => (
                <Link key={name} href={href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-[#7c4dff] dark:hover:text-[#7c4dff] transition-colors">
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
              Connect
            </span>
            <FooterSocials />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} M. Amirul Islam. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 dark:border-[#7c4dff]/20 bg-slate-100 dark:bg-[#7c4dff]/5 text-[10px] font-bold text-slate-600 dark:text-slate-400">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
             Available for Freelance
          </div>
        </div>
      </div>
    </footer>
  );
}