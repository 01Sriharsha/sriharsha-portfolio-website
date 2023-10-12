"use client";

import React from "react";
import SectionHeading from "../layout/SectionHeading";
import { AllSkills } from "@/lib/data";
import {Variants, motion } from "framer-motion";

const FadeInAnimationVariant:Variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 w-full scroll-mt-24 md:scroll-mt-44">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex gap-2 md:gap-4 items-center justify-center flex-wrap mt-8">
        {AllSkills.map((skill, index) => (
          <motion.li
            key={skill}
            className="capitalize px-3 py-1 rounded-md bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 mb-2"
            variants={FadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
        <li></li>
      </ul>
    </section>
  );
}
