"use client";

import { useEffect, useState, lazy, Suspense } from "react";
import Loader from "@/components/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = lazy(() => import("./Navbar"));
const Footer = lazy(() => import("./Footer"));

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simulate loader
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Refresh ScrollTrigger after everything mounts
  useEffect(() => {
    if (!ready) return;
    const handleRefresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleRefresh);

    // Initial refresh after next animation frame
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => window.removeEventListener("resize", handleRefresh);
  }, [ready]);

  return (
    <>
      {ready ? (
        <div className="container mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<Loader />}>
            <Navbar />
          </Suspense>
          <main>{children}</main>
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        </div>
      ) : (
        <Loader label="Loading Page..." />
      )}
    </>
  );
}
