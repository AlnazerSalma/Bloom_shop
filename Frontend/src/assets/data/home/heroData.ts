import men from "../../image/home/hero/men.png";
import women from "../../image/home/hero/women.png";
import sale from "../../image/home/hero/sale.png";
import type { HeroSlide } from "../../../types/heroSlide";

export const ImageList: HeroSlide[] = [
  
  {
    id: 1,
    img: women,
    title: {
      en: "30% off on Women's Wear",
      ar: "خصم 30% على ملابس النساء"
    },
    description: {
      en: "Upgrade your wardrobe with our trendy women's outfits, now at unbeatable prices",
      ar: "قم بتجديد خزانة ملابسك مع أزياء النساء العصرية بأسعار لا تقاوم"
    }
  },
  {
    id: 2,
    img: sale,
    title: {
      en: "70% off on Products Sale",
      ar: "خصم 70% على المنتجات"
    },
    description: {
      en: "Grab your favorite items before they're gone! Limited-time sale on products",
      ar: "احصل على منتجاتك المفضلة قبل نفادها! خصم لفترة محدودة على المنتجات"
    }
  },
  {
    id: 3,
    img: men,
    title: {
      en: "Upto 50% off on Men's Wear",
      ar: "خصم يصل إلى 50% على ملابس الرجال"
    },
    description: {
      en: "Discover our latest collection of men's clothing and enjoy amazing discounts on all styles",
      ar: "اكتشف أحدث مجموعة من ملابس الرجال وتمتع بخصومات رائعة على جميع التصاميم"
    }
  },
];
