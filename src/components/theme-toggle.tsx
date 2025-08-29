"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "~/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-14 h-8 bg-gray-200 rounded-full animate-pulse" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative cursor-pointer inline-flex h-8 w-14 items-center justify-center rounded-full border-2 transition-all duration-300 ease-in-out",
        "hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isDark ? "bg-gray-800 border-gray-600" : "bg-gray-100 border-gray-300"
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {/* Toggle Background */}
      <div
        className={cn(
          "absolute inset-1 rounded-full transition-all duration-300 ease-in-out",
          isDark
            ? "bg-gradient-to-r from-indigo-500 to-purple-600"
            : "bg-gradient-to-r from-yellow-400 to-orange-500"
        )}
      />

      {/* Toggle Circle */}
      <div
        className={cn(
          "relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 ease-in-out",
          isDark ? "translate-x-3" : "-translate-x-3"
        )}
      >
        {/* Icon */}
        <div className="text-xs">
          {isDark ? (
            <svg
              className="h-3 w-3 text-indigo-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-3 w-3 text-yellow-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Sparkle Effects */}
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-0 transition-opacity duration-300",
          isDark && "opacity-100"
        )}
      >
        <div className="absolute top-1 left-2 h-1 w-1 rounded-full bg-white opacity-60 animate-pulse" />
        <div className="absolute top-2 right-1 h-0.5 w-0.5 rounded-full bg-white opacity-40 animate-pulse delay-300" />
        <div className="absolute bottom-1 left-1 h-0.5 w-0.5 rounded-full bg-white opacity-50 animate-pulse delay-700" />
      </div>
    </button>
  );
}
