import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddIcon from '@mui/icons-material/Add';
import { red } from '@mui/material/colors';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} sx={{
        backgroundColor: 'red',
        color: '#red',
        margin: '10px'
    }}/>
))(({ theme }) => ({
  border: `1px solid green`,
  borderRadius: '10px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));



const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon sx={{ fontSize: '1rem', color: 'white' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));



const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(2),
}));



export default function CustomizedAccordions({children}) {



  return (
    <div>

        <Accordion>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Charts</Typography>
            </AccordionSummary>
            <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Data</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Title</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Axis</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Legend</Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Styling</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Download</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>

    </div>
  );
}
