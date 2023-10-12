import React from "react";
import SectionHeading from "@/components/layout/SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectCard from "../sub-components/ProjectCard";

export default async function ProjectSection() {
  return (
    <section id="projects" className="w-full px-3 scroll-mt-24">
      <SectionHeading>My Projects</SectionHeading>
      <>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </>
    </section>
  );
}
