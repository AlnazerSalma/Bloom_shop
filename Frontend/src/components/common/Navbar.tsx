import React, { useState, useRef, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import brand from "../../assets/image/bag.png";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineUser } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageToggleSwitch from "./language_toggle/switch_toggle/LanguageToggleSwitch";
import LanguageToggleClick from "./language_toggle/click_toggle/LanguageToggleClick";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavBehavior } from "../../hook/useNavBehavior";
import { useLanguageDirection } from "../../hook/useLanguageDirection";
import { useClickOutside } from "../../hook/useClickOutside";
import IconWithBadges from "./IconWithBadges";
import MiniCart from "../cart/MiniCart";
import type { CartItem } from "../../types/CartItem";
import type { Product } from "../../types/productType";
import "../../style/components/Navbar.css";

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  useLanguageDirection(i18n);
  const navColor = useNavBehavior(mobileMenuOpen, setMobileMenuOpen);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  useClickOutside(mobileNavRef, mobileMenuOpen, () => setMobileMenuOpen(false));
  const navItems = ["/", "/shop", "/aboutUs", "/blog", "/contactUs"];

  useEffect(() => {
    const loadCart = () => {
      const stored = localStorage.getItem("cart");
      try {
        const parsed: unknown = stored ? JSON.parse(stored) : [];

        // Map parsed data to CartItem safely
        const cartItemsWithQuantity: CartItem[] = Array.isArray(parsed)
          ? parsed.map((p) => {
              const product = p as Product & Partial<CartItem>;
              return {
                ...product,
                quantity: product.quantity ?? 1,
                selectedSize: product.selectedSize ?? undefined,
              };
            })
          : [];

        setCartItems(cartItemsWithQuantity);
      } catch {
        setCartItems([]);
      }
    };

    loadCart();
    window.addEventListener("localStorageUpdated", loadCart);

    return () => window.removeEventListener("localStorageUpdated", loadCart);
  }, []);
  return (
    <div>
      <Navbar
        fixed="top"
        expand="md"
        className={navColor ? "sticky" : "navbar"}
      >
        <Container className="custom-navbar-container d-flex justify-content-between align-items-center">
          {/* Right : company name */}
          <div className="company-name d-none d-md-block">
            <Navbar.Brand
              href="/"
              className="d-flex align-items-center mobile-logo"
            >
              <img src={brand} className="img-fluid logo" alt="brand" />
              <span className="brand-text ms-2">{t("bloom")}</span>
            </Navbar.Brand>
          </div>
          {/* Center : Nav links (desktop only) */}
          <Nav className="mx-auto center-nav d-none d-md-flex">
            {navItems.map((path, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  as={Link}
                  to={path}
                  className={location.pathname === path ? "active" : ""}
                >
                  {t(path === "/" ? "home" : path.slice(1))}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          {/* Left: logo + toggle (desktop) */}
          <div className="logo-toggle-wrapper d-flex align-items-center gap-2 d-none d-md-flex">
            <div className="navbar-icons">
              {/* Search Icon */}
              <button onClick={() => navigate("/profile")}>
                <HiOutlineUser size={25} />
              </button>

              <IconWithBadges
                icon={<IoIosHeartEmpty size={25} />}
                route="/wishlist"
                storageKey="wishlist"
              />
              <IconWithBadges
                icon={<IoBagHandleOutline size={25} />}
                storageKey="cart"
                onClick={() => setCartOpen(!cartOpen)}
              >
                {cartOpen && (
                  <MiniCart
                    items={cartItems}
                    onClose={() => setCartOpen(false)}
                    onRemove={(id) => {
                      const updated = cartItems.filter(
                        (item) => item.id !== id
                      );
                      setCartItems(updated);
                      localStorage.setItem("cart", JSON.stringify(updated));
                      window.dispatchEvent(new Event("localStorageUpdated"));
                    }}
                  />
                )}
              </IconWithBadges>

              <LanguageToggleClick />
              {/* Login Button */}
              <button className="login-btn">{t("login")}</button>
            </div>
          </div>

          {/* Mobile only: hamburger left, logo right, always consistent */}
          <div className="d-flex d-md-none align-items-center justify-content-center position-relative w-100">
            {/* Hamburger always on the left */}
            <div
              className="hamburger mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <GiHamburgerMenu size={28} />
            </div>
            {/* Logo on right */}
            <Navbar.Brand
              href="/"
              className="d-flex align-items-center mobile-logo"
            >
              <img src={brand} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
          </div>
        </Container>

        {/* Mobile Nav */}
        <div
          ref={mobileNavRef}
          className={`mobile-nav ${mobileMenuOpen ? "active" : ""}`}
        >
          <div className="mobile-language-toggle mt-3">
            <LanguageToggleSwitch i18n={i18n} />
          </div>
          {navItems.map((path, index) => (
            <div
              className="nav-item"
              key={index}
              style={
                { "--i": index } as React.CSSProperties & { "--i": number }
              }
            >
              <Link
                to={path}
                className={location.pathname === path ? "active" : ""}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t(path === "/" ? "home" : path.slice(1))}
              </Link>
            </div>
          ))}
        </div>
      </Navbar>
    </div>
  );
};

export default NavBar;
