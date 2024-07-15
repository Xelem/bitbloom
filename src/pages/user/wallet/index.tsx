import React from 'react'
import Select from 'react-select'
import Header from '../../../components/Header'
import LeftSidebar from '../../../components/leftSidebar'
import { CiMoneyBill } from 'react-icons/ci'
import { FaCopy, FaPaste } from 'react-icons/fa'
import DashboardStats from '../../../components/dashboardStats'
import TitleCard from '../../../components/titleCard'

const Wallet = () => {
    interface StatData {
        title: string
        value: string
        icon: React.JSX.Element
        description: string
    }

    interface DropDownOption {
        value: string
        label: string
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

    const options: DropDownOption[] = [
        {
            value: 'tfg7980y2b89y28hu80y[0',
            label: 'BTC',
        },
        {
            value: 'tfg7980y2b89y28hu80y[0',
            label: 'ETH',
        },
        {
            value: 'tfg7980y2b89y28hu80y[0',
            label: 'USDT',
        },
    ]

    const selectCustomStyles: any = {
        control: (provided: any) => ({
            ...provided,

            border: '1px solid rgb(229 231 235)',
            borderRadius: 4,
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #aaa',
            },
        }),
        menu: (provided: any) => ({
            ...provided,
            borderRadius: 4,
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            background: 'white',
        }),
        option: (provided: any) => ({
            ...provided,
            background: 'white',
            color: 'black',
            '&:hover': {
                backgroundColor: '#462C74',
                color: 'white',
            },
        }),
    }

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
                        Wallet
                    </p>
                    <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                        {statsData.map((d, k) => {
                            return (
                                <DashboardStats key={k} {...d} colorIndex={k} />
                            )
                        })}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mt-16 md:mt-14">
                        <TitleCard title="Deposit Funds" topMargin="mt-2">
                            <div className=" text-gray-700 dark:text-gray-200">
                                <p>Choose currency</p>
                                <p>
                                    All transactions are done on BSC/BEP 20
                                    smartchain. Please confirm the network or
                                    wour funds will be lost.
                                </p>
                                <Select
                                    options={options}
                                    styles={selectCustomStyles}
                                    placeholder="Select an option"
                                    className="my-2"
                                />

                                <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                                    <p>random Address</p>

                                    <FaCopy className="ml-auto hover:cursor-pointer" />
                                </div>
                                <div className="divider"></div>
                            </div>
                        </TitleCard>
                        <TitleCard title="Withdraw Funds" topMargin="mt-2">
                            <div className=" text-gray-700 dark:text-gray-200">
                                <p>Choose currency</p>
                                <p>
                                    All transactions are done on BSC/BEP 20
                                    smartchain. Please confirm the network or
                                    wour funds will be lost.
                                </p>
                                <Select
                                    options={options}
                                    styles={selectCustomStyles}
                                    placeholder="Select an option"
                                    className="my-2"
                                />

                                <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Paste your withdrawal address"
                                        className="bg-transparent w-full outline-none"
                                    />
                                    <FaPaste className="ml-auto hover:cursor-pointer" />
                                </div>

                                <div className="py-2">
                                    <button className="button bg-deepPurple w-[100%] md:w-auto text-gray-200 dark:bg-mainPurple hover:bg-opacity-80">
                                        Withdraw funds
                                    </button>
                                </div>
                                <div className="divider"></div>
                            </div>
                        </TitleCard>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet
