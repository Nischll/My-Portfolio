import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FAF7F4] to-background px-4">
      <div className="text-center max-w-md">
        <p className="text-sm font-semibold tracking-widest uppercase text-[#A86B3E] mb-2">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#3B2F2F] tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-[#4C3D36] text-lg mb-8 leading-relaxed">
          We&apos;re sorry—the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#A86B3E] text-white text-sm font-semibold rounded-lg shadow-md shadow-[#A86B3E]/25 hover:bg-[#8f5a34] hover:shadow-lg hover:shadow-[#A86B3E]/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#A86B3E] focus:ring-offset-2"
        >
          <Home className="size-4" aria-hidden />
          Back to home
        </Link>
      </div>
    </div>
  );
}
