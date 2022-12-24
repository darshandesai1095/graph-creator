import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector, useDispatch } from 'react-redux'
import { setDisplay, setPosition, setPointStyle, setPointSize,
    setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

function KeyFieldset() {

    const keyField = useSelector((state) => state.key.value)
    const dispatch = useDispatch()

    const alignmentList = ["Top", "Left", "Bottom", "Right", "Chart Area"]
    const widthList = []
    for (let i=0; i<=200; i++) {
        if (i%10 === 0) {
            widthList.push(i)
        }
    }

    const paddingList = []
    for (let i=0; i<=30; i++) {
            paddingList.push(i)
    }

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Legend</h2>
                <CustomizedSwitch 
                    checked={keyField.display}
                    setValue={setDisplay} />               
            </div>

            <div class='field'>
                <p>Legend Labels</p>
                    <DropdownForm
                        lowerCase = {false}
                        list={['test']}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Position</p>
                    <DropdownForm
                        lowerCase = {false}
                        list={alignmentList}
                        setValue = {setPosition}
                        defautValue = {keyField.position}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Align</p>
                    <DropdownForm
                        lowerCase = {false}
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
                            lowerCase={true}
                            setValue = {setPointStyle}
                            defautValue = {keyField.setPointStyle}
                            formSize = "medium" />
            </div>

            <div class='field'>
                <p>Pointer Size</p>
                    <input
                        type='range'
                        min={0} max={5}
                        defaultValue={keyField.pointSize}
                        onChange={(e)=>dispatch(setPointSize(e.target.value))}
                        step='1'
                    />
        
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