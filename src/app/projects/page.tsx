import SectionHeading from "@/components/layout/SectionHeading";
import BackButton from "@/components/sub-components/BackButton";
import ProjectCard from "@/components/sub-components/ProjectCard";
import { projectsData } from "@/lib/data";
import Link from "next/link";
import React from "react";

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const { company } = searchParams;

  const Projects = company
    ? projectsData.filter((project) => project.company === company)
    : projectsData;

  return (
    <section className="w-full  scroll-mt-32">
      <div className="w-full relative pt-2 pb-0">
        <div className="absolute left-0 mt-1">
          <BackButton />
        </div>

        <SectionHeading>My Projects</SectionHeading>
      </div>

      {company && (
        <div className="flex justify-between items-center gap-3 dark:text-gray-300 pb-2 text-gray-800">
          <h3 className="text-base">Projects I've worked on at {company}</h3>
          <Link
            href="/projects"
            replace
            className="rounded-md bg-gray-200 text-gray-800 py-1 px-2"
          >
            All projects
          </Link>
        </div>
      )}

      <hr className="border-b border-b-gray-500" />
      <>
        {Projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </>
    </section>
  );
}
