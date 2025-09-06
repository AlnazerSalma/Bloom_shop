import Men from "../../image/home/category/men.png";
import Women from "../../image/home/category/women.png";
import Kids from "../../image/home/category/Kids.png";
import Footwear from "../../image/home/category/footwear.png";

export interface Category {
  id: number;
  img: string;
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  rating: number;
}

export const categories: Category[] = [
  {
    id: 1,
    img: Men,
    title: { en: "Men", ar: "رجال" },
    description: {
      en: "Explore stylish and comfortable clothing for men, from casual to formal outfits",
      ar: "استكشف الملابس الأنيقة والمريحة للرجال، من الملابس الكاجوال إلى الرسمية",
    },
    rating: 5,
  },
  {
    id: 2,
    img: Women,
    title: { en: "Women", ar: "نساء" },
    description: {
      en: "Discover stylish outfits and the latest fashion trends designed for women",
      ar: "اكتشفي أحدث صيحات الموضة والأزياء العصرية المصممة للنساء",
    },
    rating: 5,
  },
  {
    id: 3,
    img: Kids,
    title: { en: "Kids", ar: "أطفال" },
    description: {
      en: "Trendy and comfy outfits for kids of all ages, perfect for every occasion",
      ar: "ملابس عصرية ومريحة للأطفال من جميع الأعمار، مناسبة لكل مناسبة",
    },
    rating: 5,
  },
  {
    id: 4,
    img: Footwear,
    title: { en: "Footwear", ar: "أحذية" },
    description: {
      en: "Step into style with a wide range of footwear collections for everyone",
      ar:"اكتشف أناقة كل خطوة مع مجموعتنا الكبيرة والمتنوعة من الأحذية المناسبة للجميع"
    },
    rating: 5,
  },
];
