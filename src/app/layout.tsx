import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavbar from "./components/TopNavbar";
import Sidebar from "./components/Sidebar";
import BottomNavbar from "./components/BottomNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imagix",
  description: "Transform your most complex visions into professional-grade images.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container`}
      >
        <TopNavbar />
        <Sidebar />
        <main className="lg:ml-64 pt-16 min-h-screen luminous-bg flex flex-col">
          {children}
        </main>
        <BottomNavbar />
      </body>
    </html>
  );
}
