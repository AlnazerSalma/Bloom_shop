import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaChevronDown,
  FaChevronRight,
  FaChevronLeft,
  FaRegUser,
} from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContentPaste } from "react-icons/md";
import { PiBuildingApartmentLight } from "react-icons/pi";
import { IoMdLogOut } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { IoSettingsOutline, IoHomeOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./Sidebar.css";
import logo from "../../../assets/image/bag.png";
import useIsArabic from "../../../hook/useIsArabic";
import { logout } from "../../utils/authUtils";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const [userRole, setUserRole] = useState(null);
  const [openContentMenu, setOpenContentMenu] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isArabic = useIsArabic();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserRole(user.role);
    }
  }, []);

  const isActive = (path) => location.pathname.startsWith(path);

  const contentSubmenu = [
    {
      label: t("admin.userProfile.title"),
      icon: <FaRegUser className="icon" />,
      path: "/admin/adminprofile",
      adminOnly: true,
    },
    {
      label: t("admin.homePage"),
      icon: <IoHomeOutline className="icon" />,
      path: "/admin/adminhome",
    },
  ].filter(
    (item) => !(item.adminOnly && userRole !== "Admin")
  );

  const menuItems = [
    {
      label: t("admin.dashboard"),
      icon: <LuLayoutDashboard className="icon" />,
      path: "/admin/dashboard",
    },
    {
      label: t("admin.contentManagement"),
      icon: <MdContentPaste className="icon" />,
      isExpandable: true,
      submenu: contentSubmenu,
    },
    {
      label: t("admin.products"),
      icon: <BsBoxSeam className="icon" />,
      path: "/admin/products",
    },
    {
      label: t("admin.settings"),
      icon: <IoSettingsOutline className="icon" />,
      path: "/admin/settings",
    },
    {
      label: t("admin.logout"),
      icon: <IoMdLogOut className="icon" />,
      onClick: logout,
    },
  ];

  const renderMenuItem = (item) => {
    const active = item.path && isActive(item.path);
    return (
      <li
        key={item.label}
        className={active ? "active" : ""}
        onClick={() => {
          if (item.onClick) {
            item.onClick();
          } else if (item.path) {
            navigate(item.path);
          }
        }}
        title={isCollapsed ? item.label : undefined}
      >
        {item.icon}
        {!isCollapsed && <span>{item.label}</span>}
      </li>
    );
  };

  const renderExpandableMenu = (item) => {
    const isAnySubActive = item.submenu.some((sub) => isActive(sub.path));
    return (
      <React.Fragment key={item.label}>
        <li
          className={isAnySubActive ? "active" : ""}
          onClick={() => setOpenContentMenu((prev) => !prev)}
          title={isCollapsed ? item.label : undefined}
        >
          {item.icon}
          {!isCollapsed && (
            <>
              <span>{item.label}</span>
              <span className="arrow-square">
                {openContentMenu ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </>
          )}
        </li>

        {openContentMenu && (
          <ul className="sidebar-submenu">
            {item.submenu.map((subItem) => (
              <li
                key={subItem.label}
                className={isActive(subItem.path) ? "active" : ""}
                onClick={() => navigate(subItem.path)}
              >
                {subItem.icon}
                <span>{subItem.label}</span>
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  };

  return (
    <div
      className={`sidebar ${isCollapsed ? "collapsed" : ""}`}
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="sidebar-header">
        <div className="sidebar-header-left">
          <img src={logo} alt="Logo" className="sidebar-logo" />
          {!isCollapsed && (
            <div className="sidebar-title">
              <h2>{t("admin.title")}</h2>
              <p>{t("admin.subtitle")}</p>
            </div>
          )}
        </div>
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      <hr className="sidebar-divider" />

      {/* Menu */}
      <ul className="sidebar-menu">
        {menuItems.map((item) =>
          item.isExpandable ? renderExpandableMenu(item) : renderMenuItem(item)
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
