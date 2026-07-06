"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineMail,
  HiOutlineDocumentText,
  HiOutlineSearch,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const COMMANDS = [
  {
    group: "Navigation",
    items: [
      { label: "Home", icon: HiOutlineHome, href: "/#home", isAnchor: true },
      { label: "About", icon: HiOutlineUser, href: "/#about", isAnchor: true },
      { label: "Projects", icon: HiOutlineCode, href: "/#projects", isAnchor: true },
      { label: "Contact", icon: HiOutlineMail, href: "/#contact", isAnchor: true },
    ],
  },
  {
    group: "Pages",
    items: [
      { label: "Resume / CV", icon: HiOutlineDocumentText, href: "/resume" },
    ],
  },
  {
    group: "Links",
    items: [
      { label: "GitHub Profile", icon: FaGithub, href: "https://github.com/amirulislambd", external: true },
      { label: "LinkedIn Profile", icon: FaLinkedin, href: "https://linkedin.com/in/amirulislambd", external: true },
    ],
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  // Open on Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const handleSelect = useCallback((href, external, isAnchor) => {
    setOpen(false);
    setSearch("");
    if (external) {
      window.open(href, "_blank", "noopener noreferrer");
    } else if (isAnchor) {
      // Smooth scroll to section
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  }, [router]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-[15vh] px-4"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f1629] rounded-[2rem] shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Command className="w-full" shouldFilter={true}>
          {/* Search Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-white/10">
            <HiOutlineSearch className="text-slate-400 shrink-0" size={20} />
            <Command.Input
              value={search}
              onValueChange={setSearch}
              placeholder="Search commands, pages, links..."
              className="w-full bg-transparent outline-none text-slate-900 dark:text-white placeholder:text-slate-400 text-base font-medium"
              autoFocus
            />
            <kbd className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400 text-xs font-mono shrink-0">
              ESC
            </kbd>
          </div>

          <Command.List className="max-h-[420px] overflow-y-auto p-3 space-y-1">
            <Command.Empty className="py-10 text-center text-slate-400 text-sm">
              No results found.
            </Command.Empty>

            {/* Theme Toggle */}
            <Command.Group heading="Actions" className="[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2">
              <Command.Item
                onSelect={toggleTheme}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-slate-700 dark:text-slate-300 aria-selected:bg-purple-500/10 aria-selected:text-purple-500 transition-colors"
              >
                {resolvedTheme === "dark"
                  ? <HiOutlineSun size={18} className="shrink-0" />
                  : <HiOutlineMoon size={18} className="shrink-0" />}
                <span className="font-medium">Switch to {resolvedTheme === "dark" ? "Light" : "Dark"} Mode</span>
              </Command.Item>
            </Command.Group>

            {COMMANDS.map((group) => (
              <Command.Group
                key={group.group}
                heading={group.group}
                className="[&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:font-black [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-widest [&_[cmdk-group-heading]]:text-slate-400 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2"
              >
                {group.items.map((item) => (
                  <Command.Item
                    key={item.label}
                    value={item.label}
                    onSelect={() => handleSelect(item.href, item.external, item.isAnchor)}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-slate-700 dark:text-slate-300 aria-selected:bg-purple-500/10 aria-selected:text-purple-500 transition-colors"
                  >
                    <item.icon size={18} className="shrink-0" />
                    <span className="font-medium flex-1">{item.label}</span>
                    {item.external && <HiOutlineExternalLink size={14} className="text-slate-400 shrink-0" />}
                    {item.isAnchor && (
                      <kbd className="hidden sm:flex items-center px-2 py-0.5 rounded bg-slate-100 dark:bg-white/10 text-[10px] font-mono text-slate-400">↵</kbd>
                    )}
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>

          {/* Footer */}
          <div className="flex items-center justify-between px-5 py-3 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">↑↓</kbd> Navigate</span>
              <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">↵</kbd> Select</span>
              <span className="flex items-center gap-1.5"><kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-white/10 font-mono text-[10px]">ESC</kbd> Close</span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">⌘K</span>
          </div>
        </Command>
      </div>
    </div>
  );
}
