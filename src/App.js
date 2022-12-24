import './App.css'
import { React, useState, useEffect } from 'react';
import Navigation from './Components/Navigation';
import * as SS from './Functions/CreateSpreasheet';
import { Routes, Route } from "react-router-dom";

import Header from './Components/Header';
import SelectChart from './Pages/SelectChart';
import Grid from './Pages/Grid';
import SplitView from './Pages/SplitView';
import Chart from './Pages/Chart';
import About from './Pages/About';

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

import {
  Chart as ChartJS, CategoryScale, LinearScale,
  BarElement, Title, Tooltip, Legend} from 'chart.js';
ChartJS.register(
  CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


// generate sample data
// legend labels
// description padding

function App() {

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.getElementsByClassName("main-content__chart")[0])
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'download.png', 'image/png')
  }

  const generateSampleData = () => {

  }




  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  const [colHeaders, setColHeaders] = useState(SS.setColumns())
  // const [colHeaders, setColHeaders] = useState([
  //   { field: 'id',      headerName: '#', width: 50,   editable: false, hide: true},
  //   { field: 'field_1', headerName: ' ', width: 100,  editable: true,  allowResizing: true },
  //   { field: 'field_2', headerName: '1', width: 100,  editable: true },
  //   { field: 'field_3', headerName: '2', width: 100,  editable: true },
  //   { field: 'field_4', headerName: '3', width: 100,  editable: true },
  //   { field: 'field_5', headerName: '4', width: 100,  editable: true },
  //   { field: 'field_6', headerName: '5', width: 100,  editable: true },
  //   { field: 'field_7', headerName: '6', width: 100,  editable: true },
  // ])

  const [rows, setRows] = useState(SS.setRows())
  // const [rows, setRows] = useState([
  //   { id: 0, field_1: 'Jun', field_2: 12,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 1, field_1: 'Jul', field_2: 7,     field_3: 1,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 2, field_1: 'Aug', field_2: 20,    field_3: 7,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 3, field_1: 'Sep', field_2: 14,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 4, field_1: 'Oct', field_2: 15,    field_3: 12, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 5, field_1: 'Nov', field_2: 9,   s  field_3: 8,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  // ])

  const updateRows = (rows, field, id, value) => {
    const updatedRows = []
    rows.map((row) => {
      if (row.id === id) {
        let modifiedRow = {...row, [field]: value}
        updatedRows.push(modifiedRow)
      } else {
        updatedRows.push(row)
      }
    })
    setRows(updatedRows)
  }

  // map INPUT DATA to chart
  const labels = rows.map(row => row[Object.keys(row)[1]])

  const data = [
    // { id: 0, label: colHeaders[1].headerName, data: rows.map(row => row.field_1)}, 
    { id: 1, label: colHeaders[2].headerName, data: rows.map(row => row.field_2)}, 
    { id: 2, label: colHeaders[3].headerName, data: rows.map(row => row.field_3)}, 
    { id: 3, label: colHeaders[4].headerName, data: rows.map(row => row.field_4)}, 
    { id: 4, label: colHeaders[5].headerName, data: rows.map(row => row.field_5)}, 
    { id: 5, label: colHeaders[6].headerName, data: rows.map(row => row.field_6)}, 
    { id: 6, label: colHeaders[7].headerName, data: rows.map(row => row.field_7)}, 
  ]

  const [chart, setChart] = useState('BarChart')
  
  return (

    <div className="App">

      <Header handleCaptureClick={handleCaptureClick}/>

      <div className='main'>
        <Navigation/>
        <Routes>
          <Route path="/select-chart"  element={<SelectChart setChart={setChart}/>} />
          <Route path="/grid"          element={<Grid rows={rows} colHeaders={colHeaders} updateRows={updateRows}/>} />
          <Route path="/split-view"    element={<SplitView chartType={chart} labels={labels} data={data} rows={rows} colHeaders={colHeaders} updateRows={updateRows}/>} />
          <Route path="/edit-chart"    element={<Chart chartType={chart} labels={labels} data={data}/>} />
          <Route path="/about"         element={<About/>} /> 
        </Routes>
      </div>

    </div>

  );
}

export default App;