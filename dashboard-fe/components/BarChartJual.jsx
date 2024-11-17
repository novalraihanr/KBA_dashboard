"use client";

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Penjualan',
                data: penjualanData,
                backgroundColor: penjualanData.map((value, index) => {
                    if (selectedYear === "2005" && index >= 6) { //INI INDEX NYA JUGA BISA DIGANTI PAL SESUAI BULAN KOSONGNYA
                        return '#FFA412'; 
                    }
                    return '#0095FF'; 
                }),
                borderColor: '#0095FF',
                borderWidth: 0,
                barThickness: 7,
                borderRadius: 2,
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
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        const monthIndex = context.dataIndex;

                        if (selectedYear === "2005" && monthIndex >= 6) { //INI JUGA
                            return `Penjualan (Prediction): ${value}`;
                        }
                        return `${label}: ${value}`;
                    },
                },
                intersect: false,
                mode: 'index',
                animationDuration: 400,
            },
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 8,
                        style: 'normal',
                        color: '#464E5F',
                    },
                    callback: function (value, index) {
                        return data.labels[index];
                    },
                    maxRotation: 0,
                    padding: 0,
                },
                grid: {
                    display: false,
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 10,
                    },
                    stepSize: 1000,
                    callback: function (value) {
                        return value / 1000 + 'k';
                    },
                    padding: 5,
                },
                grid: {
                    borderDash: [5, 5],
                },
            },
        },
        layout: {
            padding: {
                bottom: 0,
            },
        },
        elements: {
            bar: {
                borderRadius: 4,
                borderWidth: 2,
            },
        },
        hover: {
            intersect: false,
            mode: 'index',
            animationDuration: 400,
        },
        animation: {
            duration: 1000,
        },
    };

    return (
        <div className="bg-white p-4 rounded-lg flex justify-center w-full" style={{ height: '35vh' }}>
            <div style={{ width: '100%', height: '100%' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
