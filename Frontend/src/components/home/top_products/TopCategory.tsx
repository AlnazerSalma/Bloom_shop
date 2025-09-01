import React from "react";
import { categories } from "../../../assets/data/categoryData";
import type { Category } from "../../../assets/data/categoryData";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import ShopButton from "../../buttons/shop_button/ShopButton";
import StarRating from "../../star_rating/StarRating";
import "./TopCategory.css";

const TopCategory: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  return (
    <div className={`top-category ${isArabic ? "rtl" : ""}`}>
      <div className="container">
        {/* Header */}
        <div className="header" style={{ marginBottom: "120px" }}>
          <h2>{t("homePage.headerSmall")}</h2>
          <h1>{t("homePage.headerBig")}</h1>
          <p>{t("homePage.description")}</p>
        </div>

        {/* Categories Grid */}
        <div className="category-grid">
          {categories.map((cat: Category) => (
            <div key={cat.id} className="product-card group">
              <div className="image-section">
                <img
                  src={cat.img}
                  alt={cat.title[lang]}
                  className="product-img"
                />
              </div>
              <div className="card-content">
                <div className="product-stars">
                  <StarRating
                    rating={cat.rating}
                    size={16}
                    className={isArabic ? "rtl" : ""}
                  />
                </div>

                <h1 className="product-title">{cat.title[lang]}</h1>

                <p className="product-description">{cat.description[lang]}</p>

                <ShopButton label={t("homePage.buttonText")} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
