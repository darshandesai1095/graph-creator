import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";
import ColorPickerForm from "../Forms/ColorPicker.js";

import { useSelector } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPointStyle, setBoxWidth,
    setBoxHeight, setTextAlign, setPadding } from '../../features/TitleSlice'

function KeyFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)
    const keyField = useSelector((state) => state.key.value)

    const fontList = ["Arial", "Baskerville", "Courier", "Courier New", 
    "Georgia", "Geneva", "Helvetica", "Impact", "Monospace", 
    "Palatino", "Tahoma", "Times", "Times New Roman", "Verdana"]
    const fontSizeList = []
    for (let i=8; i<=30; i++) {
        fontSizeList.push(i)
    }

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Legend</h2>
                <CustomizedSwitch defaultChecked />
            </div>

            <div class='field'>
                <p>Font</p>
                <div className="field__text">
                    <DropdownForm
                        list={fontList}
                        setValue = {setFont}
                        formSize = "medium" 
                        defautValue = {keyField.font} />
                </div>
            </div>

            <div class='field'>
                <p>Text Style</p>
                <ColorPickerForm 
                    colorPickerClassName = {'key__colorPicker'}
                    setValue = {setColor}
                    defautValue = {keyField.color}/>
                <div className="field__text">
                    <DropdownForm
                        list={fontSizeList}
                        setValue = {setFontSize}
                        formSize = "small" 
                        defautValue = {keyField.fontSize}/>
                </div>      
            </div>

            <div class='field'>
                <p>Shape</p> 
            </div>
            <div class='field'>
                <p>Box Width/ Hieght</p>
            </div>
            <div class='field'>
                <p>Text Align</p>
            </div>
            <div class='field'>
                <p>Padding</p>
            </div>
        </div>
    )
}

export default KeyFieldset