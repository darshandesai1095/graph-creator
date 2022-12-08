import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPosition, setPointStyle, setBoxWidth,
    setBoxHeight, setAlign, setPadding } from '../../features/KeySlice'

function KeyFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)
    const keyField = useSelector((state) => state.key.value)

    const alignmentList = ["top", "left", "bottom", "right", "chart area"]

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Legend</h2>
                <CustomizedSwitch defaultChecked />
            </div>

            <div class='field'>
                <p>Position</p>
                    <DropdownForm
                        list={alignmentList}
                        setValue = {setPosition}
                        defautValue = {keyField.position}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Shape</p> 
            </div>
            <div class='field'>
                <p>Box Width / Height</p>
            </div>

            <div class='field'>
                <p>Align</p>
                    <DropdownForm
                        list={["start", "center", "end"]}
                        setValue = {setAlign}
                        defautValue = {keyField.align}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Padding</p>
            </div>
        </div>
    )
}

export default KeyFieldset