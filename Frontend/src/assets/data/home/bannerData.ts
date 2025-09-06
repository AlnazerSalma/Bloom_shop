import { FaMedal, FaShippingFast, FaTags } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import type { IconType } from "react-icons";

export type BannerFeature = {
  icon: IconType;
  title: {
    en: string;
    ar: string;
  };
  colorClass: "violet" | "orange" | "green" | "yellow";
};

export type BannerData = {
  title: {
    en: string;
    ar: string;
  };

  description: {
    en: string;
    ar: string;
  };
  features: BannerFeature[];
};

export const bannerData: BannerData = {
  title: {
    en: "Winter Sale up to 50% Off",
    ar: "تخفيضات الشتاء تصل إلى 50٪",
  },
  description: {
    en: "Discover our exclusive winter collection with up to 50% off. Enjoy premium quality products, fast delivery, easy payment options, and exciting offers all season long.",
    ar: "اكتشف مجموعتنا الشتوية الحصرية مع خصومات تصل إلى 50٪. استمتع بمنتجات عالية الجودة، توصيل سريع، طرق دفع سهلة، وعروض رائعة طوال الموسم.",
  },
  features: [
    {
      icon: FaMedal,
      title: { en: "Quality Products", ar: "منتجات عالية الجودة" },
      colorClass: "violet",
    },
    {
      icon: FaShippingFast,
      title: { en: "Fast Delivery", ar: "توصيل سريع" },
      colorClass: "orange",
    },
    {
      icon: RiSecurePaymentFill,
      title: { en: "Easy Payment Method", ar: "طرق دفع سهلة" },
      colorClass: "green",
    },
    {
      icon: FaTags,
      title: { en: "Get Offers", ar: "احصل على عروض" },
      colorClass: "yellow",
    },
  ],
};
