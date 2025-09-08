import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/PaymentPage.css";
// Define a proper type for checkout info
interface CheckoutInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"credit-card" | "paypal" | "cash">(
    "credit-card"
  );
  const [checkoutInfo, setCheckoutInfo] = useState<CheckoutInfo | null>(null);

  useEffect(() => {
    const info = localStorage.getItem("checkoutInfo");
    if (!info) navigate("/checkout"); // redirect if no info
    else setCheckoutInfo(JSON.parse(info) as CheckoutInfo);
  }, [navigate]);

  const handlePayment = () => {
    if (!checkoutInfo) return; // safety check
    console.log({ checkoutInfo, paymentMethod: method });
    navigate("/checkout/success"); // navigate to success page
  };

  return (
    <div className="payment-page">
      <h2>Payment Method</h2>
      <select
        value={method}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setMethod(e.target.value as "credit-card" | "paypal" | "cash")
        }
      >
        <option value="credit-card">Credit Card</option>
        <option value="paypal">PayPal</option>
        <option value="cash">Cash on Delivery</option>
      </select>
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default PaymentPage;
