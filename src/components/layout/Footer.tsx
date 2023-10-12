import React from "react";

export default function Footer() {
  return (
    <footer className="w-full pb-4 pt-2 text-center dark:text-gray-200">
      <small>
        copyrights &copy; {new Date().getFullYear()} K Sriharsha - All Rights Reserved.
      </small>
    </footer>
  );
}
