import React from "react";
import '../../Components/Fieldsets/Fieldsets.css'
import DropdownForm from "../Forms/Dropdown";

import { useSelector, useDispatch } from 'react-redux'
import { setXDisplay, setXLabel, setYDisplay, setYLabel } from '../../features/AxesSlice'

function CanvasFieldset() {

    const axesField = useSelector((state) => state.axes.value)
    const dispatch = useDispatch()

    const paddingList = []
    for (let i=0; i<=30; i++) {
        paddingList.push(i)
    }

    return (
        <div class='fieldset'>

            <div class='field'>
                <h2>Canvas</h2>
            </div>

            <div class='field'>
                <p>Padding Top / Bottom&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <DropdownForm
                        list={paddingList}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "small" />
                     <DropdownForm
                        list={paddingList}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "small" />
            </div>

            <div class='field'>
                <p>Padding Left / Right&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <DropdownForm
                        list={paddingList}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "small" />
                     <DropdownForm
                        list={paddingList}
                        setValue = {0}
                        defautValue = {0}
                        formSize = "small" />
            </div>

        </div>
    )
}

export default CanvasFieldset