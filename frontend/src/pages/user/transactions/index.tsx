import moment from "moment";
import React, { useState } from "react";
import DummyData from "../../../utils/dummyData";
import TitleCard from "../../../components/titleCard";

function Transactions() {
  const [trans, setTrans] = useState(DummyData.RECENT_TRANSACTIONS);

  return (
    <>
      <TitleCard title="Recent Transactions" topMargin="mt-2">
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email Id</th>
                <th>Location</th>
                <th>Amount</th>
                <th>Transaction Date</th>
              </tr>
            </thead>
            <tbody>
              {trans.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.email}</td>
                    <td>{l.location}</td>
                    <td>${l.amount}</td>
                    <td>{moment(l.date).format("D MMM")}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Transactions;
