import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6E0D4] bg-[#F5F2EA]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Brand / Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label="Pokémon Explorer Home"
        >
          {/* Minimalist Pokéball Icon */}
          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#141413] bg-[#141413] text-white transition-transform duration-300 group-hover:rotate-180">
            <div className="relative h-4 w-4 rounded-full border border-white/40 bg-white/20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </div>
          </div>

          <span className="text-base font-extrabold tracking-tight text-[#141413]">
            Pokémon Explorer
          </span>
        </Link>



        {/* Right: Search + Rounded Pill CTA */}
        <div className="flex items-center gap-4">
          <a
            href="#explore"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#524E48] hover:text-[#141413] transition-colors px-2 py-1"
            aria-label="Jump to search"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search</span>
          </a>

          <a
            href="#explore"
            className="inline-flex items-center justify-center rounded-full bg-[#141413] px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-black hover:scale-[1.02] active:scale-[0.98] shadow-xs"
          >
            Explore
          </a>
        </div>
      </div>
    </header>
  );
}
