import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillEye } from "react-icons/ai";
import { CV_LINK, GITHUB_LINK, LINKEDIN_LINK } from "@/lib/links";
import ContactMeLink from "../sub-components/ContactMeLink";
import SlideYMotion from "../framer-motion/SlideYMotion";

export default async function IntroSection() {
  return (
    <section id="home" className="w-full px-4 scroll-mt-36">
      <div className="flex flex-col justify-center items-center gap-6">
        <SlideYMotion y={-100} duration={0.6}>
          <div className="h-36 w-36">
            <Image
              src={"/MyPic.jpeg"}
              alt={"K Sriharsha's Pic"}
              height={1000}
              width={1000}
              quality={95}
              priority={true}
              className="h-full w-full rounded-full object-cover shadow-lg shadow-black/5 dark:shadow-white/5"
            />
          </div>
        </SlideYMotion>

        <SlideYMotion y={100} duration={0.6}>
          <p
            className="dark:text-slate-300 text-lg md:text-xl font-medium text-center tracking-wide text-gray-800"
            style={{ lineHeight: "2.5rem" }}
          >
            <span className="text-2xl font-bold dark:text-gray-100 block md:inline mb-1 md:m-0">
              Hello, I'm Sriharsha ,{" "}
            </span>
            <span>
              A passionate{" "}
              <span className="font-bold capitalize dark:text-gray-100">
                full-stack developer
              </span>{" "}
              who thrives on building websites and applications.{" "}
            </span>
            <span>
              Explore my work and discover how I can help you transform your
              digital ideas into reality.
            </span>
          </p>

          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
            <ContactMeLink />

            <div className="flex gap-3 items-center dark:text-gray-100">
              <Link
                target="_blank"
                href={CV_LINK}
                className="flex gap-2 items-center bg-gray-100 text-gray-800 rounded-full py-2 md:py-3 px-4 hover:scale-105 transition duration-200 border border-gray-700"
              >
                View CV <AiFillEye className="dark:text-gray-900" />
              </Link>

              <Link
                target="_blank"
                href={LINKEDIN_LINK}
                className="hover:scale-110 transition duration-200"
              >
                <AiFillLinkedin size="1.7rem" />
              </Link>

              <Link
                target="_blank"
                href={GITHUB_LINK}
                className="hover:scale-110 transition duration-200"
              >
                <AiFillGithub size="1.7rem" />
              </Link>
            </div>
          </div>
        </SlideYMotion>
      </div>
    </section>
  );
}
