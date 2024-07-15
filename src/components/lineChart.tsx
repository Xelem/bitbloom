import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import TitleCard from './titleCard'
import { _DeepPartialObject } from 'chart.js/dist/types/utils'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
)

const LineChart = () => {
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
                fill: true,
                label: 'USD',
                data: labels.map(() => {
                    return Math.random() * 100 + 500
                }),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    }

    return (
        <TitleCard title={'Monthly PNL'}>
            <Line data={data} options={options} />
        </TitleCard>
    )
}

export default LineChart
