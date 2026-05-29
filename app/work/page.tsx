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
      <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 pt-sp-8 md:pt-[80px] mb-sp-9 md:mb-sp-10">
        <h1 className="font-display text-[36px] md:text-[52px] font-medium leading-[1.1] md:leading-[1.06] tracking-[-0.025em] text-ink">
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
