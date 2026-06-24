import { notFound, redirect } from "next/navigation";
import { getAllSlugs, getArticleWithBacklinks } from "@/lib/articles";
import ArticleView from "@/components/ArticleView";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "new") return { title: "New article — ReyesWiki" };
  const article = await getArticleWithBacklinks(slug);
  if (!article) return { title: "Article not found — ReyesWiki" };
  return {
    title: `${article.title} — ReyesWiki`,
    description: article.summary,
  };
}

export default async function WikiPage({ params }: Props) {
  const { slug } = await params;

  if (slug === "new") {
    redirect("/wiki/new");
  }

  const article = await getArticleWithBacklinks(slug);
  if (!article) notFound();

  return <ArticleView article={article} />;
}
