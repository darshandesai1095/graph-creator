import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextForm from '../Forms/Text';
import { useSelector } from 'react-redux'
import { setItem1, setItem2, setItem3, setItem4, setItem5, setItem6} from '../../features/KeySlice'


export default function SimpleAccordion() {

    const keyField = useSelector((state) => state.key.value)
    const style = {marginRight: '-10px'}

  return (
    <div>
      <Accordion sx={{
          width: '300px',
          boxShadow: 'none',
          paddingRight: '0px',
          marginBottom: '-7px'
      }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{
                fontFamily: 'Trebuchet MS', 
                fontWeight: 'bold',
                color: 'rgba(107, 118, 125, 0.8)',
                fontSize: '0.85rem',
                padding: '0px',
                position: 'relative',
                left: '8px',
                marginRight: '250px'
            }}>
                Labels</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
            padding: '0px'
        }}>

            <div class='field' style={{...style, marginTop: '-5px'}}>
                <p>Item 1</p>
                    <TextForm
                        inputValue={keyField.item1}
                        setValue={setItem1}
                        placeholder={'Enter Label'}/>
            </div>

            <div class='field' style={style}>
                <p>Item 2</p>
                    <TextForm
                        inputValue={keyField.item2}
                        setValue={setItem2}
                        placeholder={'Enter Label'}/>
            </div>

            <div class='field' style={style}>
                <p>Item 3</p>
                    <TextForm
                        inputValue={keyField.item3}
                        setValue={setItem3}
                        placeholder={'Enter Label'}/>
            </div>

            <div class='field' style={style}>
                <p>Item 4</p>
                    <TextForm
                        inputValue={keyField.item4}
                        setValue={setItem4}
                        placeholder={'Enter Label'}/>
            </div>

            <div class='field' style={style}>
                <p>Item 5</p>
                    <TextForm
                        inputValue={keyField.item5}
                        setValue={setItem5}
                        placeholder={'Enter Label'}/>
            </div>

            <div class='field' style={{...style, marginBottom: '-7px'}}>
                <p>Item 6</p>
                    <TextForm
                        inputValue={keyField.item6}
                        setValue={setItem6}
                        placeholder={'Enter Label'}/>
            </div>

        </AccordionDetails>
      </Accordion>
    </div>
  );
}
