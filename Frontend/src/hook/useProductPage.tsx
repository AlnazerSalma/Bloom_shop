import { useState } from "react";
import type { Product } from "../assets/data/mock_data/mockProducts";

export interface UseProductPageReturn {
  mainImage: string;
  setMainImage: (img: string) => void;
  isLightboxOpen: boolean;
  setIsLightboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentIndex: number;
  selectedSize: string | null;
  setSelectedSize: (size: string) => void;
  showAllSizes: boolean;
  toggleShowAllSizes: () => void;
  openLightbox: (index: number) => void;
  goNext: (e: React.MouseEvent) => void;
  goPrev: (e: React.MouseEvent) => void;
  discountedPrice: number;
}

export const useProductPage = (product: Product) => {
  const [mainImage, setMainImageState] = useState(product.images[0]);
  const setMainImage = (img: string) => setMainImageState(img);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showAllSizes, setShowAllSizes] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setMainImage(product.images[index]);
    setIsLightboxOpen(true);
  };

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % product.images.length;
    setCurrentIndex(nextIndex);
    setMainImage(product.images[nextIndex]);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
    setCurrentIndex(prevIndex);
    setMainImage(product.images[prevIndex]);
  };

  const toggleShowAllSizes = () => setShowAllSizes((prev) => !prev);

  const discountedPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  return {
    mainImage,
    setMainImage,
    isLightboxOpen,
    setIsLightboxOpen,
    currentIndex,
    selectedSize,
    setSelectedSize,
    showAllSizes,
    toggleShowAllSizes,
    openLightbox,
    goNext,
    goPrev,
    discountedPrice,
  } as UseProductPageReturn;
};
