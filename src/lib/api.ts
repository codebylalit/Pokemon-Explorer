import {
  PokeAPIListResponse,
  PokeAPIPokemon,
  PokeAPISpecies,
  PokemonDetail,
  PokemonSummary,
  PokemonTypeName,
  StatItem,
} from "@/types/pokemon";
import { formatPokemonId, STAT_CONFIG } from "./constants";

const BASE_URL = "https://pokeapi.co/api/v2";

/**
 * Helper to fetch with timeout and standard error handling
 */
async function fetchWithCache<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache for 24 hours
    });

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error(`Failed to fetch from ${url}: ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`API Fetch Error [${url}]:`, error);
    throw error;
  }
}

/**
 * Get high resolution official artwork URL for a given ID
 */
export function getOfficialArtworkUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}

/**
 * Transform raw PokeAPI pokemon into a simplified PokemonSummary
 */
function transformToSummary(pokemon: PokeAPIPokemon): PokemonSummary {
  const types = pokemon.types.map((t) => t.type.name as PokemonTypeName);
  const image =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default ||
    getOfficialArtworkUrl(pokemon.id);

  return {
    id: pokemon.id,
    formattedId: formatPokemonId(pokemon.id),
    name: pokemon.name,
    types,
    image,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
  };
}

/**
 * Transform raw PokeAPI pokemon & species into a rich PokemonDetail
 */
function transformToDetail(
  pokemon: PokeAPIPokemon,
  species: PokeAPISpecies | null
): PokemonDetail {
  const types = pokemon.types.map((t) => t.type.name as PokemonTypeName);

  const image =
    pokemon.sprites.other?.["official-artwork"]?.front_default ||
    pokemon.sprites.front_default ||
    getOfficialArtworkUrl(pokemon.id);

  const shinyImage =
    pokemon.sprites.other?.["official-artwork"]?.front_shiny ||
    pokemon.sprites.front_shiny ||
    null;

  let totalStats = 0;
  const stats: StatItem[] = pokemon.stats.map((statItem) => {
    const key = statItem.stat.name;
    const config = STAT_CONFIG[key] || {
      label: statItem.stat.name.toUpperCase(),
      max: 200,
      colorClass: "bg-blue-500",
    };
    totalStats += statItem.base_stat;
    return {
      name: key,
      label: config.label,
      value: statItem.base_stat,
      max: config.max,
      colorClass: config.colorClass,
    };
  });

  const abilities = pokemon.abilities.map((ab) => ({
    name: ab.ability.name,
    isHidden: ab.is_hidden,
  }));

  const moves = pokemon.moves.map((m) => m.move.name);

  // Extract English flavor text & genus from species
  let description = "";
  let genus = "";
  let generation = "";
  let captureRate: number | undefined;

  if (species) {
    const englishFlavor = species.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    );
    if (englishFlavor) {
      // Clean up whitespace/form feed characters in older PokeAPI texts
      description = englishFlavor.flavor_text.replace(/[\n\f\r]/g, " ");
    }

    const englishGenus = species.genera.find(
      (g) => g.language.name === "en"
    );
    if (englishGenus) {
      genus = englishGenus.genus;
    }

    if (species.generation?.name) {
      generation = species.generation.name.replace("generation-", "Gen ").toUpperCase();
    }

    captureRate = species.capture_rate;
  }

  return {
    id: pokemon.id,
    formattedId: formatPokemonId(pokemon.id),
    name: pokemon.name,
    types,
    image,
    shinyImage,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    baseExperience: pokemon.base_experience ?? 0,
    stats,
    totalStats,
    abilities,
    moves,
    genus,
    description,
    generation,
    captureRate,
  };
}

/**
 * Fetch a batch of Pokemon with their full types and artwork
 */
export async function getPokemonList(
  limit: number = 151,
  offset: number = 0
): Promise<PokemonSummary[]> {
  try {
    const listData = await fetchWithCache<PokeAPIListResponse>(
      `${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!listData || !listData.results) {
      return [];
    }

    // Concurrently fetch pokemon details in chunks of 25 to avoid overwhelming network
    const chunkSize = 25;
    const summaries: PokemonSummary[] = [];

    for (let i = 0; i < listData.results.length; i += chunkSize) {
      const chunk = listData.results.slice(i, i + chunkSize);
      const chunkResults = await Promise.all(
        chunk.map(async (item) => {
          try {
            const raw = await fetchWithCache<PokeAPIPokemon>(item.url);
            return raw ? transformToSummary(raw) : null;
          } catch {
            return null;
          }
        })
      );

      for (const res of chunkResults) {
        if (res) summaries.push(res);
      }
    }

    return summaries;
  } catch (error) {
    console.error("Failed to fetch Pokemon list:", error);
    throw new Error("Unable to retrieve Pokémon list. Please check your internet connection and try again.");
  }
}

/**
 * Fetch a single Pokemon by ID or Name
 */
export async function getPokemonById(
  idOrName: string | number
): Promise<PokemonDetail | null> {
  const query = String(idOrName).trim().toLowerCase();
  if (!query) return null;

  try {
    const pokemon = await fetchWithCache<PokeAPIPokemon>(
      `${BASE_URL}/pokemon/${query}`
    );

    if (!pokemon) {
      return null;
    }

    // Try fetching species data for lore/description (optional)
    let species: PokeAPISpecies | null = null;
    try {
      species = await fetchWithCache<PokeAPISpecies>(
        `${BASE_URL}/pokemon-species/${pokemon.id}`
      );
    } catch {
      // Species data optional; swallow error and proceed
      species = null;
    }

    return transformToDetail(pokemon, species);
  } catch (error) {
    console.error(`Failed to fetch Pokemon with ID/Name "${idOrName}":`, error);
    throw error;
  }
}
