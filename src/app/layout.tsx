import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carbon registry",
  description: "Carbon registry powered by Carbonable",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100`}>
        <Header />
        <main className="p-12 z-0 max-w-screen-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
