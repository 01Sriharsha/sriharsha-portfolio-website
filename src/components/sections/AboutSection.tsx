import React from "react";
import SectionHeading from "@/components/layout/SectionHeading";
import SlideYMotion from "@/components/framer-motion/SlideYMotion";

export default async function AboutSection() {
  return (
    <section id="about" className="w-full px-4 scroll-mt-24">
      <SlideYMotion type="tween" y={100} duration={0.5}>
        <SectionHeading>About Me</SectionHeading>

        <ul className="list-disc space-y-3 text-gray-900 dark:text-gray-400 [&_li]:leading-loose [&_span]:text-gray-800 [&_span]:font-semibold [&_span]:dark:text-gray-300">
          <li>
            I'm a full-stack developer with a passion for crafting exceptional
            digital experiences.
          </li>
          <li>
            I've completed my <span> High School(SSLC) </span>from
            <span> Jyothi High School, Mysore </span>
            with an aggregate of <span>89.28%.</span>
          </li>
          <li>
            My journey into the world of technology began with a solid
            foundation in computer science, earning my{" "}
            <span>Diploma in Computer Science </span>
            from <span>Government C.P.C Polytechnic, Mysore </span>
            in
            <span> 2023</span>
            &nbsp;with an aggregate of <span>9.3 CGPA.</span>
          </li>
          <li>
            Since then, I've been on a continuous quest to expand my knowledge
            and skills, honing my expertise in both front-end and back-end
            development.
          </li>
          <li>
            My educational background has provided me with a strong framework
            for problem-solving and a commitment to delivering high-quality
            code.
          </li>
          <li>
            I'm excited to embark on new challenges, solve complex problems, and
            create cutting-edge solutions.
          </li>
        </ul>
      </SlideYMotion>
    </section>
  );
}
