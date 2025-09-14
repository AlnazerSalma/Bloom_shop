import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import { mockUserPaymentCards } from "../../../assets/data/mock_data/mockPaymentCards";
import type { PaymentCard } from "../../../assets/data/mock_data/mockPaymentCards";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import Modal from "../../common/Modal_popUp/Modal";
import CheckoutPaymentForm from "../../forms/checkout_form/CheckoutPaymentForm";
import "./ProfilePayment.css";

import cardImage from "../../../assets/image/footer/mastercard.jpg";

interface ProfilePaymentProps {
  userId: string;
}

const ProfilePayment: React.FC<ProfilePaymentProps> = ({ userId }) => {
  const { t } = useTranslation();

  const userCards =
    mockUserPaymentCards.find((uc) => uc.userId === userId)?.cards || [];

  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleDelete = (card: PaymentCard) => {
    alert("Delete card: " + card.id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("New card submitted: " + JSON.stringify(form));
    setShowForm(false);
  };

  return (
    <div className="profile-cards">
      <RevealGroup type="down" stagger={200}>
      <RectangularButton
        text={t("profile.cards.addNewCard")}
        icon={<FaPlus />}
        className="primary btn-add-card"
        onClick={() => setShowForm(true)}
      />

        {userCards.map((card) => (
          <div key={card.id} className="card-item">
            <div className="card-left">
              <img src={cardImage} alt="Card" className="card-image" />
              <div className="card-info">
                <h2>{card.cardName}</h2>
                <p>{card.cardNumber}</p>
              </div>
            </div>

            <div className="card-actions">
              <RectangularButton
                text={t("profile.cards.delete")}
                icon={<IoTrashOutline />}
                className="btn-delete-card"
                onClick={() => handleDelete(card)}
              />
            </div>
          </div>
        ))}
      </RevealGroup>

      {showForm && (
        <Modal
          title={t("profile.cards.addNewCard")}
          onClose={() => setShowForm(false)}
        >
          <CheckoutPaymentForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </Modal>
      )}
    </div>
  );
};

export default ProfilePayment;
