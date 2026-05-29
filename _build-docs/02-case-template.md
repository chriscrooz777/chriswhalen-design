# chriswhalen.design — Case Template v1.1

> **Status:** Locked. This is the build spec for the `/work` case study pages. All four cases render through this single template.
>
> **Reads alongside:** `01-visual-register.md` (type, color, spacing, components). This doc assumes those tokens exist. It does not redefine them.
>
> **Visual reference:** `case1-layout-reference.html` — a static render of the approved case layout (the "Nine sections" treatment). Open it to see the intended result: spacing rhythm, type hierarchy, hero treatment, next-step footer. It is throwaway inline-styled HTML and must NOT be ported directly. Build clean Next.js components per this spec.
>
> **For Claude Code:** Your job is to implement this exactly. Do not make structural, content, or positioning decisions. If something here is ambiguous or appears to conflict with the case source files, stop and surface the question rather than guessing.

---

## 1. Decision record (what's locked and why)

| Decision | Locked value | Rationale |
|---|---|---|
| Section render | All sections render as strong `<h2>` headings | Chris reviewed three candidate layouts and chose this one. Clear, defined, each section owns its space. |
| Section model | Flexible-ordered: shared core sections + optional per-case sections | All four cases share 9 core sections; Case #1 inserts a 10th. Template must handle variable section count in defined order. |
| Prose length | Full source text, uncondensed | The approved layout uses complete case text. Do not summarize or trim. |
| Hero | Single graded 16:9 image per case, atmospheric/product hybrid | Per visual register §Imagery. |
| Next-step footer | Single quiet link, following scope-led sequence | Per visual register §Components. Case #4 routes to `/leadership` (Q3). |
| Testimonials | In-case testimonial slot, fixed position after Outcomes; present in #2/#3/#4, absent in #1 | Phase 4 roster (Q5). Quotes pending collection — slot renders empty until supplied. |
| Section navigation | Pure linear scroll, no TOC, no progress bar, no jump links | Phase 4 fast-scan register (Q4). The nine H2s are the navigation. |
| Slugs | Title-based (Q1) | See §2. |
| Mobile nav | Hamburger menu, full site access from any viewport | Chris's call (Q2): lowest cognitive load, universal access for all user types. |

---

## 2. Case sequence (locked, from Phase 4)

The `/work` index and the next-step footers follow **scope-led order**, not chronological:

1. Case #1 — Communication is King (`communication-is-king`)
2. Case #3 — The Perfect Storm (`the-perfect-storm`)
3. Case #2 — Pay It Forward (`pay-it-forward`)
4. Case #4 — The Discipline of Calling It (`the-discipline-of-calling-it`)

Next-step footer wiring:
- Case #1 → "The Perfect Storm" (`/work/the-perfect-storm`)
- Case #3 → "Pay It Forward" (`/work/pay-it-forward`)
- Case #2 → "The Discipline of Calling It" (`/work/the-discipline-of-calling-it`)
- Case #4 → **`/leadership`** (Q3 resolved). Case #4 is last in the work sequence and hands the reader forward into the site's read path rather than looping back to the index. Label: "How I lead" (confirm exact label with Chris; it should read as a forward step, not "back to work").

> NOTE: the slugs above are derived from titles. Confirm final slugs with Chris before wiring routes. The *display order* is locked; the URL strings are a naming convention that can still change.

---

## 3. Content model

Each case is authored as structured content (MDX or a typed data object — see §7 implementation). The shape:

```
case:
  slug:            string        # URL segment, e.g. "communication-is-king"
  order:           number        # position in the scope-led sequence (1-4)
  eyebrow:         string        # e.g. "Case 01 · Angel · 2023–Present"
  title:           string        # e.g. "Communication is King"
  subtitle:        string        # the line under the title (unique per case)
  role:            string        # e.g. "Lead Product Designer · July 2023 – Present"
  hero:
    src:           string        # path to graded 16:9 image
    alt:           string        # descriptive alt text
    treatment:     "atmospheric" | "product"   # for Chris's reference; no visual effect
  sections:        Section[]     # ordered array — see below
  testimonial:     Testimonial | null   # optional; rendered at fixed position (see §4a)
  nextStep:
    label:         string        # e.g. "Pay It Forward"
    href:          string        # e.g. "/work/the-perfect-storm"

Section:
  heading:         string        # the H2 text, e.g. "Business Challenge"
  blocks:          Block[]       # ordered content blocks

Block:
  type:            "paragraph" | "lead" | "subhead" | "emphasis-list"
  content:         string | string[]   # see block types below

Testimonial:
  quote:           string | null   # null until collected — see §4a empty state
  name:            string        # e.g. "Brett Crockett"
  role:            string        # e.g. "Filmmaker, Homestead"
  company:         string | null # optional
```

### Block types

| type | renders as | used for |
|---|---|---|
| `paragraph` | standard body `<p>`, 17px Inter | default prose |
| `lead` | larger lead `<p>`, 20px (optional, used on opening paragraph of Executive Summary only) | the first paragraph of the piece, if desired |
| `subhead` | Instrument Sans 18px/500 inline sub-heading | the named items inside Case #1's "Operating Model" (Hiring, Onboarding, 1:1s, etc.) |
| `emphasis-list` | sequence of `<p>` each opening with a `<strong>` lead phrase | the Outcomes section, where each item starts with a bolded phrase then explanation |

> The `emphasis-list` is NOT a bulleted list. It's a series of paragraphs, each beginning with a `<strong>` phrase. See the Outcomes section in the visual reference. No bullets, no list markers.

---

## 4. Section structure across the four cases

All four cases share these nine **core sections in this order**:

1. Executive Summary
2. Business Challenge
3. Organizational Challenge
4. Leadership Role
5. Strategy
6. Cross-Functional Alignment
7. Decision-Making
8. Outcomes
9. Lessons Learned

**Per-case insertions:**
- Case #1 inserts **"The Team's Operating Model"** between Cross-Functional Alignment (6) and Decision-Making (7).

The template must NOT hardcode nine sections. It iterates over the `sections[]` array in authored order and renders an `<h2>` + blocks for each. This is what makes Case #1's extra section "just work" and lets any future case insert or rename sections without a template change.

---

## 4a. Testimonials (in-case)

### Position (locked)

When a case has a testimonial, it renders at a **fixed structural position: immediately after the Outcomes section and before Lessons Learned.**

Rationale: Outcomes states results in Chris's voice. The testimonial is third-party corroboration of exactly those results, landing at the moment of peak reader skepticism ("is this real?"). Lessons Learned then closes in Chris's voice. Verify, then reflect. This rhythm is identical across all three cases that carry a testimonial, which is why position is fixed rather than authored inline.

Implementation: the `CaseLayout` renders the testimonial component between the Outcomes section and Lessons Learned section if `case.testimonial` is present and `case.testimonial.quote` is non-null. It does NOT live inside the `sections[]` array — it's a distinct slot the layout places by finding the Outcomes/Lessons boundary, OR (simpler) the content model can mark which section the testimonial follows. Recommended: place by convention (after the section titled "Outcomes"); if a case has no "Outcomes" section, fall back to rendering just before the next-step footer.

### Roster (locked, from Phase 4)

| Case | Testimonial author | Status |
|---|---|---|
| #1 Communication is King | — none — | Case #1 stands on the work alone; no testimonial. |
| #3 The Perfect Storm | Brett Crockett, Filmmaker, Homestead | Primary |
| #2 Pay It Forward | Director of Product, Theatrical/Crowdfunding, Angel | Primary (name TBD — may be anonymized by title) |
| #4 The Discipline of Calling It | Jake Jones, Co-founder/CTO, Historik | **Conditional** — include only if the collected quote materially strengthens the case. Build the slot; leave empty if the quote doesn't earn its place. |

Note the deliberate pattern: Case #1 (first, "can he run a function") carries no testimonial — it earns trust on the work itself. Cases #3, #2, #4 each add external corroboration. This escalation is intentional; do not "fix" it by adding a testimonial to Case #1.

### Empty/pending state (critical)

**The testimonial quotes do not exist yet.** Per Phase 4, they're collected after the site is ~80% built. The template must:
- Render the case cleanly with NO testimonial output when `quote` is null (no empty slot, no placeholder text, no reserved blank space, no "testimonial coming soon").
- Accept a real quote later with zero structural change — drop the quote into the content model, the component appears in its fixed position.
- Never ship hardcoded placeholder quotes, even in development. Use `null` and conditional render.

Visual spec for the testimonial component is in `01-visual-register.md` §Components → Testimonial. In-case testimonials use `--ink-3` attribution (NOT iron blue; the single iron-blue moment is reserved for Seth Taylor on Home).

---

## 5. Page layout (top to bottom)

All within the standard page chrome (nav + footer from the global layout).

```
┌─ NAV (global component, sticky) ─────────────────┐

┌─ HERO ── wide column (880px) ────────────────────┐
│  eyebrow                                          │
│  title (h1, Instrument Sans 52px)                 │
│  subtitle (Instrument Sans 24px, --ink-2)         │
│  role line (15px, --ink-3)                        │
│  hero image (16:9, graded, square corners)        │
└───────────────────────────────────────────────────┘

┌─ BODY ── prose column (680px) ───────────────────┐
│  for each section in sections[]:                  │
│    <h2> heading                                   │
│    rendered blocks                                │
│                                                   │
│  [after "Outcomes" section, if testimonial:]      │
│    ┌─ TESTIMONIAL ── wide column (880px) ──┐      │
│    │  quote (Instrument Sans 28px)          │      │
│    │  — attribution (--ink-3)               │      │
│    └─────────────────────────────────────────┘      │
│                                                   │
│  [remaining sections, e.g. "Lessons Learned"]     │
└───────────────────────────────────────────────────┘

┌─ NEXT-STEP FOOTER ── prose column (680px) ───────┐
│  hairline rule above                              │
│  → [next case label]                              │
└───────────────────────────────────────────────────┘
```

### Spacing specifics (from visual register)
- Hero top padding: 80px desktop / 32px mobile (below nav)
- Hero image margin-top: 48px
- Body starts: ~56px below hero image
- `<h2>` margin: 56px top, 20px bottom
- Paragraph spacing: 24px
- `subhead` block: 8px bottom margin, ~32px top margin when following a paragraph
- Next-step footer: 48px top padding, 96px bottom padding

### Type (from visual register, restated for convenience)
- Hero h1: Instrument Sans, 52px, weight 500, line-height 1.06, tracking -0.025em
- Hero subtitle: Instrument Sans, 24px, weight 400, line-height 1.25, --ink-2
- Section h2: Instrument Sans, 26px, weight 500, line-height 1.2, tracking -0.01em
- subhead: Instrument Sans, 18px, weight 500
- body p: Inter, 17px, weight 400, line-height 1.65
- lead p: Inter, 20px, weight 400, line-height 1.55
- eyebrow: Inter, 13px, weight 500, uppercase, tracking 0.06em, --ink-3

---

## 6. Responsive behavior (768px breakpoint)

| Element | Desktop (≥768px) | Mobile (<768px) |
|---|---|---|
| Hero h1 | 52px | 36px |
| Hero subtitle | 24px | 20px |
| Section h2 | 26px | 22px |
| Body | 17px | 17px (unchanged) |
| Page padding | 48px (24px in the reference) | 24px |
| Hero top padding | 80px | 32px |
| Nav links | visible | hidden or hamburger — see open question Q2 |

Prose column (680px) and wide column (880px) both become full-width-minus-padding below their max.

---

## 7. Implementation guidance for Claude Code

### Recommended approach: MDX per case
- One `.mdx` file per case in `content/work/` (or `app/work/[slug]/`).
- Frontmatter carries the metadata (slug, order, eyebrow, title, subtitle, role, hero, nextStep).
- Body carries the sections as MDX, with custom components for the non-standard blocks (`<Subhead>`, `<Lead>`, `<EmphasisList>`).
- A single `CaseLayout` component reads frontmatter, renders hero + chrome, and slots the MDX body into the prose column.

This keeps the prose human-editable (Chris can tweak copy without touching components) while the layout stays locked in one place.

### Alternative: typed data objects
If MDX adds friction, author each case as a typed TS object matching the §3 content model, and map over `sections[]` in the `CaseLayout` component. More rigid, less pleasant to edit prose, but simpler tooling. Chris's preference is editable prose, so MDX is preferred unless there's a strong reason against.

### Components to build
- `CaseLayout` — the page shell (hero + body slot + next-step footer)
- `CaseHero` — eyebrow, title, subtitle, role, image
- `NextStep` — the quiet footer link (reused across all pages site-wide, so build it in the shared component set, not case-specific)
- `Testimonial` — the set-apart quote + attribution block (reused on Home and `/leadership` too; build in shared set). Renders nothing when `quote` is null.
- `Subhead`, `Lead`, `EmphasisList` — MDX block components
- Section rendering: plain `<h2>` + children; no dedicated component needed unless MDX requires it

### Do NOT
- Do not port the inline styles from `case1-layout-reference.html`. Use the Tailwind token system from the visual register.
- Do not add the burnt-sienna annotation chips — those were a review aid, not part of the site.
- Do not condense or rewrite any case prose. The source text in the case context files is final.
- Do not introduce section components that hardcode the nine standard headings.
- Do not add scroll animations, reading-progress bars, or section anchors/jump-links (Q4 locked: pure scroll).
- Do not hardcode placeholder testimonial quotes. Use `null` and conditional render; the slot stays invisible until a real quote is supplied (§4a).
- Do not add a testimonial to Case #1, or render iron-blue attribution on in-case testimonials (that accent is reserved for Seth Taylor on Home).

---

## 8. Resolved decisions (formerly open questions)

All resolved with Chris. Recorded here so the rationale travels with the spec.

- **Q1 — Slugs (locked):** `communication-is-king`, `the-perfect-storm`, `pay-it-forward`, `the-discipline-of-calling-it`. Title-based, honest, SEO-irrelevant at this site size.
- **Q2 — Mobile nav (locked):** Hamburger menu giving access to all pages from any viewport. Chris's call — prioritizes universal access and lowest cognitive load over chrome minimalism. Build with proper open/close state, overlay, focus management, and Escape-to-close. This is the one piece of interactive chrome on the site; build it well.
- **Q3 — Case #4 next-step (locked):** Routes forward to `/leadership`, not back to `/work`. Keeps the site read path moving. Label reads as a forward step ("How I lead" or similar — confirm exact wording).
- **Q4 — Section navigation (locked):** Pure linear scroll. No TOC, no reading-progress bar, no jump links, no section anchors. The nine H2s are the navigation. Matches Phase 4 fast-scan register. (If Case #1's length proves punishing once live, the lightest possible add is desktop-only right-margin section dots — but ship without, add only if proven necessary.)
- **Q5 — Testimonials (locked):** In-case testimonials in #2/#3/#4 per Phase 4 roster, at fixed position after Outcomes. See §4a. Quotes pending collection; slot renders empty until supplied. (This corrected an earlier draft that wrongly proposed no in-case testimonials.)

## 8a. Genuinely open (needs Chris during build)

- **Case #4 testimonial inclusion:** Jake Jones quote is conditional on materially strengthening the case. Cannot decide until the quote is collected. Build the slot; Chris decides at quote-collection time.
- **Case #2 testimonial attribution:** "Director of Product, Theatrical/Crowdfunding" — confirm whether this person is named or referred to by title only. Affects the attribution line.
- **Exact next-step labels:** the forward-step wording for each footer (esp. Case #4 → `/leadership`).

---

## 9. Handoff package contents

When porting to Claude Code, provide all of:
1. `01-visual-register.md` — tokens and components
2. `02-case-template.md` — this doc
3. `case1-layout-reference.html` — static visual reference of the approved layout
4. The four case context files (`chriswhalen-case-N-context.md`) — source prose
5. The Phase 4 spec — overall site IA and read-path context

Claude Code should read all five before writing code.
