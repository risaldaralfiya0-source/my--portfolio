# Alafiya Risaldar — Portfolio

A modern, minimal personal portfolio built with **Vite + React + Tailwind CSS + Framer Motion + Lucide**. Dark mode is the default; a light mode toggle is included. Fully responsive, mobile-first and accessible.

## 🚀 Quick start

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

## 📦 Production build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the built site locally
```

## 🌐 Deploy

### Vercel
1. Push the project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) → **Import Project** → select the repo.
3. Framework is detected as **Vite**. Build command `npm run build`, output directory `dist`.
4. Click **Deploy**. Every push to `main` auto-deploys.

### Netlify
1. Push the project to a GitHub repository.
2. In Netlify → **Add new site → Import an existing project** → select the repo.
3. Build command: `npm run build` — Publish directory: `dist`.
4. Click **Deploy site**.

Or drag-and-drop the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

### Vercel CLI (from this machine)
```bash
npx vercel login
npx vercel deploy --prebuilt --yes
```
`--prebuilt` uses the already-generated `dist/` output (copied into `.vercel/output/static`). Anonymous `--temporary` deployments are blocked publicly by Vercel, so a login is required for a shareable URL.

## ✏️ Customize

**All personal content lives in `src/data/data.js`** — you don't need to touch any component.

| What to change | Where |
| --- | --- |
| Name, role, bio, location, availability | `profile` in `src/data/data.js` |
| Typing animation roles | `profile.typingRoles` |
| Stats (currently hidden — no invented numbers) | `stats` |
| Skills & categories | `skills` |
| Projects, links, tech badges | `projects` |
| Experience & education | `experience`, `education` |
| Email (currently hidden) & social links | `contact`, `socials` |
| Nav links | `navLinks` |
| Photo | Put an image in `public/` and set `profile.photo = '/photo.jpg'` — leave empty for the initials placeholder |
| Project thumbnails | Put images in `public/` and set each project's `image` field; images are lazy-loaded |
| Favicon | Replace `public/favicon.svg` |
| Colors | `--bg`, `--surface`, `--txt`, `--muted` in `src/index.css`; `brand` colors in `tailwind.config.js` |
| Font | Swap Inter in `index.html` and `tailwind.config.js` |

> Replace the sample `example.com` and `github.com/alafiyarisaldar/...` links with your real ones before publishing.

## 🧭 Project structure

```
src/
├── data/data.js          # single source of truth for content
├── components/           # Navbar, ProjectCard, ContactForm, Reveal, etc.
└── sections/             # Hero, About, Skills, Projects, Timeline, Contact, Footer
```

## ♿ Accessibility & performance notes

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) and skip link.
- Visible keyboard focus rings, labelled form fields and icon-only buttons.
- `prefers-reduced-motion` support; animations are kept between 0.3–0.6s.
- Images use `loading="lazy"` and the theme is applied before first paint to avoid flashes.
