import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function App() {

  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  const colHeaders = [
    { field: 'id',      headerName: 'ID',     width: 80,   editable: false},
    { field: 'field_1', headerName: 'Month',  width: 100,  editable: true },
    { field: 'field_2', headerName: 'Temp0',  width: 100,  editable: true },
    { field: 'field_3', headerName: 'Temp1',  width: 100,  editable: true },
  ]


  const [rows, setRows] = useState([
    { id: 0, field_1: 'Jun', field_2: 15,  field_3: 10},
    { id: 1, field_1: 'Jul', field_2: 7,   field_3: 1},
    { id: 2, field_1: 'Aug', field_2: 20,  field_3: 7},
  ])

  const updateRows = (rows, field, id, value) => { // c = field_n
    const updatedRows = []
    rows.map((row) => {
      if (row.id === id) {
        let modifiedRow = {...row, [field]: value}
        updatedRows.push(modifiedRow)
        console.log(field)
      } else {
        updatedRows.push(row)
      }
    })
    console.log(updatedRows)
    setRows(updatedRows)
  }


  // map INPUT DATA to chart

  // const [label, setLabel] = useState(0)
  const labels = rows.map(row => row[Object.keys(row)[1]])

  const data = [
    { id: 0, label: colHeaders[2].headerName, data: rows.map(row => row.field_2)}, 
    { id: 1, label: colHeaders[3].headerName, data: rows.map(row => row.field_3)}, 
  ]

  return (
    <div className="App">

        <Box sx={{ height: 300, width: '50%' }}>
          <DataGrid
            rows={rows}
            columns={colHeaders}
            pageSize={10}
            rowsPerPageOptions={[10]}
            experimentalFeatures={{ newEditingApi: true }}
            onCellEditStop={(params, event) => {
              console.log(params.field, params.id, event.target.value)
              updateRows(rows, params.field, params.id, event.target.value)
            }}
          />
        </Box>

      {/* <form>
        <label>enter label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
      </form> */}

      <BarChart datasets={data}
                labels = {labels}
      />

    </div>
  );
}

export default App;
