import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">Dashboard</h1>

      <div className="bg-mainPurple rounded-md p-8 items-center flex">
        <p className="text-xl font-semibold">Quick Links</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center content-center md:space-x-4 ml-auto">
          <button className="button w-36 hover:bg-opacity-90 bg-lightBlue">
            Invest & Earn
          </button>
          <button className="button w-36 hover:bg-opacity-90 bg-green-500">
            Deposit
          </button>
          <button className="button w-36 hover:bg-opacity-90 bg-red-500">
            Withdraw
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 my-12">
        <div className="p-8 rounded-lg border-b-2 border-lightBlue bg-mainPurple">
          <p className="font-semibold text-xl">Available Balance</p>
          <p className="text-3xl mt-4">
            0.00 <span className="text-gray-300">USD</span>
          </p>
        </div>
        <div className="p-8 rounded-lg border-b-2 border-lightBlue bg-mainPurple">
          <p className="font-semibold text-xl">Total Deposit</p>
          <p className="text-3xl mt-4">
            0.00 <span className="text-gray-300">USD</span>
          </p>
        </div>
        <div className="p-8 rounded-lg border-b-2 border-lightBlue bg-mainPurple">
          <p className="font-semibold text-xl">Total Withdrawal</p>
          <p className="text-3xl mt-4">
            0.00 <span className="text-gray-300">USD</span>
          </p>
        </div>
      </div>

      <div className="p-8 rounded-lg bg-mainPurple">
        <p className="font-semibold text-xl mb-8">Transactions</p>
        <div className="grid grid-cols-3 mb-4">
          <p className="text-gray-300 uppercase opacity-80 md:text-center">
            Amount
          </p>
          <p className="text-gray-300 uppercase opacity-80 md:text-center">
            Description
          </p>
          <p className="text-gray-300 uppercase opacity-80 md:text-center">
            Status
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 my-3 hover:bg-deepPurple p-2 rounded-md transition-all duration-200 ease-in-out">
          <p className="text-white uppercase opacity-80 md:text-center">$500</p>
          <p className="uppercase opacity-80 md:text-center text-deposit-500 text-green-500">
            Deposit
          </p>
          <p className="uppercase opacity-80 md:text-center text-green-500">
            Successful
          </p>
        </div>
        <div className="grid grid-cols-3 my-3 hover:bg-deepPurple p-2 rounded-md transition-all duration-200 ease-in-out">
          <p className="text-white uppercase opacity-80 md:text-center">$150</p>
          <p className="uppercase opacity-80 md:text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase opacity-80 md:text-center text-green-500">
            Successful
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
