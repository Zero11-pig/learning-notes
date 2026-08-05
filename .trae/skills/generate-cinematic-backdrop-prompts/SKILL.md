---
name: generate-cinematic-backdrop-prompts
description: Generate and refine model-ready prompts for OpenAI Image 2 and comparable image generators by translating emotion, narrative intent, viewer psychology, spatial hierarchy, and visual references into clean cinematic visuals. Specialize in uncluttered backdrops, key-visual base plates, restrained narrative stills, image-to-prompt reconstruction, reference locking, mecha consistency, character or object asset sheets, and multi-view concept art normalization. Use for 生图提示词, 电影感底图, 干净背景, KV 底图, 海报留白背景, 图片反推提示词, 参考图锁定, 机甲一致性, 多视图设定图, 角色设定图, visual-reference reconstruction, no-text backplates, 电影风格分析与转译, prompt polishing, or controlled visual variants.
---

# Generate Cinematic Backdrop Prompts

Turn a rough concept or target emotion into a production-ready image prompt. Preserve a clean frame, clear hierarchy, cinematic depth, and usable layout space. Prefer purposeful natural-language decisions over keyword piles and technical decoration.

## Follow the priority order

Resolve decisions in this order:

`user intent → reference fidelity when applicable → emotional effect → visual hierarchy → layout space → physical coherence → capture texture`

Never sacrifice a readable image to include more cinematic terminology. Treat emotion as a reason for choosing visual language, not as a reason to add more objects or effects.
When reference images are supplied, preserve identity-defining structure before adding cinematic styling. Do not trade silhouette, part count, attachment logic, or proportions for atmosphere or surface detail.

## Build the brief

Infer missing choices when they do not change the concept. Ask at most one question only when the subject or intended use is impossible to infer.

Determine:

- intended use: poster, key visual, presentation cover, website hero, product stage, pure atmosphere, or narrative still
- input-image role: edit target, subject anchor, multi-view structure source, style reference, composition reference, or supporting insert
- dominant subject or visual idea
- orientation or aspect ratio
- title-safe or copy-safe zone
- target emotion and narrative tension
- viewer position: witness, participant, pursued, pursuer, intimate observer, or detached observer
- power relationship: what dominates the frame and what appears vulnerable
- spatial psychology: open, compressed, isolated, enclosed, monumental, or intimate
- realism level, palette, and elements that must or must not appear

When unspecified, default to a wide 16:9 cinematic frame, one understated focal area offset from center, generous quiet negative space, restrained photorealism, no prominent people, and no text or marks.

## Choose the output mode

- **Clean backdrop:** Use by default for posters, KV, covers, and compositing. Prioritize negative space and low detail density.
- **Narrative still:** Use when a person, action, threat, or story beat must be readable. Preserve one dominant event and keep the environment subordinate.
- **Style analysis plus prompt:** When the user names a film or cinematic reference, first summarize its transferable visual traits, then translate those traits into an original prompt without copying exact characters, props, compositions, or signature shots.
- **Visual-reference reconstruction:** Use when one or more images define a subject, environment, composition, or material language. Classify every image, build a canonical subject map, lock structural invariants, and explicitly ignore presentation artifacts before writing the prompt.
- **Asset sheet or multi-view normalization:** Use for character sheets, mecha sheets, product turnarounds, orthographic views, equipment boards, or exploded-detail references. Treat repeated views as observations of one canonical subject, not as duplicate bodies or extra parts.
- **Locked template:** When the user supplies headings or fields, preserve their names, punctuation, and order. If fields conflict, resolve the conflict inside the existing fields and briefly identify the correction unless the user requests prompt-only output.

Do not force every possible camera, lighting, environment, and material field into one prompt.

## Run the visual-reference reconstruction gate

Whenever any reference image is present, complete this gate before composing the final prompt. Read [references/visual-reference-reconstruction.md](references/visual-reference-reconstruction.md) for the classification rules, canonical subject map, templates, and failure checks.

1. **Classify each image.** Identify it as a finished shot, character or object concept sheet, multi-view design sheet, product image, style/composition reference, edit target, or supporting insert. Assign one explicit role and authority level to each image.
2. **Separate evidence into four buckets.**
   - immutable subject structure: silhouette, part count, side ownership, attachment points, relative proportions, and articulation
   - variable appearance: paint, wear, material finish, pose, lighting, removable equipment, and state
   - environment information: architecture, scale cues, staging, weather, and light
   - ignored presentation information: text, labels, arrows, dimensions, borders, UI, white boards, exploded parts, optional variants, and repeated views
3. **Build one canonical subject map.** Record each identity-defining part as `part → count → subject side → parent assembly → connection point → state`. Use the subject's left and right, never the viewer's, and keep this convention explicit.
4. **Normalize multi-view evidence.** Treat front, side, rear, detail, storage, deployed, and optional views as evidence about one subject. Select one requested state. Do not combine different states into duplicated limbs, weapons, backpacks, wings, rings, or armor.
5. **Apply the lock hierarchy.** Resolve conflicts in this order:

   `overall silhouette → part count → connection relationships → relative proportions → side ownership → color/material → markings/wear → microdetail`

6. **Preserve uncertainty conservatively.** If a hidden or contradictory feature does not define identity, omit it. If a core structural ambiguity would materially change the output, ask at most one question; otherwise state one conservative assumption and continue.

Reference fidelity is not the same as copying presentation layout. Preserve the subject, not the reference sheet's typography, boxes, duplicated states, camera defects, or background.

## Translate emotion into visual decisions

Infer the emotional function before selecting camera language:

1. Decide where the viewer feels positioned.
2. Decide what controls the space.
3. Decide whether the frame should feel open, compressed, enclosed, or intimate.
4. Decide what the eye must notice first and what may remain absent.
5. Decide the visual temperature: living, warm, sterile, cold, sacred, contaminated, or exhausted.
6. Decide whether the reality should feel observational, heightened but physical, gently stylized, or dreamlike.

Use camera choices as flexible heuristics rather than fixed formulas:

- lower viewpoints can transfer power upward or enlarge a subject
- higher viewpoints can imply vulnerability, exposure, or surveillance
- eye-level viewpoints can feel observational and physically present
- wide lenses can intensify proximity, scale change, or instability
- long lenses can compress distance, isolate layers, or reduce escape
- shallow focus can lock attention; deep focus can clarify spatial relationships

Select only the choices that serve the requested emotion. Read [references/emotion-to-visual.md](references/emotion-to-visual.md) for mood-specific candidates or film-reference analysis.

## Enforce a detail budget

Apply these defaults unless the user explicitly requests a dense scene:

- Use one dominant subject or visual idea.
- Allow no more than two supporting elements.
- Concentrate meaningful detail within roughly 15–25% of the frame.
- Keep the copy-safe region and surrounding field broad, continuous, and low contrast.
- Use one motivated key source plus only physically necessary passive fill.
- Limit the core palette to two or three related hues plus neutrals.
- Use at most one atmospheric effect, such as haze, rain, dust, or snow.
- Add foreground, middle ground, and background only when each plane contributes to scale or narrative.
- Prefer large tonal masses, calm geometry, uninterrupted surfaces, and low edge density.

If the prompt feels crowded, remove a visual noun before adding another exclusion. Remove duplicated adjectives, secondary props, decorative atmosphere, microtexture, and redundant camera specifications first.

For complex subjects such as mecha, vehicles, suits, or industrial equipment, preserve structural readability with a three-level budget rather than removing functional identity:

- roughly 60–70% large silhouette-defining masses and uninterrupted armor or body surfaces
- roughly 20–30% real joints, interfaces, supports, controls, vents, and attachment structures
- no more than roughly 10% wear, fasteners, exposed mechanics, decals, and microtexture

Concentrate microdetail near joints and connection points. Keep large surfaces calm. Never simplify away a required part, joint, or load-bearing connection merely to make the frame clean.

## Construct the prompt

Use this order:

`purpose/frame → emotional intent/viewer position → dominant subject/environment → composition/negative space → motivated light → restrained palette/material → depth/capture behavior → cleanliness constraints`

When references are present, prepend:

`reference roles → canonical subject lock → part count/ownership/attachments → selected state`

1. Open with the frame's purpose and one dominant idea.
2. Place the focal zone and copy-safe zone explicitly when typography or compositing is expected.
3. Express the emotional relationship through scale, viewpoint, distance, and spatial openness rather than abstract praise.
4. Identify one believable light source, coherent shadow direction, controlled contrast, and soft highlight roll-off.
5. Describe only the material properties that change the image.
6. Choose a capture medium contextually. Do not default to 35mm film, grain, halation, or a particular camera. Add those traits only when they support the intended emotion.
7. Add lens language only when it materially controls perspective, compression, or depth.
8. End with concise, natural cleanliness constraints.

For reference-driven prompts, name what the generator must read from each image and what it must ignore. State all critical counts, side ownership, parent-child relationships, and attachment points once in a compact structural block. Avoid repeating them as scattered adjectives.

Keep perspective, scale, gravity, reflections, shadows, and architecture physically coherent. Interpret “clean” as controlled and readable, not sterile or plastic.

## Keep decisions deterministic

- Make one final choice for angle, lens behavior, aspect ratio, focal placement, light direction, weather, and background.
- Do not leave `or`, `或`, slash-separated alternatives, or unresolved paired directions inside one final prompt.
- When several approaches are useful, output separate named variants and change one main axis at a time.
- Avoid numerical camera precision unless the user's workflow genuinely requires it.
- Avoid filler such as “masterpiece,” “best quality,” “8K,” “award-winning,” or conflicting style labels.

## Phrase constraints safely

Prefer positive visual instructions over detached negative-prompt lists:

- Write “keep the upper-left area as a continuous low-contrast gradient” instead of listing every object that must not appear there.
- Write “include only one distant figure” instead of naming several unwanted characters.
- Write “use matte mineral surfaces with natural highlight behavior” instead of “no plastic CGI.”

Explicitly omit text, letters, numerals, logos, watermarks, UI, borders, split screens, and collages when the image is a clean base plate. Keep haze, particles, bloom, grain, and lens artifacts absent or subtle unless they perform a clear emotional function.

## Deliver the result

Return one polished prompt in the user's language unless another language is requested. Use a coherent paragraph that can be pasted directly into the image model.

Default format:

```text
Prompt:
<one model-ready paragraph>
```

If the user requests style analysis, return:

```text
风格特征：
<concise transferable traits>

Prompt:
<one original model-ready paragraph>
```

Add a short `可调参数` line only when aspect ratio, copy-safe placement, or realism level remains genuinely useful to choose. If the user asks for “only the prompt,” output only the prompt text.

For visual-reference reconstruction, default to:

```text
参考图拆解：
<type, immutable structure, variable appearance, environment evidence, ignored information, and any conservative assumption>

结构锁定：
<canonical silhouette, exact counts, side ownership, parent assemblies, connection points, selected state>

Prompt:
<one model-ready paragraph>
```

If the user requests prompt-only output, perform the reference analysis internally and return only the final prompt.

For common composition patterns and compact examples, read [references/prompt-recipes.md](references/prompt-recipes.md) when the user requests alternatives, a specific backdrop category, or help choosing a direction.

## Check before returning

Confirm that:

- one emotional intention and one dominant visual idea are clear
- viewer position and power relationship are intentional when relevant
- detail remains concentrated rather than evenly spread
- the copy-safe region is identified when the image will carry text
- the light has a believable physical source
- palette, material, depth, and capture texture serve the emotion
- no camera or style instructions conflict
- unwanted text and layout artifacts are explicitly prevented
- every sentence materially changes the image

When references are present, also run this consistency gate:

- the output contains the intended number of subjects and no duplicated body
- silhouette and major proportion relationships match the canonical subject
- every identity-defining part has the correct count, subject side, parent assembly, and physical connection
- only one requested equipment or transformation state is active
- front, side, rear, and detail evidence has been unified without mirroring or multiplying parts
- supports, feet, wheels, mounts, cables, weapons, rings, wings, and backpacks do not float or fuse into the environment
- occlusion does not create false limbs, missing joints, or impossible overlaps
- extracted detail panels, optional equipment, labels, arrows, borders, UI, and white design-board backgrounds are excluded
