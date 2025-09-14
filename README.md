# Kdesa Ultra Portfolio

High-fidelity portfolio starter built with Next.js (App Router), Tailwind, Framer Motion, GSAP, and Three.js.

How to run:

```
npm install
npm run dev
```

Deploy to Vercel: push to GitHub then import in Vercel.

This project is an original recreation inspired by top portfolio sites. Replace placeholder content under `data/` and `public/` with your own assets.


## v3 Upgrades
- Shader hero (canvas fallback + Three.js high fidelity)
- Project detail pages with long-form case studies
- Next/Image ImageBlock + responsive sizes
- Supabase form integration stub
- Konami easter egg and PWA manifest
- Howler stub for sound (hover placeholders)

## Deploy notes
- Ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in Vercel if you want Supabase logging.
- Replace Formspree ID if using Formspree.
\n\n## v4 - World-class features added\n- Command palette (⌘K) for instant search/navigation\n- Smart sticky navbar + mega menu\n- Parallax 3D hero with mouse parallax and shader fallback\n- Prefetch on hover for links, microinteraction improvements\n- Expanded case-study pages and gallery placeholders\n

## v5 polish
- New typography (Clash Display + Inter via Google Fonts)
- Glassmorphism, refined gradients, and new theme toggle
- Enhanced animated cursor with hover labels
- Page overlay transition and improved CTAs
- Sound asset placeholders and howler stub included

How to customize: replace public/sounds/*.ogg with real audio and update components to reference them.
