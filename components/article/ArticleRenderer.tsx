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
    <div className="space-y-8">
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
            "rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10",
            section.align === "center" ? "text-center" : "text-left",
          ].join(" ")}
        >
          {section.eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              {section.eyebrow}
            </p>
          )}

          <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
            {section.title}
          </h2>

          {section.description && (
            <p
              className={[
                "mt-5 text-base leading-8 text-slate-600 md:text-lg",
                section.align === "center"
                  ? "mx-auto max-w-3xl"
                  : "max-w-3xl",
              ].join(" ")}
            >
              {section.description}
            </p>
          )}
        </section>
      );

    case "heading":
      return (
        <h2
          id={section.id}
          className="scroll-mt-24 border-b border-slate-200 pb-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          {section.content}
        </h2>
      );

    case "paragraph":
      return (
        <p className="text-base leading-8 text-slate-700 md:text-lg">
          {section.content}
        </p>
      );

    case "blockquote":
      return (
        <blockquote className="rounded-r-2xl border-l-4 border-blue-500 bg-blue-50 px-6 py-5">
          <p className="text-lg font-semibold leading-8 text-blue-950">
            {section.content}
          </p>

          {section.cite && (
            <cite className="mt-3 block text-sm not-italic text-blue-700">
              — {section.cite}
            </cite>
          )}
        </blockquote>
      );

    case "comparison":
      return <ComparisonBlock section={section} />;

    case "formula":
      return (
        <section className="rounded-3xl border border-blue-200 bg-blue-50 p-7 text-center">
          <p className="text-lg font-bold leading-8 text-blue-950 md:text-2xl">
            {section.formula}
          </p>

          {section.description && (
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-800">
              {section.description}
            </p>
          )}
        </section>
      );

    case "list":
      return <ArticleList section={section} />;

    case "table":
      return (
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead className="bg-slate-100">
              <tr>
                {section.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-slate-200 px-5 py-4 text-sm font-semibold text-slate-900"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200">
              {section.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="px-5 py-4 text-sm leading-6 text-slate-700 md:text-base"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return (
        <aside className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-blue-950">
            {section.title}
          </h3>

          <p className="leading-7 text-blue-900">
            {section.content}
          </p>
        </aside>
      );

    case "tip":
      return (
        <aside className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-emerald-950">
            {section.title ?? "小提醒"}
          </h3>

          <p className="leading-7 text-emerald-900">
            {section.content}
          </p>
        </aside>
      );

    case "warning":
      return (
        <aside className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="mb-2 text-lg font-bold text-amber-950">
            {section.title ?? "風險提醒"}
          </h3>

          <p className="leading-7 text-amber-900">
            {section.content}
          </p>
        </aside>
      );

    case "checklist": {
      const columns =
        section.columns === 1 ? "grid-cols-1" : "sm:grid-cols-2";

      return (
        <section>
          {section.title && (
            <h3 className="mb-5 text-xl font-bold text-slate-900">
              {section.title}
            </h3>
          )}

          <div className={`grid gap-3 ${columns}`}>
            {section.items.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

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
        <section className="rounded-3xl bg-slate-950 p-7 text-white md:p-9">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
            <Calculator className="h-6 w-6" />
          </div>

          <h3 className="mt-6 text-2xl font-bold">
            {section.title ?? "試算期貨損益"}
          </h3>

          {section.content && (
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              {section.content}
            </p>
          )}

          <Link
            href={section.href ?? "/#calculator"}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            {section.buttonText ?? "使用期貨損益計算機"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      );

    case "cta":
      return (
        <section className="rounded-3xl bg-slate-950 p-7 text-white md:p-9">
          <h3 className="text-2xl font-bold md:text-3xl">
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
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              {section.buttonText}
              <ArrowRight className="h-4 w-4" />
            </Link>

            {section.secondaryHref &&
              section.secondaryButtonText && (
                <Link
                  href={section.secondaryHref}
                  className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  {section.secondaryButtonText}
                </Link>
              )}
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
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-900">
                {item.value}
              </p>

              <p className="mt-2 font-semibold text-slate-700">
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
          <h2 className="border-b border-slate-200 pb-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {section.title ?? "常見問題"}
          </h2>

          <div className="space-y-3">
            {section.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white"
              >
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-slate-900">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}

                    <span className="text-xl text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-5 py-4">
                  <p className="leading-7 text-slate-700">
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
    "space-y-3 pl-6 text-base leading-8 text-slate-700 marker:font-semibold marker:text-slate-500 md:text-lg";

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
        "grid gap-5",
        section.columns.length === 2
          ? "sm:grid-cols-2"
          : "md:grid-cols-3",
      ].join(" ")}
    >
      {section.columns.map((column) => {
        const tone = getToneClasses(column.tone ?? "slate");

        return (
          <div
            key={column.title}
            className={`rounded-3xl border p-6 ${tone.container}`}
          >
            {column.icon && (
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ${tone.icon}`}
              >
                <SectionIconRenderer icon={column.icon} />
              </div>
            )}

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              {column.title}
            </h3>

            {column.subtitle && (
              <p className={`mt-1 text-sm font-semibold ${tone.icon}`}>
                {column.subtitle}
              </p>
            )}

            <p className="mt-3 leading-7 text-slate-700">
              {column.description}
            </p>

            {column.items && (
              <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className={`font-bold ${tone.icon}`}>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
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
      className={`rounded-3xl border p-6 ${tone.container}`}
    >
      <div className="flex items-start gap-4">
        {section.icon && (
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${tone.icon}`}
          >
            <SectionIconRenderer icon={section.icon} />
          </div>
        )}

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {section.title}
          </h3>

          <p className="mt-2 leading-7 text-slate-700">
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
  icon: SectionIcon;
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
    default:
      return <Info className={iconClassName} />;
  }
}

function getToneClasses(tone: SectionTone) {
  const toneClasses = {
    blue: {
      container: "border-blue-200 bg-blue-50",
      icon: "text-blue-600",
    },
    emerald: {
      container: "border-emerald-200 bg-emerald-50",
      icon: "text-emerald-600",
    },
    rose: {
      container: "border-rose-200 bg-rose-50",
      icon: "text-rose-600",
    },
    amber: {
      container: "border-amber-200 bg-amber-50",
      icon: "text-amber-600",
    },
    slate: {
      container: "border-slate-200 bg-slate-50",
      icon: "text-slate-600",
    },
  };

  return toneClasses[tone];
}