import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import CustomizedSwitch from "../MUIComponents/CustomizedSwitch";
import TextForm from "../Forms/Text";

function TitleFieldset() {

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Title</h2>
                <CustomizedSwitch defaultChecked />
            </div>
            <div class='field'>
                <p>Title</p> 
                <div className="field__text">
                    <TextForm placeholder='Enter Title'/>
                </div>
            </div>
            <div class='field'>
                <p>Font</p>
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