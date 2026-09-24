import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon Explorer - Discover & Inspect Pokémon",
  description:
    "A modern, responsive Pokémon Explorer powered by PokeAPI. Browse Pokémon, search by name, filter by types, and explore comprehensive stats, abilities, and moves.",
  keywords: ["Pokemon", "Pokedex", "PokeAPI", "Pokemon Explorer", "Next.js", "Tailwind CSS"],
  authors: [{ name: "Pokemon Explorer Team" }],
  openGraph: {
    title: "Pokemon Explorer - Discover & Inspect Pokémon",
    description: "Explore Pokémon base stats, abilities, types, and learnable moves with rich visual analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 selection:bg-red-500 selection:text-white dark:bg-stone-950 dark:text-stone-100 font-sans">
        <Navbar />
        <main className="flex-1 pb-16">{children}</main>
        <footer className="border-t border-stone-200/80 bg-white py-6 text-center text-xs text-stone-600 dark:border-stone-800/80 dark:bg-stone-950 dark:text-stone-300">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              Data provided by{" "}
              <a
                href="https://pokeapi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-600 hover:underline dark:text-red-400"
              >
                PokeAPI
              </a>
              . Pokémon and Pokémon character names are trademarks of Nintendo.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

