import React from "react";
import Link from "next/link";
import { Compass, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto my-20 max-w-md px-4 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300">
        <FileQuestion className="h-8 w-8" />
      </div>

      <h1 className="text-2xl font-black text-stone-900 dark:text-stone-100">
        404 - Page Not Found
      </h1>

      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
        The page you are looking for does not exist in the Pokémon Explorer application.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-red-700 active:scale-98"
        >
          <Compass className="h-4 w-4" />
          Back to Pokédex Home
        </Link>
      </div>
    </div>
  );
}
