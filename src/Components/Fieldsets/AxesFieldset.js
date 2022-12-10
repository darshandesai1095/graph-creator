import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import DropdownForm from "../Forms/Dropdown";
import ColorPickerForm from "../Forms/ColorPicker";
import TextForm from "../Forms/Text";

import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPosition, setPointStyle, setBoxWidth,
    setBoxHeight, setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

function AxesFieldset() {

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
                <h2>Axes</h2>
                <CustomizedSwitch defaultChecked />
            </div>

            <div class='field'>
                <p>Align</p>
                    <DropdownForm
                        list={["Start", "Center", "End"]}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "medium" />
            </div>


            <div class='field'>
                <p>Text</p> 
                <div className="field__text">
                    <TextForm
                        inputValue = {0}
                        setValue = {0}
                        placeholder='Enter Title'/>
                </div>
            </div>

            <div class='field'>
                <p>Display Ticks</p>
                <input 
                    type="checkbox"
                    className="key__checkbox"
                    checked={0}
                    onChange={0}
                />
            </div>


        </div>
    )
}

export default AxesFieldset