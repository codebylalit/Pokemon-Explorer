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
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/80 bg-white/90 p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-stone-300 hover:shadow-xl dark:border-stone-800/80 dark:bg-stone-900/90 dark:hover:border-stone-700 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-red-500"
      aria-label={`View details for ${formatName(pokemon.name)}`}
    >
      {/* Subtle background glow from primary type */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${typeStyle.gradient} opacity-40 transition-opacity duration-300 group-hover:opacity-80`}
        aria-hidden="true"
      />

      {/* Card Header: Name & ID */}
      <div className="relative z-10 flex items-start justify-between gap-2">
        <div>
          <span className="font-mono text-xs font-bold text-stone-600 dark:text-stone-300">
            {pokemon.formattedId}
          </span>
          <h3 className="text-lg font-bold text-stone-900 transition-colors duration-200 group-hover:text-red-600 dark:text-stone-100 dark:group-hover:text-red-400">
            {formatName(pokemon.name)}
          </h3>
        </div>

        {/* Decorative Pokeball watermark */}
        <div
          className="pointer-events-none absolute -top-4 -right-4 h-24 w-24 rounded-full border-8 border-stone-200/40 opacity-20 transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110 dark:border-stone-700/40"
          aria-hidden="true"
        />
      </div>

      {/* Pokemon Image */}
      <div className="relative z-10 my-4 flex h-36 w-full items-center justify-center">
        <div className="relative h-32 w-32 drop-shadow-md transition-transform duration-300 ease-out group-hover:scale-110">
          <Image
            src={pokemon.image}
            alt={`Official artwork of ${formatName(pokemon.name)}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            className="object-contain"
            priority={pokemon.id <= 12}
            unoptimized={false}
          />
        </div>
      </div>

      {/* Card Footer: Types */}
      <div className="relative z-10 mt-auto pt-2 border-t border-stone-100 dark:border-stone-800/60">
        <PokemonTypes types={pokemon.types} size="sm" />
      </div>
    </Link>
  );
}
