import { ConfigProvider } from "antd";
import "./Portfolio.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home_Page from "./pages/home_page/index";
import About_Page from "./pages/about_page/index";
import Contact_Page from "./pages/contact_page/index";
import Portfolio_Page from "./pages/portfolio_page/index";
import Layout from "./Components/Layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home_Page />,
      },
      {
        path: "/about",
        element: <About_Page />,
      },
      {
        path: "/contact",
        element: <Contact_Page />,
      },
      {
        path: "/portfolio",
        element: <Portfolio_Page />,
      },
    ],
  },
]);

function Portfolio() {
  return (
    <>
      <ConfigProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ConfigProvider>
    </>
  );
}

export default Portfolio;
