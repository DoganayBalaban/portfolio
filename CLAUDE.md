# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- **Development server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Start production**: `npm start` 
- **Lint**: `npm run lint`

## Project Architecture

This is a **Next.js 15** portfolio website built with **TypeScript** and **Tailwind CSS v4**. The project uses the App Router architecture.

### Key Technologies Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4, Tailwind Merge, clsx for conditional classes
- **Animations**: Framer Motion, GSAP with React integration
- **Particles**: react-tsparticles with tsparticles-slim for star background effect
- **UI Components**: Custom components with shadcn/ui structure (Radix UI primitives)
- **Icons**: Lucide React

### Project Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with StarsBackground
│   ├── page.tsx           # Homepage with portfolio content
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── StarsBackground.tsx # Particle animation background
│   ├── ServicesCard.tsx   # Interactive cards with mouse tracking
│   └── ui/                # shadcn/ui components
├── data/                  # Static data files
└── lib/
    └── utils.ts           # Utility functions (cn helper)
```

### Key Components Architecture

**StarsBackground.tsx**: Uses react-tsparticles to create animated star field background with 300 white particles moving downward.

**ServicesCard.tsx**: Interactive card component with:
- Framer Motion mouse tracking for glow effects
- Image support for project thumbnails
- Hover animations and scaling transitions
- TypeScript interface for props

**Root Layout**: Includes global StarsBackground and sets up main container structure with proper z-indexing.

### Styling System
- Uses Tailwind CSS v4 with PostCSS plugin
- Custom utility function `cn()` in `lib/utils.ts` for conditional class merging
- shadcn/ui configuration in `components.json` with "new-york" style and neutral base color
- Path aliases configured: `@/*` maps to `./src/*`

### Development Notes
- All components are client-side (`"use client"`) due to animations and interactivity
- TypeScript strict mode enabled
- Project uses absolute imports with `@/` prefix
- Images stored in `public/` directory (profile.jpeg, project*.png)