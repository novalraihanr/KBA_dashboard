"use client";

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ selectedYear }) => {
  const [netProfitData, setNetProfitData] = useState([]);

  useEffect(() => {
    const fetchNetProfit = async () => {
      const response = await fetch(`http://localhost:8080/revenue`);
      const data = await response.json();

      const yearData = data.filter(item => item.tahun == selectedYear);

      if (yearData) {
        const profitValues = yearData.map(item => item.net_profit);
        setNetProfitData(profitValues);
      } else {
        setNetProfitData([]); 
      }
    };

    if (selectedYear !== 'Tahun') {
      fetchNetProfit();
    }
  }, [selectedYear]);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
    datasets: [
      {
        label: 'Net Profit',
        data: netProfitData,
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
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.raw;
            return label ? `${label}: ${value}` : value;
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
          stepSize: 10000,
          callback: function (value) {
            return value / 1000 + 'k';
          },
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
