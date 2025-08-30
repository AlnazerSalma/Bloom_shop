import React from "react";
import { Navigate } from "react-router-dom";

const AdminRedirect = () => {
    const token = localStorage.getItem("token");

    if (token) {
    return <Navigate to="/admin/dashboard" replace />;
    } else {
    return <Navigate to="/admin/login" replace />;
    }
};

export default AdminRedirect;