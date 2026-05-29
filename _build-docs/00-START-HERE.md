# 00 — START HERE (chriswhalen.design build)

> **You are Claude Code, working in Cursor on a Next.js project.** This is the orientation doc. Read this first, then read the files listed in §2 in order, then begin the task in §5. Do not start writing code until you've read all reference files.

---

## 1. What this project is

A five-page positioning website for Chris Whalen, a Head-of-Design candidate. It is an executive positioning platform, not a creative portfolio. The register is editorial and restrained — think Stripe's marketing pages, not Dribbble.

Five pages: `/` (home), `/work` (four case studies), `/leadership`, `/writing`, `/contact`.

**This build session covers `/work` only** — the case study template and the four case pages. Other pages come in later sessions.

## 2. Read these files before writing code (in order)

1. **`00-START-HERE.md`** — this file (stack, conventions, task)
2. **Phase 4 spec** (the `chris-whalen-phase-4-final-specaz.md` file) — overall site IA, read path, positioning context. Read for context; do not re-derive decisions from it that later docs have already locked.
3. **`01-visual-register.md`** — type, color, spacing, motion, imagery, component visual specs. This is the source of truth for everything visual.
4. **`02-case-template.md`** — the structure, content model, and decisions for case pages. This is the source of truth for the `/work` build.
5. **`case1-layout-reference.html`** — a static render of the approved case layout. Open it in a browser to see the intended result. It is throwaway inline-styled HTML — do NOT port it; rebuild clean per the specs.
6. **The four case context files** (`chriswhalen-case-N-context.md`) — source prose for each case. The finalized case study text is at the bottom of each file under the `# CASE STUDY #N` heading. Use that text verbatim; do not rewrite or condense it.

If anything in these files conflicts, the precedence order is: `02-case-template.md` and `01-visual-register.md` (most specific, most recent) override the Phase 4 spec (broadest). If a real conflict exists that you can't resolve, STOP and ask Chris rather than guessing.

## 3. Stack and tooling (locked)

| Concern | Decision |
|---|---|
| Framework | Next.js, latest stable, **App Router** |
| Language | TypeScript |
| Styling | Tailwind CSS. Encode the visual-register tokens (color, spacing, type) as Tailwind theme extensions — do NOT scatter arbitrary values like `text-[#1a1a1a]`. |
| Fonts | Instrument Sans (display) + Inter (body), via `next/font/google`, self-hosted. See `01-visual-register.md` for the exact loader config and weights (400, 500 only). |
| Content | MDX per case (preferred) — see `02-case-template.md` §7. Frontmatter for metadata, MDX body for sections, custom components for non-standard blocks. |
| CMS | None. Content lives in the repo. |
| Deployment | Vercel. |
| Package manager | pnpm (preferred) or npm — your call, be consistent. |
| Dark mode | None. Do not build a theme toggle. |

## 4. Project conventions

- **Folder structure:** App Router. Suggested:
  - `app/work/[slug]/page.tsx` — dynamic case route, OR `app/work/[slug]/` driven by MDX in `content/work/`
  - `content/work/*.mdx` — the four case files
  - `components/` — shared components (`CaseLayout`, `CaseHero`, `NextStep`, `Testimonial`, `Subhead`, `Lead`, `EmphasisList`, nav, footer)
  - `app/globals.css` — token definitions as CSS custom properties (mirror the register), Tailwind layers
  - `lib/` — case ordering/sequence helpers if needed
- **Tokens:** define the visual-register CSS custom properties in `globals.css`, then reference them in the Tailwind config so utilities like `text-ink`, `bg-paper`, `border-rule` exist. Both layers should agree.
- **Components are shared-first:** `NextStep` and `Testimonial` are used on multiple pages later. Build them in `components/`, not inside the case route.
- **No premature abstraction:** build for the four real cases, not a hypothetical CMS. Flexible where the spec says flexible (section array), concrete everywhere else.

## 5. The task for this session

Build the `/work` case study system:

1. **Scaffold** the Next.js + TypeScript + Tailwind + MDX project with the token system from `01-visual-register.md` wired into `globals.css` and the Tailwind config. Load the two fonts.
2. **Build the shared components:** nav (with mobile hamburger per `02-case-template.md` §8 Q2), footer, `NextStep`, `Testimonial`, and the MDX block components.
3. **Build `CaseLayout` + `CaseHero`** per `02-case-template.md` §5 — the page shell that iterates over the flexible `sections[]` array and places the testimonial at its fixed position.
4. **Pour in Case #1** (`communication-is-king`) as the test fit, using the verbatim finalized text from `chriswhalen-case-1-context.md`. Case #1 has the extra "The Team's Operating Model" section and NO testimonial — it's the best stress test of the flexible-section model.
5. **Stop and show Chris** the rendered Case #1 before building cases #3/#2/#4. Do not build all four until the template is confirmed against the live Case #1.

Use a placeholder graded image for the hero (16:9, neutral) — real hero assets come later via the Option-3 hybrid pipeline. Do not generate or source final imagery.

## 6. Hard rules (do not violate)

- Do not make positioning, structural, or content decisions. Execute the specs. Surface questions instead of guessing.
- Do not rewrite, condense, or "improve" the case prose. It's final.
- Do not port the inline styles from the HTML reference.
- Do not add motion beyond the three patterns in `01-visual-register.md` (page fade, link hover, footer arrow). No scroll animations.
- Do not add a TOC, progress bar, or jump links (pure scroll — `02-case-template.md` §8 Q4).
- Do not hardcode placeholder testimonial quotes. Testimonials render only when a real quote exists (`02-case-template.md` §4a). Case #1 gets no testimonial.
- Do not add iron-blue anywhere except where the register reserves it (not in `/work` at all — it's a Home-page moment).
- Do not build dark mode.

## 7. When you finish

Show Chris the running Case #1 page (dev server) and a short note on: any spec ambiguities you hit, any decisions you had to surface, and confirmation that the flexible-section model handled the Operating Model section cleanly. Then wait for confirmation before building the other three cases.
