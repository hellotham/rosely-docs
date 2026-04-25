# Design System: Rosely

## 1. Visual Theme & Atmosphere
Rosely is a warm, serene, and contemporary design system rooted in the "Millennial Pink" aesthetic. It prioritizes a **low-contrast, eye-comfortable ambiance** that induces calmness and serenity. The system is designed to be mindful and reassuring, avoiding high-contrast fatigue while maintaining enough vibrancy to be playful and optimistic. It emphasizes clarity, simplicity, and elegance, creating a "serene beauty" that works well across both digital interfaces and physical design applications.

## 2. Color Palette & Roles
The Rosely palette consists of sixteen core colors divided into four functional sub-palettes, plus an extended ANSI terminal set.

### Greys (Neutrality & Foundation)
Used for backgrounds, text, and structural elements where neutral grounding is needed.
*   **Black Beauty (#27272a):** Primary dark background or deep text color.
*   **Granite Gray (#615f5f):** Secondary neutral for borders or muted text.
*   **Opal Gray (#a49e9e):** Soft neutral for secondary UI elements or placeholder text.
*   **Sugar Swizzle (#f4eee8):** Crisp, off-white for light backgrounds or high-contrast dark-mode text.

### Pinks (Gentle Romance & Warmth)
The soul of the system, tempering passion with purity.
*   **Morning Glory (#ec809e):** Vibrant highlight or action color.
*   **Rose Quartz (#f7caca):** The base color of Rosely; warm, gentle rose tone conveying composure.
*   **Barely Pink (#F8D7DD):** Soft background tint or secondary highlight.
*   **Heavenly Pink (#f4dede):** Ultra-soft background or subtle text accent.

### Purples (Depth & Harmony)
Used for accents, borders, and alternate backgrounds to complement the pinks.
*   **Grapeade (#85677b):** Dark accent for borders or strong typographic emphasis.
*   **Radiant Orchid (#b565a7):** Base accent color; a captivating harmony of fuchsia and pink.
*   **Lupine (#be9cc1):** Soft purple for secondary buttons or active states.
*   **Lavender Fog (#D2C4D6):** Muted lilac for background variations.

### Colourful (Positivity & Precision)
High-positivity colors used for functional highlighting (Success, Error, Info, Warning).
*   **Raspberry Sorbet (#d2386c):** Delectable red-pink for errors or critical alerts.
*   **Spearmint (#64bfa4):** Cool green for success states or fresh highlights.
*   **Aquarius (#3CADD4):** Periwinkle blue for links, information, or primary actions.
*   **Meadowlark (#eada4f):** Vibrant sunny yellow for warnings or cheerful accents.

## 3. Typography Rules
*   **Primary Font Family:** "Noto Sans", sans-serif. Chosen for its clean, modern, and highly readable character.
*   **Monospace Font Family:** "Noto Sans Mono", monospace. Used for technical data, code snippets, and terminal interfaces.
*   **Heading Weight:** 600 (Semi-bold). Used to establish clear hierarchy without being overly aggressive.
*   **Body Weight:** 400 (Regular).
*   **Scale:** Primarily follows Starlight's typographic scale, with an emphasis on readable line heights (1.5 for body, heading-specific heights for titles).

## 4. Component Stylings
*   **Cards/Containers:** 
    *   **Border:** 1px solid using `--sl-color-gray-5` (Opal Gray/Granite Gray range).
    *   **Roundness:** Subtly rounded corners (0.5rem / 8px).
    *   **Shadow:** Whisper-soft diffused shadows (`--sl-shadow-sm`).
    *   **Interaction:** On hover, background shifts to a softer grey (`--sl-color-gray-7`) and borders lighten for a "lifting" effect.
*   **Swatches/Buttons:**
    *   **Padding:** Generous (1.5rem) to maintain the airy, serene atmosphere.
    *   **Shape:** Square or slightly rounded, depending on context, keeping to the 0.5rem radius standard.

## 5. Layout Principles
*   **Serenity in Space:** Rosely favors generous whitespace to prevent "UI noise" and eye fatigue.
*   **Simplicity & Clarity:** Layouts should be intuitive, using the "Colourful" sub-palette sparingly to draw attention only where necessary.
*   **Flexibility:** Components use a grid or flexbox approach (e.g., `swatch-grid`) to ensure elegance across different screen sizes.
*   **Adaptive Contrast:** While low-contrast by design, the system maintains WCAG-conscious readability by shifting accent colors across light and dark themes.
