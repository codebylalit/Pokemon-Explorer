import { PokemonTypeName } from "@/types/pokemon";

export interface TypeStyle {
  name: PokemonTypeName;
  label: string;
  // Card container background (soft muted pastel)
  cardBg: string;
  // Card subtle border
  cardBorder: string;
  // Pill badge background & text
  badgeBg: string;
  badgeText: string;
  // Accent color for highlights/bars
  accent: string;
  // Progress bar color
  barColor: string;
}

export const TYPE_STYLES: Record<PokemonTypeName, TypeStyle> = {
  normal: {
    name: "normal",
    label: "Normal",
    cardBg: "bg-[#EFECE6]",
    cardBorder: "border-[#DFD9CE]",
    badgeBg: "bg-[#E5E0D5]",
    badgeText: "text-[#524E48]",
    accent: "#8C867D",
    barColor: "bg-[#8C867D]",
  },
  fire: {
    name: "fire",
    label: "Fire",
    cardBg: "bg-[#FCEAE5]",
    cardBorder: "border-[#F7D4CC]",
    badgeBg: "bg-[#F8D8CF]",
    badgeText: "text-[#8F3B29]",
    accent: "#D65A31",
    barColor: "bg-[#E05338]",
  },
  water: {
    name: "water",
    label: "Water",
    cardBg: "bg-[#E5F1FA]",
    cardBorder: "border-[#CEE4F5]",
    badgeBg: "bg-[#D4E8F8]",
    badgeText: "text-[#245D85]",
    accent: "#3B82F6",
    barColor: "bg-[#3B82F6]",
  },
  electric: {
    name: "electric",
    label: "Electric",
    cardBg: "bg-[#FAF5DB]",
    cardBorder: "border-[#F2E8BD]",
    badgeBg: "bg-[#F4EBBA]",
    badgeText: "text-[#7A6318]",
    accent: "#D97706",
    barColor: "bg-[#EAB308]",
  },
  grass: {
    name: "grass",
    label: "Grass",
    cardBg: "bg-[#E8F3E8]",
    cardBorder: "border-[#D1E6D1]",
    badgeBg: "bg-[#D7EBD7]",
    badgeText: "text-[#2B6634]",
    accent: "#22C55E",
    barColor: "bg-[#22C55E]",
  },
  ice: {
    name: "ice",
    label: "Ice",
    cardBg: "bg-[#E5F6F8]",
    cardBorder: "border-[#C9ECF0]",
    badgeBg: "bg-[#D3F0F4]",
    badgeText: "text-[#1C6873]",
    accent: "#06B6D4",
    barColor: "bg-[#06B6D4]",
  },
  fighting: {
    name: "fighting",
    label: "Fighting",
    cardBg: "bg-[#F7E7E7]",
    cardBorder: "border-[#ECCECE]",
    badgeBg: "bg-[#EED1D1]",
    badgeText: "text-[#7C2B2B]",
    accent: "#B91C1C",
    barColor: "bg-[#DC2626]",
  },
  poison: {
    name: "poison",
    label: "Poison",
    cardBg: "bg-[#F3E8F5]",
    cardBorder: "border-[#E5CEE9]",
    badgeBg: "bg-[#E9D5EE]",
    badgeText: "text-[#692975]",
    accent: "#9333EA",
    barColor: "bg-[#A855F7]",
  },
  ground: {
    name: "ground",
    label: "Ground",
    cardBg: "bg-[#F5ECE0]",
    cardBorder: "border-[#E8D7C0]",
    badgeBg: "bg-[#ECDDC7]",
    badgeText: "text-[#734F23]",
    accent: "#B45309",
    barColor: "bg-[#D97706]",
  },
  flying: {
    name: "flying",
    label: "Flying",
    cardBg: "bg-[#EAEFF8]",
    cardBorder: "border-[#D3DEF0]",
    badgeBg: "bg-[#DBE4F5]",
    badgeText: "text-[#324C78]",
    accent: "#6366F1",
    barColor: "bg-[#6366F1]",
  },
  psychic: {
    name: "psychic",
    label: "Psychic",
    cardBg: "bg-[#FCE8F0]",
    cardBorder: "border-[#F5CEE0]",
    badgeBg: "bg-[#F7D5E4]",
    badgeText: "text-[#872456]",
    accent: "#EC4899",
    barColor: "bg-[#EC4899]",
  },
  bug: {
    name: "bug",
    label: "Bug",
    cardBg: "bg-[#EFF3E4]",
    cardBorder: "border-[#DEE6C8]",
    badgeBg: "bg-[#E4ECCF]",
    badgeText: "text-[#4F681E]",
    accent: "#65A30D",
    barColor: "bg-[#84CC16]",
  },
  rock: {
    name: "rock",
    label: "Rock",
    cardBg: "bg-[#EFEAE2]",
    cardBorder: "border-[#DFD4C6]",
    badgeBg: "bg-[#E5DCCF]",
    badgeText: "text-[#615038]",
    accent: "#78716C",
    barColor: "bg-[#78716C]",
  },
  ghost: {
    name: "ghost",
    label: "Ghost",
    cardBg: "bg-[#EDEAF5]",
    cardBorder: "border-[#D9D3EA]",
    badgeBg: "bg-[#DFD8F0]",
    badgeText: "text-[#4A3B6E]",
    accent: "#7C3AED",
    barColor: "bg-[#7C3AED]",
  },
  dragon: {
    name: "dragon",
    label: "Dragon",
    cardBg: "bg-[#ECE8F7]",
    cardBorder: "border-[#D6CEF0]",
    badgeBg: "bg-[#DDD5F2]",
    badgeText: "text-[#432F78]",
    accent: "#6D28D9",
    barColor: "bg-[#7C3AED]",
  },
  dark: {
    name: "dark",
    label: "Dark",
    cardBg: "bg-[#EAE7E4]",
    cardBorder: "border-[#D4CECA]",
    badgeBg: "bg-[#DDD7D2]",
    badgeText: "text-[#3D3A37]",
    accent: "#44403C",
    barColor: "bg-[#44403C]",
  },
  steel: {
    name: "steel",
    label: "Steel",
    cardBg: "bg-[#E8EDEF]",
    cardBorder: "border-[#D0D9DC]",
    badgeBg: "bg-[#D8E0E4]",
    badgeText: "text-[#364950]",
    accent: "#64748B",
    barColor: "bg-[#64748B]",
  },
  fairy: {
    name: "fairy",
    label: "Fairy",
    cardBg: "bg-[#FCEBF2]",
    cardBorder: "border-[#F6D2E3]",
    badgeBg: "bg-[#F7D8E7]",
    badgeText: "text-[#873462]",
    accent: "#F472B6",
    barColor: "bg-[#F472B6]",
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
  { label: string; max: number; barColor: string }
> = {
  hp: {
    label: "HP",
    max: 255,
    barColor: "bg-[#141413]",
  },
  attack: {
    label: "Attack",
    max: 190,
    barColor: "bg-[#141413]",
  },
  defense: {
    label: "Defense",
    max: 250,
    barColor: "bg-[#141413]",
  },
  "special-attack": {
    label: "Sp. Atk",
    max: 194,
    barColor: "bg-[#141413]",
  },
  "special-defense": {
    label: "Sp. Def",
    max: 250,
    barColor: "bg-[#141413]",
  },
  speed: {
    label: "Speed",
    max: 200,
    barColor: "bg-[#141413]",
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
