"use client";

import React from "react";
import { Search, X, ArrowDownWideNarrow } from "lucide-react";
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
    <div className="w-full space-y-5">
      {/* Large Premium Editorial Search Bar & Sort Dropdown */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Large Editorial Search Field */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#78756F]">
            <Search className="h-5 w-5" aria-hidden="true" />
          </div>

          <input
            type="text"
            id="pokemon-search-input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search Pokémon..."
            className="w-full rounded-full border border-[#E0D9CB] bg-white py-3.5 pr-10 pl-12 text-sm font-medium text-[#141413] placeholder:text-[#948F85] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 focus:border-[#141413] focus:outline-hidden focus:ring-2 focus:ring-[#141413]/10"
            aria-label="Search Pokémon by name or ID"
          />

          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#78756F] hover:text-[#141413] transition-colors cursor-pointer"
              aria-label="Clear search"
              type="button"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Minimalist Sort Control */}
        <div className="flex items-center gap-2">
          <div className="relative inline-flex items-center">
            <ArrowDownWideNarrow className="pointer-events-none absolute left-3.5 h-3.5 w-3.5 text-[#78756F]" />
            <select
              value={sortBy}
              onChange={(e) =>
                onSortChange(
                  e.target.value as "id-asc" | "id-desc" | "name-asc" | "name-desc"
                )
              }
              className="appearance-none rounded-full border border-[#E0D9CB] bg-white py-3 pr-8 pl-9 text-xs font-semibold text-[#524E48] shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:border-[#141413] focus:border-[#141413] focus:outline-hidden cursor-pointer"
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

      {/* Type Filter Pills with Editorial Spacing */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
        <span className="text-xs font-medium text-[#78756F] shrink-0 pr-1">
          Type:
        </span>

        <button
          type="button"
          onClick={() => onTypeChange("all")}
          className={`shrink-0 rounded-full px-3.5 py-1.5 font-semibold transition-all duration-150 cursor-pointer ${
            selectedType === "all"
              ? "bg-[#141413] text-white shadow-xs"
              : "bg-white border border-[#E0D9CB] text-[#524E48] hover:border-[#141413] hover:text-[#141413]"
          }`}
        >
          All
        </button>

        {ALL_POKEMON_TYPES.map((type) => {
          const style = TYPE_STYLES[type];
          const isSelected = selectedType === type;

          return (
            <button
              key={type}
              type="button"
              onClick={() => onTypeChange(isSelected ? "all" : type)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 font-semibold transition-all duration-150 cursor-pointer ${
                isSelected
                  ? "bg-[#141413] text-white shadow-xs"
                  : `${style.cardBg} border ${style.cardBorder} ${style.badgeText} hover:border-[#141413]`
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
