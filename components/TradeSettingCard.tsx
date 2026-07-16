import NumberInput from "./NumberInput";

import { products, type ProductKey } from "../data/products";

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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        交易設定
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        輸入進場條件，即時計算淨收益與收益率
      </p>

      <div className="my-5 border-t border-slate-200" />

      <label className="mb-2 block text-sm font-medium text-slate-600">
        商品
      </label>

      <select
        value={product}
        onChange={(e) =>
          setProduct(e.target.value as ProductKey)
        }
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
      >
        {Object.entries(products).map(([key, item]) => (
          <option key={key} value={key}>
            {item.name}
          </option>
        ))}
      </select>

      <label className="mb-2 mt-5 block text-sm font-medium text-slate-600">
        進場價格
      </label>

      <NumberInput
        value={price}
        onChange={setPrice}
        min={0}
        placeholder="例如 22500"
      />

      <label className="mb-2 mt-5 block text-sm font-medium text-slate-600">
        口數
      </label>

      <NumberInput
        value={lots}
        onChange={setLots}
        min={1}
        placeholder="例如 1"
      />

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            方向
          </label>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setDirection("long")}
              className={
                direction === "long"
                  ? "flex-1 rounded bg-red-600 px-4 py-2 font-semibold text-white"
                  : "flex-1 rounded border border-slate-300 px-4 py-2 text-slate-700"
              }
            >
              做多
            </button>

            <button
              type="button"
              onClick={() => setDirection("short")}
              className={
                direction === "short"
                  ? "flex-1 rounded bg-green-600 px-4 py-2 font-semibold text-white"
                  : "flex-1 rounded border border-slate-300 px-4 py-2 text-slate-700"
              }
            >
              做空
            </button>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            保證金模式
          </label>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setMarginMode("normal")}
              className={
                marginMode === "normal"
                  ? "flex-1 rounded bg-slate-800 px-4 py-2 font-semibold text-white"
                  : "flex-1 rounded border border-slate-300 px-4 py-2 text-slate-700"
              }
            >
              一般
            </button>

            <button
              type="button"
              onClick={() => setMarginMode("daytrade")}
              className={
                marginMode === "daytrade"
                  ? "flex-1 rounded bg-slate-800 px-4 py-2 font-semibold text-white"
                  : "flex-1 rounded border border-slate-300 px-4 py-2 text-slate-700"
              }
            >
              當沖
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
        目前保證金：
        <span className="ml-1 font-semibold">
          {margin.toLocaleString()} 元 / 口
        </span>
      </p>

      <div className="my-6 border-t border-slate-200" />

      <h3 className="text-base font-semibold text-slate-900">
        損益表設定
      </h3>

      <label className="mb-2 mt-4 block text-sm font-medium text-slate-600">
        顯示範圍（點）
      </label>

      <NumberInput
        value={range}
        onChange={setRange}
        min={1}
        placeholder="例如 300"
      />

      <label className="mb-2 mt-5 block text-sm font-medium text-slate-600">
        間隔（點）
      </label>

      <NumberInput
        value={step}
        onChange={setStep}
        min={1}
        placeholder="例如 20"
      />

      <div className="my-6 border-t border-slate-200" />

      <h3 className="text-base font-semibold text-slate-900">
        交易成本
      </h3>

      <label className="mb-2 mt-4 block text-sm font-medium text-slate-600">
        單邊手續費（元 / 口）
      </label>

      <NumberInput
        value={fee}
        onChange={setFee}
        min={0}
        placeholder="例如 25"
      />

      <p className="mt-2 text-xs leading-5 text-slate-500">
        請輸入每口、單邊的手續費，系統會自動乘上口數與進出場兩次。
      </p>
    </div>
  );
}