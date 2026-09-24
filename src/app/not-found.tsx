import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto my-24 max-w-md px-6 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF5DB] text-[#7A6318]">
        <Compass className="h-6 w-6" />
      </div>

      <h1 className="text-2xl font-black tracking-tight text-[#141413]">
        404 — Page Not Found
      </h1>

      <p className="mt-2 text-sm text-[#524E48]">
        The page you are looking for does not exist in Pokémon Explorer.
      </p>

      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#141413] px-6 py-3 text-xs font-semibold text-white shadow-xs transition-all hover:bg-black active:scale-98"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to Explorer
        </Link>
      </div>
    </div>
  );
}
