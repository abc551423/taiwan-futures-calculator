"use client";

import { useMemo, useState } from "react";
import {
  BarChart3,
  Calculator,
  CircleDollarSign,
  Gauge,
  Info,
  ShieldCheck,
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
  const [product, setProduct] =
    useState<ProductKey>("mini");

  // 進場價格
  const [price, setPrice] =
    useState("40000");

  // 交易口數
  const [lots, setLots] =
    useState("1");

  // 做多 / 做空
  const [direction, setDirection] =
    useState<Direction>("long");

  // 損益表最大顯示範圍
  const [range, setRange] =
    useState("300");

  // 單邊手續費
  const [fee, setFee] =
    useState("25");

  // 每格間隔點數
  const [step, setStep] =
    useState("20");

  // 保證金模式
  const [marginMode, setMarginMode] =
    useState<MarginMode>("daytrade");

  const priceValue = Number(price);
  const lotsValue = Number(lots);
  const rangeValue = Number(range);
  const stepValue = Number(step);
  const feeValue = Number(fee);

  const currentProduct =
    products[product];

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
    ? Math.floor(
        (rangeValue * 2) / stepValue
      ) + 1
    : 0;

  const canGenerateTable =
    isValidInput &&
    estimatedRows <= 1000;

  // 原始保證金
  const originalMargin =
    currentProduct.margin;

  // 實際使用保證金
  const margin =
    marginMode === "daytrade"
      ? originalMargin / 2
      : originalMargin;

  // 期交稅率：0.002%
  const taxRate = 0.00002;

  function calculateResult(
    change: number
  ) {
    const targetPrice =
      priceValue + change;

    const grossProfit =
      (direction === "long"
        ? change
        : -change) *
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
      (entryAmount + exitAmount) *
        taxRate
    );

    // 單邊手續費 × 口數 × 進出場兩次
    const totalFee =
      feeValue *
      lotsValue *
      2;

    const totalCost =
      tax + totalFee;

    const netProfit =
      grossProfit - totalCost;

    const returnRate =
      margin > 0 &&
      lotsValue > 0
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
  }

  function findBreakEven() {
    if (
      !isValidInput ||
      currentProduct.pointValue <= 0
    ) {
      return null;
    }

    const maxSearchPoints =
      10000;

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

      if (
        result.netProfit >= 0
      ) {
        return {
          points,
          change,
          price:
            result.targetPrice,
          netProfit:
            result.netProfit,
          tax: result.tax,
          totalFee:
            result.totalFee,
          totalCost:
            result.totalCost,
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

  const totalFee =
    isValidInput
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

    const changes: number[] =
      [];

    if (
      direction === "long"
    ) {
      // 做多：由高到低
      for (
        let i = rangeValue;
        i >= -rangeValue;
        i -= stepValue
      ) {
        changes.push(i);
      }
    } else {
      // 做空：由低到高
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
        ...calculateResult(
          change
        ),
      })
    );
  }, [
    canGenerateTable,
    currentProduct.pointValue,
    direction,
    feeValue,
    isValidInput,
    lotsValue,
    margin,
    priceValue,
    rangeValue,
    stepValue,
  ]);

  return (
    <main className="min-h-screen bg-slate-100">
      {/* 頂部裝飾背景 */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10">
              <Calculator
                className="h-7 w-7"
                aria-hidden="true"
              />
            </div>

            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              台灣期貨損益計算機
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              支援大台、小台與微台，
              即時計算期交稅、手續費、
              淨損益、保證金收益率與損益平衡價格。
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <FeatureBadge
                icon={
                  <BarChart3 className="h-4 w-4" />
                }
                text="大台／小台／微台"
              />

              <FeatureBadge
                icon={
                  <Sparkles className="h-4 w-4" />
                }
                text="即時計算"
              />

              <FeatureBadge
                icon={
                  <CircleDollarSign className="h-4 w-4" />
                }
                text="交易成本分析"
              />

              <FeatureBadge
                icon={
                  <Gauge className="h-4 w-4" />
                }
                text="保證金收益率"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        {/* 主要操作區 */}
        <section
          aria-label="期貨損益試算設定"
          className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8"
        >
          <div className="transition duration-200 hover:-translate-y-0.5">
            <TradeSettingCard
              product={product}
              setProduct={
                setProduct
              }
              price={price}
              setPrice={setPrice}
              lots={lots}
              setLots={setLots}
              direction={
                direction
              }
              setDirection={
                setDirection
              }
              marginMode={
                marginMode
              }
              setMarginMode={
                setMarginMode
              }
              margin={margin}
              range={range}
              setRange={setRange}
              step={step}
              setStep={setStep}
              fee={fee}
              setFee={setFee}
            />
          </div>

          <div className="transition duration-200 hover:-translate-y-0.5">
            <TradeInfoCard
              productName={
                currentProduct.name
              }
              direction={
                direction
              }
              marginMode={
                marginMode
              }
              priceValue={
                priceValue
              }
              lotsValue={
                lotsValue
              }
              pointValue={
                currentProduct.pointValue
              }
              margin={margin}
              feeValue={
                Number.isFinite(
                  feeValue
                )
                  ? feeValue
                  : 0
              }
              totalFee={
                totalFee
              }
              breakEvenTax={
                breakEvenTax
              }
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
        </section>

        {/* 損益表區塊 */}
        <section
          aria-labelledby="profit-table-title"
          className="mt-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
              <BarChart3
                className="h-5 w-5"
                aria-hidden="true"
              />
            </div>

            <div>
              <h2
                id="profit-table-title"
                className="text-xl font-bold text-slate-950"
              >
                損益試算表
              </h2>

              <p className="mt-0.5 text-sm text-slate-500">
                根據目前交易條件，
                顯示不同價格下的淨損益與收益率。
              </p>
            </div>
          </div>

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
            <div className="transition duration-200 hover:-translate-y-0.5">
              <ProfitTable
                results={results}
                step={stepValue}
                range={rangeValue}
              />
            </div>
          )}
        </section>

        {/* 說明提示 */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <Info
                className="h-5 w-5"
                aria-hidden="true"
              />
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                計算方式說明
              </h2>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                淨損益已扣除期交稅與自訂手續費。
                期交稅依進場與出場成交金額計算，
                回本價格則逐點搜尋至淨損益大於或等於零。
              </p>
            </div>
          </div>
        </section>
      </div>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <ShieldCheck
                className="h-5 w-5 text-slate-600"
                aria-hidden="true"
              />

              Vertex Futures Calculator
            </div>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              本工具僅供試算與資訊參考，
              不構成任何投資建議。
              實際交易成本、保證金與稅費，
              請以臺灣期貨交易所及期貨商公告為準。
            </p>
          </div>

          <div className="shrink-0 text-sm text-slate-500 lg:text-right">
            <p>
              保證金資料更新：
              2026 年 7 月
            </p>

            <p className="mt-1">
              Version 1.2.0
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

type FeatureBadgeProps = {
  icon: React.ReactNode;
  text: string;
};

function FeatureBadge({
  icon,
  text,
}: FeatureBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
      <span
        className="text-slate-500"
        aria-hidden="true"
      >
        {icon}
      </span>

      {text}
    </span>
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
          ? "rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm"
          : "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      }
    >
      <div className="flex items-start gap-3">
        <div
          className={
            isError
              ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-700"
              : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600"
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
                : "mt-1 text-sm leading-6 text-slate-500"
            }
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}