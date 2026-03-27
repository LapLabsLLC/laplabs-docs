# Quick Start

This guide walks you through loading telemetry data and creating your first visualization.

## 1. Select a Session

In the **Stint Browser** on the left:

1. Set your telemetry folder if you haven't already (Libraries > Stint Library)
2. The browser scans and shows a summary of each session — car, track, laps, and duration
3. Click a session to select it

## 2. Configure the Workflow

Below the stint browser, the workflow panel lets you configure how data is processed:

- **Denoise** — toggle automatic IBT timing error correction (on by default)
- **Extract Template** — choose which telemetry channels to include (e.g., base, tires, chassis)
- **Aux Math** — add custom derived channels
- **Filter** — apply signal processing filters

## 3. Run

Click the **Run** button. The app loads the selected session, applies your workflow settings, and generates plots.

## 4. View Results

After execution completes:

- **2D Plot** — appears in the lower panel showing telemetry channels over time/distance
- **3D Track** — appears in the upper panel showing the vehicle path on track
- **Dashboard** — click a layout in the dash library to see instrument panels

## 5. Interact with Plots

- **Pan** — click and drag
- **Zoom** — scroll wheel
- **Cursor** — hover to see values at any point
- **3D Playback** — use the transport controls to animate the vehicle around the track

!!! tip
    Use **Duplicate tab to new panel (below)** from the 2D tab right-click menu to compare different views side by side.