import React, { useRef, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Chart = ({ title, type = 'line' }) => {
  const chartRef = useRef(null);

  const dataMap = {
    'Distance Covered': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Distance (Safa Zone)',
          data: [30, 50, 40, 60, 70, 80],
          borderColor: '#2DD4BF',
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return 'rgba(45, 212, 191, 0.2)';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.1)');
            gradient.addColorStop(1, 'rgba(45, 212, 191, 0.5)');
            return gradient;
          },
          fill: true,
        },
      ],
    },
    'Danger Zone': {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Danger Zone',
          data: [10, 20, 15, 25, 30, 35],
          borderColor: '#2DD4BF',
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return 'rgba(45, 212, 191, 0.2)';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.1)');
            gradient.addColorStop(1, 'rgba(45, 212, 191, 0.5)');
            return gradient;
          },
          fill: true,
        },
      ],
    },
    'Air Support': {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [
        {
          label: 'Air Support',
          data: [40, 30, 50, 20],
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return '#2DD4BF';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.3)');
            gradient.addColorStop(1, 'rgba(45, 212, 191, 0.8)');
            return gradient;
          },
          borderColor: '#1E3A8A',
          borderWidth: 1,
          barThickness: 15, // Reduced for smaller screens
        },
      ],
    },
    'Civilian Population': {
      labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Population',
          data: [20, 25, 30, 35, 40, 50],
          backgroundColor: (context) => {
            const chart = context.chart;
            const { ctx, chartArea } = chart;
            if (!chartArea) return '#2DD4BF';
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(45, 212, 191, 0.3)');
            gradient.addColorStop(1, 'rgba(45, 212, 191, 0.8)');
            return gradient;
          },
          borderColor: '#1E3A8A',
          borderWidth: 1,
          barThickness: 15, // Reduced for smaller screens
        },
      ],
    },
  };

  const chartData = dataMap[title] || {
    labels: [],
    datasets: [],
  };

  console.log(`Chart Data for ${title}:`, chartData);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#D1D5DB',
        bodyColor: '#D1D5DB',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 10, // Smaller font for mobile
          },
        },
      },
      y: {
        grid: {
          color: '#4B5563',
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 10, // Smaller font for mobile
          },
        },
        min: 0,
        max: 60,
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [chartData]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-sm mb-2">{title}</div>
      <div className="h-40 sm:h-48 md:h-52 lg:h-48">
        {type === 'line' ? (
          <Line ref={chartRef} data={chartData} options={options} />
        ) : (
          <Bar ref={chartRef} data={chartData} options={options} />
        )}
      </div>
    </div>
  );
};

export default Chart;