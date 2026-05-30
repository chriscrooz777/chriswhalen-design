import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Chris Whalen",
  description: "Get in touch with Chris Whalen.",
};

export default function ContactPage() {
  return (
    <article className="px-sp-5 md:px-sp-7 pt-sp-10 md:pt-sp-11 pb-sp-11">
      <div className="mx-auto max-w-[880px]">
        <h1 className="font-display text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-[-0.025em] text-ink">
          Get in Touch
        </h1>

        <p className="text-[20px] leading-[1.5] text-ink-2 mt-sp-5">
          Best way to reach me is email.
        </p>

        <div className="mt-sp-10 md:mt-sp-11">
          <a
            href="mailto:chris@chriswhalen.design"
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-t border-rule py-sp-6 md:py-sp-7 gap-sp-2 sm:gap-sp-5"
          >
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 shrink-0">
              Email
            </span>
            <span className="flex items-baseline gap-sp-2">
              <span className="text-[17px] md:text-[20px] text-ink underline decoration-rule-2 underline-offset-[4px] group-hover:decoration-ink transition-colors duration-[120ms]">
                chris@chriswhalen.design
              </span>
              <span className="text-accent translate-x-0 group-hover:translate-x-1 transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)]">
                →
              </span>
            </span>
          </a>

          <a
            href="/chris-whalen-resume.pdf"
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-t border-rule py-sp-6 md:py-sp-7 gap-sp-2 sm:gap-sp-5"
          >
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 shrink-0">
              Résumé
            </span>
            <span className="text-[17px] md:text-[20px] text-ink underline decoration-rule-2 underline-offset-[4px] group-hover:decoration-ink transition-colors duration-[120ms]">
              Download PDF
            </span>
          </a>

          <a
            href="https://linkedin.com/in/chrislwhalen/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between border-t border-b border-rule py-sp-6 md:py-sp-7 gap-sp-2 sm:gap-sp-5"
          >
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 shrink-0">
              LinkedIn
            </span>
            <span className="text-[17px] md:text-[20px] text-ink underline decoration-rule-2 underline-offset-[4px] group-hover:decoration-ink transition-colors duration-[120ms]">
              linkedin.com/in/chrislwhalen
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
