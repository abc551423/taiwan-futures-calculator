import { notFound } from "next/navigation";
import ArticleRenderer from "@/components/article/ArticleRenderer";
import {
  getArticleBySlug,
  getArticleSlugs,
  getNextArticle,
  getPreviousArticle,
} from "@/lib/articles";
import Link from "next/link";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
  };
}

export default async function ArticlePage({
  params,
}: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const previous = getPreviousArticle(slug);
  const next = getNextArticle(slug);

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm font-medium text-blue-600">
          Lesson {article.lesson}
        </p>

        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          {article.title}
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-600">
          {article.description}
        </p>

        <div className="mt-6 flex gap-6 text-sm text-slate-500">
          <span>{article.readingTime} 分鐘閱讀</span>
          <span>更新：{article.updatedAt}</span>
        </div>
      </header>

      <ArticleRenderer sections={article.sections} />

      <hr className="my-16" />

      <div className="flex justify-between gap-4">
        {previous ? (
          <Link
            href={`/articles/${previous.slug}`}
            className="rounded-xl border px-5 py-3 hover:bg-slate-50"
          >
            ← {previous.title}
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/articles/${next.slug}`}
            className="rounded-xl border px-5 py-3 hover:bg-slate-50"
          >
            {next.title} →
          </Link>
        ) : null}
      </div>
    </main>
  );
}