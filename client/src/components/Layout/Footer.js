import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import watsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>LOOKWELL FASHION</p>
      </div>

      <p className="footeer">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/policy">Privacy Policy</Link>
      </p>

      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={watsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright@2024 - All right reserve Mohd Sameer</p>
      </div>
    </div>
  );
};

export default Footer;
