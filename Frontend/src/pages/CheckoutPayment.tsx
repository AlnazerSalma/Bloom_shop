import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CheckoutSteps from "../components/common/checkout_steps/CheckoutSteps";
import CheckoutPaymentForm from "../components/forms/checkout_form/CheckoutPaymentForm";
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import OrderSummary from "../components/common/order_summary/OrderSummary";
import CheckoutCard from "../components/common/card/checkout_card/CheckoutCard";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import { mockUserPaymentCards } from "../assets/data/mock_data/mockPaymentCards";
import type { CartItem } from "../types/CartItem";
import "../style/pages/CheckoutPayment.css";

const CheckoutPayment: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { items: cartItems } = useLocalStorageList<CartItem>("cart");
  const [userCards, setUserCards] = useState(mockUserPaymentCards[0].cards);

  const [form, setForm] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  // store selected card id or 'new' if user fills new card
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSelectedCardId("new"); // mark as new card if user edits form
  };

  const handleAddCard = () => {
    // Save card info temporarily in localStorage
    localStorage.setItem("paymentInfo", JSON.stringify(form));
    navigate("/checkout/review");
  };

  const handleSelectCard = (id: string) => {
    setUserCards((prev) =>
      prev.map((card) => ({ ...card, selected: card.id === id }))
    );
    setSelectedCardId(id);
    const cardToEdit = userCards.find((c) => c.id === id);
    if (cardToEdit) {
      setForm({
        cardNumber: cardToEdit.cardNumber,
        cardName: cardToEdit.cardName,
        expiryDate: cardToEdit.expiryDate,
        cvv: cardToEdit.cvv,
      });
    }
  };

  const handleEditCard = (id: string) => {
    const cardToEdit = userCards.find((c) => c.id === id);
    if (cardToEdit) {
      setForm({
        cardNumber: cardToEdit.cardNumber,
        cardName: cardToEdit.cardName,
        expiryDate: cardToEdit.expiryDate,
        cvv: cardToEdit.cvv,
      });
      setSelectedCardId(id);
    }
  };

  const handleDeleteCard = (id: string) => {
    setUserCards((prev) => prev.filter((card) => card.id !== id));
    if (selectedCardId === id) setSelectedCardId(null);
  };

  return (
    <div className="checkout-payment-page">
      <ScrollReveal type="down">
        <h2 className="checkout-title">{t("checkout.paymentMethod.title")}</h2>
      </ScrollReveal>

      <div className="checkout-grid">
        {/* left column: payment form */}
        <div className="checkout-left">
          <RevealGroup type="down" stagger={200}>
            <CheckoutSteps currentStep="payment" />

            <div className="checkout-instructions">
              <h3>{t("checkout.paymentMethod.selectPaymentMethod")}</h3>
              <p>
                {t("checkout.paymentMethod.paymentInstructions")}
                <br />
                {t("checkout.paymentMethod.enterNewCardInfo")}
              </p>
            </div>

            <div className="payment-cards-row">
              {userCards.map((card) => (
                <CheckoutCard
                  key={card.id}
                  id={card.id}
                  title={card.cardName}
                  content={`${card.cardNumber.slice(
                    0,
                    2
                  )} **** **** ${card.cardNumber.slice(-4)}  |  Exp: ${
                    card.expiryDate
                  }`}
                  isSelected={card.selected}
                  onSelect={handleSelectCard}
                  onEdit={handleEditCard}
                  onDelete={handleDeleteCard}
                />
              ))}
            </div>

            {/* Show "Use this card" button if a card is selected or new card is filled */}
            {selectedCardId && (
              <RectangularButton
                text={t("checkout.paymentMethod.useThisCard")}
                className="primary use-card-btn"
                onClick={handleAddCard}
              />
            )}

            <hr className="form-separator" />

            <div className="checkout-instructions">
              <h3>{t("checkout.paymentMethod.enterCardDetails")}</h3>
              <p>{t("checkout.paymentMethod.cardInstructions")}</p>
            </div>

            <div className="payment-form">
              <CheckoutPaymentForm
                form={form}
                onChange={handleChange}
                onSubmit={handleAddCard}
              />
            </div>
          </RevealGroup>
        </div>

        {/* right column: order summary */}
        <div className="checkout-right">
          <OrderSummary
            cartItems={cartItems}
            shippingFee={17}
            taxRate={0.02}
            showProceedButton={false}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPayment;
