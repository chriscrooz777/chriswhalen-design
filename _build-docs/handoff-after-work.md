# Handoff — after `/work` is built

> **For the next Claude Code session.** Read this AFTER `00-START-HERE.md` and the original build docs. This doc captures the state of the repo and the decisions made in conversation that don't yet live in the original build docs. If anything here conflicts with an earlier doc, **this doc wins** (it's the most recent).

---

## 1. What's built and shipped

The `/work` case study system is complete and pushed to GitHub.

| Page | Status |
|---|---|
| `/work` (index) | ✅ Live. Layout A (Featured + Alternating Stack). |
| `/work/communication-is-king` (Case #1) | ✅ Live. Verbatim case prose, no testimonial, hero placeholder. |
| `/work/the-perfect-storm` (Case #3) | ✅ Live. Hero image wired. Testimonial slot wired (Brett Crockett, quote: null). |
| `/work/pay-it-forward` (Case #2) | ✅ Live. Hero image wired. Testimonial slot wired (David Crapo, quote: null). |
| `/work/the-discipline-of-calling-it` (Case #4) | ✅ Live. Hero image wired. Testimonial slot wired (Jake Jones, quote: null). |

Repo: [github.com/chriscrooz777/chriswhalen-design](https://github.com/chriscrooz777/chriswhalen-design). Local `main` tracks `origin/main`.

Other pages (`/`, `/leadership`, `/writing`, `/contact`) are **not built yet**. The Phase 4 spec describes them; nothing has been implemented.

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

### 3j. Angel Design Assistant SessionStart hook removed

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

1. **Case #1 hero image.** Still a placeholder gradient. Use Midjourney v6 (`--ar 16:9 --style raw`) with atmospheric/quiet-competence direction. Suggested prompts captured in conversation — fall back to "empty modern conference room" or "two leather chairs in sunlit office" if none of the others land. After generation, apply the grade treatment per visual register §Imagery (5% burnt-sienna in shadows, 5% cyan in highlights, 15–20% desaturation, 2–3% grain, 8–12% soft vignette).

2. **`/leadership` page** — densest page on the site per Phase 4 spec. Read Phase 4 spec §"Page 3: Leadership" for the locked structure (executive narrative → philosophy → 4 principles → AI section → 4 named practices → testimonial slot → next-step).

3. **Home page (`/`)** — single-screen Stripe/Linear register per Phase 4 spec §"Page 1: Home". This is the home for the iron-blue accent moment on Seth Taylor's testimonial.

### Medium priority

4. **`/contact` page** — simplest page. Email, résumé PDF placeholder, LinkedIn link. Per Phase 4 spec §"Page 5: Contact".

5. **`/writing` page** — last per Phase 4 build order. Grouped by topic. Five launch pieces. May warrant its own scoped session per the Phase 5 handoff notes.

### Lower priority / housekeeping

6. **Update `01-visual-register.md`** to reflect the decisions made in this session (eyebrow simplification, Title Case rule, mobile spacing, allowed Layout A hover motion). Don't keep the register out of sync with reality.

7. **Testimonial quotes** — collected after the site is ~80% built per Phase 4 plan. When quotes arrive, drop them into the case frontmatter `testimonial.quote` field — the slot renders automatically.

8. **Vercel deployment** — not yet configured.

9. **Real CaseHero image grading.** Right now images render at full saturation. The visual register specifies a unified grade treatment across all photographic assets. Apply this in post (manual grade per image, save into `/public/images/`) rather than trying to fake it in CSS.

10. **Case #2 alternate images.** Two `-b` files exist in `/public/images/` (`case-img-giveaway-b.jpg`, `case-img-historik-b.jpg`) as alternates. Currently unused. Confirm with Chris which version is final before final launch.

---

## 8. Visual register changes that need to make it back into the register doc

The register doc (`_build-docs/01-visual-register.md`) hasn't been updated to reflect this session's decisions. When you have time, sync these in:

- Eyebrow format: drop "CASE 0X" prefix; use `Company · Date Range`
- Title Case rule applies to titles and subtitles site-wide
- Mobile spacing: 32px hero top padding, 40px h2 top margin, 8px hero bottom padding
- Nav padding: 24px mobile, 48px desktop (matches content)
- `roleSecondary` field on CaseHero
- Layout A hover motion (image scale 1.015 over 300ms with spring easing) is allowed — fourth motion pattern beyond the original three
- The register is **advisory**, not locked

---

## 9. How to start a fresh session

Open a new Claude Code session in the same project. First message:

```
Read these in order:
1. _build-docs/handoff-after-work.md  (this doc — captures current state and decisions)
2. _build-docs/00-START-HERE.md       (original orientation)
3. _build-docs/chris-whalen-phase-4-final-specaz.md  (Phase 4 architecture)
4. _build-docs/01-visual-register.md  (visual register — note §8 deviations from handoff doc)

Then build [next page]. Don't re-derive decisions captured in the handoff doc.
```

Recommended next build target: **`/leadership`**. It's the next page in the Phase 4 build order, and it sets the typographic and hierarchical patterns for the rest of the site.

---

## 10. Things that came up in conversation but aren't decisions yet

These were raised, not resolved. Surface them when relevant:

- **Outcomes treatment unification.** Case #1 uses `<EmphasisList>`; Cases #3/#2/#4 use literal arrows. Chris hasn't asked to unify. If you want to propose unification, surface as a content+structural decision he should approve.

- **Case #2 testimonial attribution format.** Visual register specifies `— Name, Role, Company`. Chris's example in conversation used `— Name, Role at Company` ("Seth Taylor, CXO at Angel"). When quotes arrive and we render attributions, confirm which format he wants. The register format is the current default in the `Testimonial` component.

- **AI image tool consensus.** Chris asked about tools for the Case #1 hero. Midjourney v6 was recommended. He hasn't confirmed which tool he's actually using.

- **The home page won't have an `About` link.** Per Phase 4 spec, the executive narrative opens `/leadership`. Mentioned here because Claude may default to expecting an `/about` route.
