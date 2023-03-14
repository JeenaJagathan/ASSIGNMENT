import { useEffect, useState } from "react";
import  {Chart } from 'chart.js/auto';

const SalesChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Call API to get chart data
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      datasets: [
        {
          label: "Sales",
          data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, []);

  useEffect(() => {
    // Get chart canvas and create new chart
    const chartCanvas = document.getElementById("salesChart");
    const newChart = new Chart(chartCanvas, {
      type: "bar",
      data: chartData,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    return () => {
      newChart.destroy(); // cleanup on unmount
    };
  }, [chartData]);

  return <canvas id="salesChart" />;
};

export default SalesChart;
