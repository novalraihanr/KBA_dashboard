"use client";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Net Profit', // Label yang akan ditampilkan di tooltip
        data: [50, 100, 150, 100, 200, 300, 330, 400, 350, 222, 345, 367],
        borderColor: '#3CD856',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
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
          callback: function(value, index) {
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
          stepSize: 100,
          callback: function (value) {
            return value;
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
      line: {
        tension: 0.4,
        borderColor: '#3CD856',
        borderWidth: 2,
      },
      point: {
        radius: 3,
        hoverRadius: 5,
        hoverBorderWidth: 2,
        backgroundColor: '#FF0000',
        borderColor: '#FF0000',
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
    <div className="bg-white p-4 rounded-lg flex justify-center h-44  w-auto">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
