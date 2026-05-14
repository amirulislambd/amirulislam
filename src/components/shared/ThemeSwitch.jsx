"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "@gravity-ui/icons";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      role="switch"
      aria-checked={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-[31px] w-[51px] items-center rounded-full transition-all duration-300 focus:outline-none ${
        isDark
          ? "bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]"
          : "bg-blue-500"
      }`}
    >
      <span
        className={`inline-flex size-[27px] items-center justify-center rounded-full bg-white shadow transition-all duration-300 ${
          isDark ? "translate-x-[22px] shadow-lg" : "translate-x-[2px]"
        }`}
      >
        {isDark ? (
          <Moon className="size-4 text-cyan-600" />
        ) : (
          <Sun className="size-4 text-blue-600" />
        )}
      </span>
    </button>
  );
}