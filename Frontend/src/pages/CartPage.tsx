import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useIsArabic from "../hook/useIsArabic";
import type { CartItem } from "../types/CartItem";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import OrderSummary from "../components/common/order_summary/OrderSummary";
import "../style/pages/CartPage.css";

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const {
    items: cartItems,
    removeItem,
    updateItem,
  } = useLocalStorageList<CartItem>("cart");

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
            <RevealGroup type="down" stagger={200}>
              <h2 className="cart-title">
                {t("cartPage.your")}{" "}
                <span className="highlight">{t("cartPage.cart")}</span>
              </h2>
              <span className="cart-count">
                {" "}
                {cartItems.length} {t("cartPage.items")}
              </span>
            </RevealGroup>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">{t("cartPage.empty")}</p>
          ) : (
            <div className="table-container">
              <ScrollReveal type="down">
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
                    {cartItems.map((item) => {
                      const effectivePrice = item.discount
                        ? item.price * (1 - item.discount / 100)
                        : item.price;

                      return (
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
                          <td>
                            {item.discount ? (
                              <>
                                <span className="original-price">
                                  ${item.price.toFixed(2)}
                                </span>{" "}
                                <span className="discounted-price">
                                  ${effectivePrice.toFixed(2)}
                                </span>
                              </>
                            ) : (
                              <>${item.price.toFixed(2)}</>
                            )}
                          </td>
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
                              <input
                                type="number"
                                value={item.quantity}
                                readOnly
                              />
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
                          <td>
                            ${(effectivePrice * item.quantity).toFixed(2)}
                          </td>
                          <td>
                            <button
                              onClick={() =>
                                removeItem(item.id, item.selectedSize)
                              }
                              className="remove-btn"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </ScrollReveal>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <OrderSummary
          cartItems={cartItems}
          shippingFee={17}
          taxRate={0.02}
          showProceedButton={true}
          proceedText={t("cartPage.proceedToCheckout")}
          onProceed={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
};

export default Cart;
