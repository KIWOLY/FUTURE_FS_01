# Portfolio Audit — Baseline (Phase 0)

Captured 2026-07-26 against the live production site `https://kiwoly.tlms.live/`
(unchanged since deploy at commit `ababe10`, tagged `pre-astro-baseline`) and a
local `npm run build` of the same commit.

This file will get an "After" column appended in Phase 4. Nothing in this
document is edited retroactively — new data is appended, not overwritten.

## Branch base sanity check

`fix/portfolio-ssg` branches from `dev` at `ababe10`. Verified `dev` is not
stale relative to `main`:

```
$ git fetch origin
$ git diff --stat origin/main dev
(empty output)
```

`origin/main` and `dev` point to identical trees — `main` is just `dev`
merged in via PRs #13/#14/#15 (`184eadc`, `671281d`, `bd84be6`), no divergent
content on either side. (The *local* `main` ref was behind `origin/main`
before this `git fetch` — that's a stale local pointer only; we never built
off local `main`, so it didn't affect this branch.) Safe to proceed — `dev`
is current.

## Primary damage: broken OG image and zero preview-bot content

This is the metric that matters most — direct evidence of what recruiters,
ATS systems, and link-preview bots actually see today.

**`/folio.png` (the `og:image` and favicon target) is a 404:**

```
$ curl -sI https://kiwoly.tlms.live/folio.png
HTTP/1.1 404 Not Found
Server: nginx/1.18.0 (Ubuntu)
Date: Sun, 26 Jul 2026 07:07:59 GMT
Content-Type: text/html
Content-Length: 153
Connection: keep-alive
```

**Raw HTML contains zero Open Graph or Twitter Card tags** (a preview bot
reading raw HTML, not executing JS, sees none of the tags defined in
`App.jsx` via `react-helmet` — those only exist after client-side React
mounts):

```
$ curl -s https://kiwoly.tlms.live/ | grep -iE "og:|twitter:|<title>|canonical"
  <title>Innocent Kiwoly Portfolio</title>
```

That's the *only* match — one `<title>` tag, from the static fallback in
`index.html`. No `og:title`, `og:description`, `og:image`, `og:url`,
`twitter:card`, or `canonical` link exists anywhere in the bytes a
link-preview bot fetches.

**Link-preview validator results:**

| Validator | Result |
|---|---|
| Facebook Sharing Debugger | Attempted via automated fetch — blocked by login wall ("Log into Facebook to use this tool"). Facebook does not allow anonymous scrapes of the debugger UI, consistent with it being an authenticated tool. **Manual validation pending** — you'll run this yourself and paste results back. |
| Twitter/X Card Validator | Not attempted automatically (Twitter/X removed public, unauthenticated access to this tool some years ago). **Manual validation pending.** |
| LinkedIn Post Inspector | Not attempted automatically (requires LinkedIn login for reliable results). **Manual validation pending.** |

Given the raw HTML has no OG/Twitter tags at all and `og:image` 404s, the
expected result from all three tools today is: no image, generic or missing
title/description, broken image icon. This will be confirmed against your
manual runs and recorded here (not overwritten — appended) once you paste
them back.

## Raw HTML — what a non-JS client actually receives

```
$ curl -s https://kiwoly.tlms.live/ > baseline.html
$ wc -c baseline.html
666 baseline.html
```

Full body:

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/folio.png" />

  <!-- Mobile responsiveness -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Fallback SEO (React Helmet will override) -->
  <title>Innocent Kiwoly Portfolio</title>

  <meta name="description"
    content="Portfolio website of Innocent Kiwoly, DevOps Engineer and Full-Stack Developer." />
  <script type="module" crossorigin src="/assets/index-Vuyo1kKx.js"></script>
  <link rel="stylesheet" crossorigin href="/assets/index-VaRjMPWd.css">
</head>

<body>
  <div id="root"></div>
</body>

</html>
```

## Content string checks (raw HTML, no JS execution)

```
$ for term in "Innocent Kiwoly" "DevOps Engineer" "e-commerce" "Air quality" "e-learning" "<h1" "<h2" "<nav" "<main"; do
    echo "\"$term\": $(grep -c -- "$term" baseline.html)"
  done
```

| String | Count | Note |
|---|---|---|
| `Innocent Kiwoly` | 2 | only in `<title>`/meta description, not body |
| `DevOps Engineer` | 1 | only in meta description |
| `e-commerce` (project title) | 0 | |
| `Air quality` (project title) | 0 | |
| `e-learning` (project title) | 0 | |
| `<h1` | 0 | no headings in raw HTML |
| `<h2` | 0 | |
| `<nav` | 0 | |
| `<main` | 0 | |

Zero project titles, zero headings, zero semantic landmarks reach a client
that doesn't execute JavaScript.

## Response headers

Root document:

```
$ curl -sD - -o /dev/null https://kiwoly.tlms.live/
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sun, 26 Jul 2026 06:35:41 GMT
Content-Type: text/html
Content-Length: 666
Connection: keep-alive
Last-Modified: Tue, 12 May 2026 10:03:59 GMT
ETag: "6a02fb0f-29a"
Accept-Ranges: bytes
```

Hashed JS asset (`/assets/index-Vuyo1kKx.js`):

```
$ curl -sD - -o /dev/null https://kiwoly.tlms.live/assets/index-Vuyo1kKx.js
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Sun, 26 Jul 2026 06:35:42 GMT
Content-Type: application/javascript
Content-Length: 243327
Connection: keep-alive
Last-Modified: Tue, 12 May 2026 10:03:59 GMT
ETag: "6a02fb0f-3b67f"
Accept-Ranges: bytes
```

Observations:
- **No `Cache-Control` or `Expires` header anywhere** — not on the HTML, not
  on the content-hashed JS bundle that could safely be cached for a year.
  This is stock `nginx:alpine` default config, not a deliberate policy.
- `Content-Encoding: gzip` is present when requested with
  `Accept-Encoding: gzip` — compression is happening, but there is no
  `nginx.conf` in this repo, so it's not something this project controls or
  can guarantee (likely coming from a reverse proxy in front of the
  container, since the container itself only publishes port 8080/HTTP and
  the site is served over HTTPS on a custom domain).
- No security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, CSP) on any response.

## Local build output (`npm run build`, current stack)

```
$ npm run build
vite v7.3.1 building client environment for production...
transforming...
✓ 1728 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   0.67 kB │ gzip:  0.42 kB
dist/assets/index-VaRjMPWd.css   34.02 kB │ gzip:  6.47 kB
dist/assets/index-CljWtbAg.js   243.33 kB │ gzip: 76.36 kB
✓ built in 6.71s
```

```
$ du -sh dist && find dist -type f | wc -l
1.5M	dist
11
```

| File | Size |
|---|---|
| `assets/index-CljWtbAg.js` | 240K |
| `assets/index-VaRjMPWd.css` | 36K |
| `hero-bg.jpg` | 96K |
| `index.html` | 4.0K (on disk block size; actual bytes 0.67K) |
| `kiwoly.pdf` | 88K |
| `profile4.jpeg` | 96K |
| `project/air_quality.png` | 332K |
| `project/e-commerce.png` | 340K |
| `project/e-learning.png` | 256K |
| `robots.txt` | 4.0K |
| `sitemap.xml` | 4.0K |

**JS bundle to beat in Phase 2: 243.33 kB raw / 76.36 kB gzip.**

## Lighthouse (live site, `google-chrome` headless)

```
$ npx lighthouse https://kiwoly.tlms.live/ \
    --output=json --output=html \
    --chrome-flags="--headless=new --no-sandbox" \
    --only-categories=performance,accessibility,best-practices,seo
```

| Category | Score |
|---|---|
| Performance | 80 |
| Accessibility | 80 |
| Best Practices | 96 |
| SEO | 100 |

**Important caveat — do not be reassured by the SEO=100 score.** Lighthouse
runs a real headless Chrome instance that executes the site's JavaScript
before auditing, so it is scoring the *hydrated* DOM, not what a non-JS
client receives. Its SEO checks (meta description present, viewport tag,
crawlable anchors, etc.) all pass against the rendered page. This score is
consistent with — not contradictory to — the empty raw-HTML shell shown
above. It measures something different from "can a link-preview bot or a
non-rendering crawler read this content," which is the actual problem. This
is the central risk of trusting Lighthouse alone for a CSR site.

### Itemized Accessibility failures (score 80)

| Audit | Weight | Issue | Specific elements |
|---|---|---|---|
| `button-name` | 10 | Buttons with no accessible name — screen readers announce them as just "button" | Mobile nav hamburger toggle: `<button class="md:hidden p-2 text-foreground">` in `Navbar.jsx` — icon-only, no `aria-label` |
| `color-contrast` | 7 | Text/background contrast ratio insufficient | 14 elements: the "Contact Me" button label span (`Button.jsx` usage in `Hero.jsx`/`Navbar.jsx`), the contact form submit button label, and every project tag pill in `Project.jsx` (`<span class="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground">`) — 12 of the 14 flagged instances are tag pills |
| `link-name` | 7 | Links with no discernible accessible name | Social icon links in `Hero.jsx` (GitHub/LinkedIn/Instagram `<a>` wrapping only an icon, no `aria-label`/text), and the project card overlay + footer-style icon links in `Project.jsx` (external-link and GitHub icon buttons per project card) |

### Itemized Performance failures (score 80)

| Audit | Weight | Value | Note |
|---|---|---|---|
| `total-blocking-time` | 30 | 330 ms | Main thread blocked by JS parse/exec before the page is interactive |
| `largest-contentful-paint` | 25 | 3.1 s | Nothing paints until the 243 KB JS bundle downloads, parses, and executes React |
| `first-contentful-paint` | 10 | 2.5 s | Same root cause — no content exists before JS runs |
| `speed-index` | 10 | 4.8 s | |
| `interactive` (TTI, unweighted) | 0 | 4.4 s | |
| `max-potential-fid` | 0 | 430 ms | Longest blocking task on main thread |
| `mainthread-work-breakdown` (insight) | 0 | 3.6 s | Time spent parsing/compiling/executing JS |
| `unused-javascript` (insight) | 0 | ~97 KiB est. savings | Dead code in the bundle |
| `cache-insight` | 0 | ~795 KiB est. savings | Direct consequence of the missing `Cache-Control` headers noted above |
| `image-delivery-insight` | 0 | ~384 KiB est. savings | Unoptimized `hero-bg.jpg`/`profile4.jpeg`/project PNGs — targeted in Phase 3 item 8 |
| `render-blocking-insight` | 0 | ~300 ms est. savings | |

Every one of the top-weighted performance failures (TBT, LCP, FCP — 65% of
the category's weight combined) traces back to the same root cause as the
crawlability problem: there is no content until the JS bundle executes.
Astro's static output (Phase 2) should fix FCP/LCP/TBT directly by making
content paint before any JS runs. The cache and image findings are addressed
separately in Phase 3.

## Root cause (confirmed, not hypothesized)

- `index.html:19` — `<div id="root"></div>` with no server-rendered content.
- `src/main.jsx:6-10` — pure client-side `createRoot().render()`, no
  SSR/SSG/prerender step anywhere in the toolchain.
- `vite.config.js` has no SSR/prerender plugin — just `react()` and
  `tailwindcss()`.
- Confirmed identically in a fresh local build (`dist/index.html` is the
  same empty shell) and against the live site with a spoofed Googlebot user
  agent (no difference — the shell doesn't change based on UA since no
  server-side logic inspects it).
- Bonus defect found in the same investigation: `og:image` and the favicon
  both reference `/folio.png`, which does not exist anywhere in `public/` or
  `dist/` — confirmed via `find`. Fixed in Phase 1.
