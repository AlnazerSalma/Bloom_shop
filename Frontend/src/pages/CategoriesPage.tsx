import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { mockProducts } from "../assets/data/mock_data/mockProducts";
import { categoryInfo } from "../assets/data/categoryProduct";
import ProductCard from "../components/common/card/product_card/ProductCard";
import useIsArabic from "../hook/useIsArabic";
import "../style/pages/CategoriesPage.css";

const CategoryProducts: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const filteredProducts = mockProducts.filter(
    (product) => product.category === category
  );

  const header = category ? categoryInfo[category] : undefined;

  return (
    <div className="category-products-page">
      {/* Header Section */}
      {header && (
        <div className="header">
          <h2>{t("shopNow")}</h2>
          <h1>{header.title[lang]}</h1>
          <p>{header.desc[lang]}</p>
        </div>
      )}

      {/* Products Grid */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>{t("noProducts")}</p>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
