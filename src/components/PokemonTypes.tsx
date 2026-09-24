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
    sm: "px-2.5 py-0.5 text-[11px] font-medium tracking-normal",
    md: "px-3 py-1 text-xs font-semibold tracking-normal",
    lg: "px-4 py-1.5 text-sm font-semibold tracking-normal",
  };

  return (
    <div className={`flex flex-wrap gap-1.5 items-center ${className}`}>
      {types.map((type) => {
        const style = TYPE_STYLES[type] || TYPE_STYLES.normal;

        return (
          <span
            key={type}
            className={`inline-flex items-center rounded-full border border-black/5 transition-transform duration-150 hover:scale-102 ${sizeClasses[size]} ${style.badgeBg} ${style.badgeText}`}
          >
            {style.label || type}
          </span>
        );
      })}
    </div>
  );
}
