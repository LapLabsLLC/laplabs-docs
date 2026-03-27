# Plots & Visualization

LapLabs Studio provides four visualization types, all controlled through the **View** node.

## 2D Plot

Time-series or lap-distance plots of telemetry channels.

- **Variable tree** — toggle channels on/off with checkboxes
- **Segments** — show/hide individual stints or laps
- **Pred/Val** — compare model predictions against validation data
- **X-axis modes** — switch between time, lap distance, or sample index
- **Linked cursors** — hover syncs across all 2D plots

## 3D Track View

Animated vehicle replay on 3D track geometry.

- **Playback controls** — play/pause, speed, step through laps
- **Ghost cars** — overlay multiple laps for comparison
- **Color mapping** — color the track trace by any channel value
- **Camera modes** — chase, orbit, top-down, TV-style views
- **Track pen** — draw annotations directly on the track surface

## Waterfall Plot

3D surface plot showing how a channel evolves across laps.

- **X-axis** — lap distance
- **Y-axis** — lap number
- **Z-axis / color** — channel value
- Useful for spotting trends across multiple laps

## Spectrogram

Frequency-domain view of telemetry signals.

- **STFT** — short-time Fourier transform with configurable window
- **Frequency range** — adjustable min/max Hz
- **dB range** — adjustable color scale
- Useful for identifying vibrations, oscillations, and periodic behavior

## View Node LEDs

The View node has toggle LEDs to enable/disable each plot type:

- **Plot 2D** — toggle 2D time-series plot
- **Track 3D** — toggle 3D track visualization