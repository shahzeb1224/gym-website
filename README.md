# IRONHAUS — The Art of Strength

A complete, single-page **premium fitness brand website**. Dark, cinematic, athletic,
high-performance — built as one cohesive campaign around the brand red `#E10600`.

Pure **static HTML/CSS/JS**. No build step, no framework, no dependencies.

```
gym website/
├─ index.html            # all sections (nav → hero → … → footer)
├─ css/
│  └─ styles.css         # design system, components, cinematic image system, responsive, motion
├─ js/
│  └─ main.js            # nav state, mobile menu, scroll-reveal, stat counters, hero parallax, FAQ
├─ brand/
│  ├─ logo.svg           # horizontal wordmark lockup (reference asset)
│  └─ favicon.svg        # peak-mark favicon
├─ images/
│  ├─ PROMPTS.md         # ← per-image AI prompts + exact filenames + placements
│  ├─ hero/  training/  classes/  facilities/  trainers/  recovery/  community/
└─ .claude/launch.json   # optional local preview-server config
```

## Run it

Any of these work — it's just static files.

**Open directly:** double-click `index.html`. (Images show cinematic placeholders; that's expected — see below.)

**Local server (recommended):**

```bash
python -m http.server 5500
```

Then visit <http://localhost:5500>. (Node alternative: `npx serve` or `npx http-server`.)

## Images — how the "drop-in" system works

There are **no stock photos** here by design. Every visual slot already points at its
**final `.webp` path** (e.g. `images/hero/hero-athlete-training.webp`). Until that file
exists, the site renders an **on-brand cinematic placeholder** automatically — a dark
graded panel with a faint peak monogram and the target filename — so nothing ever looks
broken.

**To go live with real photography:**
1. Open [`images/PROMPTS.md`](images/PROMPTS.md) — it lists every image, its exact
   filename, aspect ratio, placement, and a full art-directed AI prompt (plus a shared
   style block to prepend).
2. Generate each image (any capable image model), export as **`.webp`**.
3. Save it to the **exact path/filename** shown.
4. Refresh. It appears in place — **no code changes needed**.

`<img>` slots (cards, portraits) fall back via `onerror`; full-bleed backgrounds (hero,
bands, final CTA) layer the photo over a cinematic gradient via a CSS `--photo` variable.

## Make it yours

**Rename the brand:** find-and-replace `IRONHAUS` across `index.html` (and the tagline
"The Art of Strength"). Update the inline logo mark in `index.html` + `brand/*.svg` if
desired.

**Colors:** all tokens live in `:root` at the top of `css/styles.css` — change `--red`,
the blacks/charcoals, and text grays in one place. Also update `<meta name="theme-color">`
in `index.html`.

**Fonts:** `Anton` (display) + `Inter` (body) load from Google Fonts in `index.html`.
Swap the `<link>` and the `--font-display` / `--font-body` tokens to change them.

**Copy, pricing, trainers, hours, address, socials:** all plain text in `index.html`.

## Notes
- **Accessibility:** semantic landmarks, skip link, descriptive `alt` text, visible focus
  rings, keyboard-friendly menu + FAQ, and full `prefers-reduced-motion` support.
- **Performance:** hero styling is CSS-only; below-fold images use `loading="lazy"`;
  media wrappers reserve space (no layout shift); placeholders add zero extra requests.
- **SEO/social:** title, meta description, Open Graph tags, `theme-color`, SVG favicon.
- Requires an internet connection only for the Google Fonts CDN; everything else is local.
