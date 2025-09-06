import React from "react";
import Slider from "react-slick";
import StarRating from "../../common/star_rating/StarRating";
import { feedbackData } from "../../../assets/data/home/feedbackData";
import type { Feedback } from "../../../assets/data/home/feedbackData";
import useIsArabic from "../../../hook/useIsArabic";
import ScrollReveal from "../../common/reveal_animation/ScrollReveal";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import { useTranslation } from "react-i18next";
import "./CustomerFeedback.css";

const CustomerFeedback: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="customer-feedback py-10 mb-10">
      <div className="container">
        {/* Header */}
        <div className="header text-left mb-12">
          <RevealGroup type="down" stagger={200}>
          <h2>{t("customerFeedback.subtitle")}</h2>
          <h1>{t("customerFeedback.title")}</h1>
          <p>{t("customerFeedback.description")} </p>
          </RevealGroup>
        </div>

        {/* Slider */}
        <ScrollReveal type="up">
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {feedbackData.map((item: Feedback) => (
              <div
                key={item.id}
                className={`feedback-slide ${isArabic ? "rtl" : ""}`}
              >
                <div
                  className={`feedback-card ${
                    isArabic ? "feedback-card-rtl" : ""
                  }`}
                >
                  <div>
                    <StarRating
                      rating={item.rating}
                      size={20}
                      className={isArabic ? "rtl" : "ltr"}
                    />
                  </div>

                  <p className="feedback-text">{item.text[lang]}</p>

                  <div className="feedback-profile">
                    <img
                      src={item.img}
                      alt={item.name[lang]}
                      className="feedback-img"
                    />
                    <h2 className="feedback-name">{item.name[lang]}</h2>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default CustomerFeedback;
