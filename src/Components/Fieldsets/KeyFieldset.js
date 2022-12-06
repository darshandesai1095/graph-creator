import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";

import { useSelector } from 'react-redux'
import { setTitle } from '../../features/TitleSlice'

function KeyFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Legend</h2>
                <CustomizedSwitch defaultChecked />
            </div>
            <div class='field'>
                <p>Font</p>
            </div>
            <div class='field'>
                <p>Pointer Style</p>
            </div>
            <div class='field'>
                <p>Box Width / Height</p> 
            </div>
            <div class='field'>
                <p>Box Padding</p>
            </div>
            <div class='field'>
                <p>Position</p>
            </div>
            <div class='field'>
                <p>Align</p>
            </div>
        </div>
    )
}

export default KeyFieldset