import type { Metadata } from "next";
import Link from "next/link";
import { NextStep } from "@/components/NextStep";

export const metadata: Metadata = {
  title: "Writing — Chris Whalen",
  description:
    "Essays on AI-native design practice and leadership at scope.",
};

const groups = [
  {
    label: "Designing with AI in the Room",
    pieces: [
      {
        title: "Four Days with Claude: A Design System Experiment",
        description:
          "What happened when I handed a real design system problem to Claude and worked alongside it for a week.",
        href: "/writing/four-days-with-claude",
      },
      {
        title: "The Vibe-Coding Playbook",
        description:
          "ChatGPT-5, Cursor, and Figma Make — a working playbook for designers who want to ship, not just prototype.",
        href: "/writing/vibe-coding-playbook",
      },
      {
        title: "Designing with AI in the Room",
        description:
          "The anchor essay. How I think about AI as a design tool, what it changes about the craft, and what it doesn't.",
        href: "/writing/designing-with-ai-in-the-room",
        anchor: true,
      },
    ],
  },
  {
    label: "Leadership at Scope",
    pieces: [
      {
        title: "The Multiplier Operating Model",
        description:
          "What Liz Wiseman's Multipliers looks like as a daily operating system — not a philosophy, but a practice.",
        href: "/writing/multiplier-operating-model",
      },
      {
        title: "The Discipline of Calling It",
        description:
          "What the wind-down of Historik taught about leadership decisions you only learn by making them.",
        href: "/writing/the-discipline-of-calling-it",
        anchor: true,
      },
    ],
  },
];

export default function WritingPage() {
  return (
    <article className="px-sp-5 md:px-sp-7 pt-sp-8 md:pt-sp-8">
      <div className="mx-auto max-w-[880px]">
        <h1 className="font-display text-[34px] md:text-[44px] font-medium leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-ink mb-sp-9 md:mb-sp-10">
          Selected Writing
        </h1>

        <div className="space-y-sp-10 md:space-y-sp-11">
          {groups.map((group) => (
            <section key={group.label}>
              <p className="text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-6">
                {group.label}
              </p>

              <div className="space-y-0">
                {group.pieces.map((piece, i) => (
                  <Link
                    key={piece.href}
                    href={piece.href}
                    className={`block no-underline group py-sp-6 ${
                      i > 0 ? "border-t border-rule" : ""
                    }`}
                  >
                    <h2 className="font-display text-[20px] md:text-[22px] font-medium text-ink mb-sp-2 group-hover:underline group-hover:decoration-ink group-hover:underline-offset-4 group-hover:decoration-1">
                      {piece.title}
                    </h2>
                    <p className="text-[15px] leading-[1.6] text-ink-3">
                      {piece.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <NextStep label="Get in Touch" href="/contact" />
    </article>
  );
}
