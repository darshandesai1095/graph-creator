import React from 'react'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'; 
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import SplitscreenIcon from '@mui/icons-material/Splitscreen';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { NavLink } from "react-router-dom"

function Navigation() {

    const style = {transform: 'scale(1.1)', margin: '5px', marginTop: '7px' }
    let activeStyle = { color: "#5465ff", opacity: '0.9' };
    let notActiveStyle = { color: "#6c757d" };

    return (
        <div className='navigation'>
            
            <NavLink to="/select-chart" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                <div>
                    <Tooltip title="Select Chart" arrow placement='right'>
                        <CategoryOutlinedIcon sx={style}/>
                    </Tooltip>
                </div>
            </NavLink>

            <NavLink to="/grid" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                <div>
                    <Tooltip title="Edit Data" arrow placement='right'>
                        <CalendarViewMonthIcon sx={style}/>
                    </Tooltip>
                </div>
            </NavLink>

            <NavLink to="/split-view" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                <div>
                    <Tooltip title="Split View" arrow placement='right'>
                        <SplitscreenIcon sx={{...style, transform: 'rotate(90deg)'}}/>
                    </Tooltip>
                </div>
            </NavLink>

            <NavLink to="/edit-chart" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                <div>
                    <Tooltip title="Style Chart" arrow placement='right'>
                        <InsertChartOutlinedOutlinedIcon sx={style}/>
                    </Tooltip>
                </div>
            </NavLink>

            <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : notActiveStyle}>
                <div>
                    <Tooltip title="About" arrow placement='right'>
                        <HelpOutlineOutlinedIcon sx={style}/>
                    </Tooltip>
                </div>
            </NavLink>

        </div>
    );
}

export default Navigation;