"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFold2Fill, RiMenuUnfold2Line } from "react-icons/ri";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact", href: "/#contact" },
];

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-10 h-10" />;

  const dark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 border shadow-inner overflow-hidden group"
      style={{
        background: dark ? "rgba(167,139,250,0.12)" : "rgba(124,77,255,0.08)",
        borderColor: dark ? "rgba(167,139,250,0.3)" : "rgba(124,77,255,0.2)",
        color: dark ? "#a78bfa" : "#7c4dff",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          className="absolute"
        >
          {dark ? <HiOutlineMoon size={20} /> : <HiOutlineSun size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [clickedLink, setClickedLink] = useState("/#hero");
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-nav py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-10 h-10 rounded-xl overflow-hidden border-2 shadow-[0_0_15px_rgba(124,77,255,0.3)] transition-all duration-300"
              style={{
                borderColor: dark
                  ? "rgba(167,139,250,0.4)"
                  : "rgba(124,77,255,0.3)",
              }}
            >
              <Image
                src={logo}
                alt="Amirul Islam"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`hidden sm:block text-lg font-bold tracking-tight leading-none transition-colors duration-300 ${dark ? "text-white" : "text-slate-900"}`}
              >
                Amirul <span className="text-purple-500">Islam</span>
              </span>
              <div className="hidden sm:flex items-center gap-1.5 mt-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Available for hire
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2 p-1 rounded-2xl bg-white/5 dark:bg-black/10 backdrop-blur-md border border-white/10 shadow-inner">
            {NAV_LINKS.map(({ name, href }) => {
              const active = clickedLink === href;
              return (
                <Link
                  key={name}
                  href={href}
                  onClick={() => setClickedLink(href)}
                  className={`group relative px-5 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                    dark
                      ? "text-slate-400 hover:text-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <span className="relative z-10">{name}</span>
                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500 transition-all duration-300 ${
                      active
                        ? "w-4/5 -translate-x-1/2"
                        : "w-0 -translate-x-1/2 group-hover:w-4/5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              aria-label="Open command palette"
              onClick={() =>
                window.dispatchEvent(
                  new KeyboardEvent("keydown", {
                    key: "k",
                    ctrlKey: true,
                    bubbles: true,
                  }),
                )
              }
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:border-purple-500/50 hover:text-purple-500 group"
              style={{
                background: dark
                  ? "rgba(255,255,255,0.04)"
                  : "rgba(0,0,0,0.04)",
                borderColor: dark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.08)",
                color: dark ? "#94a3b8" : "#64748b",
              }}
            >
              <HiOutlineSearch
                size={15}
                className="group-hover:text-purple-500 transition-colors"
              />
              <span>Search</span>
              <span className="flex items-center gap-0.5 ml-1">
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 dark:bg-white/10 border border-white/10">
                  Ctrl
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/10 dark:bg-white/10 border border-white/10">
                  K
                </kbd>
              </span>
            </button>
            <ThemeToggle />
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 border bg-white/5 border-white/10"
              style={{ color: dark ? "#94a3b8" : "#475569" }}
            >
              {open ? <RiMenuFold2Fill /> : <RiMenuUnfold2Line />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full px-4 pt-2 pb-6 glass-nav border-t border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map(({ name, href }) => {
                const active = clickedLink === href;
                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => {
                      setClickedLink(href);
                      setOpen(false);
                    }}
                    className={`px-6 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 ${
                      active
                        ? "bg-linear-to-r from-purple-600 to-blue-500 text-white shadow-lg"
                        : "bg-white/5 text-slate-400"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
