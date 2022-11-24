import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import CustomizedAccordions from './Accordion.js'


function App() {

  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  const [colHeaders, setColHeaders] = useState([
    { field: 'id',      headerName: '#',        width: 50,   editable: false, hide: true},
    { field: 'field_1', headerName: 'Input',    width: 100,  editable: true,  allowResizing: true },
    { field: 'field_2', headerName: 'Output 1', width: 100,  editable: true },
    { field: 'field_3', headerName: 'Output 2', width: 100,  editable: true },
    { field: 'field_4', headerName: 'Output 3', width: 100,  editable: true },
    { field: 'field_5', headerName: 'Output 4', width: 100,  editable: true },
    { field: 'field_6', headerName: 'Output 5', width: 100,  editable: true },
    { field: 'field_7', headerName: 'Output 6', width: 100,  editable: true },
  ])

  const [rows, setRows] = useState([
    { id: 0, field_1: 'Jun', field_2: 12,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
    { id: 1, field_1: 'Jul', field_2: 7,     field_3: 1,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
    { id: 2, field_1: 'Aug', field_2: 20,    field_3: 7,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
    { id: 3, field_1: 'Sep', field_2: 14,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
    { id: 4, field_1: 'Oct', field_2: 15,    field_3: 12, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
    { id: 5, field_1: 'Nov', field_2: 9,     field_3: 8,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  ])

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
    { id: 0, label: colHeaders[2].headerName, data: rows.map(row => row.field_2)}, 
    { id: 1, label: colHeaders[3].headerName, data: rows.map(row => row.field_3)}, 
    { id: 2, label: colHeaders[4].headerName, data: rows.map(row => row.field_4)}, 
    { id: 3, label: colHeaders[5].headerName, data: rows.map(row => row.field_5)}, 
    { id: 4, label: colHeaders[6].headerName, data: rows.map(row => row.field_6)}, 
    { id: 5, label: colHeaders[7].headerName, data: rows.map(row => row.field_7)}, 
  ]

  return (
    <div className="App">

      <div className='main-content'>
        <BarChart datasets={data}
                    labels={labels}
        />
      </div>

      <div className='sidebar'>
        <CustomizedAccordions>
          <Box sx={{ height: '50vh', width: 360 }}>
            <DataGrid
              rows={rows}
              columns={colHeaders}
              pageSize={10}
              rowsPerPageOptions={[10]}
              experimentalFeatures={{ newEditingApi: true }}
              onCellEditStop={(params, event) => {
                updateRows(rows, params.field, params.id, event.target.value)
              }}
            />
          </Box>
        </CustomizedAccordions>
        
      </div>

    </div>
  );
}

export default App;