# chriswhalen.design — Visual Register v1.2

> **Status:** Advisory, not locked. This document is the starting point for type, color, spacing, motion, imagery, and component-level visual decisions across chriswhalen.design. When a rule fights Chris's brand, break it and surface the tradeoff. See `handoff-after-work.md` §3 for session-specific overrides.
>
> **How to use this file:** Read alongside the handoff doc. The handoff doc wins on any conflict — it reflects the most recent decisions.

---

## Center of gravity

**Stripe-grade editorial precision with Linear's discipline on color and motion.** Sans-only.

**Read goal:** A Head of Design candidate who thinks in sentences, ships at altitude, and has taste. The site reads like a digital editorial — long-form prose, restrained color, deliberate hierarchy, almost no motion.

**Explicit non-goals:**
- Not a Linear clone (the design leader category is saturated with these)
- Not Vercel brutalism (wrong altitude for design leadership)
- Not Apple product-hero treatment (no products to hero in that way)
- Not Dribbble-style portfolio
- Not Stripe's bright-color decorative system (different job, different audience)

---

## Typography

### Families

**Display:** Instrument Sans
- Google Fonts, free
- Weights used: 400, 500
- Self-host via `next/font/google` for performance

**Body:** Inter
- Google Fonts, free
- Weights used: 400, 500
- Self-host via `next/font/google`

**Two weights only.** No light, no bold beyond 500. Stripe and Linear discipline.

### Scale (desktop)

| Use | Family | Size | Line height | Weight | Tracking |
|---|---|---|---|---|---|
| Hero headline | Instrument Sans | 56px | 1.05 | 500 | -0.025em |
| Page H1 | Instrument Sans | 44px | 1.1 | 500 | -0.02em |
| Section H2 | Instrument Sans | 26px | 1.2 | 500 | -0.01em |
| Sub-section H3 | Instrument Sans | 18px | 1.4 | 500 | 0 |
| Pull moment | Instrument Sans | 32px | 1.25 | 400 | -0.015em |
| Body | Inter | 17px | 1.65 | 400 | 0 |
| Secondary / muted | Inter | 15px | 1.6 | 400 | 0 |
| Eyebrow / metadata | Inter | 13px | 1.4 | 500 | 0.06em (uppercase) |
| Nav / footer link | Inter | 15px | 1 | 400 | 0 |

### Scale (mobile)

Mobile breakpoint at `768px`. Apply 0.78x multiplier to display sizes (hero 56→44, H1 44→34, H2 26→20). Body stays at 17px on all viewports. Adjust line-heights up slightly (1.1→1.15 for hero, etc.) because tighter line-heights read worse at smaller sizes.

### Tracking rules

- Display headlines: negative tracking, gets tighter as size grows
- Body: zero tracking
- Eyebrow uppercase: +0.06em, always
- Never letter-space lowercase sans for "elegance" — it reads as 2014 hipster type

---

## Color

### Palette (locked)

```css
/* Ink */
--ink:        #1a1a1a;   /* primary text — not pure black */
--ink-2:      #4a4a4a;   /* secondary text */
--ink-3:      #767676;   /* tertiary, eyebrow, metadata */

/* Paper */
--paper:      #fafaf7;   /* page background — warm off-white */
--paper-2:    #f3f2ed;   /* surface elevation, very subtle */

/* Rules */
--rule:       #e6e4dd;   /* hairline borders */
--rule-2:     rgba(26, 26, 26, 0.08);   /* even fainter */

/* Accents */
--accent:     #b8472a;   /* burnt sienna — primary accent */
--accent-2:   #1d3a8a;   /* iron blue — single-moment accent */
```

### Accent placement (locked, exhaustive)

**Burnt sienna `--accent`** appears in exactly three places site-wide:
1. The `→` arrow on the home page `See the work` link
2. The `→` arrow on every next-step footer link
3. Hover state underline on next-step footer links (1px solid, offset 4px)

**Iron blue `--accent-2`** appears in exactly one place site-wide:
- The em-dash and name in the Seth Taylor testimonial attribution on Home (e.g., `— Seth Taylor, CXO, Angel`). All other testimonials site-wide (Austin Page on `/leadership`, and the in-case testimonials in Cases #2/#3/#4) use `--ink-3` for attribution — NOT iron blue. The blue is reserved for this one moment so it lands as a deliberate stamp.

**That is the entire color system.** Two colors, four placements. The rest of the site is monochrome on warm paper.

If implementation requires an additional color at any point (link hover that isn't a footer, focus state, error state, etc.), it must be solved within the ink/paper/rule range, not by introducing a third hue.

### Why no pure white, no pure black

- Pure white (`#ffffff`) reads as default-template. Warm off-white (`#fafaf7`) signals deliberate paper-stock choice.
- Pure black (`#000000`) is too contrasty for long-form prose. `#1a1a1a` reads as confident ink without crushing.

### Dark mode

**No dark mode at launch.** Adding it doubles the design surface area and dilutes the warm-paper editorial choice. Revisit post-launch only if recruiter feedback specifically requests it.

---

## Spacing and rhythm

### Scale

```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   24px;
--space-6:   32px;
--space-7:   48px;
--space-8:   64px;
--space-9:   96px;
--space-10:  128px;
--space-11:  192px;
```

### Application

**Vertical rhythm between major sections (desktop):** `--space-10` (128px)
**Vertical rhythm between major sections (mobile):** `--space-8` (64px)
**Paragraph spacing:** `--space-5` (24px)
**Heading-to-body spacing:** `--space-4` (16px)
**Between operating principles / named practices:** `--space-7` (48px)

### Container widths

| Container | Max width | Used for |
|---|---|---|
| Prose | 680px | Body paragraphs, case study text |
| Wide | 880px | Hero images, pull moments, principles/practices treatment, testimonial pulls |
| Page | 1200px | Nav, footer, case index, hero blocks |

All centered. The page never sprawls full-width.

### Page padding

| Viewport | Horizontal | Vertical (top of page to first content) |
|---|---|---|
| Desktop ≥1024px | 48px | 64px below nav |
| Tablet 768–1023px | 32px | 48px below nav |
| Mobile <768px | 24px | 32px below nav |

---

## Motion

**Almost none.** Four motion patterns total. No others may be added without a register decision.

1. **Page load:** 200ms opacity fade-in on initial paint. No slides, no curtains, no staggered children. Use `view-transition-name` if Next.js view transitions are enabled; otherwise a single root-level CSS transition.

2. **Link hover:** opacity transition `120ms ease`. Underlines appear instantly on hover (no transition on `text-decoration`).

3. **Next-step footer arrow:** the `→` translates `4px` right on hover, `200ms cubic-bezier(0.2, 0, 0, 1)`.

4. **Case index row hover (Layout A):** hero image `scale(1.015)` over `300ms cubic-bezier(0.16, 1, 0.3, 1)` (spring easing). Title gains underline on hover. Added during `/work` session — Chris approved Layout A with this motion.

**Explicitly forbidden:**
- Scroll-triggered fade-ins
- Parallax
- Stagger animations on lists
- Skeleton loaders for static content
- Decorative loops (rotating words, animated underlines, etc.)
- Cursor effects

**Why:** Recruiters scan fast. Animation slows them down and reads as "designer trying." Static-in-an-intentional-way is what Stripe / Linear / Vercel feel like at register.

**Re-open this only if:** the site reads stale after two weeks of live use. Static-from-restraint and static-from-laziness are different things; the difference is felt, not seen. If it feels static-from-laziness, we add motion deliberately, one pattern at a time.

---

## Imagery

### Treatment (locked)

Every photographic asset on the site receives the same grade in post:

- **Shadow tone:** slight burnt-sienna lift in blacks, ~5% saturation
- **Highlight tone:** slight cyan in brights, ~5% saturation
- **Desaturation:** ~15-20% from raw
- **Grain:** 2-3% intensity, web-appropriate
- **Vignette:** 8-12%, soft
- **Aspect ratio:** 16:9
- **Resolution:** 1600×900 minimum; 2400×1350 recommended for retina

This grade is the through-line. It is what makes a screenshot of a Figma file, an iPhone photo of a workspace, and an art-direct landscape shot feel like four chapters of the same book.

### Subject matter — case heroes

| Case | Subject |
|---|---|
| #1 Communication is King | Atmospheric (quiet competence — TBD per case session) |
| #2 Pay It Forward | DAVID bespoke page on real device, ambient environment |
| #3 The Perfect Storm | Homestead giveaway page or prize composition, late-autumn light |
| #4 The Discipline of Calling It | Historik app on iPhone, ideally at a real historical marker |

Specific shot lists per case are decided during each case page conversation, not here.

### Asset pipeline (locked)

**Option 3 hybrid:**
- Shoot what can be shot (workspace, landscape, real environments) on existing phone/camera
- AI-generate (Midjourney v6 or Flux Pro) what cannot be shot, curate selectively
- Composite product surfaces (DAVID page, Historik app) from existing Figma files
- All assets receive the same grade

### Forbidden

- Clean Figma exports as hero images
- Generic stock photography
- Anything with a watermark
- Product marketing illustrations
- Decorative SVGs as hero treatment

---

## Components — visual specs

These are visual specifications only. Behavior and structure live in the page-specific build docs.

### Nav bar

- Sticky top, full-width background `--paper`
- Hairline `--rule` underneath
- Height: 64px
- Page-width container (1200px max)
- Wordmark left: `Chris Whalen` in Instrument Sans, 18px, weight 500, `--ink`
- Nav links right: `Work · Leadership · Writing · Contact` in Inter, 15px, weight 400, `--ink-2`
- Dot separators between nav items: `·` in `--ink-3`, 8px horizontal padding
- Active page link: weight 500, `--ink` (no color, no underline)
- Hover state on nav links: `--ink` (move from `--ink-2` to `--ink`), 120ms

### Next-step footer

- Left-aligned at prose column (680px)
- Single line, no card, no surrounding box
- Padding-top: `--space-7` (48px)
- Hairline `--rule` above, full prose-column width
- Pattern: `→ [Specific label]`
  - Arrow: `--accent` (burnt sienna), Inter 16px
  - Label: `--ink`, Inter 16px, weight 400
  - Gap between arrow and label: 8px
- Hover:
  - Arrow translates 4px right (200ms cubic-bezier)
  - Label gains 1px solid `--accent` underline, offset 4px

### Pull moment ("proudest of" treatment)

- Wide column (880px)
- Set off above and below with `--space-8` (64px) vertical space
- Hairline `--rule` above and below at half-spacing (32px from text)
- Type: Instrument Sans, 32px, weight 400, tracking -0.015em
- Color: `--ink`
- Left-aligned (not centered — centering reads precious)

### Operating principle (on `/leadership`)

- Prose column (680px)
- Name: Instrument Sans, 22px, weight 500, `--ink`
- Body explanation: Inter, 17px, weight 400, line-height 1.65, `--ink-2`
- Spacing between name and body: `--space-3` (12px)
- Spacing between principles: `--space-7` (48px) with hairline `--rule` separator at half-spacing
- No numbering, no eyebrow, no icon

### Named practice (on `/leadership`)

**Must read visually distinct from operating principles** — different kind of content.

- Prose column (680px)
- Eyebrow above name: Inter, 13px, weight 500, uppercase, tracking 0.06em, `--ink-3`
  - Example: `PRACTICE 01`
- Name: Instrument Sans, 22px, weight 500, `--ink`
- Body explanation: Inter, 17px, weight 400, line-height 1.65, `--ink-2`
- Spacing between practices: `--space-7` (48px), no rule separator (the eyebrow does the separating)

**The visual difference at a glance:**
- Principles: name → body, separated by rules. Reads as essays.
- Practices: eyebrow → name → body, no rules. Reads as a catalog of mechanics.

### Case index row (on `/work`)

- Page column (1200px)
- Two-column layout desktop: hero image 50%, text 50%, `--space-7` (48px) gap
- Stacks on mobile: hero above text, full-width
- Hero image: 16:9 aspect ratio, max-width 560px on desktop
- Eyebrow above title: Inter, 13px, weight 500, uppercase, tracking 0.06em, `--ink-3`
  - Example: `ANGEL · 2023–PRESENT` (no "CASE 0X" prefix — dropped during `/work` session)
- Title: Instrument Sans, 32px, weight 500, `--ink`
- Teaser: Inter, 17px, weight 400, line-height 1.65, `--ink-2`, max 2 lines
- Spacing between rows: `--space-10` (128px) desktop, `--space-8` (64px) mobile
- Entire row is the click target (link wraps both columns)
- No "Read more" affordance — the row's hover treatment is enough
- Hover: hero image gets 1.5% scale-up (200ms), title gains 1px solid `--ink` underline at 4px offset

### Testimonial (in-case and on standalone pages)

A single testimonial, set apart from surrounding prose. Used inside cases (#2, #3, #4) and on Home (Seth Taylor) and `/leadership` (Austin Page).

- Wide column (880px) — wider than the prose it interrupts, so it reads as a deliberate set-apart moment
- Vertical space above and below: `--space-9` (96px) desktop, `--space-8` (64px) mobile
- No card, no quotation-mark glyph, no avatar photo. Editorial, not testimonial-widget.
- Quote text: Instrument Sans, 28px, weight 400, line-height 1.3, tracking -0.01em, `--ink`
- Attribution line below quote: Inter, 15px, weight 400, `--ink-3`, margin-top `--space-4` (16px)
  - Format: `— Name, Role, Company` (e.g., `— Seth Taylor, CXO, Angel`)
- **Accent rule:** on the Home page Seth Taylor testimonial ONLY, the attribution em-dash and name render in `--accent-2` (iron blue). This is the single iron-blue moment on the entire site (per Color §Accent placement). In-case testimonials and the Austin Page testimonial use `--ink-3` for the full attribution — no iron blue.
- Hairline `--rule` is NOT used around testimonials — the generous vertical space does the separating. (Contrast with the pull moment, which uses rules. Testimonials use space; pull moments use rules. This keeps the two set-apart treatments visually distinct.)

**Empty/pending state:** testimonial quotes are collected after the site is ~80% built (Phase 4 decision). The component must render nothing (no slot, no placeholder, no empty space) when no quote is present, and appear cleanly once a quote is supplied. Do not hardcode placeholder quotes. See case template doc §Testimonials.

### Body links (inline within prose)

- Color: `--ink` (same as body)
- Underline: 1px solid `--rule-2`, offset 3px
- Hover: underline becomes `--ink` (no color shift), 120ms transition on underline color only

---

## Patterns added during build sessions

These were not in the original register but were approved by Chris during implementation.

### Title Case rule (site-wide)

All titles and subtitles use standard Title Case. Articles, conjunctions, short prepositions (a, an, the, of, in, on, at, to, by, for) stay lowercase unless first or last word. Body prose stays sentence case.

### `paper-2` background bands

Full-width `--paper-2` background bands are used to set apart specific content sections. Used on:
- **Home:** wraps the Seth Taylor testimonial
- **Leadership:** wraps the "Designing with AI in the Room" section

This is a separation tool — use it for moments where generous vertical space alone isn't enough to signal "different kind of content." Don't overuse; two instances across the entire site is the current ceiling.

### Content column widths (as built)

| Context | Width | Rationale |
|---|---|---|
| Case study prose | 680px | Reading comfort (~65–75 chars/line) |
| All other page content | 880px | Wider column for non-prose content (principles, practices, signal beats, writing index) |
| Hero images, case index | 1200px (page column) | Full-width within container |
| Testimonials, pull moments | 880px | Wider than prose to read as set-apart |

**Rule:** all content within a section flows at the same width. Don't narrow body prose below a wider heading within the same section — it reads as accidental indentation.

### Testimonial vertical padding

Testimonials use `sp-10` (128px) mobile / `sp-11` (192px) desktop — more generous than originally specified. The extra space makes them feel like deliberate set-apart moments.

---

## What's deliberately absent

To be explicit, because absences create the register as much as presences:

- **No drop shadows.** Anywhere.
- **No gradients.** Anywhere.
- **No rounded corners on cards or images.** Hairlines only. Rounded corners read SaaS marketing template.
- **No icons in body content.** Icons read as product UI; this is editorial.
- **No badges, pills, tags.**
- **No buttons site-wide except possibly one on `/contact`** (mailto link, even there ideally styled as a link not a button).
- **No background patterns, noise textures, decorative SVGs.**
- **No emoji.**
- **No "above the fold" engagement bait** — no CTAs, no email capture, no scheduled-call link.
- **No skeleton loaders.** The site is static; pages either load or they don't.
- **No light/dark toggle UI** (we have no dark mode).
- **No "back to top" buttons.**

---

## Implementation notes for Cursor / Claude Code

### Stack confirmation

- Next.js (latest stable, App Router)
- Tailwind CSS for utility styling
- `next/font/google` for Instrument Sans and Inter, both self-hosted via Next's font system
- Vercel deployment
- No CMS

### Tailwind config — required tokens

The color, spacing, and typography values above need to be encoded as Tailwind theme tokens, not class-by-class arbitrary values. The instinct to write `text-[#1a1a1a]` everywhere is wrong; it makes the system fragile. Use `text-ink`, `bg-paper`, `space-y-8` (where 8 maps to `--space-8`), etc.

### Font loading

```ts
// app/layout.tsx
import { Instrument_Sans, Inter } from "next/font/google";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});
```

Then map `font-display` and `font-body` in Tailwind config to `var(--font-display)` and `var(--font-body)`.

### One thing to verify before writing CSS

Instrument Sans uses different optical metrics than Inter. Test the pairing at the actual sizes in the type scale before committing — particularly the H3 (Instrument Sans 18px) sitting next to body Inter 17px. If the height/weight difference reads jarring, adjust H3 weight or size first, not the families.

---

## What lives in this doc vs. elsewhere

**Here:** type, color, spacing, motion, imagery treatment, component visuals.

**Elsewhere (other build docs to come):**
- `02-case-template.md` — structure and content blocks for case pages
- `03-page-leadership.md` — content blocks for `/leadership`
- `04-page-home.md` — content blocks for `/`
- `05-page-contact.md` — content blocks for `/contact`
- `06-page-writing.md` — content blocks for `/writing`
- `07-build-order.md` — Cursor implementation sequence
