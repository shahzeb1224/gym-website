# Arnold's Fitness Gym — AI Image Prompt Sheet

This site is built as a complete **premium fitness brand campaign**. Every visual
section already references its **final `.webp` file path**. Until those files exist,
the layout renders on-brand **cinematic placeholders** automatically (dark gradient
panels with a faint peak monogram + the filename). **Drop the real `.webp` into the
matching path and it appears instantly — no code changes required.**

Generate each image with any capable image model, then export as **`.webp`** using the
**exact filename** below, saved into the folder shown.

---

## Global style — prepend this to EVERY prompt

> Cinematic editorial fitness photography. Dark, dramatic, premium gym environment.
> High contrast, deep blacks and charcoal tones, strong shadows, controlled highlights.
> A subtle athletic **red (#E10600)** accent used *sparingly* — in lighting, clothing,
> equipment or environmental detail (never make the whole image red). Realistic skin
> texture and anatomy, natural athletic poses, professional sports-photography
> composition, high-end luxury fitness advertising aesthetic. Shot on a full-frame
> cinema camera, shallow depth of field, volumetric haze.
> **Photorealistic, high resolution. No CGI/plastic look, no distorted or extra fingers,
> no exaggerated physiques, no neon, no cartoon/illustration, no text, no watermark.**

Keep lighting language, color grading and architecture **consistent across all images**
so they read as one brand campaign.

---

## The images

| # | File (save here) | Placement | Ratio | Subject / art-direction |
|---|------------------|-----------|-------|--------------------------|
| 1 | `images/hero/hero-athlete-training.webp` | Hero background (also final CTA fallback + OG) | **16:9 / 21:9** | One elite athlete mid heavy barbell training in a vast dark premium gym. Subject **right-of-centre**, strong rim/back light, haze. Leave the **left third as negative space** for the headline & CTAs. |
| 2 | `images/training/strength-training.webp` | Training card 01 | **4:5** | Athlete driving up from a heavy barbell back squat, chalk dust in the air, single hard side light, matte-black rack, tiny red accent on a plate collar. |
| 3 | `images/training/functional-training.webp` | Training card 02 | **4:5** | Athlete mid-stride in an explosive heavy sled push across polished-concrete turf, motion energy, hard directional light. |
| 4 | `images/training/personal-training.webp` | Coaching split (subject toward **right**, copy sits left) | **5:6** | A professional trainer coaching & spotting an athlete through a controlled dumbbell press; two focused subjects, intimate cinematic light. |
| 5 | `images/training/athletic-detail.webp` | Detail accent (available) | **1:1** | Extreme close-up of a chalked hand gripping a knurled barbell — veins, skin texture, shallow DOF, one warm highlight, black background. |
| 6 | `images/classes/boxing-class.webp` | Training card 03 | **4:5** | A boxer throwing a cross on a heavy bag under a hard red-tinted spotlight in a dark combat zone; sweat, motion, high contrast. |
| 7 | `images/classes/hiit-conditioning.webp` | Training card 04 | **4:5** | High-energy HIIT class mid-effort on assault bikes, smoky atmosphere, dramatic overhead spotlights, red ambient accent. |
| 8 | `images/classes/group-class.webp` | Classes band background | **16:9** | Wide cinematic view of a packed group conditioning class in a dark studio, synchronized movement, light beams through haze. Keep **mid negative space** for text. |
| 9 | `images/facilities/premium-gym-interior.webp` | Facilities full-width + final-CTA background | **16:9** | Sweeping wide shot of a luxurious modern dark gym interior: rows of matte-black racks, warm rim lighting, polished concrete, glass, premium kit. **No people.** Architectural editorial. |
| 10 | `images/facilities/equipment-detail.webp` | Detail accent (available) | **1:1** | Architectural close-up of premium matte-black dumbbells racked in order, subtle red accent stripe, dramatic raking light, deep shadow. |
| 11 | `images/recovery/recovery-sauna.webp` | Recovery split (subject toward one side) | **5:6** | Athlete relaxing in a low-lit premium Finnish sauna, warm wood, steam catching a single light beam; serene high-end spa aesthetic. |
| 12 | `images/recovery/cold-plunge.webp` | Recovery accent (available) | **4:5** | Athlete stepping into a modern cold-plunge in a dark sophisticated recovery room; cool blue tones with a subtle red environmental accent, cinematic reflection. |
| 13 | `images/trainers/coach-marcus.webp` | Trainer portrait | **4:5** | Editorial portrait, ~40s male head strength coach, arms folded, confident; dark gym backdrop, red rim light, shallow DOF. |
| 14 | `images/trainers/coach-elena.webp` | Trainer portrait | **4:5** | Editorial portrait, female performance coach, athletic, mid-laugh, athletic wear; cinematic side light, dark background. |
| 15 | `images/trainers/coach-dev.webp` | Trainer portrait | **4:5** | Editorial portrait, male boxing coach wrapping his hands, intense focus; shadowy combat gym, red spotlight accent. |
| 16 | `images/trainers/coach-sara.webp` | Trainer portrait | **4:5** | Editorial portrait, female mobility/recovery coach, calm warm expression; soft warm studio light, dark background. |
| 17 | `images/community/community-training.webp` | Community band background | **16:9** | Wide authentic shot of a diverse group of members training & encouraging each other, genuine emotion, warm light through haze. **Central negative space** for the headline. |
| 18 | `images/community/member-moment.webp` | Community accent (available) | **1:1** | Candid moment — two members fist-bumping after a hard set, real emotion, sweat, dark gym, subtle red accent. |

Items marked *(available)* are prepared paths/prompts for future use; they're documented
here so the campaign folder is complete, even though the current layout doesn't place them.

---

## Export tips
- **Format:** `.webp`, quality ~80–85 (great quality, small files).
- **Long edge:** hero/full-width ≈ **2400px**; cards/portraits ≈ **1200–1600px**; square details ≈ **1200px**.
- **Faces/hands:** review generations and regenerate any with anatomy artifacts.
- Keep every image within the **same grade** (blacks, contrast, red temperature) so the
  set looks like one shoot.

## Changing which file a background uses (optional)
Hero, the two bands and the final CTA use a CSS variable. To point one at a different
file, edit the matching `--photo` in `css/styles.css` (search for `--photo`):
`.hero`, `.band--classes`, `.band--community`, `.cta-final`.
