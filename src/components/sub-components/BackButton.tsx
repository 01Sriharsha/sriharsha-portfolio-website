"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-300 bg-gray-800 dark:bg-gray-700 px-4 py-1 rounded-md"
    >
      Back
    </button>
  );
}
