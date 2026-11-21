# Codevera — 3D Digital Agency Website

A responsive React + Vite agency website with a Three.js hero scene, GSAP scroll reveals, Framer Motion transitions and a contact form.

## Requirements
- Node.js 20.19+ or 22.12+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Before publishing
1. Replace the demo portfolio projects with real client work.
2. Update the WhatsApp number and email in `src/App.jsx`.
3. Connect the contact form to a backend or form service. It currently opens the visitor's email app with a pre-filled message.
4. Add real testimonials and verified pricing before making commercial claims.
5. Test on mobile and run `npm run build`.

## Deploy
The `dist` folder can be deployed to Netlify, Vercel or another static hosting provider. For Netlify, use build command `npm run build` and publish directory `dist`.
