export interface Product {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: number;
  discount?: number;
  rate: number;
  images: string[];
  category: "kids" | "men" | "women" | "footwear";
}
