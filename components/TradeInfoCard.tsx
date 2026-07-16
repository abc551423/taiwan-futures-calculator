import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CircleDollarSign,
  Gauge,
  ReceiptText,
  Scale,
  Target,
  WalletCards,
} from "lucide-react";

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

  feeValue: number;
  totalFee: number;
  breakEvenPoints: number;
  breakEvenPrice: number;
  breakEvenTax: number;
  breakEvenTotalCost: number;
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
  breakEvenTax,
  breakEvenTotalCost,
}: TradeInfoCardProps) {
  const isLong = direction === "long";

  const formatNumber = (value: number) =>
    Number.isFinite(value)
      ? value.toLocaleString()
      : "—";

  const validPrice =
    Number.isFinite(priceValue) &&
    priceValue > 0;

  const validLots =
    Number.isFinite(lotsValue) &&
    lotsValue > 0;

  const validPointValue =
    Number.isFinite(pointValue) &&
    pointValue > 0;

  const validMargin =
    Number.isFinite(margin) &&
    margin > 0;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      {/* 卡片標題 */}
      <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-5 sm:px-6">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <BarChart3
              className="h-5 w-5"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-950">
              本次交易資訊
            </h2>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              依照目前輸入條件，即時整理交易參數、成本與損益平衡資訊。
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-7 p-5 sm:p-6">
        {/* 交易摘要 */}
        <section aria-labelledby="trade-summary-title">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  目前商品
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-950">
                  {productName}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={
                    isLong
                      ? "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-semibold text-red-700"
                      : "inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700"
                  }
                >
                  {isLong ? (
                    <ArrowUpRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  )}

                  {isLong ? "做多" : "做空"}
                </span>

                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
                  {marginMode === "daytrade"
                    ? "當沖模式"
                    : "一般模式"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 交易參數 */}
        <section aria-labelledby="trade-detail-title">
          <SectionTitle
            id="trade-detail-title"
            icon={
              <Gauge className="h-4 w-4" />
            }
            title="交易參數"
          />

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <MetricCard
              label="進場價格"
              value={
                validPrice
                  ? formatNumber(priceValue)
                  : "—"
              }
              suffix="點"
            />

            <MetricCard
              label="交易口數"
              value={
                validLots
                  ? formatNumber(lotsValue)
                  : "—"
              }
              suffix="口"
            />

            <MetricCard
              label="每點價值"
              value={
                validPointValue
                  ? formatNumber(pointValue)
                  : "—"
              }
              suffix="元"
            />

            <MetricCard
              label="期交稅率"
              value="0.002"
              suffix="%"
            />
          </div>
        </section>

        <Divider />

        {/* 保證金 */}
        <section aria-labelledby="margin-title">
          <SectionTitle
            id="margin-title"
            icon={
              <WalletCards className="h-4 w-4" />
            }
            title="保證金"
          />

          <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200">
                <Scale
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-slate-500">
                  目前每口保證金
                </p>

                <p className="mt-0.5 truncate text-xl font-bold tabular-nums text-slate-950">
                  {validMargin
                    ? formatNumber(margin)
                    : "—"}{" "}
                  元
                </p>
              </div>

              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm ring-1 ring-slate-200">
                {marginMode === "daytrade"
                  ? "當沖"
                  : "一般"}
              </span>
            </div>
          </div>
        </section>

        <Divider />

        {/* 交易成本 */}
        <section aria-labelledby="cost-title">
          <SectionTitle
            id="cost-title"
            icon={
              <CircleDollarSign className="h-4 w-4" />
            }
            title="交易成本"
          />

          <div className="mt-4 space-y-3">
            <InfoRow
              label="單邊手續費"
              value={`${formatNumber(
                feeValue
              )} 元／口`}
            />

            <InfoRow
              label="本次來回手續費"
              value={`${formatNumber(
                totalFee
              )} 元`}
            />

            <InfoRow
              label="回本時期交稅"
              value={`${formatNumber(
                breakEvenTax
              )} 元`}
            />

            <div className="rounded-2xl border border-slate-200 bg-slate-900 px-4 py-4 text-white shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <ReceiptText
                    className="h-5 w-5 text-slate-300"
                    aria-hidden="true"
                  />

                  <span className="font-semibold">
                    回本總交易成本
                  </span>
                </div>

                <span className="text-xl font-bold tabular-nums">
                  {formatNumber(
                    breakEvenTotalCost
                  )}{" "}
                  元
                </span>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* 損益平衡 */}
        <section aria-labelledby="break-even-title">
          <SectionTitle
            id="break-even-title"
            icon={
              <Target className="h-4 w-4" />
            }
            title="損益平衡"
          />

          <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold text-amber-700">
                  回本所需點數
                </p>

                <p className="mt-1 text-2xl font-bold tabular-nums text-amber-900">
                  {validPrice
                    ? `${
                        isLong ? "+" : "-"
                      }${formatNumber(
                        breakEvenPoints
                      )}`
                    : "—"}{" "}
                  <span className="text-base font-semibold">
                    點
                  </span>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-amber-700">
                  損益平衡價格
                </p>

                <p className="mt-1 text-2xl font-bold tabular-nums text-amber-900">
                  {validPrice
                    ? formatNumber(
                        breakEvenPrice
                      )
                    : "—"}
                </p>
              </div>
            </div>

            <p className="mt-4 border-t border-amber-200 pt-3 text-xs leading-5 text-amber-800">
              此價格已將期交稅與來回手續費納入，代表淨損益首次大於或等於零的價格。
            </p>
          </div>
        </section>
      </div>
    </div>
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

type MetricCardProps = {
  label: string;
  value: string;
  suffix?: string;
};

function MetricCard({
  label,
  value,
  suffix,
}: MetricCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition duration-200 hover:border-slate-300 hover:bg-slate-50">
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-lg font-bold tabular-nums text-slate-950">
        {value}

        {suffix && value !== "—" ? (
          <span className="ml-1 text-sm font-semibold text-slate-500">
            {suffix}
          </span>
        ) : null}
      </p>
    </div>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({
  label,
  value,
}: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 transition duration-200 hover:bg-slate-50">
      <span className="text-sm text-slate-500">
        {label}
      </span>

      <span className="text-right text-sm font-semibold tabular-nums text-slate-900">
        {value}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="border-t border-slate-200" />
  );
}