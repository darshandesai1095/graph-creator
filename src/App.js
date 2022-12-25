import './App.css'
import { React, useState } from 'react';
import Navigation from './Components/Navigation';
import * as SS from './Functions/CreateSpreasheet';
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setItem1, setItem2, setItem3, setItem4, setItem5, setItem6} from './features/KeySlice'


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

function App() {

  const keyField = useSelector((state) => state.key.value)
  const dispatch = useDispatch()

  const handleCaptureClick = async () => {
    const canvas = await html2canvas(document.getElementsByClassName("main-content__chart")[0])
    const dataURL = canvas.toDataURL('image/png')
    downloadjs(dataURL, 'download.png', 'image/png')
  }

  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  const [colHeaders, setColHeaders] = useState(SS.setTableColumns())
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


  const [rows, setRows] = useState(SS.setTableRows())
  const sampleData = [
    { id: 1, field_1: 'Jan', field_2: 5,   field_3: 26,   field_4:15, field_5: 11, field_6: 18,    field_7: -2},
    { id: 2, field_1: 'Feb', field_2: 5,   field_3: 27,   field_4:16, field_5: 13, field_6: 19,    field_7: 0},
    { id: 3, field_1: 'Mar', field_2: 8,   field_3: 26,   field_4:18, field_5: 13, field_6: 19,    field_7: 6},
    { id: 4, field_1: 'Apr', field_2: 10,  field_3: 24,   field_4:20, field_5: 14, field_6: 19,    field_7: 13},
    { id: 5, field_1: 'May', field_2: 13,  field_3: 23,   field_4:20, field_5: 15, field_6: 18,    field_7: 18},
    { id: 6, field_1: 'Jun', field_2: 17,  field_3: 22,   field_4:19, field_5: 16, field_6: 16,    field_7: 22},
    { id: 7, field_1: 'Jul', field_2: 19,  field_3: 21,   field_4:18, field_5: 16, field_6: 16,    field_7: 25},
    { id: 8, field_1: 'Aug', field_2: 19,  field_3: 22,   field_4:18, field_5: 17, field_6: 16,    field_7: 26},
    { id: 9, field_1: 'Sep', field_2: 16,  field_3: 22,   field_4:18, field_5: 18, field_6: 17,    field_7: 21},
    { id: 10, field_1: 'Oct', field_2: 12, field_3: 23,   field_4:17, field_5: 17, field_6: 19,    field_7: 15},
    { id: 11, field_1: 'Nov', field_2: 8,  field_3: 24,   field_4:16, field_5: 14, field_6: 18,    field_7: 7},
    { id: 12, field_1: 'Dec', field_2: 6,  field_3: 25,   field_4:15, field_5: 11, field_6: 18,    field_7: 4},
  ]

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
    { id: 0, label: colHeaders[1].headerName, data: rows.map(row => row.field_1)}, 
    { id: 1, label: keyField.item1, data: rows.map(row => row.field_2)}, 
    { id: 2, label: keyField.item2, data: rows.map(row => row.field_3)}, 
    { id: 3, label: keyField.item3, data: rows.map(row => row.field_4)}, 
    { id: 4, label: keyField.item4, data: rows.map(row => row.field_5)}, 
    { id: 5, label: keyField.item5, data: rows.map(row => row.field_6)}, 
    { id: 6, label: keyField.item6, data: rows.map(row => row.field_7)}, 
  ]

  const generateSampleData = () => {
    setRows(sampleData)
    dispatch(setItem1("LDN"))
    dispatch(setItem2("RIO"))
    dispatch(setItem3("MEX"))
    dispatch(setItem4("SFO"))
    dispatch(setItem5("NBO"))
    dispatch(setItem6("SEL"))
  }

  const clearTable = () => {
    setRows(SS.setTableRows())
    dispatch(setItem1(""))
    dispatch(setItem2(""))
    dispatch(setItem3(""))
    dispatch(setItem4(""))
    dispatch(setItem5(""))
    dispatch(setItem6(""))
  }

  const [chart, setChart] = useState('LineChart')
  
  return (

    <div className="App">

      <Header handleCaptureClick={handleCaptureClick}
              generateSampleData={generateSampleData}
              clearTable={clearTable}
      />

      <div className='main'>
        <Navigation/>
        <Routes>
          <Route exact path="/select-chart"  element={<SelectChart setChart={setChart}/>} />
          <Route exact path="/grid"          element={<Grid rows={rows} colHeaders={colHeaders} updateRows={updateRows}/>} />
          <Route exact path="/split-view"    element={<SplitView chartType={chart} labels={labels} data={data} rows={rows} colHeaders={colHeaders} updateRows={updateRows}/>} />
          <Route exact path="/edit-chart"    element={<Chart chartType={chart} labels={labels} data={data}/>} />
          <Route exact path="/about"         element={<About/>} /> 
        </Routes>
      </div>

    </div>

  );
}

export default App;