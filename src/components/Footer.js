import "./FooterStyles.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left"></div>
        <div className="location">
          <h4>
            <FaHome
              size={20}
              style={{ color: "rgb(85, 37, 37)", marginRight: "2rem" }}
            />
            Orlando, FL
          </h4>
        </div>
        <div className="phone">
          <h4>
            <FaPhone
              size={20}
              style={{ color: "rgb(85, 37, 37)", marginRight: "2rem" }}
            />
            787-619-7476
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "rgb(85, 37, 37)", marginRight: "2rem" }}
            />
            cegeremia10@gmail.com
          </h4>
        </div>
        <div className="right">
          <div className="social">
            <FaLinkedin
              size={30}
              style={{ color: "rgb(85, 37, 37)", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "rgb(85, 37, 37)", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
