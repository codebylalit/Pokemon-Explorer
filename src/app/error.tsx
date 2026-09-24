"use client";

import React, { useEffect } from "react";
import { ErrorState } from "@/components/ErrorState";

export default function HomeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Homepage Error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <ErrorState
        title="Failed to Load Pokémon Directory"
        message={error.message || "An unexpected error occurred while communicating with PokeAPI. Please try again."}
        onRetry={() => reset()}
        showHomeLink={false}
      />
    </div>
  );
}
