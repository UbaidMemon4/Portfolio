import React from "react";
import { Button } from "antd/es/radio";
import "./index.css";
import image from "../../images/about-laptop.jpg";
const About_Home = () => {
  return (
    <div>
      <>
        <div className="about_title">
          <h1 className="about_heading">About Me</h1>
          <p>My Name Is Ubaid..I'M Frontend Web Developer</p>
          <hr className="about_hr" />
        </div>
      </>
      <div className="about_main_home">
        <div className="about_card">
          <h1 className="card_heading about_heading">
            Developing With a Passion While Exploring The World.
          </h1>
          <hr className="card_hr" />
          <div className="about_me">
            <p className="p">
              My Name is Ubaid..<br/>I Studied In Class 10th..<br/>I'm 15 Year Old..
            </p>
            <br />
            <p className="p">
              Almost 8 Month Ago, I Join Wen Devleloper Field.
            </p>
            <Button className="contact_me">Contact Me</Button>
          </div>
        </div>
        <div className="about_para">
          <p className="p">In Year 2023, I Studied In Class 10</p>
          <br />
          <br />
          <p className="p">In The End Of 2022, I Join Web Developer Field..</p>
        </div>
        <>
          <img src={image} className="about_image" />
        </>
      </div>
    </div>
  );
};
export default About_Home;
