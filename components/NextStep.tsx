import Link from "next/link";

interface NextStepProps {
  label: string;
  href: string;
}

export function NextStep({ label, href }: NextStepProps) {
  return (
    <div className="mx-auto max-w-[680px] pt-sp-7 pb-sp-9">
      <div className="border-t border-rule pt-sp-6">
        <Link
          href={href}
          className="inline-flex items-baseline gap-sp-2 text-[16px] font-body text-ink no-underline group"
        >
          <span className="text-accent transition-transform duration-200 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-x-1">
            &rarr;
          </span>
          <span className="group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 group-hover:decoration-1">
            {label}
          </span>
        </Link>
      </div>
    </div>
  );
}
