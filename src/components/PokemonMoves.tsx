"use client";

import React, { useState } from "react";
import { formatName } from "@/lib/constants";
import { Swords, Search, X } from "lucide-react";

interface PokemonMovesProps {
  moves: string[];
}

export function PokemonMoves({ moves }: PokemonMovesProps) {
  const [moveSearch, setMoveSearch] = useState("");

  const filteredMoves = moves.filter((m) =>
    m.toLowerCase().includes(moveSearch.trim().toLowerCase())
  );

  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs dark:border-stone-800/80 dark:bg-stone-900">
      <div className="mb-4 flex flex-col gap-3 border-b border-stone-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-stone-800">
        <div className="flex items-center gap-2">
          <Swords className="h-5 w-5 text-indigo-500" />
          <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
            Learnable Moves
          </h2>
          <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-semibold text-stone-600 dark:bg-stone-800 dark:text-stone-300">
            {moves.length}
          </span>
        </div>

        {/* Move Search Input */}
        {moves.length > 8 && (
          <div className="relative w-full sm:w-56">
            <Search className="pointer-events-none absolute inset-y-0 left-2.5 my-auto h-3.5 w-3.5 text-stone-400" />
            <input
              type="text"
              value={moveSearch}
              onChange={(e) => setMoveSearch(e.target.value)}
              placeholder="Search moves..."
              className="w-full rounded-lg border border-stone-200 bg-stone-50 py-1.5 pr-7 pl-8 text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:border-indigo-500 focus:bg-white focus:outline-hidden dark:border-stone-800 dark:bg-stone-800/60 dark:text-stone-100 dark:placeholder:text-stone-500 dark:focus:bg-stone-900"
            />
            {moveSearch && (
              <button
                onClick={() => setMoveSearch("")}
                className="absolute inset-y-0 right-2 my-auto text-stone-400 hover:text-stone-600"
                aria-label="Clear move filter"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {filteredMoves.length > 0 ? (
        <div className="flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1">
          {filteredMoves.map((move) => (
            <span
              key={move}
              className="inline-flex items-center rounded-lg border border-stone-200/60 bg-stone-50 px-2.5 py-1 text-xs font-medium text-stone-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50/50 hover:text-indigo-900 dark:border-stone-800 dark:bg-stone-800/60 dark:text-stone-300 dark:hover:border-indigo-800 dark:hover:bg-indigo-950/30 dark:hover:text-indigo-300"
            >
              {formatName(move)}
            </span>
          ))}
        </div>
      ) : (
        <p className="py-4 text-center text-xs text-stone-600 dark:text-stone-300">
          No moves found matching &ldquo;{moveSearch}&rdquo;
        </p>
      )}
    </div>
  );
}
