# 3D Track View

The 3D track view shows an animated vehicle replay on track geometry. It appears in the upper panel after running the graph.

## Playback

Use the transport controls at the top of the 3D view:

- **Play/Pause** — start or stop the animation
- **Speed** — adjust playback speed
- **Lap selector** — jump to a specific lap
- **Scrub** — drag the playback slider to any point

## Camera Modes

The camera dropdown offers several viewing angles:

- **Chase** — follows behind the vehicle
- **Orbit** — freely rotate around the track
- **Top-down** — overhead view
- **TV-style** — cinematic camera that tracks the car from fixed positions

## Color Mapping

The track trace can be colored by any telemetry channel value:

- Select a variable from the color options
- Adjust the color range (min/max) to highlight specific value ranges
- Useful for spotting braking zones, throttle application, tire slip, etc.

## Ghost Cars

When multiple laps are loaded, ghost cars overlay different laps on the same track for direct comparison. Toggle individual laps on/off in the segment tree.

## Vehicle Model

The 3D car model is loaded from the vehicle library. The vehicle library includes several pre-configured models with accurate wheel positions and steering geometry.

## Track Pen

- **Left-click and drag** on the track surface to draw annotations
- Useful for marking braking points, turn-in references, or racing lines
- Use the pen toolbar to change color, width, or clear drawings

## Controls

| Action | Control |
|--------|---------|
| Rotate camera | Right-click and drag |
| Zoom | Scroll wheel |
| Pan | Middle-click and drag |
| Draw | Left-click and drag |