import type { MDXComponents } from "mdx/types";
import { Subhead } from "./Subhead";
import { Lead } from "./Lead";
import { EmphasisList } from "./EmphasisList";
import { TestimonialBreak } from "./TestimonialBreak";

export function getMDXComponents(): MDXComponents {
  return {
    Subhead,
    Lead,
    EmphasisList,
    TestimonialBreak,
    h2: (props) => (
      <h2
        className="font-display text-[22px] md:text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-ink mt-10 md:mt-14 mb-5"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="font-display text-[18px] font-medium text-ink mt-sp-6 mb-sp-2"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-[17px] font-body font-normal leading-[1.65] text-ink mb-sp-5"
        {...props}
      />
    ),
    strong: (props) => <strong className="font-medium" {...props} />,
    em: (props) => <em {...props} />,
    a: (props) => (
      <a
        className="text-ink underline decoration-rule-2 underline-offset-[3px] transition-colors duration-[120ms] hover:decoration-ink"
        {...props}
      />
    ),
    hr: () => null,
  };
}
