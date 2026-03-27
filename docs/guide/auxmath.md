# Aux Math

Aux Math lets you create custom derived channels using mathematical expressions. This is useful for computing values that iRacing doesn't provide directly.

## Expression Syntax

Expressions use backtick-quoted channel names and standard math operators:

```
@TBdiff = `Throttle` - `Brake`
```

This creates a new channel called `TBdiff` with the difference between throttle and brake at every sample.

## Examples

| Expression | Description |
|-----------|-------------|
| `` @TBdiff = `Throttle` - `Brake` `` | Throttle minus brake overlap |
| `` @SpeedKmh = `Speed` * 3.6 `` | Convert m/s to km/h |
| `` @SlipAngle = atan2(`VelocityY`, `VelocityX`) `` | Calculate slip angle |
| `` @LateralG = `LatAccel` / 9.81 `` | Convert acceleration to G-force |
| `` @BrakePct = `Brake` * 100 `` | Brake as percentage |

## Supported Operations

- **Arithmetic** — `+`, `-`, `*`, `/`, `**` (power)
- **Functions** — `abs`, `sqrt`, `sin`, `cos`, `tan`, `atan2`, `log`, `exp`, `min`, `max`
- **Constants** — standard numeric values

## Configuration

In the workflow panel:

1. Select **Branch** — which data branches to apply the expression to (All, or specific)
2. Select **Channel In** — which input channel type (Raw, Pred, Val)
3. Write your expression in the text field

## Tips

- Derived channels appear in plots with an `@` prefix
- You can chain multiple Aux Math nodes for complex calculations
- Expressions are applied element-wise across all samples