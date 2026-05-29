import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
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
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
