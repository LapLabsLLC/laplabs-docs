# laplabs-docs

Source of truth for the documentation rendered at **[laplabs.net/docs-home.html](https://laplabs.net/docs-home.html)**.

The site itself (HTML/CSS/JS, marketing pages, dashboard, workers) lives in the private [`LapLabsLLC/laplabs-site`](https://github.com/LapLabsLLC/laplabs-site) repo. This repo is just the doc content plus the trigger that tells the site to redeploy when it changes.

## Editing docs

1. Open a PR against `main` editing `docs/docs-content.js`.
2. Get it reviewed and merged.
3. Within ~1 minute of merge, the live site reflects the change. Nobody needs to touch `laplabs-site`.

That's it. There is no separate publish step, no static site generator, no MkDocs build. The single file `docs/docs-content.js` is the deliverable.

## File structure

```
docs/
  docs-content.js              ← the only content file. Edit this.
.github/workflows/
  trigger-site-deploy.yml      ← on push to main affecting docs/**,
                                 POST a Cloudflare deploy hook so
                                 laplabs-site rebuilds.
```

## How `docs-content.js` is structured

A single IIFE that assigns to `window.DOCS_ARTICLES`. Keys are article IDs (e.g. `gs.install`); values describe the article's section, title, lede, prev/next nav, table of contents, and HTML body:

```js
window.DOCS_ARTICLES = {
  'gs.install': {
    section: 'Getting Started',
    title: 'Installation & Setup',
    lede: 'Download LapLabs Studio, install dependencies, and launch your first session.',
    prev: null,
    next: ['gs.ui-tour', 'UI Tour'],
    toc: ['requirements', 'install', 'launch'],
    tocLabels: ['System Requirements', 'Installation', 'First Launch'],
    body: `
<h2 id="requirements">System Requirements</h2>
...
`,
  },
  // more articles...
};
```

The article IDs match the sidebar's `data-k` attributes in `laplabs-site/docs-shell.js`. If you add a new article, the sidebar in the site repo also needs an entry pointing to that ID.

## Previewing changes locally

The rendering shell (`docs-article.html`, `docs-shell.js`, `docs-shell.css`) lives in `laplabs-site`, not here. To preview a change before pushing:

```bash
git clone https://github.com/LapLabsLLC/laplabs-site
cd laplabs-site
LAPLABS_DOCS_URL=file:///absolute/path/to/this/repo/docs/docs-content.js \
  bash scripts/fetch-docs.sh
# now open docs-article.html in a browser
```

## How auto-deploy works

```
merge to main (touching docs/**)
  └→ .github/workflows/trigger-site-deploy.yml runs
       └→ POST $CLOUDFLARE_DEPLOY_HOOK
            └→ Cloudflare rebuilds laplabs-site
                 └→ build runs `bash scripts/fetch-docs.sh`
                      └→ this repo's docs/docs-content.js fetched
                         via raw.githubusercontent.com
                           └→ deploy → laplabs.net updated
```

Pushes to `main` that don't touch `docs/**` — README edits, workflow tweaks — are filtered out by the workflow's `paths:` and don't redeploy the site.

The `CLOUDFLARE_DEPLOY_HOOK` secret is a credential. If it ever leaks (Cloudflare deploy hooks are bearer tokens — anyone with the URL can trigger builds), rotate it: delete the hook in the Cloudflare dashboard for `laplabs-site`, create a fresh one, and update this repo's secret.

## Manually triggering a redeploy

- **Workflow dispatch:** Actions → "Trigger laplabs-site deploy" → Run workflow.
- **Cloudflare dashboard:** retry the latest deployment on `laplabs-site`. (Bypasses this repo entirely; redeploys from current `main`.)

## Why this repo exists separately

The site is private; the docs are public. Splitting them out lets external contributors propose documentation changes via PR without needing access to the private site/product code, and keeps the site repo's commit history focused on actual product changes rather than copy edits.

The trade-off is a build-time fetch step on the site side. See [`laplabs-site/DOCS-PIPELINE.md`](https://github.com/LapLabsLLC/laplabs-site/blob/main/DOCS-PIPELINE.md) for the site-side details.

## History

- **2026-03-27:** repo created as an MkDocs Material site with markdown sources.
- **2026-04-24:** MkDocs sources removed and replaced with `docs-content.js` migrated from `laplabs-site`. Repo declared canonical, but no automation existed to enforce it.
- **2026-05-09:** auto-deploy pipeline (this repo's GH Action + the site repo's `scripts/fetch-docs.sh`) wired up. Doc edits here actually update the live site without anyone touching `laplabs-site`.
