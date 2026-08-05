---
name: "kokboru-negative-prompts"
description: "Provides comprehensive Kok Boru negative prompts and constraints. Invoke when user needs to prevent unwanted elements in Kok Boru style generation."
---

# Kok Boru Negative Prompts

This skill provides the complete set of negative prompts and constraints for Kok Boru style generation. Use these to prevent unwanted elements from appearing in generated images and videos. Append the relevant categories to any Kok Boru prompt.

## UNIVERSAL (Always Apply)

```
NO 3D, NO CGI, NO CGI smoothness, NO CGI fluidity, NO photographic, NO photographic look, NO photoreal, NO Disney, NO Pixar, NO game engine, NO game-cutscene aesthetic, NO smooth interpolation, NO motion blur, NO morphing, NO liquid or melting surfaces, NO AI slop, NO music, NO subtitles, NO Russian, NO Russian-accented, NO TTS robotic delivery.
```

## Animation Prohibitions

- NO smooth interpolation
- NO smooth in-between interpolation
- NO motion blur
- NO morphing
- NO liquid or melting surfaces — surfaces stay solid
- NO gliding — motion is the redrawing of strokes, not smooth movement
- NO silky high-frame-rate CGI glide
- NO high-framerate fluidity
- NO clay, NOT puppets (stop-motion means hand-painted 2D, not claymation)
- Motion is the redrawing of strokes, not AI slop
- Figures, horses, and wolves must visibly step frame to frame — never gliding

## Style Prohibitions

- NO 3D render
- NO game engine
- NO CGI smoothness
- NO photographic look
- NO photoreal — keep the rough hand-painted ink-wash quality
- NO Disney, NO Pixar
- NO cute, NO pretty symmetrical faces
- NO large round eyes
- NO smooth glossy rendered skin
- NO airbrushed gradients
- NO sharp, never photographic — keep soft edges, visible brushwork
- NO glossy
- NO smooth (for character design sheets — do not smooth, sharpen, denoise, redraw or add photographic detail)
- NO beige sketch-background or pencil-line style applied to video (when using concept-art references)

## Scene Prohibitions

- NO direct sun (for winter camp and overcast scenes)
- NO rays, NO beams, NO god rays
- NO blue color cast / NOT an electric-blue night filter — muted desaturated warm earthy darkness but neutral like a properly graded low-key film
- NO blue filter
- NO bright, never saturated
- NO centered framing (for human subjects and action shots — always off-center by thirds)
- NO pan, NO zoom, NO dolly (for gentle handheld scenes)
- NO tripod-locked, NO gimbal-smooth (for handheld scenes — the camera must breathe)
- NO aggressive, NO jittery, NO buffeted (for calm handheld scenes)
- NO floating props
- NO identity drift between cuts
- NO separately-lit figures (characters lit by the same light as the environment)
- NO temporal flicker
- NO limb distortion

## Audio Prohibitions

- NO MUSIC — absolutely no music, only natural ambient sound
- NO dialogue (unless dialogue is explicitly part of the scene)
- NO subtitles
- Only natural diegetic sound: wind, crunching snow, breath, fire crackle, hoofbeats, voices
- Specific scene audio rules:
  - Winter camp: only natural diegetic sound — the low moan of cold wind over the camp
  - Yurt interior: only natural diegetic sound — the quiet shift of cloth and gear inside the yurt
  - Blizzard: only the roar of the blizzard, storm and voices
  - Chase/violence: only storm, hooves, snarls, and screams
  - Dream: SFX only — hoofbeats, fire crackle, absolute silence underneath

## Character Performance Prohibitions

- NO black void — faces must be clearly LIT and READABLE in key beats
- NO blank mask — restrained but VISIBLE micro-acting required
- NO smooth or symmetrical face — asymmetry and rough paint are mandatory
- NO grief absent — resolve is grief overcome, not grief absent
- NO flat playing — emotion must arc (grief rising then mastered, hardening into will)
- NO haste (for ANA's resolve scene) — her movements are fast but precise, not hurried
- NO lingering on violence — brutality staged not lingered, fast not anatomical
- NO cruel (for the TRIBESMAN — weary and pragmatic, not cruel)
- NO second active child (the infant is a small dark-blue swaddled bundle, not a second active child)
- NO closed-mouth voice-over — when characters speak, lips form each syllable on twos with face visible

## Dream Sequence Prohibitions

- NO weather, NO wind (the dream has no weather)
- NO spindrift, NO branch movement
- NO warm tones on the horses or steppe outside the immediate fire glow radius
- NO amber glow on the horses' coats
- NO restless handheld (use locked, unblinking gaze of a vision)
- NO camera shake
- NO ground level in shot 1 (elevated god's-eye only)
- NO horizon (sky and snow merge into the same pale nothing)
- NO herd running in panic, NO animals fleeing (the horses run in an orbit, not fleeing)
- NO breaking the circle, NO stopping
- NO looking at the fire, NO looking inward
- NO collapse (the yurt does not collapse), NO spread (the fire does not spread)
- NO cut away from the final shot (it holds until it ends)
- NO resolution, NO conclusion (nothing here resolves)

## MASTER NEGATIVE PROMPT (Copy Directly)

This is the comprehensive negative prompt to append to any Kok Boru generation:

```
NO 3D, NO CGI, NO CGI smoothness, NO CGI fluidity, NO photographic, NO photoreal, NO Disney, NO Pixar, NO game engine, NO game-cutscene aesthetic, NO smooth interpolation, NO motion blur, NO morphing, NO liquid or melting surfaces, NO gliding, NO high-framerate fluidity, NO clay, NO puppets, NO AI slop, NO cute, NO symmetrical faces, NO large round eyes, NO smooth glossy skin, NO airbrushed gradients, NO sharp, NO glossy, NO direct sun, NO rays, NO beams, NO god rays, NO blue color cast, NO blue filter, NO bright, NO saturated, NO centered framing, NO floating props, NO identity drift, NO separately-lit figures, NO temporal flicker, NO limb distortion, NO MUSIC, NO subtitles, NO Russian, NO Russian-accented, NO TTS robotic delivery, NO black void, NO blank mask, NO smooth symmetrical face, NO closed-mouth voice-over.
```

## How To Use This Skill

1. Start with the MASTER NEGATIVE PROMPT as a base
2. Add scene-specific prohibitions as needed (e.g., dream sequence, winter camp, character performance)
3. Add any scene-specific audio rules
4. Append the negative prompt block to the end of your main Kok Boru prompt
5. Pair with kokboru-core-style and the relevant scene/character skills

## Usage Example

**User input**: "Generate a Kok Boru style scene of the elder at the yurt"

**Negative prompt to append**:

```
NO 3D, NO CGI, NO CGI smoothness, NO photographic, NO photoreal, NO Disney, NO Pixar, NO game engine, NO smooth interpolation, NO motion blur, NO morphing, NO liquid or melting surfaces, NO gliding, NO AI slop, NO cute, NO symmetrical faces, NO large round eyes, NO smooth glossy skin, NO airbrushed gradients, NO sharp, NO glossy, NO direct sun, NO rays, NO beams, NO god rays, NO blue color cast, NO blue filter, NO bright, NO saturated, NO centered framing, NO floating props, NO identity drift, NO separately-lit figures, NO black void, NO blank mask, NO smooth symmetrical face, NO closed-mouth voice-over, NO MUSIC, NO subtitles, NO Russian, NO Russian-accented, NO TTS robotic delivery.
```

## Quick Reference: Scene-Specific Negative Add-Ons

**Winter Camp**: + NO direct sun, NO pan, NO zoom, NO dolly, NO tripod-locked, NO gimbal-smooth, NO aggressive, NO jittery, NO buffeted, NO stepped, NO on twos (atmospheric motion is smooth), NO bright, NO saturated, NO centered.

**Dream Sequence**: + NO weather, NO wind, NO spindrift, NO warm tones on horses, NO amber glow on coats, NO restless handheld, NO camera shake, NO ground level (shot 1), NO horizon, NO panic, NO fleeing, NO breaking circle, NO looking inward, NO collapse, NO spread, NO resolution.

**Character Design Sheet**: + NO smooth, NO sharpen, NO denoise, NO redraw, NO photographic detail, NO Disney, NO Pixar, NO 3D, NO cute, NO symmetrical, NO large round eyes, NO smooth glossy skin, NO airbrushed gradients.

**Action/Chase Scene**: + NO smooth interpolation, NO gliding even at full gallop, NO gimbal-smooth, NO tripod-locked, NO lingering gore, NO cloned wolves, NO mirrored wolves.
