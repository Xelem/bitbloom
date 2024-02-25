import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import UserNav from "../components/userNav";

const RootLayout = () => {
  return (
    <main>
      <Navbar />
      {/* <UserNav /> */}
      {/* <div className="md:ml-[25%] mt-[25%] md:mt-[5%] overflow-x-auto bg-white"> */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default RootLayout;
