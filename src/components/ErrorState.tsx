"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, ArrowLeft } from "lucide-react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHomeLink?: boolean;
}

export function ErrorState({
  title = "Something went wrong",
  message = "Failed to load Pokémon data. Please check your internet connection and try again.",
  onRetry,
  showHomeLink = true,
}: ErrorStateProps) {
  return (
    <div className="mx-auto my-16 flex max-w-md flex-col items-center justify-center rounded-[28px] border border-[#E6E0D4] bg-white p-8 text-center shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div className="mb-4 rounded-full bg-[#FCEAE5] p-3.5 text-[#8F3B29]">
        <AlertCircle className="h-6 w-6" />
      </div>

      <h2 className="text-xl font-bold tracking-tight text-[#141413]">
        {title}
      </h2>

      <p className="mt-2 text-sm text-[#524E48]">
        {message}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 rounded-full bg-[#141413] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-black active:scale-98 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Try Again
          </button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#E0D9CB] bg-white px-5 py-2.5 text-xs font-semibold text-[#141413] shadow-2xs transition-all hover:bg-[#FAF8F5] active:scale-98"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Explorer
          </Link>
        )}
      </div>
    </div>
  );
}
