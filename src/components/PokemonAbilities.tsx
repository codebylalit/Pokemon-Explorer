import React from "react";
import { AbilityItem } from "@/types/pokemon";
import { formatName } from "@/lib/constants";
import { Sparkles, EyeOff } from "lucide-react";

interface PokemonAbilitiesProps {
  abilities: AbilityItem[];
}

export function PokemonAbilities({ abilities }: PokemonAbilitiesProps) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs dark:border-stone-800/80 dark:bg-stone-900">
      <div className="mb-4 flex items-center gap-2 border-b border-stone-100 pb-3 dark:border-stone-800">
        <Sparkles className="h-5 w-5 text-amber-500" />
        <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
          Abilities
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {abilities.map((ability) => (
          <div
            key={ability.name}
            className="flex items-center justify-between rounded-xl border border-stone-100 bg-stone-50/80 px-3.5 py-2.5 dark:border-stone-800 dark:bg-stone-800/50"
          >
            <span className="text-sm font-semibold text-stone-800 dark:text-stone-200">
              {formatName(ability.name)}
            </span>

            {ability.isHidden && (
              <span className="inline-flex items-center gap-1 rounded-md bg-stone-200/70 px-2 py-0.5 text-[11px] font-medium text-stone-600 dark:bg-stone-700 dark:text-stone-300">
                <EyeOff className="h-3 w-3" />
                Hidden
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
