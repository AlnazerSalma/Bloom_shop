import React from "react";
import { Outlet } from "react-router-dom";

const AdminLoginLayout = () => {
  return (
    <div className="admin-login-layout">
      {/* No sidebar here */}
      <Outlet />
    </div>
  );
};

export default AdminLoginLayout;
