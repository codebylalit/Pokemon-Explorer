"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { PokemonSummary, PokemonTypeName } from "@/types/pokemon";
import { PokemonCard } from "./PokemonCard";
import { SearchBar } from "./SearchBar";
import {
  AlertCircle,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
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

  // Reset to page 1 whenever filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedType, sortBy, itemsPerPage]);

  const totalPages = Math.max(1, Math.ceil(filteredPokemon.length / itemsPerPage));

  // Paginated slice
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

  // Generate visible page numbers for pagination
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
    <div ref={gridTopRef} className="space-y-6 scroll-mt-24">
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

      {/* Results Header / Counter & Items per page selector */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-stone-500 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <span>
            Showing{" "}
            <strong className="text-stone-800 dark:text-stone-200">
              {filteredPokemon.length > 0 ? `${startIndex}–${endIndex}` : 0}
            </strong>{" "}
            of {filteredPokemon.length} Pokémon
            {(searchQuery || selectedType !== "all") && " (filtered)"}
          </span>

          {(searchQuery || selectedType !== "all") && (
            <button
              onClick={handleResetFilters}
              className="flex items-center gap-1 font-semibold text-red-600 hover:text-red-700 dark:text-red-400 hover:underline cursor-pointer ml-2"
            >
              <RefreshCw className="h-3 w-3" />
              Reset filters
            </button>
          )}
        </div>

        {/* Items per page selector */}
        {filteredPokemon.length > 12 && (
          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <span className="text-[11px] text-stone-400">Per page:</span>
            <div className="inline-flex rounded-lg border border-stone-200 bg-white p-0.5 dark:border-stone-800 dark:bg-stone-900 text-xs">
              {[24, 48, 151].map((count) => (
                <button
                  key={count}
                  type="button"
                  onClick={() => setItemsPerPage(count)}
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-colors ${
                    itemsPerPage === count
                      ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 shadow-xs"
                      : "text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
                  }`}
                >
                  {count === 151 ? "All" : count}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Grid or Empty State */}
      {filteredPokemon.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {paginatedPokemon.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <nav
              aria-label="Pokemon list pagination"
              className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-200/80 pt-6 dark:border-stone-800/80"
            >
              <div className="text-xs text-stone-500 dark:text-stone-400">
                Page <span className="font-bold text-stone-800 dark:text-stone-200">{currentPage}</span> of{" "}
                <span className="font-bold text-stone-800 dark:text-stone-200">{totalPages}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {/* First page button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                  aria-label="First page"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-xs transition-colors hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  <ChevronsLeft className="h-4 w-4" />
                </button>

                {/* Previous page button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-xs transition-colors hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                {/* Page numbers */}
                <div className="hidden sm:flex items-center gap-1">
                  {getPageNumbers().map((p, idx) =>
                    typeof p === "number" ? (
                      <button
                        key={p}
                        type="button"
                        onClick={() => handlePageChange(p)}
                        aria-current={currentPage === p ? "page" : undefined}
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold transition-all ${
                          currentPage === p
                            ? "bg-red-600 text-white shadow-xs"
                            : "border border-stone-200 bg-white text-stone-700 hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
                        }`}
                      >
                        {p}
                      </button>
                    ) : (
                      <span
                        key={`ellipsis-${idx}`}
                        className="px-1.5 text-xs text-stone-400"
                      >
                        {p}
                      </span>
                    )
                  )}
                </div>

                {/* Next page button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-xs transition-colors hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>

                {/* Last page button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                  aria-label="Last page"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-700 shadow-xs transition-colors hover:bg-stone-50 disabled:pointer-events-none disabled:opacity-40 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:bg-stone-800"
                >
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </div>
            </nav>
          )}
        </>
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
