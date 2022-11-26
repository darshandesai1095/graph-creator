import './App.css'
import { useState } from 'react';
import BarChart from './Charts/BarChart.js'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Fieldset from './Components/Fieldsets/TitleFieldset';


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
        <div className='main-content__chart'>
          <BarChart datasets={data}
                      labels={labels}
                  

          />
        </div>
      </div>

      <div className='sidebar'>
          {/* <Box sx={{ height: '50vh', width: 360 }}>
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
          </Box> */}

          <Fieldset/>
          
          <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac
          </p>
        
      </div>

    </div>
  );
}

export default App;