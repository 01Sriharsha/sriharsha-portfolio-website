import Link from "next/link";
import React from "react";
import { MdError, MdHome } from "react-icons/md";

export default function NotFound() {
  return (
    <div className="w-full h-[70vh] grid place-items-center text-gray-800 dark:text-gray-200">
      <div className="">
        <div className="text-[2rem] flex justify-center items-center gap-4">
          <MdError size="4rem" />
          <h2 className="font-bold text-[3rem]">Oops!</h2>
        </div>
        <div className="mt-4 font-medium flex items-center flex-col gap-2">
          Resource you are looking for Not Found!&nbsp;
          <Link
            href="/"
            replace
            className="underline mt-1 flex items-center gap-1"
          >
            Go to Home <MdHome size="1.3rem" />
          </Link>
        </div>
      </div>
    </div>
  );
}
