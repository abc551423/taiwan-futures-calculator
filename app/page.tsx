"use client";

import { useState } from "react";

import TradeSettingCard from "../components/TradeSettingCard";
import TradeInfoCard from "../components/TradeInfoCard";
import ProfitTable from "../components/ProfitTable";
import { products, type ProductKey } from "../data/products";

export default function Home() {
  const [product, setProduct] = useState<ProductKey>("mini");

  // 進場價格
  const [price, setPrice] = useState("40000");

  // 交易口數
  const [lots, setLots] = useState("1");

  // 預設做多
  const [direction, setDirection] =
    useState<"long" | "short">("long");

  // 損益表最大顯示範圍
  const [range, setRange] = useState("300");

  // 單邊手續費
  const [fee, setFee] = useState("25");

  // 每格間隔點數
  const [step, setStep] = useState("20");

  // 保證金模式：一般 / 當沖
  const [marginMode, setMarginMode] =
    useState<"normal" | "daytrade">("daytrade");

  const priceValue = Number(price);
  const lotsValue = Number(lots);
  const rangeValue = Number(range);
  const stepValue = Number(step);
  const feeValue = Number(fee) || 0;

  const isValidInput =
    price !== "" &&
    lots !== "" &&
    range !== "" &&
    step !== "" &&
    fee !== "" &&
    priceValue > 0 ? priceValue.toLocaleString() : "—"
    lotsValue > 0 &&
    rangeValue > 0 &&
    stepValue > 0 &&
    feeValue >= 0;

  const estimatedRows = isValidInput
    ? Math.floor((rangeValue * 2) / stepValue) + 1
    : 0;

  const canGenerateTable =
    isValidInput && estimatedRows <= 1000;

  const currentProduct = products[product];

  // 原始保證金
  const originalMargin = currentProduct.margin;

  // 實際使用保證金
  const margin =
    marginMode === "daytrade"
      ? originalMargin / 2
      : originalMargin;

  // 期交稅率：0.002%
  const taxRate = 0.00002;

  const changes: number[] = [];

  if (stepValue > 0) {
    if (direction === "long") {
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
  }

  function calculateResult(change: number) {
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
      (entryAmount + exitAmount) * taxRate
    );

    // 單邊手續費 × 口數 × 進出場兩次
    const totalFee =
      feeValue * lotsValue * 2;

    const totalCost =
      tax + totalFee;

    const netProfit =
      grossProfit - totalCost;

    const returnRate =
      margin > 0 && lotsValue > 0
        ? (netProfit / (margin * lotsValue)) * 100
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
      priceValue <= 0 ||
      lotsValue <= 0 ||
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
    isValidInput ? findBreakEven() : null;

  const breakEvenPoints =
    breakEven?.points ?? 0;

  const breakEvenPrice =
    breakEven?.price ?? priceValue;

  const totalFee =
    feeValue * lotsValue * 2;

  const results = changes.map((change) => ({
    change,
    ...calculateResult(change),
  }));

  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-100 px-4 py-8 sm:p-8">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          台灣期貨當沖損益計算機
        </h1>

        <p className="mt-3 text-base text-slate-500 sm:text-lg">
          支援大台、小台與微台，即時計算期交稅、手續費、淨收益與保證金收益率
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            📈 大台／小台／微台
          </span>

          <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            ⚡ 即時計算
          </span>

          <span className="rounded-full bg-slate-200 px-4 py-2 text-sm font-medium text-slate-700">
            💰 收益率分析
          </span>
        </div>
      </div>

      <div className="mt-8 w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
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

          <TradeInfoCard
            productName={currentProduct.name}
            direction={direction}
            marginMode={marginMode}
            priceValue={priceValue}
            lotsValue={lotsValue}
            pointValue={currentProduct.pointValue}
            margin={margin}
            feeValue={feeValue}
            totalFee={totalFee}
            breakEvenPoints={breakEvenPoints}
            breakEvenPrice={breakEvenPrice}
          />
        </div>

        <div className="mt-8">
          {!isValidInput ? (
            <p className="text-center text-slate-500">
              請完整輸入交易條件
            </p>
          ) : !canGenerateTable ? (
            <p className="text-center text-red-600">
              顯示資料過多，請縮小範圍或增加間隔
            </p>
          ) : (
            <ProfitTable results={results} />
          )}
        </div>
      </div>

      <footer className="mt-10 w-full max-w-6xl border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          本工具僅供試算與資訊參考，不構成任何投資建議。
          實際交易成本、保證金與稅費，請以期交所及券商公告為準。
        </p>

        <p className="mt-2">
          保證金資料更新日期：2026 年 7 月
        </p>
      </footer>
    </main>
  );
}