import React from "react";
import { useTranslation } from "react-i18next";
import { FaEdit, FaTrash } from "react-icons/fa";
import type { Address } from "../../../../assets/data/mock_data/mockAddresses";
import useIsArabic from "../../../../hook/useIsArabic";
import "./AddressCard.css";

interface AddressCardProps {
  address: Address;
  isSelected?: boolean;
  onSelect?: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  address,
  isSelected = false,
  onSelect,
  onDelete,
  onEdit,
}) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  return (
    <div className={`address-card ${isArabic ? "arabic" : ""}`}>
      {/* Header with Name + Checkbox side by side */}
      <div className="address-header">
        <h4 className="address-name">{address.name[lang]}</h4>
        <input
          type="checkbox"
          className="address-checkbox"
          checked={isSelected || address.selected}
          onChange={() => onSelect && onSelect(address.id)}
        />
      </div>

      {/* Address Info */}
      <p className="address-info">
        {address.country[lang]}, {address.city[lang]},{" "}
        {address.streetName[lang]}, {address.buildingNumber}
      </p>

      {/* Action Buttons */}
      <div className="address-actions">
        <button
          className="edit-btn"
          onClick={() => onEdit && onEdit(address.id)}
        >
          <FaEdit /> {t("edit")}
        </button>
        <button
          className="delete-btn"
          onClick={() => onDelete && onDelete(address.id)}
        >
          <FaTrash /> {t("delete")}
        </button>
      </div>
    </div>
  );
};

export default AddressCard;
