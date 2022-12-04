import React, { useState } from "react";
import '../../Components/Forms/Text.css'
import { useDispatch } from 'react-redux'

function TextForm(props) {

    const dispatch = useDispatch()

    return (
        <form className="text-form">
            <input
                type='text'
                value={props.inputValue.title}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                placeholder={props.placeholder}/>
        </form>
    )
}

export default TextForm