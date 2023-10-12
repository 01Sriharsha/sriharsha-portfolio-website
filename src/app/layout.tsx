import Appbar from "@/components/layout/Appbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeChanger from "@/components/layout/ThemeChanger";
import ActiveSectionprovider from "@/context/ActiveSectionprovider";
import Footer from "@/components/layout/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K.Sriharsha | Personal Portfolio",
  description: "K.Sriharsha is a Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-theme w-full pt-28 min-h-screen relative`}
      >
        <ActiveSectionprovider>
          <ThemeChanger />
          <Appbar />
          {children}
          <Footer />
        </ActiveSectionprovider>
      </body>
    </html>
  );
}
