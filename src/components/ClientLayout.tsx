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
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;

    // Refresh once after fonts/images have had time to load
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 100);
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 600);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", handleResize);
    };
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
