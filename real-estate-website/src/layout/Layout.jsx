import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Layout;
