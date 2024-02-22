import React from "react";
import { Outlet } from "react-router-dom";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Contact />
      <Footer />
    </main>
  );
};

export default RootLayout;
