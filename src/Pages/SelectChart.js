import React from 'react'
import '../App.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';

function SelectChart(props) {

    const style = {transform: 'scale(6)', marginBottom: '20px'}

    return (

            <>

                <div className="main-content__selection">
                    
                    <div className='main-content'>

                        <div className='chart-card' onClick={() => props.setChart('BarChart')}>
                            <BarChartIcon sx={style}/>
                            <p className='chart-card__type'>Bar</p>
                        </div>

                        <div className='chart-card' onClick={() => props.setChart('LineChart')}>
                            <TimelineIcon sx={style}/>
                            <p className='chart-card__type'>Line</p>
                        </div>

                        <div className='chart-card' onClick={() => props.setChart('PieChart')}>
                            <PieChartIcon sx={style}/>
                            <p className='chart-card__type'>Pie</p>
                        </div>

                    </div>
                        
                </div>

            </>
    )
}

export default SelectChart