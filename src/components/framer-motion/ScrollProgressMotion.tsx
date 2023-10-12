"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgressMotion({
  children,
}: {
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 0.7], [0.6, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      {children}
    </motion.div>
  );
}
