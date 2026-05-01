# Imagix

Imagix is a Next.js App Router project for an AI image generation interface.  
The current UI includes a hero section, prompt input card, suggestion chips, top and bottom navigation, sidebar, and footer components.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Project Structure

Key files and folders:

- `src/app/layout.tsx` - App shell layout
- `src/app/page.tsx` - Main landing page
- `src/app/components/TopNavbar.tsx`
- `src/app/components/Sidebar.tsx`
- `src/app/components/PromptCard.tsx`
- `src/app/components/SuggestionChips.tsx`
- `src/app/components/BottomNavbar.tsx`
- `src/app/components/Footer.tsx`

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create a production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint checks

## Development Notes

- This project uses the App Router (`src/app`).
- Update `src/app/page.tsx` to change the main screen content.
- Reusable UI parts live in `src/app/components`.

## Deployment

You can deploy this app to any Node.js-compatible host or use [Vercel](https://vercel.com/new).

For production deployment details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
