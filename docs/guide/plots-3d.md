# 3D Track View

The 3D track view shows an animated vehicle replay on track geometry. It appears in the upper panel after running the graph.

## Playback

Use the transport controls at the top of the 3D view:

- **Play/Pause** — start or stop the animation
- **Speed** — adjust playback speed
- **Lap selector** — jump to a specific lap
- **Scrub** — drag the playback slider to any point

## Camera Modes

The camera dropdown offers seven modes:

### Follow 1
Chase camera that follows behind the car. The camera yaws with the vehicle so you're always looking at the rear. The horizon stays level (no roll). Right-click and drag to orbit around the car. The camera snaps behind the car when selected.

### Follow 2
Same as Follow 1 but the camera does **not** yaw with the car. As the car turns, you see it from changing angles — useful for watching corner entry and exit from a fixed perspective. The camera does not snap when selected, so you can set your viewing angle and it stays put.

### Follow 3
The camera pitches, rolls, and yaws with the car — you see the world tilt as the car rotates through corners and over bumps. This gives the most immersive "onboard" feel. The camera snaps behind the car when selected.

### Free
Full manual camera with keyboard and controller support. Move anywhere in the 3D scene independently of the car.

- **W/A/S/D** — move forward, left, backward, right
- **Space** — move up
- **Alt** — move down
- **Shift** — sprint (faster movement)
- **Right-click + drag** — look around (yaw and pitch)
- **Gamepad left stick** — move
- **Gamepad right stick** — look around

The camera starts from wherever the previous camera mode was positioned, so there's no jump when switching.

### TV
Fixed trackside camera. The camera parks at a position near the track and follows the car by rotating in place — like a real TV broadcast camera on a tripod. As the car moves away, the camera stays put until it's out of range.

### TV2
Intelligent trackside camera that repositions along the track edges. It picks a spot ahead of the car based on track geometry and smoothly zooms the FOV to keep the car well-framed as it passes. Gives a natural broadcast look with dynamic framing.

### Drone
Physics-based drone camera controlled entirely with a gamepad (Xbox controller):

- **Left stick** — throttle (up/down) and yaw (left/right)
- **Right stick** — pitch and roll
- **Left bumper (LB)** — tilt camera up
- **Right bumper (RB)** — tilt camera down

The drone has realistic inertia and gravity — it drifts and settles naturally. Useful for cinematic fly-around shots.

## Controls

| Action | Control |
|--------|---------|
| Move camera in/out | Scroll wheel |
| Zoom (FOV) | Ctrl + scroll wheel |
| Rotate camera | Right-click + drag |
| Pan | Middle-click + drag |
| Draw on track | Left-click + drag |

## Color Mapping

The track trace can be colored by any telemetry channel value:

- Select a variable from the color options
- Adjust the color range (min/max) to highlight specific value ranges
- Useful for spotting braking zones, throttle application, tire slip, etc.

## Ghost Cars

When multiple laps are loaded, ghost cars overlay different laps on the same track for direct comparison. Toggle individual laps on/off in the segment tree.

## Vehicle Model

The 3D car model is loaded from the vehicle library. The vehicle library includes several pre-configured models with accurate wheel positions and steering geometry.

## Track Pen

- **Left-click and drag** on the track surface to draw annotations
- Useful for marking braking points, turn-in references, or racing lines
- Use the pen toolbar to change color, width, or clear drawings