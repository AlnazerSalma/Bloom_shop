import { useState, useEffect } from "react";
import type { Product } from "../../types/product";

const WISHLIST_KEY = "wishlist";

export const useWishlist = (product: Product) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (stored) {
      const wishlist: Product[] = JSON.parse(stored);
      setIsFavorite(wishlist.some((p) => p.id === product.id));
    }
  }, [product.id]);

  const toggleFavorite = () => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    let wishlist: Product[] = stored ? JSON.parse(stored) : [];

    if (isFavorite) {
      wishlist = wishlist.filter((p) => p.id !== product.id);
    } else {
      if (!wishlist.some((p) => p.id === product.id)) wishlist.push(product);
    }

    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    setIsFavorite(!isFavorite);
  };

  return { isFavorite, toggleFavorite };
};
