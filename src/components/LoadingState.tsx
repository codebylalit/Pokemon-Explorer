import React from "react";

export function PokemonCardSkeleton() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#E6E0D4] bg-white/70 p-6 shadow-2xs animate-pulse">
      <div className="space-y-2">
        <div className="h-3 w-10 rounded-full bg-[#E0D9CB]" />
        <div className="h-5 w-28 rounded-md bg-[#E0D9CB]" />
      </div>

      <div className="my-6 flex h-32 items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-[#E0D9CB]/70" />
      </div>

      <div className="flex gap-2 pt-2 border-t border-[#F0ECE1]">
        <div className="h-5 w-14 rounded-full bg-[#E0D9CB]" />
        <div className="h-5 w-14 rounded-full bg-[#E0D9CB]" />
      </div>
    </div>
  );
}

export function PokemonGridSkeleton({ count = 16 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: count }).map((_, idx) => (
        <PokemonCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export function PokemonDetailSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 space-y-8 animate-pulse">
      {/* Back button */}
      <div className="h-8 w-28 rounded-full bg-[#E0D9CB]" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Card */}
        <div className="lg:col-span-5 h-96 rounded-[32px] bg-white/70 border border-[#E6E0D4]" />

        {/* Right Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="h-44 rounded-[28px] bg-white border border-[#E6E0D4]" />
          <div className="h-64 rounded-[28px] bg-white border border-[#E6E0D4]" />
          <div className="h-44 rounded-[28px] bg-white border border-[#E6E0D4]" />
        </div>
      </div>
    </div>
  );
}
