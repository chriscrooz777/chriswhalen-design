import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content/work");

export interface CaseFrontmatter {
  slug: string;
  order: number;
  eyebrow?: string;
  title: string;
  subtitle: string;
  teaser?: string;
  role: string;
  roleSecondary?: string;
  heroSrc?: string;
  heroAlt?: string;
  heroTreatment?: "atmospheric" | "product";
  testimonial: {
    quote: string | null;
    name: string;
    role: string;
    company?: string | null;
  } | null;
  nextStep: {
    label: string;
    href: string;
  };
}

export function getCaseBySlug(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as CaseFrontmatter,
    content,
  };
}

export function getAllCaseSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllCases(): CaseFrontmatter[] {
  const slugs = getAllCaseSlugs();
  const cases = slugs.map((slug) => getCaseBySlug(slug).frontmatter);
  return cases.sort((a, b) => a.order - b.order);
}
