import React from "react";
import imgOne from "../assets/about1.b19a9e3e.svg";
import imgTwo from "../assets/solution.2dfaf6ec.png";
import { LuDot } from "react-icons/lu";

const About = () => {
  return (
    <div id="about" className="md:px-12 px-8 mx-auto bg-deepPurple">
      <div className="flex flex-col my-12 items-center justify-between md:flex-row">
        <div data-Aos="fade-right">
          <img src={imgOne} alt="an image" className="w-[600px]" />
        </div>
        <div className="max-w-xl">
          <div className="flex w-[30%]" data-Aos="fade-up">
            <LuDot className="text-lightBlue inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-mainPurple inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-red-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-[#a166e3] inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-yellow-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-blue-600 inline w-12 h-12 mx-[-17px]" />
          </div>
          <div className="my-4 md:my-8" data-Aos="fade-left">
            <h1 className="text-3xl leading-tight font-semibold md:text-4xl">
              We complete every project with extra care as customer need.
            </h1>
            <p className="mt-12 text-slate-200 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Labore eius molestiae facere,
              natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora
              odit laborum iure inventore possimus laboriosam qui nam. Fugit!
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse my-16 items-center justify-between md:flex-row-reverse">
        <div data-Aos="fade-left">
          <img src={imgTwo} alt="an image" className="w-[400px]" />
        </div>
        <div className="max-w-xl">
          <div className="flex w-[30%]" data-Aos="fade-up">
            <LuDot className="text-lightBlue inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-mainPurple inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-red-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-[#a166e3] inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-yellow-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-blue-600 inline w-12 h-12 mx-[-17px]" />
          </div>
          <div className="my-4 md:my-8" data-Aos="fade-right">
            <h1 className="text-3xl leading-tight font-semibold md:text-4xl">
              We complete every project with extra care as customer need.
            </h1>
            <p className="mt-12 text-slate-200 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
              dictum risus, non suscipit arcu. Quisque aliquam posuere tortor,
              sit amet convallis nunc scelerisque in. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Labore eius molestiae facere,
              natus reprehenderit eaque eum, autem ipsam. Magni, error. Tempora
              odit laborum iure inventore possimus laboriosam qui nam. Fugit!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
