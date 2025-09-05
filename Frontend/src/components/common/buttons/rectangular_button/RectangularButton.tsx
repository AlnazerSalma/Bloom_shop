import React from "react";
import "./RectangularButton.css";

interface RectangularButtonProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const RectangularButton: React.FC<RectangularButtonProps> = ({
  text,
  className,
  style,
  onClick,
}) => {
  return (
    <button
      className={`btn-rectangular ${className || ""}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default RectangularButton;
