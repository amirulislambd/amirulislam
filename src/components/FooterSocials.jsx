"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const SOCIALS = [
  { label: "GitHub",   href: "https://github.com/amirulislambd",    Icon: FaGithub,   color: "#333" },
  { label: "LinkedIn", href: "https://linkedin.com/in/amirulislambd", Icon: FaLinkedin, color: "#0077b5" },
  { label: "Twitter",  href: "https://twitter.com/amirulislambd",  Icon: FaTwitter,  color: "#1da1f2" },
  { label: "Facebook", href: "https://facebook.com/amirulislambd",   Icon: FaFacebook, color: "#1877f2" },
  { label: "Email",    href: "mailto:amirulislambd313@gmail.com",    Icon: HiOutlineMail, color: "#ea4335" },
];


export default function FooterSocials() {
  return (
    <div className="flex items-center gap-3">
      {SOCIALS.map(({ label, href, Icon, color }) => (
        <motion.a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-slate-600 dark:text-slate-400 transition-all hover:shadow-lg"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = color;
            e.currentTarget.style.borderColor = color + "40";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "";
            e.currentTarget.style.borderColor = "";
          }}
        >
          <Icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}