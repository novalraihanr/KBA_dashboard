"use client";

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = ({ selectedYear }) => {
    const [penjualanData, setPenjualanData] = useState([]);

    useEffect(() => {
        const fetchPenjualan = async () => {
            const response = await fetch('http://localhost:8080/penjualan'); //DISINI YA VAL
            const data = await response.json();

            const yearData = data.filter(item => item.tahun == selectedYear);

            if (yearData) {
                const penjualanValues = yearData.map(item => item.penjualan);
                setPenjualanData(penjualanValues);
            } else {
                setPenjualanData([]);
            }
        };

        if (selectedYear !== 'Tahun') {
            fetchPenjualan();
        }
    }, [selectedYear]);

    const targetPenjualan = [1000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000, 7500, 25000, 7500];

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Reality Sales',
                data: penjualanData,
                backgroundColor: '#4AB58E',
                borderColor: '#4AB58E',
                borderWidth: 1,
                borderRadius: 5,
                barThickness: 20,
            },
            {
                label: 'Target Sales',
                data: targetPenjualan,
                backgroundColor: '#FFCF00',
                borderColor: '#FFCF00',
                borderWidth: 1,
                borderRadius: 5,
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => {
                        return tooltipItems[0].label;
                    },
                    label: (tooltipItem) => {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    },
                },
                mode: 'index',
                intersect: false,
                animation: {
                    duration: 400,
                },
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 10,
                        color: '#464E5F',
                    },
                    maxRotation: 0,
                    autoSkip: false,
                },
                border: {
                    display: false,
                },
                barPercentage: 0.9,
                categoryPercentage: 1,
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
        layout: {
            padding: {
                bottom: 20,
            },
        },
        elements: {
            bar: {
                borderRadius: 5,
                borderWidth: 2,
            },
        },
    };

    return (
        <div className="bg-white rounded-lg h-44 w-full overflow-x-auto scrollbar-hidden">
            <div style={{ width: '600px', height: '100%' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
