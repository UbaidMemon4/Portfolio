import React from "react";
import "./index.css";
import Header from "../../Components/Header";
import Home_Work from "../../Components/Home-Work";
import About_Home from "../../Components/About-home";
import Services from "../../Components/Services";
import Worling_Process from "../../Components/Working_Process";
import Experience from "../../Components/Work_Experence";
import Portfolio from "../../Components/Portfolio";
import Clients_Says from "../../Components/Clients_Says";
import Touch from "../../Components/Touch";
import Contact from "../../Components/Contact";
import { Outlet } from "react-router-dom";
const Home_Page = () => {
  return (
    <>
      <div className="home">
        <Header/>
        <Home_Work/>
      </div>
      <About_Home/>
    <Services/>
    <Worling_Process/>
    <Experience/>
    <Portfolio/>
    <Clients_Says/> 
    <Touch/>
    <Contact/>/
    <Outlet />

    </>
  );
};
export default Home_Page;
