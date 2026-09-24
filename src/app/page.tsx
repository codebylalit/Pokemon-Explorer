import React from "react";
import { getPokemonList } from "@/lib/api";
import { PokemonGrid } from "@/components/PokemonGrid";
import { PokemonVisualStrip } from "@/components/PokemonVisualStrip";

export const revalidate = 86400; // Cache for 24 hours

export default async function HomePage() {
  const pokemonList = await getPokemonList(151, 0);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-10 sm:pt-16">
      {/* Centered Editorial Hero Section */}
      <section className="relative py-8 sm:py-16 max-w-4xl mx-auto flex flex-col items-center text-center space-y-7">
        {/* Pill above heading */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#E0D9CB] bg-white px-4 py-1.5 text-xs font-semibold text-[#524E48] shadow-2xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#141413]" />
          <span>Explore the world of Pokémon</span>
        </div>

        {/* Centered 2-Line Bold Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-black tracking-[-0.03em] text-[#141413] leading-[1.02]">
          Discover Your Favorite <br className="hidden sm:inline" />
          Pokémon
        </h1>

        {/* Short description */}
        <p className="max-w-xl text-base sm:text-xl font-medium text-[#524E48] leading-relaxed mx-auto">
          Explore Pokémon, discover their abilities, stats, types and more — all in one place.
        </p>

        {/* Rounded CTA + Handwritten Annotation */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-5">
          <a
            href="#explore"
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#141413] px-8 py-4 text-sm font-bold text-white shadow-xs transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Pokémon</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          {/* Designer Handwritten Annotation */}
          <div className="flex items-center gap-1.5 text-lg sm:text-xl font-handwritten text-[#524E48] rotate-[-2deg] select-none">
            <span>Start exploring</span>
            <span className="text-base">↘</span>
          </div>
        </div>
      </section>

      {/* Editorial Pokemon Visual Strip */}
      <PokemonVisualStrip />

      {/* Main Grid Section */}
      <section className="pt-6 sm:pt-10" aria-label="Pokémon Directory">
        <PokemonGrid initialPokemon={pokemonList} />
      </section>
    </div>
  );
}
