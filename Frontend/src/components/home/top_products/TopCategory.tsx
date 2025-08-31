import React, { Component } from "react";
import { categories } from "../../../assets/data/categoryData";
import type { Category } from "../../../assets/data/categoryData";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import ShopButton from "../../buttons/shop_button/ShopButton";
import { FaStar } from "react-icons/fa";
import "./TopCategory.css";

const TopCategoryWrapper: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  return <TopCategory t={t} isArabic={isArabic} />;
};

interface TopCategoryProps {
  t: (key: string) => string;
  isArabic: boolean;
}

interface TopCategoryState {
  categories: Category[];
}

class TopCategory extends Component<TopCategoryProps, TopCategoryState> {
  constructor(props: TopCategoryProps) {
    super(props);
    this.state = { categories };
  }

  render() {
    const { categories } = this.state;
    const { t, isArabic } = this.props;

    return (
      <div className={`top-category ${isArabic ? "rtl" : ""}`}>
        <div className="container">
          {/* Header */}
          <div className="header text-left mb-24">
            <h2>{t("homePage.headerSmall")}</h2>
            <h1>{t("homePage.headerBig")}</h1>
            <p>{t("homePage.description")}</p>
          </div>

          {/* Categories Grid */}
          <div className="category-grid">
            {categories.map((cat) => (
              <div key={cat.id} className="product-card group">
                <div className="image-section">
                  <img
                    src={cat.img}
                    alt={isArabic ? cat.title.ar : cat.title.en}
                    className="product-img"
                  />
                </div>
                <div className="card-content">
                  {/* 4 Fixed Yellow Stars above title */}
                  <div className="product-stars">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} color="#D3B50CFF" />
                    ))}
                  </div>

                  <h1 className="product-title">
                    {isArabic ? cat.title.ar : cat.title.en}
                  </h1>

                  <p className="product-description">
                    {isArabic ? cat.description.ar : cat.description.en}
                  </p>

                  <ShopButton label={t("homePage.buttonText")} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TopCategoryWrapper;
