import React from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import TextForm from "../Forms/Text";

import { useSelector, useDispatch } from 'react-redux'
import { setXDisplay, setXLabel, setYDisplay, setYLabel } from '../../features/AxesSlice'


function AxesFieldset() {

    const axesField = useSelector((state) => state.axes.value)
    const dispatch = useDispatch()


    return (
        <div class='fieldset'>

            <div class='field'>
                <h2>Axes</h2>
            </div>
            
            <div class='field'>
                <p>X Axis</p> 
                <input 
                    type="checkbox"
                    className="key__checkbox"
                    checked={axesField.xDisplay}
                    onChange={() => dispatch(setXDisplay())}
                />
            </div>

            <div class='field'>
                <p>X Axis Label</p>
                <div className="field__text">
                    <TextForm
                        inputValue = {axesField.xLabel}
                        setValue = {setXLabel}
                        placeholder='X Axis Label'/>
                </div>
            </div>

            <div class='field'>
                <p>Y Axis</p> 
                <input 
                    type="checkbox"
                    className="key__checkbox"
                    checked={axesField.yDisplay}
                    onChange={() => dispatch(setYDisplay())}
                />
            </div>

            <div class='field'>
                <p>Y Axis Label</p>
                <div className="field__text">
                    <TextForm
                        inputValue = {axesField.yLabel}
                        setValue = {setYLabel}
                        placeholder='Y Axis Label'/>
                </div>
            </div>

        </div>
    )
}

export default AxesFieldset