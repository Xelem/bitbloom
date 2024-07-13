import React from 'react'

interface DashboardStatsProps {
    title: string
    icon: React.JSX.Element
    value: string
    description: string
    colorIndex: number
}

const DashboardStats: React.FC<DashboardStatsProps> = ({
    title,
    icon,
    value,
    description,
}) => {
    const getDescStyle = () => {
        if (description.includes('↗︎'))
            return 'font-bold text-green-700 dark:text-green-300'
        else if (description.includes('↙'))
            return 'font-bold text-rose-500 dark:text-red-400'
        else return ''
    }

    return (
        <div className="stats shadow">
            <div className="stat overflow-x-hidden">
                <div
                    className={`stat-figure dark:text-slate-300 text-deepPurple
            `}
                >
                    {icon}
                </div>
                <div className="stat-title dark:text-slate-300">{title}</div>
                <div
                    className={`stat-value dark:text-slate-300 text-deepPurple
            `}
                >
                    {value}
                </div>
                <div className={'stat-desc  ' + getDescStyle()}>
                    {description}
                </div>
            </div>
        </div>
    )
}

export default DashboardStats
