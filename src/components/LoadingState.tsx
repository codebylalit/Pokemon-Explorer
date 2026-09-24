import React from "react";

export function PokemonCardSkeleton() {
  return (
    <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/60 bg-white p-5 shadow-xs animate-pulse dark:border-stone-800 dark:bg-stone-900">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="h-3 w-10 rounded-md bg-stone-200 dark:bg-stone-800" />
          <div className="h-5 w-24 rounded-md bg-stone-200 dark:bg-stone-800" />
        </div>
      </div>

      <div className="my-6 flex h-32 items-center justify-center">
        <div className="h-28 w-28 rounded-full bg-stone-200 dark:bg-stone-800" />
      </div>

      <div className="flex gap-2 pt-2 border-t border-stone-100 dark:border-stone-800">
        <div className="h-5 w-14 rounded-full bg-stone-200 dark:bg-stone-800" />
        <div className="h-5 w-14 rounded-full bg-stone-200 dark:bg-stone-800" />
      </div>
    </div>
  );
}

export function PokemonGridSkeleton({ count = 20 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array.from({ length: count }).map((_, idx) => (
        <PokemonCardSkeleton key={idx} />
      ))}
    </div>
  );
}

export function PokemonDetailSkeleton() {
  return (
    <div className="mx-auto max-w-5xl space-y-6 animate-pulse">
      {/* Back Button Skeleton */}
      <div className="h-9 w-24 rounded-xl bg-stone-200 dark:bg-stone-800" />

      {/* Main Hero Card */}
      <div className="rounded-3xl border border-stone-200/80 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="h-4 w-16 rounded-md bg-stone-200 dark:bg-stone-800" />
            <div className="h-10 w-48 rounded-lg bg-stone-200 dark:bg-stone-800" />
            <div className="flex gap-2">
              <div className="h-6 w-16 rounded-full bg-stone-200 dark:bg-stone-800" />
              <div className="h-6 w-16 rounded-full bg-stone-200 dark:bg-stone-800" />
            </div>
            <div className="h-16 w-full rounded-xl bg-stone-100 dark:bg-stone-800/50" />
          </div>

          <div className="flex items-center justify-center">
            <div className="h-56 w-56 rounded-full bg-stone-200 dark:bg-stone-800" />
          </div>
        </div>
      </div>

      {/* Secondary Cards Skeleton */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="h-72 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800" />
        <div className="h-72 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800" />
      </div>
    </div>
  );
}
