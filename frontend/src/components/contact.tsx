import React, { useState } from "react";
import { LuDot } from "react-icons/lu";

const Contact = () => {
  type Focused = {
    name: boolean;
    email: boolean;
    subject: boolean;
    message: boolean;
  };

  const [isFocused, setIsFocused] = useState<Focused>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  console.log(isFocused);

  return (
    <div id="contact">
      <div className="md:px-12 px-8 mx-auto bg-gradient-to-r from-mainPurple to-lightBlue py-12">
        <div>
          <div className="flex items-center justify-center" data-aos="fade-up">
            <LuDot className="text-lightBlue inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-mainPurple inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-red-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-[#a166e3] inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-yellow-600 inline w-12 h-12 mx-[-17px]" />
            <LuDot className="text-blue-600 inline w-12 h-12 mx-[-17px]" />
          </div>

          <div className="text-center max-w-lg mx-auto" data-aos="zoom-in">
            <h1 className="text-3xl leading-tight font-semibold my-4 md:text-4xl">
              Contact Us
            </h1>
            <p className="mt-8 text-lg text-slate-200 leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              accumsan nisi Ut ut felis congue nisl hendrerit commodo.
            </p>
          </div>

          <form
            className="flex flex-col items-center justify-center my-12"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-[100%] md:w-[70%]">
              <div className="flex flex-col md:flex-row justify-center space-y-12 md:space-y-0 md:space-x-4 w-[100%]">
                <div className="relative flex flex-col md:w-[50%]">
                  <input
                    data-aos="fade-left"
                    type="text"
                    className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                    onFocus={() => setIsFocused({ ...isFocused, name: true })}
                    onBlur={() => setIsFocused({ ...isFocused, name: false })}
                  />
                  <label
                    className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                      !isFocused.name ? "-translate-y-2" : "-translate-y-6"
                    }`}
                  >
                    Name
                  </label>
                </div>
                <div className="relative flex flex-col md:w-[50%]">
                  <input
                    data-aos="fade-left"
                    type="text"
                    className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                    onFocus={() => setIsFocused({ ...isFocused, email: true })}
                    onBlur={() => setIsFocused({ ...isFocused, email: false })}
                  />
                  <label
                    className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                      !isFocused.email ? "-translate-y-2" : "-translate-y-6"
                    }`}
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="relative flex flex-col pt-12 mb-2">
                <input
                  data-aos="fade-left"
                  type="text"
                  className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                  onFocus={() => setIsFocused({ ...isFocused, subject: true })}
                  onBlur={() => setIsFocused({ ...isFocused, subject: false })}
                />
                <label
                  className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                    !isFocused.subject ? "-translate-y-2" : "-translate-y-6"
                  }`}
                >
                  Subject
                </label>
              </div>
              <div className="relative flex flex-col pt-8 md:pt-12">
                <textarea
                  data-aos="fade-left"
                  rows={3}
                  className="border-b border-white text-white bg-transparent outline-0 z-10 px-1"
                  onFocus={() => setIsFocused({ ...isFocused, message: true })}
                  onBlur={() => setIsFocused({ ...isFocused, message: false })}
                />
                <label
                  className={`absolute text-sm italic bottom-0 transition-all duration-200 ease-in-out ${
                    !isFocused.message
                      ? "-translate-y-5 md:-translate-y-12"
                      : "-translate-y-20"
                  }`}
                >
                  Message
                </label>
              </div>
              <div
                className="flex items-center justify-center py-8"
                data-aos="fade-up"
              >
                <button className="button-gradient">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
