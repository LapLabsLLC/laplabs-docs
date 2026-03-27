# Dashboards

Dashboards provide customizable instrument panels for visualizing telemetry data — both for offline analysis and live iRacing sessions.

## Dash Library

Access the dash library from the bottom panel. Pre-built layouts include:

- **Base** — essential gauges (speed, throttle, brake, gear)
- **Tire Temps** — four-corner tire temperature displays
- **Vehicle** — body slip angle visualization
- **GG** — lateral vs. longitudinal acceleration plot
- **Gauges** — analog-style instrument gauges
- **MiniMap** — track position overview

## Dash Elements

| Element | Description |
|---------|-------------|
| **Numeric** | Digital readout of a channel value |
| **VBar / HBar** | Vertical or horizontal bar meter |
| **Gauge** | Analog dial gauge |
| **LED** | Status indicator light |
| **XY Plot** | 2D scatter/trace plot (e.g., G-G diagram) |
| **MiniMap** | Track position with driven path |
| **Steering Wheel** | Visual steering input display |

## Using Dashboards

1. Click a dash layout in the library to load it onto the canvas
2. Run the graph — dash elements populate with data
3. Use playback controls to scrub through the session
4. Right-click a dash for options (pop out, remove)

## Pop Out

Right-click any dash and select **Pop Out** to detach it into a floating window. This is useful for multi-monitor setups. The "Always on Top" option keeps it visible over other applications.

## Refresh Rate

Use the **Rate** dropdown to set the dashboard update frequency (15/30/60/120 Hz). Higher rates are smoother but use more CPU.