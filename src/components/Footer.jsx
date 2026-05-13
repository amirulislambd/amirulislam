"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/amirulislambd",         Icon: FaGithub   },
  { label: "LinkedIn", href: "https://linkedin.com/in/amirulislambd",    Icon: FaLinkedin },
  { label: "Facebook", href: "https://facebook.com/amirulislambd",       Icon: FaFacebook },
  { label: "Email",    href: "mailto:amirulislam@example.com",           Icon: HiOutlineMail },
  { label: "LeetCode", href: "https://leetcode.com/amirulislambd",       Icon: SiLeetcode },
];

const NAV_LINKS = [
  { name: "Home",     href: "/" },
  { name: "About",    href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact",  href: "/contact" },
];

export default function Footer() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <footer
      className="w-full mt-auto border-t"
      style={{
        borderColor: "var(--glass-border)",
        background: dark
          ? "rgba(3,7,18,0.80)"
          : "rgba(248,250,252,0.90)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2 max-w-xs text-center md:text-left">
            <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
              Amirul<span style={{ color: "#7c4dff" }}>.dev</span>
            </span>
            <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Full Stack Developer building blazing-fast, pixel-perfect web experiences
              with MERN, Next.js &amp; Flutter.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "var(--text-secondary)" }}>
              Navigation
            </span>
            {NAV_LINKS.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-sm transition-colors duration-200 hover:text-[#7c4dff]"
                style={{ color: "var(--text-secondary)" }}
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "var(--text-secondary)" }}>
              Connect
            </span>
            <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border transition-all duration-200"
                  style={{
                    borderColor: "var(--glass-border)",
                    color: "var(--text-secondary)",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(124,77,255,0.45)";
                    e.currentTarget.style.color = "#7c4dff";
                    e.currentTarget.style.background = "rgba(124,77,255,0.10)";
                    e.currentTarget.style.boxShadow = "0 0 10px rgba(124,77,255,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--glass-border)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--glass-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            © {new Date().getFullYear()} Amirul Islam. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Built with{" "}
            <span style={{ color: "#7c4dff" }}>Next.js</span> &amp;{" "}
            <span style={{ color: "#4cd7f6" }}>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}