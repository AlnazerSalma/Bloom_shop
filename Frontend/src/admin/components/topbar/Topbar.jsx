import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageToggleClick from "../../../components/language_toggle/click_toggle/LanguageToggleClick";
import { FaBell, FaSearch } from "react-icons/fa";
import "./Topbar.css";

const Topbar = () => {
  const { t, i18n } = useTranslation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const userName =
    user && i18n.language.startsWith("ar") ? user.nameAr : user?.nameEn || "";

  const firstChar =
    userName && userName.trim() !== ""
      ? userName.trim().charAt(0).toUpperCase()
      : "?";
      
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="user-circle">{firstChar}</div>
        <div className="user-info">
          <span className="user-name">{userName}</span>
          <span className="user-email">{user?.email || ""}</span>
        </div>
        <FaBell className="notification-icon" />
        <LanguageToggleClick />
      </div>
      <div className="topbar-search-wrapper">
        <span className="search-icon">
          <FaSearch />
        </span>
        <input
          type="text"
          className="topbar-search"
          placeholder={t("admin.searchPlaceholder")}
        />
      </div>
    </header>
  );
};

export default Topbar;
