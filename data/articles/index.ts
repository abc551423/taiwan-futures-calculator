import { lesson01 } from "./lesson01";
import { lesson02 } from "./lesson02";

export const articles = [lesson01, lesson02].sort(
  (a, b) => a.lesson - b.lesson
);