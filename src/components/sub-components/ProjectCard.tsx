import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import Collapse from "./Collapse";
import ScrollProgressMotion from "@/components/framer-motion/ScrollProgressMotion";
import { BsCodeSlash } from "react-icons/bs";

type ProjectCardProps = (typeof projectsData)[0];

export default async function ProjectCard({
  title,
  descrption,
  image,
  github,
  technologies,
  website,
  company,
}: ProjectCardProps) {
  return (
    <ScrollProgressMotion>
      <div
        className="group project-card flex justify-between items-center dark:text-gray-400  bg-gray-50
       my-4 py-4 rounded-xl overflow-hidden dark:bg-gray-900 transition ease-in-out duration-300 text-gray-700 border border-gray-400 dark:border-gray-700"
      >
        <div className="flex flex-col gap-2 justify-start w-full md:w-[55%] px-4">
          <div className="flex items-center gap-4 flex-wrap">
            <h3 className="text-2xl font-semibold capitalize">{title}</h3>
            {company && (
              <Link
                target="_blank"
                href={
                  "https://www.linkedin.com/company/bsq-technology-mysore/?originalSubdomain=in"
                }
                className="dark:bg-gray-700 text-gray-300 bg-gray-800 px-3 py-1 rounded-full text-xs flex items-center gap-1 mb-1"
              >
                <BsCodeSlash />
                {company}
              </Link>
            )}
          </div>

          <>
            <p className="hidden md:block">{descrption}</p>
            <Image
              src={image}
              alt={`Project I worked on - ${title}`}
              className="w-full h-44 object-cover block md:hidden"
              quality={95}
            />
            <Collapse>{descrption}</Collapse>
          </>

          <>
            <h4 className="text-base">Tech Stack: </h4>
            <div className="flex items-center gap-2 flex-wrap">
              {technologies.map((tech, i) => (
                <p
                  key={i}
                  className="rounded-full text-sm px-2 py-1 bg-gray-300 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tech}
                </p>
              ))}
            </div>
          </>

          <div className="flex justify-start gap-4 mt-3">
            {website && (
              <Link
                href={website}
                className="rounded-full bg-gray-800 text-gray-300 px-2 py-1 text-sm flex items-center gap-1 dark:bg-gray-600"
              >
                Website <FiExternalLink />
              </Link>
            )}
            <Link
              href={github}
              className="rounded-full bg-gray-800 text-gray-300 px-2 py-1 text-sm flex items-center gap-1 dark:bg-gray-600"
            >
              Github <AiFillGithub />
            </Link>
          </div>
        </div>

        <div className="h-64 group-even:justify-end md:w-[45%] overflow-hidden translate-x-12 rounded-lg img-container hidden md:block">
          <Image
            src={image}
            alt={`Project I worked on - ${title}`}
            className="w-full h-full object-cover md:object-left"
            quality={95}
          />
        </div>
      </div>
    </ScrollProgressMotion>
  );
}
