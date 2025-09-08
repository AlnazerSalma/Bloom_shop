import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useIsArabic from "../hook/useIsArabic";
import type { CartItem } from "../types/CartItem";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import "../style/pages/CartPage.css";

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const SHIPPING_FEE = 17;

  const {
    items: cartItems,
    removeItem,
    updateItem,
  } = useLocalStorageList<CartItem>("cart");
  const [subtotal, setSubtotal] = useState(0);

  // Update subtotal whenever cartItems changes
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, [cartItems]);

  // Handle quantity changes
  const updateQuantity = (
    id: string,
    quantity: number,
    selectedSize?: string
  ) => {
    const itemToUpdate = cartItems.find(
      (item) => item.id === id && item.selectedSize === selectedSize
    );
    if (!itemToUpdate) return;

    updateItem(id, { quantity: Math.max(1, quantity) }, selectedSize);
  };

  return (
    <div className="cart-page">
      <div className="cart-row">
        {/* Cart Items */}
        <div className="cart-items">
          <div className="cart-text">
            <h2 className="cart-title">
              {t("cartPage.your")}{" "}
              <span className="highlight">{t("cartPage.cart")}</span>
            </h2>
            <span className="cart-count">
              {" "}
              {cartItems.length} {t("cartPage.items")}
            </span>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">{t("cartPage.empty")}</p>
          ) : (
            <div className="table-container">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>{t("cartPage.product")}</th>
                    <th>{t("cartPage.price")}</th>
                    <th>{t("cartPage.quantity")}</th>
                    <th>{t("cartPage.subtotal")}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={`${item.id}-${item.selectedSize ?? "default"}`}
                      className="cart-row-item"
                    >
                      <td className="product-cell">
                        <img
                          src={item.images[0]}
                          alt={item.name[lang]}
                          className="product-img"
                        />
                        <span>{item.name[lang]}</span>
                      </td>
                      <td>${item.price.toFixed(2)}</td>
                      <td>
                        <div className="quantity-control">
                          <button
                            className="decrease"
                            onClick={() =>
                              item.quantity > 1 &&
                              updateQuantity(
                                item.id,
                                item.quantity - 1,
                                item.selectedSize
                              )
                            }
                          >
                            <IoIosArrowDroprightCircle
                              className="arrow-icon"
                              size={24}
                              style={{
                                transform: isArabic
                                  ? "rotate(0deg)"
                                  : "rotate(180deg)",
                              }}
                            />
                          </button>
                          <input type="number" value={item.quantity} readOnly />
                          <button
                            className="increase"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1,
                                item.selectedSize
                              )
                            }
                          >
                            <IoIosArrowDroprightCircle
                              className="arrow-icon"
                              size={24}
                              style={{
                                transform: isArabic
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                              }}
                            />
                          </button>
                        </div>
                      </td>
                      <td>${(item.price * item.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          onClick={() => removeItem(item.id, item.selectedSize)}
                          className="remove-btn"
                        >
                          <RiDeleteBin6Line />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="order-summary">
          <h3>{t("cartPage.orderSummary")}</h3>
          <hr />
          <div className="summary-row">
            <span>{t("cartPage.items", { count: cartItems.length })}</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>{t("cartPage.shippingFee")}</span>
            <span>${SHIPPING_FEE.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>{t("cartPage.tax")}</span>
            <span>${(subtotal * 0.02).toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-row total-row">
            <span>{t("cartPage.total")}</span>
            <span>
              ${(subtotal + subtotal * 0.02 + SHIPPING_FEE).toFixed(2)}
            </span>
          </div>
          <RectangularButton
            text={t("cartPage.proceedToCheckout")}
            className="checkout-btn"
            onClick={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
