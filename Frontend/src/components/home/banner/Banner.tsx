import React from "react";
import BannerImg from "../../../assets/image/home/banner/shopping.avif";
import { bannerData } from "../../../assets/data/bannerData";
import useIsArabic from "../../../hook/useIsArabic";
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
            <img src={BannerImg} alt="Banner" className="banner-img" />
          </div>

          {/* Text details section */}
          <div className="banner-text">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
