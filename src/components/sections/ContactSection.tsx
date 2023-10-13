"use client";

import React, { useRef } from "react";
import SectionHeading from "@/components/layout/SectionHeading";
import Link from "next/link";
import { sendEmail } from "@/actions/SendEmail";
import toast from "react-hot-toast";
import EmailSubmitBtn from "@/components/sub-components/EmailSubmitBtn";
import SlideYMotion from "@/components/framer-motion/SlideYMotion";
import { MAIL_ID } from "@/lib/links";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <section id="contact" className="w-full scroll-mt-24 mb-10">
      <SlideYMotion type="tween" y={100} duration={0.5}>
        <SectionHeading>Contact Me</SectionHeading>
        <p className="my-2 text-gray-900 dark:text-gray-400 text-center">
          Please contact me directly at{" "}
          <Link href={`mailto:${MAIL_ID}`} className="underline">
            {MAIL_ID}
          </Link>{" "}
          or through this form.
        </p>
        <form
          ref={formRef}
          className="w-full md:w-[80%] m-auto px-5 py-4 rounded-md"
          action={async (formData) => {
            const { success, error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(success || "");
            formRef.current?.reset();
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 my-3 w-full rounded-md border border-gray-700 focus:outline-none dark:bg-gray-300 dark:border-gray-300"
            // required
            maxLength={100}
          />
          <textarea
            rows={5}
            name="message"
            placeholder="Your Message"
            className="p-3 my-3 w-full rounded-md border border-gray-700 focus:outline-none dark:bg-gray-300 dark:border-gray-300"
            // required
            maxLength={500}
          />
          <EmailSubmitBtn />
        </form>
      </SlideYMotion>
    </section>
  );
}
