# Quick Start

This guide walks you through loading telemetry data and creating your first visualization.

## 1. Load Data

1. Click the **Load Data** node in the sidebar (or it may already be placed in the default workspace)
2. Double-click the node to open its configuration
3. Browse to your iRacing telemetry folder (typically `~/Documents/iRacing/telemetry/`)
4. Select a `.ibt` file (or `.parquet`/`.csv` if previously converted)
5. Click **OK**

!!! tip
    The app auto-detects file types with priority: parquet > csv > ibt. Parquet files load significantly faster than raw IBT files.

## 2. Run the Graph

Click the **Run** button in the toolbar (or press the play button). The node graph executes from left to right, processing your data through each node.

## 3. View Results

After execution completes:

- **2D Plot** — appears in the lower panel showing telemetry channels over time
- **3D Track** — appears in the upper panel showing the vehicle path on track

## 4. Interact with Plots

- **Pan** — click and drag
- **Zoom** — scroll wheel
- **Cursor** — hover to see values at any point
- **3D Playback** — use the transport controls to animate the vehicle around the track