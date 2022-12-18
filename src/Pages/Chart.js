import react from "react";
import '../App.css'
import TitleFieldset from "../Components/Fieldsets/TitleFieldset";
import KeyFieldset from "../Components/Fieldsets/KeyFieldset";
import AxesFieldset from "../Components/Fieldsets/AxesFieldset";
import DescritpionFieldset from "../Components/Fieldsets/DescriptionFieldset";

function Chart() {
    return (
        <>
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
                <TitleFieldset/>
                <KeyFieldset/>
                <AxesFieldset/>
                <DescritpionFieldset/>
            </div>
        </>
    )
}

export default Chart