import React from "react";
import "./index.css";
import Portfolio from "../../Components/Portfolio";
import Clients_Says from "../../Components/Clients_Says";

const Portfolio_Page = () => {
  return (
    <div className="p_page">
        <Portfolio />
        <Clients_Says/>
    </div>
  );
};
export default Portfolio_Page;
