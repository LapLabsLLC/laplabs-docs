# Plan: replace the docs with Slipstream docs

**Status:** all 31 pages written (2026-10-25). Screenshots: 30 of 31 pages in (2026-10-26); only ref.troubleshooting is still to come.

The articles in `docs/docs-content.js` describe LapLabs Studio, the desktop node-graph app that is being phased out. This plan replaces all of them with documentation for **Slipstream**, the LapLabs web app. Nothing from the old articles is migrated. The old set went too deep: a reference page per node, per plot type, per dialog. The new set is shorter and organized around what you do on the screen.

## Ground rules

- **Names.** The product is **Slipstream**. **LapLabs** is the company, the account and the site (laplabs.net). The small Windows helper that streams live iRacing data is **LapLabs Tray**.
- **Web app only.** Write for Slipstream in the browser. There are no desktop app instructions, and LapLabs Studio isn't mentioned.
- **Only what has shipped.** Document what a signed-in user sees on the live site today. Leave out anything hidden, experimental or not yet released, and add it when it ships.
- **Check against the live app.** What's switched on can differ between the code and the live site, so the live site is the reference.
- **Use the UI's own words.** Quote button and menu labels exactly as they appear.
- **Copy style.** No em dashes in user-facing text (see PR #11). Short sentences, second person.

## Structure

The sections follow the screen, from left to right:

- The **Stint Folder** on the left, and **Playback** under the 3D view.
- The **3D view** and **2D plots** in the center.
- The right-hand rail: **Plugins**, **Timeline**, **Assistant**.
- **Settings and libraries** under the Tools menu.

**Ghosts** get their own section because they run through every view. **Sharing and live** and **Reference** sit at the end.

About 31 pages in 12 sections:

| # | Section | Article ID | Title | Covers |
|---|---|---|---|---|
| 01 | Start here | `start.welcome` | Welcome to Slipstream | What it is, a map of the screen, signing in, browser support (Chrome or Edge for local folders) |
| | | `start.quick` | Quick start | Open a run, play it, add ghosts, plot a lap-time delta |
| 02 | Stint Folder | `folder.open` | Opening telemetry | Local folders, cloud runs, the Cloud / Local / Both filter, supported files (.ibt, .parquet, .csv) |
| | | `folder.tree` | The tree and selecting laps | Track > Layout > Car > File > Stint > Outing > Lap, columns, best-lap markers, badges, the 3D column, ticking vs solo play |
| 03 | Playback | `play.transport` | Transport and speed | Play, pause, rewind and fast-forward, lap jumps, same-position jumps |
| | | `play.range` | Playback bar and range | Scrub, zoom, LapDist vs time axis, snapping, follow modes, linking 2D and 3D, stacked vs synced files |
| 04 | Ghosts | `ghosts.basics` | Ego and ghosts | Adding ghosts (Playlist, top N, from Corner Analysis), options, colours, the position table |
| | | `ghosts.sync` | Comparing outings and stints | Compare modes, sync points, offsets, laps from the same session |
| 05 | 3D view | `view3d.cameras` | Cameras | The six camera modes, Level and Stabilize |
| | | `view3d.traces` | Track traces | Colouring the line by channel or delta, scope, line vs ribbon |
| | | `view3d.car` | Car and overlays | Vehicle models per car, tire temps, Pen |
| 06 | 2D plots | `plots.channels` | Plots and channels | Templates, adding variables, solo / hide / delta, up to four plots |
| | | `plots.navigate` | Navigating plots | Zoom, pan, Ctrl to scrub, Shift for the value readout, double-click to reset |
| | | `plots.derived` | Derived channels | The built-in derived channels and how to plot them |
| 07 | Plugins | `plugins.rail` | The plugin rail | Turning plugins on and off, arranging them in columns |
| | | `plugins.timing` | Timing | Sector Times, Multi-Lap Timing |
| | | `plugins.corners` | Corner Analysis | Modes, traces, style map, adding representative laps as ghosts |
| | | `plugins.segments` | Segment Eval | Stats and Tires, column groups, the map |
| | | `plugins.scatter` | Scatter | 2D and 3D scatter, expressions, colour |
| | | `plugins.dash` | Dash | The canvas, the dash library, data sources, pop-out |
| | | `plugins.dash-designer` | Dash Designer | Building and editing a dash, element types |
| 08 | Timeline | `timeline.points` | Timeline points | The six point kinds, how they fire every lap, hotkeys, importing |
| | | `timeline.presentation` | Building a presentation lap | A walkthrough that combines camera, speed and note points |
| 09 | Assistant | `assistant.using` | Using the Assistant | Connecting a provider and API key, what to ask, letting it act on the app, remote control from an AI client |
| 10 | Sharing and live | `share.sessions` | Shared sessions | "Everyone drives" vs "I present", room codes, cloud runs, uploading to a test pool |
| | | `share.tray` | LapLabs Tray and live view | Installing the tray, Share Live, Watch Live, the live dashboard |
| 11 | Settings and libraries | `settings.preferences` | Preferences | The Plot and Units pages |
| | | `settings.vehicles` | Vehicle library | Browsing models, assigning one per car |
| | | `settings.tracks` | Track library | Published circuits, what the 3D column means |
| 12 | Reference | `ref.shortcuts` | Keyboard and mouse | Every shortcut in one table |
| | | `ref.troubleshooting` | Troubleshooting | No track mesh (GPS ribbon fallback), files that fail to parse, browser support, performance |

The IDs use new prefixes so that none of them collides with an old Studio ID.

## Page template

Every page has the same shape. The point is to stay shallow:

1. **Lede:** one sentence on what this part of the app is for.
2. **One screenshot** of the area in context.
3. **Three to six tasks**, each a short "how do I…" with numbered steps.
4. **A controls table** only where the labels don't explain themselves.
5. **Related:** two or three links to the next things to read.

Aim for 600 to 800 words. Don't list every control. If a page needs more than that, split it or cut it.

## Publishing

The Studio docs were replaced on 2026-10-25 (laplabs-docs #14, laplabs-site #83). Since then, the site builds its sidebar and docs home from `docs/docs-content.js`: one group per article `section`, in the order the articles appear.

- **New sections go straight to `main`**, one PR per section as it's written. Merging deploys within about a minute.
- **Pages can link ahead.** A link or a next / previous slot that points at a page not written yet shows as plain text or an empty slot until that page exists.
- **Section numbers in the sidebar** count only the sections that exist so far, so they settle once every section is written.
- **Old Studio links** (such as `?page=gs.install`) show "Page not found" with a link to the docs home.

Screenshots need one more step on the site side: after it downloads `docs-content.js`, the fetch script downloads every image the content references from `docs/images/` and saves it in the build as `docs-images/`. A referenced image that is missing fails the build, so a broken image never ships.

## Screenshots

Screenshots live in this repo, in `docs/images/`, next to the text they illustrate. A PR that changes a page can then change its screenshot too, and review sees both. At build time the site copies the folder in, and pages load images from `docs-images/` on laplabs.net.

**On the page.** One screenshot per page, placed right after the intro paragraph. Until it's captured, the page holds a placeholder comment that says what to show:

```html
<!-- SHOT start.welcome: the whole app just after first sign-in ... -->
```

Once it's captured, the comment becomes a figure. Write the alt text from what the image actually shows, not from the placeholder, and give the image's real width and height:

```html
<figure><img src="docs-images/start.welcome.png" alt="The whole Slipstream window with the Spa demo run loaded ..." width="1600" height="1000" loading="lazy"></figure>
```

**Files.** Name each file after its article ID, for example `docs/images/start.welcome.png`. A second image on the same page adds a suffix: `start.welcome-2.png`. Use PNG, and keep each file under 500 KB.

**Capturing.** Use the same setup every time, so screenshots look alike across pages:

- Chrome at 100% zoom, with the DevTools device toolbar set to a 1600 x 1000 viewport at device pixel ratio 1. Take the image with DevTools' "Capture screenshot".
- Sign in with an ordinary account, not one that is a track author, a reviewer or a test pool member, so no extra controls appear.
- Use the public demo runs unless the page is about your own files.
- Dismiss the **Try it** checklist, except on the Start here pages.
- On Start here, show the whole window. On other pages, crop to the area the page covers, and keep enough around it to show where it sits.
- No arrows or annotations. If something needs pointing out, say it in the text.
- Use the placeholder's description as the alt text.

## Open questions

- **Changelog and API pages.** The site's docs changelog and Public API pages date from the Studio era. Rewrite them, retire them or leave them as they are?
