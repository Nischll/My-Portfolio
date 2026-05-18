import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nischal Shrestha | Frontend Developer - React & Next.js",
  description:
    "Frontend developer from Nepal specializing in React.js, Next.js, Express.js, TypeScript and Tailwind CSS. Available for freelance and full-time opportunities.",
  keywords: [
    "Frontend Developer Nepal",
    "React Developer Kathmandu",
    "Next.js Developer",
    "Express.js Developer",
    "Nischal Shrestha",
  ],
  authors: [{ name: "Nischal Shrestha" }],
  creator: "Nischal Shrestha",
  verification: { google: "_I8jyO_32V92eJNEDrv47xtlnLCn-UqKXRM1Ky4GifA" },
  
  // Open Graph — controls how your link looks when shared on LinkedIn, Facebook etc.
  openGraph: {
    title: "Nischal Shrestha | Frontend Developer",
    description:
      "Frontend developer from Nepal specializing in React, Next.js, Express.js and TypeScript.",
    url: "https://nischalshrestha91.com.np",
    siteName: "Nischal Shrestha Portfolio",
    locale: "en_US",
    type: "website",
  },

  // Controls Google search preview
  alternates: {
    canonical: "https://nischalshrestha91.com.np",
  },

  // Tells Google to index your site
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap everything in a client-side layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
