import { PokemonTypeName } from "@/types/pokemon";

export interface TypeStyle {
  name: PokemonTypeName;
  label: string;
  bg: string;
  text: string;
  border: string;
  badgeBg: string;
  gradient: string;
  accent: string;
}

export const TYPE_STYLES: Record<PokemonTypeName, TypeStyle> = {
  normal: {
    name: "normal",
    label: "Normal",
    bg: "bg-stone-500/10 dark:bg-stone-500/20",
    text: "text-stone-700 dark:text-stone-300",
    border: "border-stone-400/30",
    badgeBg: "bg-stone-500 text-white",
    gradient: "from-stone-500/20 via-stone-400/10 to-transparent",
    accent: "#9ca3af",
  },
  fire: {
    name: "fire",
    label: "Fire",
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-400/30",
    badgeBg: "bg-gradient-to-r from-orange-500 to-amber-500 text-white",
    gradient: "from-orange-500/25 via-amber-500/15 to-transparent",
    accent: "#f97316",
  },
  water: {
    name: "water",
    label: "Water",
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-400/30",
    badgeBg: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
    gradient: "from-blue-500/25 via-cyan-500/15 to-transparent",
    accent: "#3b82f6",
  },
  electric: {
    name: "electric",
    label: "Electric",
    bg: "bg-amber-400/10 dark:bg-amber-400/20",
    text: "text-amber-700 dark:text-amber-300",
    border: "border-amber-400/30",
    badgeBg: "bg-gradient-to-r from-amber-400 to-yellow-500 text-stone-900 font-semibold",
    gradient: "from-amber-400/25 via-yellow-400/15 to-transparent",
    accent: "#eab308",
  },
  grass: {
    name: "grass",
    label: "Grass",
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    text: "text-emerald-700 dark:text-emerald-300",
    border: "border-emerald-400/30",
    badgeBg: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white",
    gradient: "from-emerald-500/25 via-teal-500/15 to-transparent",
    accent: "#10b981",
  },
  ice: {
    name: "ice",
    label: "Ice",
    bg: "bg-cyan-400/10 dark:bg-cyan-400/20",
    text: "text-cyan-700 dark:text-cyan-300",
    border: "border-cyan-400/30",
    badgeBg: "bg-gradient-to-r from-cyan-400 to-sky-500 text-white",
    gradient: "from-cyan-400/25 via-sky-400/15 to-transparent",
    accent: "#06b6d4",
  },
  fighting: {
    name: "fighting",
    label: "Fighting",
    bg: "bg-red-700/10 dark:bg-red-700/20",
    text: "text-red-800 dark:text-red-300",
    border: "border-red-600/30",
    badgeBg: "bg-gradient-to-r from-red-700 to-rose-700 text-white",
    gradient: "from-red-700/25 via-rose-600/15 to-transparent",
    accent: "#b91c1c",
  },
  poison: {
    name: "poison",
    label: "Poison",
    bg: "bg-purple-600/10 dark:bg-purple-600/20",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-500/30",
    badgeBg: "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white",
    gradient: "from-purple-600/25 via-fuchsia-500/15 to-transparent",
    accent: "#9333ea",
  },
  ground: {
    name: "ground",
    label: "Ground",
    bg: "bg-amber-700/10 dark:bg-amber-700/20",
    text: "text-amber-800 dark:text-amber-300",
    border: "border-amber-600/30",
    badgeBg: "bg-gradient-to-r from-amber-600 to-yellow-700 text-white",
    gradient: "from-amber-700/25 via-yellow-600/15 to-transparent",
    accent: "#d97706",
  },
  flying: {
    name: "flying",
    label: "Flying",
    bg: "bg-indigo-500/10 dark:bg-indigo-500/20",
    text: "text-indigo-700 dark:text-indigo-300",
    border: "border-indigo-400/30",
    badgeBg: "bg-gradient-to-r from-indigo-400 to-sky-400 text-white",
    gradient: "from-indigo-500/25 via-sky-400/15 to-transparent",
    accent: "#818cf8",
  },
  psychic: {
    name: "psychic",
    label: "Psychic",
    bg: "bg-pink-500/10 dark:bg-pink-500/20",
    text: "text-pink-700 dark:text-pink-300",
    border: "border-pink-400/30",
    badgeBg: "bg-gradient-to-r from-pink-500 to-rose-500 text-white",
    gradient: "from-pink-500/25 via-rose-400/15 to-transparent",
    accent: "#ec4899",
  },
  bug: {
    name: "bug",
    label: "Bug",
    bg: "bg-lime-600/10 dark:bg-lime-600/20",
    text: "text-lime-800 dark:text-lime-300",
    border: "border-lime-500/30",
    badgeBg: "bg-gradient-to-r from-lime-600 to-emerald-600 text-white",
    gradient: "from-lime-600/25 via-emerald-500/15 to-transparent",
    accent: "#65a30d",
  },
  rock: {
    name: "rock",
    label: "Rock",
    bg: "bg-yellow-800/10 dark:bg-yellow-800/20",
    text: "text-yellow-800 dark:text-yellow-300",
    border: "border-yellow-700/30",
    badgeBg: "bg-gradient-to-r from-yellow-700 to-stone-600 text-white",
    gradient: "from-yellow-800/25 via-stone-600/15 to-transparent",
    accent: "#a16207",
  },
  ghost: {
    name: "ghost",
    label: "Ghost",
    bg: "bg-indigo-900/10 dark:bg-indigo-900/20",
    text: "text-indigo-800 dark:text-indigo-300",
    border: "border-indigo-700/30",
    badgeBg: "bg-gradient-to-r from-indigo-700 to-purple-800 text-white",
    gradient: "from-indigo-800/25 via-purple-700/15 to-transparent",
    accent: "#6366f1",
  },
  dragon: {
    name: "dragon",
    label: "Dragon",
    bg: "bg-violet-700/10 dark:bg-violet-700/20",
    text: "text-violet-800 dark:text-violet-300",
    border: "border-violet-600/30",
    badgeBg: "bg-gradient-to-r from-violet-600 to-indigo-700 text-white",
    gradient: "from-violet-700/25 via-indigo-600/15 to-transparent",
    accent: "#7c3aed",
  },
  dark: {
    name: "dark",
    label: "Dark",
    bg: "bg-neutral-800/10 dark:bg-neutral-800/30",
    text: "text-neutral-800 dark:text-neutral-200",
    border: "border-neutral-700/30",
    badgeBg: "bg-gradient-to-r from-neutral-800 to-stone-900 text-white",
    gradient: "from-neutral-800/25 via-stone-700/15 to-transparent",
    accent: "#404040",
  },
  steel: {
    name: "steel",
    label: "Steel",
    bg: "bg-slate-500/10 dark:bg-slate-500/20",
    text: "text-slate-700 dark:text-slate-300",
    border: "border-slate-400/30",
    badgeBg: "bg-gradient-to-r from-slate-500 to-zinc-500 text-white",
    gradient: "from-slate-500/25 via-zinc-400/15 to-transparent",
    accent: "#64748b",
  },
  fairy: {
    name: "fairy",
    label: "Fairy",
    bg: "bg-pink-400/10 dark:bg-pink-400/20",
    text: "text-pink-600 dark:text-pink-300",
    border: "border-pink-300/40",
    badgeBg: "bg-gradient-to-r from-pink-400 to-rose-400 text-white",
    gradient: "from-pink-400/25 via-rose-300/15 to-transparent",
    accent: "#f472b6",
  },
};

export const ALL_POKEMON_TYPES: PokemonTypeName[] = [
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const STAT_CONFIG: Record<
  string,
  { label: string; max: number; colorClass: string; bgClass: string }
> = {
  hp: {
    label: "HP",
    max: 255,
    colorClass: "bg-emerald-500",
    bgClass: "bg-emerald-500/20",
  },
  attack: {
    label: "Attack",
    max: 190,
    colorClass: "bg-red-500",
    bgClass: "bg-red-500/20",
  },
  defense: {
    label: "Defense",
    max: 250,
    colorClass: "bg-amber-500",
    bgClass: "bg-amber-500/20",
  },
  "special-attack": {
    label: "Sp. Atk",
    max: 194,
    colorClass: "bg-sky-500",
    bgClass: "bg-sky-500/20",
  },
  "special-defense": {
    label: "Sp. Def",
    max: 250,
    colorClass: "bg-indigo-500",
    bgClass: "bg-indigo-500/20",
  },
  speed: {
    label: "Speed",
    max: 200,
    colorClass: "bg-pink-500",
    bgClass: "bg-pink-500/20",
  },
};

export function formatPokemonId(id: number): string {
  return `#${id.toString().padStart(3, "0")}`;
}

export function formatName(name: string): string {
  if (!name) return "";
  return name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
