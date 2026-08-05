---
name: "kokboru-core-style"
description: "Applies Kok Boru hand-painted stop-motion oil painting style to any description. Invoke when user wants Kok Boru style for image or video generation."
---

# Kok Boru Core Style

This skill wraps any simple scene description with the complete Kok Boru visual style — a hand-painted stop-motion animated oil painting look. Use this as the base style layer for any Kok Boru image or video generation.

## STYLE HEADER Template (copy directly)

```
Style: STOP-MOTION ANIMATION — stepped, frame-by-frame motion brought to a HAND-PAINTED 2D look, a moving oil painting, NOT clay, NOT puppets, NOT 3D. True 12 frames per second, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding. Constant painterly BOIL — brushstrokes and outlines subtly alive frame to frame. NO smooth interpolation, NO motion blur, NO morphing, real frame-by-frame animation not AI slop. 8K IMAX, traditional hand-drawn 2D animation, animated on twos at 12 frames per second — each drawing held for two frames then replaced, choppy stepped motion cadence, visible pose-to-pose timing, distinct keyframe drawings with no smooth in-between interpolation, hand-painted oil-brush texture on every drawing, brushstrokes shifting and redrawn from frame to frame, line jitter and boil between frames. No 3D render, no game engine, no CGI smoothness. Subtle chromatic aberration throughout — faint color fringing at high-contrast edges. The 12 principles of animation throughout.
```

For quiet atmospheric landscape shots (clouds drifting, cloud-shadows, no characters), use this variant header instead:

```
Style: 8K IMAX, hand-painted 2D animation, the look of a moving oil painting, rough painterly brushstrokes, dry-brush texture, matte gouache, visible paint, no 3D render, no game engine, no CGI smoothness, no photographic look. NOTE: this is a quiet atmospheric landscape — the clouds and the cloud-shadows drift SMOOTHLY and slowly, not stepped, not on twos; only the sky, the moving light and the shadows move, the camp and mountains stay still.
```

## Animation Specifications

- **Frame rate**: True 12fps, ANIMATED ON TWOS — each pose held two frames then snapping to the next, never gliding
- **Cadence**: Choppy stepped motion, visible pose-to-pose timing, distinct keyframe drawings with no smooth in-between interpolation
- **Painterly boil**: Constant — brushstrokes and outlines subtly alive frame to frame, brushstrokes shifting and redrawn from frame to frame, line jitter and boil between frames
- **Stop-motion feel**: Stepped frame-by-frame, the slightly strobing stuttering rhythm of animation on twos
- **The 12 principles of animation throughout**: anticipation, squash and stretch, follow-through and overlapping on hair and cloth lagging the body, slow-in slow-out in the spacing of the held poses, arcs, secondary action, exaggeration, solid drawing

## Painting Style

- Hand-painted 2D animation, the look of a moving oil painting
- Loose gestural oil-and-gouache brushstrokes
- Thick visible painterly strokes
- Dry-brush texture
- Matte gouache
- Visible paint
- Hand-painted oil-brush texture on every drawing
- Rough broken edges, soft edges, visible brushwork, never sharp, never photographic
- Subtle chromatic aberration throughout — faint color fringing at high-contrast edges

## Quality Requirements

- 8K IMAX
- No 3D render
- No game engine
- No game-cutscene aesthetic
- No CGI smoothness
- No CGI fluidity
- No photographic look
- No Disney
- No Pixar
- NOT clay, NOT puppets
- Real frame-by-frame animation, not AI slop

## Cinematography

- Emmanuel Lubezki x Roger Deakins
- Gentle handheld in human hands — a soft living presence, a slow calm breathing sway, faint drift and tiny micro-corrections, an almost imperceptible handheld float
- NOT aggressive, NOT jittery, NOT buffeted — calm and quiet
- Anamorphic wide
- Never tripod-locked but never aggressive, never gimbal-smooth
- Eye level (or slightly LOW for authority figures)
- Physical cine lens
- Natural light only

## Color

- Cinematic muted desaturated grade
- Soft low-saturation palette
- Subdued, never bright, never saturated
- Low contrast filmic tones
- The moody palette of the reference

## Atmospheric Motion Exception Rule (CRITICAL)

This is the most important nuance of the Kok Boru style:

- **Atmospheric motion moves SMOOTHLY**: drifting snow, breath-vapor, smoke, ember-glow flicker, cloud-shadows, blizzard haze, falling snow, dust — all drift slowly and smoothly, NOT stepped, NOT on twos
- **Figures and drawn snow-spray effects step ON TWOS**: characters, horses, wolves, and any drawn snow kicked up by action step pose to pose with the stop-motion cadence
- This creates a dual-motion system: the world breathes smoothly while the figures move with the choppy heartbeat of hand-drawn animation
- For pure landscape shots with no characters: everything moves smoothly, nothing is on twos

## How To Use This Skill

1. Take the user's simple scene description
2. Prepend the STYLE HEADER template (choose the standard or atmospheric variant based on whether the scene has characters)
3. Add cinematography, lighting, atmosphere, color sections from this skill
4. Apply the atmospheric motion exception rule
5. Append the relevant negative prompts (see kokboru-negative-prompts skill)

## Complete Usage Example

**User input**: "A woman walking in the snow"

**Output prompt**:

```
Style: STOP-MOTION ANIMATION — stepped, frame-by-frame motion brought to a HAND-PAINTED 2D look, a moving oil painting, NOT clay, NOT puppets, NOT 3D. True 12 frames per second, ANIMATED ON TWOS: 12 distinct hand-painted drawings per second, each pose held two frames then snapping to the next, never gliding. Constant painterly BOIL — brushstrokes and outlines subtly alive frame to frame. NO smooth interpolation, NO motion blur, NO morphing, real frame-by-frame animation not AI slop. 8K IMAX, traditional hand-drawn 2D animation, animated on twos at 12 frames per second — each drawing held for two frames then replaced, choppy stepped motion cadence, visible pose-to-pose timing, distinct keyframe drawings with no smooth in-between interpolation, hand-painted oil-brush texture on every drawing, brushstrokes shifting and redrawn from frame to frame, line jitter and boil between frames. No 3D render, no game engine, no CGI smoothness.

A woman walking through deep snow, trudging step by step, each step a separate held pose on twos. Her dark figure a small mass against the dominant white snowfield. Breath-vapor curling in the cold (SMOOTH). Fine snow drifting across the frame (SMOOTH). Her robe and hair whipping with follow-through on twos.

Cinematography: Lubezki / Deakins, gently handheld in human hands, soft calm breathing sway only, anamorphic wide, never tripod-locked but never aggressive, never gimbal-smooth, eye level.

Lighting: dim cold overcast daylight, no direct sun, soft diffuse light.

Atmosphere: cold air, faint cold haze, fine snow drifting low across the ground (SMOOTH), breath-vapor curling (SMOOTH).

Color: cinematic muted desaturated grade, soft low-saturation palette of cold dark olive-grey, deep shadow green-black, pale luminous cream-grey, subdued never bright never saturated, low contrast filmic tones.

Constraints: stop-motion on twos at 12fps with painterly boil, never gliding, NO interpolation NO motion blur NO morphing NO liquid surfaces; drifting snow and breath-vapor smooth while the figure steps on twos; hand-painted painterly oil style not photoreal not 3D not Disney; cinematic muted desaturated cold palette; NO MUSIC only natural sound; no subtitles.
```
