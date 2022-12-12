import React, { useState } from "react";
import { useDispatch } from 'react-redux'

function Description(props) {

    const dispatch = useDispatch()

    return (
        <form className="text-form" onSubmit={(e) => e.preventDefault()}>
            <textarea 
                class="field__description" 
                rows="10" 
                cols="35"
                value={props.inputValue}
                onChange={(event) => dispatch(props.setValue(event.target.value))}
                placeholder={props.placeholder}>            
            </textarea>
        </form>
    )
}

export default Description