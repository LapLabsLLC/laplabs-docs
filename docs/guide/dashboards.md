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