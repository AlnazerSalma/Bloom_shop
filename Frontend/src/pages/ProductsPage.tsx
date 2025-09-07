import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import useIsArabic from "../hook/useIsArabic";
import { mockProducts } from "../assets/data/mock_data/mockProducts";
import StarRating from "../components/common/star_rating/StarRating";
import ProductImages from "../components/product/ProductImages";
import ProductSizes from "../components/product/ProductSizes";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import { useProductPage } from "../hook/useProductPage";
import type { Product } from "../types/productType";
import "../style/pages/ProductPage.css";

function ProductPage() {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === id);

  const productFallback = product ?? mockProducts[0];

  // Cart hook
  const { toggleItem: toggleCart } = useLocalStorageList<Product>(
    "cart",
    productFallback
  );

  // Wishlist hook
  const { exists: inWishlist, toggleItem: toggleWishlist } =
    useLocalStorageList<Product>("wishlist", productFallback);

  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(inWishlist);

  // Sync heart with localStorage
  useEffect(() => {
    setIsFavorite(inWishlist);
  }, [inWishlist]);

  const handleToggleFavorite = () => {
    toggleWishlist();
    setIsFavorite((prev) => !prev);
  };

  const {
    mainImage,
    setMainImage,
    isLightboxOpen,
    setIsLightboxOpen,
    selectedSize,
    setSelectedSize,
    showAllSizes,
    toggleShowAllSizes,
    openLightbox,
    goNext,
    goPrev,
    discountedPrice,
  } = useProductPage(productFallback);

  const relatedProducts = mockProducts.filter(
    (p) => p.category === productFallback.category && p.id !== productFallback.id
  );

  if (!product)
    return (
      <div className="product-page">
        <h2>{t("productPage.productNotFound")}</h2>
      </div>
    );

  return (
    <div className="product-page">
      <div className="product-container">
        <ProductImages
          product={product}
          mainImage={mainImage!}
          setMainImage={setMainImage}
          openLightbox={openLightbox}
        />

        <div className="product-details">
          <h2>{product.name[lang]}</h2>
          <div className="rating-wrapper">
            <span className="rating-number">({product.rate})</span>
            <StarRating rating={product.rate} size={16} />
          </div>
          <p>{product.desc[lang]}</p>
          <div className="product-price">
            <span className="product-price-final">
              ${discountedPrice!.toFixed(2)}
            </span>
            {product.discount && (
              <>
                <span className="product-price-original">
                  ${product.price.toFixed(2)}
                </span>
                <span className="discount-badge">{product.discount}%</span>
              </>
            )}
          </div>
          <hr className="size-divider" />

          {product.size && product.size.length > 0 && (
            <ProductSizes
              sizes={product.size}
              selectedSize={selectedSize!}
              setSelectedSize={setSelectedSize}
              showAllSizes={showAllSizes}
              toggleShowAllSizes={toggleShowAllSizes}
              t={t}
            />
          )}

          <ProductInfo product={product} t={t} lang={lang} />
          <div className="product-actions">
            {/* Quantity Counter */}
            <div className="quantity-counter">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            {/* Add to Cart */}
            <RectangularButton
              text={t("productPage.addToCart")}
              className="add-to-cart"
              onClick={() => {
                toggleCart();
                console.log("Added to cart:", product.name, "x", quantity);
              }}
            />

            {/* Wishlist Heart */}
            <div
              className={`heart-rect ${isFavorite ? "favorite" : ""}`}
              onClick={handleToggleFavorite}
            >
              {isFavorite ? (
                <FaHeart className="heart-icon" />
              ) : (
                <FaRegHeart className="heart-icon" />
              )}
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts products={relatedProducts} />
      {isLightboxOpen && (
        <div className="lightbox" onClick={() => setIsLightboxOpen(false)}>
          {product.images.length > 1 && (
            <span
              className="lightbox-arrow left"
              onClick={(e) => {
                e.stopPropagation();
                goPrev(e);
              }}
            >
              &#10094;
            </span>
          )}

          <img
            className="lightbox-image"
            src={mainImage!}
            alt={product.name[lang]}
            onClick={(e) => e.stopPropagation()}
          />

          {product.images.length > 1 && (
            <span
              className="lightbox-arrow right"
              onClick={(e) => {
                e.stopPropagation();
                goNext(e);
              }}
            >
              &#10095;
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
