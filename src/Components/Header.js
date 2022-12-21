import '../App.css'
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Header() {

    const style = {
        color: '#6B767D',
        marginRight: '20px',
        marginLeft: '20px',
        marginTop: '7px',
        transform: 'scale(1)',
        "&:hover": { color: "#5465ff;" }

    }
  
  return (
    <div className='header'>
        <p>Graph Creator</p>
        <div className='download-icon'>
            <Tooltip title="Download Graph" arrow placement='left'>
                <FileDownloadIcon sx={style}/>
            </Tooltip>
        </div>
    </div>
  );
}

export default Header;