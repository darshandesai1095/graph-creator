import React from 'react'
import '../App.css'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';


function Grid(props) {
    return (
        <>

            <div className="main-content">
                <div className='main-content__chart'>

                    <div className="Spreadsheet">
                        <Box sx={{ height: '630px', width: '40vw', backgroundColor: 'white' }}>
                            <DataGrid
                                rows={props.rows}
                                columns={props.colHeaders}
                                pageSize={20}
                                rowsPerPageOptions={[10]}
                                experimentalFeatures={{ newEditingApi: true }}
                                onCellEditStop={(params, event) => {
                                props.updateRows(props.rows, params.field, params.id, event.target.value)
                                }}
                            />
                        </Box>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Grid