import React from 'react'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function Navigation() {

    return (
        <div className='navigation'>
            <div>
                <CalendarViewMonthIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
            </div>
            <div>
                <InsertChartOutlinedOutlinedIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
            </div>
            <div>
                <HelpOutlineOutlinedIcon sx={{transform: 'scale(1.1)', margin: '5px', marginTop: '7px'}}/>
            </div>

        </div>
    );
}

export default Navigation;