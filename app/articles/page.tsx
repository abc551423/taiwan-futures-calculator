import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Clock3,
  GraduationCap,
  Layers3,
  Route,
  Sparkles,
} from "lucide-react";

import BackLink from "@/components/navigation/BackLink";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: "期貨學院｜台指期新手入門教學",
  description:
    "從零開始學習台指期交易，完整了解期貨商品、交易時間、保證金、手續費、損益計算、槓桿、停損與強制平倉。",
  keywords: [
    "期貨教學",
    "台指期教學",
    "期貨新手",
    "台指期入門",
    "期貨保證金",
    "期貨損益計算",
    "期貨學院",
  ],
};

export default function ArticlesPage() {
  const articles = getAllArticles().sort(
    (a, b) => a.lesson - b.lesson,
  );

  const totalLessons = articles.length;
  const totalReadingTime = articles.reduce(
    (total, article) => total + article.readingTime,
    0,
  );
  
  const firstArticle = articles[0];

  return (
    <main className="min-h-screen bg-slate-50/70">
      {/* 頂部 Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 left-1/4 h-[30rem] w-[30rem] rounded-full bg-amber-400/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-6 md:pb-28 md:pt-10 lg:px-8">
          <BackLink
            href="/"
            label="返回首頁"
            className="mb-12 text-slate-300 hover:text-white"
          />

          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-amber-300 backdrop-blur">
                <GraduationCap className="h-4 w-4" />
                Vertex Academy
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                從零開始，
                <span className="block bg-gradient-to-r from-blue-300 via-white to-amber-200 bg-clip-text text-transparent">
                  學會台指期交易
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                依照完整學習路徑，逐步理解期貨商品、交易制度、損益計算與風險控制。每堂課只需要幾分鐘，適合第一次接觸台指期的新手。
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {firstArticle && (
                  <Link
                    href={`/articles/${firstArticle.slug}`}
                    className="group inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3.5 font-bold text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-amber-200 hover:shadow-lg hover:shadow-amber-300/10"
                  >
                    開始第一課
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                )}

                <Link
                  href="/#calculator"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 font-bold text-white backdrop-blur transition hover:bg-white/10"
                >
                  <Calculator className="h-4 w-4" />
                  使用損益計算機
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  完全免費
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  適合零基礎
                </span>

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  依序建立觀念
                </span>
              </div>
            </div>

            {/* Hero 統計卡 */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-400">
                    新手課程
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    完整學習路徑
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Route className="h-6 w-6" />
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-black text-white">
                    {totalLessons}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    堂完整課程
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-3xl font-black text-white">
                    {totalReadingTime}
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    分鐘總閱讀時間
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-300">
                    課程建置進度
                  </span>
                  <span className="font-bold text-amber-300">
                    {totalLessons} / {totalLessons}
                  </span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-amber-300" />
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-300/[0.07] p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" />

                  <p className="text-sm leading-6 text-slate-300">
                    建議從第一課依序閱讀，避免只知道下單方式，卻不了解背後的交易制度與風險。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要內容 */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* 學習路徑 */}
        <section>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-blue-600">
                <Route className="h-4 w-4" />
                Beginner Roadmap
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
                你的期貨學習路徑
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-600">
                課程從基本商品與交易規則開始，逐步延伸到損益、槓桿與風險管理，讓觀念彼此連接，而不是零散地背誦名詞。
              </p>
            </div>

            <div className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-600 shadow-sm md:self-auto">
              <Layers3 className="h-4 w-4 text-blue-600" />
              共 {totalLessons} 個學習階段
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5">
              {articles.map((article, index) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className={[
                    "group relative min-h-48 p-6",
                    "border-slate-100 transition duration-200",
                    "hover:z-10 hover:bg-blue-50/60",
                    "sm:border-r",
                    index < articles.length - 5
                      ? "border-b lg:border-b"
                      : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.15em] text-blue-600">
                      Lesson {String(article.lesson).padStart(2, "0")}
                    </span>

                    <ArrowRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600" />
                  </div>

                  <h3 className="mt-7 line-clamp-3 text-lg font-black leading-7 text-slate-900 transition group-hover:text-blue-700">
                    {article.title}
                  </h3>

                  <p className="absolute bottom-6 left-6 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Clock3 className="h-3.5 w-3.5" />
                    {article.readingTime} 分鐘
                  </p>

                  <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 課程卡片 */}
        <section className="mt-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.18em] text-blue-600">
              <BookOpen className="h-4 w-4" />
              All Lessons
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              所有期貨入門課程
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              可以依照順序學習，也可以直接選擇目前最需要理解的主題。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/articles/${article.slug}`}
                className={[
                  "group relative flex min-h-[22rem] flex-col overflow-hidden",
                  "rounded-[1.75rem] border border-slate-200 bg-white p-7",
                  "transition duration-300",
                  "hover:-translate-y-1.5 hover:border-blue-200",
                  "hover:shadow-xl hover:shadow-slate-200/70",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/70 blur-3xl transition group-hover:bg-blue-200/80" />

                <div className="relative flex items-start justify-between">
                  <span className="inline-flex rounded-full bg-slate-950 px-3 py-1.5 text-xs font-black tracking-wide text-white">
                    Lesson {String(article.lesson).padStart(2, "0")}
                  </span>

                  <span className="text-6xl font-black leading-none text-slate-100 transition duration-300 group-hover:text-blue-100">
                    {String(article.lesson).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="text-xl font-black leading-8 tracking-tight text-slate-950 transition group-hover:text-blue-700">
                    {article.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                    {article.description}
                  </p>
                </div>

                <div className="relative mt-auto pt-8">
                  <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                      <Clock3 className="h-4 w-4 text-blue-600" />
                      約 {article.readingTime} 分鐘
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-sm font-black text-blue-600">
                      開始閱讀
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 底部 CTA */}
        <section className="relative mt-24 overflow-hidden rounded-[2.25rem] bg-slate-950 px-6 py-12 text-white shadow-2xl shadow-slate-950/15 sm:px-9 md:px-12 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-40 left-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-amber-300">
                <Calculator className="h-6 w-6" />
              </div>

              <h2 className="mt-6 max-w-3xl text-3xl font-black tracking-tight md:text-4xl">
                觀念學會了，接著實際試算
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                輸入商品、交易方向、進出場價格與口數，快速查看毛損益、交易成本與實際淨損益。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/#calculator"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-amber-300 px-6 py-3.5 font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                使用損益計算機
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>

              {firstArticle && (
                <Link
                  href={`/articles/${firstArticle.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  <BookOpen className="h-4 w-4" />
                  從第一課開始
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}