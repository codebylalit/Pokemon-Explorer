"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

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
    <div className="mx-auto my-12 flex max-w-md flex-col items-center justify-center rounded-3xl border border-red-200/80 bg-red-50/50 p-8 text-center shadow-xs dark:border-red-900/60 dark:bg-red-950/20">
      <div className="mb-4 rounded-2xl bg-red-100 p-4 text-red-600 dark:bg-red-900/40 dark:text-red-400">
        <AlertTriangle className="h-8 w-8" />
      </div>

      <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
        {title}
      </h2>

      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
        {message}
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-xs transition-all hover:bg-red-700 active:scale-98 cursor-pointer"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
        )}

        {showHomeLink && (
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-sm font-semibold text-stone-700 shadow-xs transition-all hover:bg-stone-50 active:scale-98 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-200 dark:hover:bg-stone-700"
          >
            <Home className="h-4 w-4" />
            Back to Explorer
          </Link>
        )}
      </div>
    </div>
  );
}
