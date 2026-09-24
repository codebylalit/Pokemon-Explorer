import React from "react";
import {
  PokemonGridSkeleton,
  PokemonVisualStripSkeleton,
} from "@/components/LoadingState";

export default function HomeLoading() {
  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16 space-y-12">
      {/* Centered Editorial Hero Skeleton */}
      <section className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6 shimmer-wrapper py-6">
        {/* Pill skeleton */}
        <div className="h-6 w-48 rounded-full bg-[#E0D9CB]/70" />

        {/* 2-line title skeleton */}
        <div className="space-y-3 flex flex-col items-center">
          <div className="h-12 sm:h-16 w-80 sm:w-[480px] rounded-2xl bg-[#EFECE6]" />
          <div className="h-12 sm:h-16 w-56 sm:w-80 rounded-2xl bg-[#EFECE6]" />
        </div>

        {/* Subtitle skeleton */}
        <div className="h-4 w-72 sm:w-96 rounded-full bg-[#E0D9CB]/60" />

        {/* CTA pill skeleton */}
        <div className="h-11 w-40 rounded-full bg-[#141413]/15 mt-2" />
      </section>

      {/* Visual Strip Skeleton */}
      <PokemonVisualStripSkeleton />

      {/* Search & Grid Skeleton Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end border-b border-[#E6E0D4] pb-6">
          <div className="space-y-2">
            <div className="h-3 w-16 rounded-full bg-[#E0D9CB]" />
            <div className="h-8 w-48 rounded-xl bg-[#EFECE6]" />
          </div>
        </div>

        {/* Search Bar Skeleton */}
        <div className="h-12 w-full rounded-full bg-white border border-[#E0D9CB] shimmer-wrapper" />

        {/* Grid Skeleton */}
        <PokemonGridSkeleton count={12} />
      </section>
    </div>
  );
}
