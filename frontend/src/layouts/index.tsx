import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import UserNav from "../components/userNav";

const RootLayout = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <UserNav />
      <div className="ml-[25%]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default RootLayout;
