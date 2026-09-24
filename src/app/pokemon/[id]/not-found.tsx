import React from "react";
import Link from "next/link";
import { Compass, HelpCircle } from "lucide-react";

export default function PokemonNotFound() {
  return (
    <div className="mx-auto my-16 max-w-md px-4 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400">
        <HelpCircle className="h-8 w-8" />
      </div>

      <h1 className="text-2xl font-black text-stone-900 dark:text-stone-100">
        Pokémon Not Found
      </h1>

      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
        The Pokémon ID or name you requested could not be found in the Pokédex. It might not exist in the PokeAPI database or the ID was invalid.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-red-700 active:scale-98"
        >
          <Compass className="h-4 w-4" />
          Return to Explorer
        </Link>
      </div>
    </div>
  );
}
