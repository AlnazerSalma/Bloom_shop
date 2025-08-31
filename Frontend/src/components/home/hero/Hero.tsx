import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageList } from "../../../assets/data/heroData";
import type { Slide } from "../../../assets/data/heroData";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import ShopButton from "../../buttons/shop_button/ShopButton";
import "./Hero.css";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    rtl: isArabic,
  };

  return (
    <div className={`hero ${isArabic ? "rtl" : ""}`}>
      <div className="hero-bg"></div>

      <div className="hero-container">
        <Slider {...settings}>
          {ImageList.map((data: Slide) => (
            <div key={data.id} className="hero-slide">
              <div className="hero-grid">
                <div className="hero-text">
                  <h1 className="hero-title">
                    {isArabic ? data.title.ar : data.title.en}
                  </h1>
                  <p className="hero-desc">
                    {isArabic ? data.description.ar : data.description.en}
                  </p>
                  <ShopButton
                    label={t("homePage.shopNow")}
                    margin="20px 0 0 30px"
                    onClick={() => console.log("Clicked")}
                  />
                </div>

                <div className="hero-img-wrapper">
                  <img
                    src={data.img}
                    alt={isArabic ? data.title.ar : data.title.en}
                    className="hero-img"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
