import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor:"black",

}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Test() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <div className='flex flex-col p-5 bg-gray-800'>
        <p className='font-bold flex items-center text-[50px]  opacity- justify-center mt-10'> FAQ </p>
        <p className=' flex text-[35px] text-yellow-500 items-center justify-center mb-15'>Have Questions? We got you covered</p>
        
      </div>
      <div className='flex items-center justify-center bg-gray-500'>
      <div className='mt-[50px] md:w-[1000px] rounded-[30px] mb-[50px] bg-black' >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography className='text-white hover:border-b border-white'>What services does No Idlos Barber Shop offer?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-yellow-500 pl-7'>
          No Idlos Barber Shop offers a range of grooming services exclusively for men, including haircuts, beard trims, hot towel shaves, and styling
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className='text-white hover:border-b border-white'>How can I book an appointment at No Idlos Barber Shop?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-yellow-500 pl-7'>
          To book an appointment at No Idlos Barber Shop, you can either call our salon directly or use our convenient online booking system on our website. Simply choose your preferred date and time, and we'll confirm your appointment.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className='text-white hover:border-b border-white'>Are walk-ins accepted at No Idlos Barber Shop?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-yellow-500 pl-7'>
          While we recommend booking an appointment to secure your preferred time slot, we also welcome walk-in customers based on availability. However, we encourage you to check our schedule or call ahead to ensure we can accommodate you.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography className='text-white hover:border-b border-white'>Do you offer specific grooming packages or memberships?

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-yellow-500 pl-7'>
          Yes, at No Idlos Barber Shop, we offer various grooming packages and memberships tailored to meet different needs. These packages may include multiple services at discounted rates or additional benefits for frequent visitors. Feel free to inquire about our packages to find the one that suits you best.

          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography className='text-white hover:border-b border-white'>What are the operating hours of No Idlos Barber Shop?

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='text-yellow-500 pl-7'>
          No Idlos Barber Shop is open from 11:00am to 9:00pm. However, it's advisable to check our website or contact us directly for the most up-to-date information on our operating hours, as they may be subject to change.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </div>
      </div>
    </div>
  );
}