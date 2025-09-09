import React from "react";
import { useTranslation } from "react-i18next";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import "./CheckoutForm.css";

interface PaymentFormProps {
  form: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const CheckoutPaymentForm: React.FC<PaymentFormProps> = ({
  form,
  onChange,
  onSubmit,
}) => {
  const { t } = useTranslation();

  // Format card number (#### #### #### ####)
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "") // remove non-digits
      .replace(/(.{4})/g, "$1 ") // group every 4 digits
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    e.target.value = formattedValue;
    onChange(e);
  };

  return (
    <div className="checkout-form-wrapper">
      <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
        <RevealGroup type="down" stagger={200}>
          {/* Card Number */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.paymentMethod.cardNumber")}
            </label>
            <input
              type="text"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              maxLength={19}
              value={form.cardNumber}
              onChange={handleCardNumberChange}
              className="input-card"
              required
            />
          </div>

          {/* Card Name */}
          <div className="form-row">
            <label>
              <span className="required-star">*</span>{" "}
              {t("checkout.paymentMethod.cardName")}
            </label>
            <input
              type="text"
              name="cardName"
              placeholder={t("checkout.paymentMethod.cardName")}
              value={form.cardName}
              onChange={onChange}
              className="input-card"
              required
            />
          </div>

          <div className="form-row inline-inputs">
            <div className="flex-input">
              <label>
                <span className="required-star">*</span>{" "}
                {t("checkout.paymentMethod.expiryDate")}
              </label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/YY"
                maxLength={5}
                value={form.expiryDate}
                onChange={onChange}
                className="input-card"
                required
              />
            </div>

            <div className="flex-input">
              <label>
                <span className="required-star">*</span>{" "}
                {t("checkout.paymentMethod.cvv")}
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="XXX"
                maxLength={3}
                value={form.cvv}
                onChange={onChange}
                className="input-card"
                required
              />
            </div>
          </div>
          {/* Submit Button */}
          <RectangularButton
            text={t("checkout.paymentMethod.addCard")}
            className="primary submit-btn"
            onClick={onSubmit}
          />
        </RevealGroup>
      </form>
    </div>
  );
};

export default CheckoutPaymentForm;
