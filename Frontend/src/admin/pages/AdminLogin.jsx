import React from "react";
import { Navigate } from "react-router-dom";
import LoginForm from "../components/form/loginForm/LoginForm";
import "../style/AdminLogin.css";
const AdminLogin = () => {
    const token = localStorage.getItem("token");
    if (token) {
    return <Navigate to="/admin/dashboard" replace />;
    }
  return (
    <div className="full-screen-wrapper">
      <LoginForm />
    </div>
  );
};

export default AdminLogin;
