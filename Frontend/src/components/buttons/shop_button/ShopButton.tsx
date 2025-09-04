import React from "react";
import "./ShopButton.css";

interface ShopButtonProps {
  label: string;
  onClick?: () => void;
  width?: string | number;
  margin?: string;
  padding?: string;      // new prop
  fontSize?: string | number; // new prop
}

const ShopButton: React.FC<ShopButtonProps> = ({
  label,
  onClick,
  width,
  margin,
  padding,
  fontSize,
}) => {
  return (
    <button
      className="shop-button"
      style={{
        width: width || "fit-content",
        margin,
        padding: padding || "10px 26px",
        fontSize: fontSize || "1rem",
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ShopButton;
