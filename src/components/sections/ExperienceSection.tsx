import React from "react";
import { experienceData } from "@/lib/data";
import SectionHeading from "../layout/SectionHeading";
import Collapse from "../sub-components/Collapse";
import { RxThickArrowRight } from "react-icons/rx";
import SlideLeftMotion from "../framer-motion/SlideLeftMotion";

export default async function ExperienceSection() {
  return (
    <section id="experience" className="w-full scroll-mt-24 px-3 md:px-5 overflow-x-hidden">
      <SectionHeading>My Experience</SectionHeading>

      <div className="relative border-l border-gray-700">
        {experienceData.map((data, i) => (
          <div key={i} className="ml-8 mt-14">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-[#ffe4e6] rounded-full -left-5 ring-8 ring-[#ffe4e6] dark:ring-gray-900 dark:bg-gray-600">
              <data.icon className="text-gray-800 dark:text-gray-200" />
            </span>

            <SlideLeftMotion index={i}>
              <div className="ml-2 flex flex-col gap-3 dark:bg-gray-900 p-4 rounded-lg ring-1 ring-gray-100/10 border border-gray-500 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {data.title}
                </h3>
                <div className="flex justify-between md:items-center gap-3 flex-col md:flex-row">
                  <h4 className="text-base font-medium text-gray-700 dark:text-white capitalize">
                    {data.company}, {data.location}
                  </h4>
                  <time className="block text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                    {data.duration}
                  </time>
                </div>
                <p className="text-gray-800 dark:text-gray-200 font-medium flex gap-1 items-center text-sm">
                  <RxThickArrowRight />
                  <span>{data.type}</span>
                </p>
                <ul className="space-y-2 ms-4 hidden md:block">
                  {data.description.map((desc, i) => (
                    <li
                      key={i}
                      className="list-disc text-sm md:text-base font-normal text-gray-700 dark:text-gray-400 leading-relaxed"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
                <Collapse>
                  <ul className="space-y-2 ms-4 mt-3">
                    {data.description.map((desc, i) => (
                      <li
                        key={i}
                        className="list-disc text-sm md:text-base font-normal text-gray-700 dark:text-gray-400 leading-relaxed"
                      >
                        {desc}
                      </li>
                    ))}
                  </ul>
                </Collapse>
                <div className="md:ms-3">
                  <h5 className="my-1 font-medium dark:text-gray-200 text-sm">
                    Tech Stack:{" "}
                  </h5>
                  <ul className="flex gap-2 my-2 flex-wrap">
                    {data.techstack.map((tech) => (
                      <li
                        key={tech}
                        className="text-gray-800 dark:bg-gray-600 dark:text-gray-300 px-2 py-1 rounded-full text-sm border border-gray-900 font-medium hover:bg-gray-800 hover:text-gray-200 transition duration-300 ease-in-out"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SlideLeftMotion>
          </div>
        ))}
      </div>
    </section>
  );
}
