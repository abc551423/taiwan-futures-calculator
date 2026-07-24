"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  Info,
  Sparkles,
  TriangleAlert,
} from "lucide-react";

import TradeSettingCard from "../components/TradeSettingCard";
import TradeInfoCard from "../components/TradeInfoCard";
import ProfitTable from "../components/ProfitTable";
import { products, type ProductKey } from "../data/products";

type Direction = "long" | "short";
type MarginMode = "normal" | "daytrade";

export default function Home() {
  const [product, setProduct] = useState<ProductKey>("mini");
  const [price, setPrice] = useState("40000");
  const [lots, setLots] = useState("1");
  const [direction, setDirection] = useState<Direction>("long");
  const [range, setRange] = useState("300");
  const [fee, setFee] = useState("25");
  const [step, setStep] = useState("20");
  const [marginMode, setMarginMode] =
    useState<MarginMode>("daytrade");

  const priceValue = Number(price);
  const lotsValue = Number(lots);
  const rangeValue = Number(range);
  const stepValue = Number(step);
  const feeValue = Number(fee);

  const currentProduct = products[product];

  const isValidInput =
    price.trim() !== "" &&
    lots.trim() !== "" &&
    range.trim() !== "" &&
    step.trim() !== "" &&
    fee.trim() !== "" &&
    Number.isFinite(priceValue) &&
    Number.isFinite(lotsValue) &&
    Number.isFinite(rangeValue) &&
    Number.isFinite(stepValue) &&
    Number.isFinite(feeValue) &&
    priceValue > 0 &&
    lotsValue > 0 &&
    rangeValue > 0 &&
    stepValue > 0 &&
    feeValue >= 0;

  const estimatedRows = isValidInput
    ? Math.floor((rangeValue * 2) / stepValue) + 1
    : 0;

  const canGenerateTable =
    isValidInput && estimatedRows <= 1000;

  const originalMargin = currentProduct.margin;

  const margin =
    marginMode === "daytrade"
      ? originalMargin / 2
      : originalMargin;

  const taxRate = 0.00002;

  const calculateResult = useCallback(
    (change: number) => {
      const targetPrice = priceValue + change;

      const grossProfit =
        (direction === "long" ? change : -change) *
        currentProduct.pointValue *
        lotsValue;

      const entryAmount =
        priceValue *
        currentProduct.pointValue *
        lotsValue;

      const exitAmount =
        targetPrice *
        currentProduct.pointValue *
        lotsValue;

      const tax = Math.round(
        (entryAmount + exitAmount) * taxRate,
      );

      const totalFee =
        feeValue *
        lotsValue *
        2;

      const totalCost =
        tax + totalFee;

      const netProfit =
        grossProfit - totalCost;

      const returnRate =
        margin > 0 && lotsValue > 0
          ? (netProfit /
              (margin * lotsValue)) *
            100
          : 0;

      return {
        targetPrice,
        grossProfit,
        tax,
        totalFee,
        totalCost,
        netProfit,
        returnRate,
      };
    },
    [
      currentProduct.pointValue,
      direction,
      feeValue,
      lotsValue,
      margin,
      priceValue,
    ],
  );

  function findBreakEven() {
    if (
      !isValidInput ||
      currentProduct.pointValue <= 0
    ) {
      return null;
    }

    const maxSearchPoints = 10000;

    for (
      let points = 0;
      points <= maxSearchPoints;
      points++
    ) {
      const change =
        direction === "long"
          ? points
          : -points;

      const result =
        calculateResult(change);

      if (result.netProfit >= 0) {
        return {
          points,
          change,
          price: result.targetPrice,
          netProfit: result.netProfit,
          tax: result.tax,
          totalFee: result.totalFee,
          totalCost: result.totalCost,
        };
      }
    }

    return null;
  }

  const breakEven =
    isValidInput
      ? findBreakEven()
      : null;

  const breakEvenPoints =
    breakEven?.points ?? 0;

  const breakEvenPrice =
    breakEven?.price ??
    priceValue;

  const breakEvenTax =
    breakEven?.tax ?? 0;

  const breakEvenTotalCost =
    breakEven?.totalCost ?? 0;

  const totalFee = isValidInput
    ? feeValue *
      lotsValue *
      2
    : 0;

  const results = useMemo(() => {
    if (
      !isValidInput ||
      !canGenerateTable
    ) {
      return [];
    }

    const changes: number[] = [];

    if (direction === "long") {
      for (
        let i = rangeValue;
        i >= -rangeValue;
        i -= stepValue
      ) {
        changes.push(i);
      }
    } else {
      for (
        let i = -rangeValue;
        i <= rangeValue;
        i += stepValue
      ) {
        changes.push(i);
      }
    }

    return changes.map(
      (change) => ({
        change,
        ...calculateResult(change),
      }),
    );
  }, [
    calculateResult,
    canGenerateTable,
    direction,
    isValidInput,
    rangeValue,
    stepValue,
  ]);

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-950">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div
          aria-hidden="true"
          className="absolute inset-0"
        >
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-300 backdrop-blur">
              <Sparkles
                className="h-4 w-4 text-cyan-300"
                aria-hidden="true"
              />

              Vertex Futures Calculator
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              台灣期貨損益
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                一次算清楚
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              支援大台、小台與微台，即時計算期交稅、
              手續費、淨損益、保證金收益率與損益平衡價格。
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                開始試算

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </a>

              <Link
                href="/articles"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
              >
                <BookOpen className="h-4 w-4" />
                期貨新手教學
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
              <HeroFeature text="大台／小台／微台" />
              <HeroFeature text="即時更新結果" />
              <HeroFeature text="免註冊使用" />
            </div>
          </div>

          {/* Hero 裝飾預覽卡：固定資料，不連動計算機 */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.55rem] border border-white/10 bg-slate-900/90 p-5 sm:p-6">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      損益試算預覽
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-lg font-bold text-white">
                        小台指期
                      </span>

                      <span className="rounded-full bg-rose-500/10 px-2.5 py-1 text-xs font-bold text-rose-300">
                        做多
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-50" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                    </span>

                    <span className="text-xs font-bold tracking-wider text-emerald-300">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Entry / exit */}
                <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                    <div>
                      <p className="text-xs text-slate-500">
                        進場價格
                      </p>

                      <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                        40,000
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>

                    <div className="text-right">
                      <p className="text-xs text-slate-500">
                        出場價格
                      </p>

                      <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                        40,120
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-sm text-slate-400">
                      價格變動
                    </span>

                    <span className="rounded-full bg-rose-500/10 px-3 py-1 text-sm font-bold text-rose-300">
                      +120 點
                    </span>
                  </div>
                </div>

                {/* Main profit */}
                <div className="mt-4 rounded-2xl border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 to-cyan-400/[0.04] p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-medium text-emerald-200/60">
                        預估淨損益
                      </p>

                      <p className="mt-2 text-3xl font-black tracking-tight text-emerald-300 sm:text-4xl">
                        + NT$ 5,832
                      </p>
                    </div>

                    <div className="inline-flex w-fit items-center rounded-xl border border-emerald-300/15 bg-emerald-300/10 px-3 py-2">
                      <div>
                        <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-200/60">
                          ROI
                        </p>

                        <p className="mt-0.5 text-lg font-bold text-emerald-300">
                          +7.34%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-500">
                      回本價格
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      40,017
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-slate-500">
                      交易成本
                    </p>

                    <p className="mt-2 text-lg font-bold text-white">
                      NT$ 168
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-5 grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
                  <PreviewCheck text="已扣除期交稅" />
                  <PreviewCheck text="已扣除手續費" />
                  <PreviewCheck text="自動計算回本" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section
        id="calculator"
        className="scroll-mt-6"
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Calculator"
            title="設定交易條件"
            description="輸入商品、方向、價格與交易成本，系統會同步更新試算結果。"
          />

          <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] sm:p-3">
              <TradeSettingCard
                product={product}
                setProduct={setProduct}
                price={price}
                setPrice={setPrice}
                lots={lots}
                setLots={setLots}
                direction={direction}
                setDirection={setDirection}
                marginMode={marginMode}
                setMarginMode={setMarginMode}
                margin={margin}
                range={range}
                setRange={setRange}
                step={step}
                setStep={setStep}
                fee={fee}
                setFee={setFee}
              />
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] sm:p-3">
              <TradeInfoCard
                productName={currentProduct.name}
                direction={direction}
                marginMode={marginMode}
                priceValue={priceValue}
                lotsValue={lotsValue}
                pointValue={
                  currentProduct.pointValue
                }
                margin={margin}
                feeValue={
                  Number.isFinite(feeValue)
                    ? feeValue
                    : 0
                }
                totalFee={totalFee}
                breakEvenTax={breakEvenTax}
                breakEvenTotalCost={
                  breakEvenTotalCost
                }
                breakEvenPoints={
                  breakEvenPoints
                }
                breakEvenPrice={
                  breakEvenPrice
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Profit table */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Profit Table"
              title="損益試算表"
              description="查看不同價格變動下的淨損益、交易成本與保證金收益率。"
            />

            {isValidInput &&
              canGenerateTable && (
                <div className="flex flex-wrap gap-2">
                  <TableSummaryBadge
                    label="商品"
                    value={currentProduct.name}
                  />

                  <TableSummaryBadge
                    label="方向"
                    value={
                      direction === "long"
                        ? "做多"
                        : "做空"
                    }
                  />

                  <TableSummaryBadge
                    label="資料"
                    value={`${results.length} 筆`}
                  />
                </div>
              )}
          </div>

          <div className="mt-8">
            {!isValidInput ? (
              <StatusCard
                type="info"
                title="請完整輸入交易條件"
                description="進場價格、口數、顯示範圍與間隔皆須大於 0，手續費不可小於 0。"
              />
            ) : !canGenerateTable ? (
              <StatusCard
                type="error"
                title="顯示資料過多"
                description="目前預估超過 1,000 筆資料，請縮小損益範圍或增加每格間隔點數。"
              />
            ) : (
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)]">
                <ProfitTable
                  results={results}
                  step={stepValue}
                  range={rangeValue}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Academy CTA */}
      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-10 shadow-2xl shadow-slate-950/10 sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="absolute inset-0"
            >
              <div className="absolute -right-16 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-cyan-200">
                  <BookOpen className="h-4 w-4" />
                  Vertex Academy
                </div>

                <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                  看得懂數字，才能真正控制交易風險
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  從契約規格、保證金、期交稅到損益計算，
                  透過完整的新手課程建立台灣期貨基礎。
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
                  <AcademyFeature text="10 堂基礎課程" />
                  <AcademyFeature text="循序漸進閱讀" />
                  <AcademyFeature text="免費開放" />
                </div>
              </div>

              <Link
                href="/articles"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50"
              >
                開始學習

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation explanation */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Methodology"
            title="計算方式說明"
            description="試算結果會同時計入價格變動、交易稅與自訂手續費。"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ExplanationCard
              icon={
                <Calculator className="h-5 w-5" />
              }
              title="淨損益"
              description="商品點值乘上價格變動與交易口數，再扣除進出場期交稅及手續費。"
            />

            <ExplanationCard
              icon={
                <CircleDollarSign className="h-5 w-5" />
              }
              title="損益平衡"
              description="系統逐點搜尋，找出扣除交易成本後，淨損益首次大於或等於零的價格。"
            />

            <ExplanationCard
              icon={
                <Gauge className="h-5 w-5" />
              }
              title="保證金收益率"
              description="以淨損益除以實際使用保證金與口數，呈現資金使用效率。"
            />
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Info
                className="h-5 w-5"
                aria-hidden="true"
              />
            </div>

            <div>
              <h3 className="font-semibold text-amber-950">
                試算結果僅供參考
              </h3>

              <p className="mt-1 text-sm leading-6 text-amber-800">
                實際手續費、保證金與交易稅費可能因期貨商、
                優惠方案及交易所公告而有所不同。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            {/* 品牌資訊 */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-950">
                  <Calculator className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Vertex Futures Calculator
                  </p>

                  <p className="text-xs text-slate-500">
                    台灣期貨損益計算工具
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6">
                本工具僅供試算與資訊參考，不構成任何投資建議。
                實際交易成本、保證金與稅費，請以臺灣期貨交易所及期貨商公告為準。
              </p>
            </div>

            {/* Footer 導覽 */}
            <nav
              aria-label="頁尾導覽"
              className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3"
            >
              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  工具
                </p>

                <a
                  href="#calculator"
                  className="mt-3 block text-sm leading-6 text-slate-400 transition hover:text-white"
                >
                  損益計算機
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  學習
                </p>

                <Link
                  href="/articles"
                  className="mt-3 block text-sm leading-6 text-slate-400 transition hover:text-white"
                >
                  Vertex Academy
                </Link>
              </div>

              <div>
                <p className="text-sm font-semibold leading-6 text-white">
                  網站
                </p>

                <Link
                  href="/privacy"
                  className="mt-3 block text-sm leading-6 text-slate-400 transition hover:text-white"
                >
                  隱私權政策
                </Link>
              </div>
            </nav>
          </div>
          {/* 底部資訊 */}
          <div className="mt-9 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Vertex Futures Calculator</p>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span>保證金資料更新：2026 年 7 月</span>
              <span>Version 1.3.0</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-600">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

type HeroFeatureProps = {
  text: string;
};

function HeroFeature({
  text,
}: HeroFeatureProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
      {text}
    </span>
  );
}

type PreviewCheckProps = {
  text: string;
};

function PreviewCheck({
  text,
}: PreviewCheckProps) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-300">
        <CheckCircle2 className="h-3.5 w-3.5" />
      </span>

      <span>{text}</span>
    </div>
  );
}


type TableSummaryBadgeProps = {
  label: string;
  value: string;
};

function TableSummaryBadge({
  label,
  value,
}: TableSummaryBadgeProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2">
      <span className="text-xs text-slate-500">
        {label}
      </span>

      <span className="ml-2 text-sm font-bold text-slate-900">
        {value}
      </span>
    </div>
  );
}

type AcademyFeatureProps = {
  text: string;
};

function AcademyFeature({
  text,
}: AcademyFeatureProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
      {text}
    </span>
  );
}

type ExplanationCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ExplanationCard({
  icon,
  title,
  description,
}: ExplanationCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950 text-white">
        {icon}
      </div>

      <h3 className="mt-5 font-bold text-slate-950">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
}

type StatusCardProps = {
  type: "info" | "error";
  title: string;
  description: string;
};

function StatusCard({
  type,
  title,
  description,
}: StatusCardProps) {
  const isError =
    type === "error";

  return (
    <div
      className={
        isError
          ? "rounded-[1.75rem] border border-red-200 bg-red-50 p-6 shadow-sm"
          : "rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm"
      }
    >
      <div className="flex items-start gap-3">
        <div
          className={
            isError
              ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700"
              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-600"
          }
        >
          {isError ? (
            <TriangleAlert
              className="h-5 w-5"
              aria-hidden="true"
            />
          ) : (
            <Info
              className="h-5 w-5"
              aria-hidden="true"
            />
          )}
        </div>

        <div>
          <p
            className={
              isError
                ? "font-semibold text-red-900"
                : "font-semibold text-slate-900"
            }
          >
            {title}
          </p>

          <p
            className={
              isError
                ? "mt-1 text-sm leading-6 text-red-700"
                : "mt-1 text-sm leading-6 text-slate-600"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
