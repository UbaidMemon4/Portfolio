import React from "react";
import Logo from "../../images/logo.png";
import "./index.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="main_header">
      <div className="header_img">
      <NavLink to={"/"} className="nav">
        <img src={Logo} />
        </NavLink>
      </div>
      <div className="navlink">
        <NavLink to={"/"} className="nav">
          <span>Home</span>
        </NavLink>
        <NavLink to={"/about"} className="nav">
        <span>About</span>
        </NavLink>
        <NavLink to={"/portfolio"} className="nav">
        <span>Portfolio</span>
        </NavLink>
        <NavLink to={"/contact"} className="nav">
        <span>Contact</span>
        </NavLink>

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
