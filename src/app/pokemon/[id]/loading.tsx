import React from "react";
import { PokemonDetailSkeleton } from "@/components/LoadingState";

export default function PokemonLoading() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      <PokemonDetailSkeleton />
    </div>
  );
}
