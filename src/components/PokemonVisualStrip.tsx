import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getOfficialArtworkUrl } from "@/lib/api";
import { formatPokemonId } from "@/lib/constants";

interface FeaturedPokemon {
  id: number;
  name: string;
  type: string;
  bg: string;
  border: string;
  heightClass: string;
  rotateClass?: string;
  artwork: string;
}

const FEATURED_POKEMON: FeaturedPokemon[] = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    bg: "bg-[#E8F3E8]",
    border: "border-[#D1E6D1]",
    heightClass: "h-72",
    rotateClass: "-rotate-1",
    artwork: getOfficialArtworkUrl(1),
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire",
    bg: "bg-[#FCEAE5]",
    border: "border-[#F7D4CC]",
    heightClass: "h-80",
    rotateClass: "rotate-1",
    artwork: getOfficialArtworkUrl(6),
  },
  {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    bg: "bg-[#FAF5DB]",
    border: "border-[#F2E8BD]",
    heightClass: "h-76",
    rotateClass: "-rotate-0.5",
    artwork: getOfficialArtworkUrl(25),
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    bg: "bg-[#E5F1FA]",
    border: "border-[#CEE4F5]",
    heightClass: "h-72",
    rotateClass: "rotate-1",
    artwork: getOfficialArtworkUrl(7),
  },
  {
    id: 94,
    name: "Gengar",
    type: "Ghost",
    bg: "bg-[#EDEAF5]",
    border: "border-[#D9D3EA]",
    heightClass: "h-80",
    rotateClass: "-rotate-1",
    artwork: getOfficialArtworkUrl(94),
  },
  {
    id: 133,
    name: "Eevee",
    type: "Normal",
    bg: "bg-[#EFECE6]",
    border: "border-[#DFD9CE]",
    heightClass: "h-76",
    rotateClass: "rotate-0.5",
    artwork: getOfficialArtworkUrl(133),
  },
  {
    id: 151,
    name: "Mew",
    type: "Psychic",
    bg: "bg-[#FCE8F0]",
    border: "border-[#F5CEE0]",
    heightClass: "h-72",
    rotateClass: "-rotate-1",
    artwork: getOfficialArtworkUrl(151),
  },
];

export function PokemonVisualStrip() {
  return (
    <section className="relative my-12 sm:my-16 overflow-hidden">
      {/* Designer Handwritten Annotation */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex items-center justify-between mb-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#78756F]">
          Curated Highlights
        </span>
        <div className="flex items-center gap-1 text-base sm:text-lg font-handwritten text-[#524E48] rotate-[-2deg]">
          <span>Staff favorites</span>
          <span className="text-sm">✦</span>
        </div>
      </div>

      {/* Horizontal Visual Strip Scroll Container */}
      <div className="flex items-center gap-5 overflow-x-auto px-6 sm:px-8 lg:px-12 py-6 no-scrollbar snap-x snap-mandatory">
        {FEATURED_POKEMON.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.id}`}
            className={`group relative flex w-52 sm:w-60 shrink-0 flex-col justify-between rounded-[26px] border ${pokemon.border} ${pokemon.bg} p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] snap-center ${pokemon.heightClass}`}
            aria-label={`View details for ${pokemon.name}`}
          >
            {/* Header: ID Number */}
            <div className="flex items-center justify-between text-xs font-mono font-medium text-[#78756F]">
              <span>{formatPokemonId(pokemon.id)}</span>
              <span className="text-[11px] font-sans font-medium text-[#78756F]/80">
                {pokemon.type}
              </span>
            </div>

            {/* Artwork */}
            <div className="relative my-auto flex h-36 w-full items-center justify-center">
              <div className="relative h-32 w-32 drop-shadow-xs transition-transform duration-300 ease-out group-hover:scale-108">
                <Image
                  src={pokemon.artwork}
                  alt={pokemon.name}
                  fill
                  sizes="160px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Footer: Name */}
            <div className="pt-2 border-t border-black/5 flex items-center justify-between">
              <h3 className="text-base font-bold text-[#141413] tracking-tight group-hover:underline underline-offset-4">
                {pokemon.name}
              </h3>
              <span className="text-xs text-[#78756F] transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
