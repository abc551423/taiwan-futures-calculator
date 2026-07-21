import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Info,
  Scale,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import type {
  ArticleSection,
  ComparisonSection,
  InfoCardSection,
  ListSection,
  SectionIcon,
  SectionTone,
} from "@/types/article";

interface ArticleRendererProps {
  sections: ArticleSection[];
}

export default function ArticleRenderer({
  sections,
}: ArticleRendererProps) {
  return (
    <div className="space-y-10 md:space-y-14">
      {sections.map((section, index) => (
        <ArticleSectionRenderer
          key={`${section.type}-${index}`}
          section={section}
        />
      ))}
    </div>
  );
}

interface ArticleSectionRendererProps {
  section: ArticleSection;
}

function ArticleSectionRenderer({
  section,
}: ArticleSectionRendererProps) {
  switch (section.type) {
    case "hero":
      return (
        <section
          className={[
            "relative overflow-hidden rounded-[2rem]",
            "border border-slate-800 bg-slate-950",
            "px-6 py-10 text-white shadow-xl shadow-slate-950/10",
            "sm:px-8 md:px-12 md:py-14",
            section.align === "center" ? "text-center" : "text-left",
          ].join(" ")}
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            {section.eyebrow && (
              <div
                className={[
                  "inline-flex items-center rounded-full",
                  "border border-white/10 bg-white/5",
                  "px-3 py-1.5 text-xs font-bold uppercase",
                  "tracking-[0.18em] text-amber-300",
                ].join(" ")}
              >
                {section.eyebrow}
              </div>
            )}

            <h2 className="mt-5 max-w-4xl text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {section.title}
            </h2>

            {section.description && (
              <p
                className={[
                  "mt-6 max-w-3xl text-base leading-8 text-slate-300",
                  "md:text-lg md:leading-9",
                  section.align === "center" ? "mx-auto" : "",
                ].join(" ")}
              >
                {section.description}
              </p>
            )}
          </div>
        </section>
      );

    case "heading":
      return (
        <section className="scroll-mt-28 pt-2" id={section.id}>
          <div className="flex items-start gap-4">
            <span className="mt-1 h-8 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-500 to-blue-300" />

            <h2 className="text-2xl font-black leading-tight tracking-tight text-slate-950 md:text-3xl">
              {section.content}
            </h2>
          </div>

          <div className="mt-5 h-px bg-gradient-to-r from-slate-200 via-slate-200 to-transparent" />
        </section>
      );

    case "paragraph":
      return (
        <p className="text-[1.05rem] leading-8 text-slate-700 md:text-lg md:leading-9">
          {section.content}
        </p>
      );

    case "blockquote":
      return (
        <blockquote className="relative overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white px-6 py-6 md:px-8">
          <span className="absolute left-0 top-0 h-full w-1 bg-blue-500" />

          <p className="text-lg font-bold leading-8 text-slate-900 md:text-xl">
            {section.content}
          </p>

          {section.cite && (
            <cite className="mt-4 block text-sm font-medium not-italic text-blue-700">
              — {section.cite}
            </cite>
          )}
        </blockquote>
      );

    case "comparison":
      return <ComparisonBlock section={section} />;

    case "formula":
      return (
        <section className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 text-center text-white shadow-lg shadow-slate-950/10 md:px-10 md:py-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

          <p className="relative break-words text-xl font-black leading-9 tracking-tight text-white md:text-2xl">
            {section.formula}
          </p>

          {section.description && (
            <p className="relative mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              {section.description}
            </p>
          )}
        </section>
      );

    case "list":
      return <ArticleList section={section} />;

    case "table":
      return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  {section.headers.map((header) => (
                    <th
                      key={header}
                      className="px-5 py-4 text-sm font-bold tracking-wide"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {section.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="transition hover:bg-slate-50"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={`${rowIndex}-${cellIndex}`}
                        className={[
                          "px-5 py-4 text-sm leading-7",
                          "md:text-base",
                          cellIndex === 0
                            ? "font-bold text-slate-900"
                            : "text-slate-600",
                        ].join(" ")}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "callout":
      return (
        <aside className="rounded-2xl border border-blue-200/70 bg-blue-50/70 p-6 md:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <Info className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-950">
                {section.title}
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                {section.content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "tip":
      return (
        <aside className="rounded-2xl border border-emerald-200/70 bg-emerald-50/70 p-6 md:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
              <CheckCircle2 className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-950">
                {section.title ?? "小提醒"}
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                {section.content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "warning":
      return (
        <aside className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6 md:p-7">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
              <Info className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-lg font-black text-slate-950">
                {section.title ?? "風險提醒"}
              </h3>

              <p className="mt-2 leading-8 text-slate-700">
                {section.content}
              </p>
            </div>
          </div>
        </aside>
      );

    case "checklist": {
      const columns =
        section.columns === 1 ? "grid-cols-1" : "sm:grid-cols-2";

      return (
        <section>
          {section.title && (
            <h3 className="mb-5 text-xl font-black text-slate-950">
              {section.title}
            </h3>
          )}

          <div className={`grid gap-3 ${columns}`}>
            {section.items.map((item) => (
              <div
                key={item}
                className={[
                  "group flex items-start gap-3 rounded-2xl",
                  "border border-slate-200/80 bg-white",
                  "px-4 py-4",
                  "transition duration-200",
                  "hover:-translate-y-0.5 hover:border-blue-200",
                  "hover:shadow-md hover:shadow-slate-200/60",
                ].join(" ")}
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                </div>

                <span className="font-medium leading-7 text-slate-700">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>
      );
    }

    case "calculator":
      return (
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-9 text-white shadow-xl shadow-slate-950/10 md:px-10 md:py-11">
          <div className="pointer-events-none absolute -right-14 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

          <div className="relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-amber-300">
              <Calculator className="h-6 w-6" />
            </div>

            <h3 className="mt-6 max-w-2xl text-2xl font-black tracking-tight md:text-3xl">
              {section.title ?? "試算期貨損益"}
            </h3>

            {section.content && (
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                {section.content}
              </p>
            )}

            <Link
              href={section.href ?? "/#calculator"}
              className={[
                "mt-7 inline-flex items-center gap-2",
                "rounded-xl bg-amber-300 px-5 py-3",
                "font-bold text-slate-950",
                "transition duration-200",
                "hover:-translate-y-0.5 hover:bg-amber-200",
                "hover:shadow-lg hover:shadow-amber-300/10",
              ].join(" ")}
            >
              {section.buttonText ?? "使用期貨損益計算機"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      );

    case "cta":
      return (
        <section className="relative overflow-hidden rounded-[2rem] bg-slate-950 px-7 py-9 text-white shadow-xl shadow-slate-950/10 md:px-10 md:py-11">
          <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />

          <div className="relative">
            <h3 className="max-w-3xl text-2xl font-black tracking-tight md:text-3xl">
              {section.title}
            </h3>

            {section.content && (
              <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                {section.content}
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={section.href}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-200"
              >
                {section.buttonText}
                <ArrowRight className="h-4 w-4" />
              </Link>

              {section.secondaryHref &&
                section.secondaryButtonText && (
                  <Link
                    href={section.secondaryHref}
                    className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-bold text-white transition hover:bg-white/10"
                  >
                    {section.secondaryButtonText}
                  </Link>
                )}
            </div>
          </div>
        </section>
      );

    case "infoCard":
      return <InfoCard section={section} />;

    case "stats": {
      const columnClass = {
        2: "sm:grid-cols-2",
        3: "sm:grid-cols-3",
        4: "sm:grid-cols-2 lg:grid-cols-4",
      }[section.columns ?? 3];

      return (
        <section className={`grid gap-4 ${columnClass}`}>
          {section.items.map((item) => (
            <div
              key={`${item.label}-${item.value}`}
              className={[
                "rounded-2xl border border-slate-200/80 bg-white",
                "p-6 transition duration-200",
                "hover:-translate-y-1 hover:border-blue-200",
                "hover:shadow-lg hover:shadow-slate-200/60",
              ].join(" ")}
            >
              <p className="text-3xl font-black tracking-tight text-slate-950">
                {item.value}
              </p>

              <p className="mt-2 font-bold text-slate-700">
                {item.label}
              </p>

              {item.description && (
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </section>
      );
    }

    case "faq":
      return (
        <section className="space-y-4">
          <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            {section.title ?? "常見問題"}
          </h2>

          <div className="space-y-3">
            {section.items.map((item) => (
              <details
                key={item.question}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition open:border-blue-200 open:shadow-md"
              >
                <summary className="cursor-pointer list-none px-5 py-5 font-bold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}

                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-lg text-slate-500 transition group-open:rotate-45 group-open:bg-blue-50 group-open:text-blue-600">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 py-5">
                  <p className="leading-8 text-slate-700">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>
      );

    default:
      return null;
  }
}

function ArticleList({ section }: { section: ListSection }) {
  const listClassName =
    "space-y-3 pl-6 text-[1.05rem] leading-8 text-slate-700 marker:font-bold marker:text-blue-500 md:text-lg";

  if (section.style === "ordered") {
    return (
      <ol className={`${listClassName} list-decimal`}>
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }

  return (
    <ul className={`${listClassName} list-disc`}>
      {section.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ComparisonBlock({
  section,
}: {
  section: ComparisonSection;
}) {
  return (
    <section
      className={[
        "grid gap-4",
        section.columns.length === 2
          ? "md:grid-cols-2"
          : "md:grid-cols-3",
      ].join(" ")}
    >
      {section.columns.map((column) => {
        const tone = getToneClasses(column.tone ?? "slate");

        return (
          <article
            key={column.title}
            className={[
              "group relative overflow-hidden rounded-3xl border",
              "bg-white p-6",
              "transition duration-200",
              "hover:-translate-y-1 hover:shadow-xl",
              tone.container,
            ].join(" ")}
          >
            <div
              className={`absolute inset-x-0 top-0 h-1 ${tone.accent}`}
            />

            {column.icon && (
              <div
                className={[
                  "flex h-11 w-11 items-center justify-center",
                  "rounded-2xl bg-white shadow-sm ring-1 ring-black/5",
                  tone.icon,
                ].join(" ")}
              >
                <SectionIconRenderer icon={column.icon} />
              </div>
            )}

            <h3 className="mt-5 text-xl font-black text-slate-950">
              {column.title}
            </h3>

            {column.subtitle && (
              <p className={`mt-1 text-sm font-bold ${tone.icon}`}>
                {column.subtitle}
              </p>
            )}

            <p className="mt-4 leading-7 text-slate-600">
              {column.description}
            </p>

            {column.items && (
              <ul className="mt-5 space-y-2.5 text-sm leading-6 text-slate-700">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CheckCircle2
                      className={`mt-0.5 h-4 w-4 shrink-0 ${tone.icon}`}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </section>
  );
}

function InfoCard({
  section,
}: {
  section: InfoCardSection;
}) {
  const tone = getToneClasses(section.tone ?? "blue");

  return (
    <aside
      className={[
        "relative overflow-hidden rounded-2xl border",
        "bg-white p-6 md:p-7",
        tone.container,
      ].join(" ")}
    >
      <div className={`absolute inset-y-0 left-0 w-1 ${tone.accent}`} />

      <div className="flex items-start gap-4">
        {section.icon && (
          <div
            className={[
              "flex h-11 w-11 shrink-0 items-center justify-center",
              "rounded-2xl bg-white shadow-sm ring-1 ring-black/5",
              tone.icon,
            ].join(" ")}
          >
            <SectionIconRenderer icon={section.icon} />
          </div>
        )}

        <div>
          <h3 className="text-lg font-black text-slate-950">
            {section.title}
          </h3>

          <p className="mt-2 leading-8 text-slate-700">
            {section.content}
          </p>
        </div>
      </div>
    </aside>
  );
}

function SectionIconRenderer({
  icon,
}: {
  icon: SectionIcon | string;
}) {
  const iconClassName = "h-6 w-6";

  switch (icon) {
    case "up":
      return <TrendingUp className={iconClassName} />;

    case "down":
      return <TrendingDown className={iconClassName} />;

    case "scale":
      return <Scale className={iconClassName} />;

    case "calculator":
      return <Calculator className={iconClassName} />;

    case "book":
      return <BookOpen className={iconClassName} />;

    case "info":
      return <Info className={iconClassName} />;

    default:
      return (
        <span
          className="flex h-6 w-6 items-center justify-center text-lg leading-none"
          aria-hidden="true"
        >
          {icon}
        </span>
      );
  }
}

function getToneClasses(tone: SectionTone) {
  const toneClasses = {
    blue: {
      container: "border-blue-100",
      icon: "text-blue-600",
      accent: "bg-blue-500",
    },
    emerald: {
      container: "border-emerald-100",
      icon: "text-emerald-600",
      accent: "bg-emerald-500",
    },
    rose: {
      container: "border-rose-100",
      icon: "text-rose-600",
      accent: "bg-rose-500",
    },
    amber: {
      container: "border-amber-100",
      icon: "text-amber-600",
      accent: "bg-amber-400",
    },
    slate: {
      container: "border-slate-200",
      icon: "text-slate-600",
      accent: "bg-slate-400",
    },
  };

  return toneClasses[tone] ?? toneClasses.slate;
}