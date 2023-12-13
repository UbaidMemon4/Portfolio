import React from "react";
import Logo from "../../images/my_photo.jpg";
import "./index.css";
import { Button, Space } from "antd";
import {
  LinkedinFilled,
  InstagramFilled,
  BehanceCircleFilled,
  DribbbleSquareFilled,
} from "@ant-design/icons";

const Home_Work = () => {
  return (
    
    <div className="main_home">
      <div className="icons">
        <ul>
          <Space className="ant-space1">
            <li className="list">
              <LinkedinFilled />
            </li>
            <li className="list">
              <InstagramFilled />
            </li>
            <li className="list">
              <DribbbleSquareFilled />
            </li>
            <li className="list">
              <BehanceCircleFilled />
            </li>
          </Space>
        </ul>
      </div>
      <div className="titel">
        <h1>I'm Web Developer Ubaid</h1>
        <p>
          Hi! My Name Is Ubaid..
          <br/>I'm 15 Year Old
          <br /> I'm Full Stack Web Developer..
          <br />I Have Experience On This Field Almost 8 Month..

        </p>
        <Button className="learn-but">Learn More</Button>
      </div>
      <div className="logo">
        <img src={Logo} className="my-logo"/>
      </div>
    </div>
    
  );
};
export default Home_Work;
