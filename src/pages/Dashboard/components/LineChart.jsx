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
      {/* <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      /> */}
    </div>
  );
}
export default LineChart;