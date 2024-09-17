"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const BarChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [
            {
                label: 'Reality Sales',
                data: [5000, 10000, 15000, 10000, 20000, 30000, 33000, 40000, 35000, 22200, 34500, 36700],
                backgroundColor: '#4AB58E',
                borderColor: '#4AB58E',
                borderWidth: 1,
                borderRadius: 5, // Mengatur corner radius
                barThickness: 20,  // Mengatur ketebalan bar
            },
            {
                label: 'Target Sales',
                data: [4000, 8000, 12000, 9000, 15000, 28000, 30000, 39000, 34000, 20000, 32000, 35000],
                backgroundColor: '#FFCF00',
                borderColor: '#FFCF00',
                borderWidth: 1,
                borderRadius: 5, // Mengatur corner radius
                barThickness: 20,  // Mengatur ketebalan bar
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Biarkan grafik menyesuaikan dengan container
        plugins: {
            legend: {
                display: false, // Menonaktifkan legenda
            },
            tooltip: {
                callbacks: {
                    title: (tooltipItems) => {
                        // Menampilkan label tooltip
                        return tooltipItems[0].label;
                    },
                    label: (tooltipItem) => {
                        // Menampilkan nilai tooltip
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
                display: true, // Menampilkan sumbu X
                grid: {
                    display: false, // Menonaktifkan grid sumbu X
                },
                ticks: {
                    font: {
                        size: 10,
                        color: '#464E5F',
                    },
                    maxRotation: 0,
                    autoSkip: false, // Menampilkan semua label
                },
                border: {
                    display: false, // Menonaktifkan border sumbu X
                },
                barPercentage: 0.9, // Lebar bar relatif terhadap ruang kategori
                categoryPercentage: 1, // Ruang kategori relatif terhadap ruang total
            },
            y: {
                display: false, // Menonaktifkan sumbu Y
                grid: {
                    display: false, // Menonaktifkan grid sumbu Y
                },
            },
        },
        layout: {
            padding: {
                bottom: 20, // Menambahkan padding di bawah grafik untuk sumbu X
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
            <div style={{ width: '600px', height: '100%' }}> {/* Pastikan lebar elemen lebih besar dari kontainer */} 
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default BarChart;
