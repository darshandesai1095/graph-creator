import react from "react";
import '../App.css'
import TitleFieldset from "../Components/Fieldsets/TitleFieldset";
import KeyFieldset from "../Components/Fieldsets/KeyFieldset";
import AxesFieldset from "../Components/Fieldsets/AxesFieldset";
import DescritpionFieldset from "../Components/Fieldsets/DescriptionFieldset";
import { useSelector } from 'react-redux'
import BarChart from "../Charts/BarChart";

import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

function Chart(props) {

    const handleCaptureClick = async () => {
        const canvas = await html2canvas(document.getElementsByClassName("main-content__chart")[0])
        const dataURL = canvas.toDataURL('image/png')
        downloadjs(dataURL, 'download.png', 'image/png')
    }

    const titleField = useSelector((state) => state.textInput.value)

    return (
        <>
        
            <div className='sidebar'>
                <TitleFieldset/>
                <KeyFieldset/>
                <AxesFieldset/>
                <DescritpionFieldset/>
            </div>

            <div className="main-content">
                <div className='main-content__chart'>

                    {
                        titleField.display 

                        &&

                        <h3 className='chart__title'
                            style={{alignSelf: `${titleField.position}`,
                                    paddingTop: `${titleField.paddingTop}px`,
                                    paddingBottom: `${titleField.paddingBottom}px`,
                                    paddingLeft: `${titleField.paddingLeft}px`,
                                    paddingRight: `${titleField.paddingRight}px`,
                                    fontFamily: `${titleField.font}`,
                                    fontSize: `${titleField.fontSize}px`,
                                    color: `${titleField.color}`}
                                }
                            >{titleField.title}
                        </h3>
                    }

                    <div style={{width: '700px', height: '400px'}}>
                        <BarChart
                            labels={props.labels}
                            datasets={props.data}
                            chartType={props.chartType}
                        />
                    </div>

                </div>

                <li>
                    <a href="#" onClick={handleCaptureClick}>
                    Capture
                    </a>
                </li>

            </div>

        </>
    )
}

export default Chart