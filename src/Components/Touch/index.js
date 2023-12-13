import React from "react";
import "./index.css";
import { Button,} from "antd";

const Touch = () => {
  return (
    <div className="touch_bg">
      <div className="touch_title">
        <h1 className="touch_heading">Stay In Touch</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <hr className="touch_hr"/>
      </div>
      <div className="form">
        <input type="email" placeholder="Enter Your Email" className="input" />
        <Button className="but">Subscribe</Button>
      </div>
    </div>
  );
};
export default Touch;
