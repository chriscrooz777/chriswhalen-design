import type { Metadata } from "next";
import { Testimonial } from "@/components/Testimonial";
import { NextStep } from "@/components/NextStep";

export const metadata: Metadata = {
  title: "Leadership — Chris Whalen",
  description:
    "Executive narrative, operating philosophy, and named practices.",
};

const principles = [
  {
    name: "I make my team more capable than they were when they joined.",
    body: "The single best measure of my leadership is whether the designers around me grow. Not whether the work shipped, not whether the metrics moved — those happen as a consequence. Growth of the people is the cause.",
  },
  {
    name: "The best idea wins. Not the loudest, not mine.",
    body: "I run critique and decision-making so the room produces better thinking than any one of us would alone. My job is to make space, not to fill it. I'm still working on this one.",
  },
  {
    name: "I demystify what feels hard.",
    body: "When AI was the scary new thing for my team, I built something with it myself first. When critique feels risky for a new designer, I put my own work up before I ask anyone to put up theirs. I find the failure modes, then I show what I learned — what worked, what cost me a day, where I got stuck. The fastest way to remove a barrier is to walk through it where everyone can see.",
  },
  {
    name: "I extend my executives' reach.",
    body: "My job is not to be a designer who reports up. It's to be a partner who takes problems off my CXO's plate and stands peer-to-peer with my Head of Product on the direction of our products.",
  },
];

const practices = [
  {
    name: "Junior-to-Senior Weeks",
    body: "Periodically I allocate myself as a junior product designer to one of my senior product designers for a full week. They lead. I follow. I execute on their direction and priorities. Feedback only when warranted. The rest of the time I'm there to move work forward at their pace.",
  },
  {
    name: "Designer Hat / Leader Hat",
    body: "When I'm sharing a designer's perspective (an opinion, a critique, a different approach) rather than a lead's directive, I say so out loud. So my designers know the difference between their lead asking them to do something and a fellow designer offering a thought. The practice came out of 360 survey feedback that “my words have weight.”",
  },
  {
    name: "360 Survey at Year One",
    body: "A year into the lead role, I asked our COO to run a survey on me. Designers, engineers, peers, and leaders above. No one asked me to do it. Structured feedback before anyone required it. That’s where “words have weight” came from.",
  },
  {
    name: "Pre-Flight Checklist for Theatrical Giveaways",
    body: "Built after the Homestead giveaway shipped, when scope creep on the second giveaway exposed the cost of running a one-off without a system. Four tiers: things needed before the project can be discussed, things needed before it ships to production, nice-to-haves, and stretch goals built around network effects. It also documents team members and roles for visibility. Handed off to the Theatrical Release Coordinator, who now owns and iterates on it.",
  },
];

export default function LeadershipPage() {
  return (
    <article>
      {/* Executive Narrative — lead paragraph breaks into wide column */}
      <section className="px-sp-5 md:px-sp-7 pt-sp-8 md:pt-sp-8">
        <div className="mx-auto max-w-[880px]">
          <h1 className="font-display text-[34px] md:text-[44px] font-medium leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-ink mb-sp-6">
            How I Lead
          </h1>

          <p className="font-display text-[22px] md:text-[26px] font-normal leading-[1.35] md:leading-[1.3] tracking-[-0.01em] text-ink mb-sp-6">
            Twenty years ago I sat at a Microsoft and Xbox support desk, watching
            ordinary people meet new technology for the first time. I didn&rsquo;t
            know it then, but that&rsquo;s where I learned the muscle that defines
            my work now: translating complex systems into experiences people can
            trust, use, and enjoy.
          </p>
        </div>

        <div className="mx-auto max-w-[880px] space-y-sp-5 text-[17px] leading-[1.65] text-ink-2">
          <p>
            Since then I&rsquo;ve designed brands that won regional ADDY awards,
            founded and ran a venture-backed startup that built a real product and
            made hard calls about its future, and spent the last four years at
            Angel&nbsp;&mdash; first as a senior designer across multiple product
            teams, now leading a team of six senior product designers across web,
            TV, mobile, and theatrical. Two months in, Angel&rsquo;s CEO and CXO
            tapped me to take on PM and Senior Product Designer of Web. A year
            later, the CXO pulled me alongside him as Lead Product Designer with
            the brief to build the function.
          </p>
          <p>
            I report to the CXO and partner with the Head of Product on direction.
            I own the design system and the consumer-facing brand aesthetic.
            I&rsquo;ve spent the last two years embedding AI into how our team and
            our company design and ship&nbsp;&mdash; building, prototyping,
            training, and writing about it publicly.
          </p>
          <p className="text-ink font-medium">
            I lead by removing barriers and amplifying people. I&rsquo;m a
            multiplier by practice.
          </p>
          <p className="text-ink-3 text-[15px]">
            Currently based in Coeur d&rsquo;Alene, Idaho.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="px-sp-5 md:px-sp-7 mt-sp-10">
        <div className="mx-auto max-w-[880px]">
          <h2 className="font-display text-[20px] md:text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-ink mb-sp-5">
            Leadership Philosophy
          </h2>

          <div className="space-y-sp-5 text-[17px] leading-[1.65] text-ink-2">
            <p>
              I lead by removing barriers and amplifying people. My job is to make
              my designers more capable than they were when they joined my
              team&nbsp;&mdash; and to extend the reach of the executives I work
              with, so they can focus on the vision and the long view.
            </p>
            <p>
              Servant leadership isn&rsquo;t a posture for me. It&rsquo;s the
              operating mode. I read Liz Wiseman&rsquo;s{" "}
              <em className="not-italic text-ink">Multipliers</em>{" "}two years ago
              and it didn&rsquo;t teach me a philosophy&nbsp;&mdash; it gave me
              language for what was already working. My 1:1s open with what my
              designer is working on and what they&rsquo;re discovering, and close
              with how I can help and what&rsquo;s blocking them. I structure
              critique so the best idea wins, not the loudest voice. I hire for
              craft and judgment, then trust the judgment.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Moment */}
      <div className="px-sp-5 md:px-sp-7 py-sp-9 md:py-sp-10">
        <div className="mx-auto max-w-[880px] border-t border-b border-rule py-sp-7">
          <p className="font-display text-[28px] md:text-[32px] font-normal leading-[1.25] tracking-[-0.015em] text-ink">
            The work I&rsquo;m proudest of is rarely the work that has my name
            on it.
          </p>
        </div>
      </div>

      {/* Operating Principles — two-column on desktop */}
      <section className="px-sp-5 md:px-sp-7">
        <div className="mx-auto max-w-[880px]">
          <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-7">
            What I Believe
          </p>

          <div className="space-y-sp-7">
            {principles.map((principle, i) => (
              <div
                key={i}
                className={`md:grid md:grid-cols-[280px_1fr] md:gap-sp-7 ${
                  i > 0 ? "border-t border-rule pt-sp-7" : ""
                }`}
              >
                <h3 className="font-display text-[20px] md:text-[22px] font-medium text-ink mb-sp-3 md:mb-0">
                  {principle.name}
                </h3>
                <p className="text-[17px] leading-[1.65] text-ink-2">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Designing with AI in the Room — set apart with paper-2 */}
      <section className="mt-sp-10 bg-paper-2">
        <div className="px-sp-5 md:px-sp-7 py-sp-9 md:py-sp-10">
          <div className="mx-auto max-w-[880px]">
            <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-5">
              AI &amp; Design
            </p>
            <h2 className="font-display text-[24px] md:text-[32px] font-normal leading-[1.25] tracking-[-0.015em] text-ink mb-sp-6">
              People come first. AI comes second.
            </h2>
          </div>
          <div className="mx-auto max-w-[880px]">
            <p className="text-[17px] leading-[1.65] text-ink-2">
              I lead with trust in the people I work with. My designers, my
              partners in product and engineering, my CXO&nbsp;&mdash; I show up
              assuming they&rsquo;re capable and treat them like it. AI is
              different. I push it, challenge it, ask it the obvious question, and
              watch how it answers under real pressure. It&rsquo;s a powerful tool.
              It&rsquo;s not a teammate. The people are the team.
            </p>
          </div>
        </div>
      </section>

      {/* Named Practices — 2-column grid on desktop */}
      <section className="px-sp-5 md:px-sp-7 mt-sp-10">
        <div className="mx-auto max-w-[880px]">
          <h2 className="font-display text-[24px] md:text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-ink mb-sp-7">
            What I Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-sp-7 md:gap-x-sp-8 md:gap-y-sp-9">
            {practices.map((practice, i) => (
              <div key={i}>
                <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-2">
                  Practice {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-[20px] md:text-[22px] font-medium text-ink mb-sp-3">
                  {practice.name}
                </h3>
                <p className="text-[17px] leading-[1.65] text-ink-2">
                  {practice.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial — Austin Page */}
      <div className="px-sp-5 md:px-sp-7">
        <Testimonial
          quote={null}
          name="Austin Page"
          role="Head of Product"
          company="Angel"
        />
      </div>

      {/* Next Step */}
      <div className="px-sp-5 md:px-sp-7">
        <NextStep label="Selected Writing" href="/writing" />
      </div>
    </article>
  );
}
