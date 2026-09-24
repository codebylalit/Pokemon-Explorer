import React from "react";
import { PokemonGridSkeleton } from "@/components/LoadingState";

export default function HomeLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-8 animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-44 w-full rounded-3xl bg-stone-200 dark:bg-stone-800" />

      {/* Search Skeleton */}
      <div className="h-12 w-full rounded-xl bg-stone-200 dark:bg-stone-800" />

      {/* Grid Skeleton */}
      <PokemonGridSkeleton count={20} />
    </div>
  );
}
