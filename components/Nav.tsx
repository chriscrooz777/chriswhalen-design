"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "Leadership", href: "/leadership" },
  { label: "Writing", href: "/writing" },
  { label: "Contact", href: "/contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setMenuOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, close]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/work") return pathname.startsWith("/work");
    return pathname === href;
  }

  return (
    <nav className="sticky top-0 z-50 bg-paper border-b border-rule">
      <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-[18px] font-medium text-ink no-underline"
        >
          Chris Whalen
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-baseline gap-0">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-baseline">
              {i > 0 && (
                <span className="text-ink-3 text-[15px] px-2 select-none" aria-hidden="true">
                  &middot;
                </span>
              )}
              <Link
                href={link.href}
                className={`text-[15px] no-underline transition-colors duration-[120ms] ${
                  isActive(link.href)
                    ? "font-medium text-ink"
                    : "font-normal text-ink-2 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden w-11 h-11 flex items-center justify-center -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 top-16 z-40 bg-paper"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="px-sp-5 pt-sp-7 flex flex-col gap-sp-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={`text-[20px] font-display no-underline ${
                  isActive(link.href)
                    ? "font-medium text-ink"
                    : "font-normal text-ink-2"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
