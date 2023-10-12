"use client";

import { routes } from "@/lib/links";
import { useRouter } from "next/navigation";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Toaster } from "react-hot-toast";

type sectionNameType = (typeof routes)[number]["label"];

type ContextT = {
  activeSection: sectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionNameType>>;
};

const Context = createContext({} as ContextT);

export default function ActiveSectionprovider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<sectionNameType>("Home");

  const router = useRouter();

  useEffect(() => {
    const pathname = window.location.href.split("#")[1] as sectionNameType;

    // if (!pathname) setActiveSection("Home");
    // else setActiveSection(pathname);

    if (pathname) {
      setActiveSection(pathname);
      router.push(window.location.href);
    }
  }, []);

  return (
    <Context.Provider value={{ activeSection, setActiveSection }}>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "dark:bg-gray-800 dark:text-gray-300",
        }}
      />
      {children}
    </Context.Provider>
  );
}

export const useActiveSectionprovider = () => useContext(Context);
