import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";


function LineChart({ LchartData,axisLab }) {
  return (
    <div className="chart-container">
      <Line 
  type= {'line'}
  data= {LchartData}
  options= {
   { responsive: true,
    interaction: {
      mode: 'index',
      intersect: false
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: axisLab.x
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: axisLab.y
        }
      }
    }}
  } 
/>
    </div>
  );
}
export default LineChart;