import React from "react";
import SectionHeading from "@/components/layout/SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "../sub-components/ProjectCard";
import Link from "next/link";

export default async function ProjectSection() {
  return (
    <section id="projects" className="w-full px-3 scroll-mt-24">
      <SectionHeading>My Projects</SectionHeading>
      <>
        {projectsData.slice(0, 2).map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </>
      <div className="text-center mt-10">
        <Link
          href={"/projects"}
          className="text-gray-300 bg-gray-800 dark:bg-gray-700 px-4 py-2 rounded-full"
          scroll
        >
          More Projects
        </Link>
      </div>
    </section>
  );
}
