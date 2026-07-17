import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "期貨新手教學｜Vertex Academy",
  description:
    "從零開始學習台灣期貨，了解期貨原理、大台小台微台、保證金、手續費、期交稅與損益計算。",
};

const articles = [
  {
    slug: "what-is-futures",
    category: "期貨入門",
    title: "什麼是期貨？新手 10 分鐘快速了解期貨交易",
    description:
      "從做多、做空、保證金與槓桿開始，快速理解期貨的基本運作方式。",
    date: "2026 年 7 月",
    readingTime: "約 8 分鐘",
  },
];

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
            <BookOpen className="h-6 w-6" />
          </div>

          <p className="mb-3 text-sm font-semibold tracking-widest text-blue-600">
            VERTEX ACADEMY
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            從零開始學習台灣期貨
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            不用死背艱澀名詞，從實際交易情境開始，逐步理解期貨商品、保證金、交易成本與風險管理。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-sm font-semibold text-blue-600">LESSON 01</p>
          <h2 className="mt-1 text-2xl font-bold">期貨入門</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                {article.category}
              </span>

              <h3 className="mt-5 text-xl font-bold leading-8 group-hover:text-blue-700">
                {article.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {article.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CalendarDays className="h-4 w-4" />
                  {article.date}
                </span>

                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4" />
                  {article.readingTime}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-2 font-semibold text-slate-900">
                開始閱讀
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}