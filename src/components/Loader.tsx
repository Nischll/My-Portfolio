"use client";

export default function Loader({ label = "Loading…" }: { label?: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#FAF7F4] to-background"
    >
      <p className="text-xs font-semibold tracking-widest uppercase text-[#A86B3E]/80 mb-6">
        Nischal Shrestha
      </p>
      {/* Spinner — accent-colored ring */}
      <div className="relative">
        <div
          className="size-12 rounded-full border-2 border-[#E8DDD4]"
          aria-hidden
        />
        <div
          className="absolute inset-0 size-12 rounded-full border-2 border-transparent border-t-[#A86B3E] animate-spin"
          aria-hidden
        />
      </div>
      {label && (
        <p className="mt-5 text-sm font-medium text-[#5C4B45] tracking-wide">
          {label}
        </p>
      )}
      <span className="sr-only">{label}</span>
    </div>
  );
}
