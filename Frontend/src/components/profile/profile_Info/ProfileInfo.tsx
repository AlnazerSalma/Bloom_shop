import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { mockUsers } from "../../../assets/data/mock_data/mockUser";
import { mockUserAddresses } from "../../../assets/data/mock_data/mockAddresses";
import type { User } from "../../../assets/data/mock_data/mockUser";
import type { Address } from "../../../assets/data/mock_data/mockAddresses";
import RectangularButton from "../../common/buttons/rectangular_button/RectangularButton";
import RevealGroup from "../../common/reveal_animation/RevealGroup";
import useIsArabic from "../../../hook/useIsArabic";
import { FiEdit, FiSave } from "react-icons/fi";
import "./ProfileInfo.css";

interface ProfileInfoProps {
  userId: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ userId }) => {
  const { t } = useTranslation();
  const isArabic = useIsArabic();
  const lang = isArabic ? "ar" : "en";

  const [user, setUser] = useState<User | undefined>(undefined);
  const [isEditing, setIsEditing] = useState(false);
  const [address, setAddress] = useState<Address | undefined>(undefined);

  // Load user and address based on userId
  useEffect(() => {
    const foundUser = mockUsers.find((u) => u.id === userId);
    setUser(foundUser);

    const selectedAddress = mockUserAddresses
      .find((ua) => ua.userId === userId)
      ?.addresses.find((addr) => addr.selected);

    setAddress(selectedAddress);
  }, [userId]);

  const handleChange = (field: string, value: string) => {
    if (user) setUser({ ...user, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && user) {
      const url = URL.createObjectURL(e.target.files[0]);
      setUser({ ...user, image: url });
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  if (!user) return <p>Loading user info...</p>;

  return (
    <div className="profile-container">
      {/* Header: image + button */}
      <div className="profile-header">
        <RevealGroup type="down" stagger={200}>
          <div className="profile-image">
            <img src={user.image} alt={user.name} />
            {isEditing && (
              <label className="edit-avatar">
                <FiEdit size={16} />
                <input type="file" accept="image/*" onChange={handleImageChange} />
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
