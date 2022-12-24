import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux'
Chart.register(...registerables);


function BarChart(props) { //change name to Chart

  const keyField = useSelector((state) => state.key.value)
  const axesField = useSelector((state) => state.axes.value)
  const descriptionField = useSelector((state) => state.description.value)

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
  // console.log("DATA: ", data)
  // London, Rio De Janeiro, CDMX, SF, Nairobi, Seoul

const sampleData = [
  {id: 1, label: 'B', data: ['5', '5', '8', '10', '13', '17', '19', '19', '16', '12', '8', '6']},
  {id: 2, label: 'C', data: ['26', '27', '26', '24', '23', '22', '21', '22', '22', '23', '24', '25']},
  {id: 3, label: 'D', data: ['15', '16', '18', '20', '20', '19', '18', '18', '18', '17', '16', '15']},
  {id: 4, label: 'E', data: ['11', '13', '13', '14', '15', '16', '16', '17', '18', '17', '14', '11']},
  {id: 5, label: 'F', data: ['18', '19', '19', '19', '18', '16', '16', '16', '17', '19', '18', '18']},
  {id: 6, label: 'G', data: ['-2', '0', '6', '13', '18', '22', '25', '26', '21', '15', '7', '4']}
]

  // console.log("DATA: ", data)
  // data[1].label = "ten"

  // don't add row to 'labels[]' if entire row is empty
  const labels = []
  for (let el of props.labels) {
    if (el != "" && el != null) {
      labels.push(el)
    }
  }

  const options = {
    elements: {
      point: {
        radius: keyField.pointSize,
        pointStyle: keyField.pointStyle[0].toLowerCase() + keyField.pointStyle.substring(1)
      }
    },
    scales: {
      x: {
          title: {
            display: axesField.xDisplay,
            text: `${axesField.xLabel}`,
          },
          grid: {
            drawOnChartArea: true,
            drawTicks: true
          }
        },
      y: {
        title: {
          display: axesField.yDisplay,
          text: `${axesField.yLabel}`,
        },
        grid: {
          drawOnChartArea: true,
          drawTicks: true
        }
      }
    },
    plugins: {
      legend: {
        display: keyField.display,
        position: keyField.position.toLowerCase(),
        // pointStyle: keyField.pointStyle,
        align: keyField.align.toLowerCase(),
        pointStyle: keyField.pointStyle,
        padding: keyField.padding,
        useBorderRadius: true,
        borderRadius: 10,
        reverse: keyField.isReversed,
      },
      subtitle: {
        display: descriptionField.description.length > 0 ? true : false,
        text: `${descriptionField.description}`,
        padding: '5'
      }
    },
    maintainAspectRatio: false,
  }

  if (props.chartType === "BarChart") {
    return(
      <Bar
        datasetIdKey='id'
        data={{
          labels: labels,
          datasets: data
        }}
        options={options}
      />)
  } else if (props.chartType === "LineChart") {
    return (
      <Line
        datasetIdKey='id'
        data={{
          labels: labels,
          datasets: data
        }}
        options={options}
      />)
  } else if (props.chartType === "PieChart") {
    return (
      <Pie
        datasetIdKey='id'
        data={{
          labels: labels,
          datasets: data
        }}
        options={options}
      />)
  }
}
  
  export default BarChart;