import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useIsArabic from "../hook/useIsArabic";
import { mockProducts } from "../assets/data/mock_data/mockProducts";
import StarRating from "../components/common/star_rating/StarRating";
import ProductImages from "../components/product/ProductImages";
import ProductSizes from "../components/product/ProductSizes";
import ProductInfo from "../components/product/ProductInfo";
import RelatedProducts from "../components/product/RelatedProducts";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import { useProductPage } from "../hook/useProductPage";
import "../style/pages/ProductPage.css";

function ProductPage() {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find((p) => p.id === id);

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
  } = useProductPage(product ?? mockProducts[0]);

  if (!product)
    return (
      <div className="product-page">
        <h2>Product not found</h2>
      </div>
    );
  const relatedProducts = mockProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
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
            <>
              <ProductSizes
                sizes={product.size}
                selectedSize={selectedSize!}
                setSelectedSize={setSelectedSize}
                showAllSizes={showAllSizes}
                toggleShowAllSizes={toggleShowAllSizes}
                t={t}
              />
            </>
          )}

          <ProductInfo product={product} t={t} lang={lang} />
          <div className="product-actions">
            <RectangularButton
              text={t("productPage.addToCart")}
              className="add-to-cart"
              onClick={() => console.log("Added to cart")}
            />
            <RectangularButton
              text={t("productPage.buyNow")}
              className="buy-now"
              onClick={() => console.log("Buy now")}
            />
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
