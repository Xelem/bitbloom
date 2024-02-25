import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
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
    <div className="border-b py-4 px-12 md:px-4 border-gray-500 flex h-[15%] z-10 fixed right-0  top-0 left-0 bg-white text-black">
      <div className="mx-auto flex items-center w-[100%]">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <p className="text-2xl ml-4">CoinGrove</p>
        </div>

        <div className="md:hidden ml-auto">
          <AiOutlineMenu
            className="h-8 w-8 transition ease-in-out"
            onClick={() => setIsOpen(true)}
          />
        </div>

        <div className="ml-auto hidden md:block">
          <div className="flex space-x-4 items-center rounded-lg">
            <FaRegUserCircle className="w-10 h-10" />
            <div>
              <p className="text-center">Username</p>
              <p className="text-center">useremail@email.com</p>
              <p className="text-center text-sm text-green-500">Verified</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute left-0 top-0 bg-white w-[100%] h-screen md:w-[25%] px-12 py-4 duration-200 ease-in-out border-r border-gray-500`}
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

        <Link
          to={"/user/profile"}
          className="md:hidden flex justify-between items-center my-8 bg-mainPurple p-4 rounded-lg"
        >
          <FaRegUserCircle className="w-10 h-10" />
          <div>
            <p className="text-center">Username</p>
            <p className="text-center">useremail@email.com</p>
            <p className="text-center text-sm text-green-500">Verified</p>
          </div>
          <FaAngleDown />
        </Link>

        <div className="my-8">
          <p className="uppercase text-gray-400 font-semibold">
            Main account balance
          </p>
          <p className="text-xl">0.00 USD</p>

          <div className="flex space-x-4 items-center my-8">
            <button className="user-button">
              <Link to={"/user/wallet"}>Deposit</Link>
            </button>
            <button className="user-button">
              <Link to={"/user/wallet"}>Withdraw</Link>
            </button>
          </div>
        </div>

        <ul className="flex flex-col space-y-8 mt-8">
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
            className="hidden md:block border-b border-gray-600 py-2 uppercase hover:text-lightBlue hover:-translate-y-2 hover:cursor-pointer transition-all duration-200 ease-in-out"
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
