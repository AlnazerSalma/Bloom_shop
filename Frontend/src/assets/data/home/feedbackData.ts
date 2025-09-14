export interface Feedback {
  id: number;
  name: { en: string; ar: string };
  text: { en: string; ar: string };
  img: string;
  rating: number;
}

export const feedbackData: Feedback[] = [
  {
    id: 1,
    name: { en: "Sophia", ar: "صوفيا " },
    text: {
      en: "Amazing selection of clothes! The quality is top-notch and delivery was super fast",
      ar: "تشكيلة رائعة من الملابس! الجودة ممتازة والتوصيل كان سريعًا جدًا",
    },
    img: "https://picsum.photos/101/101",
    rating: 5,
  },
  {
    id: 2,
    name: { en: "James", ar: "جيمس " },
    text: {
      en: "Very happy with my purchase. The sizes were accurate and the packaging was neat",
      ar: "سعيد جدًا بشرائي. المقاسات دقيقة والتغليف مرتب",
    },
    img: "https://picsum.photos/102/102",
    rating: 4.5,
  },
  {
    id: 3,
    name: { en: "Emily", ar: "إميلي ر" },
    text: {
      en: "Loved the variety of designs. I found exactly what I was looking for",
      ar: "أحببت تنوع التصاميم. وجدت بالضبط ما كنت أبحث عنه",
    },
    img: "https://picsum.photos/103/103",
    rating: 4,
  },
  {
    id: 4,
    name: { en: "Michael", ar: "مايكل " },
    text: {
      en: "Customer support was helpful when I had questions about my order. Smooth shopping experience",
      ar: "كان دعم العملاء مفيدًا عندما كانت لدي أسئلة حول طلبي. تجربة تسوق سلسة",
    },
    img: "https://picsum.photos/104/104",
    rating: 4.5,
  },
  {
    id: 5,
    name: { en: "Olivia ", ar: "أوليفيا " },
    text: {
      en: "I receive compliments every time I wear their clothes. High-quality fabrics and trendy styles",
      ar: "أتلقى المديح في كل مرة أرتدي فيها ملابسهم. أقمشة عالية الجودة وتصاميم عصرية",
    },
    img: "https://picsum.photos/105/105",
    rating: 5,
  },
];
