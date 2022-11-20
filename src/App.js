import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function App() {

  // INPUT DATA -> e.g. csv, pasted, typed, etc

  const columns = [
    { field: 'id',    headerName: 'ID',    width: 80,   editable: false},
    { field: 'month', headerName: 'Month', width: 100,  editable: true },
    { field: 'param', headerName: 'Temp',  width: 100,  editable: true },
  ];

  const rows = [
    { id: 0, month: 'Jun', param: 5},
    { id: 1, month: 'Jul', param: 7},
    { id: 2, month: 'Aug', param: 20},
  ];


  // map INPUT DATA to chart

  const [label, setLabel] = useState(0)
  const labels = rows.map(row => row[Object.keys(row)[1]])

  const row = { id: 0, month: 'Jun', param: 5}
  console.log("MONTH: " + Object.keys(row)[1])

  const data = [
    { id: 0, label: 'Temp',   data: [5, 7, 20]  },

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

      <form>
        <label>enter label:
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>

      </form>

      <BarChart datasets={data}
                labels = {labels}
      />

    </div>
  );
}

export default App;
