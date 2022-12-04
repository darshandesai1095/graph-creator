import React, { useState } from "react";
import '../../Components/Forms/Text.css'
import { useDispatch } from 'react-redux'

function DropdownForm(props) {

    const dispatch = useDispatch()

    return (
        <form className="text-form">
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
            {/* <input
                type='text'
                value={props.inputValue.title}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                placeholder={props.placeholder}/> */}
        </form>
    )
}

export default DropdownForm