# Track Library

The track library stores 3D track models used by the 3D track view. Each track is a folder inside `~/.laplabsstudio/Tracks/` containing geometry data and metadata.

## Viewing the Library

Open the track library from **Tools → Libraries → Track Library**. The list shows all available tracks. Select a track to see a preview of its geometry.

## Creating a Track

Tracks are built from telemetry data — you drive the track in iRacing, record an IBT file, and LapLabs builds the 3D geometry from it.

### New Track Dialog

Click **New Track** in the track library to open the creation dialog. You'll need:

1. **Track name** — a label for the library (e.g., "Spa-Francorchamps")
2. **IBT file** — a recorded session from the track
3. **Build method** — how the geometry is constructed (see below)

### Fetch from iRacing

Click **Fetch from iRacing** while connected to a live session to auto-fill the track name and sector information directly from the sim. This saves manual entry and ensures sector definitions match iRacing's official splits.

### Build Methods

There are two ways to build track geometry from telemetry:

#### Centerline + Roll

Uses the car's driven path as the track centerline and applies a fixed track width. The roll (bank angle) of the track surface is derived from the car's roll data.

- Simpler — requires only a single clean lap
- Good for most tracks
- Track width is uniform (estimated from the car's path)

#### Left/Right Edge Folders

Uses two sets of IBT recordings — one where the car traces the left edge of the track and one where it traces the right edge. The track surface is built between these two boundaries.

- More accurate width variation through corners
- Captures real track edges (curbs, run-off boundaries)
- Requires two dedicated recording passes

### Build Process

After selecting the method and providing the IBT data, click **Build**. The track geometry is generated and saved to the library. The 3D track view will use the new track automatically when you load a session from that circuit.

## Track Files

Each track folder in `~/.laplabsstudio/Tracks/` contains:

- **track.json** — metadata (name, sectors, build method)
- **geometry data** — the computed 3D mesh points for the track surface

Tracks are portable — you can copy a track folder to another machine's `~/.laplabsstudio/Tracks/` directory to share it.