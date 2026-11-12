# Apple Homepage Clone

A pixel-close rebuild of the live `https://www.apple.com` homepage, built with
React + Vite + Tailwind CSS and Lucide React. Product imagery is downloaded
locally into `public/assets/apple/` and served through relative paths.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview
```

## Tech stack

- React 18 + Vite 6
- Tailwind CSS 3.4 (custom `tablet` / `desktop` breakpoints)
- Lucide React for UI icons
- Exact Apple logo glyph extracted from the live site as an inline SVG

## What was extracted with REA

Browser target and page inspection were performed with REA over CDP
(`list_browser_targets`, `inspect_web_page`, `capture_web_screenshot`) against
the live page:

- target evidence: `ev_c8782b9e8e19fca05762d92840349633fe1dde809ffd1ab9dca27cb03ec1b4f6`
- page inspection: `ev_a1cd6fe8b02bb220e6ad7707ae7e64dea0ef70c3178f5c4809c7e587b8151b00`
- screenshot: `ev_34644336d3752b5266e63afba27bfabd937bcb95f9a6a608bd481bf23a01e599`

Observed values that drive the implementation:

| Token | Desktop (≥1069px) | Tablet (735–1068px) | Mobile (≤734px) |
| --- | --- | --- | --- |
| Global nav height | 44px | 44px | 48px |
| Hero tile height | 692px | 650px | 500px |
| Promo tile height | 580px | 490px | 500px |
| Hero headline | 56/60, 600 | 48/52, 600 | 32/36, 600 |
| Hero subhead | 28/32 | 24/28 | 19/23 |
| Promo headline | 40/44, 600 | 32/36, 600 | 32/36, 600 |
| Promo subhead | 21/25 | 19/23 | 19/23 |
| CTA | 17px, h44, radius 980 | 17px, h44 | 14px, h36 |
| Page text | `#1d1d1f` | | |
| Tile / footer surface | `#f5f5f7` | | |
| Primary CTA | `#0071e3` | | |
| Secondary link | `#0066cc` | | |
| Grid gap | 12px | 12px | 12px |
| Footer | 5 columns, 980px | 5 columns | accordions |

Typography uses the requested system fallback in place of SF Pro:

```css
system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

Art direction follows the live `<picture>` sources: `_small` (734×500) for
mobile, `_mediumtall` / `_medium` for tablet, and `_largetall` / `_large` for
desktop.

### Navbar tone

The live page currently uses a light translucent bar
(`rgba(245,245,247,.8)` + `backdrop-blur`), not a black bar, so the clone keeps
that observed treatment for pixel accuracy. To use the dark spec variant,
replace the nav classes in `src/components/Navbar.jsx` with
`backdrop-blur-md bg-black/80 text-white` and invert the item/icon colors.

## Component map

```
src/
  App.jsx                     page composition
  data/content.js             nav, heroes, promos, gallery, footer content
  components/
    Navbar.jsx                frosted global nav, search flyout, mobile drawer
    AppleLogo.jsx             exact Apple SVG glyph (viewBox 0 0 14 44)
    Ribbon.jsx                Veterans Day promo ribbon
    HeroItem.jsx              500/650/692px hero block with CTAs
    ProductGrid.jsx           1/2-column promo grid
    ProductCard.jsx           dark, split and logo-led promo variants
    TileImage.jsx             responsive <picture> art direction
    Entertainment.jsx         Apple TV+ gallery, portrait art on mobile
    Footer.jsx                5-column directory + mobile accordions
public/assets/apple/          43 downloaded image assets (~2.9 MB)
```

## Notes

- All links point at the corresponding apple.com destinations so the clone
  behaves like the source page.
- Images use `loading="lazy"` below the first hero; scroll the page once to
  load every tile before taking a full-page screenshot.
- No external font, icon CDN, or runtime network dependency is required.
