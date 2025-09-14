import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import "./LoginForm.css";
import useIsArabic from "../../../hook/useIsArabic";
import { useLanguageDirection } from "../../../hook/useLanguageDirection";
import { useLoginForm } from "../../hooks/useLoginForm";
import logo from "../../../assets/image/bag.png";
const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const isArabic = useIsArabic();
  useLanguageDirection(i18n);
  const { formData, handleChange, handleSubmit, error } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="wrapper" dir={isArabic ? "rtl" : "ltr"}>
      <form onSubmit={handleSubmit}>
        <div className="login-header">
          <img src={logo} alt="Alhasad Logo" className="login-logo" />
          <h2 className="brand-name">{t("admin.title")}</h2>
        </div>

        <h1 className="login-title">{t("admin.login.title")}</h1>
        <p className="login-subtitle">{t("admin.login.subtitle")}</p>

        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder={t("admin.login.email")}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder={t("admin.login.password")}
            required
            value={formData.password}
            onChange={handleChange}
          />
          <span className="icon" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button type="submit">{t("admin.login.loginBtn")}</button>
        <div className="forgot-password">
          <a href="#" className="forgot-link">
            {t("admin.login.forgot")}
          </a>
        </div>

        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="login-footer">
        <a href="#" className="footer-link">
          {t("admin.login.help")}
        </a>
        <a href="#" className="footer-link">
          {t("admin.login.privacy")}
        </a>
        <a href="#" className="footer-link">
          {t("admin.login.terms")}
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
