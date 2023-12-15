import { Box } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Close } from '@mui/icons-material';

export default function EmailConfirmation() {
  const [otp, setOtp] = useState('');
  const renderInput = (props, index) => {
    return (
      <input
        {...props}
        className="otp-input"
        key={index}
        placeholder="-"
      />
    );
  };
  return (

    <>
   <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>

    <Box className="px-md-4 my-5" sx={{width:{sm:"400px",xs:"90%"},backgroundColor:"black",color:"white",borderRadius:"19px"}}>
    <div className=" d-flex justify-content-end mt-4">
 <Close className='text-end ms-auto'  style={{backgroundColor:"red",borderRadius:"50%"}}/>
        </div>    
        <div className="my-4 mx-3">

    <div className='text-center mb-4  ' > 
      <MailOutlinedIcon className='p-2 ' style={{color:"#2C9BF6",borderRadius:"29px", backgroundColor:"#151C29",fontSize:"49px",borderTop:"2px solid #1F649F",borderRight:"1px solid #1F649F",borderLeft:"1px solid #1F649F"}}/>  </div>
  
    
    <h6 className='text-center'> Email Confirmation</h6>
    <p className='text-center' style={{fontSize:"9px",opacity:"0.7"}}>A code was sent to miona.alshlowi@gmail.com</p>
<div className=" d-flex justify-content-center mb-5">

      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        separator={<span className='px-3'></span>}
        renderInput={renderInput}
      />

</div>

<div className="row">
<p className='text-center' style={{fontSize:"11px",color:"#1F649F"}}>Send again</p>

  <button style={{backgroundColor:"#222127"}} type="submit" class="btn text-light text-center px-5 mb-2  mx-auto">Done</button>
  
  <div className="text-center mb-5  ">
  <p style={{fontSize:"10px"}}>Have some problems? <Link  >Go back to Sign up </Link>   </p>
  </div>
</div>
        </div>
  

    </Box>


    </div>
    
    </>



  
  );
}