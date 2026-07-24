import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
import LoadingProvider from "@/app/components/shared/LoadingProvider";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({
  weight: ['400', '600', '700', '900'],
  subsets: ["latin"],
});

export const metadata = {
  title: "Jahidul Islam | Portfolio",
  description: "Crafting digital experiences with precision and passion.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ThemeProvider>
        <LoadingProvider>
          {children}
          </LoadingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}