import React from "react";
import Logo from "../../images/logo.png";
import "./index.css";
// import { Space } from "antd";
import { NavLink } from "react-router-dom";
import {
  LinkedinFilled,
  InstagramFilled,
  BehanceCircleFilled,
  DribbbleSquareFilled,
} from "@ant-design/icons";
const Contact = () => {
  return (
    <div className="con">
      <div className="main_contact">
        <div className="icons">
          <ul className="ant_space2">
              <li className="list1">
                <LinkedinFilled />
              </li>
              <li className="list1">
                <InstagramFilled />
              </li>
              <li className="list1">
                <DribbbleSquareFilled />
              </li>
              <li className="list1">
                <BehanceCircleFilled />
              </li>
          </ul>
        </div>
        <div className="contact_img">
        <NavLink to={"/"}>
          <img src={Logo} />
            </NavLink>
        </div>
        <div className="email">
          <h1>
            <b>Ubaidasif510@gmail.com</b>
          </h1>
        </div>
      </div>
      <div className="maker">
        <p>Copyright © 2023 Personal Portfolio</p>
        <br />
        <p className="maker_p">
          <b>Made By Ubaid</b>
        </p>
      </div>
    </div>
  );
};
export default Contact;
