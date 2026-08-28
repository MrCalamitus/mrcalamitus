#!/usr/bin/env python3
"""
Generate the README visual assets for github.com/MrCalamitus.

Reads   data/github.json   (raw output of the GitHub GraphQL query)
Writes  assets/*-dark.svg and assets/*-light.svg

Every color, font and spacing value comes from the token system in DESIGN.md.
Re-run after refreshing data/github.json:

    python3 scripts/generate_assets.py
"""
import json
import math
import pathlib
from datetime import date

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "data" / "github.json"
OUT = ROOT / "assets"
OUT.mkdir(exist_ok=True)

# ---------------------------------------------------------------- tokens ---
THEMES = {
    "dark": dict(
        bg="#0B1220", surface="#121B2F", line="#1F2A44",
        text="#E6EDF5", muted="#8B98AD",
        primary="#00B4D8", secondary="#F5A524", tertiary="#6F7F99",
    ),
    "light": dict(
        bg="#F8FAFC", surface="#FFFFFF", line="#E3E8EF",
        text="#0F172A", muted="#5B6B82",
        primary="#0891B2", secondary="#D97706", tertiary="#94A3B8",
    ),
}
DISPLAY = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif"
MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace"
RADIUS = 20

# Domain classification for repositories (everything else = product/client work)
DOMAIN = {
    "COFEPRIS": "gov", "actasPREP": "gov", "SIVEI": "gov", "validationPREP": "gov",
    "PrepIEEMValidation": "gov", "network-actas-prep": "gov",
    "certisep": "legal", "certisep-prospeccion": "legal", "certisepAPP": "legal",
    "rin": "legal", "e.firma": "legal", "secureSign": "legal",
}
DOMAIN_LABEL = {
    "gov": "GovTech & elections",
    "legal": "Legal-tech & certification",
    "other": "Products & client platforms",
}
PRETTY = {
    "COFEPRIS": "COFEPRIS · Digipris", "rin": "Red Integral Notarial",
    "certisep": "Certisep", "actasPREP": "PREP · actas", "upperbus": "Upperbus",
    "rideUpp": "Rideupp", "certisep-prospeccion": "Certisep · prospecting",
}
# Periods annotated on the commit ledger (start year, end year, label)
PERIODS = [
    (2014, 2014, "Merik"),
    (2016, 2018, "Upperbus · Rideupp"),
    (2019, 2021, "Red Integral Notarial"),
    (2023, 2024, "COFEPRIS · Digipris"),
    (2025, 2026, "Certisep · AI agents"),
]


# ------------------------------------------------------------------ data ---
def load():
    u = json.load(open(DATA))["data"]["user"]
    years = sorted(int(k[4:]) for k in u if k.startswith("year"))
    rows = []
    for y in years:
        d = u[f"year{y}"]
        rows.append(dict(
            year=y,
            commits=d["totalCommitContributions"],
            prs=d["totalPullRequestContributions"],
            reviews=d["totalPullRequestReviewContributions"],
            issues=d["totalIssueContributions"],
            repos={r["repository"]["name"]: r["contributions"]["totalCount"]
                   for r in d["commitContributionsByRepository"]},
        ))
    per_repo = {}
    for r in rows:
        for name, n in r["repos"].items():
            per_repo[name] = per_repo.get(name, 0) + n
    return dict(rows=rows, per_repo=per_repo,
                repo_count=u["repositories"]["totalCount"])


# --------------------------------------------------------------- helpers ---
def esc(s):
    return (str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


def fmt(n):
    return f"{n:,}"


def compact(n):
    return f"{n/1000:.1f}K" if n >= 1000 else str(n)


def text(x, y, s, size=12, fill="#fff", font=DISPLAY, weight=400, anchor="start",
         ls=0, opacity=1, extra=""):
    return (f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" '
            f'font-weight="{weight}" fill="{fill}" text-anchor="{anchor}" '
            f'letter-spacing="{ls}" opacity="{opacity}">{extra}{esc(s)}</text>')


def eyebrow(x, y, s, t):
    return text(x, y, s, 12, t["secondary"], MONO, 600, ls=3)


def subtitle(x, y, s, t):
    return text(x, y, s, 15, t["muted"], DISPLAY, 400)


def fade(begin, dur=0.5):
    return (f'<animate attributeName="opacity" from="0" to="1" dur="{dur}s" '
            f'begin="{begin}s" fill="freeze"/>')


def svg(w, h, t, body, defs=""):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" '
            f'viewBox="0 0 {w} {h}" role="img">\n<defs>{defs}</defs>\n'
            f'<rect x="0.5" y="0.5" width="{w-1}" height="{h-1}" rx="{RADIUS}" '
            f'fill="{t["bg"]}" stroke="{t["line"]}"/>\n'
            f'{body}\n</svg>\n')


def gridlines(t, x0, x1, base, scale, steps):
    out = []
    for v in steps:
        y = base - v * scale
        out.append(f'<line x1="{x0}" y1="{y:.1f}" x2="{x1}" y2="{y:.1f}" '
                   f'stroke="{t["line"]}" stroke-width="1"/>')
        out.append(text(x0 - 10, y + 4, fmt(v), 11, t["muted"], MONO, 500, "end"))
    return "\n".join(out)


# ---------------------------------------------------------------- header ---
def header(t, d):
    W, H = 1200, 300
    b = []
    # ledger paper: faint horizontal rules + one amber margin line
    for y in range(30, H, 30):
        b.append(f'<line x1="0" y1="{y}" x2="{W}" y2="{y}" stroke="{t["line"]}" '
                 f'stroke-width="1" opacity="0.55"/>')
    b.append(f'<line x1="64" y1="0" x2="64" y2="{H}" stroke="{t["secondary"]}" '
             f'stroke-width="1" opacity="0.35"/>')
    b.append(f'<circle cx="1030" cy="150" r="230" fill="url(#glow)"/>')

    b.append(text(88, 84, "GITHUB.COM/MRCALAMITUS   ·   CDMX, MÉXICO   ·   UTC−6",
                  12, t["muted"], MONO, 500, ls=3))
    b.append(text(86, 150, "Luis Ortiz", 60, t["text"], DISPLAY, 800, ls=-1.5))
    b.append(text(88, 190, "AI Solutions Architect  ·  CTO & Founder @ ZOGA",
                  22, t["primary"], DISPLAY, 600, ls=-0.2))
    b.append(
        f'<text x="88" y="228" font-family="{DISPLAY}" font-size="16" fill="{t["muted"]}">'
        f'15+ years shipping production systems. Generative AI at the core of the product — not on the side.'
        f'<tspan fill="{t["primary"]}" font-weight="700"> ▌'
        f'<animate attributeName="opacity" values="1;1;0;0" dur="1.1s" repeatCount="indefinite"/>'
        f'</tspan></text>')

    # the seal — certificates, audits, elections: work that gets verified
    cx, cy = 1030, 150
    b.append(f'<g transform="translate({cx} {cy})">'
             f'<circle r="88" fill="none" stroke="{t["secondary"]}" stroke-width="1.5" '
             f'stroke-dasharray="3 7" opacity="0.9">'
             f'<animateTransform attributeName="transform" type="rotate" from="0" to="360" '
             f'dur="120s" repeatCount="indefinite"/></circle></g>')
    b.append(f'<circle cx="{cx}" cy="{cy}" r="72" fill="none" stroke="{t["secondary"]}" '
             f'stroke-width="2"/>')
    years = len(d["rows"])
    for i in range(years):  # one tick per year on GitHub
        a = -math.pi / 2 + i * 2 * math.pi / years
        x1, y1 = cx + 72 * math.cos(a), cy + 72 * math.sin(a)
        x2, y2 = cx + 79 * math.cos(a), cy + 79 * math.sin(a)
        b.append(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" '
                 f'stroke="{t["secondary"]}" stroke-width="2" stroke-linecap="round"/>')
    b.append(f'<circle cx="{cx}" cy="{cy}" r="58" fill="{t["surface"]}" '
             f'stroke="{t["primary"]}" stroke-width="1.5"/>')
    b.append(f'<path d="M{cx-26} {cy+2} L{cx-8} {cy+20} L{cx+28} {cy-18}" fill="none" '
             f'stroke="{t["primary"]}" stroke-width="6" stroke-linecap="round" '
             f'stroke-linejoin="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1">'
             f'<animate attributeName="stroke-dashoffset" from="1" to="0" dur="0.9s" '
             f'begin="0.3s" fill="freeze"/></path>')
    b.append(text(cx, 268, "ARCHITECTED · AUDITED · SHIPPED", 10, t["muted"], MONO, 600,
                  "middle", ls=3))

    defs = (f'<radialGradient id="glow"><stop offset="0" stop-color="{t["primary"]}" '
            f'stop-opacity="0.16"/><stop offset="1" stop-color="{t["primary"]}" '
            f'stop-opacity="0"/></radialGradient>')
    return svg(W, H, t, "\n".join(b), defs)


# ----------------------------------------------------------------- stats ---
def stats(t, d):
    W, H = 1200, 170
    rows = d["rows"]
    tiles = [
        (f"{len(rows)} yrs", "ON GITHUB"),
        (str(d["repo_count"]), "REPOSITORIES"),
        (compact(sum(r["commits"] for r in rows)), "COMMITS"),
        (compact(sum(r["prs"] for r in rows)), "PULL REQUESTS"),
        (str(sum(r["reviews"] for r in rows)), "CODE REVIEWS"),
        (str(sum(r["issues"] for r in rows)), "ISSUES"),
    ]
    b = []
    tw, gap, x = 182, 12, 24
    for i, (val, label) in enumerate(tiles):
        b.append(f'<g opacity="0">{fade(0.08 * i, 0.45)}'
                 f'<rect x="{x}" y="24" width="{tw}" height="112" rx="12" '
                 f'fill="{t["surface"]}" stroke="{t["line"]}"/>'
                 f'<rect x="{x+18}" y="42" width="34" height="3" rx="1.5" fill="{t["primary"]}"/>'
                 + text(x + 18, 92, val, 34, t["text"], DISPLAY, 800, ls=-1)
                 + text(x + 18, 116, label, 11, t["muted"], MONO, 600, ls=2)
                 + '</g>')
        x += tw + gap
    b.append(text(24, 158,
                  f"Public + private contributions · GitHub GraphQL API · "
                  f"updated {date.today():%b %Y}",
                  10, t["muted"], MONO, 500, ls=1, opacity=0.9))
    return svg(W, H, t, "\n".join(b))


# ---------------------------------------------------------- commit ledger ---
def commits(t, d):
    W, H = 1200, 440
    rows = d["rows"]
    n = len(rows)
    x0, x1, base, top = 70, 1160, 392, 152
    ymax = 1800
    scale = (base - top) / ymax
    slot = (x1 - x0) / n
    bw = 48
    b = [eyebrow(40, 44, f"COMMIT LEDGER · {rows[0]['year']} — {rows[-1]['year']}", t),
         subtitle(40, 70, "Commits per year across public and private repositories, "
                          "annotated with the project that led each period.", t),
         gridlines(t, x0, x1, base, scale, [0, 600, 1200, 1800])]
    xs = {}
    for i, r in enumerate(rows):
        cx = x0 + slot * (i + 0.5)
        xs[r["year"]] = cx
        h = r["commits"] * scale
        ytd = r["year"] == date.today().year
        fill = "url(#hatch)" if ytd else t["primary"]
        b.append(f'<rect x="{cx-bw/2:.1f}" y="{base-h:.1f}" width="{bw}" height="{h:.1f}" '
                 f'rx="4" fill="{fill}">'
                 f'<animate attributeName="y" from="{base}" to="{base-h:.1f}" dur="0.7s" '
                 f'begin="{0.06*i:.2f}s" fill="freeze"/>'
                 f'<animate attributeName="height" from="0" to="{h:.1f}" dur="0.7s" '
                 f'begin="{0.06*i:.2f}s" fill="freeze"/></rect>')
        label = fmt(r["commits"]) + (" ytd" if ytd else "")
        b.append(text(cx, base - h - 8, label, 12, t["text"], MONO, 600, "middle",
                      opacity=0, extra=fade(0.5 + 0.06 * i)))
        b.append(text(cx, 416, str(r["year"]), 12, t["muted"], MONO, 500, "middle"))
    # period brackets
    for (ya, yb, label) in PERIODS:
        if ya not in xs or yb not in xs:
            continue
        xa, xb = xs[ya] - slot / 2 + 8, xs[yb] + slot / 2 - 8
        b.append(f'<path d="M{xa:.1f} 128 v-6 H{xb:.1f} v6" fill="none" '
                 f'stroke="{t["secondary"]}" stroke-width="1.5"/>')
        b.append(text((xa + xb) / 2, 112, label, 11, t["secondary"], MONO, 600, "middle", ls=1))
    defs = (f'<pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" '
            f'patternTransform="rotate(45)"><rect width="7" height="7" fill="{t["primary"]}" '
            f'opacity="0.35"/><rect width="3" height="7" fill="{t["primary"]}"/></pattern>')
    return svg(W, H, t, "\n".join(b), defs)


# ------------------------------------------------------------------ flow ---
def flow(t, d):
    W, H = 1200, 380
    rows = d["rows"]
    n = len(rows)
    x0, x1, base, top = 70, 1160, 320, 110
    ymax = 650
    scale = (base - top) / ymax
    xs = [x0 + i * (x1 - x0) / (n - 1) for i in range(n)]
    b = [eyebrow(40, 44, "PULL REQUESTS · CODE REVIEWS · ISSUES", t),
         subtitle(40, 70, "Collaboration footprint per year — from solo shipping to "
                          "running code review for a team.", t),
         gridlines(t, x0, x1, base, scale, [0, 200, 400, 600])]
    series = [("prs", "Pull requests", t["primary"], 3, ""),
              ("reviews", "Code reviews", t["secondary"], 3, ""),
              ("issues", "Issues", t["tertiary"], 2, "")]
    for k, (key, name, color, width, dash) in enumerate(series):
        pts = [(xs[i], base - r[key] * scale) for i, r in enumerate(rows)]
        path = "M" + " L".join(f"{x:.1f} {y:.1f}" for x, y in pts)
        b.append(f'<path d="{path}" fill="none" stroke="{color}" stroke-width="{width}" '
                 f'stroke-linejoin="round" stroke-linecap="round" pathLength="1" '
                 f'stroke-dasharray="1" stroke-dashoffset="1">'
                 f'<animate attributeName="stroke-dashoffset" from="1" to="0" dur="1.4s" '
                 f'begin="{0.2*k:.1f}s" fill="freeze"/></path>')
        for x, y in pts:
            b.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="4" fill="{t["bg"]}" '
                     f'stroke="{color}" stroke-width="2" opacity="0">{fade(1.2 + 0.2*k, 0.4)}</circle>')
        # legend
        lx = 780 + k * 140
        b.append(f'<line x1="{lx}" y1="42" x2="{lx+22}" y2="42" stroke="{color}" '
                 f'stroke-width="{width}" stroke-linecap="round"/>')
        b.append(text(lx + 30, 46, name, 12, t["muted"], DISPLAY, 500))
    for i, r in enumerate(rows):
        b.append(text(xs[i], 346, str(r["year"]), 12, t["muted"], MONO, 500, "middle"))
    # callout on the review peak
    i_peak = max(range(n), key=lambda i: rows[i]["reviews"])
    r = rows[i_peak]
    px, py = xs[i_peak], base - r["reviews"] * scale
    b.append(f'<g opacity="0">{fade(1.8, 0.5)}'
             f'<line x1="{px-14:.1f}" y1="{py-8:.1f}" x2="{px-64:.1f}" y2="{py-34:.1f}" '
             f'stroke="{t["secondary"]}" stroke-width="1"/>'
             + text(px - 70, py - 44, f"{r['reviews']} code reviews in {r['year']}", 12,
                    t["secondary"], MONO, 700, "end")
             + text(px - 70, py - 28, "leading code review for the COFEPRIS team", 12,
                    t["muted"], DISPLAY, 500, "end")
             + '</g>')
    return svg(W, H, t, "\n".join(b))


# -------------------------------------------------------------- projects ---
def projects(t, d):
    W, H = 590, 440
    top = sorted(d["per_repo"].items(), key=lambda kv: -kv[1])[:8]
    vmax = top[0][1]
    b = [eyebrow(32, 44, "TOP PROJECTS BY COMMITS", t),
         subtitle(32, 70, "Aggregated from each year's five most active repositories.", t)]
    colors = {"gov": t["primary"], "legal": t["secondary"], "other": t["tertiary"]}
    bx, bmax = 226, 300
    for i, (name, n) in enumerate(top):
        y = 104 + i * 36
        dom = DOMAIN.get(name, "other")
        w = bmax * n / vmax
        b.append(text(32, y + 15, PRETTY.get(name, name), 12, t["text"], MONO, 600))
        b.append(f'<rect x="{bx}" y="{y}" width="{bmax}" height="22" rx="5" '
                 f'fill="{t["surface"]}"/>')
        b.append(f'<rect x="{bx}" y="{y}" width="{w:.1f}" height="22" rx="5" '
                 f'fill="{colors[dom]}"><animate attributeName="width" from="0" '
                 f'to="{w:.1f}" dur="0.8s" begin="{0.07*i:.2f}s" fill="freeze"/></rect>')
        b.append(text(bx + bmax + 8, y + 15, fmt(n), 11, t["muted"], MONO, 600, "start",
                      opacity=0, extra=fade(0.6 + 0.07 * i)))
    lx = 32
    for dom in ("gov", "legal", "other"):
        b.append(f'<rect x="{lx}" y="404" width="10" height="10" rx="3" fill="{colors[dom]}"/>')
        b.append(text(lx + 16, 413, DOMAIN_LABEL[dom], 11, t["muted"], DISPLAY, 500))
        lx += 16 + 7 * len(DOMAIN_LABEL[dom]) + 18
    return svg(W, H, t, "\n".join(b))


# --------------------------------------------------------------- domains ---
def arc(cx, cy, ro, ri, a0, a1):
    def p(r, a):
        return cx + r * math.cos(a), cy + r * math.sin(a)
    x0, y0 = p(ro, a0); x1, y1 = p(ro, a1); x2, y2 = p(ri, a1); x3, y3 = p(ri, a0)
    large = 1 if (a1 - a0) > math.pi else 0
    return (f"M{x0:.1f} {y0:.1f} A{ro} {ro} 0 {large} 1 {x1:.1f} {y1:.1f} "
            f"L{x2:.1f} {y2:.1f} A{ri} {ri} 0 {large} 0 {x3:.1f} {y3:.1f} Z")


def domains(t, d):
    W, H = 590, 440
    totals = {"gov": 0, "legal": 0, "other": 0}
    for name, n in d["per_repo"].items():
        totals[DOMAIN.get(name, "other")] += n
    total = sum(totals.values())
    colors = {"gov": t["primary"], "legal": t["secondary"], "other": t["tertiary"]}
    b = [eyebrow(32, 44, "WHERE THE WORK WENT", t),
         subtitle(32, 70, f"Share of commits by domain, {d['rows'][0]['year']} — "
                          f"{d['rows'][-1]['year']}.", t)]
    cx, cy, ro, ri = 178, 258, 112, 74
    a = -math.pi / 2
    gap = math.radians(2.5)
    for k, dom in enumerate(("gov", "legal", "other")):
        span = 2 * math.pi * totals[dom] / total
        b.append(f'<path d="{arc(cx, cy, ro, ri, a + gap/2, a + span - gap/2)}" '
                 f'fill="{colors[dom]}" opacity="0">{fade(0.25 * k, 0.5)}</path>')
        a += span
    b.append(text(cx, cy + 4, compact(total), 34, t["text"], DISPLAY, 800, "middle", ls=-1))
    b.append(text(cx, cy + 26, "COMMITS", 10, t["muted"], MONO, 600, "middle", ls=2))
    for k, dom in enumerate(("gov", "legal", "other")):
        y = 188 + k * 62
        pct = 100 * totals[dom] / total
        b.append(f'<rect x="340" y="{y-12}" width="12" height="12" rx="3" fill="{colors[dom]}"/>')
        b.append(text(362, y, DOMAIN_LABEL[dom], 15, t["text"], DISPLAY, 700))
        b.append(text(362, y + 22, f"{pct:.0f}%  ·  {fmt(totals[dom])} commits", 12,
                      t["muted"], MONO, 500))
    b.append(text(32, 416, "Per-project counts use each year's top 5 repositories.", 10,
                  t["muted"], MONO, 500, ls=0.5, opacity=0.9))
    return svg(W, H, t, "\n".join(b))


# ------------------------------------------------------------------ main ---
def main():
    d = load()
    builders = dict(header=header, stats=stats, commits=commits, flow=flow,
                    projects=projects, domains=domains)
    for name, fn in builders.items():
        for theme, t in THEMES.items():
            path = OUT / f"{name}-{theme}.svg"
            path.write_text(fn(t, d), encoding="utf-8")
            print("wrote", path.relative_to(ROOT))


if __name__ == "__main__":
    main()
