import React, { ReactNode } from "react";

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-3xl text-center mb-4">
      {children}
    </h2>
  );
}
