# laplabs-docs

Source of truth for the documentation rendered at **[laplabs.net/docs-home.html](https://laplabs.net/docs-home.html)**.

The website itself — HTML/CSS/JS, the docs rendering shell, marketing pages, dashboard, backend Workers — lives in a private companion repo. This repo holds only the documentation *content*, plus the trigger that tells the site to redeploy when content changes.

## Contributing

Anyone can propose a documentation change:

1. Fork this repo (or branch if you have write access).
2. Edit `docs/docs-content.js`. See [Article schema](#article-schema) below.
3. Open a PR against `main`.
4. A maintainer reviews and merges.
5. **The live site updates within ~1 minute of merge.** No further action needed.

There is no static site generator and no separate publish step. The single file `docs/docs-content.js` is the deliverable.

### ⚠️ A note on safety

Article `body` and `lede` strings are inserted into the live page via `innerHTML` without sanitization. **Maintainers will not merge a PR containing `<script>` tags, inline event handlers (`onerror=`, `onclick=`, etc.), `javascript:` URIs, or `data:text/html` URIs in those fields.** If you legitimately need an interactive element in a doc, raise it as an issue first so we can decide whether to add it to the rendering shell rather than to user-editable content.

This isn't unique to this repo's flow — it's a property of how the site renders article HTML — but it's worth being explicit about, since merged content goes live automatically.

## Article schema

`docs/docs-content.js` is a single IIFE that assigns to `window.DOCS_ARTICLES`. Keys are article IDs; values describe the article:

```js
window.DOCS_ARTICLES = {
  'folder.open': {
    section: 'Stint Folder',
    title: 'Opening telemetry',
    lede: 'Get telemetry into Slipstream: open the iRacing folder on your computer, or stream runs from the cloud.',
    prev: ['start.quick', 'Quick start'],    // or null
    next: ['folder.tree', 'The tree and selecting laps'],
    toc: ['local', 'reopen', 'related'],
    tocLabels: ['Open your telemetry folder', 'Reopen it next time', 'Related'],
    body: `
<p>The Stint Folder panel on the left is where telemetry comes in.</p>
<!-- SHOT folder.open: what the screenshot for this page should show -->
<h2 id="local">Open your telemetry folder</h2>
<ol>
  <li>...</li>
</ol>
`,
  },
  // more articles...
};
```

Notes:
- The site builds its sidebar and docs home from this file: one group per article `section`, in the order the articles appear. Adding, removing or reordering articles needs no change in the site repo.
- Links to articles that don't exist yet are shown as plain text, so an article can link ahead to pages still being written.
- See [`plans/slipstream-docs.md`](plans/slipstream-docs.md) for the page list, the page template and the screenshot conventions.
- `toc` entries must match `id` attributes inside the body's `<h2>` / `<h3>` headings.
- `prev`/`next` use the same article-ID format and drive the page-bottom pager.
- HTML in `body` is rendered as-is. CSS classes that already exist in the docs stylesheet (`.callout`, `.callout.note`, `<code>`, `<pre>`, etc.) are available — copy patterns from existing articles rather than introducing new classes.

## How auto-deploy works

```
merge to main (touching docs/**)
  └→ .github/workflows/trigger-site-deploy.yml runs
       └→ POSTs the Cloudflare deploy hook
            └→ Cloudflare rebuilds the site project
                 └→ build fetches this file via raw.githubusercontent.com
                      └→ deploy → laplabs.net updated
```

Pushes to `main` not touching `docs/**` (README edits, workflow tweaks) are filtered out and don't redeploy the site.

## File structure

```
docs/
  docs-content.js              ← all article content. Edit this.
plans/
  slipstream-docs.md           ← the docs plan (not deployed)
.github/
  workflows/
    trigger-site-deploy.yml    ← deploy trigger
  CODEOWNERS                   ← review requirements for docs/**
README.md                      ← you are here
```

## Manually triggering a redeploy

- **Workflow dispatch:** Actions tab → "Trigger laplabs-site deploy" → Run workflow. (Requires write access.)
- **From the site side:** maintainers can also retry the latest deployment in the Cloudflare dashboard, which redeploys from current `main` of this repo without going through the workflow.

## For maintainers (private-repo links below)

These resources require access to the private `LapLabsLLC/laplabs-site` repo:

- The site-side companion to this README is **`DOCS-PIPELINE.md`** in the site repo. It documents the build command, deploy hook, diagnostic table, and rotation procedure.
- **Local preview** (test a content edit before merging): clone the site repo, then point its fetch script at your local copy of this repo:
  ```bash
  cd path/to/laplabs-site
  LAPLABS_DOCS_URL=file:///absolute/path/to/laplabs-docs/docs/docs-content.js \
    bash scripts/fetch-docs.sh
  # open docs-article.html in a browser
  ```
- **Rotating the Cloudflare deploy hook** (if `CLOUDFLARE_DEPLOY_HOOK` ever leaks — Cloudflare deploy hooks are bearer tokens): delete + recreate in the Cloudflare dashboard for the site project, then `gh secret set CLOUDFLARE_DEPLOY_HOOK -R LapLabsLLC/laplabs-docs` with the new URL.

## Why this repo exists separately

The website is private, the docs are public. Splitting them out lets external contributors propose documentation changes without needing access to the private site/product code, and keeps the website repo's commit history focused on actual product changes.

## History

- **2026-03-27** — repo created as an MkDocs Material site with markdown sources.
- **2026-04-24** — MkDocs sources removed; `docs-content.js` migrated in from the site repo. Repo declared canonical, but with no automation to enforce it.
- **2026-05-09** — auto-deploy pipeline (this repo's GH Action + the site repo's `scripts/fetch-docs.sh`) wired up. Doc edits here actually update the live site.
- **2026-10-25**: the LapLabs Studio articles replaced by the Slipstream docs (see `plans/slipstream-docs.md`). The site now generates its docs sidebar and home from `docs-content.js`.
