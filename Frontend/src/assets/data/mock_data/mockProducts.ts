import summerDress1 from "../../image/products/dress.png";
import summerDress2 from "../../image/products/dress1.png";
import summerDress3 from "../../image/products/dress2.png";
import summerDress4 from "../../image/products/dress3.png";
import shirt1 from "../../image/products/shirt.png";
import shirt2 from "../../image/products/shirt1.png";
import shirt3 from "../../image/products/shirt2.png";
import shirt4 from "../../image/products/shirt3.png";
import kidsHoodie1 from "../../image/products/hoodie.png";
import kidsHoodie2 from "../../image/products/hoodie1.png";
import kidsHoodie3 from "../../image/products/hoodie2.png";
import kidsHoodie4 from "../../image/products/hoodie3.png";
import kidsHoodie5 from "../../image/products/hoodie4.png";
import heels1 from "../../image/products/heels.png";
import heels2 from "../../image/products/heels1.png";
import heels3 from "../../image/products/heels2.png";
import heels4 from "../../image/products/heels3.png";
export interface Product {
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
  size?: string[];
  brand?: {
    en: string;
    ar: string;
  };
  material?: {
    en: string;
    ar: string;
  };
}

export const mockProducts: Product[] = [
  // ---- Men ----
  {
    id: "1",
    name: { en: "Men's Casual Shirt", ar: "قميص رجالي كاجوال" },
    desc: {
      en: "Lightweight cotton shirt, perfect for summer wear.",
      ar: "قميص قطني خفيف الوزن، مثالي للصيف.",
    },
    price: 40,
    discount: 15,
    rate: 5,
    images: [shirt1, shirt2, shirt3, shirt4],
    category: "men",
    size: ["S", "M", "L", "XL"],
    brand: { en: "H&M", ar: "اتش آند ام" },
    material: { en: "100% Cotton", ar: "قطن ١٠٠٪" },
  },
  {
    id: "2",
    name: { en: "Men's Denim Jeans", ar: "جينز رجالي" },
    desc: {
      en: "Classic fit denim jeans with a modern look.",
      ar: "جينز بقصة كلاسيكية ومظهر عصري.",
    },
    price: 60,
    rate: 4.5,
    images: [
      "https://kimesranch.com/cdn/shop/files/Mens-Straight-Fit-cowboy-cut-jeans-kimes-ranch.jpg?v=1737047277&width=1000",
    ],
    category: "men",
    size: ["30", "32", "34", "36"],
    brand: { en: "Levi's", ar: "ليفايز" },
    material: { en: "Denim (100% Cotton)", ar: "دينيم (قطن ١٠٠٪)" },
  },
  {
    id: "3",
    name: { en: "Men's Polo Shirt", ar: "قميص بولو رجالي" },
    desc: {
      en: "Comfortable and stylish polo shirt for casual wear.",
      ar: "قميص بولو مريح وأنيق للارتداء اليومي.",
    },
    price: 45,
    rate: 4,
    images: [
      "https://slimages.macysassets.com/is/image/MCY/products/8/optimized/27933338_fpx.tif",
    ],
    category: "men",
    size: ["S", "M", "L", "XL"],
    brand: { en: "Ralph Lauren", ar: "رالف لورين" },
    material: { en: "Cotton Blend", ar: "مزيج قطني" },
  },
  {
    id: "4",
    name: { en: "Men's Leather Jacket", ar: "جاكيت جلد رجالي" },
    desc: {
      en: "Premium leather jacket for a sleek look.",
      ar: "جاكيت جلدي فاخر لمظهر أنيق.",
    },
    price: 120,
    rate: 4,
    images: [
      "https://boutiqueofleathers.com/cdn/shop/files/BOL-Men_s-Racer-Leather-Jacket-Men_s-Leather-Jackets-21861425.jpg",
    ],
    category: "men",
    size: ["M", "L", "XL"],
    brand: { en: "Zara", ar: "زارا" },
    material: { en: "Genuine Leather", ar: "جلد طبيعي" },
  },
  {
    id: "5",
    name: { en: "Men's Sneakers", ar: "حذاء رياضي رجالي" },
    desc: {
      en: "Comfortable sneakers for everyday wear.",
      ar: "أحذية رياضية مريحة للاستخدام اليومي.",
    },
    price: 70,
    rate: 4.7,
    images: [
      "https://i.pinimg.com/736x/88/bc/07/88bc07c469064b061e0c1beaf42cfe5f.jpg",
    ],
    category: "men",
    size: ["40", "41", "42", "43", "44", "45"],
    brand: { en: "Nike", ar: "نايك" },
    material: { en: "Mesh & Rubber", ar: "شبك ومطاط" },
  },
  // ---- Women ----
  {
    id: "6",
    name: { en: "Summer Mini Dress", ar: "فستان صيفي قصير" },
    desc: {
      en: "Embrace the essence of summer with the Elenzga Women's Backless Bowknot Mini Dress. Crafted from lightweight, breathable fabric, this dress ensures comfort during warm days. Its intricate floral embroidery adds a touch of femininity, while the open back with a bowknot detail offers a playful and elegant flair. Perfect for beach outings, garden parties, or casual gatherings, this dress combines style and comfort effortlessly.",
      ar: "احتضني روح الصيف مع فستان إلينزغا القصير النسائي المكشوف الظهر مع عقدة. مصنوع من قماش خفيف الوزن وقابل للتهوية، يضمن هذا الفستان الراحة خلال الأيام الحارة. تضيف التطريزات الزهرية الدقيقة لمسة من الأنوثة، بينما يوفر الجزء المكشوف من الظهر مع عقدة لمسة مرحة وأنيقة. مثالي للنزهات على الشاطئ، حفلات الحدائق، أو التجمعات غير الرسمية، يجمع هذا الفستان بين الأناقة والراحة بسهولة."
    },
    price: 300,
    discount: 10,
    rate: 4.7,
    images: [summerDress1, summerDress2, summerDress3, summerDress4],
    category: "women",
    size: ["XS", "S", "M", "L", "0XL", "1XL", "2XL", "3XL"],
    brand: { en: "Zara", ar: "زارا" },
    material: { en: "Polyester & Cotton", ar: "بوليستر وقطن" },
  },
  {
    id: "7",
    name: { en: "Women's Handbag", ar: "حقيبة نسائية" },
    desc: {
      en: "Stylish handbag with spacious compartments.",
      ar: "حقيبة أنيقة مع أقسام واسعة.",
    },
    price: 80,
    rate: 5,
    images: [
      "https://img.kwcdn.com/product/fancy/008e97bb-d2be-4ff3-9598-06d9966d0afe.jpg",
    ],
    category: "women",
    brand: { en: "Michael Kors", ar: "مايكل كورس" },
    material: { en: "Leather", ar: "جلد" },
  },
  {
    id: "8",
    name: { en: "Women's Sandals", ar: "صندل نسائي" },
    desc: {
      en: "Comfortable sandals for summer days.",
      ar: "صنادل مريحة لأيام الصيف.",
    },
    price: 35,
    rate: 3.5,
    images: [
      "https://i.etsystatic.com/7931677/r/il/e7ce9d/4823922393/il_570xN.4823922393_gn7h.jpg",
    ],
    category: "women",
    size: ["36", "37", "38", "39"],
    brand: { en: "Aldo", ar: "الدو" },
    material: { en: "Synthetic Leather", ar: "جلد صناعي" },
  },
  {
    id: "9",
    name: { en: "Women's Blouse", ar: "بلوزة نسائية" },
    desc: {
      en: "Elegant blouse for office or casual outings.",
      ar: "بلوزة أنيقة للعمل أو للخروج اليومي.",
    },
    price: 50,
    rate: 4.6,
    images: [
      "https://ca.slipintosoft.com/cdn/shop/files/womens-dressy-casual-silk-blouse-long-sleeve-bow-tie-neck-silk-shirts-143156.jpg?v=1724324951",
    ],
    category: "women",
    size: ["S", "M", "L"],
    brand: { en: "Mango", ar: "مانجو" },
    material: { en: "Silk", ar: "حرير" },
  },
  {
    id: "10",
    name: { en: "Women's Sneakers", ar: "حذاء رياضي نسائي" },
    desc: {
      en: "Trendy sneakers for everyday wear.",
      ar: "أحذية رياضية عصرية للاستخدام اليومي.",
    },
    price: 65,
    rate: 4,
    images: [
      "https://cdn.doduae.com/image/cache/catalog/products/168323/168323_5285116041338_0-800x800.webp",
    ],
    category: "women",
    size: ["36", "37", "38", "39", "40"],
    brand: { en: "Adidas", ar: "أديداس" },
    material: { en: "Mesh & Rubber", ar: "شبك ومطاط" },
  },

  // ---- Kids ----
  {
    id: "11",
    name: { en: "Kids T-Shirt", ar: "تيشيرت للأطفال" },
    desc: {
      en: "Soft cotton t-shirt for kids.",
      ar: "تيشيرت قطني ناعم للأطفال.",
    },
    price: 20,
    rate: 3.5,
    images: [
      "https://image.uniqlo.com/UQ/ST3/in/imagesgoods/474596/item/ingoods_32_474596_3x4.jpg?width=494",
    ],
    category: "kids",
    size: ["XS", "S", "M", "L"],
    brand: { en: "Uniqlo", ar: "يونيكلو" },
    material: { en: "Cotton", ar: "قطن" },
  },
  {
    id: "12",
    name: { en: "Kids Shorts", ar: "شورت للأطفال" },
    desc: {
      en: "Comfortable shorts for active kids.",
      ar: "شورت مريح للأطفال النشطين.",
    },
    price: 18,
    rate: 4,
    images: [
      "https://www.mumkins.in/cdn/shop/files/boys-shorts-bl08666-navyblue-1.jpg?v=1756364282&width=1080",
    ],
    category: "kids",
    size: ["XS", "S", "M", "L"],
    brand: { en: "H&M Kids", ar: "اتش آند ام كيدز" },
    material: { en: "Cotton Blend", ar: "مزيج قطني" },
  },
  {
    id: "13",
    name: { en: "Kids Dress", ar: "فستان للأطفال" },
    desc: { en: "Cute dress for little ones.", ar: "فستان لطيف للصغار." },
    price: 25,
    rate: 3.7,
    images: [
      "https://img.kwcdn.com/product/fancy/f6c64025-3ffa-44f3-a3de-710f588289ba.jpg",
    ],
    category: "kids",
    size: ["XS", "S", "M"],
    brand: { en: "Carter's", ar: "كارترز" },
    material: { en: "Cotton", ar: "قطن" },
  },
  {
    id: "14",
    name: { en: "Kids Sneakers", ar: "حذاء رياضي للأطفال" },
    desc: {
      en: "Durable sneakers for playtime.",
      ar: "أحذية رياضية متينة للعب.",
    },
    price: 30,
    rate: 4.8,
    images: [
      "https://assets.myntassets.com/f_auto,q_auto:eco,dpr_1.3,w_158,c_limit,fl_progressive/v1/assets/images/30806367/2025/4/2/69aa7243-bea4-4fc1-a3ff-4f14e74365f61743591431129-MiArcus-Unisex-Kids-Striped-PU-Sneakers-6001743591430663-1.jpg",
    ],
    category: "kids",
    size: ["28", "29", "30", "31"],
    brand: { en: "Puma", ar: "بوما" },
    material: { en: "Synthetic & Rubber", ar: "مواد صناعية ومطاط" },
  },
  {
    id: "15",
    name: { en: "Kids Hoodie", ar: "هودي للأطفال" },
    desc: {
      en: "Warm hoodie for cooler days.",
      ar: "هودي دافئ للأيام الباردة.",
    },
    price: 28,
    rate: 5,
    images: [kidsHoodie1, kidsHoodie2, kidsHoodie3, kidsHoodie4, kidsHoodie5],
    category: "kids",
    size: ["XS", "S", "M", "L"],
    brand: { en: "Gap Kids", ar: "جاب كيدز" },
    material: { en: "Fleece Cotton", ar: "قطن صوفي" },
  },

  // ---- Footwear ----
  {
    id: "16",
    name: { en: "Heels", ar: "كعب عالي" },
    desc: {
      en: "Elegant high heels perfect for special occasions.",
      ar: "كعب عالي أنيق مثالي للمناسبات الخاصة.",
    },
    price: 80,
    rate: 4.7,
    images: [heels1, heels2, heels3, heels4],
    category: "footwear",
    size: ["36", "37", "38", "39", "40"],
    brand: { en: "Steve Madden", ar: "ستيف مادن" },
    material: { en: "Synthetic Leather", ar: "جلد صناعي" },
  },
  {
    id: "17",
    name: { en: "Formal Shoes", ar: "أحذية رسمية" },
    desc: {
      en: "Elegant formal shoes for office or events.",
      ar: "أحذية رسمية أنيقة للعمل أو المناسبات.",
    },
    price: 95,
    rate: 5,
    images: [
      "https://i.pinimg.com/736x/b6/9d/72/b69d72f5a5a37b9b8ed45d81e63f54e0.jpg",
    ],
    category: "footwear",
    size: ["40", "41", "42", "43", "44"],
    brand: { en: "Clarks", ar: "كلاركس" },
    material: { en: "Genuine Leather", ar: "جلد طبيعي" },
  },
  {
    id: "18",
    name: { en: "Flip Flops", ar: "شبشب" },
    desc: { en: "Comfortable flip flops for summer.", ar: "شبشب مريح للصيف." },
    price: 15,
    rate: 3.5,
    images: [
      "https://yellowboxshoes.com/cdn/shop/products/Shopify_ProductPhoto_nolina.jpg?v=1704736248&width=1200",
    ],
    category: "footwear",
    size: ["36", "37", "38", "39", "40"],
    brand: { en: "Crocs", ar: "كروكس" },
    material: { en: "Rubber & EVA", ar: "مطاط و EVA" },
  },
  {
    id: "19",
    name: { en: "Hiking Boots", ar: "حذاء تسلق" },
    desc: {
      en: "Sturdy boots for outdoor adventures.",
      ar: "أحذية قوية للمغامرات الخارجية.",
    },
    price: 120,
    rate: 4.8,
    images: [
      "https://cdn.runrepeat.com/storage/gallery/buying_guide_primary/43/best-lightweight-hiking-boots-20020534-960.jpg",
    ],
    category: "footwear",
    size: ["40", "41", "42", "43", "44"],
    brand: { en: "Timberland", ar: "تيمبرلاند" },
    material: { en: "Leather & Rubber", ar: "جلد ومطاط" },
  },
  {
    id: "20",
    name: { en: "Casual Loafers", ar: "حذاء كاجوال" },
    desc: {
      en: "Stylish loafers for everyday wear.",
      ar: "أحذية كاجوال أنيقة للاستخدام اليومي.",
    },
    price: 70,
    rate: 4,
    images: [
      "https://www.hollomen.com/cdn/shop/products/beige-suede-casual-loafer-756235.jpg?v=1748343287&width=1445",
    ],
    category: "footwear",
    size: ["40", "41", "42", "43"],
    brand: { en: "Gucci", ar: "غوتشي" },
    material: { en: "Suede Leather", ar: "جلد شامواه" },
  },
];
