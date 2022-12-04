import React, { useState } from "react";
import './Text.css'
import { useDispatch } from 'react-redux'

function ColorPickerForm(props) {

    const dispatch = useDispatch()

    return (
        <form className={`text-form color-picker`}>
            <input 
                value = {props.defaultValue}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                type='color'/>
        </form>
    )
}

export default ColorPickerForm