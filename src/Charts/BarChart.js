import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

function BarChart(props) {
    return (
  
          <Bar
            datasetIdKey='id'
            data={{
              labels: props.labels,
              datasets: props.datasets
            }}
          />
  
    );
  }
  
  export default BarChart;