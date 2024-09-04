import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Navbar/navbar";
import Footer from "../Footer/footer";
const Layout = (props) => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
