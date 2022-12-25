// function to generate a blank spreadsheet which can be populated by user

// column headers from A to G
function setTableColumns() {
    const columnHeaders = [
        { field: 'id', headerName: ' ', width: 50, editable: false, hide: false},
    ]

    for (let i=0; i<=6; i++) {
        let header = {
                field:          `field_${i+1}`,
                headerName:     String.fromCharCode(65 + i),
                width:          80,
                editable:       true,
                headerAlign:    'center'
        }
        columnHeaders.push(header)
    }
    
    return columnHeaders
}

// 10 empty rows per column
function setTableRows() {
    const rows = [] 

    for (let i=0; i<12; i++) {
        let row = {
                id: i+1,
                field_1: null,
                field_2: null,
                field_3: null,
                field_4: null,
                field_5: null,
                field_6: null,              
                field_7: null,
                field_8: null,
                field_9: null,
                field_10: null,
                field_11: null,
                field_12: null
        }
        rows.push(row)
    }

    return rows
}

export {setTableColumns, setTableRows}