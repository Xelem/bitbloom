import React from 'react'

import Header from '../../../components/Header'
import LeftSidebar from '../../../components/leftSidebar'

const Investments = () => {
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
                        Investments
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Investments
