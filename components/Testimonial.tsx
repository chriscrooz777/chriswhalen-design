interface TestimonialProps {
  quote: string | null;
  name: string;
  role: string;
  company?: string | null;
}

export function Testimonial({
  quote,
  name,
  role,
  company,
}: TestimonialProps) {
  if (!quote) return null;

  const attribution = company ? `${name}, ${role}, ${company}` : `${name}, ${role}`;

  return (
    <div className="mx-auto max-w-[880px] py-sp-10 md:py-sp-11">
      <p className="font-display text-[28px] font-normal leading-[1.3] tracking-[-0.01em] text-ink">
        {quote}
      </p>
      <p className="mt-sp-4 text-[15px] font-body font-normal text-accent">
        &mdash; {attribution}
      </p>
    </div>
  );
}
