import React from 'react'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'; 
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CategoryIcon from '@mui/icons-material/Category';
import Tooltip from '@mui/material/Tooltip';

function Navigation() {

    const style = {transform: 'scale(1)', margin: '5px', marginTop: '7px'}

    return (
        <div className='navigation'>

            <div>
                <Tooltip title="Select Chart" arrow placement='right'>
                    <CategoryIcon sx={style}/>
                </Tooltip>
            </div>
            <div>
                <Tooltip title="Edit Data" arrow placement='right'>
                     <CalendarViewMonthIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
                </Tooltip>
            </div>
            <div>
                <Tooltip title="Style Chart" arrow placement='right'>
                    <InsertChartOutlinedOutlinedIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
                </Tooltip>
            </div>
            <div>
                <Tooltip title="About" arrow placement='right'>
                    <HelpOutlineOutlinedIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
                </Tooltip>
            </div>

        </div>
    );
}

export default Navigation;