import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector, useDispatch } from 'react-redux'
import { setDisplay, setPosition, setPointStyle, setPointSize,
    setAlign, setPadding, setIsReversed } from '../../features/KeySlice'

import CustomizedAccordions from "../MUIComponents/Accordion";

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
                <CustomizedAccordions/>
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
                            lowerCase={false}
                            setValue = {setPointStyle}
                            defautValue = {keyField.pointStyle}
                            formSize = "medium" />
            </div>

            <div class='field slide'>
                <p>Pointer Size</p>
                    <input
                        className="slider"
                        type='range'
                        min={0} max={6}
                        defaultValue={keyField.pointSize}
                        onChange={(e)=>dispatch(setPointSize(e.target.value))}
                        step='0.5'
                    />
        
            </div>

            <div class='field' style={{marginTop: '8px'}}>
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