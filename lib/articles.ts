import { articles } from "@/data/articles";
import type { Article } from "@/types/article";

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getPreviousArticle(slug: string): Article | undefined {
  const index = articles.findIndex((article) => article.slug === slug);

  if (index <= 0) {
    return undefined;
  }

  return articles[index - 1];
}

export function getNextArticle(slug: string): Article | undefined {
  const index = articles.findIndex((article) => article.slug === slug);

  if (index === -1 || index >= articles.length - 1) {
    return undefined;
  }

  return articles[index + 1];
}

export function getArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}