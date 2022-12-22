import '../App.css'
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import { useLocation } from "react-router-dom"

function Header(props) {

    const location = useLocation()
    console.log("LOCATION: ", location)

    const style = {
        color: '#6B767D',
        margin: '5px',
        marginTop: '10px',
        transform: 'scale(1)',
        "&:hover": { color: "#5465ff;" },
        color: 'white',
        "&:hover": { color: "white;" },
    }

    const infoDescription = () => {

        const pageName = location.pathname

        if (pageName === '/select-chart') {
            return 'Pick A Chart'
        } else if (pageName === '/grid') {
            return 'Enter Data into the Spreadsheet Below or Click on the Wand Icon to Generate Sample Data'
        } else if (pageName === '/split-view') {
            return 'Split View'
        } else if (pageName === '/edit-chart' ) {
            return 'Customise Your Chart'
        } else if (pageName === '/about') {
            return 'About Page'               
        }

    }

  
  return (
    <div className='header'>
        <p>Graph Creator</p>
        <div className='header__toolbar'>

            <div className='download-icon'>
                <Tooltip title="Generate Sample Data" arrow placement='left'>
                    <AutoFixHighOutlinedIcon sx={style}/>
                </Tooltip>
            </div>

            <div className='download-icon' onClick={props.handleCaptureClick}>
                <Tooltip title="Download Chart" arrow placement='left'>
                    <DownloadForOfflineOutlinedIcon sx={style}/>
                </Tooltip>
            </div>

            <div>
                <Tooltip className='info-icon' title={infoDescription()} arrow placement='left'>
                    <InfoOutlinedIcon sx={style}/>
                </Tooltip>
            </div>

        </div>
    </div>
  );
}

export default Header;