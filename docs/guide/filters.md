# Filters

Filters apply signal processing to telemetry channels. Use them to smooth noisy signals, compute derivatives, or transform data.

## Filter Methods

### Savitzky-Golay
Polynomial smoothing filter that preserves signal shape better than simple averaging.

- **Window** — number of samples in the smoothing window (must be odd)
- **Poly Order** — polynomial degree (lower = smoother, higher = more detail)

Best for: general smoothing while preserving peaks and valleys.

### Butterworth
Classic frequency-domain filter with flat passband response.

- **Tau** — time constant controlling the cutoff frequency
- **dt** — sample interval

Best for: removing high-frequency noise with a clean cutoff.

### EMA (Exponential Moving Average)
Simple recursive smoothing where recent samples have more weight.

- **Tau** — time constant (higher = smoother)
- **dt** — sample interval

Best for: fast, lightweight smoothing.

### One Euro
Adaptive filter that smooths slow movements but preserves fast ones.

- **Min Cutoff** — minimum cutoff frequency
- **Beta** — speed coefficient (higher = less smoothing during fast changes)
- **D Cutoff** — derivative cutoff frequency

Best for: signals that alternate between steady-state and rapid changes.

### Integration
Computes the running integral (cumulative sum) of a channel.

- **Initial** — starting value for the integral

### Differentiation
Computes the rate of change (derivative) of a channel.

### Passthrough
No filtering — passes the signal through unchanged. Useful as a placeholder.

## Configuration

In the workflow panel:

- **Method** — select the filter type
- **Branch Mode** — apply to all branches or a specific one
- **Channel Types** — toggle which channel types to filter (Raw, Pred, Val, AuxMath)
- **Parameters** — adjust filter-specific settings

!!! tip
    The **Denoise** toggle in the workflow panel is separate from the filter node. Denoise corrects timing errors in IBT files before any other processing — it is not a signal smoother.