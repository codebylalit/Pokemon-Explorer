import React from "react";
import { StatItem } from "@/types/pokemon";

interface PokemonStatsProps {
  stats: StatItem[];
  totalStats: number;
}

export function PokemonStats({ stats, totalStats }: PokemonStatsProps) {
  return (
    <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="mb-6 flex items-center justify-between border-b border-[#F0ECE1] pb-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#78756F]">
            Attributes
          </span>
          <h2 className="text-xl font-bold tracking-tight text-[#141413]">
            Base Stats
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-[#78756F]">BST: </span>
          <span className="font-mono text-sm font-extrabold text-[#141413]">
            {totalStats}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {stats.map((stat) => {
          const percentage = Math.min(
            100,
            Math.max(4, Math.round((stat.value / stat.max) * 100))
          );

          return (
            <div key={stat.name} className="flex flex-col gap-1.5 sm:flex-row sm:items-center">
              {/* Stat Name */}
              <div className="w-24 shrink-0">
                <span className="text-xs font-semibold text-[#524E48]">
                  {stat.label}
                </span>
              </div>

              {/* Stat Value */}
              <div className="w-12 shrink-0">
                <span className="font-mono text-xs font-bold text-[#141413]">
                  {stat.value}
                </span>
              </div>

              {/* Visual Progress Bar */}
              <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#EFECE6]">
                <div
                  className="h-full rounded-full bg-[#141413] transition-all duration-700 ease-out"
                  style={{ width: `${percentage}%` }}
                  role="progressbar"
                  aria-valuenow={stat.value}
                  aria-valuemin={0}
                  aria-valuemax={stat.max}
                  aria-label={`${stat.label}: ${stat.value}`}
                />
              </div>

              {/* Max */}
              <div className="hidden w-10 text-right sm:block">
                <span className="font-mono text-[10px] text-[#948F85]">
                  {stat.max}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
