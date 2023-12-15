import { Box } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Close } from '@mui/icons-material';
import { TiInputChecked } from "react-icons/ti";
export default function Passwordchanged() {

  return (

    <>
   <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>

    <Box className="px-4 my-5" sx={{width:{sm:"400px",xs:"90%"},backgroundColor:"black",color:"white",borderRadius:"19px"}}>
    <div className=" d-flex justify-content-end mt-4">
 <Close className='text-end ms-auto'  style={{backgroundColor:"red",borderRadius:"50%"}}/>
        </div>    
        <div className="my-4 mx-3">

    <div className='text-center mb-4  ' > 
      <TiInputChecked className='p-2 ' style={{color:"#2C9BF6",borderRadius:"29px", backgroundColor:"#151C29",fontSize:"49px",borderTop:"2px solid #1F649F",borderRight:"1px solid #1F649F",borderLeft:"1px solid #1F649F"}}/>  </div>
  
    
    <h6 className='text-center'> Password changed</h6>
    <p className='text-center' style={{fontSize:"9px",opacity:"0.7"}}>You’ve successfully changed your password.</p>


<div className="row ">

<Link to={"/sign-in"} className='text-center'>

  <button  type="submit" class="btn text-light btn-primary mt-5 text-center px-5 mb-2  mx-auto">Back to Sign in</button>
</Link>
  
  
</div>
        </div>
  

    </Box>


    </div>
    
    </>



  
  );
}