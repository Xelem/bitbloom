import * as React from "react";
import logo from "../assets/coingrove.png";

const Footer = () => {
  return (
    <div className="bg-mainPurple p-8 md:p-12">
      <div className="md:flex items-center justify-between">
        <div className="md:mr-8">
          <img src={logo} alt="logo" className="mx-auto md:mx-0" />
        </div>
        <div className="md:max-w-lg">
          <p className="mt-4 text-slate-200 leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta
            assumenda a, excepturi enim nobis veritatis minus rerum voluptate
            animi eum? A ea illum dolore. Maxime et suscipit impedit facere.
          </p>
        </div>
        <div className="flex flex-col md:space-x-24 md:items-center justify-center mx-auto md:flex-row">
          <div className="flex my-4 flex-col">
            <h1 className="uppercase font-semibold">Navigate</h1>
            <a href="/" className="text-slate-200 mt-2">
              Home
            </a>
            <a href="/" className="text-slate-200 mt-2">
              About
            </a>
            <a href="/" className="text-slate-200 mt-2">
              Contact
            </a>
          </div>
          <div className="flex my-4 flex-col">
            <h1 className="uppercase font-semibold">Join us</h1>
            <a href="/" className="text-slate-200 mt-2">
              Home
            </a>
            <a href="/" className="text-slate-200 mt-2">
              About
            </a>
            <a href="/" className="text-slate-200 mt-2">
              Contact
            </a>
          </div>
          <div className="flex my-4 flex-col">
            <h1 className="uppercase font-semibold">Contact</h1>
            <a href="/" className="text-slate-200 mt-2">
              Home
            </a>
            <a href="/" className="text-slate-200 mt-2">
              About
            </a>
            <a href="/" className="text-slate-200 mt-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
