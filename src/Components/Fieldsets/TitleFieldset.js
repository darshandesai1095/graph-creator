import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";

import { useSelector } from 'react-redux'
import { setTitle } from '../../features/Title'

function TitleFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)

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
                        inputValue = {textInputValue}
                        setValue = {setTitle}
                        placeholder='Enter Title'/>
                </div>
            </div>
            <div class='field'>
                <p>Font</p>
                <div className="field__text">
                    <DropdownForm
                        inputValue = {textInputValue}
                        setValue = {setTitle}
                        placeholder='Enter Title'/>
                </div>
            </div>
            <div class='field'>
                <p>Text Style</p>
            </div>
            <div class='field'>
                <p>Position</p>
            </div>
        </div>
    )
}

export default TitleFieldset