import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import useIsArabic from "../../hook/useIsArabic";
import type { CartItem } from "../../types/CartItem";
import RectangularButton from "../../components/common/buttons/rectangular_button/RectangularButton";
import "./MiniCart.css";

type MiniCartProps = {
  items: CartItem[];
  onClose: () => void;
  onRemove: (productId: string, selectedSize?: string) => void;
};

const MiniCart: React.FC<MiniCartProps> = ({ items, onClose, onRemove }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  return (
    <div className="mini-cart shadow-lg p-3">
      <div className="mini-cart-header">
        <h5 className="m-0">{t("cartPage.itemsInCart", { count: items.length })}</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>

      {items.length === 0 ? (
        <p>{t("cart.empty")}</p>
      ) : (
        <>
          <ul className="mini-cart-list">
            {items.map((item) => (
              <li
                key={`${item.id}-${item.selectedSize ?? "default"}`}
                className="mini-cart-item d-flex align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img src={item.images[0]} alt={item.name[lang]} className="mini-cart-img" />
                  <div className="mini-cart-info">
                    <p>{item.name[lang]}</p>
                    <span>${item.price} x {item.quantity}</span>
                    {item.selectedSize && <small>{t("productPage.size")}: {item.selectedSize}</small>}
                  </div>
                </div>
                <button
                  className="cart-remove-item"
                  onClick={() => onRemove(item.id, item.selectedSize)}
                  aria-label="Remove item"
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
          <div className="mini-cart-bt">
            <RectangularButton
              text={t("cart.viewCart")}
              className="primary full-width"
              onClick={() => {
                onClose();
                navigate("/cart");
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
