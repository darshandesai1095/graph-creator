import React, { useState } from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import Description from "../Forms/Description";

import { useSelector, useDispatch } from 'react-redux'
import { setDescription } from '../../features/DescriptionSlice'

function DescritpionFieldset() {

    const textInputValue = useSelector((state) => state.textInput.value)
    const descriptionField = useSelector((state) => state.description.value)
    const dispatch = useDispatch()

    return (
        <div class='fieldset'>
            <div class='field'>
                <h2>Description</h2>
            </div>


            <div class='field__description'>
                <Description
                    placeholder={"Type chart description here..."}
                    inputValue={descriptionField.description}
                    setValue={setDescription}/>
            </div>

        </div>
    )
}

export default DescritpionFieldset