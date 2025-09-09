import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./CheckoutCard.css";

interface CheckoutCardProps {
  id: string;
  title: string;
  content: string;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  selectLabel?: string;
  editLabel?: string;
  deleteLabel?: string;
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({
  id,
  title,
  content,
  isSelected = false,
  onSelect,
  onEdit,
  onDelete,
  editLabel = "Edit",
  deleteLabel = "Delete",
}) => {
  return (
    <div className={`checkout-card ${isSelected ? "selected" : ""}`}>
      {/* Header: Title + Select */}
      <div className="checkout-card-header">
        <h4 className="checkout-card-title">{title}</h4>
        {onSelect && (
          <input
            type="checkbox"
            className="checkout-card-checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)}
          />
        )}
      </div>

      {/* Main Content */}
      <p className="checkout-card-content">{content}</p>

      {/* Action Buttons */}
      <div className="checkout-card-actions">
        {onEdit && (
          <button className="edit-btn" onClick={() => onEdit(id)}>
            <FaEdit /> {editLabel}
          </button>
        )}
        {onDelete && (
          <button className="delete-btn" onClick={() => onDelete(id)}>
            <FaTrash /> {deleteLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutCard;
