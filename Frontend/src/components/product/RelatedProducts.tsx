import React from "react";
import { useTranslation } from "react-i18next";
import ProductCard from "../common/card/product_card/ProductCard";
import type { Product } from "../../assets/data/mock_data/mockProducts";
import { mockProducts } from "../../assets/data/mock_data/mockProducts";
import "./product.css";

interface RelatedProductsProps {
  products: Product[];
  maxProducts?: number; // allow controlling how many products to show
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({
  products,
  maxProducts = 8,
}) => {
  const { t } = useTranslation();
  if (!products || products.length === 0) return null;

  // Shuffle an array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Fill up products to reach desired length
  const fillProducts = (products: Product[], allProducts: Product[]): Product[] => {
    const filled = [...products];
    const otherProducts = allProducts.filter((p) => !products.includes(p));
    let i = 0;
    while (filled.length < maxProducts && i < otherProducts.length) {
      filled.push(otherProducts[i % otherProducts.length]);
      i++;
    }
    return filled;
  };

  let finalProducts = fillProducts(products, mockProducts);
  finalProducts = shuffleArray(finalProducts).slice(0, maxProducts);

  return (
    <div className="related-products">
      <div className="header">
        <div className="header-content">
          <h2 className="subtitle">{t("productPage.relatedProducts.subtitle")}</h2>
          <h1 className="title">{t("productPage.relatedProducts.title")}</h1>
          <p className="description">{t("productPage.relatedProducts.description")}</p>
        </div>
      </div>

      <div className="related-products-grid">
        {finalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;

