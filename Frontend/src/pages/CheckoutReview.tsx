import React from "react";
import { useTranslation } from "react-i18next";
import CheckoutSteps from "../components/common/checkout_steps/CheckoutSteps";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import CheckoutCard from "../components/common/card/checkout_card/CheckoutCard";
import OrderSummary from "../components/common/order_summary/OrderSummary";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import type { CartItem } from "../types/CartItem";
import useIsArabic from "../hook/useIsArabic";
import { mockUserAddresses } from "../assets/data/mock_data/mockAddresses";
import type { Address } from "../assets/data/mock_data/mockAddresses";
import { mockUserPaymentCards } from "../assets/data/mock_data/mockPaymentCards";
import type { PaymentCard } from "../assets/data/mock_data/mockPaymentCards";
import "../style/pages/CheckoutReview.css";

const CheckoutReview: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";
  const { items: cartItems } = useLocalStorageList<CartItem>("cart");

  const selectedAddress: Address | undefined =
    mockUserAddresses[0].addresses.find((addr) => addr.selected);

  const selectedCard: PaymentCard | undefined =
    mockUserPaymentCards[0].cards.find((card) => card.selected);

  return (
    <div className="checkout-review-page">
      <ScrollReveal type="down">
        <h2 className="checkout-title">
          {t("checkout.review.title")}
        </h2>
      </ScrollReveal>

      <div className="checkout-grid">
        <div className="checkout-left">
          <RevealGroup type="down" stagger={200}>
            <CheckoutSteps currentStep="review" />

            {/* Cart Items */}
            <div className="checkout-cart-items">
              {cartItems.map((item) => (
                <div
                  className="checkout-cart-item"
                  key={`${item.id}-${item.selectedSize ?? "default"}`}
                >
                  {item.images[0] && (
                    <img
                      src={item.images[0]}
                      alt={item.name[lang]}
                      className="item-image"
                    />
                  )}
                  <div className="item-details">
                    <h4 className="item-title">{item.name[lang]}</h4>
                    <p className="item-price">
                      {item.quantity} × ${item.price.toFixed(2)} = $
                      {(item.quantity * item.price).toFixed(2)}
                    </p>
                    {item.selectedSize && (
                      <p className="item-size">Size: {item.selectedSize}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Shipping Address */}
            {selectedAddress && (
              <div className="checkout-section">
                <h3>{t("checkout.shippingAddress")}</h3>
                <CheckoutCard
                  id={selectedAddress.id}
                  title={selectedAddress.name[lang]}
                  content={`${selectedAddress.streetName[lang]}, ${selectedAddress.buildingNumber}, ${selectedAddress.city[lang]}, ${selectedAddress.country[lang]}`}
                  isSelected={true}
                />
              </div>
            )}
            <hr className="form-separator" />
            {/* Payment Method */}
            {selectedCard && (
              <div className="checkout-section">
                <h3>{t("checkout.paymentMethod.title")}</h3>
                <CheckoutCard
                  id={selectedCard.id}
                  title={selectedCard.cardName}
                  content={`${selectedCard.cardNumber.slice(
                    0,
                    2
                  )} **** **** ${selectedCard.cardNumber.slice(-4)} | Exp: ${
                    selectedCard.expiryDate
                  }`}
                  isSelected={true}
                />
              </div>
            )}
          </RevealGroup>
        </div>

        {/* Order Summary */}
        <div className="checkout-right">
          <OrderSummary
            cartItems={cartItems}
            shippingFee={17}
            taxRate={0.02}
            showProceedButton={true}
            proceedText={t("checkout.review.placeOrder")}
            onProceed={() => {
              console.log("Proceed button clicked!");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutReview;
