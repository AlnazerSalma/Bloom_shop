import React from "react";
import "./AdminHeader.css";

const AdminHeader = ({ title, subtitle }) => {
    return (
    <div className="admin-header">
        <h2 className="admin-header-title">{title}</h2>
        {subtitle && <p className="admin-header-subtitle">{subtitle}</p>}
    </div>
    );
};

export default AdminHeader;
