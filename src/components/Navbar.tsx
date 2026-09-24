import React from "react";
import Link from "next/link";
import { Compass } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200/80 bg-white/80 backdrop-blur-md dark:border-stone-800/80 dark:bg-stone-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo & Title */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          aria-label="Pokemon Explorer Home"
        >
          {/* Stylized Pokéball Logo */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-red-600 to-rose-500 text-white shadow-md shadow-red-500/20 transition-transform duration-300 group-hover:rotate-180">
            <div className="relative h-6 w-6 rounded-full border-2 border-white bg-white/10 flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-white" />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-base font-extrabold tracking-tight text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
              Pokédex <span className="text-red-600 dark:text-red-500">Explorer</span>
            </span>
            <span className="text-[10px] font-medium tracking-wide text-stone-600 dark:text-stone-300">
              Powered by PokeAPI
            </span>
          </div>
        </Link>

        {/* Right navigation links */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-xl border border-stone-200/80 bg-stone-50 px-3 py-1.5 text-xs font-semibold text-stone-700 transition-colors hover:border-stone-300 hover:bg-stone-100 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300 dark:hover:border-stone-700"
          >
            <Compass className="h-3.5 w-3.5 text-red-500" />
            <span>Explorer</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
