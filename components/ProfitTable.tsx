type ProfitResult = {
  change: number;
  targetPrice: number;
  tax: number;
  netProfit: number;
  returnRate: number;
};

type ProfitTableProps = {
  results: ProfitResult[];
};

export default function ProfitTable({
  results,
}: ProfitTableProps) {
  return (
    <div className="mt-8 w-full max-w-6xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        損益預覽
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        依照目前設定顯示各價格區間的淨收益
      </p>

      <div className="my-5 border-t border-slate-200" />

      {/* 表頭 */}
      <div className="grid grid-cols-4 border-b border-slate-200 pb-3 text-sm font-semibold text-slate-600">
        <span>價格</span>
        <span className="text-right">淨收益</span>
        <span className="text-right">收益率</span>
        <span className="text-right">期交稅</span>
      </div>

      {/* 損益資料 */}
      <div>
        {results.map((result) => (
          <div
            key={result.change}
            className="grid grid-cols-4 items-center border-b border-slate-100 py-3 text-sm transition hover:bg-slate-50"
          >
            {/* 價格 */}
            <div>
              <div className="font-medium tabular-nums text-slate-900">
                {result.targetPrice.toLocaleString()}
              </div>

              <div className="mt-1 text-xs tabular-nums text-slate-500">
                {result.change > 0 ? "+" : ""}
                {result.change} 點
              </div>
            </div>

            {/* 淨收益 */}
            <span
              className={
                result.netProfit > 0
                  ? "text-right font-semibold tabular-nums text-red-600"
                  : result.netProfit < 0
                    ? "text-right font-semibold tabular-nums text-green-600"
                    : "text-right tabular-nums text-slate-500"
              }
            >
              {result.netProfit > 0 ? "+" : ""}
              {Math.round(result.netProfit).toLocaleString()} 元
            </span>

            {/* 收益率 */}
            <span
              className={
                result.returnRate > 0
                  ? "text-right font-semibold tabular-nums text-red-600"
                  : result.returnRate < 0
                    ? "text-right font-semibold tabular-nums text-green-600"
                    : "text-right tabular-nums text-slate-500"
              }
            >
              {result.returnRate > 0 ? "+" : ""}
              {result.returnRate.toFixed(2)}%
            </span>

            {/* 期交稅 */}
            <span className="text-right tabular-nums text-slate-700">
              -{result.tax.toLocaleString()} 元
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}