import React from "react";
import "./ShopButton.css";

interface ShopButtonProps {
  label: string;
  onClick?: () => void;
  width?: string | number;
  margin?: string;
}

const ShopButton: React.FC<ShopButtonProps> = ({ label, onClick, width, margin }) => {
  return (
    <button
      className="shop-button"
      style={{ width: width || "fit-content", margin }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ShopButton;
