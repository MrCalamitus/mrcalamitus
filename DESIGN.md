# Profile design system

One idea drives every visual on this profile: **a ledger that gets audited.** Luis's work lives in
certificates, election audits and regulatory platforms — systems that are verified, not just shipped.
The header seal, the mono "eyebrow" labels, the ruled background and the annotated commit ledger all
come from that world.

## Tokens

### Color

| Token | Dark | Light | Used for |
| :--- | :--- | :--- | :--- |
| `bg` | `#0B1220` | `#F8FAFC` | card background |
| `surface` | `#121B2F` | `#FFFFFF` | tiles, bar tracks |
| `line` | `#1F2A44` | `#E3E8EF` | grid, rules, card borders |
| `text` | `#E6EDF5` | `#0F172A` | headings, values |
| `muted` | `#8B98AD` | `#5B6B82` | captions, axes |
| `primary` · *signal* | `#00B4D8` | `#0891B2` | data, CTAs, GovTech series |
| `secondary` · *seal* | `#F5A524` | `#D97706` | annotations, eyebrows, Legal-tech series |
| `tertiary` | `#6F7F99` | `#94A3B8` | third series, "other" |

Rules: cyan carries **data and action**, amber carries **annotation and emphasis**, never the reverse.
Only one accent per element. Light values are darker to keep ≥ 4.5:1 contrast on white.

### Type

| Role | Family | Size / weight | Where |
| :--- | :--- | :--- | :--- |
| Display | Segoe UI → Helvetica Neue → Arial | 60/800 name · 34/800 values · 22/600 role · 15–16/400 body | header, tiles, chart subtitles |
| Utility (mono) | ui-monospace → SF Mono → Menlo → Consolas | 12/600 eyebrow, tracking 3 · 11–12/500 axes and labels · 10/500 footnotes | eyebrows, numbers, axis labels, repo names |

Eyebrows are **uppercase mono in amber** and name the artifact ("COMMIT LEDGER"), never a section number.

### Shape and spacing

- Cards: radius `20`, hairline border in `line`, canvas width `1200` (full) or `590` (half).
- Tiles and bars: radius `12` / `5`. Bars are `48px` wide on a `1200` canvas.
- Internal padding `40px` (`32px` on half cards). Charts keep a `70px` left gutter for axis labels.

### Motion

Bars and slices draw in once on load (≤ 0.8 s, staggered 60–80 ms), the seal's check strokes itself,
the outer ring rotates once every two minutes, and the header cursor blinks. Everything ends in its
final state (`fill="freeze"`), so nothing depends on the animation being seen.

## Components

| Component | File | Data source |
| :--- | :--- | :--- |
| Header | `assets/header-*.svg` | name, role, one tick on the seal per year on GitHub |
| Stats strip | `assets/stats-*.svg` | totals across all years |
| Commit ledger | `assets/commits-*.svg` | `totalCommitContributions` per year + `PERIODS` annotations |
| Collaboration lines | `assets/flow-*.svg` | PRs, reviews, issues per year |
| Top projects | `assets/projects-*.svg` | per-repo sums of each year's top-5 list, colored by `DOMAIN` |
| Domain donut | `assets/domains-*.svg` | same sums grouped by domain |

Every component ships in a `-dark` and `-light` variant and is embedded with `<picture>` +
`prefers-color-scheme`, so it follows the visitor's GitHub theme.

### Badges (shields.io)

- **Call to action** — `style=for-the-badge`, ink background `0B1220` with cyan logo; the primary CTA
  (ZOGA) inverts to cyan `00B4D8` with ink logo. Five max, centered under the header.
- **Tags** — `style=flat-square`, colored label (`00B4D8` for AI/data, `F5A524` for practice/security)
  and ink body `0B1220`. Text in the tag says what the tool *does*, e.g. `Ollama · local LLMs`.
- Badge-safe accents: shields draws white text, so the right side of a tag uses the darker
  `0E7490` (cyan) or `B45309` (amber) to keep ≥ 4.5:1 contrast instead of the display accents.
- CTA glyphs are original inline SVGs (base64 in the URL), not brand icons from simple-icons —
  brand icons get removed without notice (LinkedIn's was, in 2024) and then the badge renders blank.
  The one exception is `logo=linkedin`, which shields only draws in its own brand color, so no
  `logoColor` is set on it.
- No third-party stats cards. `github-readme-stats` is unmaintained and its public instance is
  rate-limited or down most of the time; `streak-stats` shares the same failure mode. Every number
  on the profile comes from `data/github.json` and is rendered by the generator.

## Refreshing

Automatic: `.github/workflows/refresh-profile.yml` runs every Monday (and on demand from the
Actions tab). It calls `scripts/fetch_github.py`, regenerates the SVGs and commits them.

One-time setup:
1. Create a classic PAT with `repo` + `read:user` and save it as the repository secret
   `GH_STATS_TOKEN`. Without it the workflow still runs, but only public contributions are counted.
2. Optional: repository variable `EXCLUDE_REPOS` (comma-separated) hides private repo names from
   the per-project charts — `data/github.json` is public.
3. The README embeds the assets by absolute URL on the `main` branch; if the profile repo uses
   `master`, replace `/main/` in README.md.

Manual: `GITHUB_TOKEN=... python3 scripts/fetch_github.py && python3 scripts/generate_assets.py`.
The current year is drawn hatched and labeled `ytd` automatically.

To add a period label to the commit ledger, edit `PERIODS` in the script; to reclassify a repo,
edit `DOMAIN`.
