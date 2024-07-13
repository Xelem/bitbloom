import React from 'react'
import DashboardStats from '../../../components/dashboardStats'

import BarChart from '../../../components/barChart'
import LineChart from '../../../components/lineChart'
import Header from '../../../components/Header'
import LeftSidebar from '../../../components/leftSidebar'
import { CiMoneyBill } from 'react-icons/ci'

const Dashboard = () => {
    interface StatData {
        title: string
        value: string
        icon: React.JSX.Element
        description: string
    }

    const statsData: StatData[] = [
        {
            title: 'Available Balance',
            value: '$60,720',
            icon: <CiMoneyBill className="w-8 h-8" />,
            description: '↗︎ 2300 (22%) weekly',
        },
        {
            title: 'Total Deposit',
            value: '$34,545',
            icon: <CiMoneyBill className="w-8 h-8" />,
            description: 'All time',
        },
        {
            title: 'Total Withdrawal',
            value: '$22.412',
            icon: <CiMoneyBill className="w-8 h-8" />,
            description: 'All time',
        },
        {
            title: 'Total Invested',
            value: '$22.412',
            icon: <CiMoneyBill className="w-8 h-8" />,
            description: '10 days left',
        },
    ]

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
                        Dashboard
                    </p>
                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                        {statsData.map((d, k) => {
                            return (
                                <DashboardStats key={k} {...d} colorIndex={k} />
                            )
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                        <LineChart />
                        <BarChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
