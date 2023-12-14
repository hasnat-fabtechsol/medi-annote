import { Box } from '@mui/material';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Link } from 'react-router-dom';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { Close } from '@mui/icons-material';

export default function Signin() {


  return (

    <>
   <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>

    <Box className="px-md-4 my-5" sx={{width:{sm:"400px",xs:"90%"},backgroundColor:"black",color:"white",borderRadius:"19px"}}>
    <div className=" d-flex justify-content-end mt-4">

        </div>    
        <div className="my-4 mx-4">

    <div className='text-center mb-4  ' > 
      <MailOutlinedIcon className='p-2 ' style={{color:"#2C9BF6",borderRadius:"29px", backgroundColor:"#151C29",fontSize:"49px",borderTop:"2px solid #1F649F",borderRight:"1px solid #1F649F",borderLeft:"1px solid #1F649F"}}/>  </div>
  
    
    <h6 className='text-center'> Sign in</h6>
    <p className='text-center' style={{fontSize:"9px",opacity:"0.7"}}>A code was sent to miona.alshlowi@gmail.com</p>

    <div className="row">
    <div className=" mb-3 p-0 ">
<label style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Email</label>
<input style={{backgroundColor:"#212122",border:"0px"}} type="email" placeholder='member@gmail.com' class="form-control text-light " id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>
<div className=" mb-3 p-0">
<label  style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Password</label>
<input style={{backgroundColor:"#212122",border:"0px"}} placeholder='********' type="password" class="form-control text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>

</div>  


<div className="d-flex justify-content-between align-items-center">

<div class="mb-3 ps-2 ms-1 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label style={{fontSize:"11px"}} class="form-check-label" for="exampleCheck1">Remember password</label>
  </div>

  <p style={{fontSize:"11px"}}> <Link to={"/password-recover"} style={{textDecoration:"none"}}>Forgot password?</Link></p>
</div>

</div>



<div className="row">

  <button  type="submit" class="btn text-light btn-primary text-center px-5 mb-2  mx-auto">Sign in</button>
  
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
