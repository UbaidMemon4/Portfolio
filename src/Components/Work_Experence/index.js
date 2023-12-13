import React from "react";
import "./index.css";
import { Card, Progress } from "antd";
const Experience = () => {
  return (
    <div className="experience_bg">
      <div className="experience_title">
        <h1 className="experience_heading">Experience Me</h1>
        <p>I'Have 8 Moth Experience Of Frontend Web Developer</p>
        <hr className="experience_hr" />
      </div>
      <div className="experience_card">
        <Card
          style={{
            width: 500,
            height: 300,
          }}
        >
          <p className="work_para">
            <b>Ms Office</b>
          </p>
          <p className="work_para">2020-2023</p>
          <p className="work_para">I'Have 3 Moth Experience Of Ms Office</p>
          <Progress percent={90} strokeColor={"#ec5b53"} />
        </Card>
        <Card
          style={{
            width: 500,
            height: 300,
          }}
        >
          <p className="work_para">
            <b>Web Developer</b>
          </p>
          <p className="work_para">2022-2023</p>
          <p className="work_para">
            I'Have 8 Moth Experience Of Frontend Web Developer
          </p>
          <Progress percent={75} strokeColor={"#ec5b53"} />
        </Card>
      </div>
    </div>
  );
};
export default Experience;
