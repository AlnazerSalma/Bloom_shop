import React from "react";
import "./IconButton.css";
const IconButton = ({
    icon,
    text,
    onClick,
    color = "#333",
    bgColor = "transparent",
    hoverBg = "#f0f0f0",
    hoverColor = "#000",
    borderColor = "#ccc",
}) => {
    return (
        <button
            className="icon-button"
            onClick={onClick}
            style={{
                "--button-text-color": color,
                "--button-bg": bgColor,
                "--button-hover-bg": hoverBg,
                "--button-hover-text-color": hoverColor,
                "--button-border-color": borderColor,
            }}
        >
            <span className="icon">{icon}</span>
            {text}
        </button>
    );
};

export default IconButton;