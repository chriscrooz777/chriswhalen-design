import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getCaseBySlug, getAllCaseSlugs } from "@/lib/cases";
import { CaseLayout } from "@/components/CaseLayout";
import { getMDXComponents } from "@/components/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  try {
    const { frontmatter } = getCaseBySlug(slug);
    return {
      title: `${frontmatter.title} — Chris Whalen`,
      description: frontmatter.subtitle,
    };
  } catch {
    return { title: "Case Study — Chris Whalen" };
  }
}

export default async function CasePage({ params }: PageProps) {
  const { slug } = await params;

  let caseData;
  try {
    caseData = getCaseBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = caseData;

  return (
    <CaseLayout
      eyebrow={frontmatter.eyebrow}
      title={frontmatter.title}
      subtitle={frontmatter.subtitle}
      role={frontmatter.role}
      roleSecondary={frontmatter.roleSecondary}
      heroSrc={frontmatter.heroSrc}
      heroAlt={frontmatter.heroAlt}
      testimonial={frontmatter.testimonial}
      nextStepLabel={frontmatter.nextStep.label}
      nextStepHref={frontmatter.nextStep.href}
    >
      <MDXRemote source={content} components={getMDXComponents()} />
    </CaseLayout>
  );
}
