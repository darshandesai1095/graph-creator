import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import * as SS from '../Functions/CreateSpreasheet';



function Spreadsheet() {

  console.log(SS.setColumns())
  console.log(SS.setRows())

  // INPUT DATA -> e.g. csv, pasted, typed, etc
  // these have to be created using useState as the can be updated

  const [colHeaders, setColHeaders] = useState(SS.setColumns())
  //   { field: 'id',      headerName: ' ', width: 50,  editable: false,   headerAlign: 'center', },
  //   { field: 'field_1', headerName: 'A', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_2', headerName: 'B', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_3', headerName: 'C', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_4', headerName: 'E', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_5', headerName: 'F', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_6', headerName: 'G', width: 80,  editable: true,    headerAlign: 'center', },
  //   { field: 'field_7', headerName: 'H', width: 80,  editable: true,    headerAlign: 'center', },
  // ])


  const [rows, setRows] = useState(SS.setRows())
  //   { id: 1, field_1: '1', field_2: 12,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 2, field_1: '2', field_2: 7,     field_3: 1,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 3, field_1: '3', field_2: 20,    field_3: 7,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 4, field_1: '4', field_2: 14,    field_3: 10, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 5, field_1: '5', field_2: 15,    field_3: 12, field_4:10, field_5: 8, field_6: 12,    field_7: 10},
  //   { id: 6, field_1: '6', field_2: 9,     field_3: 8,  field_4:10, field_5: 8, field_6: 12,    field_7: 10},
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
    { id: 0, label: colHeaders[2].headerName, data: rows.map(row => row.field_2)}, 
    { id: 1, label: colHeaders[3].headerName, data: rows.map(row => row.field_3)}, 
    { id: 2, label: colHeaders[4].headerName, data: rows.map(row => row.field_4)}, 
    { id: 3, label: colHeaders[5].headerName, data: rows.map(row => row.field_5)}, 
    { id: 4, label: colHeaders[6].headerName, data: rows.map(row => row.field_6)}, 
    { id: 5, label: colHeaders[7].headerName, data: rows.map(row => row.field_7)}, 
  ]

  return (
    <div className="Spreadsheet">

          <Box sx={{ height: '75vh', width: '40vw', backgroundColor: 'white' }}>
            <DataGrid
              rows={rows}
              columns={colHeaders}
              pageSize={20}
              rowsPerPageOptions={[10]}
              experimentalFeatures={{ newEditingApi: true }}
              onCellEditStop={(params, event) => {
                updateRows(rows, params.field, params.id, event.target.value)
              }}
            />
          </Box>

    </div>
  );
}

export default Spreadsheet;