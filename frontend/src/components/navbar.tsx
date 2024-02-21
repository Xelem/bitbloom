import React, { useState } from "react";
import logo from "../assets/coingrove.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="border-b py-4 px-12  border-gray-500 relative">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        <ul className="hidden space-x-8 items-center md:flex">
          <a
            href="/"
            className="uppercase text-sm ease-in-out duration-200 hover:font-bold hover:cursor-pointer"
          >
            Home
          </a>
          <a
            href="/about"
            className="uppercase text-sm ease-in-out duration-200 hover:font-bold hover:cursor-pointer"
          >
            About
          </a>
          <a
            href="/contact"
            className="uppercase text-sm ease-in-out duration-200 hover:font-bold hover:cursor-pointer"
          >
            Contact
          </a>
        </ul>

        <div className="hidden space-x-4 md:block">
          <a href="/auth/signin" className="button-outline">
            Login
          </a>
          <a href="/auth/signup" className="button-fill">
            Signup
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <AiOutlineClose
              className="h-8 w-8 transition ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            />
          ) : (
            <AiOutlineMenu
              className="h-8 w-8 transition ease-in-out"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>

      <div
        className={`${
          isOpen ? "" : "hidden"
        } absolute left-0 bg-deepPurple w-[100%] px-12 py-4 duration-200 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col space-y-8">
          <li className="border-b border-gray-600 py-2 uppercase">Home</li>
          <li className="border-b border-gray-600 py-2 uppercase">About</li>
          <li className="border-b border-gray-600 py-2 uppercase">Contact</li>
        </ul>
        <div className="my-8 flex space-x-4">
          <a
            href="/auth/signin"
            className="border-2 rounded-full px-4 py-2 border-mainPurple text-center duration-200 uppercase w-[100%] hover:bg-mainPurple"
          >
            Login
          </a>
          <a
            href="/auth/signup"
            className="border-2 rounded-full px-4 py-2 border-mainPurple text-center duration-200 uppercase w-[100%] bg-mainPurple hover:bg-transparent"
          >
            Signup
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
