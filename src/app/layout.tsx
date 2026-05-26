import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kwiko Technologies And Services Private Limited",
  description:
    "Premium AI and software solutions for ambitious startups and enterprises.",
  metadataBase: new URL("https://kwiko.ai"),
  openGraph: {
    title: "Kwiko Technologies And Services Private Limited",
    description:
      "Building AI-powered digital solutions and delivering scalable software for modern companies.",
    url: "https://kwiko.ai",
    siteName: "Kwiko Technologies And Services Private Limited",
    type: "website",
    images: [
      {
        url: "https://kwiko.ai/logo.png",
        width: 1200,
        height: 630,
        alt: "Kwiko Technologies And Services Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwiko Technologies And Services Private Limited",
    description:
      "Premium AI and software services for intelligent digital transformation.",
    creator: "@kwiko",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-white text-slate-900 antialiased min-h-screen ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
