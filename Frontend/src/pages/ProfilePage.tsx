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
import RevealGroup from "../components/common/reveal_animation/RevealGroup";
import ScrollReveal from "../components/common/reveal_animation/ScrollReveal";
import ProfileWishlist from "../components/profile/profile_wishlist/ProfileWishlist";
import ProfileInfo from "../components/profile/profile_Info/ProfileInfo";
import ProfileAddresses from "../components/profile/profile_addresses/ProfileAddresses";
import ProfilePayment from "../components/profile/profile_payment/ProfilePayment";
import { mockUsers } from "../assets/data/mock_data/mockUser";
import type { User } from "../assets/data/mock_data/mockUser";
import "../style/pages/ProfilePage.css";

interface MenuItem {
  key: string;
  label: string;
  icon: IconType;
}

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>("personal");

  // Use the first user
  const user: User = mockUsers[0];

  const menuItems: MenuItem[] = [
    { key: "personal", label: t("profile.personal"), icon: FaUser },
    { key: "orders", label: t("profile.orders"), icon: FaBox },
    { key: "wishlists", label: t("profile.wishlists"), icon: FaHeart },
    {
      key: "addresses",
      label: t("profile.addresses.addresses"),
      icon: FaMapMarkerAlt,
    },
    { key: "cards", label: t("profile.cards.cards"), icon: FaCreditCard },
    { key: "notifications", label: t("profile.notifications"), icon: FaBell },
    { key: "settings", label: t("profile.settings"), icon: FaCog },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return <ProfileInfo userId={user.id} />;
      case "orders":
        return <p>📦 Track your orders here.</p>;
      case "cart":
        return <p>🛒 View and manage items in your cart here.</p>;
      case "wishlists":
        return <ProfileWishlist  />;
      case "addresses":
        return <ProfileAddresses userId={user.id} />;
      case "cards":
        return <ProfilePayment userId={user.id} />;
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
        {/* User Info */}
        <div className="sidebar-user-row">
          <img src={user.image} alt={user.name} className="user-avatar" />
          <div className="user-text">
            <p className="user-greeting">Hello 👋</p>
            <h3 className="user-name">{user.name}</h3>
          </div>
        </div>

        <ul className="menu-list">
          <RevealGroup type="down" stagger={200}>
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.key}
                  className={`menu-item ${activeTab === item.key ? "active" : ""}`}
                  onClick={() => setActiveTab(item.key)}
                >
                  <span className="icon">
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </RevealGroup>
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        <ScrollReveal type="down">
          <h1 className="header">
            {menuItems.find((m) => m.key === activeTab)?.label}
          </h1>
        </ScrollReveal>
        <div className="content-body">{renderContent()}</div>
      </div>
    </div>
  );
};

export default ProfilePage;
