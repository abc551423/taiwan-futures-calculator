export interface Article {
  slug: string;
  lesson: number;
  title: string;
  description: string;
  readingTime: number;
  updatedAt: string;
  keywords?: string[];
  sections: ArticleSection[];
}

export type ArticleSection =
  | HeroSection
  | HeadingSection
  | ParagraphSection
  | BlockquoteSection
  | ComparisonSection
  | FormulaSection
  | ListSection
  | TableSection
  | CalloutSection
  | TipSection
  | WarningSection
  | ChecklistSection
  | CalculatorSection
  | CTASection
  | InfoCardSection
  | StatsSection
  | FaqSection;

export interface HeroSection {
  type: "hero";
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export interface HeadingSection {
  type: "heading";
  id: string;
  content: string;
}

export interface ParagraphSection {
  type: "paragraph";
  content: string;
}

export interface BlockquoteSection {
  type: "blockquote";
  content: string;
  cite?: string;
}

export type SectionTone =
  | "blue"
  | "emerald"
  | "rose"
  | "amber"
  | "slate";

export type SectionIcon =
  | "up"
  | "down"
  | "scale"
  | "calculator"
  | "book"
  | "info";

export interface ComparisonSection {
  type: "comparison";
  columns: {
    title: string;
    subtitle?: string;
    description: string;
    tone?: SectionTone;
    icon?: string;
    items?: string[];
  }[];
}

export interface FormulaSection {
  type: "formula";
  formula: string;
  description?: string;
}

export interface ListSection {
  type: "list";
  style?: "ordered" | "unordered";
  items: string[];
}

export interface TableSection {
  type: "table";
  headers: string[];
  rows: string[][];
}

export interface CalloutSection {
  type: "callout";
  title: string;
  content: string;
}

export interface TipSection {
  type: "tip";
  title?: string;
  content: string;
}

export interface WarningSection {
  type: "warning";
  title?: string;
  content: string;
}

export interface ChecklistSection {
  type: "checklist";
  title?: string;
  items: string[];
  columns?: 1 | 2;
}

export interface CalculatorSection {
  type: "calculator";
  title?: string;
  content?: string;
  href?: string;
  buttonText?: string;
}

export interface CTASection {
  type: "cta";
  title: string;
  content?: string;
  href: string;
  buttonText: string;
  secondaryHref?: string;
  secondaryButtonText?: string;
}

export interface InfoCardSection {
  type: "infoCard";
  title: string;
  content: string;
  tone?: SectionTone;
  icon?: string;
}

export interface StatsSection {
  type: "stats";
  columns?: 2 | 3 | 4;
  items: {
    value: string;
    label: string;
    description?: string;
  }[];
}

export interface FaqSection {
  type: "faq";
  title?: string;
  items: {
    question: string;
    answer: string;
  }[];
}