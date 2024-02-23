import * as React from "react";

const Plans = () => {
  return (
    <div className="md:p-8">
      <h1 className="text-4xl font-semibold mb-8">Investment Plans</h1>

      <div className="grid md:grid-cols-3">
        <div className="p-8 rounded-lg bg-mainPurple">
          <p>Bronze Package</p>
          <p>Available</p>
          <div>
            <div>
              <p>0.5%</p>
              <p>Hourly Interest</p>
            </div>
            <div>
              <p>7</p>
              <p>Term Days</p>
            </div>
          </div>
          <div>
            <div>
              <p>Deposit Amount</p>
              <p>500 USD</p>
            </div>
            <div>
              <p>Deposit Type</p>
              <p>Fixed</p>
            </div>
            <div>
              <p>Capital Return </p>
              <p>End of Term</p>
            </div>
            <div>
              <p>Total Return</p>
              <p>184.0%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
