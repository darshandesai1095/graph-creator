import React from 'react'
import '../App.css'
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';
import { useNavigate } from "react-router-dom";

function SelectChart(props) {

    const navigate = useNavigate()
    const style = {transform: 'scale(6)', marginBottom: '20px'}
    const handleClick = (chart) => {
        props.setChart(chart)
        navigate("/grid")
    }

    return (

            <>

                <div className="main-content__selection">
                    
                    <div className='main-content'>

                        <div className='chart-card' onClick={() => handleClick('BarChart')}>
                            <BarChartIcon sx={style}/>
                            <p className='chart-card__type'>Bar</p>
                        </div>

                        <div className='chart-card' onClick={() => handleClick('LineChart')}>
                            <TimelineIcon sx={style}/>
                            <p className='chart-card__type'>Line</p>
                        </div>

                        <div className='chart-card' onClick={() => handleClick('PieChart')}>
                            <PieChartIcon sx={style}/>
                            <p className='chart-card__type'>Pie</p>
                        </div>

                    </div>
                        
                </div>

            </>
    )
}

export default SelectChart