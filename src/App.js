import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function App() {

  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  //const [columns, setColumns] = useState(0)

  const columns = [
    { field: 'id',      headerName: 'ID',     width: 80,   editable: false},
    { field: 'field_0', headerName: 'Month',  width: 100,  editable: true },
    { field: 'field_1', headerName: 'Temp0',  width: 100,  editable: true },
    { field: 'field_2', headerName: 'Temp1',  width: 100,  editable: true },
  ];

  const rows = [
    { id: 0, field_0: 'Jun', field_1: 15, field_2: 10},
    { id: 1, field_0: 'Jul', field_1: 7,  field_2: 1},
    { id: 2, field_0: 'Aug', field_1: 20, field_2: 7},
  ];


  // map INPUT DATA to chart

  // const [label, setLabel] = useState(0)
  const labels = rows.map(row => row[Object.keys(row)[1]])

  const data = [
    { id: 0, label: columns[2].headerName, data: rows.map(row => row.field_1)}, 
    { id: 1, label: columns[3].headerName, data: rows.map(row => row.field_2)}, 
  ]

  return (
    <div className="App">

      <Box sx={{ height: 300, width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
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
