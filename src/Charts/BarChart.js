import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSelector } from 'react-redux'
Chart.register(...registerables);


function BarChart(props) { //change name to Chart

  const keyField = useSelector((state) => state.key.value)
  const axesField = useSelector((state) => state.axes.value)
  const descriptionField = useSelector((state) => state.description.value)


  // if entire row or col is empty -> drop

  // don't add col to 'data[]' if entire row is empty
  const data = []
  for (let i=1; i<7; i++) {
    const col = props.datasets[i].data
    if (!(col.every( item => (item == null || item == "") ))) {
      data.push({...props.datasets[i]})
    }
  }

  // don't add row to 'labels[]' if entire row is empty
  const labels = []
  for (let el of props.labels) {
    if (!(el == "" || el == null)) {
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
        padding: descriptionField.descriptionPadding
      }
    },
    maintainAspectRatio: false,
  }

  if (props.chartType === "BarChart") {
    return(
      <Bar
        datasetIdKey='id'
        data={{
          labels: labels, // x-axis
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