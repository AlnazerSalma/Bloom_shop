import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/common/card/product_card/ProductCard";
import type { Product } from "../types/product";
import "../style/pages/wishlist.css";

const WISHLIST_KEY = "wishlist";

const WishlistPage: React.FC = () => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const { t } = useTranslation();

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    if (stored) setWishlist(JSON.parse(stored));
  }, []);

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlist((prev) => {
      const updated = prev.filter((p) => p.id !== productId);
      localStorage.setItem(WISHLIST_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="wishlist-page">
      <div className="header">
        <h2>{t("wishlist.headerLine1")}</h2>
        <h1>{t("wishlist.headerLine2")}</h1>
        {wishlist.length === 0 ? (
          <h4 className="empty-message">{t("wishlist.emptyMessage")}</h4>
        ) : (
          <p>{t("wishlist.browseMessage")}</p>
        )}
      </div>

      {wishlist.length === 0 ? null : (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onFavorite={() => handleRemoveFromWishlist(product.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
