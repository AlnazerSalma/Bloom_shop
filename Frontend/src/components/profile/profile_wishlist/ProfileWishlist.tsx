import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../../common/card/product_card/ProductCard";
import type { Product } from "../../../types/productType";
import { useLocalStorageCount } from "../../../hook/local_storage/useLocalStorageCount";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import "./ProfileWishlist.css";
const WISHLIST_KEY = "wishlist";

const ProfileWishlist: React.FC = () => {
  const { t } = useTranslation();
  const count = useLocalStorageCount(WISHLIST_KEY);
  const wishlist: Product[] = (() => {
    const stored = localStorage.getItem(WISHLIST_KEY);
    return stored ? JSON.parse(stored) : [];
  })();

  if (count === 0) {
    return <p>{t("wishlist.emptyMessage")}</p>;
  }

  return (
    <div className="wishlist-profile-grid">
      <RevealGroup type="down" stagger={200}>
        {wishlist.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </RevealGroup>
    </div>
  );
};

export default ProfileWishlist;
