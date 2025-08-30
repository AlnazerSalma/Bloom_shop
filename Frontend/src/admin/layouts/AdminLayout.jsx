import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";
import { Outlet } from "react-router-dom";
import "./AdminLayout.css";

const AdminLayout = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="admin-layout">
      <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      <div className={`admin-content ${sidebarCollapsed ? "sidebar-collapsed" : "sidebar-open"}`}>
        <Topbar/>
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
