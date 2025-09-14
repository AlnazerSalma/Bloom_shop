import React from "react";
import RevealGroup from "../reveal_animation/RevealGroup";
import ScrollReveal from "../reveal_animation/ScrollReveal";
import RectangularButton from "../buttons/rectangular_button/RectangularButton";
import { useTranslation } from "react-i18next";
import type { CartItem } from "../../../types/CartItem";
import "./OrderSummary.css";
interface OrderSummaryProps {
  cartItems: CartItem[];
  shippingFee?: number;
  taxRate?: number;
  onProceed?: () => void;
  showProceedButton?: boolean;
  proceedText?: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  shippingFee = 17,
  taxRate = 0.02,
  onProceed,
  showProceedButton = false,
  proceedText = "Proceed",
}) => {
  const subtotal = cartItems.reduce((acc, item) => {
    // Apply discount as a percentage
    const effectivePrice = item.discount
      ? item.price * (1 - item.discount / 100)
      : item.price;
    return acc + effectivePrice * item.quantity;
  }, 0);

  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingFee;
  const { t } = useTranslation();

  return (
    <ScrollReveal type="down">
      <div className="order-summary">
        <RevealGroup type="down" stagger={200}>
          <h3>{t("cartPage.orderSummary")}</h3>
          <hr />
          <div className="summary-row">
            <span>{t("cartPage.subtotal")}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>{t("cartPage.shippingFee")}</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>{t("cartPage.tax")}</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </RevealGroup>

        <ScrollReveal type="up">
          <hr />
          <div className="summary-row total-row">
            <span>{t("cartPage.total")}</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {showProceedButton && onProceed && (
            <div style={{ marginTop: "1rem" }}>
              <RectangularButton
                text={proceedText}
                className="primary order-summary-btn"
                onClick={onProceed}
              />
            </div>
          )}
        </ScrollReveal>
      </div>
    </ScrollReveal>
  );
};

export default OrderSummary;
