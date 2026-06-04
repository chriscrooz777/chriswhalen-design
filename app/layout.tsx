import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chris Whalen — Design Leader",
  description:
    "Leading product design across web, TV, mobile, and theatrical at Angel.",
};

const isHolding = process.env.HOLDING_PAGE === "true";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${inter.variable}`}
    >
      <body>
        {isHolding ? (
          <nav className="sticky top-0 z-50 bg-paper border-b border-rule">
            <div className="mx-auto max-w-[1200px] px-sp-5 md:px-sp-7 h-16 flex items-center">
              <Link
                href="/"
                className="font-display text-[18px] font-medium text-ink no-underline"
              >
                Chris Whalen
              </Link>
            </div>
          </nav>
        ) : (
          <Nav />
        )}
        <main>{children}</main>
      </body>
    </html>
  );
}
