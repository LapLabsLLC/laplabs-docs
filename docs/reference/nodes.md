# Node Reference

## I/O Nodes

### Load Data
Loads telemetry files (IBT, Parquet, CSV) and segments them into stints or laps. Outputs structured data for downstream nodes.

**Configuration:**

- File/folder path
- Minimum laps per stint
- Segmentation mode (stint, lap, whole file)
- Train/test split

### View
Combined output node for all visualization types. Toggle LEDs control which plots are generated.

**LEDs:**

- Plot 2D
- Track 3D

## Math Nodes

### Aux Math
Apply custom mathematical expressions to telemetry channels. Supports standard math operations and channel references using backtick syntax.

**Example expressions:**

- `` @TBdiff = `Throttle` - `Brake` ``
- `` @SpeedKmh = `Speed` * 3.6 ``

### Filter
Signal processing filters applied to selected channels.

**Methods:**

- Butterworth (low-pass, high-pass, band-pass)
- Savitzky-Golay (smoothing with polynomial fit)
- EMA (exponential moving average)
- One Euro (adaptive smoothing)
- Integration / Differentiation
- Passthrough (no filtering)

## ML Nodes

### Extract Set
Selects telemetry channels for ML training. Uses templates (base, tires, chassis, etc.) and supports custom channel selection.

### Model
Configures and trains ML models on extracted telemetry data.

**Architectures:**

- MLP (Multi-Layer Perceptron)
- GRU (Gated Recurrent Unit)
- TCN (Temporal Convolutional Network)
- Transformer

**Features:**

- GPU/CPU training
- Model save/load
- Benchmark inference speed
- Training history in Run Store

## Live Nodes

### Live Stream
Connects to iRacing via iRSDK for real-time telemetry streaming.

### Live Model
Runs trained models on live telemetry for real-time inference and prediction.
