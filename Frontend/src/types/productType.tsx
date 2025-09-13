export type Product = {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  desc: {
    en: string;
    ar: string;
  };
  price: number;
  discount?: number;
  rate: number;
  images: string[];
  category: "kids" | "men" | "women" | "footwear";
  subcategory: "Clothing" | "Accessories" | "Shoes" | "Sandals"; 
  size?: string[];
  brand?: {
    en: string;
    ar: string;
  };
  material?: {
    en: string;
    ar: string;
  };
};

