"use client";

import Link from "next/link";
import React from "react";
import { routes } from "@/lib/links";
import { useActiveSectionprovider } from "@/context/ActiveSectionprovider";
import { motion } from "framer-motion";

export default function Appbar() {
  const { activeSection, setActiveSection } = useActiveSectionprovider();

  return (
    <header className="relative">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="md:rounded-full w-full md:w-[650px] m-auto bg-gray-100 p-3 fixed top-0 inset-x-0 md:mt-4 flex justify-center dark:bg-gray-950 shadow-xl shadow-black/5 dark:shadow-white/5 
          bg-opacity-80 z-[999]"
      >
        <ul className="flex items-center justify-around w-full gap-4 flex-wrap py-1 px-4">
          {routes.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className={`${
                  activeSection?.toLowerCase() === label.toLocaleLowerCase()
                    ? "bg-gray-200 rounded-full text-gray-800 font-medium dark:bg-gray-700"
                    : "hover:text-gray-950 hover:font-medium dark:hover:text-gray-500"
                } text-[0.9rem] text-gray-800 dark:text-stone-300 transition px-2 py-1`}
                onClick={() => setActiveSection(label)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </header>
  );
}
