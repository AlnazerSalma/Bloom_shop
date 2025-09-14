import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaBox,
  FaHeart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaBell,
  FaCog,
} from "react-icons/fa";
import type { IconType } from "react-icons";
import ProfileWishlist from "../components/profile/profile_wishlist/ProfileWishlist";
import ProfileInfo from "../components/profile/profile_Info/ProfileInfo"; 
import ProfileAddresses from "../components/profile/profile_addresses/ProfileAddresses"; 
import "../style/pages/ProfilePage.css";

interface MenuItem {
  key: string;
  label: string;
  icon: IconType;
}

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("personal");

  const menuItems: MenuItem[] = [
    { key: "personal", label: t("profile.personal"), icon: FaUser },
    { key: "orders", label: t("profile.orders"), icon: FaBox },
    { key: "wishlists", label: t("profile.wishlists"), icon: FaHeart },
    { key: "addresses", label: t("profile.addresses.addresses"), icon: FaMapMarkerAlt },
    { key: "cards", label: t("profile.cards"), icon: FaCreditCard },
    { key: "notifications", label: t("profile.notifications"), icon: FaBell },
    { key: "settings", label: t("profile.settings"), icon: FaCog },
  ];
  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <ProfileInfo />
      case "orders":
        return <p>📦 Track your orders here.</p>;
      case "cart":
        return <p>🛒 View and manage items in your cart here.</p>;
      case "wishlists":
        return <ProfileWishlist />;
      case "addresses":
        return <ProfileAddresses userId="user1" />
      case "cards":
        return <p>💳 Manage your saved cards here.</p>;
      case "notifications":
        return <p>🔔 Control your notifications here.</p>;
      case "settings":
        return <p>⚙️ Update your account settings here.</p>;
      default:
        return <p>Select an option from the sidebar.</p>;
    }
  };

  return (
    <div className="profile-page">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="sidebar-title">Profile</h2>
        <ul className="menu-list">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.key}
                className={`menu-item ${
                  activeTab === item.key ? "active" : ""
                }`}
                onClick={() => setActiveTab(item.key)}
              >
                <span className="icon">
                  <Icon />
                </span>
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <h1 className="header">
          {menuItems.find((m) => m.key === activeTab)?.label}
        </h1>
        <div className="content-body">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
