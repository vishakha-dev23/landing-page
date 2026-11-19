# Flaire landing page

React (Vite) landing page for the Flaire Shopify theme.

```
npm install
npm run dev       # local preview with live reload
npm run build     # static site in dist/, deploy anywhere
```

## Where things live

- `src/content.js`: every word on the page. House style: British spelling, no dashes or hyphens in visible text.
- `src/config.js`: install, demo, support and legal links; the demo store password (shown next to demo links when set); image slots.
- `public/screens/`: real captures of the Flaire demo store.
- `public/images/`: optional marketing images (see below).

## Image slots

Drop a file with the exact name into `public/images/` and it appears; until then the section uses its fallback.

| File | Size | Where | Fallback |
|---|---|---|---|
| `finish-yellow-gold.webp`, `finish-rose-gold.webp`, `finish-white-gold.webp`, `finish-platinum.webp` | 1600 x 1600 | Finish swatches card, swaps with the swatch | Close crop of the real product page |
| `credit-shared-bag.webp`, `credit-photo-search.webp`, `credit-back-in-stock.webp`, `credit-gift-reminders.webp`, `credit-try-on.webp` | 1200 x 1500 | Dark credits section, changes as rows are hovered | Typographic list only |
| `closing.webp` | 2400 x 1200 | Under the final call to action | No image |

All four finish photos must exist for the interactive swatches to switch on, and all five credit photos for the image column to appear.
