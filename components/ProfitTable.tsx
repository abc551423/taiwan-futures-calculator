import {
  ArrowUp,
  TrendingUp,
} from "lucide-react";

type ProfitResult = {
  change: number;
  targetPrice: number;
  tax: number;
  netProfit: number;
  returnRate: number;
};

type ProfitTableProps = {
  results: ProfitResult[];
  step: number;
  range: number;
};

export default function ProfitTable({
  results,
  step,
  range,
}: ProfitTableProps){
  const maxProfit =
    results.length > 0
      ? Math.max(...results.map((r) => r.netProfit))
      : 0;

  const maxLoss =
    results.length > 0
      ? Math.min(...results.map((r) => r.netProfit))
      : 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">

      {/* Header */}
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
            <TrendingUp className="h-5 w-5" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">
              損益預覽
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              即時計算不同價格下的淨收益與收益率
            </p>
          </div>

        </div>

      </div>

      <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">

        <div className="grid gap-3 md:grid-cols-4">

          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">
              試算筆數
            </p>

            <p className="mt-1 text-lg font-bold">
              {results.length}
            </p>
          </div>

          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">
              最高淨收益
            </p>

            <p className="mt-1 text-lg font-bold text-red-600 tabular-nums">
              +{Math.round(maxProfit).toLocaleString()} 元
            </p>
          </div>

          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">
              最大虧損
            </p>

            <p className="mt-1 text-lg font-bold text-green-600 tabular-nums">
              {Math.round(maxLoss).toLocaleString()} 元
            </p>
          </div>

          <div className="rounded-xl bg-white p-3 shadow-sm">
            <p className="text-xs text-slate-500">
              顯示範圍
            </p>

            <p className="mt-1 text-lg font-bold">
              ±{range} 點
            </p>
          </div>

        </div>

      </div>

      <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 bg-slate-50 px-6 py-3 text-sm">

        <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm">
          📊 共 {results.length} 筆資料
        </span>

        <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm">
          📏 每格 {step} 點
        </span>

        <span className="rounded-full bg-white px-3 py-1 font-medium text-slate-700 shadow-sm">
          📈 ±{range} 點
        </span>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="sticky top-0 bg-slate-100">

            <tr className="border-b border-slate-200 text-sm text-slate-600">

              <th className="px-6 py-4 text-left font-semibold">
                價格
              </th>

              <th className="px-6 py-4 text-right font-semibold">
                淨收益
              </th>

              <th className="px-6 py-4 text-right font-semibold">
                收益率
              </th>

              <th className="px-6 py-4 text-right font-semibold">
                期交稅
              </th>

            </tr>

          </thead>

          <tbody>

            {results.map((result, index) => (

              <tr
                key={result.change}
                className={
                  index % 2 === 0
                    ? "border-b border-slate-100 bg-white transition hover:bg-slate-50"
                    : "border-b border-slate-100 bg-slate-50/40 transition hover:bg-slate-50"
                }
              >

                {/* Price */}

                <td className="px-6 py-4">

                  <div className="font-semibold tabular-nums text-slate-900">
                    {result.targetPrice.toLocaleString()}
                  </div>

                  <div
                    className={
                      result.change >= 0
                        ? "mt-1 flex items-center gap-1 text-xs text-red-500"
                        : "mt-1 flex items-center gap-1 text-xs text-green-600"
                    }
                  >

                    <ArrowUp
                      className={
                        result.change >= 0
                          ? "h-3 w-3"
                          : "h-3 w-3 rotate-180"
                      }
                    />

                    {result.change > 0 ? "+" : ""}
                    {result.change} 點

                  </div>

                </td>

                {/* Net */}

                <td
                  className={
                    result.netProfit > 0
                      ? "px-6 py-4 text-right font-bold tabular-nums text-red-600"
                      : result.netProfit < 0
                        ? "px-6 py-4 text-right font-bold tabular-nums text-green-600"
                        : "px-6 py-4 text-right tabular-nums text-slate-500"
                  }
                >

                  {result.netProfit > 0 ? "+" : ""}
                  {Math.round(result.netProfit).toLocaleString()} 元

                </td>

                {/* Return */}

                <td
                  className={
                    result.returnRate > 0
                      ? "px-6 py-4 text-right font-bold tabular-nums text-red-600"
                      : result.returnRate < 0
                        ? "px-6 py-4 text-right font-bold tabular-nums text-green-600"
                        : "px-6 py-4 text-right tabular-nums text-slate-500"
                  }
                >

                  {result.returnRate > 0 ? "+" : ""}
                  {result.returnRate.toFixed(2)}%

                </td>

                {/* Tax */}

                <td className="px-6 py-4 text-right tabular-nums text-slate-700">

                  -{result.tax.toLocaleString()} 元

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}