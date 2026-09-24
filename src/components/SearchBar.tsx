"use client";

import React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { ALL_POKEMON_TYPES, TYPE_STYLES } from "@/lib/constants";
import { PokemonTypeName } from "@/types/pokemon";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: PokemonTypeName | "all";
  onTypeChange: (type: PokemonTypeName | "all") => void;
  sortBy: "id-asc" | "id-desc" | "name-asc" | "name-desc";
  onSortChange: (sort: "id-asc" | "id-desc" | "name-asc" | "name-desc") => void;
  totalResults: number;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  sortBy,
  onSortChange,
  totalResults,
}: SearchBarProps) {
  return (
    <div className="w-full space-y-4">
      {/* Top row: Search input + Sort dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-stone-400 dark:text-stone-500">
            <Search className="h-5 w-5" aria-hidden="true" />
          </div>

          <input
            type="text"
            id="pokemon-search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Pokémon by name (e.g. Pikachu, Charizard)..."
            className="w-full rounded-xl border border-stone-200 bg-white py-3 pr-10 pl-11 text-sm font-medium text-stone-900 placeholder:text-stone-400 shadow-xs transition-all duration-200 focus:border-red-500 focus:outline-hidden focus:ring-3 focus:ring-red-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:border-red-500"
            aria-label="Search Pokémon by name"
          />

          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 transition-colors"
              aria-label="Clear search query"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <div className="relative inline-flex items-center">
            <SlidersHorizontal className="pointer-events-none absolute left-3 h-4 w-4 text-stone-400" />
            <select
              value={sortBy}
              onChange={(e) =>
                onSortChange(
                  e.target.value as "id-asc" | "id-desc" | "name-asc" | "name-desc"
                )
              }
              className="appearance-none rounded-xl border border-stone-200 bg-white py-3 pr-8 pl-9 text-xs font-semibold text-stone-700 shadow-xs transition-all hover:border-stone-300 focus:border-red-500 focus:outline-hidden focus:ring-3 focus:ring-red-500/20 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700"
              aria-label="Sort Pokémon"
            >
              <option value="id-asc">ID: Low to High</option>
              <option value="id-desc">ID: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Type Filter Chips (horizontal scrollable on mobile) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-xs font-medium text-stone-400 dark:text-stone-500 pr-1 shrink-0">
          Filter:
        </span>

        <button
          type="button"
          onClick={() => onTypeChange("all")}
          className={`shrink-0 rounded-full px-3 py-1 font-semibold transition-all duration-150 ${
            selectedType === "all"
              ? "bg-stone-900 text-white shadow-xs dark:bg-stone-100 dark:text-stone-900"
              : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
          }`}
        >
          All ({totalResults})
        </button>

        {ALL_POKEMON_TYPES.map((type) => {
          const style = TYPE_STYLES[type];
          const isSelected = selectedType === type;

          return (
            <button
              key={type}
              type="button"
              onClick={() => onTypeChange(isSelected ? "all" : type)}
              className={`shrink-0 rounded-full px-3 py-1 font-semibold transition-all duration-150 ${
                isSelected
                  ? `${style.badgeBg} ring-2 ring-stone-900/20 dark:ring-white/20 shadow-xs scale-105`
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700"
              }`}
            >
              {style?.label || type}
            </button>
          );
        })}
      </div>
    </div>
  );
}
