import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../admin/layouts/AdminLayout.jsx";
import AdminLoginLayout from "../admin/layouts/AdminLoginLayout";
import AdminRedirect from "../admin/layouts/AdminRedirect";
import ProtectedRoute from "./ProtectedRoute.tsx";
import Home from "../pages/HomePage.tsx";

// Public Pages
const Cart = lazy(() => import("../pages/CartPage.js"));
const Wishlist = lazy(() => import("../pages/WishlistPage.tsx"));
const Shop = lazy(() => import("../pages/ShopePage.jsx"));
const ContactUs = lazy(() => import("../pages/ContactUsPage.jsx"));
const Product = lazy(() => import("../pages/ProductsPage.tsx"));
const AboutUs = lazy(() => import("../pages/AboutUsPage.jsx"));
const Blog = lazy(() => import("../pages/BlogPage.jsx"));
const CategoryProducts = lazy(() => import("../pages/CategoriesPage.tsx"));
const Checkout = lazy(() => import("../pages/CheckoutInfo.tsx"));
const PaymentPage = lazy(() => import("../pages/CheckoutPayment.tsx"));
const Review = lazy(() => import("../pages/CheckoutReview.tsx"));

// Admin Pages
const AdminLogin = lazy(() => import("../admin/pages/AdminLogin.jsx"));
const Dashboard = lazy(() => import("../admin/pages/Dashboard.jsx"));
const AdminHome = lazy(() => import("../admin/pages/AdminHomeContent.jsx"));
const AdminAbout = lazy(() => import("../admin/pages/AdminAboutContent.jsx"));
const AdminProfile = lazy(() => import("../admin/pages/UserProfileForm.jsx"));
const AdminProjects = lazy(() => import("../admin/pages/AdminProjects.jsx"));
const Partner = lazy(() => import("../admin/pages/AdminPartner.jsx"));
const AdminProducts = lazy(() => import("../admin/pages/AdminProducts.jsx"));
const Settings = lazy(() => import("../admin/pages/AdminSettings.jsx"));

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout/payment" element={<PaymentPage />} />
        <Route path="/checkout/review" element={<Review />} />
        <Route path="/category/:category" element={<CategoryProducts />} />

        <Route path="/admin">
          <Route index element={<AdminRedirect />} />
          <Route element={<AdminLoginLayout />}>
            <Route index element={<AdminLogin />} />
            <Route path="login" element={<AdminLogin />} />
          </Route>

          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="adminhome" element={<AdminHome />} />
            <Route path="adminabout" element={<AdminAbout />} />
            <Route path="adminprofile" element={<AdminProfile />} />
            <Route path="projects" element={<AdminProjects />} />
            <Route path="partner" element={<Partner />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
