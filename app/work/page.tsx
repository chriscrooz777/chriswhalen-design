import { getAllCases } from "@/lib/cases";
import { NextStep } from "@/components/NextStep";
import { CaseIndex } from "@/components/work-index/CaseIndex";

export const metadata = {
  title: "Selected Work — Chris Whalen",
  description: "Four case studies in design leadership at scope.",
};

export default function WorkIndexPage() {
  const cases = getAllCases();

  return (
    <article>
      <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 pt-sp-8 md:pt-sp-8 mb-sp-7">
        <h1 className="font-display text-[34px] md:text-[44px] font-medium leading-[1.15] md:leading-[1.1] tracking-[-0.02em] text-ink">
          Selected Work
        </h1>
      </div>

      <CaseIndex cases={cases} />

      <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 mt-sp-9 md:mt-sp-10">
        <NextStep label="How I Lead" href="/leadership" />
      </div>
    </article>
  );
}
