import React from "react";
import "./index.css";
import { UserOutlined } from "@ant-design/icons";
import { Card, Progress } from "antd";

const Clients_Says = () => {
  return (
    <div className="clients_bg">
      <div className="clients_title">
        <h1 className="clients_heading">What My Clients Says</h1>
        <p>I Don't Work For Any Client</p>
        <hr className="clients_hr" />
      </div>
      <div className="clients_card">
        <Card
          style={{
            width: 400,
            height: 300,
          }}
        >
          <h1 className="head">
            <UserOutlined /> Jhon Dee
          </h1>
          <hr className="clients_hr2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Card>
        <Card
          style={{
            width: 400,
            height: 300,
          }}
        >
          <h1 className="head">
            <UserOutlined /> Samuel Stevens
          </h1>
          <hr className="clients_hr2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Card>
        <Card
          style={{
            width: 400,
            height: 300,
          }}
        >
          <h1 className="head">
            <UserOutlined /> Jenna Smith
          </h1>
          <hr className="clients_hr2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </Card>
      </div>
    </div>
  );
};
export default Clients_Says;
