import * as React from "react";
import Header from "../../../components/Header";
import LeftSidebar from "../../../components/leftSidebar";

const Plans = () => {
  type Plan = {
    package: string;
    status: string;
    duration: number;
    hourInterest: number;
    deposit: number;
    totalInterest: number;
  };

  const plans: Plan[] = [
    {
      package: "bronze",
      status: "Available",
      duration: 7,
      hourInterest: 0.5,
      deposit: 500,
      totalInterest: 184,
    },
    {
      package: "silver",
      status: "Available",
      duration: 7,
      hourInterest: 0.52,
      deposit: 700,
      totalInterest: 187.36,
    },
    {
      package: "golden",
      status: "Available",
      duration: 7,
      hourInterest: 0.5,
      deposit: 1500,
      totalInterest: 189.04,
    },
    {
      package: "ruby",
      status: "Available",
      duration: 7,
      hourInterest: 0.59,
      deposit: 3000,
      totalInterest: 199.12,
    },
    {
      package: "diamond",
      status: "Available",
      duration: 7,
      hourInterest: 0.6,
      deposit: 5000,
      totalInterest: 200.8,
    },
    {
      package: "sapphire",
      status: "Available",
      duration: 7,
      hourInterest: 0.5,
      deposit: 10000,
      totalInterest: 205.4,
    },
  ];

  return (
    <div className="relative">
      <div>
        <Header />
      </div>
      <div className="grid mt-16 md:mt-14 grid-cols-4 bg-gray-200 dark:bg-gray-900">
        <div className="hidden md:block md:col-span-1 min-w-full">
          <LeftSidebar />
        </div>
        <div className="col-span-4 md:col-span-3 p-4 md:p-8">
          <p className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Plans
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            {plans.map((item) => (
              <div
                className="p-8 rounded-lg bg-white dark:bg-base-100 shadow-md duration-200 ease-in-out hover:-translate-y-2  text-gray-700 dark:text-gray-200"
                key={item.package}
              >
                <p className=" text-center text-2xl capitalize">
                  {item.package} Package
                </p>
                <p className=" text-center text-lg">{item.status}</p>
                <div className="flex justify-between">
                  <div className=" flex flex-col items-center justify-center">
                    <p className="text-3xl my-1">{item.hourInterest}%</p>
                    <p className="text-sm">Hourly Interest</p>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <p className="text-3xl my-1">{item.duration}</p>
                    <p className="text-sm">Term Days</p>
                  </div>
                </div>
                <div className="mt-8 border-t py-4">
                  <div className="flex justify-between my-2">
                    <p className="">Deposit Amount</p>
                    <p>{item.duration} USD</p>
                  </div>
                  <div className="flex justify-between my-2">
                    <p className="">Deposit Type</p>
                    <p>Fixed</p>
                  </div>
                  <div className="flex justify-between my-2">
                    <p className="">Capital Return</p>
                    <p>End of term</p>
                  </div>
                  <div className="flex justify-between my-2">
                    <p className="">Total Return</p>
                    <p>{item.totalInterest}%</p>
                  </div>

                  <div className="mt-8 flex justify-center">
                    <button className="button bg-deepPurple text-gray-200 dark:bg-mainPurple hover:bg-opacity-80">
                      Invest Now!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
