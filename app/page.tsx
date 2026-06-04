import type { Metadata } from "next";
import Link from "next/link";
import { Testimonial } from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Chris Whalen — Design Leader",
  description:
    "Leading product design across web, TV, mobile, and theatrical at Angel.",
};

const signalBeats = [
  {
    label: "Head-of-Design scope.",
    body: "Six senior designers. Web, TV, mobile, theatrical. Peer to the Head of Product. Reports to the CXO.",
  },
  {
    label: "AI-native practice.",
    body: "Two years of building, shipping, and writing publicly about AI in production design work.",
  },
  {
    label: "Multiplier by practice.",
    body: "Hire well, get out of the way, let the best idea win.",
  },
  {
    label: "Founder depth.",
    body: "Raised, built, shipped, and wound down a venture-backed startup. Concurrent with Angel.",
  },
];

const isHolding = process.env.HOLDING_PAGE === "true";

function HoldingPage() {
  return (
    <article className="px-sp-5 md:px-sp-7 pt-sp-10 md:pt-sp-11">
      <div className="mx-auto max-w-[880px]">
        <p className="text-[13px] font-medium tracking-[0.06em] uppercase text-accent mb-sp-6">
          Chris Whalen &mdash; Design Leader. Coeur d&rsquo;Alene, Idaho.
        </p>

        <h1 className="font-display text-[34px] md:text-[56px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.02em] md:tracking-[-0.025em] text-ink mb-sp-5">
          Something new is on the way.
        </h1>

        <p className="text-[17px] md:text-[20px] leading-[1.5] md:leading-[1.45] text-ink-2 max-w-[600px]">
          This site is being built. In the meantime, the best way to reach me is{" "}
          <a
            href="mailto:chris@chriswhalen.design"
            className="text-ink underline decoration-rule-2 underline-offset-[3px] hover:decoration-ink transition-colors duration-[120ms]"
          >
            email
          </a>
          .
        </p>
      </div>
    </article>
  );
}

function FullHomePage() {
  return (
    <article>
      <section className="px-sp-5 md:px-sp-7 pt-sp-10 md:pt-sp-11 pb-sp-10 md:pb-sp-11">
        <div className="mx-auto max-w-[880px]">
          {/* Top line */}
          <p className="text-[15px] font-medium tracking-[0.06em] uppercase text-accent mb-sp-6">
            Chris Whalen &mdash; Design leader. Coeur d&rsquo;Alene, Idaho.
          </p>

          {/* Headline */}
          <h1 className="font-display text-[34px] md:text-[56px] font-medium leading-[1.1] md:leading-[1.05] tracking-[-0.02em] md:tracking-[-0.025em] text-ink mb-sp-5">
            Leading product design across web, TV, mobile, and theatrical at Angel.
          </h1>

          {/* Sub-headline */}
          <p className="text-[17px] md:text-[20px] leading-[1.5] md:leading-[1.45] text-ink-2 mb-sp-9 max-w-[720px]">
            Six senior designers across web, TV, mobile, and theatrical. Two
            years building, shipping, and writing publicly about AI as a serious
            design collaborator.
          </p>

          {/* Signal beats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-sp-6 md:gap-sp-7 mb-sp-9">
            {signalBeats.map((beat, i) => (
              <p key={i} className="text-[15px] leading-[1.6] text-ink-2">
                <span className="font-medium text-ink">{beat.label}</span>{" "}
                {beat.body}
              </p>
            ))}
          </div>

          {/* Primary path forward */}
          <Link
            href="/work"
            className="inline-flex items-baseline gap-sp-2 text-[16px] font-body text-ink no-underline group"
          >
            <span className="text-accent transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-x-1">
              &rarr;
            </span>
            <span className="group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 group-hover:decoration-1">
              See the work
            </span>
          </Link>
        </div>
      </section>

      {/* Seth Taylor testimonial */}
      <div className="bg-paper-2">
        <div className="px-sp-5 md:px-sp-7">
          <Testimonial
            quote="Chris is one of the most capable design leaders I've worked with. He builds teams that ship with clarity and taste, and he does it without ego."
            name="Seth Taylor"
            role="CXO"
            company="Angel"
          />
        </div>
      </div>

    </article>
  );
}

export default function Home() {
  return isHolding ? <HoldingPage /> : <FullHomePage />;
}
