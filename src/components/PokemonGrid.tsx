"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { PokemonSummary, PokemonTypeName } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import {
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

interface PokemonGridProps {
  initialPokemon: PokemonSummary[];
}

const ITEMS_PER_PAGE_DEFAULT = 24;

export function PokemonGrid({ initialPokemon }: PokemonGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<PokemonTypeName | "all">("all");
  const [sortBy, setSortBy] = useState<
    "id-asc" | "id-desc" | "name-asc" | "name-desc"
  >("id-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(ITEMS_PER_PAGE_DEFAULT);

  const gridTopRef = useRef<HTMLDivElement>(null);

  // Filter and sort Pokemon
  const filteredPokemon = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return initialPokemon
      .filter((p) => {
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesId =
          p.id.toString() === query ||
          p.formattedId.toLowerCase().includes(query);

        const matchesSearch = !query || matchesName || matchesId;
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

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType, sortBy, itemsPerPage]);

  const totalPages = Math.max(1, Math.ceil(filteredPokemon.length / itemsPerPage));

  const paginatedPokemon = useMemo(() => {
    if (itemsPerPage >= filteredPokemon.length) {
      return filteredPokemon;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPokemon.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPokemon, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSortBy("id-asc");
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, filteredPokemon.length);

  return (
    <div id="explore" ref={gridTopRef} className="space-y-8 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#E6E0D4] pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#78756F]">
            Directory
          </span>
          <h2 className="mt-1 text-3xl sm:text-4xl font-black tracking-tight text-[#141413]">
            Explore Pokémon
          </h2>
          <p className="mt-1 text-sm text-[#524E48]">
            Find a Pokémon and discover what makes it unique.
          </p>
        </div>

        {/* Handwritten Annotation */}
        <div className="hidden sm:flex items-center gap-1.5 text-base font-handwritten text-[#524E48] rotate-[2deg]">
          <span>Full Gen I Index</span>
          <span className="text-sm">↓</span>
        </div>
      </div>

      {/* Large Editorial Search Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalResults={initialPokemon.length}
      />

      {/* Results Header Counter & Items Per Page */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#78756F]">
        <div className="flex items-center gap-2">
          <span>
            Showing{" "}
            <strong className="text-[#141413]">
              {filteredPokemon.length > 0 ? `${startIndex}–${endIndex}` : 0}
            </strong>{" "}
            of {filteredPokemon.length} Pokémon
            {(searchQuery || selectedType !== "all") && " (filtered)"}
          </span>

          {(searchQuery || selectedType !== "all") && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 font-semibold text-[#141413] underline underline-offset-2 hover:text-black cursor-pointer ml-2"
            >
              <RotateCcw className="h-3 w-3" />
              Reset filters
            </button>
          )}
        </div>

        {/* Items per page selector */}
        {filteredPokemon.length > 12 && (
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <span className="text-[11px] text-[#78756F]">Per page:</span>
            <div className="inline-flex rounded-full border border-[#E0D9CB] bg-white p-0.5 text-xs">
              {[24, 48, 151].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setItemsPerPage(count)}
                  className={`rounded-full px-3 py-0.5 text-xs font-semibold transition-colors cursor-pointer ${
                    itemsPerPage === count
                      ? "bg-[#141413] text-white"
                      : "text-[#524E48] hover:text-[#141413]"
                  }`}
                >
                  {count === 151 ? "All" : count}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
      {filteredPokemon.length > 0 ? (
        <>
          <div key={`grid-page-${currentPage}-${searchQuery}-${selectedType}`} className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 animate-fade-in">
            {paginatedPokemon.map((pokemon, idx) => (
              <div
                key={pokemon.id}
                style={{
                  animationDelay: `${Math.min(idx * 35, 400)}ms`,
                }}
                className="animate-fade-in fill-mode-both"
              >
                <PokemonCard pokemon={pokemon} />
              </div>
            ))}
          </div>

          {/* Minimalist Editorial Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pokemon list pagination"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E6E0D4] pt-8"
            >
              <div className="text-xs text-[#78756F]">
                Page <span className="font-bold text-[#141413]">{currentPage}</span> of{" "}
                <span className="font-bold text-[#141413]">{totalPages}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Previous button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#E0D9CB] bg-white px-3 text-xs font-semibold text-[#141413] shadow-2xs transition-colors hover:bg-[#F5F2EA] disabled:pointer-events-none disabled:opacity-30 cursor-pointer"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {getPageNumbers().map((p, idx) =>
                    typeof p === "number" ? (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePageChange(p)}
                        aria-current={currentPage === p ? "page" : undefined}
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer ${
                          currentPage === p
                            ? "bg-[#141413] text-white shadow-xs"
                            : "border border-[#E0D9CB] bg-white text-[#524E48] hover:border-[#141413] hover:text-[#141413]"
                        }`}
                      >
                        {p}
                      </button>
                    ) : (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-1 text-xs text-[#78756F]"
                      >
                        {p}
                      </span>
                    )
                  )}
                </div>

                {/* Next button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="inline-flex h-9 items-center gap-1 rounded-full border border-[#E0D9CB] bg-white px-3 text-xs font-semibold text-[#141413] shadow-2xs transition-colors hover:bg-[#F5F2EA] disabled:pointer-events-none disabled:opacity-30 cursor-pointer"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </nav>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[28px] border border-dashed border-[#D5CEBF] bg-white/60 p-8 text-center">
          <div className="mb-3 rounded-full bg-[#FAF5DB] p-3 text-[#7A6318]">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-[#141413]">
            No Pokémon Found
          </h3>
          <p className="mt-1 max-w-md text-sm text-[#78756F]">
            We couldn&apos;t find any Pokémon matching{" "}
            {searchQuery && (
              <span className="font-semibold text-[#141413]">
                &ldquo;{searchQuery}&rdquo;
              </span>
            )}
            {selectedType !== "all" && (
              <span> with type &ldquo;{selectedType}&rdquo;</span>
            )}
            . Try clearing your filters.
          </p>
          <button
            onClick={handleResetFilters}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#141413] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-black active:scale-98 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Clear Search & Filters
          </button>
        </div>
      )}
    </div>
  );
}
