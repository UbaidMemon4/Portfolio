import React from "react";
import "./index.css";
import { Card, Col, Row } from "antd";
const Portfolio = () => {
  return (
    <div className="portfolio_bg">
      <div className="portfolio_title">
          <h1 className="portfolio_heading">My Portfolio</h1>
          <p>My Name Is Ubaid..I'M Frontend Web Developer</p>
          <hr className="portfolio_hr" />
        </div>
        <div className="link_Portfolio">
          <div>
          <iframe src="https://expence-tracker-app-alpha.vercel.app/" />
          <br/>
          <a href="https://expence-tracker-app-alpha.vercel.app/">Expence Tracker App</a>
          </div>
          <div>
          <iframe src="https://library-management-app-beta.vercel.app/" />
          <br/>
          <a href="https://library-management-app-beta.vercel.app/">Library Management App</a>
          </div><div>
          <iframe src="https://contact-management-system-wine.vercel.app/" />
          <br/>
          <a href="https://contact-management-system-wine.vercel.app/">Contact Management App</a>
          </div><div>
          <iframe src="https://todo-app-rouge-nu.vercel.app/" />
          <br/>
          <a href="https://todo-app-rouge-nu.vercel.app/">Todo App</a>
          </div><div>
          <iframe src="https://dice-game-nine-theta.vercel.app/" />
          <br/>
          <a href="https://dice-game-nine-theta.vercel.app/">Two Player Dice Game</a>
          </div><div>
          <iframe src="https://counter-app-gules-xi.vercel.app/" />
          <br/>
          <a href="https://counter-app-gules-xi.vercel.app/">Counter App</a>
          </div>
        </div>
    </div>
  );
};
export default Portfolio;
