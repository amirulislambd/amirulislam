"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";
import FooterSocials from "./FooterSocials";

const FOOTER_LINKS = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] border-t border-white/5 pt-10 pb-6 sm:pt-16 sm:pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 md:mb-6 group">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white">
                Amirul <span className="text-purple-500">Islam</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 max-w-xs">
              Crafting high-performance MERN & Next.js applications with pixel-perfect precision and a focus on user experience.
            </p>
            <FooterSocials />
          </div>

          <div className="col-span-1 hidden sm:block">
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Quick Links</h4>
            <ul className="space-y-2 md:space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-slate-400 hover:text-purple-400 transition-colors text-xs md:text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Contact Info</h4>
            <ul className="space-y-3 md:space-y-5">
              <li className="flex items-start gap-3 text-slate-400">
                <HiOutlineMail className="text-purple-500 text-base md:text-lg shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm truncate">amirulislambd313@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <HiOutlinePhone className="text-purple-500 text-base md:text-lg shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">+880 1814-022917</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <HiOutlineLocationMarker className="text-purple-500 text-base md:text-lg shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>


        </div>


        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {currentYear} Amirul Islam. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span className="hover:text-white transition-colors">Made with ❤️ in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}