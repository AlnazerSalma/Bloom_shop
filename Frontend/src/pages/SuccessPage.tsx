import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/pages/SuccessPage.css";
const SuccessPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h2>Order Placed Successfully!</h2>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default SuccessPage;
