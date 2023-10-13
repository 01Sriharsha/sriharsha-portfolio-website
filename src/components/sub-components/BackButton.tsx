"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="text-gray-300 bg-gray-800 dark:bg-gray-700 pl-2 pr-3 py-1 rounded-md flex items-center gap-1"
    >
      <BiArrowBack />
      Back
    </button>
  );
}
