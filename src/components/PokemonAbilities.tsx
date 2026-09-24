import React from "react";
import { AbilityItem } from "@/types/pokemon";
import { formatName } from "@/lib/constants";

interface PokemonAbilitiesProps {
  abilities: AbilityItem[];
}

export function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="mb-5 border-b border-[#F0ECE1] pb-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#78756F]">
          Traits
        </span>
        <h2 className="text-xl font-bold tracking-tight text-[#141413]">
          Abilities
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {abilities.map((ability) => (
          <div
            key={ability.name}
            className="flex items-center justify-between rounded-2xl border border-[#EFECE6] bg-[#FAF8F5] px-4 py-3"
          >
            <span className="text-sm font-semibold text-[#141413]">
              {formatName(ability.name)}
            </span>

            {ability.isHidden && (
              <span className="rounded-full border border-[#E0D9CB] bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#78756F]">
                Hidden
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
