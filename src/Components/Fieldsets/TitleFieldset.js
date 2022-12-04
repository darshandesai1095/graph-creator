import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector } from 'react-redux'
import { setTitle, setFont } from '../../features/TitleSlice'

function TitleFieldset() {

    const titleField = useSelector((state) => state.textInput.value)
    const fontList = ["Arial", "Baskerville", "Courier", "Courier New", 
                "Georgia", "Geneva", "Helvetica", "Impact", "Monospace", 
                "Palatino", "Tahoma", "Times", "Times New Roman", "Verdana"]

    return (
        <div class='fieldset'>

            <div class='field'>
                <h2>Title</h2>
                <CustomizedSwitch defaultChecked />
            </div>

            <div class='field'>
                <p>Title</p> 
                <div className="field__text">
                    <TextForm
                        inputValue = {titleField.title}
                        setValue = {setTitle}
                        placeholder='Enter Title'/>
                </div>
            </div>

            <div class='field'>
                <p>Font</p>
                <div className="field__text">
                    <DropdownForm
                        list={fontList}
                        setValue = {setFont} />
                </div>
            </div>

            <div class='field'>
                <p>Text Style</p>
            </div>

            <div class='field'>
                <p>Position</p>
            </div>

            <div class='field'>
                <p>Padding</p>
            </div>

        </div>
    )
}

export default TitleFieldset