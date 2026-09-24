"use client";

import React, { useEffect } from "react";
import { ErrorState } from "@/components/ErrorState";

export default function PokemonError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Pokemon Detail Error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <ErrorState
        title="Failed to Load Pokémon Details"
        message={error.message || "We could not fetch data for this Pokémon from PokeAPI. Please try again."}
        onRetry={() => reset()}
        showHomeLink={true}
      />
    </div>
  );
}
