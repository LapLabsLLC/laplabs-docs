# Loading Data

## Supported Formats

| Format | Extension | Notes |
|--------|-----------|-------|
| iRacing Binary Telemetry | `.ibt` | Native iRacing format, auto-converted on load |
| Parquet | `.parquet` | Fast columnar format, recommended for repeat analysis |
| CSV | `.csv` | Universal, slower for large files |

## Load Data Node

Double-click the **Load Data** node to configure:

- **File/Folder** — browse to a telemetry file or folder
- **Min Laps** — minimum laps to include a stint
- **Segmentation** — how to split data (by stint, lap, or whole file)
- **Split Mode** — train/test split strategy
- **Split %** — percentage for training vs. testing
- **Convert Files** — auto-convert IBT to Parquet for faster future loads

## Telemetry Channels

iRacing telemetry includes hundreds of channels. Common ones:

| Channel | Description |
|---------|-------------|
| `Speed` | Vehicle speed |
| `Throttle` | Throttle position (0-1) |
| `Brake` | Brake position (0-1) |
| `SteeringWheelAngle` | Steering input |
| `LapDistPct` | Position around track (0-1) |
| `VelocityX/Y/Z` | Vehicle velocities |
| `YawRate` | Rotational velocity |
| `LFtempCL/CM/CR` | Left-front tire temperatures |

## Extract Sets

The **Extract Set** node selects which telemetry channels to use for analysis or ML training. Templates are provided for common groupings (base, tires, chassis, etc.).