import React from "react";

export function PokemonCardSkeleton() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E6E0D4] bg-white/80 p-5 sm:p-6 shadow-2xs shimmer-wrapper">
      {/* Header: ID & Name Skeletons */}
      <div className="space-y-2">
        <div className="h-2.5 w-10 rounded-full bg-[#E0D9CB]" />
        <div className="h-5 w-28 rounded-md bg-[#EFECE6]" />
      </div>

      {/* Center: Soft Circular Silhouette Artwork Skeleton */}
      <div className="my-5 flex h-36 items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-[#FAF5EB] border border-[#EAE4D6] flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-[#EAE3D4]/60" />
        </div>
      </div>

      {/* Footer: Type Badge Skeletons */}
      <div className="flex items-center justify-between pt-2.5 border-t border-[#F0ECE1]">
        <div className="flex gap-1.5">
          <div className="h-5 w-14 rounded-full bg-[#FAF5EB] border border-[#EAE4D6]" />
          <div className="h-5 w-12 rounded-full bg-[#FAF5EB] border border-[#EAE4D6]" />
        </div>
        <div className="h-3 w-3 rounded-full bg-[#E0D9CB]/50" />
      </div>
    </div>
  );
}

export function PokemonGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, idx) => (
        <PokemonCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export function PokemonVisualStripSkeleton() {
  const heights = ["h-72", "h-80", "h-76", "h-72", "h-80", "h-76", "h-72"];

  return (
    <div className="my-12 sm:my-16">
      <div className="flex items-center justify-between mb-4">
        <div className="h-3 w-28 rounded-full bg-[#E0D9CB]" />
        <div className="h-4 w-20 rounded-full bg-[#E0D9CB]/60" />
      </div>

      <div className="flex items-center gap-5 overflow-x-auto py-6 no-scrollbar">
        {heights.map((h, idx) => (
          <div
            key={idx}
            className={`w-52 sm:w-60 shrink-0 rounded-[26px] border border-[#E6E0D4] bg-white/75 p-6 shimmer-wrapper flex flex-col justify-between ${h}`}
          >
            <div className="flex justify-between">
              <div className="h-2.5 w-8 rounded-full bg-[#E0D9CB]" />
              <div className="h-2.5 w-12 rounded-full bg-[#E0D9CB]" />
            </div>

            <div className="my-auto flex justify-center">
              <div className="h-24 w-24 rounded-full bg-[#FAF5EB] border border-[#EAE4D6]" />
            </div>

            <div className="pt-2 border-t border-[#F0ECE1] flex justify-between items-center">
              <div className="h-4 w-20 rounded-md bg-[#EFECE6]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#E0D9CB]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PokemonDetailSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 space-y-8">
      {/* Back button skeleton */}
      <div className="h-8 w-36 rounded-full bg-white border border-[#E0D9CB] shimmer-wrapper" />

      {/* Main Specimen & Details Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Specimen Showcase Card Skeleton */}
        <div className="lg:col-span-5 rounded-[32px] border border-[#E6E0D4] bg-white/80 p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] shimmer-wrapper flex flex-col items-center">
          <div className="h-4 w-28 rounded-full bg-[#E0D9CB] self-start" />

          {/* Large circular silhouette */}
          <div className="my-10 h-56 w-56 sm:h-64 sm:w-64 rounded-full bg-[#FAF5EB] border border-[#EAE4D6] flex items-center justify-center">
            <div className="h-32 w-32 rounded-full bg-[#EAE3D4]/50" />
          </div>

          {/* Vitals Bento Skeleton */}
          <div className="grid grid-cols-3 gap-3 w-full pt-4 border-t border-[#F0ECE1]">
            <div className="h-14 rounded-2xl bg-[#FAF5EB] border border-[#EAE4D6]" />
            <div className="h-14 rounded-2xl bg-[#FAF5EB] border border-[#EAE4D6]" />
            <div className="h-14 rounded-2xl bg-[#FAF5EB] border border-[#EAE4D6]" />
          </div>
        </div>

        {/* Right Column: Cards Skeletons */}
        <div className="lg:col-span-7 space-y-6">
          {/* Header Card Skeleton */}
          <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 shimmer-wrapper">
            <div className="h-3 w-32 rounded-full bg-[#E0D9CB]" />
            <div className="h-10 w-56 rounded-xl bg-[#EFECE6]" />
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-full bg-[#FAF5EB] border border-[#EAE4D6]" />
              <div className="h-6 w-16 rounded-full bg-[#FAF5EB] border border-[#EAE4D6]" />
            </div>
            <div className="h-12 w-full rounded-2xl bg-[#FAF5EB]/80 pt-2" />
          </div>

          {/* Base Stats Card Skeleton */}
          <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 shimmer-wrapper">
            <div className="flex justify-between border-b border-[#F0ECE1] pb-3">
              <div className="h-5 w-24 rounded-md bg-[#EFECE6]" />
              <div className="h-4 w-16 rounded-md bg-[#E0D9CB]" />
            </div>

            <div className="space-y-3 pt-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-3 w-20 rounded-full bg-[#E0D9CB]" />
                  <div className="h-3 w-8 rounded-full bg-[#E0D9CB]" />
                  <div className="h-2 flex-1 rounded-full bg-[#FAF5EB]" />
                </div>
              ))}
            </div>
          </div>

          {/* Abilities Card Skeleton */}
          <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 shimmer-wrapper">
            <div className="h-5 w-24 rounded-md bg-[#EFECE6]" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-11 rounded-2xl bg-[#FAF5EB] border border-[#EAE4D6]" />
              <div className="h-11 rounded-2xl bg-[#FAF5EB] border border-[#EAE4D6]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
