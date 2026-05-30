import Link from "next/link";
import type { CaseFrontmatter } from "@/lib/cases";

interface CaseIndexProps {
  cases: CaseFrontmatter[];
}

// Featured + Alternating Stack
// - Case #1 gets full-width hero treatment (the "cover story")
// - Cases #3 / #2 / #4 stack as side-by-side rows, image alternates L, R, L
// - Hairline rules between rows
export function CaseIndex({ cases }: CaseIndexProps) {
  if (cases.length === 0) return null;
  const [featured, ...rest] = cases;

  return (
    <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7">
      {/* Featured */}
      <Link
        href={`/work/${featured.slug}`}
        className="group block no-underline mb-sp-9 md:mb-sp-10"
      >
        <div className="aspect-video w-full overflow-hidden mb-sp-6 md:mb-sp-7">
          {featured.heroSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={featured.heroSrc}
              alt={featured.heroAlt || ""}
              className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, #d8d3c4 0%, #c4bba8 45%, #a89e88 100%)",
              }}
            />
          )}
        </div>
        <div className="max-w-[880px]">
          {featured.eyebrow ? (
            <p className="font-body text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-3">
              {featured.eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-[32px] md:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-ink mb-sp-3 group-hover:underline group-hover:decoration-ink group-hover:underline-offset-[6px] group-hover:decoration-1">
            {featured.title}
          </h2>
          <p className="text-[18px] md:text-[20px] font-body font-normal leading-[1.55] text-ink-2 max-w-[680px]">
            {featured.teaser}
          </p>
        </div>
      </Link>

      {/* Remaining cases */}
      <div>
        {rest.map((c, idx) => {
          const imageRight = idx % 2 === 1;
          return (
            <div key={c.slug} className="border-t border-rule pt-sp-8 md:pt-sp-9 mb-sp-8 md:mb-sp-9">
              <Link
                href={`/work/${c.slug}`}
                className="group block no-underline"
              >
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-sp-6 md:gap-sp-7 items-center ${
                    imageRight ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-video w-full overflow-hidden md:max-w-[560px]">
                    {c.heroSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={c.heroSrc}
                        alt={c.heroAlt || ""}
                        className="w-full h-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
                      />
                    ) : (
                      <div
                        className="w-full h-full"
                        style={{
                          background:
                            "linear-gradient(135deg, #d8d3c4 0%, #c4bba8 45%, #a89e88 100%)",
                        }}
                      />
                    )}
                  </div>
                  <div>
                    {c.eyebrow ? (
                      <p className="font-body text-[13px] font-medium uppercase tracking-[0.06em] text-accent mb-sp-3">
                        {c.eyebrow}
                      </p>
                    ) : null}
                    <h2 className="font-display text-[26px] md:text-[32px] font-medium leading-[1.15] tracking-[-0.015em] text-ink mb-sp-3 group-hover:underline group-hover:decoration-ink group-hover:underline-offset-4 group-hover:decoration-1">
                      {c.title}
                    </h2>
                    <p className="text-[17px] font-body font-normal leading-[1.65] text-ink-2 max-w-prose">
                      {c.teaser}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
