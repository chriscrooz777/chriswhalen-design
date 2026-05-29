import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 pt-sp-8">
      <p className="font-body text-[15px] text-ink-3">Home page — coming in a later session.</p>
      <p className="mt-sp-4">
        <Link
          href="/work/communication-is-king"
          className="text-[16px] font-body text-ink no-underline inline-flex items-baseline gap-sp-2 group"
        >
          <span className="text-accent">&rarr;</span>
          <span className="group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4 group-hover:decoration-1">
            Communication is King (Case #1)
          </span>
        </Link>
      </p>
    </div>
  );
}
