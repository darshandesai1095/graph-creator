// function to generate a blank spreadsheet which can be populated by user

export function setColumns() {
    const columnHeaders = []

    for (let i=0; i<=26; i++) {
        let header = {
                field:          i===0 ? 'id' : `field_${i-1}`,
                headerName:     i===0 ? ' '  : String.fromCharCode(65 + i-1),
                width:          80,
                editable:       true,
                headerAlign:    'center'
        }
        columnHeaders.push(header)
    }
    
    return columnHeaders
}

export function setRows() {
    const rows = [] 

    for (let i=0; i<=24; i++) {
        let row = {
                id: i+1,
        }
        rows.push(row)
    }
    
    return rows
}