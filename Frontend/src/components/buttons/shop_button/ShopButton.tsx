import React from "react";
import "./ShopButton.css";

interface ShopButtonProps {
  label: string;
  onClick?: () => void;
  width?: string | number;
}

const ShopButton: React.FC<ShopButtonProps> = ({ label, onClick, width }) => {
  return (
    <button
      className="shop-button"
      style={{ width: width || "fit-content" }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ShopButton;

