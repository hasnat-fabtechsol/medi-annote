import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Signup = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
    <Box className="px-md-5 my-5" sx={{width:{lg:"65%",sm:"90%"},backgroundColor:"black",color:"white",borderRadius:"19px"}}>
        <div className="my-4 mx-5">

    <h4 className='text-center mb-4'>   Sign up  </h4>
<div className="row">

    <div className="col-md-6 mb-3">
    <label  style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">First name</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} placeholder='Type here....' type="text" class="form-control text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>  
    <div className="col-md-6 mb-3  ">
    <label style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Last name</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} type="text" placeholder='Type here....' class="form-control text-light " id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>
</div>
<div className="row">

    <div className="col-md-6 mb-3">
    <label  style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Date of Birth</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} placeholder='MM/DD/YYYY' type="date" class="form-control text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>  
    <div className="col-md-6 mb-3  ">
    <label style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Email</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} type="email" placeholder='member@gmail.com' class="form-control text-light " id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>
</div>
<div className="row">

    <div className="col-md-6 mb-3">
    <label  style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Password</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} placeholder='At least 8 character' type="password" class="form-control text-light" id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>  
    <div className="col-md-6 mb-3  ">
    <label style={{color:"#A7AEBF"}} for="exampleInputEmail1" class="form-label m-0">Repeat password</label>
    <input style={{backgroundColor:"#212122",border:"0px"}} type="password" placeholder='At least 8 character' class="form-control text-light " id="exampleInputEmail1" aria-describedby="emailHelp"/>

    </div>
    <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">I agree to the Terms of Service and Privacy Policy.</label>
  </div>
  <div className="text-center mb-5 mt-3 ">

  <button type="submit" class="btn btn-primary text-center px-5  mb-4 mx-auto">Sign up</button>
  <p>Already a member? <Link  >Sign in </Link> </p>
  </div>
</div>
        </div>
  

    </Box>


    </div>
  )
}
