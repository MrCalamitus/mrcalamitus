#!/usr/bin/env python3
"""
Fetch contribution data from the GitHub GraphQL API and write data/github.json
in the shape scripts/generate_assets.py expects.

    GITHUB_TOKEN=ghp_xxx python3 scripts/fetch_github.py [login]

Environment:
  GITHUB_TOKEN    required. A PAT with `repo` + `read:user` (classic) so private
                  contributions and private repository names are included.
  EXCLUDE_REPOS   optional, comma-separated repository names to drop from the
                  per-repository lists (totals are unaffected). Use it for
                  private projects you don't want named on a public profile.
"""
import json
import os
import pathlib
import sys
import urllib.request
from datetime import date

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "github.json"
FIRST_YEAR = 2014

LOGIN = sys.argv[1] if len(sys.argv) > 1 else "MrCalamitus"
TOKEN = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_STATS_TOKEN")
if not TOKEN:
    sys.exit("GITHUB_TOKEN is required")
EXCLUDE = {r.strip() for r in os.environ.get("EXCLUDE_REPOS", "").split(",") if r.strip()}

YEAR_BLOCK = """
  year{y}: contributionsCollection(from: "{y}-01-01T00:00:00Z", to: "{y}-12-31T23:59:59Z") {{
    totalCommitContributions
    restrictedContributionsCount
    totalPullRequestContributions
    totalPullRequestReviewContributions
    totalIssueContributions
    totalRepositoriesWithContributedCommits
    commitContributionsByRepository(maxRepositories: 5) {{
      repository {{ name isPrivate }}
      contributions {{ totalCount }}
    }}
  }}"""


def query():
    years = range(date.today().year, FIRST_YEAR - 1, -1)
    return (
        "query($login: String!) { user(login: $login) {\n"
        "  commitComments { totalCount }\n"
        + "".join(YEAR_BLOCK.format(y=y) for y in years)
        + "\n  repositories(ownerAffiliations: OWNER) { totalCount }\n"
        "  bio company followers { totalCount }\n"
        "}}"
    )


def main():
    body = json.dumps({"query": query(), "variables": {"login": LOGIN}}).encode()
    req = urllib.request.Request(
        "https://api.github.com/graphql", data=body,
        headers={"Authorization": f"bearer {TOKEN}", "Content-Type": "application/json",
                 "User-Agent": "profile-readme-refresh"},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        payload = json.load(resp)
    if "errors" in payload:
        sys.exit(json.dumps(payload["errors"], indent=2))

    user = payload["data"]["user"]
    if EXCLUDE:
        for key, block in user.items():
            if key.startswith("year"):
                block["commitContributionsByRepository"] = [
                    r for r in block["commitContributionsByRepository"]
                    if r["repository"]["name"] not in EXCLUDE
                ]
    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")
    years = [k for k in user if k.startswith("year")]
    print(f"wrote {OUT.relative_to(ROOT)} · {len(years)} years · "
          f"{sum(user[y]['totalCommitContributions'] for y in years):,} commits")


if __name__ == "__main__":
    main()
