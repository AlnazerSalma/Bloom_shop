import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CheckoutSteps from "../components/checkout_steps/CheckoutSteps";
import AddressCard from "../components/common/card/address_card/AddressCard";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import CheckoutForm from "../components/forms/checkout_form/CheckoutForm";
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import type { CartItem } from "../types/CartItem";
import { mockUserAddresses } from "../assets/data/mock_data/mockAddresses";
import "../style/pages/CheckoutInfo.css";
const CheckoutInfo: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nameEn: "",
    nameAr: "",
    email: "",
    phone: "",
    countryEn: "",
    countryAr: "",
    cityEn: "",
    cityAr: "",
    streetEn: "",
    streetAr: "",
    buildingNumber: "",
  });

  const [addresses, setAddresses] = useState(mockUserAddresses[0].addresses);
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(
    null
  );

  const SHIPPING_FEE = 17;
  const TAX_RATE = 0.02;
  const { items: cartItems } = useLocalStorageList<CartItem>("cart");

  const [subtotal, setSubtotal] = useState(0);

  // Load subtotal from localStorage if exists
  useEffect(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,

      0
    );

    setSubtotal(total);

    localStorage.setItem("cartSubtotal", total.toString());
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const addressData = {
      id: "custom-" + Date.now(),
      name: { en: form.nameEn, ar: form.nameAr },
      email: form.email,
      mobileNumber: form.phone,
      country: { en: form.countryEn, ar: form.countryAr },
      city: { en: form.cityEn, ar: form.cityAr },
      streetName: { en: form.streetEn, ar: form.streetAr },
      buildingNumber: form.buildingNumber,
      selected: true,
    };

    localStorage.setItem("checkoutInfo", JSON.stringify(addressData));
    navigate("/checkout/payment");
  };

  const handleSelect = (id: string) => {
    setAddresses((prev) =>
      prev.map((addr) => ({ ...addr, selected: addr.id === id }))
    );
    setSelectedAddressId(id);

    const selectedAddr = addresses.find((addr) => addr.id === id);
    if (selectedAddr) {
      setForm({
        nameEn: selectedAddr.name.en,
        nameAr: selectedAddr.name.ar,
        email: selectedAddr.email,
        phone: selectedAddr.mobileNumber,
        countryEn: selectedAddr.country.en,
        countryAr: selectedAddr.country.ar,
        cityEn: selectedAddr.city.en,
        cityAr: selectedAddr.city.ar,
        streetEn: selectedAddr.streetName.en,
        streetAr: selectedAddr.streetName.ar,
        buildingNumber: selectedAddr.buildingNumber,
      });
    }
  };

  const tax = subtotal * TAX_RATE;
  const total = subtotal + SHIPPING_FEE + tax;

  return (
    <div className="checkout-info-page">
      <ScrollReveal type="down">
        <h2 className="checkout-title">{t("checkout.shippingAddress")}</h2>
      </ScrollReveal>
      <div className="checkout-grid">

        {/* left Column: Checkout Info */}
        <div className="checkout-left">
          <RevealGroup type="down" stagger={200}>
            {/* Checkout Steps */}
            <CheckoutSteps currentStep="address" />

            <div className="checkout-instructions">
              <h3>{t("checkout.selectDeliveryAddress")}</h3>
              <p>{t("checkout.deliveryInstructions")}</p>
            </div>

            {/* Address Cards Row */}
            <div className="address-row">
              {addresses.map((addr) => (
                <AddressCard
                  key={addr.id}
                  address={addr}
                  isSelected={addr.selected}
                  onSelect={handleSelect}
                  onEdit={() => console.log("Edit", addr.id)}
                  onDelete={() => console.log("Delete", addr.id)}
                />
              ))}
            </div>
          </RevealGroup>

          {selectedAddressId && (
            <RectangularButton
              text={t("checkout.deliverHere")}
              className="primary deliver-btn"
              onClick={handleSubmit}
            />
          )}
          <hr className="form-separator" />

          <CheckoutForm
            form={form}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
        {/* right Column: Order summary */}
        <div className="checkout-right">
          <div className="order-summary">
            <h3>{t("cartPage.orderSummary")}</h3>
            <hr />
            <div className="summary-row">
              <span>{t("cartPage.subtotal")}</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>{t("cartPage.shippingFee")}</span>
              <span>${SHIPPING_FEE.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>{t("cartPage.tax")}</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <hr />
            <div className="summary-row total-row">
              <span>{t("cartPage.total")}</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
