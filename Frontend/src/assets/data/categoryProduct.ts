export interface CategoryAdInfo {
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
}

export const categoryInfo: Record<string, CategoryAdInfo> = {
  men: {
    title: { en: "Men's Collection", ar: "مجموعة الرجال" },
    desc: {
      en: "Discover stylish outfits designed for modern men",
      ar: "اكتشف أزياء أنيقة مصممة للرجل العصري",
    },
  },
  women: {
    title: { en: "Women's Fashion", ar: "أزياء النساء" },
    desc: {
      en: "Elegance and style for every occasion",
      ar: "الأناقة والموضة لكل مناسبة",
    },
  },
  kids: {
    title: { en: "Children's Wear", ar: "ملابس الأطفال" },
    desc: {
      en: "Comfortable and playful outfits for kids",
      ar: "ملابس مريحة ومرحة للأطفال",
    },
  },
  footwear: {
    title: { en: "Footwear Collection", ar: "مجموعة الأحذية" },
    desc: {
      en: "Step into comfort and fashion with our shoes",
      ar: "خطوات مليئة بالراحة والأناقة مع أحذيتنا",
    },
  },
};
