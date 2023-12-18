import { Outlet } from "react-router-dom";
import Header from "../Header";
import Contact from "../Contact";
const Layout = () => {
  return (
    <div>
      <div className="home">
        <Header />
      </div>
      <Outlet />
      <Contact/>
    </div>
  );
};
export default Layout;
