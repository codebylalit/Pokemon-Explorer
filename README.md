# Pokemon Explorer

A responsive web application for browsing and discovering Pokemon, built with Next.js (App Router), TypeScript, Tailwind CSS, and the public PokeAPI.

## Overview

Pokemon Explorer is an editorial Pokédex interface with modern typography, warm off-white tones, soft pastel type cards, and instant search. The application leverages Next.js Server Components for fast initial data delivery and combines them with client components for interactive filtering and pagination.

## Features

### Homepage
- **Editorial Hero Section**: Full-width spacious typography featuring pill badges, bold multi-line headline, and designer annotations.
- **Horizontal Visual Strip**: Scrollable strip of featured Pokemon cards styled like editorial photography with subtle hover animations and pastel backgrounds.
- **Initial Server-Rendered Listing**: Loads the initial collection of Pokemon server-side using PokeAPI with built-in caching.
- **Responsive Layout**: Adapts smoothly from a 2-column mobile grid to 3-column tablet and 4-column desktop grids.
- **Pokemon Cards**: Soft pastel backgrounds tailored to Pokemon types, 24px rounded corners, official high-resolution artwork, formatted IDs (#001), and minimal metadata.
- **Search and Filtering**:
  - Case-insensitive search by Pokemon name or numeric ID.
  - Elemental type filter tags.
  - Sorting options by ID (ascending/descending) and Name (alphabetical).
- **Pagination**: Bottom pagination controls with page numbers, items-per-page selector, and smooth top-scrolling.
- **Empty and Feedback States**: Clear messaging when no Pokemon match active search filters, along with an instant reset button.
- **Scroll Reveal Animations**: Smooth scroll-triggered fade-in animations with staggered card reveals as elements enter the viewport.
- **Loading and Error Handling**: Warm editorial skeleton loaders with shimmer wave animations and graceful error boundaries with retry actions.

### Pokemon Detail Page (`/pokemon/[id]`)
- **Dynamic Routing**: Dedicated pages accessible via Pokemon ID or name.
- **Editorial Presentation**: Large official artwork with a soft circular backdrop, physical dimensions (height, weight, base experience), and official Pokedex flavor text.
- **Base Stats Analytics**: Clean horizontal progress meters showing individual stat distributions alongside the Base Stat Total (BST).
- **Abilities**: Standard abilities and tagged hidden abilities.
- **Learnable Moves**: Searchable catalog of moves the Pokemon can learn.
- **Navigation and Resilience**: Simple back navigation, custom 404 page for missing or invalid IDs, and skeleton loading screens.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Data Source**: PokeAPI v2

## PokeAPI Integration

This application interacts with the following PokeAPI endpoints:
- `GET https://pokeapi.co/api/v2/pokemon?limit=151&offset=0` - Retrieves the base Pokemon list.
- `GET https://pokeapi.co/api/v2/pokemon/{id or name}` - Retrieves detailed attributes including stats, types, abilities, and moves.
- `GET https://pokeapi.co/api/v2/pokemon-species/{id or name}` - Retrieves Pokedex flavor text, genus descriptions, and generation information.
- **Artwork**: Official high-resolution artwork is delivered via PokeAPI's repository and optimized using Next.js Image component.

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm (or yarn / pnpm)

### Installation

1. Clone or open the repository:
   ```bash
   cd "Pokemon Explorer"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the local development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## Project Structure

```
Pokemon Explorer/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout, Google Fonts (Plus Jakarta Sans, Caveat), Navbar
│   │   ├── page.tsx                # Homepage server component (Hero, Visual Strip, Directory)
│   │   ├── loading.tsx             # Homepage loading skeleton
│   │   ├── error.tsx               # Homepage error boundary
│   │   ├── not-found.tsx           # Global 404 page
│   │   ├── globals.css             # Tailwind theme, pastel tokens, custom scrollbars
│   │   └── pokemon/
│   │       └── [id]/
│   │           ├── page.tsx        # Dynamic detail page server component
│   │           ├── loading.tsx     # Detail page loading skeleton
│   │           ├── error.tsx       # Detail page error boundary
│   │           └── not-found.tsx   # Pokemon not found UI
│   ├── components/
│   │   ├── Navbar.tsx              # Header and branding bar
│   │   ├── SearchBar.tsx           # Large editorial search input, type filters, sort options
│   │   ├── PokemonCard.tsx         # Art-piece styled Pokemon card with pastel background
│   │   ├── PokemonGrid.tsx         # 4-3-2 column responsive grid, pagination, empty state
│   │   ├── PokemonVisualStrip.tsx  # Horizontal featured Pokemon photo strip
│   │   ├── PokemonTypes.tsx        # Minimal pastel type badge component
│   │   ├── PokemonStats.tsx        # Base stats visualization with progress bars
│   │   ├── PokemonAbilities.tsx    # Standard and hidden abilities section
│   │   ├── PokemonMoves.tsx        # Move list with search filter
│   │   ├── LoadingState.tsx        # Skeleton loaders
│   │   └── ErrorState.tsx          # Error fallback card with retry button
│   ├── lib/
│   │   ├── api.ts                  # PokeAPI data fetching and mapping layer
│   │   └── constants.ts            # Type color schemes, stat scales, and formatters
│   └── types/
│       └── pokemon.ts              # TypeScript interfaces for API and UI models
├── public/                         # Static assets
├── next.config.ts                  # Next.js configuration and image domains
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

## Implementation Notes and Decisions

- **Editorial Design Direction**: Embraces a warm off-white canvas (`#F5F2EA`), charcoal typography, 24px-28px rounded corners, subtle hairline borders, and soft pastel type backgrounds rather than standard generic dashboard styling.
- **Initial Dataset**: The homepage fetches the first 151 Generation 1 Pokemon server-side with details in batches. This provides immediate data upon load and enables instant, zero-latency client-side search and filtering without unnecessary network roundtrips on every keypress.
- **Image Optimization**: Configured Next.js remote patterns to optimize official artwork directly from PokeAPI's repository.
- **Separation of Concerns**: Data fetching and normalization logic reside entirely within `src/lib/api.ts`, producing typed models (`PokemonSummary` and `PokemonDetail`) for clean component consumption.
- **Defensive Error Handling**: Optional species information (lore description, genus) is handled gracefully so detail pages render reliably even if secondary endpoints experience issues.
