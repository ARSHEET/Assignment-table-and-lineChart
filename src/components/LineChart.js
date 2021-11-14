import React from 'react'
import { Line } from 'react-chartjs-2'

const data = {
  labels: ["2004", "2008", "2012", "2016", "2020"],
  datasets: [
    {
      label: "Medals Won by India in Olympics",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      data: [1, 3, 6, 2, 7]
    }
  ]
};

const lineOptions = {
  width: 600,
  height: 400,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          beginAtZero: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          min: 0,
          beginAtZero: true
        }
      }
    ]
  }
};


function LineChart(props) {

  return (
    <div className="chart">
      <Line data={data} options={lineOptions}/>
    </div>
  )
}

export default LineChart
