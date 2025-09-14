import React from "react";
import "./RectangularButton.css";

interface RectangularButtonProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  icon?: React.ReactNode; // optional icon
}

const RectangularButton: React.FC<RectangularButtonProps> = ({
  text,
  className,
  style,
  onClick,
  icon,
}) => {
  return (
    <button
      className={`btn-rectangular ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default RectangularButton;
