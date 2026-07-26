# Portfolio Audit — Baseline (Phase 0)

Captured 2026-07-26 against the live production site `https://kiwoly.tlms.live/`
(unchanged since deploy at commit `ababe10`, tagged `pre-astro-baseline`) and a
local `npm run build` of the same commit.

This file will get an "After" column appended in Phase 4. Nothing in this
document is edited retroactively — new data is appended, not overwritten.

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
