import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPokemonById } from "@/lib/api";
import { formatName, TYPE_STYLES } from "@/lib/constants";
import { PokemonTypes } from "@/components/PokemonTypes";
import { PokemonStats } from "@/components/PokemonStats";
import { PokemonAbilities } from "@/components/PokemonAbilities";
import { PokemonMoves } from "@/components/PokemonMoves";
import { ArrowLeft } from "lucide-react";

interface PokemonDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PokemonDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const pokemon = await getPokemonById(resolvedParams.id);

  if (!pokemon) {
    return {
      title: "Pokémon Not Found — Pokémon Explorer",
    };
  }

  const formattedName = formatName(pokemon.name);
  return {
    title: `${formattedName} (${pokemon.formattedId}) — Pokémon Explorer`,
    description:
      pokemon.description ||
      `Explore detailed statistics, abilities, types, and learnable moves for ${formattedName}.`,
  };
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) {
  const resolvedParams = await params;
  const pokemon = await getPokemonById(resolvedParams.id);

  if (!pokemon) {
    notFound();
  }

  const primaryType = pokemon.types[0] || "normal";
  const typeStyle = TYPE_STYLES[primaryType] || TYPE_STYLES.normal;
  const formattedName = formatName(pokemon.name);

  return (
    <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12">
      {/* Top Navigation */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full border border-[#E0D9CB] bg-white px-4 py-2 text-xs font-semibold text-[#141413] shadow-2xs transition-all hover:bg-[#FAF8F5] active:scale-98"
          aria-label="Back to all Pokémon"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
          <span>Back to all Pokémon</span>
        </Link>

        {pokemon.generation && (
          <span className="text-xs font-semibold tracking-wider text-[#78756F]">
            {pokemon.generation}
          </span>
        )}
      </div>

      {/* Main Editorial Showcase */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-start">
        {/* Left Column: Massive Artwork & Visual Presentation */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 animate-fade-in">
          <div
            className={`relative flex flex-col items-center justify-center rounded-[32px] border ${typeStyle.cardBorder} ${typeStyle.cardBg} p-8 sm:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.03)] overflow-hidden`}
          >
            {/* Subtle Circular Shape */}
            <div className="absolute h-64 w-64 rounded-full bg-white/40 blur-xl pointer-events-none" />

            {/* Handwritten note */}
            <div className="absolute top-6 left-6 text-base font-handwritten text-[#524E48] rotate-[-4deg] select-none">
              <span>Specimen overview</span>
              <span className="text-xs"> ✦</span>
            </div>

            {/* Pokemon Artwork */}
            <div className="relative my-6 flex h-64 w-64 sm:h-76 sm:w-76 items-center justify-center">
              <Image
                src={pokemon.image}
                alt={formattedName}
                fill
                priority
                sizes="(max-width: 768px) 280px, 340px"
                className="object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Quick Physical Dimension Bento */}
            <div className="grid grid-cols-3 gap-3 w-full mt-4 pt-4 border-t border-black/5">
              <div className="rounded-2xl bg-white/70 p-3 text-center border border-black/5">
                <span className="block text-[11px] font-semibold text-[#78756F]">
                  Height
                </span>
                <span className="font-mono text-sm font-bold text-[#141413]">
                  {pokemon.height} m
                </span>
              </div>

              <div className="rounded-2xl bg-white/70 p-3 text-center border border-black/5">
                <span className="block text-[11px] font-semibold text-[#78756F]">
                  Weight
                </span>
                <span className="font-mono text-sm font-bold text-[#141413]">
                  {pokemon.weight} kg
                </span>
              </div>

              <div className="rounded-2xl bg-white/70 p-3 text-center border border-black/5">
                <span className="block text-[11px] font-semibold text-[#78756F]">
                  Base EXP
                </span>
                <span className="font-mono text-sm font-bold text-[#141413]">
                  {pokemon.baseExperience || "—"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Lore, Types, Stats, Abilities, Moves */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in-delayed">
          {/* Header Card */}
          <div className="rounded-[28px] border border-[#E6E0D4] bg-white p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#78756F]">
                  {pokemon.formattedId}
                </span>
                <span className="text-xs text-[#78756F]">·</span>
                <span className="text-xs font-semibold text-[#78756F] uppercase tracking-wider">
                  {pokemon.types.map((t) => formatName(t)).join(" / ")}
                </span>
                {pokemon.genus && (
                  <>
                    <span className="text-xs text-[#78756F]">·</span>
                    <span className="text-xs font-medium text-[#78756F]">
                      {pokemon.genus}
                    </span>
                  </>
                )}
              </div>

              <h1 className="mt-1 text-4xl sm:text-5xl font-black tracking-tight text-[#141413]">
                {formattedName}
              </h1>
            </div>

            {/* Type Badges */}
            <div className="pt-1">
              <PokemonTypes types={pokemon.types} size="md" />
            </div>

            {/* Flavor Text / Lore */}
            {pokemon.description && (
              <div className="pt-2 border-t border-[#F0ECE1]">
                <p className="text-sm font-medium italic text-[#524E48] leading-relaxed">
                  &ldquo;{pokemon.description}&rdquo;
                </p>
              </div>
            )}
          </div>

          {/* Base Stats Card */}
          <PokemonStats
            stats={pokemon.stats}
            totalStats={pokemon.totalStats}
          />

          {/* Abilities Card */}
          <PokemonAbilities abilities={pokemon.abilities} />

          {/* Learnable Moves Card */}
          <PokemonMoves moves={pokemon.moves} />
        </div>
      </div>
    </div>
  );
}
