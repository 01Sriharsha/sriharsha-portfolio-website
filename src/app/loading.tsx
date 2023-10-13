import React from "react";
import { ImSpinner10 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="w-full h-[70vh] grid place-items-center">
      <ImSpinner10
        size="5.5rem"
        className="text-gray-800 dark:text-gray-200 animate-spin"
      />
    </div>
  );
}
