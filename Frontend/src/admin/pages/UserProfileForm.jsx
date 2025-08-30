import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../components/cards/general_form_card/GeneralFormCard.css";
import "../style/UserProfileForm.css";
import IconButton from "../components/buttons/IconButton";
import { RiUserAddLine } from "react-icons/ri";
import Select from "react-select";
import AdminHeader from '../components/admin_header/AdminHeader';

const UserProfileForm = () => {
  const { t } = useTranslation();
  const [selectedRole, setSelectedRole] = useState(null);

  const options = [
    { value: "user", label: t("admin.userProfile.user") },
    { value: "admin", label: t("admin.userProfile.admin") },
  ];

  const selectedOption = options.find(
    (option) => option.value === selectedRole
  );

  return (
    <div className="admin-profile-container">
        <AdminHeader 
        title={t("admin.userProfile.title")}
        subtitle={t("admin.userProfile.description")}
      />
      <div className="general-form-card">
        <div className="section-header">
          <RiUserAddLine className="section-title-icon" />
          <h3 className="section-title"> {t("admin.userProfile.addUser")}</h3>
        </div>
        <form className="user-form">
          <div className="fields-container">
            {/*Name */}
            <div className="form-group">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.nameAr")}
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={t("admin.userProfile.namePlaceholderAr")}
              />
            </div>
            <div className="form-group">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.nameEn")}
              </label>
              <input
                type="text"
                name="firstName"
                placeholder={t("admin.userProfile.namePlaceholderEn")}
              />
            </div>

            {/* Email */}
            <div className="form-group full-width">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.email")}
              </label>
              <input
                type="email"
                name="email"
                placeholder={t("admin.userProfile.emailPlaceholder")}
              />
            </div>

            {/* Contact Number */}
            <div className="form-group full-width">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.contactNumber")}
              </label>
              <input
                // type="tel"
                name="contactNumber"
                placeholder={t("admin.userProfile.contactNumberPlaceholder")}
              />
            </div>

            {/* Role */}
            <div className="form-group full-width role-select-wrapper">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.role")}
              </label>
              <Select
                options={options}
                value={selectedOption}
                onChange={(selected) => setSelectedRole(selected.value)}
                placeholder={t("admin.userProfile.rolePlaceholder")}
                classNamePrefix="custom-select"
              />
            </div>

            {/* Password */}
            <div className="form-group full-width">
              <label>
                <span className="required-star">*</span>{" "}
                {t("admin.userProfile.password")}
              </label>
              <input
                type="password"
                name="password"
                placeholder={t("admin.userProfile.passwordPlaceholder")}
              />
            </div>
          </div>

          <button type="submit" style={{ all: "unset" }}>
            <IconButton
              icon={<RiUserAddLine />}
              text={t("admin.userProfile.addUser")}
              color="#fff"
              bgColor="#204e51"
              hoverBg="#204E51D1"
              onClick={() => alert("Saved!")}
              borderColor="#2f7479e7"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;
