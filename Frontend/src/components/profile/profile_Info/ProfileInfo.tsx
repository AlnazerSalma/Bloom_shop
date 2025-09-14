import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { mockUser } from "../../../assets/data/mock_data/mockUser";
import { mockUserAddresses } from "../../../assets/data/mock_data/mockAddresses";
import type { Address } from "../../../assets/data/mock_data/mockAddresses";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import useIsArabic from "../../../hook/useIsArabic";
import { FiEdit, FiSave } from "react-icons/fi";
import "./ProfileInfo.css";

const ProfileInfo: React.FC = () => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const [user, setUser] = useState(mockUser);
  const [isEditing, setIsEditing] = useState(false);

  const selectedAddress = mockUserAddresses
    .find((ua) => ua.userId === user.id)
    ?.addresses.find((addr) => addr.selected);

  const [address] = useState<Address | undefined>(selectedAddress);

  const handleChange = (field: string, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setUser({ ...user, image: url });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      {/* Header: image + button */}
      <div className="profile-header">
        <RevealGroup type="down" stagger={200}>
          <div className="profile-image">
            <img src={user.image} alt="Profile" />
            {isEditing && (
              <label className="edit-avatar">
                <FiEdit size={16} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          <RectangularButton
            text={isEditing ? t("profile.save") : t("profile.editProfile")}
            icon={isEditing ? <FiSave /> : <FiEdit />}
            className={`btn-rectangular ${isEditing ? "btn-save" : "btn-edit"}`}
            onClick={toggleEdit}
          />
        </RevealGroup>
      </div>

      {/* Form-like personal info */}
      <form className="profile-info-form">
        <RevealGroup type="down" stagger={200}>
        <div className="form-item">
          <label>{t("profile.profileInfo.name")}:</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => handleChange("name", e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-item">
          <label>{t("profile.email")}:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
            disabled={!isEditing}
          />
        </div>

        <div className="form-item">
          <label>{t("profile.profileInfo.phone")}:</label>
          <input
            type="text"
            value={user.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            disabled={!isEditing}
          />
        </div>

        {address && (
          <div className="form-item">
            <label>{t("profile.profileInfo.address")}:</label>
            <input
              type="text"
              value={`${address.country[lang]}, ${address.city[lang]}, ${address.streetName[lang]}, ${address.buildingNumber}`}
              disabled
              placeholder={t("profile.profileInfo.addressPlaceholder")}
            />
          </div>
        )}
        </RevealGroup>
      </form>
    </div>
  );
};

export default ProfileInfo;
