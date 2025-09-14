import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CheckoutSteps from "../components/common/checkout_steps/CheckoutSteps";
import useIsArabic from "../hook/useIsArabic";
import CheckoutCard from "../components/common/card/checkout_card/CheckoutCard";
import RectangularButton from "../components/common/buttons/rectangular_button/RectangularButton";
import CheckoutForm from "../components/forms/checkout_form/CheckoutForm";
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import { useLocalStorageList } from "../hook/local_storage/useLocalStorageList";
import OrderSummary from "../components/common/order_summary/OrderSummary";
import type { CartItem } from "../types/CartItem";
import { mockUserAddresses } from "../assets/data/mock_data/mockAddresses";
import "../style/pages/CheckoutInfo.css";
const CheckoutInfo: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

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

  const { items: cartItems } = useLocalStorageList<CartItem>("cart");

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
    const updatedAddresses = addresses.map((addr) => ({
      ...addr,
      selected: addr.id === id,
    }));
    setAddresses(updatedAddresses);
    setSelectedAddressId(id);

    const selectedAddr = updatedAddresses.find((addr) => addr.id === id);
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
              {addresses.map((addr) => {
                const fullAddress = `${addr.country[lang]}, ${addr.city[lang]}, ${addr.streetName[lang]}, ${addr.buildingNumber}`;

                return (
                  <CheckoutCard
                    key={addr.id}
                    id={addr.id}
                    title={addr.name[lang]}
                    content={fullAddress}
                    isSelected={addr.selected}
                    onSelect={handleSelect}
                    onEdit={() => console.log("Edit", addr.id)}
                    onDelete={() => console.log("Delete", addr.id)}
                    editLabel={t("edit")}
                    deleteLabel={t("delete")}
                  />
                );
              })}
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
        {/* right Column: order summary */}
        <div className="checkout-right">
          <OrderSummary
            cartItems={cartItems}
            shippingFee={17}
            taxRate={0.02}
            showProceedButton={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
