export interface PokeAPINamedResource {
  name: string;
  url: string;
}

export interface PokeAPITypeSlot {
  slot: number;
  type: PokeAPINamedResource;
}

export interface PokeAPIStatSlot {
  base_stat: number;
  effort: number;
  stat: PokeAPINamedResource;
}

export interface PokeAPIAbilitySlot {
  is_hidden: boolean;
  slot: number;
  ability: PokeAPINamedResource;
}

export interface PokeAPIMoveVersionGroupDetail {
  level_learned_at: number;
  move_learn_method: PokeAPINamedResource;
  version_group: PokeAPINamedResource;
}

export interface PokeAPIMoveSlot {
  move: PokeAPINamedResource;
  version_group_details: PokeAPIMoveVersionGroupDetail[];
}

export interface PokeAPISprites {
  front_default: string | null;
  back_default: string | null;
  front_shiny: string | null;
  other?: {
    "official-artwork"?: {
      front_default: string | null;
      front_shiny: string | null;
    };
    dream_world?: {
      front_default: string | null;
    };
    home?: {
      front_default: string | null;
      front_shiny: string | null;
    };
  };
}

export interface PokeAPIPokemon {
  id: number;
  name: string;
  base_experience: number | null;
  height: number;
  weight: number;
  types: PokeAPITypeSlot[];
  stats: PokeAPIStatSlot[];
  abilities: PokeAPIAbilitySlot[];
  moves: PokeAPIMoveSlot[];
  sprites: PokeAPISprites;
  species: PokeAPINamedResource;
}

export interface PokeAPIListResult {
  name: string;
  url: string;
}

export interface PokeAPIListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokeAPIListResult[];
}

export interface PokeAPIFlavorTextEntry {
  flavor_text: string;
  language: PokeAPINamedResource;
  version: PokeAPINamedResource;
}

export interface PokeAPIGenusEntry {
  genus: string;
  language: PokeAPINamedResource;
}

export interface PokeAPISpecies {
  id: number;
  name: string;
  flavor_text_entries: PokeAPIFlavorTextEntry[];
  genera: PokeAPIGenusEntry[];
  generation?: PokeAPINamedResource;
  base_happiness?: number;
  capture_rate?: number;
}

// Normalized UI Models

export type PokemonTypeName =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy";

export interface PokemonSummary {
  id: number;
  formattedId: string;
  name: string;
  types: PokemonTypeName[];
  image: string;
  height: number;
  weight: number;
}

export interface StatItem {
  name: string;
  label: string;
  value: number;
  max: number;
  colorClass: string;
}

export interface AbilityItem {
  name: string;
  isHidden: boolean;
}

export interface PokemonDetail {
  id: number;
  formattedId: string;
  name: string;
  types: PokemonTypeName[];
  image: string;
  shinyImage: string | null;
  height: number; // in meters
  weight: number; // in kg
  baseExperience: number;
  stats: StatItem[];
  totalStats: number;
  abilities: AbilityItem[];
  moves: string[];
  genus?: string;
  description?: string;
  generation?: string;
  captureRate?: number;
}
