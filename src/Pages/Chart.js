import react from "react";
import '../App.css'
import TitleFieldset from "../Components/Fieldsets/TitleFieldset";
import KeyFieldset from "../Components/Fieldsets/KeyFieldset";
import AxesFieldset from "../Components/Fieldsets/AxesFieldset";
import DescritpionFieldset from "../Components/Fieldsets/DescriptionFieldset";
import { useSelector } from 'react-redux'

function Chart() {

    const titleField = useSelector((state) => state.textInput.value)

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

                <TitleFieldset/>
                <KeyFieldset/>
                <AxesFieldset/>
                <DescritpionFieldset/>
            </div>
        </>
    )
}

export default Chart