import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector, useDispatch } from 'react-redux'
import { setTitle, setColor, setFont, setFontSize, setPosition, setPointStyle, setBoxWidth,
    setBoxHeight, setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

function KeyFieldset() {

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
                <p>Align</p>
                    <DropdownForm
                        list={["Start", "Center", "End"]}
                        setValue = {setAlign}
                        defautValue = {keyField.align}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Pointer Style</p> 
                
                    <DropdownForm
                            list={[
                                'Circle',
                                'Cross',
                                'CrossRot',
                                'Dash',
                                'Line',
                                'Rect',
                                'RectRounded',
                                'RectRot',
                                'Star',
                                'Triangle'     
                            ]}
                            setValue = {setAlign}
                            defautValue = {keyField.setPointStyle}
                            formSize = "medium" />


            </div>
            <div class='field'>
                <p>Max Width / Height&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <DropdownForm
                        list={widthList}
                        setValue = {setBoxWidth}
                        defautValue = {keyField.boxWidth}
                        formSize = "small" />
                     <DropdownForm
                        list={widthList}
                        setValue = {setBoxHeight}
                        defautValue = {keyField.boxHeight}
                        formSize = "small" />
            </div>

            <div class='field'>
                <p>Reverse</p>
                <input 
                    type="checkbox"
                    className="key__checkbox"
                    checked={keyField.isChecked}
                    onChange={() => dispatch(setIsReversed())}
                />
            </div>

        </div>
    )
}

export default KeyFieldset