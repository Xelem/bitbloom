import * as React from "react";

const Transactions = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8">My Transactions</h1>

      <div className="pb-8 rounded-lg w-[600px] md:w-[100%] bg-mainPurple overflow-auto mr-2">
        <div className="grid grid-cols-5 mb-4 bg-[#a166e3] rounded-t-lg p-4">
          <p className="text-xl font-semibold text-center">Transaction ID</p>
          <p className="text-xl font-semibold text-center">Date</p>
          <p className="text-xl font-semibold text-center">Amount</p>
          <p className="text-xl font-semibold text-center">Description</p>
          <p className="text-xl font-semibold text-center">Status</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">45678ihgftyu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$500</p>
          <p className="uppercase text-center text-deposit-500 text-green-500">
            Deposit
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
        <div className="grid grid-cols-5 my-3 hover:bg-deepPurple p-2 transition-all duration-200 ease-in-out">
          <p className="text-white uppercase text-center">34567yuhgoiu</p>
          <p className="text-white uppercase text-center">22/04/24</p>
          <p className="text-white uppercase text-center">$150</p>
          <p className="uppercase text-center text-deposit-500 text-red-500">
            Withdraw
          </p>
          <p className="uppercase text-center text-green-500">Successful</p>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
