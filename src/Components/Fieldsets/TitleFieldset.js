import React from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";
import DropdownForm from "../Forms/Dropdown";
import ColorPickerForm from "../Forms/ColorPicker";

import { useSelector } from 'react-redux'
import { setDisplay, setTitle, setFont, setColor, setFontSize, setPosition,
    setPaddingTop, setPaddingBottom } from '../../features/TitleSlice'

function TitleFieldset() {

    const titleField = useSelector((state) => state.textInput.value)
    const fontList = ["Arial", "Baskerville", "Courier", "Courier New", 
                "Georgia", "Geneva", "Helvetica", "Impact", "Monospace", 
                "Palatino", "Tahoma", "Times", "Times New Roman", "Verdana"]
    const fontSizeList = []
    for (let i=8; i<=30; i++) {
        fontSizeList.push(i)
    }
    const alignmentList = ["Start", "Center", "End"]
    const paddingList = []
    for (let i=0; i<=30; i++) {
        paddingList.push(i)
    }

    return (
        <div class='fieldset'>

            <div class='field'>
                <h2>Title</h2>
                <CustomizedSwitch 
                    checked={titleField.display}
                    setValue={setDisplay} />
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
                        lowerCase = {false}
                        list={fontList}
                        setValue = {setFont}
                        formSize = "medium" 
                        defautValue = {titleField.font} />
                </div>
            </div>

            <div class='field'>
                <p>Text Style</p>
                <ColorPickerForm 
                    colorPickerClassName = {"title__colorPicker"}
                    setValue = {setColor}
                    defautValue = {titleField.color}/>
                <div className="field__text">
                    <DropdownForm
                        lowerCase = {false}
                        list={fontSizeList}
                        setValue = {setFontSize}
                        formSize = "small" 
                        defautValue = {titleField.fontSize}/>
                </div>      
            </div>

            <div class='field'>
                <p>Position</p>
                    <DropdownForm                 
                        list={alignmentList}
                        setValue = {setPosition}
                        defautValue = {titleField.position}
                        lowerCase = {false}
                        formSize = "medium" />
            </div>

            <div class='field'>
                <p>Padding Top / Bottom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <DropdownForm
                        list={paddingList}
                        setValue = {setPaddingTop}
                        defautValue = {titleField.paddingTop}
                        formSize = "small" />
                     <DropdownForm
                        list={paddingList}
                        setValue = {setPaddingBottom}
                        defautValue = {titleField.paddingBottom}
                        formSize = "small" />
            </div>

        </div>
    )
}

export default TitleFieldset