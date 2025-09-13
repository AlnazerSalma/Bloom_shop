import React from "react";
import type { ReactNode } from "react";
import "./PopupModal.css";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: ReactNode;
  title?: string;
  description?: string;
  buttons?: ReactNode;
}

const PopupModal: React.FC<PopupModalProps> = ({
  isOpen,
  onClose,
  icon,
  title,
  description,
  buttons,
}) => {
  if (!isOpen) return null;

  return (
    <div className="popup-modal-overlay" onClick={onClose}>
      <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
        {/* Circles with optional icon */}
        {icon && (
          <div className="circle-container">
            <div className="circle circle-outer">
              <div className="circle circle-middle">
                <div className="circle circle-inner">{icon}</div>
              </div>
            </div>
          </div>
        )}

        {/* Title */}
        {title && <h2 className="popup-title">{title}</h2>}

        {/* Description */}
        {description && <p className="popup-desc">{description}</p>}

        {/* Buttons */}
        {buttons && <div className="popup-buttons">{buttons}</div>}
      </div>
    </div>
  );
};

export default PopupModal;
