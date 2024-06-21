import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import { NextUIProvider } from "@nextui-org/react";

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
      <body className={`${inter.className} bg-neutral-800 text-neutral-100`}>
        <Header />
        <main className="p-4 md:p-12 z-0 max-w-screen-2xl mx-auto min-h-screen">
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </main>
      </body>
    </html>
  );
}
