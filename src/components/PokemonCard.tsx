import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PokemonSummary } from "@/types/pokemon";
import { formatName, TYPE_STYLES } from "@/lib/constants";
import { PokemonTypes } from "./PokemonTypes";

interface PokemonCardProps {
  pokemon: PokemonSummary;
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const primaryType = pokemon.types[0] || "normal";
  const typeStyle = TYPE_STYLES[primaryType] || TYPE_STYLES.normal;

  return (
    <Link
      href={`/pokemon/${pokemon.id}`}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-[24px] border ${typeStyle.cardBorder} ${typeStyle.cardBg} p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.05)] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#141413]`}
      aria-label={`View details for ${formatName(pokemon.name)}`}
    >
      {/* Card Header: ID & Name */}
      <div className="flex flex-col items-start gap-0.5">
        <span className="font-mono text-xs font-semibold text-[#78756F]">
          {pokemon.formattedId}
        </span>
        <h3 className="text-lg font-bold text-[#141413] tracking-tight transition-colors duration-200 group-hover:underline underline-offset-2">
          {formatName(pokemon.name)}
        </h3>
      </div>

      {/* Pokemon Artwork */}
      <div className="relative my-4 flex h-36 w-full items-center justify-center">
        <div className="relative h-32 w-32 drop-shadow-xs transition-transform duration-300 ease-out group-hover:scale-110">
          <Image
            src={pokemon.image}
            alt={formatName(pokemon.name)}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain"
            priority={pokemon.id <= 8}
          />
        </div>
      </div>

      {/* Card Footer: Type Badges */}
      <div className="pt-2 border-t border-black/5 flex items-center justify-between">
        <PokemonTypes types={pokemon.types} size="sm" />
        <span className="text-xs font-semibold text-[#78756F] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          →
        </span>
      </div>
    </Link>
  );
}
