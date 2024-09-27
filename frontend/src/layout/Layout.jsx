import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import { SideBar } from "./SIdeBar";
import Footer from "./Footer";

const Layout = () => {
  return (
    //I Add Wrapper Class Here 
    <div className="wrapper min-vh-100">
      <SideBar/>
      <div className="page-wrapper flex-grow-1">
      <Navbar />
      
      <Outlet />
      <Footer />
      </div>
      
       
      
      
    </div>
  );
};

export default Layout;
