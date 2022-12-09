import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import DropdownForm from "../Forms/Dropdown";
import ColorPickerForm from "../Forms/ColorPicker";

import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPosition, setPointStyle, setBoxWidth,
    setBoxHeight, setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

function BackgroundFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)
    const keyField = useSelector((state) => state.key.value)
    const dispatch = useDispatch()

    const alignmentList = ["Top", "Left", "Bottom", "Right", "Chart Area"]
    const widthList = []
    for (let i=0; i<=200; i++) {
        if (i%10 === 0) {
            widthList.push(i)
        }
    }
    const [isChecked, setIsChecked] = useState(false)
    const handleChange = () => {
        setIsChecked(prev => !prev)
    }


    const paddingList = []
    for (let i=0; i<=30; i++) {
            paddingList.push(i)
    }

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Background</h2>
            </div>

            <div class='field'>
                <p>Type</p>
                    <DropdownForm
                        list={["Single Color", "Horizontal Gradient", "Vertical Gradient", "Radial Gradient"]}
                        setValue = {setPosition}
                        defautValue = {keyField.position}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Color</p>
                <ColorPickerForm 
                    colorPickerClassName = {"bkg__colorPicker"}
                    setValue = "0"
                    defautValue = {0}/>  
            </div>

        </div>
    )
}

export default BackgroundFieldset