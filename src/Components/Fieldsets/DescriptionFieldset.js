import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import DropdownForm from "../Forms/Dropdown";
import ColorPickerForm from "../Forms/ColorPicker";
import TextForm from "../Forms/Text";
import Description from "../Forms/Description";

import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPosition, setPointStyle, setBoxWidth,
    setBoxHeight, setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

function DescritpionFieldset() {

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
                <h2>Description</h2>
            </div>


            <div class='field__description'>
                <Description
                    placeholder={"Type chart description here..."}/>
            </div>

        </div>
    )
}

export default DescritpionFieldset