import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import TitleCard from './titleCard'
import { _DeepPartialObject } from 'chart.js/dist/types/utils'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const BarChart = () => {
    type Top = 'center' | 'left' | 'top' | 'right' | 'bottom' | 'chartArea'

    type ChartOptions = {
        responsive: boolean
        plugins: {
            legend: {
                position:
                    | Top
                    | _DeepPartialObject<{ [scaleId: string]: number }>
                    | undefined
            }
        }
    }

    const options: ChartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    }

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
    ]

    const data = {
        labels,
        datasets: [
            {
                label: 'Plan 1',
                data: labels.map(() => {
                    return Math.random() * 1000 + 500
                }),
                backgroundColor: 'rgba(255, 99, 132, 1)',
            },
            {
                label: 'Plan 2',
                data: labels.map(() => {
                    return Math.random() * 1000 + 500
                }),
                backgroundColor: 'rgba(53, 162, 235, 1)',
            },
        ],
    }

    return (
        <TitleCard title={'Revenue'}>
            <Bar options={options} data={data} />
        </TitleCard>
    )
}

export default BarChart
