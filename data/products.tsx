export type ProductKey = "big" | "mini" | "micro";

export type Product = {
  name: string;
  pointValue: number;
  margin: number;
};

export const products: Record<ProductKey, Product> = {
  big: {
    name: "大台指",
    pointValue: 200,
    margin: 636000,
  },

  mini: {
    name: "小台指",
    pointValue: 50,
    margin: 159000,
  },

  micro: {
    name: "微台指",
    pointValue: 10,
    margin: 31800,
  },
};