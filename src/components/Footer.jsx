import { Link } from "react-router-dom";

import bg from "../assests/footer-bg.jpg";
import logo from "../assests/tmovie.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/" className="logo_text">
              Light Movies
            </Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
        </div>

        <h2 style={{ textAlign: "center", backgroundColor: "teal" }}>
          Made By Deepak💖💖
        </h2>
      </div>
    </div>
  );
};

export default Footer;
