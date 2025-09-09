import React from "react";
import { useTranslation } from "react-i18next";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import ScrollReveal from "../../common/reveal_animation/ScrollReveal";

import "./CheckoutForm.css";

interface CheckoutFormProps {
  form: {
    nameEn: string;
    nameAr: string;
    email: string;
    phone: string;
    countryEn: string;
    countryAr: string;
    cityEn: string;
    cityAr: string;
    streetEn: string;
    streetAr: string;
    buildingNumber: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  form,
  onChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  return (
    <div className="checkout-form-wrapper">
      <ScrollReveal type="up">
        {/* Form Title */}
        <h3 className="checkout-form-title">
          {t("checkout.checkoutForm.addNewAddress")}
        </h3>
      </ScrollReveal>
      <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
        <RevealGroup type="down" stagger={200}>
          {/* Name */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.name")}
            </label>
            <div className="form-inputs">
              <input
                type="text"
                name="nameEn"
                placeholder={`${t("checkout.checkoutForm.name")} (English)`}
                value={form.nameEn}
                onChange={onChange}
                className="input-card"
              />
              <input
                type="text"
                name="nameAr"
                placeholder={`${t("checkout.checkoutForm.name")} (Arabic)`}
                value={form.nameAr}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.email")}
            </label>
            <div className="form-inputs">
              <input
                type="email"
                name="email"
                placeholder={t("checkout.checkoutForm.email")}
                value={form.email}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.phone")}
            </label>
            <div className="form-inputs">
              <input
                type="tel"
                name="phone"
                placeholder={t("checkout.checkoutForm.phone")}
                value={form.phone}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Country */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.country")}
            </label>
            <div className="form-inputs">
              <input
                type="text"
                name="countryEn"
                placeholder={`${t("checkout.checkoutForm.country")} (English)`}
                value={form.countryEn}
                onChange={onChange}
                className="input-card"
              />
              <input
                type="text"
                name="countryAr"
                placeholder={`${t("checkout.checkoutForm.country")} (Arabic)`}
                value={form.countryAr}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* City */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.city")}
            </label>
            <div className="form-inputs">
              <input
                type="text"
                name="cityEn"
                placeholder={`${t("checkout.checkoutForm.city")} (English)`}
                value={form.cityEn}
                onChange={onChange}
                className="input-card"
              />
              <input
                type="text"
                name="cityAr"
                placeholder={`${t("checkout.checkoutForm.city")} (Arabic)`}
                value={form.cityAr}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Street */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.street")}
            </label>
            <div className="form-inputs">
              <input
                type="text"
                name="streetEn"
                placeholder={`${t("checkout.checkoutForm.street")} (English)`}
                value={form.streetEn}
                onChange={onChange}
                className="input-card"
              />
              <input
                type="text"
                name="streetAr"
                placeholder={`${t("checkout.checkoutForm.street")} (Arabic)`}
                value={form.streetAr}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Building Number */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.checkoutForm.building")}
            </label>
            <div className="form-inputs">
              <input
                type="text"
                name="buildingNumber"
                placeholder={t("checkout.checkoutForm.building")}
                value={form.buildingNumber}
                onChange={onChange}
                className="input-card"
              />
            </div>
          </div>

          {/* Submit button */}
          <RectangularButton
            text={t("checkout.checkoutForm.continue")}
            className="primary submit-btn"
            onClick={onSubmit}
          />
        </RevealGroup>
      </form>
    </div>
  );
};

export default CheckoutForm;
