import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
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

  const cartRef = useRef<HTMLDivElement>(null);

  const getDiscountedPrice = (item: CartItem) => {
    const discount = item.discount ?? 0;
    return item.price - (item.price * discount) / 100;
  };

  const subtotal = items.reduce(
    (total, item) => total + getDiscountedPrice(item) * item.quantity,
    0
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div ref={cartRef} className="mini-cart shadow-lg p-3">
      <div className="mini-cart-header">
        <h5 className="m-0">
          {t("cartPage.itemsInCart", { count: items.length })}
        </h5>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        />
      </div>

      {items.length === 0 ? (
        <p>{t("cartPage.empty")}</p>
      ) : (
        <>
          <ul className="mini-cart-list">
            {items.map((item) => (
              <li
                key={`${item.id}-${item.selectedSize ?? "default"}`}
                className="mini-cart-item"
                onClick={() => {
                  onClose();
                  navigate(`/product/${item.id}`);
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.name[lang]}
                  className="mini-cart-img"
                />

                <div className="mini-cart-info">
                  <p className="mini-cart-title">{item.name[lang]}</p>
                  <span className="mini-cart-price">
                    {(item.discount ?? 0) > 0 ? (
                      <>
                        <div className="cart-item-row">
                          <span className="discounted-price">
                            {item.quantity} * $
                            {getDiscountedPrice(item).toFixed(2)}
                          </span>
                          <span className="old-price">${item.price}</span>
                        </div>
                      </>
                    ) : (
                      <span>
                        {item.quantity} * ${item.price}
                      </span>
                    )}
                  </span>

                  {item.selectedSize ? (
                    <div className="mini-cart-size-row">
                      <small className="mini-cart-size">
                        {t("productPage.size")}: {item.selectedSize}
                      </small>
                      <button
                        className="cart-remove-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemove(item.id, item.selectedSize);
                        }}
                        aria-label="Remove item"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="cart-remove-item no-size"
                      onClick={() => onRemove(item.id)}
                      aria-label="Remove item"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="mini-cart-subtotal">
            <span className="mini-cart-subtotal-title">
              {t("cartPage.subtotal")}:
            </span>
            <span>{isArabic ? `${subtotal} $` : `$${subtotal}`}</span>
          </div>

          <div className="mini-cart-bt">
            <RectangularButton
              text={t("cartPage.viewCart")}
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
