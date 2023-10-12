"use client";

import { useActiveSectionprovider } from "@/context/ActiveSectionprovider";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function ContactMeLink() {
  const { setActiveSection } = useActiveSectionprovider();
  return (
    <Link
      href="#contact"
      className="flex gap-2 items-center rounded-full bg-gray-800 text-gray-200 py-3 px-4 hover:scale-105 transition duration-200"
      onClick={() => setActiveSection("Contact")}
    >
      <span>Contact me here</span>
      <BsArrowRight />
    </Link>
  );
}
