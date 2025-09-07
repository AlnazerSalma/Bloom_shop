import type { Product } from "./productType";

export type CartItem = Product & {
  selectedSize?: string;
  quantity: number;
};
