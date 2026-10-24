# Plan: replace the docs with Slipstream docs

**Status:** planned, 2026-10-23. Nothing written yet.

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
- The right-hand rail: **Plugins**, **Timeline**.
- **Settings and libraries** under the Tools menu.

**Ghosts** get their own section because they run through every view. **Sharing and live** and **Reference** sit at the end.

About 30 pages in 11 sections:

| # | Section | Article ID | Title | Covers |
|---|---|---|---|---|
| 01 | Start here | `start.welcome` | Welcome to Slipstream | What it is, a map of the screen, signing in, browser support (Chrome or Edge for local folders) |
| | | `start.quick` | Quick start | Open a run, play it, add ghosts, plot a lap-time delta |
| 02 | Stint Folder | `folder.open` | Opening telemetry | Local folders, cloud runs, the Cloud / Local / Both filter, supported files (.ibt, .parquet, .csv) |
| | | `folder.tree` | The tree and selecting laps | Track > Layout > Car > File > Stint > Outing > Lap, columns, best-lap markers, badges, the 3D column, ticking vs solo play |
| 03 | Playback | `play.transport` | Transport and speed | Play, pause, rewind and fast-forward, lap jumps, same-position jumps |
| | | `play.range` | Scrubber and range | Scrub, zoom, LapDist vs time axis, snapping, follow modes, linking 2D and 3D, stacked vs synced files |
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
| 09 | Sharing and live | `share.sessions` | Shared sessions | "Everyone drives" vs "I present", room codes, cloud runs, uploading to a test pool |
| | | `share.tray` | LapLabs Tray and live view | Installing the tray, Share Live, Watch Live, the live dashboard |
| 10 | Settings and libraries | `settings.preferences` | Preferences | The Plot and Units pages |
| | | `settings.vehicles` | Vehicle library | Browsing models, assigning one per car |
| | | `settings.tracks` | Track library | Published circuits, what the 3D column means |
| 11 | Reference | `ref.shortcuts` | Keyboard and mouse | Every shortcut in one table |
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

## Cutover

1. **Write** on a single long-lived branch here. Replace `docs/docs-content.js` wholesale, keep the current schema, and drop the `tier` field.
2. **Preview locally** with the site's fetch script, pointed at your working copy (see "For maintainers" in the README).
3. **Prepare the site side** in a companion PR in the site repo:
   - the new sidebar groups for the IDs above;
   - new docs home copy (it currently says "LapLabs Studio Documentation");
   - remove the tier pill;
   - send old article IDs to the docs home rather than a blank page.
4. **Land both together.** Merge the site PR, then this one straight after. The deploy that this merge triggers carries both. Expect a minute or two where the sidebar and the content don't match, so pick a quiet time.

## Open questions

- **Screenshots.** Where do images live? This repo holds no images today, and article bodies can only reference URLs.
- **Changelog and API pages.** The site's docs changelog and Public API pages date from the Studio era. Rewrite them, retire them or leave them as they are?
- **Order of writing.** Suggested order: Start here, Stint Folder, Playback, Ghosts, then the rest.
