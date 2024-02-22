import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/coingrove.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const UserNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const handleResize = () => {
    const isMobileScreen = window.innerWidth < 768;
    setIsMobile(isMobileScreen);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border-b py-4 px-12 md:px-4 border-gray-500 flex">
      <div className="mx-auto flex items-center w-[100%] justify-between">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <p className="text-2xl ml-4">CoinGrove</p>
        </div>

        <div className="md:hidden">
          <AiOutlineMenu
            className="h-8 w-8 transition ease-in-out"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute left-0 top-0 bg-deepPurple w-[100%] h-screen md:w-[25%] px-12 py-4 duration-200 ease-in-out border-r border-gray-500`}
      >
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <p className="text-2xl ml-4">CoinGrove</p>
          <AiOutlineClose
            className="h-8 w-8 transition ml-auto ease-in-out md:hidden"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          />
        </div>

        <ul className="flex flex-col space-y-8 mt-[25%]">
          <li
            className="border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <Link to={"/user/dashboard"}>Dashboard</Link>
          </li>
          <li
            className="border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <Link to={"/user/wallet"}>Wallet</Link>
          </li>
          <li
            className="border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <Link to={"/user/transactions"}>Transactions</Link>
          </li>
          <li
            className="border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <Link to={"/user/plans"}>Our Plans</Link>
          </li>
          <li
            className="border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              console.log(isMobile);
              if (isMobile) {
                setIsOpen(false);
              }
            }}
          >
            <Link to={"/user/profile"}>Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNav;
