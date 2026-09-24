import React from "react";
import { StatItem } from "@/types/pokemon";
import { Activity } from "lucide-react";

interface PokemonStatsProps {
  stats: StatItem[];
  totalStats: number;
}

export function PokemonStats({ stats, totalStats }: PokemonStatsProps) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs dark:border-stone-800/80 dark:bg-stone-900">
      <div className="mb-4 flex items-center justify-between border-b border-stone-100 pb-3 dark:border-stone-800">
        <div className="flex items-center gap-2">
          <Activity className="h-5 w-5 text-red-500" />
          <h2 className="text-base font-bold text-stone-900 dark:text-stone-100">
            Base Stats
          </h2>
        </div>
        <div className="text-right">
          <span className="text-xs text-stone-600 dark:text-stone-300">
            Total (BST):{" "}
          </span>
          <span className="font-mono text-sm font-extrabold text-stone-900 dark:text-stone-100">
            {totalStats}
          </span>
        </div>
      </div>

      <div className="space-y-3.5">
        {stats.map((stat) => {
          const percentage = Math.min(
            100,
            Math.max(5, Math.round((stat.value / stat.max) * 100))
          );

          return (
            <div key={stat.name} className="flex flex-col gap-1 sm:flex-row sm:items-center">
              {/* Stat Name */}
              <div className="w-24 shrink-0">
                <span className="text-xs font-semibold text-stone-600 dark:text-stone-300">
                  {stat.label}
                </span>
              </div>

              {/* Stat Value */}
              <div className="w-12 shrink-0">
                <span className="font-mono text-xs font-bold text-stone-900 dark:text-stone-100">
                  {stat.value}
                </span>
              </div>

              {/* Visual Progress Bar */}
              <div className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-stone-100 dark:bg-stone-800">
                <div
                  className={`h-full rounded-full transition-all duration-700 ease-out ${stat.colorClass}`}
                  style={{ width: `${percentage}%` }}
                  role="progressbar"
                  aria-valuenow={stat.value}
                  aria-valuemin={0}
                  aria-valuemax={stat.max}
                  aria-label={`${stat.label} stat: ${stat.value} out of ${stat.max}`}
                />
              </div>

              {/* Max context */}
              <div className="hidden w-10 text-right sm:block">
                <span className="font-mono text-[10px] text-stone-600 dark:text-stone-300">
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
