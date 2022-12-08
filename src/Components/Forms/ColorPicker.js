import React, { useState } from "react";
import './colorPicker.css'
import { useDispatch } from 'react-redux'

function ColorPickerForm(props) {

    const dispatch = useDispatch()

    return (
        <form className={`color-picker ${props.colorPickerClassName}`}>
            <input 
                value = {props.defaultValue}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                type='color'/>
        </form>
    )
}

export default ColorPickerForm