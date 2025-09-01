import React from "react";
import BannerImg from "../../../assets/image/home/banner/shopping.avif";
import { bannerData } from "../../../assets/data/bannerData";
import useIsArabic from "../../../hook/useIsArabic";
import ScrollReveal from "../../reveal_animation/ScrollReveal";
import RevealGroup from "../../reveal_animation/RevealGroup";
import "./Banner.css";


const Banner: React.FC = () => {
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  return (
    <div className="banner">
      <div className="banner-container">
        <div className="banner-grid">
          {/* Image section */}
          <div className="banner-image" data-aos="zoom-in">
            <ScrollReveal type="up">
            <img src={BannerImg} alt="Banner" className="banner-img" />
            </ScrollReveal>
          </div>

          {/* Text details section */}
          <div className="banner-text">
            <RevealGroup type="down" stagger={200}>
            <h1 data-aos="fade-up">{bannerData.title[lang]}</h1>
            <p data-aos="fade-up">{bannerData.description[lang]}</p>

            <div className="banner-features">
              {bannerData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div className="feature-item" data-aos="fade-up" key={index}>
                    <Icon className={`feature-icon ${feature.colorClass}`} />
                    <p>{feature.title[lang]}</p>
                  </div>
                );
              })}
            </div>
            </RevealGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
