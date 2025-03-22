import React, { useRef, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components for Radar
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['Chrome', 'Firefox', 'Vivaldi', 'Brave', 'Opera', 'Edge', 'Safari'],
    datasets: [
      {
        label: 'Energy Block',
        data: [100, 90, 80, 70, 60, 50, 40],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          const gradient = ctx.createRadialGradient(
            chartArea.left + chartArea.width / 2,
            chartArea.top + chartArea.height / 2,
            0,
            chartArea.left + chartArea.width / 2,
            chartArea.top + chartArea.height / 2,
            Math.max(chartArea.width, chartArea.height) / 2
          );
          gradient.addColorStop(0, 'rgba(45, 212, 191, 0.5)');
          gradient.addColorStop(1, 'rgba(45, 212, 191, 0.1)');
          return gradient;
        },
        borderColor: '#2DD4BF',
        borderWidth: 2,
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
        backgroundColor: '#1F2937',
        titleColor: '#D1D5DB',
        bodyColor: '#D1D5DB',
      },
    },
    scales: {
      r: {
        grid: {
          color: '#4B5563',
        },
        ticks: {
          display: false,
        },
        pointLabels: {
          color: '#9CA3AF',
        },
      },
    },
    animation: {
      duration: 2000, // Longer animation for radar chart
      easing: 'easeOutElastic', // Elastic bounce effect
      onProgress: (animation) => {
        animation.element.opacity = animation.currentStep / animation.numSteps;
      },
    },
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
      <div className="text-gray-400 text-sm mb-2">Energy Block</div>
      <div className="h-32">
        <Radar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default RadarChart;