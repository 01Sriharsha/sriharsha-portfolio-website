"use client";

import React, { useState } from "react";

export default function Collapse({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex justify-start">
        <button
          className=" text-gray-200 bg-gray-800 dark:text-gray-200 text-sm 
          px-2 py-1 my-2 rounded-full"
          onClick={() => setCollapse(!collapse)}
        >
          {collapse ? "collapse" : "Read More.."}
        </button>
      </div>
      <div className={`px-2 ${collapse ? "block" : "hidden"}`}>{children}</div>
    </div>
  );
}
