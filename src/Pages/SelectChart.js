import React from 'react'
import '../App.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';
import Tooltip from '@mui/material/Tooltip';

function SelectChart() {

    const style = {transform: 'scale(6)'}

    return (

            <>

                <div className="main-content__selection">
                    
                    <div className='main-content'>

                        <div className='chart-card'>
                                <BarChartIcon sx={style}/>
                        </div>

                        <div className='chart-card'>
                            <TimelineIcon sx={style}/>
                        </div>

                        <div className='chart-card'>
                            <PieChartIcon sx={style}/>
                        </div>

                    </div>
                        
                </div>

            </>
    )
}

export default SelectChart