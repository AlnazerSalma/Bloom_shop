import men from "../image/home/hero/men.png";
import women from "../image/home/hero/women.png";
import sale from "../image/home/hero/sale.png";

export interface Slide {
  id: number;
  img: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

export const ImageList: Slide[] = [
  {
    id: 1,
    img: men,
    title: {
      en: "Upto 50% off on all Men's Wear",
      ar: "خصم يصل إلى 50% على جميع ملابس الرجال"
    },
    description: {
      en: "Discover our latest collection of men's clothing and enjoy amazing discounts on all styles",
      ar: "اكتشف أحدث مجموعة من ملابس الرجال وتمتع بخصومات رائعة على جميع التصاميم"
    }
  },
  {
    id: 2,
    img: women,
    title: {
      en: "30% off on all Women's Wear",
      ar: "خصم 30% على جميع ملابس النساء"
    },
    description: {
      en: "Upgrade your wardrobe with our trendy women's outfits, now at unbeatable prices",
      ar: "قم بتجديد خزانة ملابسك مع أزياء النساء العصرية بأسعار لا تقاوم"
    }
  },
  {
    id: 3,
    img: sale,
    title: {
      en: "70% off on all Products Sale",
      ar: "خصم 70% على جميع المنتجات"
    },
    description: {
      en: "Grab your favorite items before they're gone! Limited-time sale on all products",
      ar: "احصل على منتجاتك المفضلة قبل نفادها! خصم لفترة محدودة على جميع المنتجات"
    }
  },
];
