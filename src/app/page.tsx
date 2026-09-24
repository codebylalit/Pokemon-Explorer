import React from "react";
import { getPokemonList } from "@/lib/api";
import { PokemonGrid } from "@/components/PokemonGrid";
import { Sparkles, Flame } from "lucide-react";

export const revalidate = 86400; // Cache page for 24 hours

export default async function HomePage() {
  // Server-side fetch the initial batch of Generation 1 Pokemon (151 Pokemon)
  const pokemonList = await getPokemonList(151, 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* Hero Header Section */}
      <section className="mb-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-6 sm:p-10 text-white shadow-xl shadow-red-500/10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
            <Flame className="h-3.5 w-3.5 text-amber-300" />
            <span>Generation I Pokédex</span>
          </div>

          <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Explore the World of Pokémon
          </h1>

          <p className="text-sm font-medium text-red-50 sm:text-base leading-relaxed">
            Search, filter, and inspect Pokémon from the Kanto region. View detailed base stats, learnable moves, abilities, and elemental type profiles.
          </p>
        </div>
      </section>

      {/* Main Interactive Grid Section */}
      <section aria-label="Pokémon Directory">
        <PokemonGrid initialPokemon={pokemonList} />
      </section>
    </div>
  );
}
