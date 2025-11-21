# GGSIPU EDC ACM Student Chapter Website - Hero Section

## Overview
A premium, award-winning hero section designed to compete at Awwwards level. Built with Next.js 15, React, Framer Motion, and Tailwind CSS v4.

## Design Philosophy
- **Premium Feel**: $100k level website aesthetics with sophisticated animations
- **Dark Theme**: Pure black (#000000) background with ACM blue (#0085ca) accent
- **Minimalistic**: Clean, breathtaking design with proper storytelling
- **Typography**: Inter for body text, Space Grotesk for display headings
- **Modular Architecture**: Reusable components following best practices

## Components Created

### Hero (`/src/components/Hero.tsx`)
Main hero section featuring:
- Animated gradient text headings
- Staggered word-by-word animations
- Stats showcase (Members, Events, Projects)
- CTA buttons with hover effects
- Decorative elements and scroll indicator

### AnimatedText (`/src/components/AnimatedText.tsx`)
Reusable component for fade-in-up animations with customizable:
- Delay timing
- Duration
- Easing curves

### SplitText (`/src/components/SplitText.tsx`)
Word-by-word text reveal animation with spring physics

### ScrollIndicator (`/src/components/ScrollIndicator.tsx`)
Animated scroll prompt with bouncing chevron

### GridPattern (`/src/components/GridPattern.tsx`)
Background decorative grid with radial gradient overlays

## Color Scheme
- **Primary**: `#0085ca` (ACM Blue)
- **Primary Light**: `#00a3ff` (ACM Blue Light)
- **Background**: `#000000` (Pure Black)
- **Foreground**: `#ffffff` (White)
- **Grays**: Full gray scale from 50-900

## Typography Scale
- Hero Headings: 5xl → 9xl (responsive)
- Subtitle: sm → base
- Description: base → xl
- Stats: 3xl → 6xl

## Animation Features
- Staggered word animations with spring physics
- Fade-in-up transitions with custom easing
- Scale and opacity animations for decorative elements
- Smooth gradient text effects
- Button hover states with shadow glow
- Scroll indicator bounce animation

## Running the Project
```bash
cd client
npm run dev
```

Visit http://localhost:3000 to see the hero section.

## Next Steps
Consider adding:
- Navigation bar with blur effect
- About section with parallax
- Featured projects showcase
- Team members grid
- Events timeline
- Footer with social links
- Page transitions
- Custom cursor
- Smooth scroll
