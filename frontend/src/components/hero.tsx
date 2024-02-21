import React from "react";
import bgImg from "../assets/vecteezy_blockchain-concept-banner-line-digital-dots-network_.jpg";
import { AiOutlineDollar } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="md:items-center mx-auto md:px-12 px-8 bg-left-bottom flex h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="max-w-xl mt-8">
        <div className="bg-[#a166e3] border rounded-full p-2 flex items-center justify-center md:w-[60%] text-center">
          <AiOutlineDollar className="w-8 h-8 mr-1" />
          <p className="transition-all duration-200 leading-loose ease-in-out opacity-90 hover:opacity-100">
            Discover new ways to grow your wealth!
          </p>
        </div>
        <div className="py-4">
          <h1 className="text-5xl leading-tight md:text-6xl">
            Artificial Intelligence Crypto Revolution
          </h1>
          <p className="text-lg leading-loose py-4">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consultting arena and
            artficial intelligence.
          </p>
          <div className="space-x-8 mt-4 transition-all duration-200 ease-in-out">
            <a href="/auth/signup" className="button-gradient">
              Signup
            </a>
            <a href="/auth/signin" className="button-gradient">
              Signin
            </a>
          </div>
        </div>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Hero;
