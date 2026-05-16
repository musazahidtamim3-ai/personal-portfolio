import { Inter } from "next/font/google";
import "./globals.css";
import React from 'react';
// নতুন তৈরি করা ক্লায়েন্ট প্রোভাইডার ইমপোর্ট করুন (নিচে এর কোড দেওয়া আছে)
import LoadingProvider from "@/app/components/shared/LoadingProvider";

const inter = Inter({
  weight: ['400', '600', '700'],
  subsets: ["latin"],
});

// সার্ভার কম্পোনেন্টের মেটাডেটা আগের মতোই পারফেক্ট থাকবে
export const metadata = {
  title: "Jahidul Islam | Portfolio",
  description: "Crafting digital experiences with precision and passion.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme='dark'
      suppressHydrationWarning
      className={`${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden">
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}