import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok ,
  FaMobileAlt,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import FooterImage from "../assets/image/bag.png";
import Image1 from "../assets/image/footer/mastercard.jpg";
import Image2 from "../assets/image/footer/paypal.png";
import Image3 from "../assets/image/footer/stripe.png";
import Image4 from "../assets/image/footer/Visa.png";
import "../style/components/Footer.css";
import { useLanguageDirection } from "../hook/useLanguageDirection";

function Footer() {
  const { t, i18n } = useTranslation();
  useLanguageDirection(i18n);

  const navItems = ["/", "/shop", "/wishlist", "/cart", "/contactUs"];
  const navLabels = [
    t("discoverHome"),
    t("exploreShop"),
    t("favoriteWishlist"),
    t("yourCart"),
    t("getInTouch"),
  ];

  const helpLinks = [
    { title: t("faq"), link: "/faq" },
    { title: t("support"), link: "/support" },
    { title: t("returns"), link: "/returns" },
    { title: t("contactSupport"), link: "/contactSupport" },
    { title: t("shippingInfo"), link: "/shipping" },
  ];

  return (
    <>
      <footer className="footer">
        <Container>
          <Row className="footer-top">
            <Col md={3} className="footer-col">
              <h5 className="footer-logo">
                <img
                  src={FooterImage}
                  alt="Footer Logo"
                  className="footer-image"
                />
                {t("bloom")}
              </h5>
              <p>{t("companyDescription")}</p>
            </Col>

            <Col md={3} className="footer-col">
              <h5 className="footer-title">{t("navColumnTitle")}</h5>
              <ul className="footer-list">
                {navItems.map((link, index) => (
                  <li key={link}>
                    <Link to={link}>{navLabels[index]}</Link>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={3} className="footer-col">
              <h5 className="footer-title">{t("helpSupport")}</h5>
              <ul className="footer-list">
                {helpLinks.map((link) => (
                  <li key={link.title}>
                    <Link to={link.link}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={3} className="footer-col">
              <h5 className="footer-title">{t("contact")}</h5>
              <p>
                <FaLocationDot /> Palestine, Hebron
              </p>
              <p>
                <FaMobileAlt /> +970-59-555-2599
              </p>
              <div className="footer-icons">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer">
                  <FaTiktok />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={4}>{t("copyright")}</Col>
            <Col md={8}>
              <div className="footer-logos">
                <img src={Image1} alt="MasterCard" />
                <img src={Image2} alt="Paypal" />
                <img src={Image3} alt="Stripe" />
                <img src={Image4} alt="Visa" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
