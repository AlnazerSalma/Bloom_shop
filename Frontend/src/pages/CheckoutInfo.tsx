import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/CheckoutInfo.css";
const CheckoutInfo: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Save form info to localStorage or context for later
    localStorage.setItem("checkoutInfo", JSON.stringify(form));
    navigate("/checkout/payment");
  };

  return (
    <div className="checkout-info-page">
      <h2>Checkout Info</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Continue to Payment</button>
    </div>
  );
};

export default CheckoutInfo;
