import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Chris Whalen",
  description: "Get in touch with Chris Whalen.",
};

export default function ContactPage() {
  return (
    <article className="px-sp-5 md:px-sp-7 pt-sp-10 md:pt-sp-11">
      <div className="mx-auto max-w-[880px]">
        <h1 className="font-display text-[34px] md:text-[44px] font-medium leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-ink mb-sp-6">
          Get in Touch
        </h1>

        <p className="text-[17px] md:text-[20px] leading-[1.5] text-ink-2 mb-sp-9">
          Best way to reach me is email.
        </p>

        <div className="space-y-sp-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-sp-2 sm:gap-sp-5">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 w-[80px] shrink-0">
              Email
            </span>
            <a
              href="mailto:chris@chriswhalen.design"
              className="text-[17px] text-ink underline decoration-rule-2 underline-offset-[3px] hover:decoration-ink transition-colors duration-[120ms]"
            >
              chris@chriswhalen.design
            </a>
          </div>

          <div className="border-t border-rule" />

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-sp-2 sm:gap-sp-5">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 w-[80px] shrink-0">
              R&eacute;sum&eacute;
            </span>
            <a
              href="/chris-whalen-resume.pdf"
              className="text-[17px] text-ink underline decoration-rule-2 underline-offset-[3px] hover:decoration-ink transition-colors duration-[120ms]"
            >
              Download PDF
            </a>
          </div>

          <div className="border-t border-rule" />

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-sp-2 sm:gap-sp-5">
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 w-[80px] shrink-0">
              LinkedIn
            </span>
            <a
              href="https://linkedin.com/in/chrislwhalen/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[17px] text-ink underline decoration-rule-2 underline-offset-[3px] hover:decoration-ink transition-colors duration-[120ms]"
            >
              linkedin.com/in/chrislwhalen
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
