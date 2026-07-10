import NumberInput from "./NumberInput";

type ProductKey = "big" | "mini" | "micro";
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
}: TradeSettingCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-slate-900">
        交易設定
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        輸入進場條件，即時計算淨收益與收益率
      </p>

      <div className="my-5 border-t border-slate-200" />

      <label className="block mb-2 text-sm font-medium text-slate-600">
        商品
      </label>

      <select
        value={product}
        onChange={(e) =>
          setProduct(e.target.value as ProductKey)
        }
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 outline-none focus:border-slate-500"
      >
        <option value="big">大台指</option>
        <option value="mini">小台指</option>
        <option value="micro">微台指</option>
      </select>

      <label className="block mt-5 mb-2 text-sm font-medium text-slate-600">
        進場價格
      </label>

      <NumberInput
        value={price}
        onChange={setPrice}
        min={0}
        placeholder="例如 22500"
      />

      <label className="block mt-5 mb-2 text-sm font-medium text-slate-600">
        口數
      </label>

      <NumberInput
        value={lots}
        onChange={setLots}
        min={1}
        placeholder="例如 1"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-600">
            方向
          </label>

          <div className="flex gap-3">
            <button
              onClick={() => setDirection("long")}
              className={
                direction === "long"
                  ? "flex-1 bg-red-600 text-white rounded px-4 py-2 font-semibold"
                  : "flex-1 border rounded px-4 py-2"
              }
            >
              做多
            </button>

            <button
              onClick={() => setDirection("short")}
              className={
                direction === "short"
                  ? "flex-1 bg-green-600 text-white rounded px-4 py-2 font-semibold"
                  : "flex-1 border rounded px-4 py-2"
              }
            >
              做空
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-600">
            保證金模式
          </label>

          <div className="flex gap-3">
            <button
              onClick={() => setMarginMode("normal")}
              className={
                marginMode === "normal"
                  ? "flex-1 bg-slate-800 text-white rounded px-4 py-2 font-semibold"
                  : "flex-1 border rounded px-4 py-2"
              }
            >
              一般
            </button>

            <button
              onClick={() => setMarginMode("daytrade")}
              className={
                marginMode === "daytrade"
                  ? "flex-1 bg-slate-800 text-white rounded px-4 py-2 font-semibold"
                  : "flex-1 border rounded px-4 py-2"
              }
            >
              當沖
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 rounded-lg bg-slate-100 p-3 text-sm text-slate-700">
        目前保證金：
        <span className="font-semibold">
          {margin.toLocaleString()} 元 / 口
        </span>
      </p>

      <label className="block mt-5 mb-2 text-sm font-medium text-slate-600">
        顯示範圍（點）
      </label>

      <NumberInput
        value={range}
        onChange={setRange}
        min={1}
        placeholder="例如 300"
      />

      <label className="block mt-5 mb-2 text-sm font-medium text-slate-600">
        間隔（點）
      </label>

      <NumberInput
        value={step}
        onChange={setStep}
        min={1}
        placeholder="例如 20"
      />
    </div>
  );
}