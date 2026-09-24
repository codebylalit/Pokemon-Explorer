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
import {
  ArrowLeft,
  Ruler,
  Weight,
  Sparkles,
  Info,
  ShieldCheck,
} from "lucide-react";

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
      title: "Pokémon Not Found - Pokemon Explorer",
    };
  }

  const formattedName = formatName(pokemon.name);
  return {
    title: `${formattedName} (${pokemon.formattedId}) - Pokemon Explorer`,
    description:
      pokemon.description ||
      `Detailed base stats, abilities, types, and moves for ${formattedName} in Pokémon Explorer.`,
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
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10">
      {/* Back to Explorer Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 shadow-xs transition-all hover:border-stone-300 hover:bg-stone-50 hover:text-red-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700 dark:hover:text-red-400"
          aria-label="Back to Pokémon Listing"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Explorer</span>
        </Link>

        {pokemon.generation && (
          <span className="rounded-full bg-stone-200/60 px-3 py-1 text-xs font-semibold text-stone-700 dark:bg-stone-800 dark:text-stone-300">
            {pokemon.generation}
          </span>
        )}
      </div>

      {/* Main Hero Card */}
      <section
        className="relative mb-8 overflow-hidden rounded-3xl border border-stone-200/80 bg-white p-6 sm:p-10 shadow-lg dark:border-stone-800/80 dark:bg-stone-900"
        aria-label="Pokémon Overview"
      >
        {/* Dynamic type gradient backdrop */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${typeStyle.gradient} opacity-50 dark:opacity-40`}
          aria-hidden="true"
        />

        {/* Decorative Pokeball background pattern */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[24px] border-stone-200/40 opacity-30 dark:border-stone-700/30"
          aria-hidden="true"
        />

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12">
          {/* Left Column: ID, Name, Types, Flavor Lore, Quick Vitals */}
          <div className="space-y-5 md:col-span-7">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold tracking-wider text-stone-500 dark:text-stone-400">
                  {pokemon.formattedId}
                </span>
                {pokemon.genus && (
                  <span className="rounded-md bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
                    {pokemon.genus}
                  </span>
                )}
              </div>

              <h1 className="mt-1 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl lg:text-5xl dark:text-stone-100">
                {formattedName}
              </h1>
            </div>

            {/* Type Badges */}
            <div>
              <PokemonTypes types={pokemon.types} size="lg" />
            </div>

            {/* Pokedex Flavor Description */}
            {pokemon.description && (
              <div className="rounded-2xl border border-stone-100 bg-white/80 p-4 backdrop-blur-xs dark:border-stone-800 dark:bg-stone-800/40">
                <div className="flex items-start gap-2.5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
                  <p className="text-sm italic leading-relaxed text-stone-600 dark:text-stone-300">
                    &ldquo;{pokemon.description}&rdquo;
                  </p>
                </div>
              </div>
            )}

            {/* Physical Attributes Bento Grid */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-stone-100 bg-stone-50/80 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/50">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <Ruler className="h-4 w-4" />
                </div>
                <div className="font-mono text-base font-extrabold text-stone-900 dark:text-stone-100">
                  {pokemon.height} m
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Height
                </div>
              </div>

              <div className="rounded-2xl border border-stone-100 bg-stone-50/80 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/50">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
                  <Weight className="h-4 w-4" />
                </div>
                <div className="font-mono text-base font-extrabold text-stone-900 dark:text-stone-100">
                  {pokemon.weight} kg
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Weight
                </div>
              </div>

              <div className="rounded-2xl border border-stone-100 bg-stone-50/80 p-3.5 text-center dark:border-stone-800 dark:bg-stone-800/50">
                <div className="mx-auto mb-1 flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Sparkles className="h-4 w-4" />
                </div>
                <div className="font-mono text-base font-extrabold text-stone-900 dark:text-stone-100">
                  {pokemon.baseExperience || "—"}
                </div>
                <div className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                  Base EXP
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large High-Res Artwork */}
          <div className="flex flex-col items-center justify-center md:col-span-5">
            <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
              {/* Soft glow circle backdrop */}
              <div
                className="absolute inset-0 rounded-full blur-2xl opacity-40 transition-all"
                style={{ backgroundColor: typeStyle.accent }}
              />

              <Image
                src={pokemon.image}
                alt={`Official artwork of ${formattedName}`}
                fill
                priority
                sizes="(max-width: 768px) 256px, 320px"
                className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detail Breakdown Sections */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Base Stats Column */}
        <section aria-label="Base Stats">
          <PokemonStats
            stats={pokemon.stats}
            totalStats={pokemon.totalStats}
          />
        </section>

        {/* Abilities & Moves Column */}
        <div className="space-y-6">
          <section aria-label="Abilities">
            <PokemonAbilities abilities={pokemon.abilities} />
          </section>

          <section aria-label="Learnable Moves">
            <PokemonMoves moves={pokemon.moves} />
          </section>
        </div>
      </div>
    </div>
  );
}
