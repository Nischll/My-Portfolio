import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// const jetbrains = JetBrains_Mono({
//   subsets: ["latin"],
//   variable: "--font-mono",
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://nischalshrestha91.com.np"),
  title: "Nischal Shrestha",
  icons: {
    icon: [
      "/favicon.ico",
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    // other: [
    //   {
    //     rel: "android-chrome",
    //     url: "/android-chrome-192x192.png",
    //   },
    // ],
  },
  manifest: "/manifest.json",
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
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nischal Shrestha - Frontend Developer",
      },
    ],
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
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Nischal Shrestha",
              url: "https://nischalshrestha91.com.np",
              image: "https://nischalshrestha91.com.np/og-image.png",
              jobTitle: "Frontend Developer",
              description:
                "Frontend Developer specializing in React, Next.js, TypeScript",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kathmandu",
                addressCountry: "NP",
              },
              sameAs: [
                "https://www.linkedin.com/in/nischal-shrestha-career",
                "https://github.com/Nischll",
              ],
            }),
          }}
        />
        {/* Wrap everything in a client-side layout */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
