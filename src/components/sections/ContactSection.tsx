"use client";

import React, { useRef, useTransition } from "react";
import SectionHeading from "@/components/layout/SectionHeading";
import Link from "next/link";
import { sendEmail } from "@/actions/SendEmail";
import toast from "react-hot-toast";
import SlideYMotion from "@/components/framer-motion/SlideYMotion";
import { MAIL_ID } from "@/lib/links";
import { PiSpinnerGapBold, PiTelegramLogoFill } from "react-icons/pi";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isPending, startTransiton] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransiton(async () => {
      const { success, error } = await sendEmail(formData);
      if (error) {
        toast.error(error);
        return;
      }
      toast.success(success || "");
      formRef.current?.reset();
    });
  };

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
          action={handleSubmit}
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
          <button
            type="submit"
            disabled={isPending}
            className={`flex items-center gap-1 rounded-full px-4 py-2 my-2 bg-gray-800 text-gray-200 dark:bg-gray-600 hover:scale-105 transition duration-300 ease-in-out disabled:scale-100`}
          >
            {isPending ? (
              <>
                Sending..
                <PiSpinnerGapBold size="1.1rem" className="animate-spin" />
              </>
            ) : (
              <>
                Submit <PiTelegramLogoFill />
              </>
            )}
          </button>
        </form>
      </SlideYMotion>
    </section>
  );
}
