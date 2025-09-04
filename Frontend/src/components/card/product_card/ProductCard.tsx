import React, { useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import StarRating from "../../star_rating/StarRating";
import ShopButton from "../../buttons/shop_button/ShopButton";
import "./ProductCard.css";

export interface Product {
  id: string;
  name: { en: string; ar: string };
  desc: { en: string; ar: string };
  price: number;
  discount?: number;
  rate: number;
  images: string[];
  category: "kids" | "men" | "women" | "footwear";
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const hasDiscount = !!product.discount;
  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discount! / 100)
    : product.price;

  // Handle image carousel on hover
  useEffect(() => {
    if (!isHovered || product.images.length <= 1) {
      setImageIndex(0);
      return;
    }

    const interval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % product.images.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [isHovered, product.images]);

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
        <div
          className="heart-circle"
          onClick={() => setIsFavorite(!isFavorite)}
        >
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
            onClick={() => console.log("Buy", product.name[lang])}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
