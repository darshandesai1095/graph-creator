import React, { useState } from "react";
import './Text.css'
import { useDispatch } from 'react-redux'

function DropdownForm(props) {

    const dispatch = useDispatch()

    return (
        <form className={`text-form ${props.formSize}`}>
            <select value={props.defautValue}
                 onChange={(event) => dispatch(props.setValue(event.target.value.toLowerCase()))}>

                     {props.list.map(item => (
                        <option value={item}>{item}</option>
                     ))}

            </select>
        </form>
    )
}

export default DropdownForm