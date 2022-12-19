import React from 'react'
import '../App.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';
import Tooltip from '@mui/material/Tooltip';

function SelectChart() {

    const style = {transform: 'scale(6)', marginBottom: '20px'}

    return (

            <>

                <div className="main-content__selection">
                    
                    <div className='main-content'>

                        <div className='chart-card'>
                            <BarChartIcon sx={style}/>
                            <p className='chart-card__type'>Bar</p>
                        </div>

                        <div className='chart-card'>
                            <TimelineIcon sx={style}/>
                            <p className='chart-card__type'>Line</p>
                        </div>

                        <div className='chart-card'>
                            <PieChartIcon sx={style}/>
                            <p className='chart-card__type'>Pie</p>
                        </div>

                    </div>
                        
                </div>

            </>
    )
}

export default SelectChart