"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface SlideYMotionProps {
  children: ReactNode;
  type?: "tween" | "spring";
  y?: number;
  duration?: number;
}

export default function SlideYMotion({
  children,
  type,
  y,
  duration,
}: SlideYMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration, type: type ?? "spring" },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
