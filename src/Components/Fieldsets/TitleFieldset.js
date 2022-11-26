import React, { useState } from "react";
import '../../CSS/Fieldsets.css'
import Switch from '@mui/material/Switch';

function TitleFieldset() {


    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Title</h2>
                <Switch defaultChecked />
            </div>
            <div class='field'>
                <p>Title</p> 
            </div>
            <div class='field'>
                <p>Font</p>
            </div>
            <div class='field'>
                <p>Text Style</p>
            </div>
            <div class='field'>
                <p>Position</p>
            </div>
        </div>
    )
}

export default TitleFieldset