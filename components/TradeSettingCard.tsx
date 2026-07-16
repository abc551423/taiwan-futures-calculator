import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  ChevronDown,
  CircleDollarSign,
  Gauge,
  Settings2,
  WalletCards,
} from "lucide-react";

import NumberInput from "./NumberInput";
import {
  products,
  type ProductKey,
} from "../data/products";

type Direction = "long" | "short";
type MarginMode = "normal" | "daytrade";

type TradeSettingCardProps = {
  product: ProductKey;
  setProduct: (value: ProductKey) => void;

  price: string;
  setPrice: (value: string) => void;

  lots: string;
  setLots: (value: string) => void;

  direction: Direction;
  setDirection: (value: Direction) => void;

  marginMode: MarginMode;
  setMarginMode: (value: MarginMode) => void;

  margin: number;

  range: string;
  setRange: (value: string) => void;

  step: string;
  setStep: (value: string) => void;

  fee: string;
  setFee: (value: string) => void;
};

export default function TradeSettingCard({
  product,
  setProduct,
  price,
  setPrice,
  lots,
  setLots,
  direction,
  setDirection,
  marginMode,
  setMarginMode,
  margin,
  range,
  setRange,
  step,
  setStep,
  fee,
  setFee,
}: TradeSettingCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* 卡片標題 */}
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <Settings2
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950">
              交易設定
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              輸入交易條件，即時計算淨損益、交易成本與收益率。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-7 p-5 sm:p-6">
        {/* 基本交易條件 */}
        <section aria-labelledby="basic-setting-title">
          <SectionTitle
            id="basic-setting-title"
            icon={
              <BarChart3 className="h-4 w-4" />
            }
            title="基本交易條件"
          />

          <div className="mt-4 space-y-5">
            {/* 商品 */}
            <div>
              <FieldLabel htmlFor="product">
                商品
              </FieldLabel>

              <div className="relative">
                <select
                  id="product"
                  value={product}
                  onChange={(event) =>
                    setProduct(
                      event.target
                        .value as ProductKey
                    )
                  }
                  className="h-11 w-full appearance-none rounded-xl border border-slate-300 bg-white px-3 pr-10 text-sm font-medium text-slate-900 shadow-sm outline-none transition duration-200 hover:border-slate-400 focus:border-slate-900 focus:ring-4 focus:ring-slate-900/10"
                >
                  {Object.entries(
                    products
                  ).map(
                    ([key, item]) => (
                      <option
                        key={key}
                        value={key}
                      >
                        {item.name}
                      </option>
                    )
                  )}
                </select>

                <ChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 價格與口數 */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <FieldLabel>
                  進場價格
                </FieldLabel>

                <NumberInput
                  value={price}
                  onChange={setPrice}
                  min={0}
                  placeholder="例如 40000"
                />
              </div>

              <div>
                <FieldLabel>
                  交易口數
                </FieldLabel>

                <NumberInput
                  value={lots}
                  onChange={setLots}
                  min={1}
                  placeholder="例如 1"
                />
              </div>
            </div>

            {/* 方向 */}
            <div>
              <FieldLabel>
                交易方向
              </FieldLabel>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setDirection("long")
                  }
                  aria-pressed={
                    direction === "long"
                  }
                  className={
                    direction === "long"
                      ? "flex h-11 items-center justify-center gap-2 rounded-xl border border-red-600 bg-red-600 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/20"
                      : "flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition duration-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 focus:outline-none focus:ring-4 focus:ring-red-500/10"
                  }
                >
                  <ArrowUpRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  做多
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setDirection("short")
                  }
                  aria-pressed={
                    direction === "short"
                  }
                  className={
                    direction ===
                    "short"
                      ? "flex h-11 items-center justify-center gap-2 rounded-xl border border-green-600 bg-green-600 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/20"
                      : "flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition duration-200 hover:border-green-300 hover:bg-green-50 hover:text-green-700 focus:outline-none focus:ring-4 focus:ring-green-500/10"
                  }
                >
                  <ArrowDownRight
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  做空
                </button>
              </div>
            </div>

            {/* 保證金模式 */}
            <div>
              <FieldLabel>
                保證金模式
              </FieldLabel>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setMarginMode(
                      "normal"
                    )
                  }
                  aria-pressed={
                    marginMode ===
                    "normal"
                  }
                  className={
                    marginMode ===
                    "normal"
                      ? "h-11 rounded-xl border border-slate-900 bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/15"
                      : "h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                  }
                >
                  一般
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setMarginMode(
                      "daytrade"
                    )
                  }
                  aria-pressed={
                    marginMode ===
                    "daytrade"
                  }
                  className={
                    marginMode ===
                    "daytrade"
                      ? "h-11 rounded-xl border border-slate-900 bg-slate-900 px-4 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-900/15"
                      : "h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-900/10"
                  }
                >
                  當沖
                </button>
              </div>
            </div>

            {/* 保證金摘要 */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
                  <WalletCards
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-slate-500">
                    目前每口保證金
                  </p>

                  <p className="mt-0.5 truncate text-lg font-bold tabular-nums text-slate-950">
                    {Number.isFinite(
                      margin
                    )
                      ? margin.toLocaleString()
                      : "—"}{" "}
                    元
                  </p>
                </div>

                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
                  {marginMode ===
                  "daytrade"
                    ? "當沖"
                    : "一般"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 損益表設定 */}
        <section aria-labelledby="table-setting-title">
          <SectionTitle
            id="table-setting-title"
            icon={
              <Gauge className="h-4 w-4" />
            }
            title="損益表設定"
          />

          <p className="mt-1 text-xs leading-5 text-slate-500">
            控制損益表顯示的價格範圍與每列間隔。
          </p>

          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <FieldLabel>
                顯示範圍（點）
              </FieldLabel>

              <NumberInput
                value={range}
                onChange={setRange}
                min={1}
                placeholder="例如 300"
              />
            </div>

            <div>
              <FieldLabel>
                每格間隔（點）
              </FieldLabel>

              <NumberInput
                value={step}
                onChange={setStep}
                min={1}
                placeholder="例如 20"
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* 交易成本 */}
        <section aria-labelledby="fee-setting-title">
          <SectionTitle
            id="fee-setting-title"
            icon={
              <CircleDollarSign className="h-4 w-4" />
            }
            title="交易成本"
          />

          <div className="mt-4">
            <FieldLabel>
              單邊手續費（元／口）
            </FieldLabel>

            <NumberInput
              value={fee}
              onChange={setFee}
              min={0}
              placeholder="例如 25"
            />

            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
              <p className="text-xs leading-5 text-amber-800">
                請輸入每口、單邊的實際手續費。系統會依交易口數，自動計算進場與出場兩次的來回手續費。
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

type FieldLabelProps = {
  children: React.ReactNode;
  htmlFor?: string;
};

function FieldLabel({
  children,
  htmlFor,
}: FieldLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-sm font-semibold text-slate-700"
    >
      {children}
    </label>
  );
}

type SectionTitleProps = {
  id: string;
  icon: React.ReactNode;
  title: string;
};

function SectionTitle({
  id,
  icon,
  title,
}: SectionTitleProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600"
        aria-hidden="true"
      >
        {icon}
      </span>

      <h3
        id={id}
        className="text-base font-bold text-slate-900"
      >
        {title}
      </h3>
    </div>
  );
}

function Divider() {
  return (
    <div className="border-t border-slate-200" />
  );
}