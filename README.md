# Bailamos — Bachata Festival Website

A modern, responsive website for the **Bailamos** bachata festival, built with Next.js and Tailwind CSS. Inspired by contemporary event and dance festival sites, with a focus on vibrant design, smooth animations, and accessibility.

## Features

- **Hero** with countdown timer, date/location, and clear CTAs
- **Event intro** — what the festival is about
- **Venue** — Grand Arena Barcelona with key info and features
- **Artists** — lineup section with placeholder artist cards
- **Schedule** — four-day program overview
- **Tickets** — full pass info and purchase CTA
- **FAQ** — accordion with common questions
- **News** — blog/updates section for announcements
- **Responsive navigation** — mobile menu and desktop links
- **Accessibility** — skip link, focus styles, semantic HTML, ARIA where needed

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript
- Google Fonts: Outfit (display), DM Sans (body)

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Design

- **Colors:** Dark background (#0c0a09), warm white text, accent red/coral (#e11d48, #fb7185), gold highlights — aligned with bachata energy and culture.
- **Typography:** Outfit for headings, DM Sans for body.
- **Animations:** CSS keyframes for fade-in-up, pulse glow on primary CTA, and staggered section reveals.

## Customization

- Update event date in `src/components/Hero.tsx` (`EVENT_DATE`).
- Edit artists, schedule, FAQ, and news in their respective components under `src/components/`.
- Replace placeholder imagery with real photos and add your ticket/registration URL in the Tickets section.

## License

Private. All rights reserved.
