import React, { useState } from "react";
import './Text.css'
import { useDispatch } from 'react-redux'

function TextForm(props) {

    const dispatch = useDispatch()

    return (
        <form className="text-form" onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                rows={props.rows}
                cols={props.cols}
                value={props.inputValue}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                placeholder={props.placeholder}/>
        </form>
    )
}

export default TextForm