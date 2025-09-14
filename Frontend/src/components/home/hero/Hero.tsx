import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageList } from "../../../assets/data/home/heroData";
import type { Slide } from "../../../assets/data/home/heroData";
import { useTranslation } from "react-i18next";
import useIsArabic from "../../../hook/useIsArabic";
import ShopButton from "../../common/buttons/shop_button/ShopButton";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import "./Hero.css";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const navigate = useNavigate();

  const HeroSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
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
        <Slider {...HeroSettings}>
          {ImageList.map((data: Slide, index: number) => (
            <div key={data.id} className="hero-slide">
              <div className="hero-grid">
                <div className="hero-text">
                  {index === 0 ? (
                    <RevealGroup type="down" stagger={200}>
                      <h1 className="hero-title">{data.title[lang]}</h1>
                      <p className="hero-desc">{data.description[lang]}</p>
                      <ShopButton
                        label={t("shopNow")}
                        margin="20px 0 0 30px"
                        onClick={() => navigate(`/shop`)}
                      />
                    </RevealGroup>
                  ) : (
                    <>
                      <h1 className="hero-title">{data.title[lang]}</h1>
                      <p className="hero-desc">{data.description[lang]}</p>
                      <ShopButton
                        label={t("shopNow")}
                        margin="20px 0 0 30px"
                        onClick={() => navigate(`/shop`)}
                      />
                    </>
                  )}
                </div>

                {index === 0 ? (
                  <div className="hero-img-wrapper">
                    <img
                      src={data.img}
                      alt={isArabic ? data.title.ar : data.title.en}
                      className="hero-img"
                    />
                  </div>
                ) : (
                  <div className="hero-img-wrapper">
                    <img
                      src={data.img}
                      alt={isArabic ? data.title.ar : data.title.en}
                      className="hero-img"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
