import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useIsArabic from "../../../../hook/useIsArabic";
import { useImageCarousel } from "../../../../hook/product_card/useImageCarousel";
import { useLocalStorageList } from "../../../../hook/local_storage/useLocalStorageList";
import type { Product } from "../../../../types/productType";
import StarRating from "../../star_rating/StarRating";
import ShopButton from "../../buttons/shop_button/ShopButton";
import "./ProductCard.css";

interface ProductCardProps {
  product: Product;
  onFavorite?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onFavorite }) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const imageIndex = useImageCarousel(product.images, isHovered);

  const { exists: isFavorite, toggleItem: toggleFavorite } =
    useLocalStorageList<Product>("wishlist", product);

  const hasDiscount = !!product.discount;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discount! / 100)
    : product.price;

  const handleToggleFavorite = () => {
    toggleFavorite(product);
    if (onFavorite) onFavorite(product);
  };
  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image & Favorite */}
      <div className="image-container">
        <img
          src={product.images[imageIndex]}
          alt={product.name[lang]}
          className="product-card-image"
          loading="lazy"
        />
        <div className="heart-circle" onClick={handleToggleFavorite}>
          {isFavorite ? (
            <FaHeart className="heart-icon favorite" />
          ) : (
            <FaRegHeart className="heart-icon" />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="product-info">
        <h3 className="product-name">{product.name[lang]}</h3>
        <p className="product-desc">{product.desc[lang]}</p>

        {/* Rating */}
        <div className="rating-row">
          <span className="rating-number">{product.rate.toFixed(1)}</span>
          <StarRating rating={product.rate} size={14} />
        </div>

        {/* Price & Buy Button */}
        <div className="price-row">
          <div className="price-info">
            <span className="final-price">${discountedPrice.toFixed(2)}</span>
            {hasDiscount && (
              <span className="original-price">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          <ShopButton
            label={t("buyNow")}
            width="100px"
            padding="6px 6px"
            fontSize="0.9rem"
            onClick={() => {
              navigate(`/product/${product.id}`, { replace: false });
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
