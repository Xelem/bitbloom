import moment from 'moment'
import React, { useState } from 'react'
import DummyData from '../../../utils/dummyData'
import TitleCard from '../../../components/titleCard'
import Header from '../../../components/Header'
import LeftSidebar from '../../../components/leftSidebar'

function Transactions() {
    const [trans] = useState(DummyData.RECENT_TRANSACTIONS)

    return (
        <div className="relative">
            <div>
                <Header />
            </div>
            <div className="grid mt-16 md:mt-14 grid-cols-4 bg-gray-200 dark:bg-gray-900">
                <div className="hidden md:block md:col-span-1 min-w-full">
                    <LeftSidebar isOpen={true} onClose={() => {}} />
                </div>
                <div className="col-span-4 md:col-span-3 p-4 md:p-8">
                    <p className="text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
                        Transactions
                    </p>
                    <TitleCard title="Recent Transactions" topMargin="mt-2">
                        {/* Team Member list in table format loaded constant */}
                        <div className="overflow-x-auto w-full  text-gray-700 dark:text-gray-200">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th>Status</th>
                                        <th>Type</th>
                                        <th>Amount</th>
                                        <th>Transaction Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {trans.map((l, k) => {
                                        return (
                                            <tr key={k}>
                                                <td className="text-success">
                                                    {l.status}
                                                </td>
                                                <td>{l.type}</td>
                                                <td>${l.amount}</td>
                                                <td>
                                                    {moment(l.date).format(
                                                        'D MMM',
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </TitleCard>
                </div>
            </div>
        </div>
    )
}

export default Transactions
