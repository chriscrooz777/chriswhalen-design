# Handoff — after all pages built

> **For the next Claude Code session.** Read this AFTER `00-START-HERE.md` and the original build docs. This doc captures the state of the repo and the decisions made in conversation that don't yet live in the original build docs. If anything here conflicts with an earlier doc, **this doc wins** (it's the most recent).

---

## 1. What's built and shipped

All five pages are built and pushed to GitHub.

| Page | Status |
|---|---|
| `/` (home) | ✅ Live. Single-screen hero, 2x2 signal beats, Seth Taylor testimonial (placeholder quote) in paper-2 band with iron-blue accent. No next-step footer — testimonial is the ending. |
| `/work` (index) | ✅ Live. Layout A (Featured + Alternating Stack). |
| `/work/communication-is-king` (Case #1) | ✅ Live. Verbatim case prose, no testimonial, hero placeholder. |
| `/work/the-perfect-storm` (Case #3) | ✅ Live. Hero image wired. Testimonial slot wired (Brett Crockett, quote: null). |
| `/work/pay-it-forward` (Case #2) | ✅ Live. Hero image wired. Testimonial slot wired (David Crapo, quote: null). |
| `/work/the-discipline-of-calling-it` (Case #4) | ✅ Live. Hero image wired. Testimonial slot wired (Jake Jones, quote: null). |
| `/leadership` | ✅ Live. Executive narrative with lead paragraph at 880px, two-column principles, paper-2 AI section, 2x2 practices grid, Austin Page testimonial (quote: null). |
| `/writing` | ✅ Live. Index only — two topic groups, five pieces with descriptions. Individual `/writing/[slug]` routes not yet built (need essay content). |
| `/contact` | ✅ Live. Email, résumé PDF link, LinkedIn. Terminal page, no next-step footer. |

Repo: [github.com/chriscrooz777/chriswhalen-design](https://github.com/chriscrooz777/chriswhalen-design). Local `main` tracks `origin/main`.

---

## 2. Stack and architecture

Locked during this session. Don't re-derive.

- **Next.js 16** (App Router, Turbopack), TypeScript, React 19
- **Tailwind CSS v4** — tokens defined as CSS custom properties in `app/globals.css` + `@theme inline` block. No `tailwind.config.js`.
- **Fonts:** `Instrument_Sans` (display) + `Inter` (body) via `next/font/google`. Weights `["400", "500"]` only.
- **MDX:** `next-mdx-remote/rsc` + `gray-matter` for frontmatter parsing
- **Package manager:** npm (not pnpm — pnpm wasn't installed on the system at scaffold time)
- **Deployment:** Vercel (not configured yet)

---

## 3. Decisions made in this session (overrides / deviations)

### 3a. The visual register is **advisory, not locked**

The original `01-visual-register.md` was treated as locked. During this session, Chris explicitly reframed it: *"the locked constraints are a set of rules to start with but should be altered based as we work on this together."*

**Going forward:** treat `01-visual-register.md` as a starting point. When a rule fights Chris's brand, break it and surface the tradeoff — don't enforce dogmatically. When we settle on something new, the register doc itself should be updated to reflect the change (this is a TODO, see §8).

### 3b. Eyebrow simplification

- **Original spec:** `CASE 01 · ANGEL · 2023–PRESENT`
- **Current:** `ANGEL · 2023–PRESENT` (no "CASE 0X" prefix)

The "CASE 0X" labeling was dropped because it read as portfolio-templated. Eyebrows now read as `Company · Date Range`. Applied on both case pages and `/work` index rows.

### 3c. Title Case rule — **site-wide**

All titles and subtitles use standard Title Case. Examples of this rule applied:

- "Communication is King" → "Communication Is King" (is = verb, capitalizes)
- "Building the design function at Angel" → "Building the Design Function at Angel"
- "Selected work" → "Selected Work"
- "How I lead" → "How I Lead"
- Articles, conjunctions, short prepositions (a, an, the, of, in, on, at, to, by, for) stay lowercase unless they're the first or last word

**Apply to:** all page titles, case titles, case subtitles, section headings used as page-level titles, next-step footer labels.

**Don't apply to:** body prose, paragraph copy, sentence-case running text. Case study body content stays verbatim as authored.

### 3d. Mobile spacing tightened

The original spec called for the same vertical rhythm on mobile and desktop. We tightened mobile:

- `CaseHero` top padding: 32px mobile (was 80px), 80px desktop unchanged
- `CaseHero` bottom padding: 8px mobile (was 56px), 56px desktop unchanged
- H2 top margin: 40px mobile (was 56px), 56px desktop unchanged
- Hero image top margin: 32px mobile (was 48px), 48px desktop unchanged
- Nav padding: matched to content (24px mobile, 48px desktop)

Total mobile space between hero image and first H2: 48px (was ~112px).

### 3e. Two-line role support added to `CaseHero`

Cases #2 and #4 have concurrent roles (e.g., "Concurrent with: Lead Product Designer, Angel"). The hero supports an optional `roleSecondary` field below the primary role. Both render in `text-ink-3` at 15px.

### 3f. Hover state on case rows (Layout A)

`group-hover:scale-[1.015]` on hero images. `group-hover:underline` with `decoration-ink` at offset-4/decoration-1 on titles. Spring easing `cubic-bezier(0.16, 1, 0.3, 1)` over 300ms. This adds a fourth motion pattern beyond the three the register originally specified — kept because Chris approved Layout A.

### 3g. Outcomes section formatting differs by source

- **Case #1 Outcomes:** bold lead phrases (`**Six senior product designers** shipping…`) — rendered via `<EmphasisList>` wrapper.
- **Cases #3, #2, #4 Outcomes:** arrow-prefixed lines (`→ $6.5M in revenue…`) — rendered as plain paragraphs each starting with the → character. Verbatim from source prose.

This is intentional — the source text differs and we kept it verbatim. If you want a unified visual treatment across all four, that's a content+structural decision Chris should approve before changing.

### 3h. `/work` index design — Layout A is locked

Chris reviewed three variant layouts (Featured + Alternating, Image-First, Minimal Refinement) via a live variant switcher and chose **Layout A: Featured + Alternating Stack**. The switcher and unused variants have been deleted; only `CaseIndex.tsx` remains.

The design rationale:
- Case #1 ("Communication Is King") is the scope-led opener — it gets the "cover story" treatment: full-width hero image, title at 44px (52px desktop), teaser at 20px.
- Cases #3/#2/#4 stack below as side-by-side rows. Image position alternates L/R/L.
- Hairline `--rule` between each stacked row.

Inspired by Stripe's blog asymmetric hierarchy, adapted to the "vertical list" constraint from Phase 4 spec.

### 3i. Intro line on `/work` — removed

Chris rejected multiple proposed intro lines. The page now opens with just `Selected Work` h1 and goes directly into the featured case. No supplementary copy.

### 3j. Pages session — layout and spacing decisions

Decisions made during the session that built `/`, `/leadership`, `/writing`, `/contact`:

- **880px is the primary content column** for non-case pages. Leadership, writing, home, and contact all use 880px. Case study prose stays at 680px for reading comfort (~65–75 chars/line).
- **`paper-2` background bands** are used as section separators: on Home (wraps Seth Taylor testimonial) and on Leadership (wraps "Designing with AI in the Room" section). This is a new visual pattern.
- **Leadership page is not a flat scroll.** It uses width variation (880px lead paragraph → 880px two-column principles → full-bleed paper-2 AI section → 880px 2x2 practices grid), type-scale variation (26px lead → 17px body → 32px pull → 22px names), and one surface-color shift. Chris explicitly requested more personality; the flat 680px single-column version was rejected as "boring and static."
- **No indented content.** Chris flagged the 880→680px width shift mid-section as "strange indentation." All content within a section flows at the same width. Don't narrow body prose below a wider heading within the same section.
- **Home page has no next-step footer.** The "See the work →" inline link and nav handle navigation. The Seth Taylor testimonial paper-2 band is the terminal element.
- **Testimonial padding is generous.** `py-sp-10` (128px) mobile, `py-sp-11` (192px) desktop. Chris requested "way more" padding.
- **NextStep defaults to 880px** via the component. CaseLayout wraps it in a 680px constraint to match prose. This keeps the component flexible without per-page props.

### 3k. Consistency audit — top padding and H1 (APPLIED)

Interior pages standardized to `pt-sp-8` (64px) and H1 at `text-[34px] md:text-[44px]`, tracking -0.02em. Home unchanged (192px, 56px hero). `/work` and `/contact` were the two that needed fixing.

**Exception:** `/contact` was subsequently redesigned (see §3m) and now uses `pt-sp-10 md:pt-sp-11` with a 56px headline — intentional for a terminal page with minimal content.

### 3m. Contact page elevated (redesigned)

Contact page redesigned for more design presence:
- H1 scaled to 56px desktop (hero-level) — terminal page with minimal content needs typographic weight
- Top padding restored to `sp-10 md:sp-11` — not subject to the interior-page standardization
- Contact items redesigned as full-width clickable `<a>` rows: label left, value right, hairline rules between
- Email row gets accent `→` arrow with slide-right hover (extends NextStep arrow pattern to primary action)
- Link text scaled to 20px desktop
- Bottom padding `pb-sp-11` added to balance the page vertically

### 3n. Accent color unified — iron blue removed

**Iron blue (`--accent-2: #1d3a8a`) has been removed entirely.** One accent color: burnt sienna (`--accent: #b8472a`).

The accent now threads across every page, like Stripe uses purple:

- **Nav:** active page link gets a 2px burnt sienna underline (`decoration-accent decoration-2 underline-offset-[6px]`)
- **Home:** top-line eyebrow ("CHRIS WHALEN — DESIGN LEADER...") in accent
- **Work index:** case eyebrows ("ANGEL · 2023–PRESENT") in accent
- **Case pages:** CaseHero eyebrows in accent
- **Leadership:** "WHAT I BELIEVE", "AI & DESIGN", practice numbers all in accent
- **Writing:** topic group headers in accent
- **Contact:** email `→` arrow in accent
- **All testimonials:** attribution line (em-dash + name) now uses accent everywhere (was iron blue on Home only, ink-3 elsewhere). The `accentAttribution` prop was removed from Testimonial component — all attributions are accent.
- **NextStep arrows:** unchanged, already accent

**Removed from codebase:** `--accent-2` CSS custom property, `--color-accent-2` Tailwind theme token, `accentAttribution` prop on Testimonial component.

### 3o. Leadership page content and structure refinements

- **"What I Do"** promoted from eyebrow to H2 (`font-display text-[24px] md:text-[26px]`). The eyebrow treatment conflicted with the "PRACTICE 01" eyebrows directly below it.
- **Lead paragraph gap** tightened: `mb-sp-7` → `mb-sp-6` (matches H1-to-lead gap)
- **"Multipliers" spacing** fix: added explicit `{" "}` after `</em>` to prevent JSX whitespace collapse
- **Content edits:** "I'm still working on this one" added to best-idea-wins principle; "engineers" added to 360 survey list; "the Homestead giveaway" clarified from just "Homestead"

### 3p. Writing page spacing tightened

- H1-to-content: `mb-sp-9 md:mb-sp-10` → `mb-sp-7 md:mb-sp-8` (96/128px → 48/64px)
- Between topic groups: `space-y-sp-10 md:space-y-sp-11` → `space-y-sp-9 md:space-y-sp-10` (128/192px → 96/128px)

### 3q. /work H1 spacing tightened

- H1-to-featured-case: `mb-sp-9 md:mb-sp-10` → `mb-sp-7` (128px → 48px). The gap was massive; now matches other page rhythms.

### 3l. Angel Design Assistant SessionStart hook removed

`~/.claude/settings.json` was cleared to `{}` to remove the user-level Angel Design Assistant hook that was firing on every session. Backup at `~/.claude/settings.json.angel-backup-20260529`. The `~/.claude/angel-design-intelligence/` folder is still on disk — untouched in case Chris uses it for real Angel projects later.

---

## 4. Component architecture

Everything in `components/` is shared and used (or designed to be used) across pages.

```
components/
  Nav.tsx                    Sticky top nav with mobile hamburger
  NextStep.tsx               Quiet footer link with burnt-sienna arrow
  Testimonial.tsx            Set-apart quote block; renders nothing if quote is null
  CaseHero.tsx               Eyebrow + h1 + subtitle + role + hero image
  CaseLayout.tsx             Page shell: hero + body slot + next-step footer
  CaseProvider.tsx           Client wrapper for testimonial context
  CaseContext.tsx            React context shape for testimonial data

  mdx/
    index.tsx                MDXComponents map (h2/h3/p/strong/em/a + custom components)
    Subhead.tsx              Block subhead used inside Case #1 Operating Model
    Lead.tsx                 Larger lead paragraph (used in Executive Summary only)
    EmphasisList.tsx         Wrapper for bold-lead-phrase paragraphs
    TestimonialBreak.tsx     Placed inline in MDX between Outcomes and Lessons Learned

  work-index/
    CaseIndex.tsx            The Featured + Alternating /work index layout
```

**Lib helpers:**
```
lib/
  cases.ts                   getCaseBySlug, getAllCaseSlugs, getAllCases
                             Reads MDX from content/work/, parses frontmatter
```

---

## 5. Content model

Each case is an `.mdx` file in `content/work/`. Frontmatter shape:

```yaml
slug: communication-is-king
order: 1
eyebrow: "Angel · 2023–Present"
title: "Communication Is King"
subtitle: "Building the Design Function at Angel"
teaser: "What it took to turn three siloed designers..."
role: "Lead Product Designer · July 2023 – Present"
roleSecondary: "Concurrent with..."        # optional
heroSrc: "/images/case-img-giveaway.jpg"   # optional, becomes gradient placeholder if absent
heroAlt: "..."
heroTreatment: atmospheric                  # or "product" — informational only, no visual effect
testimonial:
  quote: null                               # null until collected — testimonial renders nothing
  name: "..."
  role: "..."
  company: "..."
nextStep:
  label: "..."                              # Title Case
  href: "/work/..."
```

Body of MDX is the case prose. Sections are authored as `## Heading`. Custom block components:
- `<Subhead>...</Subhead>` — block sub-heading inside a section
- `<Lead>...</Lead>` — larger opening paragraph (Executive Summary only, used sparingly)
- `<EmphasisList>...</EmphasisList>` — wrapper for bold-lead-phrase paragraphs
- `<TestimonialBreak />` — placed between Outcomes and Lessons Learned; renders the Testimonial component if `testimonial.quote` is non-null, otherwise renders nothing

---

## 6. Tokens

CSS custom properties live in `app/globals.css`. Tailwind v4 utilities reference them via the `@theme inline` block.

**Available utilities:**
- Colors: `text-ink`, `text-ink-2`, `text-ink-3`, `bg-paper`, `bg-paper-2`, `border-rule`, `border-rule-2`, `text-accent` (burnt sienna), `text-accent-2` (iron blue, reserved for Seth Taylor on Home only)
- Fonts: `font-display` (Instrument Sans), `font-body` (Inter)
- Spacing: `sp-1` through `sp-11` (4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px / 96px / 128px / 192px) — used as `px-sp-5`, `mt-sp-7`, etc.

---

## 7. Outstanding TODOs (in priority order)

### High priority

1. **Individual `/writing/[slug]` pages.** The writing index links to five slugs that don't have pages yet. Need essay content before these can be built. Three are ports from LinkedIn, two are new for launch.

2. **Case #1 hero image.** Still a placeholder gradient. Use Midjourney v6 (`--ar 16:9 --style raw`) with atmospheric/quiet-competence direction. Suggested prompts captured in prior conversation — fall back to "empty modern conference room" or "two leather chairs in sunlit office" if none of the others land. After generation, apply the grade treatment per visual register §Imagery.

3. **Testimonial quotes.** Site is now ~80% built — time to collect. When quotes arrive:
   - Seth Taylor (Home): replace placeholder quote in `app/page.tsx`
   - Austin Page (Leadership): set quote in `app/leadership/page.tsx` Testimonial component
   - Case testimonials: drop into case frontmatter `testimonial.quote` field — slots render automatically

### Medium priority

4. ~~**Vercel deployment**~~ — ✅ Done. Deployed to Vercel, custom domain `chriswhalen.design` added (+ `www`), GitHub auto-deploy connected to `main`.

5. **Real CaseHero image grading.** Right now images render at full saturation. The visual register specifies a unified grade treatment across all photographic assets. Apply this in post (manual grade per image, save into `/public/images/`) rather than trying to fake it in CSS.

6. **Case #2 alternate images.** Two `-b` files exist in `/public/images/` (`case-img-giveaway-b.jpg`, `case-img-historik-b.jpg`) as alternates. Currently unused. Confirm with Chris which version is final before final launch.

7. **Résumé PDF.** `/contact` links to `/chris-whalen-resume.pdf` — file doesn't exist yet in `/public/`.

---

## 8. Visual register changes that need to make it back into the register doc

The register doc (`_build-docs/01-visual-register.md`) hasn't been updated to reflect decisions from the `/work` and pages sessions. When you have time, sync these in:

**From `/work` session:**
- Eyebrow format: drop "CASE 0X" prefix; use `Company · Date Range`
- Title Case rule applies to titles and subtitles site-wide
- Mobile spacing: 32px hero top padding, 40px h2 top margin, 8px hero bottom padding
- Nav padding: 24px mobile, 48px desktop (matches content)
- `roleSecondary` field on CaseHero
- Layout A hover motion (image scale 1.015 over 300ms with spring easing) is allowed — fourth motion pattern beyond the original three
- The register is **advisory**, not locked

**From pages session (this session):**
- `paper-2` background bands used as section separators on Home (testimonial) and Leadership (AI section). This is a new visual pattern not in the original register.
- Content column widths: pages use 880px as the primary column (not 680px). 680px is reserved for case study prose only. NextStep component defaults to 880px; CaseLayout constrains it to 680px.
- Testimonial vertical padding increased to sp-10 (128px) mobile / sp-11 (192px) desktop — much more generous than the original sp-9 (96px).
- Leadership page uses two-column layout for operating principles (name left 280px, body right) at 880px — not stacked paragraphs at 680px.
- Named practices render in a 2x2 grid on desktop instead of a stacked list.
- "WHAT I BELIEVE" and "WHAT I DO" eyebrows frame principles and practices as different categories.
- Home page has no next-step footer — the Seth Taylor testimonial band is the terminal element.
- Home page top line is uppercase eyebrow: "CHRIS WHALEN — DESIGN LEADER. COEUR D'ALENE, IDAHO."

---

## 9. How to start a fresh session

Open a new Claude Code session in the same project. First message:

```
Read these in order:
1. _build-docs/handoff-after-work.md  (this doc — captures current state and decisions)
2. _build-docs/00-START-HERE.md       (original orientation)
3. _build-docs/chris-whalen-phase-4-final-specaz.md  (Phase 4 architecture)
4. _build-docs/01-visual-register.md  (visual register — note §8 deviations from handoff doc)

Then [task]. Don't re-derive decisions captured in the handoff doc.
```

All pages are built. Recommended next targets: **writing essay content** (individual `/writing/[slug]` pages), **testimonial collection**, or **Vercel deployment**.

---

## 10. Things that came up in conversation but aren't decisions yet

These were raised, not resolved. Surface them when relevant:

- **Outcomes treatment unification.** Case #1 uses `<EmphasisList>`; Cases #3/#2/#4 use literal arrows. Chris hasn't asked to unify. If you want to propose unification, surface as a content+structural decision he should approve.

- **Case #2 testimonial attribution format.** Visual register specifies `— Name, Role, Company`. Chris's example in conversation used `— Name, Role at Company` ("Seth Taylor, CXO at Angel"). When quotes arrive and we render attributions, confirm which format he wants. The register format is the current default in the `Testimonial` component.

- **AI image tool consensus.** Chris asked about tools for the Case #1 hero. Midjourney v6 was recommended. He hasn't confirmed which tool he's actually using.

- **Leadership page content.** Chris said "I'll make content changes later" — the leadership page structure is approved but the content may be refined. Don't treat the prose as finalized the way case study prose is.

- **Seth Taylor testimonial is placeholder.** The current quote on Home ("Chris is one of the most capable design leaders I've worked with...") is fabricated placeholder text. Must be replaced with the real quote when collected.

- **Writing piece titles/descriptions are draft.** The titles and descriptions on `/writing` were derived from the Phase 4 spec, not authored by Chris. He may want to revise.
