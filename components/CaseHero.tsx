interface CaseHeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  role: string;
  roleSecondary?: string;
  heroSrc?: string;
  heroAlt?: string;
}

export function CaseHero({
  eyebrow,
  title,
  subtitle,
  role,
  roleSecondary,
  heroSrc,
  heroAlt,
}: CaseHeroProps) {
  return (
    <div className="mx-auto max-w-[880px] pt-8 md:pt-[80px] pb-2 md:pb-[56px]">
      {eyebrow ? (
        <p className="font-body text-[13px] font-medium uppercase tracking-[0.06em] text-ink-3 mb-5">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-[36px] md:text-[52px] font-medium leading-[1.1] md:leading-[1.06] tracking-[-0.025em] text-ink mb-[18px]">
        {title}
      </h1>
      <p className="font-display text-[20px] md:text-[24px] font-normal leading-[1.25] tracking-[-0.01em] text-ink-2 mb-sp-5">
        {subtitle}
      </p>
      <p className="text-[15px] font-body text-ink-3">{role}</p>
      {roleSecondary ? (
        <p className="text-[15px] font-body text-ink-3 mt-sp-1">
          {roleSecondary}
        </p>
      ) : null}

      {heroSrc ? (
        <div className="mt-sp-6 md:mt-sp-7 aspect-video w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroSrc}
            alt={heroAlt || ""}
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div
          className="mt-sp-6 md:mt-sp-7 aspect-video w-full overflow-hidden flex items-end p-sp-5"
          style={{
            background:
              "linear-gradient(135deg, #d8d3c4 0%, #c4bba8 45%, #a89e88 100%)",
          }}
        >
          <span className="text-[12px] tracking-[0.06em] uppercase font-medium text-ink/50">
            Atmospheric hero — graded, 16:9 (placeholder)
          </span>
        </div>
      )}
    </div>
  );
}
