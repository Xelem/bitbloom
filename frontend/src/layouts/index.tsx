import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Outlet />
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
