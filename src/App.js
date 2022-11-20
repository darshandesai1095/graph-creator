import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function App() {

  const columns = [
    { field: 'id',        headerName: 'ID',         width: 90 },
    { field: 'firstName', headerName: 'First name', width: 100,         editable: true },
    { field: 'lastName',  headerName: 'Last name',  width: 150,         editable: true },
    { field: 'age',       headerName: 'Age',        type: 'number',     editable: true,   width: 50, },
    { field: 'fullName',  headerName: 'Full Name',  description: '...', sortable: false,  width: 160 },
  ];

  const rows = [
    { id: 1, lastName: 'Snow',      firstName: 'Jon',     age: 35},
    { id: 2, lastName: 'Lannister', firstName: 'Cersei',  age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime',   age: 45 },
    { id: 4, lastName: 'Stark',     firstName: 'Arya',    age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys',age: null },
    { id: 6, lastName: 'Melisandre',firstName: null,      age: 150 },
    { id: 7, lastName: 'Clifford',  firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances',   firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie',     firstName: 'Harvey',  age: 65 },
  ];

  const [label, setLabel] = useState("label 1")
  const labels = [label, 'Jul', 'Aug']
  const data = [
    { id: 1, label: 'blue',   data: [5, 6, 20]  },
    { id: 2, label: 'red',    data: [3, 2, -10] },
    { id: 3, label: 'orange', data: [5, 12, -7] },
  ]

  return (
    <div className="App">

      <Box sx={{ height: 600, width: '80%' }}>
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
