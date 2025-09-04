import React from "react";
import { categories } from "../../../assets/data/categoryData";
import type { Category } from "../../../assets/data/categoryData";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import ShopButton from "../../buttons/shop_button/ShopButton";
import StarRating from "../../star_rating/StarRating";
import ScrollReveal from "../../reveal_animation/ScrollReveal";
import RevealGroup from "../../reveal_animation/RevealGroup";
import "./TopCategory.css";

const TopCategory: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  return (
    <div className={`top-category ${isArabic ? "rtl" : ""}`}>
      <div className="container">
        {/* Header */}
        <div className="header">
          <RevealGroup type="down" stagger={200}>
          <h2>{t("homePage.headerSmall")}</h2>
          <h1>{t("homePage.headerBig")}</h1>
          <p>{t("homePage.description")}</p>
          </RevealGroup>
        </div>

        {/* Categories Grid */}
        <ScrollReveal type="up">
        <div className="category-grid">
          {categories.map((cat: Category) => (
            <div key={cat.id} className="category-card group">
              <div className="image-section">
                <img
                  src={cat.img}
                  alt={cat.title[lang]}
                  className="category-img"
                />
              </div>
              <div className="card-content">
                <div className="category-stars">
                  <StarRating
                    rating={cat.rating}
                    size={16}
                    className={isArabic ? "rtl" : ""}
                  />
                </div>

                <h1 className="category-title">{cat.title[lang]}</h1>

                <p className="category-description">{cat.description[lang]}</p>

                <ShopButton label={t("homePage.buttonText")} padding="9px 25px"/>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TopCategory;
