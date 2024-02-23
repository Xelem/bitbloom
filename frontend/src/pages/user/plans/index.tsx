import * as React from "react";

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
    <div className="md:p-8 p-4">
      <h1 className="text-4xl font-semibold mb-8">Investment Plans</h1>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((item) => (
          <div
            className="p-8 rounded-lg bg-mainPurple shadow-md duration-200 ease-in-out hover:-translate-y-2"
            key={item.package}
          >
            <p className="text-gray-200 text-center text-2xl capitalize">
              {item.package} Package
            </p>
            <p className="text-gray-200 text-center text-lg">{item.status}</p>
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
                <p className="text-gray-200">Deposit Amount</p>
                <p>{item.duration} USD</p>
              </div>
              <div className="flex justify-between my-2">
                <p className="text-gray-200">Deposit Type</p>
                <p>Fixed</p>
              </div>
              <div className="flex justify-between my-2">
                <p className="text-gray-200">Capital Return</p>
                <p>End of term</p>
              </div>
              <div className="flex justify-between my-2">
                <p className="text-gray-200">Total Return</p>
                <p>{item.totalInterest}%</p>
              </div>

              <div className="mt-8 flex justify-center">
                <button className="button bg-[#a166e3] hover:bg-opacity-80">
                  Invest Now!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
