import React from "react";
import { LuDot } from "react-icons/lu";
import { GrSettingsOption } from "react-icons/gr";

const Services = () => {
  return (
    <div id="services" className="md:px-12 px-8 mx-auto">
      <div>
        <div className="flex items-center justify-center">
          <LuDot className="text-lightBlue inline w-12 h-12 mx-[-17px]" />
          <LuDot className="text-mainPurple inline w-12 h-12 mx-[-17px]" />
          <LuDot className="text-red-600 inline w-12 h-12 mx-[-17px]" />
          <LuDot className="text-[#a166e3] inline w-12 h-12 mx-[-17px]" />
          <LuDot className="text-yellow-600 inline w-12 h-12 mx-[-17px]" />
          <LuDot className="text-blue-600 inline w-12 h-12 mx-[-17px]" />
        </div>

        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-3xl leading-tight font-semibold my-4 md:text-4xl">
            Our Core Services
          </h1>
          <p className="mt-8 text-lg text-slate-200 leading-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 my-12">
          <div className="border border-lightBlue my-2 p-6 rounded-ss-2xl rounded-ee-2xl">
            <div className="my-2">
              <GrSettingsOption className="w-12 h-12 text-lightBlue" />
            </div>
            <div className="my-4">
              <h1 className="text-xl leading-tight font-semibold my-4 md:text-2xl">
                Smart Trading Modules
              </h1>
              <p className="leading-8 my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae blanditiis voluptate natus. Recusandae quisquam
                molestias quibusdam quidem! Fuga, cupiditate fugiat velit
                doloremque dolore est perspiciatis nostrum temporibus deleniti
                incidunt quis.
              </p>
            </div>
          </div>
          <div className="border border-lightBlue my-2 p-6 rounded-ss-2xl rounded-ee-2xl">
            <div className="my-2">
              <GrSettingsOption className="w-12 h-12 text-lightBlue" />
            </div>
            <div className="my-4">
              <h1 className="text-xl leading-tight font-semibold my-4 md:text-2xl">
                Smart Trading Modules
              </h1>
              <p className="leading-8 my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae blanditiis voluptate natus. Recusandae quisquam
                molestias quibusdam quidem! Fuga, cupiditate fugiat velit
                doloremque dolore est perspiciatis nostrum temporibus deleniti
                incidunt quis.
              </p>
            </div>
          </div>
          <div className="border border-lightBlue my-2 p-6 rounded-ss-2xl rounded-ee-2xl">
            <div className="my-2">
              <GrSettingsOption className="w-12 h-12 text-lightBlue" />
            </div>
            <div className="my-4">
              <h1 className="text-xl leading-tight font-semibold my-4 md:text-2xl">
                Smart Trading Modules
              </h1>
              <p className="leading-8 my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repudiandae blanditiis voluptate natus. Recusandae quisquam
                molestias quibusdam quidem! Fuga, cupiditate fugiat velit
                doloremque dolore est perspiciatis nostrum temporibus deleniti
                incidunt quis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
