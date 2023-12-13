import React from "react";
import "./index.css";
import { Card, Col, Row } from "antd";
import { DesktopOutlined, ReadOutlined, RightCircleOutlined, UserOutlined } from "@ant-design/icons";
const Services = () => {
  return (
    <div className="service_bg">
      <div className="service">
        <h1 className="service_heading">What Services I'm Providing</h1>
        <p>
          <b>1 : </b>Full Stack Developing <b>2 : </b>frontend Developing{" "}
          <b>3 : </b>Backend Developing
        </p>
        <hr className="service_hr" />
      </div>
      <div className="services_card">
        <Row gutter={16} className="row">
          <Col span={8}>
            <Card title={<DesktopOutlined />} bordered={false} className="card">
              <h2>Full Stack Developing..</h2>
              <br />
              In this Full Stack Developing.. I Provide Both frontend And
              Backend Developing..And I Will Try To My Best To Complete Project..
              <br />
              <RightCircleOutlined className="arrow_icon" />
            </Card>
          </Col>

          <Col span={8}>
            <Card title={<ReadOutlined />} bordered={false} className="card">
              <h2>Front End Developing..</h2>
              <br />
              In this Frontend Developing.. I Will Try To My Best To Complete Project..
              <br />
              <RightCircleOutlined className="arrow_icon" />
            </Card>
          </Col>

          <Col span={8}>
            <Card title={<UserOutlined />} bordered={false} className="card">
              <h2>Backend Developing..</h2>
              <br />
              In this Backend Developing.. I Will Try To My Best To Complete Project..
              <br />
              <RightCircleOutlined className="arrow_icon" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Services;
