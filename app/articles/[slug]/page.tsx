import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Home,
  List,
} from "lucide-react";

import ArticleRenderer from "@/components/article/ArticleRenderer";
import BackLink from "@/components/navigation/BackLink";
import {
  getArticleBySlug,
  getArticleSlugs,
  getNextArticle,
  getPreviousArticle,
} from "@/lib/articles";

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

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const previous = getPreviousArticle(slug);
  const next = getNextArticle(slug);

  const totalLessons = getArticleSlugs().length;
  const progress = Math.min(
    100,
    Math.round((article.lesson / totalLessons) * 100),
  );

  const tableOfContents = article.sections
    .filter(
      (
        section,
      ): section is Extract<
        (typeof article.sections)[number],
        { type: "heading" }
      > => section.type === "heading",
    )
    .filter((section) => Boolean(section.id))
    .map((section) => ({
      id: section.id,
      title: section.content,
    }));

  return (
    <main className="min-h-screen bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 md:py-12 lg:px-8">
        <nav
          aria-label="麵包屑導覽"
          className="mb-7 flex flex-wrap items-center gap-2 text-sm text-slate-500"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition hover:text-blue-600"
          >
            <Home className="h-4 w-4" />
            首頁
          </Link>

          <span aria-hidden="true" className="text-slate-300">
            /
          </span>

          <Link
            href="/articles"
            className="transition hover:text-blue-600"
          >
            期貨學院
          </Link>

          <span aria-hidden="true" className="text-slate-300">
            /
          </span>

          <span className="font-medium text-slate-700">
            第 {article.lesson} 課
          </span>
        </nav>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
          <article className="min-w-0">
            <header className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-sm">
              <div className="relative px-6 py-8 sm:px-8 md:px-10 md:py-11">
                <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-32 left-20 h-56 w-56 rounded-full bg-amber-100/60 blur-3xl" />

                <div className="relative">
                  <BackLink
                    href="/articles"
                    label="返回學院"
                    className="mb-7"
                  />

                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-bold tracking-wide text-white">
                      <BookOpen className="h-3.5 w-3.5 text-amber-300" />
                      Lesson {article.lesson}
                    </span>

                    <span className="text-sm font-medium text-slate-500">
                      期貨新手系列
                    </span>
                  </div>

                  <h1 className="mt-6 max-w-4xl text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
                    {article.title}
                  </h1>

                  <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
                    {article.description}
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-blue-600" />
                      約 {article.readingTime} 分鐘閱讀
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-blue-600" />
                      更新日期：{article.updatedAt}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 bg-slate-50/80 px-6 py-5 sm:px-8 md:px-10">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-bold text-slate-700">
                    新手課程進度
                  </span>

                  <span className="font-medium text-slate-500">
                    {article.lesson} / {totalLessons}
                  </span>
                </div>

                <div
                  className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200"
                  role="progressbar"
                  aria-label="課程進度"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </header>

            {tableOfContents.length > 0 && (
              <details className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 font-bold text-slate-900">
                  <span className="inline-flex items-center gap-2">
                    <List className="h-5 w-5 text-blue-600" />
                    本課目錄
                  </span>

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500">
                    +
                  </span>
                </summary>

                <nav className="border-t border-slate-100 px-5 py-4">
                  <ol className="space-y-1">
                    {tableOfContents.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          className="flex gap-3 rounded-xl px-3 py-2.5 text-sm leading-6 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          <span className="shrink-0 font-bold text-slate-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </details>
            )}

            <div className="mt-8 rounded-[2rem] border border-slate-200/70 bg-white px-5 py-7 shadow-sm sm:px-8 md:px-10 md:py-10">
              <ArticleRenderer sections={article.sections} />
            </div>

            <footer className="mt-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                  繼續學習
                </span>

                <div className="h-px flex-1 bg-slate-200" />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {previous ? (
                  <Link
                    href={`/articles/${previous.slug}`}
                    className={[
                      "group flex min-h-36 flex-col justify-between",
                      "rounded-2xl border border-slate-200 bg-white p-6",
                      "transition duration-200",
                      "hover:-translate-y-1 hover:border-blue-200",
                      "hover:shadow-lg hover:shadow-slate-200/60",
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition group-hover:text-blue-600">
                      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                      上一課
                    </span>

                    <span className="mt-5 text-lg font-black leading-7 text-slate-900">
                      {previous.title}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/articles"
                    className={[
                      "group flex min-h-36 flex-col justify-between",
                      "rounded-2xl border border-slate-200 bg-white p-6",
                      "transition duration-200",
                      "hover:-translate-y-1 hover:border-blue-200",
                      "hover:shadow-lg hover:shadow-slate-200/60",
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition group-hover:text-blue-600">
                      <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                      返回
                    </span>

                    <span className="mt-5 text-lg font-black leading-7 text-slate-900">
                      查看全部期貨課程
                    </span>
                  </Link>
                )}

                {next ? (
                  <Link
                    href={`/articles/${next.slug}`}
                    className={[
                      "group flex min-h-36 flex-col items-end justify-between",
                      "rounded-2xl border border-slate-200 bg-white p-6 text-right",
                      "transition duration-200",
                      "hover:-translate-y-1 hover:border-blue-200",
                      "hover:shadow-lg hover:shadow-slate-200/60",
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition group-hover:text-blue-600">
                      下一課
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>

                    <span className="mt-5 text-lg font-black leading-7 text-slate-900">
                      {next.title}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/articles"
                    className={[
                      "group flex min-h-36 flex-col items-end justify-between",
                      "rounded-2xl bg-slate-950 p-6 text-right text-white",
                      "transition duration-200",
                      "hover:-translate-y-1 hover:bg-slate-900",
                      "hover:shadow-xl hover:shadow-slate-950/15",
                    ].join(" ")}
                  >
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-300">
                      已完成全部課程
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>

                    <span className="mt-5 text-lg font-black leading-7">
                      返回期貨學院
                    </span>
                  </Link>
                )}
              </div>
            </footer>
          </article>

          {tableOfContents.length > 0 && (
            <aside className="sticky top-24 hidden lg:block">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-100 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <List className="h-5 w-5 text-blue-600" />

                    <h2 className="font-black text-slate-950">
                      本課目錄
                    </h2>
                  </div>

                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    點擊標題快速前往文章段落
                  </p>
                </div>

                <nav className="max-h-[calc(100vh-12rem)] overflow-y-auto p-3">
                  <ol className="space-y-1">
                    {tableOfContents.map((item, index) => (
                      <li key={item.id}>
                        <Link
                          href={`#${item.id}`}
                          className={[
                            "group flex gap-3 rounded-xl px-3 py-2.5",
                            "text-sm leading-6 text-slate-600",
                            "transition duration-150",
                            "hover:bg-blue-50 hover:text-blue-700",
                          ].join(" ")}
                        >
                          <span className="shrink-0 font-bold text-slate-300 transition group-hover:text-blue-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span>{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ol>
                </nav>
              </div>

              <div className="mt-4 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                  Vertex Calculator
                </p>

                <p className="mt-3 text-sm font-bold leading-6">
                  讀完觀念後，直接使用計算機驗證損益。
                </p>

                <Link
                  href="/#calculator"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-amber-300"
                >
                  前往損益計算機
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
}