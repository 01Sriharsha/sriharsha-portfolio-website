"use client";

import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";
import useTheme from "@/hooks/useTheme";

export default function ThemeChanger() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-gray-800/10 dark:border-gray-500 p-3 fixed bottom-5 right-5 
      md:bottom-10 md:right-10 font-light bg-teal-50 dark:bg-gray-800 hover:animate-spin z-[999]"
    >
      {theme === "dark" ? (
        <BiSun size="1.4rem" className="dark:text-white" />
      ) : (
        <BiMoon size="1.4rem" className="text-gray-700" />
      )}
    </button>
  );
}
