import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChart(props) {

  // run function on props.labels and props.datasets...
  // if entire row or col is empty -> drop

  // don't add col to 'data[]' if entire row is empty
  const data = []
  for (let i=0; i<6; i++) {
    const col = props.datasets[i].data
    if (!(col.every( item => (item == null || item == "") ))) {
      data.push(props.datasets[i])
    }
  }
  console.log("DATA: ", data)

  // don't add row to 'labels[]' if entire row is empty
  const labels = []
  for (let el of props.labels) {
    if (el != "" && el != null) {
      labels.push(el)
    }
  }


    return (
  
          <Bar
            datasetIdKey='id'
            data={{
              labels: labels,
              datasets: data
            }}
            options={{
            maintainAspectRatio: false,
            }}
          />
  
    );
  }
  
  export default BarChart;