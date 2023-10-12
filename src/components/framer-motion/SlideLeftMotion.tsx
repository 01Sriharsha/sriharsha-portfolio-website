"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideInMotionProps {
  children: ReactNode;
  index?: number;
}

export default function SlideLeftMotion({
  children,
  index = 0,
}: SlideInMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring", delay: 0.06 * index! },
      }}
      viewport={{ once: true }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
