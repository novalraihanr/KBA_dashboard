"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Pendapatan', // Label yang akan ditampilkan di tooltip
                data: [1000, 2500, 1150, 5000, 4500, 3000, 3300, 4000, 3500, 2220, 3450, 3670],
                backgroundColor: '#0095FF', // Warna bar
                borderColor: '#0095FF',
                borderWidth: 0,
                barThickness: 7,
                borderRadius: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Mengizinkan grafik untuk menyesuaikan dengan ukuran container
        plugins: {
            legend: {
                display: false, // Menonaktifkan legenda
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || ''; // Ambil label dari dataset
                        const value = context.raw; // Ambil nilai dari tooltip
                        return label ? `${label}: ${value}` : value; // Format tooltip
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
                    padding: 0, // Kurangi padding untuk jarak antara label sumbu X
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
                    padding: 5, // Kurangi padding untuk jarak antara label sumbu Y
                },
                grid: {
                    borderDash: [5, 5], // Garis sumbu Y
                },
            },
        },
        layout: {
            padding: {
                bottom: 0, // Mengurangi padding di bawah grafik
            },
        },
        elements: {
            bar: {
                borderRadius: 4, // Membuat ujung bar lebih bulat
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
        <div className="bg-white p-4 rounded-lg flex justify-center w-full" style={{ height: '35vh' }}> {/* Atur tinggi container di sini */}
            <div style={{ width: '100%', height: '100%' }}> {/* Pastikan tinggi grafik mengikuti tinggi container */}
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
