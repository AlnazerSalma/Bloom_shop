import React from "react";
import "./AdminHeader.css";

interface AdminHeaderProps {
  title: string;
  subtitle?: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="admin-header">
      <h2 className="admin-header-title">{title}</h2>
      {subtitle && <p className="admin-header-subtitle">{subtitle}</p>}
    </div>
  );
};

export default AdminHeader;

