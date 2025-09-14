import React, { useEffect } from "react";
import ScrollReveal from "../../common/reveal_animation/ScrollReveal";
import "./Modal.css";

interface ModalProps {
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        {title ? (
          <div className="modal-header">
             <ScrollReveal type="down">
            <h2>{title}</h2>
            </ScrollReveal>
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        ) : (
          <div className="modal-header only-close">
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        )}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
