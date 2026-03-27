# Dashboards

Dashboards provide customizable instrument panels for visualizing telemetry data during playback.

## Dash Library

The dash library is in the bottom panel. Pre-built layouts include:

| Layout | Description |
|--------|-------------|
| **Base** | Essential gauges — speed, throttle, brake, gear |
| **Tire Temps** | Four-corner tire temperature displays |
| **Vehicle** | Body slip angle visualization |
| **GG** | Lateral vs. longitudinal acceleration plot |
| **Gauges** | Analog-style instrument gauges |
| **MiniMap** | Track position overview |
| **Slip** | Tire slip visualization |

## Loading a Dashboard

Click any layout in the dash library to load it onto the canvas. The dash populates with data from your most recent run.

## Playback

Dashboard elements animate in sync with the 3D track view playback. Use the transport controls to scrub through the session and watch the instruments respond.

## Refresh Rate

Use the **Rate** dropdown to set the dashboard update frequency:

- **15 Hz** — lowest CPU usage
- **30 Hz** — balanced
- **60 Hz** — smooth (default)
- **120 Hz** — smoothest, higher CPU usage

## Pop Out

Right-click any dash and select **Pop Out** to detach it into a floating window. Options in the pop-out window:

- **Always on Top** — keeps the dash visible over other applications
- **Dock back to canvas** — returns it to the main panel

This is useful for multi-monitor setups — pop out a tire temp display onto a second screen while keeping the main app on your primary monitor.

## Removing a Dashboard

Right-click a dash on the canvas and select **Remove from canvas** to clear it. You can load a different layout from the library at any time.

## Live Dashboards

Dashboards can display real-time data from iRacing while you drive. Any dash element that is bound to a variable available in iRSDK will update live.

### How It Works

When a live session is running, iRSDK streams telemetry at 60 Hz. The live data feeds directly into dash elements — gauges, bar displays, and numeric readouts all animate in real time. The same dash layouts used for playback work live, as long as the variables they reference are available in the iRSDK stream.

Common live variables include speed, throttle, brake, gear, RPM, steering angle, lap time, and tire temperatures.

### MiniMap Live

The standard MiniMap dash uses GPS coordinates (latitude, longitude, altitude) to draw the car's position on a track outline. These coordinates are **not** available through iRSDK during live sessions.

The **MiniMap Live** layout solves this by using `LapDistPct` — a single value (0–1) representing how far around the track the car is. It draws the car position on a simplified track outline without needing full 3D coordinates. Use this layout instead of the standard MiniMap when running live.

### Tips

- Pop out a dash to a second monitor for a live heads-up display while driving
- Use the **Rate** dropdown to match the refresh rate to your preference — 60 Hz is a good default for live use
- Not all telemetry channels are available through iRSDK — channels that require post-processing or model inference won't update live