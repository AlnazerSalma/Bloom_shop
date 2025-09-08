import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../components/common/card/product_card/ProductCard";
import type { Product } from "../types/productType";
import {
  useLocalStorageCount,
} from "../hook/local_storage/useLocalStorageCount";
import "../style/pages/wishlistPage.css";

const WISHLIST_KEY = "wishlist";

const WishlistPage: React.FC = () => {
  const { t } = useTranslation();

  const count = useLocalStorageCount(WISHLIST_KEY)
  const wishlist: Product[] = (() => {
    const stored = localStorage.getItem(WISHLIST_KEY);

    return stored ? JSON.parse(stored) : [];
  })();
  return (
    <div className="wishlist-page">
      <div className="header">
        <h2>{t("wishlist.headerLine1")}</h2>
        <h1>{t("wishlist.headerLine2")}</h1>
          {count === 0 ? (
          <h4 className="empty-message">{t("wishlist.emptyMessage")}</h4>
        ) : (
          <p>{t("wishlist.browseMessage")}</p>
        )}
      </div>

        {count > 0 && (
        <div className="wishlist-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
