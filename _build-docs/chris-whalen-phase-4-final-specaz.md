# Chris Whalen — Phase 4 Final Spec (Website Architecture)

> **How to use this file:** Paste this entire document as the first message in a new Phase 5 (Build Guidance) conversation, alongside the four case study context files. This file contains all locked architectural decisions for chriswhalen.design — sitemap, page-by-page content blocks, testimonial roster, ask sequence, and cross-page navigation. Locked Phase 2 language is included inline so Phase 5 conversations don't need to cross-reference the original Phase 4 context file.
>
> **Status:** Phase 4 complete. Ready for Phase 5 (Cursor implementation).

---

## Sitemap

Five pages. Nav reads: **Work · Leadership · Writing · Contact**.

- **/** (Home)
- **/work** — case study index plus four individual case pages
- **/leadership** — executive narrative, operating principles, AI section, named practices, one testimonial slot
- **/writing** — grouped by topic, mirrored on-site at canonical URLs
- **/contact** — email, résumé PDF download, LinkedIn

**No separate /about page.** The executive narrative is the opening section of /leadership. Reasoning: "About" reads as portfolio-site convention; "Leadership" signals platform. Apple, Stripe, Linear, Vercel skip /about in their top nav. The executive narrative is a leadership credo with biographical scaffolding, not a biography.

---

## Page 1: Home (`/`)

### Job of the page

Qualify a recruiter (or executive search firm) from "first contact" to "they take me seriously as a Head of Design candidate" in a 10–20 second scan. Pre-qualifies upward. Does not close — interview and network do.

### Above the fold

**Top line:**
> **Chris Whalen** — Design leader. Coeur d'Alene, Idaho.

*(Angel stays out of this line. Surfaces in the headline below.)*

**Headline:**
> Leading product design across web, TV, mobile, and theatrical at Angel.

**Sub-headline:**
> Six senior designers across web, TV, mobile, and theatrical. Two years building, shipping, and writing publicly about AI as a serious design collaborator.

**Four signal beats** (compressed Phase 2 differentiators):

> **Head-of-Design scope.** Six senior designers. Web, TV, mobile, theatrical. Peer to the Head of Product. Reports to the CXO.
>
> **AI-native practice.** Two years of building, shipping, and writing publicly about AI in production design work.
>
> **Multiplier by practice.** Hire well, get out of the way, let the best idea win.
>
> **Founder depth.** Raised, built, shipped, and wound down a venture-backed startup. Concurrent with Angel.

**Primary path forward:** quiet link, not a button.

> See the work →

Links to `/work`.

### Below the fold

At launch: **nothing.** Single-screen home page. Stripe/Linear register. Empty space below the fold is fine; filler is not.

**When Seth Taylor testimonial is in hand:** add as single below-the-fold testimonial pull. CXO voice anchors the home page. No additional content below the testimonial.

### Next-step footer

→ See the work (`/work`)

### What's *not* on the home page

- No marketing CTA, no email capture, no "Get started"
- No portfolio thumbnail grid
- No "latest posts" feed
- No résumé link surfaced (résumé lives on `/contact` only)
- No scheduled call link

---

## Page 2: Work (`/work`)

### Job of the page

Show four cases in a deliberate sequence. The sequence is the argument: *I run a function. I read the market. I ship at altitude when called for. I have founder depth.*

### Case sequence (locked, scope-led)

1. **Case #1: Communication is King** — Building the design function at Angel. Scope qualifier.
2. **Case #3: The Perfect Storm** — Reading a cultural moment and building the theatrical giveaway playbook. Strategic altitude.
3. **Case #2: Pay It Forward** — Shipping a revenue-generating product surface while leading the design function. Range — leader who also operates.
4. **Case #4: The Discipline of Calling It** — Founding, running, and winding down Historik. Credibility depth.

**Why scope-led (not recency or impact):** Recency-led reads as job-seeking IC. Impact-led ($6.5M first, 10x ROI second) frames as results-generator rather than leader and risks pattern-matching Case #1 as "the soft one without numbers." Scope-led puts the case answering the recruiter's actual question ("can this person run a function?") first.

### Layout

- **Vertical list,** one case per row. Not a grid.
- Each row: **hero image** + **case title** + **teaser line.**
- Teaser lines surface impact numbers ($6.5M, 10x ROI) for Cases #2 and #3 so impact is visible above the fold even when those cases sit second/third in the sequence.

**Hero images:** treated as a real craft problem in Phase 5, not an afterthought. Case #1 is the hardest (no obvious hero surface — the artifact is the operating model itself). Visual register must be consistent across all four cases. Pick a register (product/artifact, atmospheric/conceptual, or team/context) and hold it.

### Next-step footers within /work

- Case #1 → Case #3
- Case #3 → Case #2
- Case #2 → Case #4
- Case #4 → /leadership

A recruiter who reads in order finishes all four cases and lands on /leadership next. The top nav is always available; the footers are the curated read.

### /work index next-step footer

→ How I lead (`/leadership`)

### Testimonials inside cases

- **Case #2:** Director of Product, Theatrical / Crowdfunding — placed near the closing beat ("when to step back"). Contextual placement; corroborates the exact moment the case describes.
- **Case #3:** Brett Crockett (Homestead filmmaker) — external-to-Angel voice. Speaks to the strategic judgment on the Homestead model and the playbook that came out of it.
- **Case #4:** Jake Jones (Historik co-founder) — **backup only.** Use only if the quote materially strengthens the case. Case #4's spine (the discipline of calling it) lands hardest in Chris's voice alone; a generic quote would undercut it.
- **Case #1:** No testimonial. The case stands on its data (six senior designers, two-year stability, four hired by Chris, one up for promotion). Adding voice would suggest the case needs strengthening, which it doesn't.

---

## Page 3: Leadership (`/leadership`)

### Job of the page

Carry the executive narrative, operating philosophy, AI thesis, and named practices. The densest page on the site. Structure exists so a recruiter can stop at any read-down point and still have gotten the signal.

### Read-down order (locked)

1. Executive narrative
2. Leadership philosophy
3. Four operating principles
4. "Designing with AI in the room" section
5. Four named ownable practices
6. Testimonial (Austin Page, Head of Product)
7. Next-step footer

### Block 1: Executive narrative

> Twenty years ago I sat at a Microsoft and Xbox support desk, watching ordinary people meet new technology for the first time. I didn't know it then, but that's where I learned the muscle that defines my work now: translating complex systems into experiences people can trust, use, and enjoy.
>
> Since then I've designed brands that won regional ADDY awards, founded and ran a venture-backed startup that built a real product and made hard calls about its future, and spent the last four years at Angel — first as a senior designer across multiple product teams, now leading a team of six senior product designers across web, TV, mobile, and theatrical. Two months in, Angel's CEO and CXO tapped me to take on PM and Senior Product Designer of Web. A year later, the CXO pulled me alongside him as Lead Product Designer with the brief to build the function.
>
> I report to the CXO and partner with the Head of Product on direction. I own the design system and the consumer-facing brand aesthetic. I've spent the last two years embedding AI into how our team and our company design and ship — building, prototyping, training, and writing about it publicly.
>
> I lead by removing barriers and amplifying people. I'm a multiplier by practice.
>
> Currently based in Coeur d'Alene, Idaho.

### Block 2: Leadership philosophy

> I lead by removing barriers and amplifying people. My job is to make my designers more capable than they were when they joined my team — and to extend the reach of the executives I work with, so they can focus on the vision and the long view.
>
> Servant leadership isn't a posture for me. It's the operating mode. I read Liz Wiseman's *Multipliers* two years ago and it didn't teach me a philosophy — it gave me language for what was already working. My 1:1s open with what my designer is working on and what they're discovering, and close with how I can help and what's blocking them. I structure critique so the best idea wins, not the loudest voice. I hire for craft and judgment, then trust the judgment.

Followed by, set off as its own visual moment (not buried as the last sentence of a paragraph):

> **The work I'm proudest of is rarely the work that has my name on it.**

### Block 3: Four operating principles

Voice register: **what I believe.** Declarative.

**I make my team more capable than they were when they joined.**
The single best measure of my leadership is whether the designers around me grow. Not whether the work shipped, not whether the metrics moved — those happen as a consequence. Growth of the people is the cause.

**The best idea wins. Not the loudest, not mine.**
I run critique and decision-making so the room produces better thinking than any one of us would alone. My job is to make space, not to fill it.

**I demystify what feels hard.**
When AI was the scary new thing for my team, I built something with it myself first. When critique feels risky for a new designer, I put my own work up before I ask anyone to put up theirs. I find the failure modes, then I show what I learned — what worked, what cost me a day, where I got stuck. The fastest way to remove a barrier is to walk through it where everyone can see.

**I extend my executives' reach.**
My job is not to be a designer who reports up. It's to be a partner who takes problems off my CXO's plate and stands peer-to-peer with my Head of Product on the direction of our products.

### Block 4: Designing with AI in the room

Section header: **Designing with AI in the room.**

Frame statement (locked):

> **People come first. AI comes second.**
>
> I lead with trust in the people I work with. My designers, my partners in product and engineering, my CXO — I show up assuming they're capable and treat them like it. AI is different. I push it, challenge it, ask it the obvious question, and watch how it answers under real pressure. It's a powerful tool. It's not a teammate. The people are the team.

This section also links to the full **"Designing with AI in the room"** essay on `/writing` (anchor piece, to be written for launch).

### Block 5: Four named ownable practices

Voice register: **what I do.** Mechanics, not beliefs. Each practice has a name plus a short explanation of the mechanic.

**Junior-to-senior weeks.** Periodically I allocate myself as a junior product designer to one of my senior product designers for a full week. They lead. I follow. I execute on their direction and priorities. Feedback only when warranted. The rest of the time I'm there to move work forward at their pace.

**Designer hat / leader hat.** When I'm sharing a designer's perspective (an opinion, a critique, a different approach) rather than a lead's directive, I say so out loud. So my designers know the difference between their lead asking them to do something and a fellow designer offering a thought. The practice came out of 360 survey feedback that "my words have weight."

**360 survey at year one.** A year into the lead role, I asked our COO to run a survey on me. Designers, peers, leaders above. No one asked me to do it. Structured feedback before anyone required it. That's where "words have weight" came from.

**Pre-flight checklist for theatrical giveaways.** Built after Homestead shipped, when scope creep on the second giveaway exposed the cost of running a one-off without a system. Four tiers: things needed before the project can be discussed, things needed before it ships to production, nice-to-haves, and stretch goals built around network effects. It also documents team members and roles for visibility. Handed off to the Theatrical Release Coordinator, who now owns and iterates on it.

### Block 6: Testimonial

**Austin Page, Head of Product at Angel.** Single testimonial slot on /leadership. Peer at executive altitude. Held until site is 80% built.

### Block 7: Next-step footer

→ Selected writing (`/writing`)

### Visual differentiation note for Phase 5

Both principles and named practices appear on the same page. They are different *kinds* of content and need to read that way visually. Principles are beliefs (declarative, abstract, value-stated). Practices are mechanics (named, repeatable, operational). Treatment in Phase 5 must make the distinction clear at a glance — otherwise the page reads as "Chris likes lists of four."

---

## Page 4: Writing (`/writing`)

### Job of the page

Third-party-verifiable evidence that the AI-and-leadership claims on other pages are real. Higher bar than a typical blog index — every piece either reinforces positioning or shouldn't be there. Five strong pieces beat fifteen mixed ones.

### Grouping

**Grouped by topic, two groups.** Not reverse-chrono (the site is not a feed). Not mixed/curated (no obvious narrative arc for a writing index).

- **Designing with AI in the room**
- **Leadership at scope**

Mirrors the structure of `/leadership` — operating principles and AI section as parallel pillars.

### Launch roster (five pieces)

**Designing with AI in the room:**
1. 4-day Claude Design system experiment *(port from LinkedIn Post 01)*
2. Vibe-coding playbook: ChatGPT-5 + Cursor + Figma Make *(port from LinkedIn Post 03)*
3. **Designing with AI in the room** — full essay *(new for launch; anchor piece)*

**Leadership at scope:**
1. Multipliers + Ted Lasso, rewritten as operating-model essay *(port from LinkedIn Post 05, rewritten — no longer book-quote-anchored)*
2. **The discipline of calling it** — what the wind-down of Historik taught about leadership decisions you only learn by making them *(new for launch; complementary to Case #4, not duplicative)*

Three ports, two new. Two AI, three leadership — slightly leadership-weighted, right for a Head of Design positioning page.

### Post-launch roadmap (write after launch)

- Running design at entertainment scale
- Hiring Senior Product Designers for multiplier potential
- Giver/recipient Pay It Forward piece *(post-ship, with measurable outcomes)*
- The pre-flight checklist and what templating a hit teaches you about scope creep

### Hosting

**Mirror everything on-site at canonical URLs:** `chriswhalen.design/writing/[slug]`. LinkedIn and Medium become syndication/discovery surfaces that link back to the canonical version. Ported pieces lightly re-edited on import to match site voice and formatting.

### Excluded / retired

- LinkedIn Post 02 (sports card valuation app) — port the *idea* (lead by example, demystify) into a future essay with a better example. Not on launch.
- Medium "Insider's View" Sr. PD hiring piece — wrong altitude for Head of Design positioning. Rewrite at higher altitude or bury.
- LinkedIn Post 04 — deleted by user. Stays off.

### Format question (deferred)

Video as a format for some pieces is on the table for post-launch exploration. Strongest case: AI workflow demonstrations benefit from showing rather than telling. Written essays remain canonical at launch. Revisit format mix once /writing is live and we have signal.

### Next-step footer

→ Get in touch (`/contact`)

---

## Page 5: Contact (`/contact`)

### Job of the page

Turn a qualified recruiter into a conversation. Transactional. The trust work is already done by the time they get here.

### Architecture

One framing line. Then three items:

> Best way to reach me is email.

- **Email:** chris@chriswhalen.design
- **Résumé:** PDF download
- **LinkedIn:** linkedin.com/in/chrislwhalen/

**Nothing else.** No testimonials, no scheduled-call link, no Medium link, no marketing copy.

### Why email only (no scheduled-call link)

Executive recruiters write emails. A public Calendly link on a Head-of-Design positioning site reads as job-seeking-eager. Email gives Chris the qualifier — he reads the message, decides whether to schedule. Scheduling happens in a follow-up email on a case-by-case basis.

### Why PDF résumé (not LinkedIn-as-résumé)

Recruiters want a file they can drop into their pipeline tool. The PDF lives in Chris's site repo (or CDN he controls), self-updateable. LinkedIn is a separate link for credentials, not a résumé substitute.

### No next-step footer

`/contact` is the terminal page. Next step is sending an email, not navigating elsewhere on-site.

---

## Cross-page navigation logic

### Layer 1: Persistent top nav

Always visible on every page: **Work · Leadership · Writing · Contact.** Recruiter can jump to any page from any page.

### Layer 2: Curated next-step footers

Every page except `/contact` ends with a quiet, named next-step recommendation. Treatment: small text, single link, no button, no marketing CTA. Specific destination labels, never "explore more" or "continue."

| Page | Next-step footer |
|---|---|
| Home | → See the work (`/work`) |
| `/work` index | → How I lead (`/leadership`) |
| Case #1 | → Next case: The Perfect Storm |
| Case #3 | → Next case: Pay It Forward |
| Case #2 | → Next case: The Discipline of Calling It |
| Case #4 | → How I lead (`/leadership`) |
| `/leadership` | → Selected writing (`/writing`) |
| `/writing` | → Get in touch (`/contact`) |
| `/contact` | (no footer — terminal page) |

### The intended read path

Home → /work (read all four cases in locked sequence) → /leadership → /writing → /contact.

A recruiter who follows the footers reads the site in the order it was designed to be read. They don't have to. The top nav is always there. But the default flow is curated.

---

## Testimonial roster (final)

Four primary slots, one backup. Three altitudes structurally differentiated.

| Slot | Voice | Page placement | Speaks to |
|---|---|---|---|
| 1 (primary) | Seth Taylor — CXO at Angel | Home, below the fold | Executive sponsor; longest relationship; industry credibility |
| 2 (primary) | Austin Page — Head of Product at Angel | /leadership | Peer at executive altitude |
| 3 (primary) | Director of Product, Theatrical / Crowdfunding | Inside Case #2, near closing beat | Working partner; corroborates Pay It Forward |
| 4 (primary) | Brett Crockett — Homestead filmmaker | Inside Case #3 | External-to-Angel voice; corroborates Homestead strategic judgment |
| 5 (backup) | Jake Jones — Historik co-founder | Inside Case #4, only if quote materially strengthens | Founding partner; speaks from outside Angel |

**Case #1: no testimonial.** Stands on its data (six senior designers, two-year stability, four hired by Chris, one up for promotion). Verifiable data beats a quote.

**No designer testimonials anywhere on the site, ever.** Violates locked Phase 2 rule ("never single out individual designers by name or pseudonym, even positively") and inverts the multiplier dynamic.

### Ask sequence

All asks held until site is 80% built — so when Chris asks, he can show each person exactly what their quote will sit next to.

1. **Seth Taylor** — first. Lowest friction, longest relationship.
2. **Austin Page** — second. Newer relationship; gives time to keep building it.
3. **Director of Product, Theatrical / Crowdfunding** — third. Wait until Pay It Forward 2025 experiments have shipped so the quote can reference completed work.
4. **Brett Crockett** — fourth. Ask must be tightly framed — filmmakers may write cinematic, which would overshoot the case.
5. **Jake Jones** — fifth, only if needed for Case #4 reinforcement.

### Framing for the ask

The ask matters as much as the relationship. Generic praise reads as filler at any altitude. Each ask should be specific: 2–3 sentences about what it was actually like to work with Chris on [the specific work the case describes]. The specifics are what make a testimonial transfer credibility.

---

## Housekeeping (parallel track, fix before launch)

- ~~LinkedIn vanity URL change~~ — already done (`/in/chrislwhalen/`)
- **Résumé rewrite** — current draft ("Lead Product Designer guiding a team in crafting impactful UX designs") will undercut the site if a recruiter opens the PDF. Needs scope-first rewrite mirroring site positioning. **Recommended as its own scoped conversation** (Phase 4.5 or Phase 6) with its own context file: paste current résumé, this Phase 4 spec, and Phase 2 positioning, then refactor.
- LinkedIn About — rewrite to match new positioning (no founder-bait, scope-first)
- Medium author bio — rewrite from "Lead Product Designer guiding a team in crafting impactful UX designs" to scope-first leadership framing
- Email: chris@chriswhalen.design (use everywhere)
- Retire "Crooz Media" as public-facing brand (LLC can stay for tax)

---

## Phase 5 handoff notes

### Build order recommendation within Phase 5

1. `/work` (case study index and four case pages) — most consequential page, most complex content
2. `/leadership` — densest page, sets patterns for typography and visual hierarchy
3. Home — easier to design once /work and /leadership are locked
4. `/contact` — simplest page
5. `/writing` — last; benefits from rest of site's voice and treatment being locked first. May warrant its own scoped Phase 5 conversation.

### Tech stack (locked)

- Cursor + Next.js
- Vercel hosting
- No CMS at launch
- Domain: chriswhalen.design (purchased)
- Aesthetic register: Apple, Stripe, Airbnb, Uber, Linear, Vercel — premium SaaS
- **Not:** Dribbble-style portfolios, flashy agency portfolios, process-heavy UX portfolios

### Visual problems flagged for Phase 5 (not architecture, but signaled here)

1. **Case #1 hero image** — no obvious product surface; the artifact is the operating model itself. Hardest of the four to image.
2. **Visual register consistency across four case hero images** — all four must look like they belong on the same site at the same altitude. Pick a register and hold it.
3. **Visual differentiation between operating principles and named practices on /leadership** — same page, similar shape (lists of four). Must read as two distinct kinds of content (beliefs vs. mechanics) at a glance.
4. **"The work I'm proudest of is rarely the work that has my name on it."** — earns its own visual moment on /leadership, not buried at the end of a paragraph.
5. **Next-step footer treatment** — quiet, small text, single named link, no button. Visual register matches Stripe/Linear/Vercel: *here's what's next, when you're ready*, not *don't leave without doing this*.

### What's *not* in Phase 5 scope

- Re-litigating Phase 2 positioning language
- Re-litigating any case study locked in Phase 3
- Adding pages or cases beyond what's specified here
- Re-opening the /writing format question (writing-first at launch; revisit format mix after launch)

---

## Phase status

- ✅ Phase 1 — Strategic Audit
- ✅ Phase 2 — Positioning Narrative
- ✅ Phase 3 — Portfolio Refactor (four case studies locked)
- ✅ Phase 4 — Website Structure (this document)
- ⏯️ Phase 5 — Build Guidance (Cursor implementation)
- ⏳ Phase 4.5 or 6 — Résumé rewrite (its own scoped conversation)
- ⏳ Post-launch — additional /writing essays; possible video format exploration
