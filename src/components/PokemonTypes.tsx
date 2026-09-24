import React from "react";
import { PokemonTypeName } from "@/types/pokemon";
import { TYPE_STYLES } from "@/lib/constants";

interface PokemonTypesProps {
  types: PokemonTypeName[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function PokemonTypes({
  types,
  size = "md",
  className = "",
}: PokemonTypesProps) {
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs tracking-wide",
    md: "px-3 py-1 text-xs font-medium tracking-wide",
    lg: "px-4 py-1.5 text-sm font-semibold tracking-wider",
  };

  return (
    <div className={`flex flex-wrap gap-1.5 items-center ${className}`}>
      {types.map((type) => {
        const style = TYPE_STYLES[type] || {
          label: type,
          badgeBg: "bg-slate-500 text-white",
        };

        return (
          <span
            key={type}
            className={`inline-flex items-center rounded-full uppercase shadow-xs transition-transform duration-150 hover:scale-105 ${sizeClasses[size]} ${style.badgeBg}`}
          >
            {style.label || type}
          </span>
        );
      })}
    </div>
  );
}
