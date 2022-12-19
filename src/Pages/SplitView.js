import React from 'react'
import { useSelector } from 'react-redux'
import BarChart from "../Charts/BarChart";
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';

export default function SplitView(props) {

    const titleField = useSelector((state) => state.textInput.value)

    return (
        <div className="main-content">

            <div className='main-content__chart' style={{marginRight: '10px'}}>

                {
                    titleField.display 

                    &&

                    <h3 className='chart__title'
                        style={{alignSelf: `${titleField.position}`,
                                paddingTop: `${titleField.paddingTop}px`,
                                paddingBottom: `${titleField.paddingBottom}px`,
                                paddingLeft: `${titleField.paddingLeft}px`,
                                paddingRight: `${titleField.paddingRight}px`,
                                fontFamily: `${titleField.font}`,
                                fontSize: `${titleField.fontSize}px`,
                                color: `${titleField.color}`}
                            }
                        >{titleField.title}
                    </h3>
                }

                <div style={{width: '700px', height: '400px'}}>
                    <BarChart
                        labels={props.labels}
                        datasets={props.data}
                    />
                </div>

            </div>


            <div className="Spreadsheet" style={{transform: 'scale(0.9)', marginLeft: '10px'}}>
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
    )
}