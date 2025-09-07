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
import BabyGirls from "../../image/products/BabyGirls.png";
import BabyGirls1 from "../../image/products/BabyGirls1.png";
import BabyGirls2 from "../../image/products/BabyGirls2.png";
import BabyGirls3 from "../../image/products/BabyGirls3.png";
import BabyGirls4 from "../../image/products/BabyGirls4.png";
import type { Product } from "../../../types/productType";

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
      "https://calvinklein.scene7.com/is/image/CalvinKlein/4RC751G_XQE_main?wid=680&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
      "https://calvinklein.scene7.com/is/image/CalvinKlein/4RC751G_XQE_alternate1?wid=680&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
      "https://calvinklein.scene7.com/is/image/CalvinKlein/4RC751G_XQE_alternate3?wid=680&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
      "https://calvinklein.scene7.com/is/image/CalvinKlein/4RC751G_XQE_alternate4?wid=680&qlt=80%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0&fmt=webp",
    ],
    category: "men",
    size: ["30", "32", "34", "36"],
    brand: { en: "Calvin Klein", ar: "كالفن كلاين" },
    material: { en: "Denim (100% Cotton)", ar: "دينيم (قطن ١٠٠٪)" },
  },
  {
    id: "3",
    name: {
      en: "Cable-Knit Cotton Polo-Collar Sweater",
      ar: "سويتر رجالي برقبة بولو من القطن مضلع",
    },
    desc: {
      en: "Comfortable and stylish polo shirt for casual wear.",
      ar: "قميص بولو مريح وأنيق للارتداء اليومي.",
    },
    price: 45,
    rate: 4,
    images: [
      "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1487403_lifestyle?$rl_4x5_zoom$",
      "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1487403_alternate10?$rl_4x5_pdp$",
      "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1487403_alternate3?$rl_4x5_zoom$",
      "https://dtcralphlauren.scene7.com/is/image/PoloGSI/s7-1487403_alternate4?$rl_4x5_zoom$",
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
      "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW40776_AFE_alternate5?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
      "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW40776_AFE_main?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
      "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW40776_AFE_alternate1?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
      "https://tommy-europe.scene7.com/is/image/TommyEurope/MW0MW40776_AFE_alternate4?wid=781&fmt=jpeg&qlt=95%2C1&op_sharpen=0&resMode=sharp2&op_usm=1.5%2C.5%2C0%2C0&iccEmbed=0&printRes=72",
    ],
    category: "men",
    size: ["M", "L", "XL"],
    brand: { en: "Tommy Hilfiger", ar: "تومي هيلفيغر" },
    material: { en: "Genuine Leather", ar: "جلد طبيعي" },
  },
  {
    id: "5",
    name: { en: "Men's Fashion Auto-Lock Black Belt", ar: "حزام رجالي أسود" },
    desc: {
      en: "A premium auto-lock belt designed for modern men, combining style and durability.",
      ar: "حزام فاخر أوتوماتيك مصمم للرجل العصري يجمع بين الأناقة والمتانة.",
    },
    price: 45,
    rate: 4.6,
    images: [
      "https://aicdn.speedsize.com/0968b74d-3121-4862-ada1-18c855e99f74/storage.yandexcloud.net/cdn-prod.viled.kz/v3/original/257504zKCQc.jpg?speedsize=w_782",
      "https://aicdn.speedsize.com/0968b74d-3121-4862-ada1-18c855e99f74/storage.yandexcloud.net/cdn-prod.viled.kz/v3/original/257504j9RpR.jpeg?speedsize=w_782",
    ],
    category: "men",
    size: ["One Size"],
    brand: { en: "Gucci", ar: "غوتشي" },
    material: {
      en: "Genuine Leather & Metal Buckle",
      ar: "جلد أصلي ومشبك معدني",
    },
  },

  // ---- Women ----
  {
    id: "6",
    name: { en: "Summer Mini Dress", ar: "فستان صيفي قصير" },
    desc: {
      en: "Embrace the essence of summer with the Elenzga Women's Backless Bowknot Mini Dress. Crafted from lightweight, breathable fabric, this dress ensures comfort during warm days. Its intricate floral embroidery adds a touch of femininity, while the open back with a bowknot detail offers a playful and elegant flair. Perfect for beach outings, garden parties, or casual gatherings, this dress combines style and comfort effortlessly.",
      ar: "احتضني روح الصيف مع فستان إلينزغا القصير النسائي المكشوف الظهر مع عقدة. مصنوع من قماش خفيف الوزن وقابل للتهوية، يضمن هذا الفستان الراحة خلال الأيام الحارة. تضيف التطريزات الزهرية الدقيقة لمسة من الأنوثة، بينما يوفر الجزء المكشوف من الظهر مع عقدة لمسة مرحة وأنيقة. مثالي للنزهات على الشاطئ، حفلات الحدائق، أو التجمعات غير الرسمية، يجمع هذا الفستان بين الأناقة والراحة بسهولة.",
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
      "https://cdn.brandfield.com/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/1/9/196237506672-01_1.jpg",
      "https://cdn.brandfield.com/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/1/9/196237506672-02.jpg",
      "https://cdn.brandfield.com/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/1/9/196237506672-03_1.jpg",
      "https://cdn.brandfield.com/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/1/9/196237506672-06_1.jpg",
    ],
    category: "women",
    brand: { en: "Michael Kors", ar: "مايكل كورس" },
    material: { en: "Leather", ar: "جلد" },
  },
  {
    id: "8",
    name: {
      en: "Women's Prada Sunglasses",
      ar: "نظارات شمسية نسائية برادا",
    },
    desc: {
      en: "Elegant Prada oversized sunglasses with full UV protection, crafted for luxury and daily elegance.",
      ar: "نظارات شمسية برادا أنيقة كبيرة الحجم مع حماية كاملة من الأشعة فوق البنفسجية، مصممة للفخامة والأناقة اليومية.",
    },
    price: 280,
    rate: 4.9,
    images: [
      "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB15/E16KFE731/SPRB15_E16K_FE731_C_051_SLF.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB15/E16KFE731/SPRB15_E16K_FE731_C_051_MDL.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB15/E16KFE731/SPRB15_E16K_FE731_C_051_SLR.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
      "https://www.prada.com/content/dam/pradabkg_products/S/SPR/SPRB15/E16KFE731/SPRB15_E16K_FE731_C_051_SLS.jpg/_jcr_content/renditions/cq5dam.web.hebebed.2000.2000.jpg",
    ],
    category: "women",
    size: ["One Size"],
    brand: { en: "Prada", ar: "برادا" },
    material: { en: "Acetate & Metal", ar: "أسيتات ومعدن" },
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
      "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084022_01.jpg?imwidth=2048&imdensity=1&ts=1720526661010",
      "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/outfit/S/77084022_01-99999999_01.jpg?imwidth=2048&imdensity=1&ts=1720526661010",
      "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084022_01_R.jpg?imwidth=2048&imdensity=1&ts=1720526661010",
      "https://shop.mango.com/assets/rcs/pics/static/T7/fotos/S/77084022_01_D2.jpg?imwidth=2048&imdensity=1&ts=1720526661010",
    ],
    category: "women",
    size: ["S", "M", "L"],
    brand: { en: "Mango", ar: "مانجو" },
    material: { en: "Silk", ar: "حرير" },
  },
  {
    id: "10",
    name: { en: "Women's Short Jeans", ar: "جينز نسائي قصير" },
    desc: {
      en: "Trendy and comfortable short jeans perfect for casual summer outings.",
      ar: "جينز نسائي قصير عصري ومريح مثالي للخروج الصيفي اليومي.",
    },
    price: 55,
    rate: 4.5,
    images: [
      "https://static.zara.net/assets/public/e2b4/196f/a08544e8affb/e0a6df1305dc/08727002400-p/08727002400-p.jpg?ts=1753372458769&w=1024",
      "https://static.zara.net/assets/public/77c9/f6b4/649c4a6f87e6/b71fc1a2066e/08727002400-a1/08727002400-a1.jpg?ts=1753372459158&w=1125",
      "https://static.zara.net/assets/public/f740/5894/463b436f99f3/b986e6a32530/08727002400-a2/08727002400-a2.jpg?ts=1753372458830&w=750",
      "https://static.zara.net/assets/public/afb2/1524/196c4d93ac62/4e0a0a19517d/08727002400-e1/08727002400-e1.jpg?ts=1743697691516&w=750",
    ],
    category: "women",
    size: ["XS", "S", "M", "L", "XL"],
    brand: { en: "Zara", ar: "زارا" },
    material: { en: "Denim (100% Cotton)", ar: "دينيم (قطن ١٠٠٪)" },
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
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474599/item/idgoods_09_474599_3x4.jpg?width=369",
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474599/sub/idgoods_474599_sub7_3x4.jpg?width=369",
      "https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474599/sub/idgoods_474599_sub9_3x4.jpg?width=369",
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
      "https://image.hm.com/assets/hm/2c/76/2c766b58e1a06fdb71f1c1d19db5595e7ea634d8.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/42/90/42900f05cd6043cbaf6d095365d774245758eb69.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/86/43/86433cf6ab7c96edf2a77422bc4287a17381d94e.jpg?imwidth=1260",
      "https://image.hm.com/assets/hm/0a/8d/0a8dc21be9a955b84591fb52ae556bd5daa27f3f.jpg?imwidth=1260"
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
      "https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc1cd0c2e/productimages/2S322210.jpg?sw=470",
      "https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwde1d715d/productimages/2S322210_1.jpg?sw=470",
      "https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw76b1a2c7/productimages/2S322210_2.jpg?sw=470",
      "https://www.carters.com/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwe6fbef82/productimages/2S322210_LV03.jpg?sw=470"
    ],
    category: "kids",
    size: ["XS", "S", "M"],
    brand: { en: "Carter's", ar: "كارترز" },
    material: { en: "Cotton", ar: "قطن" },
  },
  {
    id: "14",
    name: {
      en: "Baby Girls' 2-in-1 Floral Jumpsuit with Headband",
      ar: "بدلة أطفال للبنات مزخرفة 2 في 1 مع رباط رأس",
    },
    desc: {
      en: "Adorable 2-in-1 jumpsuit featuring ribbed and solid patchwork, bow embellishment, and delicate floral prints. Comes with a matching headband, ideal for spring and autumn.",
      ar: "بدلة أطفال للبنات 2 في 1 رائعة تحتوي على باتشوورك مضلع وصلب، وزينة على شكل قوس، ونقشات زهرية دقيقة. تأتي مع رباط رأس مطابق، مثالية للربيع والخريف.",
    },
    price: 30,
    rate: 4.6,
    images: [BabyGirls, BabyGirls1, BabyGirls2, BabyGirls3, BabyGirls4],
    category: "kids",
    size: ["0-3M", "3-6M", "6-12M", "12-18M"],
    brand: { en: "Little Me", ar: "ليتل مي" },
    material: { en: "Cotton & Polyester", ar: "قطن وبوليستر" },
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
    name: {
      en: "Women's Slim Point Flip Flops",
      ar: "شبشب نسائي نحيف",
    },
    desc: {
      en: "Elegant and lightweight slim point flip flops, perfect for casual summer outings. Durable sole and comfortable fit.",
      ar: "شبشب نسائي نحيف أنيق وخفيف الوزن، مثالي للنزهات الصيفية اليومية. نعل متين وراحة في الارتداء.",
    },
    price: 15,
    rate: 3.5,
    images: [
      "https://www.havaianas.com/cdn/shop/files/4149584-slim-point-6842-0.png?crop=center&height=450&v=1725759146&width=450",
      "https://www.havaianas.com/cdn/shop/files/4149584-slim-point-6842-1.png?crop=center&height=450&v=1725759147&width=450",
      "https://www.havaianas.com/cdn/shop/files/4149584-slim-point-6842-2.png?crop=center&height=450&v=1725759147&width=450",
      "https://www.havaianas.com/cdn/shop/files/4149584-slim-point-6842-3.png?crop=center&height=450&v=1725759147&width=450",
    ],
    category: "footwear",
    size: ["36", "37", "38", "39", "40"],
    brand: { en: "Havaianas", ar: "هافاياناس" },
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
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719462322/TB0A6BNNEO8-HERO/Mens-Mt-Maddsen-Hiking-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719462321/TB0A6BNNEO8-ALT2/Mens-Mt-Maddsen-Hiking-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719462320/TB0A6BNNEO8-ALT3/Mens-Mt-Maddsen-Hiking-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719462324/TB0A6BNNEO8-ALT7/Mens-Mt-Maddsen-Hiking-Boot.png",
      "https://assets.timberland.com/images/t_img/f_auto,h_650,w_650,e_sharpen:60/dpr_2.0/v1719462321/TB0A6BNNEO8-ALT5/Mens-Mt-Maddsen-Hiking-Boot.png",
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
  {
    id: "21",
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
    category: "footwear",
    size: ["36", "37", "38", "39"],
    brand: { en: "Aldo", ar: "الدو" },
    material: { en: "Synthetic Leather", ar: "جلد صناعي" },
  },
  {
    id: "22",
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
    category: "footwear",
    size: ["36", "37", "38", "39", "40"],
    brand: { en: "Adidas", ar: "أديداس" },
    material: { en: "Mesh & Rubber", ar: "شبك ومطاط" },
  },
  {
    id: "23",
    name: { en: "Kids Sneakers", ar: "حذاء رياضي للأطفال" },
    desc: {
      en: "Durable sneakers for playtime.",
      ar: "أحذية رياضية متينة للعب.",
    },
    price: 30,
    rate: 4.8,
    images: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395555/06/sv01/fnd/PNA/fmt/png/RS-X-Little-Kids'-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395555/06/fnd/PNA/fmt/png/RS-X-Little-Kids'-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395555/06/bv/fnd/PNA/fmt/png/RS-X-Little-Kids'-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/395555/06/sv02/fnd/PNA/fmt/png/RS-X-Little-Kids'-Sneakers",
    ],
    category: "footwear",
    size: ["28", "29", "30", "31"],
    brand: { en: "Puma", ar: "بوما" },
    material: { en: "Synthetic & Rubber", ar: "مواد صناعية ومطاط" },
  },
];
