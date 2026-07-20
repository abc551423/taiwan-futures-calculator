import { lesson01 } from "./lesson01";
import { lesson02 } from "./lesson02";
import { lesson03 } from "./lesson03";

export const articles = [lesson01, lesson02, lesson03].sort(
  (a, b) => a.lesson - b.lesson
);