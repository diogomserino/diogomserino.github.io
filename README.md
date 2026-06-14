# Diogo Serino — Portfolio

Personal portfolio and writing site. Built with [Eleventy (11ty)](https://www.11ty.dev/) — content is authored once per language and generated to static HTML. Bilingual (English / Portuguese) and deployed to GitHub Pages via GitHub Actions.

**Live:** [diogomserino.github.io](https://diogomserino.github.io)

---

## Stack

- **[Eleventy 3](https://www.11ty.dev/)** static site generator — Nunjucks (`.njk`) layouts and partials, written once and reused across both languages.
- **Hand-written CSS & JavaScript** — no CSS or JS frameworks. The generated output is plain static HTML/CSS/JS.
- **Bilingual EN/PT** — separate `/` (EN) and `/pt/` trees sharing a `translationKey`, which auto-wires `hreflang`, the EN&nbsp;|&nbsp;PT language switch, and the per-page language redirect.
- **GitHub Actions → GitHub Pages** — every push to `main` builds the site and publishes `_site/`.

## Development

```bash
npm install          # install Eleventy
npm run serve        # local dev server with live reload
npm run build        # build the site to _site/
```

## Structure

```
src/
  _includes/   layouts (base.njk) + partials (nav, footer, article-card, lang-switch)
  _data/       site metadata + UI strings
  en/          English pages and articles
  pt/          Portuguese pages and articles
assets/        CSS, JS, and images (copied through to /assets)
.eleventy.js   build config (input src/, output _site/)
```

## Contact

[LinkedIn](https://linkedin.com/in/diogomserino) · [GitHub](https://github.com/diogomserino) · [Website](https://diogomserino.github.io)

## License

The source code in this repository is released under the [MIT License](LICENSE).

Site content — articles, written copy, and images — is © 2026 Diogo Serino, all rights reserved, and may not be reused without permission.
