"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenuFold2Fill, RiMenuUnfold2Line } from "react-icons/ri";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import logo from "@/assets/logo.png";

const NAV_LINKS = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
];

// ─── Theme Toggle button ───────────────────────────────────────────────────────
function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-9 h-9" />;

  const dark = resolvedTheme === "dark";
  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border"
      style={{
        background: dark ? "rgba(167,139,250,0.12)" : "rgba(124,77,255,0.08)",
        borderColor: dark ? "rgba(167,139,250,0.35)" : "rgba(124,77,255,0.25)",
        color: dark ? "#a78bfa" : "#7c4dff",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
          animate={{ rotate: 0,   opacity: 1, scale: 1   }}
          exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.22 }}
          className="absolute"
        >
          {dark ? <HiOutlineMoon size={18} /> : <HiOutlineSun size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname  = usePathname();
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  // Default true (dark) until mounted to avoid flash
  const dark = !mounted || resolvedTheme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-400 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ───────────────────────────────────── */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div
              className="w-9 h-9 rounded-full overflow-hidden border-2 shadow-lg transition-all duration-300"
              style={{
                borderColor: dark ? "rgba(167,139,250,0.5)" : "rgba(124,77,255,0.35)",
                boxShadow: dark ? "0 0 12px rgba(167,139,250,0.3)" : "none",
              }}
            >
              <Image
                src={logo}
                alt="Amirul Islam"
                width={36}
                height={36}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span
              className="hidden sm:block text-sm font-bold tracking-wide"
              style={{ color: dark ? "#e2e8f0" : "#0f172a" }}
            >
              Amirul<span style={{ color: "#7c4dff" }}>.dev</span>
            </span>
          </Link>

          {/* ── Desktop links ──────────────────────────── */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ name, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={name}
                  href={href}
                  className="relative px-4 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{
                    color: active
                      ? "#7c4dff"
                      : dark ? "#94a3b8" : "#475569",
                  }}
                >
                  {name}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: dark
                          ? "rgba(124,77,255,0.15)"
                          : "rgba(124,77,255,0.08)",
                        border: "1px solid rgba(124,77,255,0.25)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ── Right side: Theme toggle + hamburger ───── */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Hamburger (mobile only) */}
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-xl transition-colors duration-200"
              style={{ color: dark ? "#94a3b8" : "#475569" }}
            >
              {open ? <RiMenuFold2Fill /> : <RiMenuUnfold2Line />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
          >
            <nav
              className="flex flex-col gap-1 px-4 pb-4 pt-2 border-t"
              style={{ borderColor: "var(--glass-border)" }}
            >
              {NAV_LINKS.map(({ name, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={name}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: active
                        ? dark ? "rgba(124,77,255,0.18)" : "rgba(124,77,255,0.10)"
                        : "transparent",
                      color: active
                        ? "#7c4dff"
                        : dark ? "#94a3b8" : "#475569",
                      border: active ? "1px solid rgba(124,77,255,0.25)" : "1px solid transparent",
                    }}
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