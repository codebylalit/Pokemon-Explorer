import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pokémon Explorer — Discover & Explore Pokémon",
  description:
    "An editorial, minimalist Pokémon Explorer. Browse Pokémon, search by name, filter by elemental types, and inspect detailed stats, abilities, and learnable moves.",
  keywords: ["Pokemon", "Pokedex", "PokeAPI", "Pokemon Explorer", "Editorial", "Minimalist"],
  authors: [{ name: "Pokemon Explorer" }],
  openGraph: {
    title: "Pokémon Explorer — Discover & Explore Pokémon",
    description: "An editorial, minimalist Pokémon Explorer with visual statistics, abilities, and type profiles.",
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
      className={`${plusJakartaSans.variable} ${caveat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F5F2EA] text-[#141413] selection:bg-[#E8E1D5] selection:text-[#141413] font-sans">
        <Navbar />
        <main className="flex-1 pb-24">{children}</main>
        <footer className="border-t border-[#E6E0D4] bg-[#F0ECE1] py-10 text-xs text-[#78756F]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#141413]/30" />
              <p className="font-medium text-[#484540]">
                Pokémon Explorer — Curated Generation I Pokédex
              </p>
            </div>
            <p>
              Data provided by{" "}
              <a
                href="https://pokeapi.co"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#141413] underline underline-offset-2 hover:text-black transition-colors"
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
