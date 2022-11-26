import React, { useState } from "react";
import '../../Components/Forms/Text.css'

function TextForm(props) {

    const [input, setInput] = useState(null)
    const handleChange = (event) => {
        setInput(event.value)
    }

    return (
        <form className="text-form">
            <input
                type='text'
                value={input}
                onChange={handleChange}
                placeholder={props.placeholder}/>
        </form>
    )
}

export default TextForm