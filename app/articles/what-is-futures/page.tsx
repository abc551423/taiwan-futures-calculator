import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Scale,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "什麼是期貨？新手 10 分鐘快速了解期貨交易｜Vertex",
  description:
    "期貨是什麼？本文從做多、做空、保證金、槓桿與台灣常見期貨商品開始，帶新手快速理解期貨交易。",
  keywords: [
    "什麼是期貨",
    "期貨入門",
    "期貨新手",
    "期貨教學",
    "做多做空",
    "期貨保證金",
  ],
  alternates: {
    canonical: "/articles/what-is-futures",
  },
  openGraph: {
    title: "什麼是期貨？新手 10 分鐘快速了解期貨交易",
    description:
      "從做多、做空、保證金與槓桿開始，快速理解期貨的基本運作方式。",
    type: "article",
  },
};

const productRows = [
  {
    name: "大台指",
    pointValue: "200 元",
    audience: "資金較充足、能承受較大波動的交易人",
  },
  {
    name: "小台指",
    pointValue: "50 元",
    audience: "希望降低單口風險的一般交易人",
  },
  {
    name: "微台指",
    pointValue: "10 元",
    audience: "剛開始練習或資金較小的交易人",
  },
];

export default function WhatIsFuturesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <article>
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Link
              href="/articles"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
            >
              <ArrowLeft className="h-4 w-4" />
              返回 Vertex Academy
            </Link>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                期貨入門
              </span>

              <span className="text-sm font-semibold text-slate-400">
                Lesson 01
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
              什麼是期貨？
              <span className="block text-slate-500">
                新手 10 分鐘快速了解期貨交易
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              如果你認為市場明天會下跌，但手中沒有任何股票，還有辦法從下跌行情中獲利嗎？這正是理解期貨的起點。
            </p>

            <div className="mt-8 flex flex-wrap gap-5 border-t border-slate-100 pt-6 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                更新日期：2026 年 7 月
              </span>

              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                閱讀時間：約 8 分鐘
              </span>

              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                適合完全沒有基礎的新手
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
          <div className="min-w-0">
            <section className="article-section">
              <h2>如果你認為市場明天會跌，有辦法賺錢嗎？</h2>

              <p>
                大部分人最早接觸的投資方式都是股票：先買進，等待價格上漲，再以較高的價格賣出。
              </p>

              <div className="my-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="m-0 text-center text-lg font-semibold">
                  低價買進
                  <ArrowRight className="mx-3 inline h-5 w-5" />
                  高價賣出
                  <ArrowRight className="mx-3 inline h-5 w-5" />
                  獲得價差
                </p>
              </div>

              <p>
                這種交易方式最直覺，但也容易讓人產生一個印象：只有市場上漲時，交易人才有機會賺錢。
              </p>

              <p>
                期貨提供了另一種選擇。交易人不一定要先持有股票或商品，也可以針對未來價格的上漲或下跌建立部位。
              </p>
            </section>

            <section className="article-section" id="definition">
              <h2>什麼是期貨？</h2>

              <p>
                期貨是一種標準化契約。買賣雙方針對特定商品或指數，在約定的條件下交易其未來價格。
              </p>

              <p>
                對一般交易人而言，可以先把它理解成：
              </p>

              <blockquote>
                期貨交易的核心，是判斷標的價格接下來會上漲還是下跌，而不是直接買下一家公司。
              </blockquote>

              <p>
                例如臺股期貨追蹤的是臺灣加權股價指數。交易一口臺股期貨，不代表你真的買進所有上市公司的股票，而是建立一份與指數價格變化相關的契約。
              </p>
            </section>

            <section className="article-section" id="long-short">
              <h2>期貨可以做多，也可以做空</h2>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm">
                    <TrendingUp className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">做多 Long</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    預期價格上漲時先買進，之後以較高的價格賣出。
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-7">
                    <div>進場：20,000 點</div>
                    <div>出場：20,050 點</div>
                    <div className="mt-1 font-bold text-rose-600">
                      價格上漲 50 點
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                    <TrendingDown className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">做空 Short</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    預期價格下跌時先賣出，之後以較低的價格買回。
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4 text-sm leading-7">
                    <div>進場：20,000 點</div>
                    <div>出場：19,950 點</div>
                    <div className="mt-1 font-bold text-emerald-600">
                      價格下跌 50 點
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-7">
                因此，期貨交易人可以依照自己對行情的判斷選擇方向。市場上漲不代表一定獲利，市場下跌也不代表一定虧損，結果取決於進場方向與價格變化。
              </p>
            </section>

            <section className="article-section" id="margin">
              <h2>為什麼交易期貨不需要準備全部契約價值？</h2>

              <p>
                一口期貨契約的名目價值可能很高，但交易人通常不必支付完整契約價值，而是先繳交一定金額的保證金。
              </p>

              <div className="my-7 rounded-3xl bg-slate-900 p-7 text-white">
                <div className="flex items-start gap-4">
                  <Scale className="mt-1 h-7 w-7 shrink-0 text-blue-300" />

                  <div>
                    <h3 className="text-xl font-bold">保證金不是商品售價</h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      保證金比較像是履行契約所需提供的資金擔保。你的損益仍然會依照完整契約規格計算。
                    </p>
                  </div>
                </div>
              </div>

              <p>
                因為只需要投入部分資金，就能承受完整契約的價格變化，因此期貨具備槓桿效果。
              </p>

              <div className="my-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <TriangleAlert className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
                  <div>
                    <h3 className="font-bold text-amber-900">
                      槓桿會同時放大獲利與虧損
                    </h3>
                    <p className="mt-2 leading-7 text-amber-900/80">
                      保證金較低不代表風險較低。部位過大時，即使市場只出現短暫波動，也可能造成明顯虧損。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="article-section" id="products">
              <h2>台灣常見的指數期貨商品</h2>

              <p>
                初次接觸台灣期貨時，最常遇到的通常是大台指、小台指與微台指。它們追蹤相近的市場價格，主要差別在於每點價值與資金需求。
              </p>

              <div className="my-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[640px] text-left">
                  <thead className="bg-slate-100 text-sm text-slate-600">
                    <tr>
                      <th className="px-5 py-4 font-semibold">商品</th>
                      <th className="px-5 py-4 font-semibold">每點價值</th>
                      <th className="px-5 py-4 font-semibold">適合對象</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100">
                    {productRows.map((product) => (
                      <tr key={product.name}>
                        <td className="px-5 py-4 font-bold">
                          {product.name}
                        </td>
                        <td className="px-5 py-4">
                          {product.pointValue}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {product.audience}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                每點價值越高，相同點數變化所產生的損益就越大。新手不應只比較可能獲得多少利潤，也要先確認自己能否承受相同幅度的虧損。
              </p>
            </section>

            <section className="article-section" id="profit">
              <h2>期貨損益怎麼計算？</h2>

              <p>最基本的概念是：</p>

              <div className="my-7 rounded-3xl border border-blue-200 bg-blue-50 p-7 text-center">
                <p className="m-0 text-lg font-bold text-blue-950 sm:text-xl">
                  價格變動點數 × 每點價值 × 口數
                </p>
              </div>

              <p>
                假設你在 20,000 點做多一口小台指，並在 20,020 點平倉：
              </p>

              <div className="my-7 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="flex justify-between gap-6">
                    <span className="text-slate-500">價格變動</span>
                    <span className="font-semibold">20 點</span>
                  </div>

                  <div className="flex justify-between gap-6">
                    <span className="text-slate-500">小台每點價值</span>
                    <span className="font-semibold">50 元</span>
                  </div>

                  <div className="border-t border-slate-100 pt-3">
                    <div className="flex justify-between gap-6">
                      <span className="font-semibold">交易毛損益</span>
                      <span className="text-xl font-bold text-rose-600">
                        1,000 元
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p>
                這還不是最後實際拿到的金額，因為交易時還會產生手續費與期貨交易稅。扣除交易成本後，才是淨損益。
              </p>
            </section>

            <section className="article-section">
              <div className="rounded-3xl bg-slate-900 p-7 text-white sm:p-9">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Calculator className="h-6 w-6" />
                </div>

                <h2 className="mt-6 text-2xl font-bold sm:text-3xl">
                  不想自己計算手續費與期交稅？
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                  使用 Vertex
                  台灣期貨損益計算機，選擇商品、方向、進場價格與口數，即可快速試算淨損益、收益率、交易成本與回本點位。
                </p>

                <Link
                  href="/"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  開啟期貨損益計算機
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>

            <section className="article-section" id="risk">
              <h2>期貨適合所有人嗎？</h2>

              <p>
                不一定。期貨本身只是一種工具，但保證金與槓桿制度會讓資金變化速度明顯加快。
              </p>

              <div className="my-7 grid gap-3 sm:grid-cols-2">
                {[
                  "先了解商品每點價值",
                  "確認保證金與可承受風險",
                  "預先設定停損位置",
                  "將手續費與期交稅納入計算",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <p>
                新手最重要的目標，不是急著預測下一次行情，而是先理解每一口部位會產生多少損益，以及自己最多能承受多少虧損。
              </p>
            </section>

            <section className="article-section">
              <h2>結語</h2>

              <p>
                期貨並不等於單純的高風險投機。它原本就是用來轉移價格風險、進行避險與價格發現的金融工具。
              </p>

              <p>
                真正影響交易風險的，通常不是「期貨」兩個字，而是交易人使用了多大的部位、是否了解商品規格，以及有沒有建立明確的風險管理方式。
              </p>

              <p>
                學會做多、做空、保證金和每點價值後，下一步就可以進一步比較台灣最常見的三種指數期貨商品。
              </p>
            </section>

            <Link
              href="/articles"
              className="mt-12 flex items-center justify-between gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div>
                <p className="text-sm font-semibold text-blue-600">
                  下一篇預告
                </p>
                <p className="mt-2 text-lg font-bold">
                  大台、小台、微台有什麼差別？
                </p>
              </div>

              <ArrowRight className="h-6 w-6 shrink-0" />
            </Link>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-bold">本篇內容</p>

              <nav className="mt-4 space-y-3 text-sm text-slate-600">
                <a className="toc-link" href="#definition">
                  什麼是期貨
                </a>
                <a className="toc-link" href="#long-short">
                  做多與做空
                </a>
                <a className="toc-link" href="#margin">
                  保證金與槓桿
                </a>
                <a className="toc-link" href="#products">
                  常見期貨商品
                </a>
                <a className="toc-link" href="#profit">
                  損益計算
                </a>
                <a className="toc-link" href="#risk">
                  期貨風險
                </a>
              </nav>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}