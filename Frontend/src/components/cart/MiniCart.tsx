import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { Product } from "../../types/productType";
import "./MiniCart.css";

type MiniCartProps = {
  items: Product[];
  onClose: () => void;
};

const MiniCart: React.FC<MiniCartProps> = ({ items, onClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mini-cart shadow-lg p-3">
      {items.length === 0 ? (
        <p>{t("cart.empty")}</p>
      ) : (
        <>
          <ul className="mini-cart-list">
            {items.map((item) => (
              <li
                key={item.id}
                className="mini-cart-item d-flex align-items-center"
              >
                <img
                  src={item.images[0]}
                  alt={item.name.en}
                  className="mini-cart-img"
                />
                <div className="mini-cart-info">
                  <p>{item.name.en}</p>
                  <span>${item.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <button
            className="view-cart-btn"
            onClick={() => {
              onClose();
              navigate("/cart");
            }}
          >
            {t("cart.viewCart")}
          </button>
        </>
      )}
    </div>
  );
};

export default MiniCart;
