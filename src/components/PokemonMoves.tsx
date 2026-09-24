"use client";

import React, { useState } from "react";
import { formatName } from "@/lib/constants";
import { Search, X } from "lucide-react";

interface PokemonMovesProps {
  moves: string[];
}

export function PokemonMoves({ moves }: PokemonMovesProps) {
  const [moveSearch, setMoveSearch] = useState("");

  const filteredMoves = moves.filter((m) =>
    m.toLowerCase().includes(moveSearch.trim().toLowerCase())
  );

  return (
    <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="mb-5 flex flex-col gap-3 border-b border-[#F0ECE1] pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#78756F]">
            Combat
          </span>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold tracking-tight text-[#141413]">
              Learnable Moves
            </h2>
            <span className="rounded-full bg-[#EFECE6] px-2 py-0.5 text-xs font-semibold text-[#524E48]">
              {moves.length}
            </span>
          </div>
        </div>

        {/* Search Move Filter */}
        {moves.length > 8 && (
          <div className="relative w-full sm:w-48">
            <Search className="pointer-events-none absolute inset-y-0 left-3 my-auto h-3.5 w-3.5 text-[#948F85]" />
            <input
              type="text"
              value={moveSearch}
              onChange={(e) => setMoveSearch(e.target.value)}
              placeholder="Search moves..."
              className="w-full rounded-full border border-[#E0D9CB] bg-[#FAF8F5] py-1.5 pr-7 pl-8 text-xs font-medium text-[#141413] placeholder:text-[#948F85] focus:border-[#141413] focus:bg-white focus:outline-hidden"
            />
            {moveSearch && (
              <button
                onClick={() => setMoveSearch("")}
                className="absolute inset-y-0 right-2.5 my-auto text-[#948F85] hover:text-[#141413] cursor-pointer"
                aria-label="Clear move search"
              >
                <X className="h-3 w-3" />
              </button>
            )}
          </div>
        )}
      </div>

      {filteredMoves.length > 0 ? (
        <div className="flex max-h-64 flex-wrap gap-2 overflow-y-auto pr-1">
          {filteredMoves.map((move) => (
            <span
              key={move}
              className="inline-flex items-center rounded-full border border-[#E0D9CB] bg-[#FAF8F5] px-3 py-1 text-xs font-medium text-[#524E48] transition-colors hover:border-[#141413] hover:text-[#141413]"
            >
              {formatName(move)}
            </span>
          ))}
        </div>
      ) : (
        <p className="py-4 text-center text-xs text-[#78756F]">
          No moves found matching &ldquo;{moveSearch}&rdquo;
        </p>
      )}
    </div>
  );
}
