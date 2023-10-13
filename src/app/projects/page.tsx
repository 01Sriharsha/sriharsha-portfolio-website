import SectionHeading from "@/components/layout/SectionHeading";
import BackButton from "@/components/sub-components/BackButton";
import ProjectCard from "@/components/sub-components/ProjectCard";
import { projectsData } from "@/lib/data";
import React from "react";

export default async function ProjectsPage() {
  return (
    <section className="w-full scoll-mt-24">
      <div className="w-full relative pt-2 pb-0">
        <div className="absolute left-0 mt-1">
          <BackButton />
        </div>

        <SectionHeading>My Projects</SectionHeading>
      </div>
      <>
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </>
    </section>
  );
}
