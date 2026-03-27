# Extract Templates

Extract templates define which telemetry channels are included in your analysis. Instead of working with hundreds of raw channels, templates let you focus on the variables that matter.

## Built-in Templates

| Template | Channels | Use Case |
|----------|----------|----------|
| **base** | Speed, Throttle, Brake, Steering, Gear, RPM | General driving analysis |
| **tire_temps** | All tire temperature channels (L/M/R per corner) | Tire management |
| **tire_press** | Tire pressures (all corners) | Pressure analysis |
| **wheel_speeds** | Individual wheel speeds | Traction and ABS analysis |
| **chassis** | Ride heights, shock deflections | Suspension setup |
| **brakes** | Brake temps, pressures, bias | Braking performance |
| **imu** | Accelerations, yaw rate, velocities | Vehicle dynamics |
| **input** | Steering, throttle, brake (driver inputs) | Driving style |
| **input_raw** | Raw unfiltered driver inputs | Input comparison |
| **engine** | RPM, oil/water temps, fuel | Powertrain monitoring |
| **fuel** | Fuel level, consumption | Fuel strategy |
| **weather** | Track temp, air temp, wind | Environmental conditions |
| **time** | Session time, lap time | Timing analysis |
| **dash** | Channels used by dashboard elements | Dashboard data |

## Selecting a Template

In the workflow panel, use the **Extract Template** dropdown to choose a template. The selected template determines which channels appear in your 2D plots.

## Adding Extra Variables

You can add individual channels on top of any template:

1. Open the Extract Set configuration
2. Use the **extra channels** list to browse and add specific variables
3. Use the scope search to filter by name

## Editing Templates

Templates are JSON files stored in your data folder under `extract_templates/`. You can:

- Modify existing templates to add or remove channels
- Create new templates by copying and editing an existing one
- Templates are simple lists of iRacing channel names