export type Feedback = {
  id: number;
  name: {
    en: string;
    ar: string;
  };
  text: {
    en: string;
    ar: string;
  };
  img: string;
  rating: number;
};
