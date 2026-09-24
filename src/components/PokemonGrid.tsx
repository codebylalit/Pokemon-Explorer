"use client";

import React, { useMemo, useState } from "react";
import { PokemonSummary, PokemonTypeName } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import { AlertCircle, RefreshCw } from "lucide-react";

interface PokemonGridProps {
  initialPokemon: PokemonSummary[];
}

export function PokemonGrid({ initialPokemon }: PokemonGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<PokemonTypeName | "all">("all");
  const [sortBy, setSortBy] = useState<
    "id-asc" | "id-desc" | "name-asc" | "name-desc"
  >("id-asc");

  // Filter and sort Pokemon
  const filteredPokemon = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return initialPokemon
      .filter((p) => {
        // Name filter (case-insensitive)
        const matchesName = p.name.toLowerCase().includes(query);
        // ID filter support (e.g. typing "25" or "#025")
        const matchesId =
          p.id.toString() === query ||
          p.formattedId.toLowerCase().includes(query);

        const matchesSearch = !query || matchesName || matchesId;

        // Type filter
        const matchesType =
          selectedType === "all" || p.types.includes(selectedType);

        return matchesSearch && matchesType;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "id-asc":
            return a.id - b.id;
          case "id-desc":
            return b.id - a.id;
          case "name-asc":
            return a.name.localeCompare(b.name);
          case "name-desc":
            return b.name.localeCompare(a.name);
          default:
            return 0;
        }
      });
  }, [initialPokemon, searchQuery, selectedType, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSortBy("id-asc");
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Controls */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={initialPokemon.length}
      />

      {/* Results Header / Counter */}
      <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
        <span>
          Showing <strong className="text-stone-800 dark:text-stone-200">{filteredPokemon.length}</strong> of {initialPokemon.length} Pokémon
          {(searchQuery || selectedType !== "all") && " (filtered)"}
        </span>

        {(searchQuery || selectedType !== "all") && (
          <button
            onClick={handleResetFilters}
            className="flex items-center gap-1 font-semibold text-red-600 hover:text-red-700 dark:text-red-400 hover:underline cursor-pointer"
          >
            <RefreshCw className="h-3 w-3" />
            Reset filters
          </button>
        )}
      </div>

      {/* Grid or Empty State */}
      {filteredPokemon.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredPokemon.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50/50 p-8 text-center dark:border-stone-800 dark:bg-stone-900/40">
          <div className="mb-4 rounded-full bg-red-100 p-3 text-red-600 dark:bg-red-950/50 dark:text-red-400">
            <AlertCircle className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100">
            No Pokémon Found
          </h3>
          <p className="mt-1 max-w-md text-sm text-stone-500 dark:text-stone-400">
            We couldn&apos;t find any Pokémon matching{" "}
            {searchQuery && (
              <span className="font-semibold text-stone-800 dark:text-stone-200">
                &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {selectedType !== "all" && (
              <span> with type &ldquo;{selectedType}&rdquo;</span>
            )}
            . Try checking for typos or resetting your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-red-700 hover:shadow-md focus:outline-hidden focus:ring-3 focus:ring-red-500/20 active:scale-98 cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            Clear Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
