# Bit Byte Technologies — Website

React + Vite website with GSAP scroll animations and Lenis smooth scrolling.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

The ready-to-upload site is created in the `dist/` folder (upload its contents to Hostinger `public_html`).

## Edit content

All text (services, stats, contact, process steps) lives in `src/data/content.js`.

Before going live:
- Replace the sample numbers in `stats`
- Replace the placeholder `phone`

## Project structure

```
src/
  data/content.js        all website text
  lib/smooth.js          Lenis smooth scroll + scrollToId helper
  components/            one file per section
  styles/                one CSS file per section, base.css has the colour tokens
```

## Animations used

| Section   | Effect |
|-----------|--------|
| Page load | Preloader counter, split text heading reveal |
| Hero      | Animated gradient, particles, typing effect, magnetic buttons, parallax badges |
| Marquee   | Two running rows in opposite directions |
| Services  | Stagger reveal, 3D tilt, glare, hover line |
| About     | Scroll-linked word highlight |
| Stats     | Count-up numbers |
| Process   | Sticky stacking cards |
| Global    | Smooth scroll, custom cursor, scroll progress bar |

All animations switch off when the visitor has "reduce motion" enabled.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Bit Byte Technologies website"
git branch -M main
git remote add origin https://github.com/<your-username>/bitbyte-website.git
git push -u origin main
```
