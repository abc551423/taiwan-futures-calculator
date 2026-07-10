type Direction = "long" | "short";
type MarginMode = "normal" | "daytrade";

type TradeInfoCardProps = {
  productName: string;
  direction: Direction;
  marginMode: MarginMode;
  priceValue: number;
  lotsValue: number;
  pointValue: number;
  margin: number;
};

export default function TradeInfoCard({
  productName,
  direction,
  marginMode,
  priceValue,
  lotsValue,
  pointValue,
  margin,
}: TradeInfoCardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold text-slate-900">
        本次交易設定
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        依照目前輸入條件即時計算
      </p>

      <div className="my-5 border-t border-slate-200" />

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-500">商品</span>
          <span className="font-semibold text-slate-900">
            {productName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">方向</span>
          <span
            className={
              direction === "long"
                ? "font-semibold text-red-600"
                : "font-semibold text-green-600"
            }
          >
            {direction === "long" ? "🔴 做多" : "🟢 做空"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">模式</span>
          <span className="font-semibold text-slate-900">
            {marginMode === "daytrade" ? "當沖" : "一般"}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">進場價格</span>
          <span className="font-semibold text-slate-900">
            {priceValue.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">口數</span>
          <span className="font-semibold text-slate-900">
            {lotsValue} 口
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">每點價值</span>
          <span className="font-semibold text-slate-900">
            {pointValue.toLocaleString()} 元
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">保證金</span>
          <span className="font-semibold text-slate-900">
            {margin.toLocaleString()} 元 / 口
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">期交稅率</span>
          <span className="font-semibold text-slate-900">
            0.002%
          </span>
        </div>
      </div>
    </div>
  );
}