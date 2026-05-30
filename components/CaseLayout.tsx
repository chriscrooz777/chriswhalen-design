import { CaseHero } from "@/components/CaseHero";
import { NextStep } from "@/components/NextStep";
import { CaseProvider } from "@/components/CaseProvider";
import type { CaseData } from "@/components/CaseContext";

interface CaseLayoutProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  role: string;
  roleSecondary?: string;
  heroSrc?: string;
  heroAlt?: string;
  testimonial: CaseData["testimonial"];
  nextStepLabel: string;
  nextStepHref: string;
  children: React.ReactNode;
}

export function CaseLayout({
  eyebrow,
  title,
  subtitle,
  role,
  roleSecondary,
  heroSrc,
  heroAlt,
  testimonial,
  nextStepLabel,
  nextStepHref,
  children,
}: CaseLayoutProps) {
  return (
    <CaseProvider data={{ testimonial }}>
      <article>
        <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7">
          <CaseHero
            eyebrow={eyebrow}
            title={title}
            subtitle={subtitle}
            role={role}
            roleSecondary={roleSecondary}
            heroSrc={heroSrc}
            heroAlt={heroAlt}
          />
        </div>

        <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7">
          <div className="mx-auto max-w-[680px]">{children}</div>
        </div>

        <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7">
          <div className="mx-auto max-w-[680px]">
            <NextStep label={nextStepLabel} href={nextStepHref} />
          </div>
        </div>
      </article>
    </CaseProvider>
  );
}
