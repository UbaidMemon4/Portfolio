import React from "react";
import Logo from "../../images/logo.png";
import "./index.css";
import { Button } from "antd/es/radio";

const Header = () => {
  return (
    <div className="main_header">
      <div className="header_img">
        <img src={Logo} />
      </div>
      <div className="navlink">
        <span>Home</span>
        <span>About</span>
        <span>Portfolio</span>
        <span>Contact</span>
      </div>
      <div className="header_but">
        <Button className="hire_me" type="primary" danger>
        Hire Me
        </Button>
      </div>
    </div>
  );
};
export default Header;
