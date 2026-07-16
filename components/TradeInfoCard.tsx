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

  // 新增交易成本資料
  feeValue: number;
  totalFee: number;
  breakEvenPoints: number;
  breakEvenPrice: number;
};

export default function TradeInfoCard({
  productName,
  direction,
  marginMode,
  priceValue,
  lotsValue,
  pointValue,
  margin,
  feeValue,
  totalFee,
  breakEvenPoints,
  breakEvenPrice,
}: TradeInfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
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

        {/* 交易成本分隔標題 */}
        <div className="border-t border-slate-200 pt-4">
          <p className="font-semibold text-slate-900">
            交易成本
          </p>
        </div>

        {/* 單邊手續費 */}
        <div className="flex justify-between">
          <span className="text-slate-500">
            單邊手續費
          </span>

          <span className="font-semibold tabular-nums text-slate-900">
            {feeValue.toLocaleString()} 元 / 口
          </span>
        </div>

        {/* 來回手續費 */}
        <div className="flex justify-between">
          <span className="text-slate-500">
            本次來回手續費
          </span>

          <span className="font-semibold tabular-nums text-slate-900">
            {totalFee.toLocaleString()} 元
          </span>
        </div>

        {/* 損益平衡點數 */}
        <div className="flex justify-between">
          <span className="text-slate-500">
            回本所需點數
          </span>

          <span className="font-semibold tabular-nums text-amber-700">
            {direction === "long" ? "+" : "-"}
            {breakEvenPoints} 點
          </span>
        </div>

        {/* 損益平衡價格 */}
        <div className="flex justify-between rounded-lg bg-amber-50 px-3 py-3">
          <span className="font-medium text-amber-800">
            損益平衡價格
          </span>

          <span className="font-bold tabular-nums text-amber-800">
            {breakEvenPrice.toLocaleString()}
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