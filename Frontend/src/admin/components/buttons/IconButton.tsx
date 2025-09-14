import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  icon: React.ReactNode;
  text?: string;
  onClick?: () => void;
  color?: string;
  bgColor?: string;
  hoverBg?: string;
  hoverColor?: string;
  borderColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  text,
  onClick,
  color = "#333",
  bgColor = "transparent",
  hoverBg = "#f0f0f0",
  hoverColor = "#000",
  borderColor = "#ccc",
}) => {
  const style: React.CSSProperties & {
    "--button-text-color"?: string;
    "--button-bg"?: string;
    "--button-hover-bg"?: string;
    "--button-hover-text-color"?: string;
    "--button-border-color"?: string;
  } = {
    "--button-text-color": color,
    "--button-bg": bgColor,
    "--button-hover-bg": hoverBg,
    "--button-hover-text-color": hoverColor,
    "--button-border-color": borderColor,
  };

  return (
    <button className="icon-button" onClick={onClick} style={style}>
      <span className="icon">{icon}</span>
      {text}
    </button>
  );
};

export default IconButton;
