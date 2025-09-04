import React from "react";
import ProductCard from "../../common/card/product_card/ProductCard";
import { mockProducts } from "../../../assets/data/mock_data/mockProducts";
import type { Product } from "../../../assets/data/mock_data/mockProducts";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import ScrollReveal from "../../common/reveal_animation/ScrollReveal";
import { useTranslation } from "react-i18next";
import "./BestSellers.css";
const getRandomProducts = (products: Product[], count: number) => {
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const BestSellers: React.FC = () => {
  const { t } = useTranslation();

  const categories: Product["category"][] = [
    "men",
    "women",
    "kids",
    "footwear",
  ];
  const topProducts: Product[] = categories.flatMap((cat) => {
    const filtered = mockProducts.filter(
      (p) => p.category === cat && p.rate >= 4.5
    );
    return getRandomProducts(filtered, 2);
  });

  // Shuffle the final array to mix products from different categories
  const shuffledProducts = [...topProducts].sort(() => Math.random() - 0.5);

  return (
    <div className="best-sellers-container">
      {/* Header */}
      <div className="header">
        <RevealGroup type="down" stagger={200}>
          <h2>{t("topSelling.topSelling")}</h2>
          <h1>{t("topSelling.bestSellers")}</h1>
          <p>{t("topSelling.description")}</p>
        </RevealGroup>
      </div>

      {/* Products Grid */}
      <ScrollReveal type="up">
        <div className="best-sellers-grid">
          {shuffledProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default BestSellers;
