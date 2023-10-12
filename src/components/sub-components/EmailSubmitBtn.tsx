"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { PiTelegramLogoFill, PiSpinnerGapBold } from "react-icons/pi";

export default function EmailSubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center gap-1 rounded-full px-4 py-2 my-2 bg-gray-800 text-gray-200 dark:bg-gray-600 hover:scale-105 transition duration-300 ease-in-out disabled:scale-100`}
    >
      {pending ? (
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
  );
}
