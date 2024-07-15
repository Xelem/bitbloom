import React from "react";
import bgImg from "../assets/vecteezy_blockchain-concept-banner-line-digital-dots-network_.jpg";
import { AiOutlineDollar } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className="md:items-center mx-auto md:px-12 px-8 bg-left-bottom bg-no-repeat 2xl:bg-cover flex h-screen"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="max-w-xl 2xl:max-w-4xl mt-16 md:mt-8" data-Aos="fade-up">
        <div className="bg-[#a166e3] border mb-4 md:mb-0 rounded-full p-2 flex items-center justify-center md:w-[60%] text-center">
          <AiOutlineDollar className="md:w-8 md:h-8 w-6 h-6 mr-1" />
          <p className="transition-all duration-200 leading-loose ease-in-out opacity-90 hover:opacity-100">
            Discover new ways to grow your wealth!
          </p>
        </div>
        <div className="py-4">
          <h1 className="text-5xl leading-tight font-semibold md:text-6xl 2xl:text-8xl">
            Artificial Intelligence Crypto Revolution
          </h1>
          <p className="text-lg leading-loose py-4">
            We have over 15 year exprience in business consultting arena. We
            have over 15 year exprience in business consulting arena and
            artficial intelligence.
          </p>
          <div className="space-x-8 mt-4 transition-all duration-200 ease-in-out">
            <a href="/auth/signup" className="button-gradient">
              Signup
            </a>
            <a href="/auth/login" className="button-gradient">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
